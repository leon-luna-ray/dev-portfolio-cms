import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { media } from 'sanity-plugin-media';
import { schemaTypes } from './schemas';
import {
  HomeIcon,
  UsersIcon,
  DocumentIcon,
  DocumentsIcon,
  EarthGlobeIcon,
  DocumentTextIcon,
  ClipboardImageIcon,
  SchemaIcon,
  TagsIcon,
} from '@sanity/icons'

export default defineConfig({
  name: 'default',
  title: 'dev-cms',
  projectId: 'bepi633k',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Global')
              .icon(EarthGlobeIcon)
              .child(S.document().schemaType('globalSettings').documentId('globalSettings')),
            S.listItem()
              .title('Profile')
              .icon(DocumentTextIcon)
              .child(S.document().schemaType('profileDetails').documentId('profileDetails')),
            S.listItem()
              .title('Pages')
              .icon(DocumentsIcon)
              .child(
                S.list()
                  .title('Pages')
                  .items([
                    S.documentTypeListItem('homePage').title('Home Pages'),
                    S.documentTypeListItem('landingPage').title('Landing Pages'),
                  ])
              ),
            ...S.documentTypeListItems().filter(item => !['globalSettings', 'profileDetails', 'homePage', 'landingPage'].includes(item.getId())),

          ]),
    }),
    media(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
