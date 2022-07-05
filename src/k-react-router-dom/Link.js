/*
 * @Author: shimingxia
 * @Date: 2022-06-07 19:16:53
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-06-07 19:18:59
 * @Description: 
 */
import React from "react";
import {RouterContext} from "./RouterContext";

export default function Link({to, children, ...restProps}) {
  const context = React.useContext(RouterContext)
  const handleClick = event => {
    event.preventDefault();
    context.history.push(to)
  }
  return (
    <a href={to} {...restProps} onClick={handleClick}>
      {children}
    </a>
  )
}