import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'profileDetails',
    title: 'Profile Details',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'Job Title',
            type: 'string',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',

            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'text',
        }),
        defineField({
            title: 'Email',
            name: 'email',
            type: 'email',
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
            name: 'website_name',
            title: 'Website Name',
            type: 'string',
        }),
        defineField({
            title: 'Github Profile',
            name: 'github',
            type: 'url',
            validation: (Rule) =>
                Rule.uri({
                    scheme: ['http', 'https'],
                }),
        }),
        defineField({
            title: 'Github Username',
            name: 'github_user',
            type: 'string',
        }),
        defineField({
            title: 'Linkedin Profile',
            name: 'linkedin',
            type: 'url',
            validation: (Rule) =>
                Rule.uri({
                    scheme: ['http', 'https'],
                }),
        }),
        defineField({
            title: 'Linkedin Username',
            name: 'linkedin_user',
            type: 'string',
        }),
        defineField({
            title: 'Resume',
            name: 'resume',
            type: 'file',
            options: {
                accept: `.pdf`,
            },
            fields: [
                {
                    title: 'Date',
                    name: 'date',
                    type: 'date'
                },
                {
                    name: 'description',
                    type: 'string',
                    title: 'Description'
                },
                {
                    name: 'allow_downloads',
                    type: 'boolean',
                    title: 'Allow Downloads',
                }
            ]
        }),
        defineField({
            name: 'hobbies',
            title: 'Hobbies',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'tag' } }],
        }),
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
})
