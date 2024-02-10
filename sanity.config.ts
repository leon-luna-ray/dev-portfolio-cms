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
              ...S.documentTypeListItems().filter(item => !['globalSettings', 'profileDetails', 'homePage', 'projectsPage',].includes(item.getId())), // Exclude 'homePage' from the main content section
              S.listItem()
                .title('Landing Pages')
                .child(
                  S.list()
                    .title('Landing Pages')
                    .items([
                      S.listItem()
                        .title('Home')
                        .child(
                          S.document().schemaType('homePage').documentId('homePage').title('Home')
                        ),
                      S.listItem()
                        .title('Projects')
                        .child(
                          S.document().schemaType('projectsPage').documentId('projectsPage').title('Projects')
                        ),
                    ])
                ),
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
