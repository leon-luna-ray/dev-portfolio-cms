import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media';
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'dev-cms',

  projectId: 'bepi633k',
  dataset: 'production',

  plugins: [
    deskTool(
      {
        structure: (S) =>
          S.list()
            .title('Content')
            .items([
              S.listItem()
                .title('Global')
                .child(S.document().schemaType('globalSettings').documentId('globalSettings')),
              S.listItem()
                .title('Profile')
                .child(S.document().schemaType('profileDetails').documentId('profileDetails')),
              ...S.documentTypeListItems().filter(item => !['globalSettings', 'profileDetails'].includes(item.getId())),
            ]),
      }
    ),
    media(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
