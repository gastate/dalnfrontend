import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "environments/environment";
import { Observable } from "rxjs";


/*
*   Executes commands on EC2 instance
*/
@Injectable()
export class Ec2Service {
    private endPoint = environment.API_ENDPOINTS;
    private stage=  environment.production ? "prod" : "dev"
    constructor(private _http: Http) {

    }

    restartWorker(): Observable<string> {
        return this.runcommand(this.stage, "./restart_worker.sh " + this.stage)
    }

    log(): Observable<string> {
        var stage_name = environment.production ? "Prod" : "Dev"
        return this.runcommand(this.stage, "tail -n 100 DALNUploadService" + stage_name + ".out")
    }

    runcommand(stage: string, command: string): Observable<string>{
        return (
            this._http
                .get(this.endPoint.execute_ec2 + stage + "/" + encodeURIComponent(command))
                .map( res => {
                    return res.json();
                })
                //...errors if any
                .catch((error: any) =>
                    Observable.throw(error.json().error || "Server error")
                )
        );
    }
}