/*
 * @Author: shimingxia
 * @Date: 2022-06-07 19:30:22
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-06-07 19:32:23
 * @Description: 
 */
import {RouterContext} from './RouterContext'

const withRouter = WrappedComponent => props => {
  return (
    <RouterContext.Consumer>
      {context => <WrappedComponent {...props} {...context} />}
    </RouterContext.Consumer>
  )
}

export default withRouter