/*
 * @Author: shimingxia
 * @Date: 2022-06-07 19:19:14
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-06-07 19:28:13
 * @Description: 
 */
import React, {Component} from "react";
import {RouterContext} from "./RouterContext";

export default class Redirect extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const {history} = context
          const {to, push = false} = this.props
          return (
            <LifeCycle
              onMount={() => {
                push ? history.push(to) : history.replace(to);
              }}
            />
          )
        }}
      </RouterContext.Consumer>
    )
  }
}

class LifeCycle extends Component {
  componentDidMount() {
    if(this.props.onMount) {
      this.props.onMount.call(this, this)
    }
  }
  render() {
    return null
  }
}