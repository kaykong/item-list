import {fetchGet, fetchPost} from "../../utils/fetch";
import {itemUrl} from "../../utils/url";

export const addItem = (data) => {
  return fetchPost(itemUrl.add, data)
}

export const getItemDistinctCategoryByUserId = (params) => {
  return fetchGet(itemUrl.getItemDistinctCategoryByUserId, {params})
}

export const getItemDistinctPositionByUserId = (params) => {
  return fetchGet(itemUrl.getItemDistinctPositionByUserId, {params})
}