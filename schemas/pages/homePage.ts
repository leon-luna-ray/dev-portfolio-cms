import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Section Body',
          type: 'blockContent',
        }),
      ],
    }),
    defineField({
      name: 'projectsSection',
      title: 'Projects Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Section Body',
          type: 'blockContent',
        }),
      ],
    }),
    defineField({
      name: 'skillsSection',
      title: 'Skills Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Section Body',
          type: 'blockContent',
        }),
      ],
    }),
    defineField({
      name: 'contactSection',
      title: 'Contact Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Section Body',
          type: 'blockContent',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'seoImage',
    },
  },
})
