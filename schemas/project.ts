import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            title: 'Featured',
            name: 'featured',
            type: 'boolean',
        }),
        defineField({
            title: 'Status',
            name: 'status',
            type: 'string',
            options: {
                list: [
                    'live',
                    'bug',
                    'down',
                    'n/a',
                    'development',
                    'refactor',
                    'maintenance',
                ],
            }

        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
                isUnique: () => true,
            },
        }),
        defineField({
            title: 'Project URL',
            name: 'url',
            type: 'url',
            validation: (Rule) =>
                Rule.uri({
                    scheme: ['http', 'https'],
                }),
        }),
        defineField({
            title: 'Custom URL',
            name: 'customUrl',
            type: 'url',
            validation: (Rule) =>
                Rule.uri({
                    scheme: ['http', 'https'],
                }),
        }),
        defineField({
            title: 'Reposoitory URL',
            name: 'repository',
            type: 'url',
            validation: (Rule) =>
                Rule.uri({
                    scheme: ['http', 'https'],
                }),
        }),
        defineField({
            name: 'intro',
            title: 'Intro',
            type: 'text',
            validation: Rule => Rule.max(256).warning('Limit 256 characters.'),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',

            options: {
                hotspot: true,
                metadata: ['blurhash', 'lqip', 'palette', 'exif', 'location'],
            },
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'technology' } }],
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'tag' } }],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        },
    },
})
