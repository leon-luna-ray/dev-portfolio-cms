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
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'Section Intro',
          type: 'text',
        }),
        defineField({
          name: 'body',
          title: 'Section Body',
          type: 'blockContent',
        }),
      ],
    }),
    defineField({
      name: 'introSection',
      title: 'Intro Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'Section Intro',
          type: 'text',
        }),
        defineField({
          name: 'body',
          title: 'Section Body',
          type: 'blockContent',
        }),
      ],
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
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'Section Intro',
          type: 'text',
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
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'Section Intro',
          type: 'text',
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
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'Section Intro',
          type: 'text',
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
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'Section Intro',
          type: 'text',
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
      project: 'project.title',
      media: 'project.mainImage',
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
