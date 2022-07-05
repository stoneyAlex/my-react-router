/*
 * @Author: shimingxia
 * @Date: 2022-06-07 19:05:08
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-06-07 19:34:04
 * @Description: 
 */
import BrowserRouter from "./BrowserRouter";
import Route from "./Route";
import Link from "./Link";
import Switch from "./Switch";
import {useHistory, useLocation, useRouteMatch, useParams} from "./hooks";
import withRouter from "./withRouter";
import Redirect from "./Redirect";

export {
  BrowserRouter,
  Route,
  Link,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
  withRouter,
  Redirect
};