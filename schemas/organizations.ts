import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'organization',
    title: 'Organizations',
    type: 'document',
    fields: [

        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',

            options: {
                hotspot: true,
                metadata: ['blurhash', 'lqip', 'palette', 'exif', 'location'],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            title: 'Website',
            name: 'website',
            type: 'url',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
        // prepare(selection) {
        //   const {title, subtitle} = selection;
        //   return {
        //     title: `${title} ${subtitle}`,
        //     media: selection.media,
        //   }
        // }
    },
})
