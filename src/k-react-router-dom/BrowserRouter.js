/*
 * @Author: shimingxia
 * @Date: 2022-06-07 19:05:44
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-06-07 19:08:23
 * @Description: 
 */
import React, { Component } from 'react'
import {createBrowserHistory} from 'history'
import Router from './Router'

export default class BrowserRouter extends Component {
  constructor(props) {
    super(props)
    this.history = createBrowserHistory()
  }
  render() {
    return <Router history={this.history} children={this.props.children} />
  }
}