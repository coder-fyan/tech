import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue) //初始vue的——init方法
stateMixin(Vue) //初始vue中对data操作的方法列如 set,watch,computed...
eventsMixin(Vue) //初始vue中对event的方法，比如on，off，emit
lifecycleMixin(Vue) //初始对vue生命周期的定义
renderMixin(Vue)  //初始vue中的render方法

export default Vue
