import _ from 'lodash'
import filters from './filters'

/**
 * Filters plugin loads all available filter functions so we can later easier inject them into Vue component
 *
 * @type {{install(*): void}}
 */
const Filters = {
  install (Vue) {
    _.each(filters, function (value, key) {
      if (Vue.filter(key)) {
        console.warn(`Filter [${key}} has already been installed.`)
      } else {
        // console.info(`Filter [${key}] has been installed.`)
        Vue.filter(key, value)
      }
    })
  }
}

export default Filters
