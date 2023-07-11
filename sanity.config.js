import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {muxInput} from 'sanity-plugin-mux-input'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'African Biomed Group',

  projectId: 'kubhsqme',
  dataset: 'production',

  plugins: [deskTool(), muxInput({mp4_support: 'standard'}), media(),visionTool(), ],

  schema: {
    types: schemaTypes,
  },
})
