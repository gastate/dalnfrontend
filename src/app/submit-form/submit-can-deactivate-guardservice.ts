import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SubmitContainerStateChangeResponse } from 'aws-sdk/clients/ecs';
import { SubmitFormComponent } from './submit-form.component';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<SubmitFormComponent> {

    canDeactivate(component: SubmitFormComponent, route: ActivatedRouteSnapshot) {
        return component.canDeactivate ? component.canDeactivate(route) : true;
    }

}