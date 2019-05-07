import { Component, OnInit } from '@angular/core';
import { PostService } from 'app/services/post.service';
import { Ec2Service } from '../../../services/ec2.service';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

    //if the worker is restarting
    sending_command: boolean
    operation_log: string
    constructor(public ec2Service: Ec2Service) { }

    ngOnInit() {
    }

    restartWorker() {
        if (confirm("Are you sure you want to restart worker service?")){
            this.sending_command = true
            this.ec2Service.restartWorker().subscribe((r) => {
                console.log("Worker restart result " + r)
                this.sending_command = false
                this.operation_log = r
            })
        }
    }

    log() {
        this.sending_command = true
            this.ec2Service.log().subscribe((r) => {
                console.log("Worker log result " + r)
                this.sending_command = false
                this.operation_log = r
            })
    }

}
