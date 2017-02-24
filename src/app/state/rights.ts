import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppStore } from './app-store';

const UPDATE_RIGHTS = 'UPDATE_RIGHTS';

export interface RightsProfile {
    rightsConsent: string;
    rightsRelease: string;
}

const initialState = {
    rightsConsent: '',
    rightsRelease: ''
}

export const rights = (state: RightsProfile = initialState, action: Action) => {
  switch (action.type) {
    case UPDATE_RIGHTS:
      return action.payload;
    default:
      return state;
  }
};

@Injectable()
export class RightsService {
  rights$: Observable<RightsProfile> = this.store.select('rights');
  constructor(private store: Store<AppStore>) {}

  updateRights(rights) {
    this.store.dispatch({type: UPDATE_RIGHTS, payload: rights});
  }
}
