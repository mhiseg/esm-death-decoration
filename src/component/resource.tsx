import {
  CurrentUserWithResponseOption,
  getCurrentUser,
} from "@openmrs/esm-framework";
import { mergeMap } from "rxjs/operators";

export function getSynchronizedCurrentUser(
  opts: CurrentUserWithResponseOption
) {
  return getCurrentUser(opts).pipe(mergeMap(async (user) => user));
}
