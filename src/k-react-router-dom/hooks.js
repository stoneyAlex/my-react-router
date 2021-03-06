/*
 * @Author: shimingxia
 * @Date: 2022-06-07 19:29:49
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-06-07 19:29:58
 * @Description: 
 */
import {RouterContext} from "./RouterContext";
import {useContext} from "react";

export function useHistory() {
  return useContext(RouterContext).history;
}

export function useLocation() {
  return useContext(RouterContext).location;
}
export function useRouteMatch() {
  return useContext(RouterContext).match;
}
export function useParams() {
  const match = useContext(RouterContext).match;
  return match ? match.params : {};
}

// useHistory,
// useLocation,
// useRouteMatch,
// useParams