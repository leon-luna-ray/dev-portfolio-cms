import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }],
      validation: (Rule) => Rule.required(),
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
      title: 'title',
      project: 'project.title',
      media: 'seoImage',
      },
      prepare(selection) {
        const { title, project } = selection;
        const combinedTitle = `${project} | ${title}`;
        return {
          title: combinedTitle,
          media: selection.media,
        };
      },
    },
})
