import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'skillsList',
    title: 'Skills',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'skills',
            title: 'Skills List',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'technology' } }],
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
})
