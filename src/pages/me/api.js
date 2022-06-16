import {fetchGet} from "../../utils/fetch";
import {userUrl} from "../../utils/url";

export const checkUser = (params) => {
  return fetchGet(userUrl.checkUser, {params})
}