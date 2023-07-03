import {defineField, defineType} from 'sanity'
import { PlayIcon } from '@sanity/icons'

export default defineType({
  name: 'videos',
  title: 'Videos',
  icon: PlayIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'videoname',
      title: 'Video name',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Youtube link',
      type: 'url',
      options: {
        hotspot: true,
      },
    }),
  ],
})
