import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectsPage',
  title: 'Projects',
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
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'intro',
        title: 'Intro',
        type: 'blockContent',
      }),
  ],
  preview: {
    select: {
      title: 'description',
      media: 'seoImage',
    },
  },
})
