import Localize from 'v-localize'
import store from '@/store'
import bs from './bs'
import en from './en'

const localize = Localize.config({
  default: store.state.language,
  available: ['en', 'bs'],
  fallback: 'en',
  localizations: { bs, en }
})

export default localize
