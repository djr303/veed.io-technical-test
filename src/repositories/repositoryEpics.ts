import { combineEpics } from "redux-observable";
import { filter, map, mergeMap } from "rxjs/operators";
import { from } from "rxjs";

import {
  requestRepositories,
  requestRepositoriesSuccess
} from "./repositoryReducer";

const requestRepositoryEpic = (action$: any, _: any, { repositories }: any) =>
  action$.pipe(
    filter((action: any) => action.type === requestRepositories),
    mergeMap((action: any) =>
      from(repositories()).pipe(
        map((json: any) => ({ type: requestRepositoriesSuccess, payload: json }))
      )
    )
  );

export default combineEpics(requestRepositoryEpic);
