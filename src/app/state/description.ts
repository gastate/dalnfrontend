import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppStore } from './app-store';

const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';

export interface DescriptionProfile {
    title : string;
    // description : string;
    // // dateCreated : string;
    // subject : string [];
    // coverageNationality : string [];
    // coverageRegion : string [];
    // coverageStateProvince : string [];
    // // coveragePeriod : string [];
    // language : string [];
    // otherGeo: string []; // ??????????????

}

const initialState = {
    title : ''
    // description: '',
    // dateCreated: '',
    // subject : [],
    // coverageNationality : [],
    // coverageRegion : [],
    // coverageStateProvince : [],
    // coveragePeriod : [],
    // language : [],
    // otherGeo : []
}

export const description = (state: DescriptionProfile = initialState, action: Action) => {
  switch (action.type) {
    case UPDATE_DESCRIPTION:
      return action.payload;
    default:
      return state;
  }
};

@Injectable()
export class DescriptionService {
  description$: Observable<DescriptionProfile> = this.store.select('description');
  constructor(private store: Store<AppStore>) {}

  updateDescription(description) {
    this.store.dispatch({type: UPDATE_DESCRIPTION, payload: description});
  }
}
