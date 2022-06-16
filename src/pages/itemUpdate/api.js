import {fetchGet, fetchPost} from "../../utils/fetch";
import {itemUrl} from "../../utils/url";

export const updateItemApi = (data) => {
  return fetchPost(itemUrl.update, data)
}
