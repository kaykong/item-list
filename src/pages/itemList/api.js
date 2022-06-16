import {fetchGet} from "../../utils/fetch";
import {itemUrl} from "../../utils/url";

export const getItemListByPage = (params) => {
  return fetchGet(itemUrl.getItemListByPage, {params})
}