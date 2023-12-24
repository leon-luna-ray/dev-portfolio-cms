import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'projectGroup',
    title: 'Project Groups',
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
                isUnique: () => true,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        }),
        defineField({
            name: 'projects',
            title: 'Projects',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'project' } }],
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
})
