import { ofType } from 'redux-observable';
import { catchError, map, switchMap } from 'rxjs/operators';
import { showErrorMessage } from '../_commonActions/error.actions';

import { getTest } from '../services/test.services';
import { getTestPending, getTestSuccess } from '../actions/test.actions';

/** Get Test */
export const getTestEffect$ = (actions$) =>
  actions$.pipe(
    ofType(getTestPending.toString()),
    switchMap(() =>
      getTest().pipe(
        map((result) => getTestSuccess(result)),
        catchError(showErrorMessage)
      )
    )
  );
