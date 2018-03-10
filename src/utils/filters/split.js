import _ from 'lodash'

export default function split (str, separator) {
  separator = separator || ''
  if (_.isString(str)) {
    return str.split(separator)
  } else {
    return str
  }
}
