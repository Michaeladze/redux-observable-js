import { createAction } from 'redux-actions';
import { of } from 'rxjs';

export const errorAction = createAction('[Error] ===!!!!!!!!!===');

export const showErrorMessage = (e) => {
  console.log(e.message);
  return of(errorAction());
};
