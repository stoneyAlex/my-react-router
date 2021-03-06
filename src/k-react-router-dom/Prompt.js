/*
 * @Author: shimingxia
 * @Date: 2022-06-22 10:49:59
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-06-22 10:53:18
 * @Description: 
 */
import React from 'react'
import { RouterContext } from './RouterContext'
import LifeCycle from './LifeCycle'

export default function Prompt({message, when = true}) {
  return (
    <RouterContext.Consumer>
      {
        context => {
          if(!when) {
            return null
          }
          let method = context.history.block
          return (
            <LifeCycle
              onMount = {self => {
                self.release = method(message)
              }}
              onUnmount = {self => {
                self.release()
              }}
            />
          )
        }
      }
    </RouterContext.Consumer>
  )
}