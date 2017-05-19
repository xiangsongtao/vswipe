import Swipe from './Swipe'
import SwipeItem from './SwipeItem'

let VSwipe = {
  install: function (Vue, options) {
    Vue.component('Slides', Swipe)
    Vue.component('Slid', SwipeItem)
  }
}

export default VSwipe

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VSwipe)
}
