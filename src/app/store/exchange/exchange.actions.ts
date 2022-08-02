import {createAction, props} from '@ngrx/store';

export const add = createAction('[Add operation]', props<{ payload: any }>());
