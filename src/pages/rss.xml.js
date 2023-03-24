import { rss } from '@astrojs/rss'
import { SITE_TITLE, SITE_DESCRIPTION } from '../config.ts'

const get = () => rss({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION
})

export default get
