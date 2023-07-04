import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'globalSettings',
    title: 'Global Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'intro',
            title: 'Intro',
            type: 'text',
        }),
        defineField({
            name: 'decorationImages',
            title: 'Decoration Images',
            type: 'array',
            of: [{ type: 'image' }],
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
})