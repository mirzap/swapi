import _ from 'lodash'

export default function split (str, separator) {
  separator = separator || ''
  if (_.isString(str)) {
    return str.replace(/\s/g, '').split(separator)
  }
  return str
}
