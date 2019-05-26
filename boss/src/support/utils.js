import { getItem } from "../support/storage";
import Constants from "../support/constants";
export function getRedirectPath(to) {
  let user = getItem(Constants.USER);
  if (user) {
    if (user.avatar) {
      if (to) {
        return `/${to}`;
      } else {
        return `${Constants.ROUTER_PREFIX_DASHBROAD}/${user.type}`;
      }
    } else {
      return `/${user.type}/info`;
    }
  } else {
    return "/login";
  }
}
