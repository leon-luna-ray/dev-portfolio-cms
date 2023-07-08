import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'technology',
    title: 'Technologies',
    type: 'document',
    fields: [
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
            },
        }),
        defineField({
            title: 'Website',
            name: 'website',
            type: 'url',
            validation: (Rule) =>
                Rule.uri({
                    scheme: ['http', 'https'],
                }),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',

            options: {
                hotspot: true,
                metadata: ['blurhash', 'lqip', 'palette', 'exif', 'location'],
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
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
            media: 'image',
        },
    },
})