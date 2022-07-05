/*
 * @Author: shimingxia
 * @Date: 2022-06-22 10:46:01
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-06-22 10:53:25
 * @Description: 
 */
import React, {Component} from 'react'

export default class LifeCycle extends Component {
  componentDidMount() {
    if(this.props.onMount) {
      this.props.onMount.call(this, this)
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: ', this)
    if(this.props.onUnmount) {
      this.props.onUnmount.call(this, this)
    }
  }
  render() {
    return null
  }
}