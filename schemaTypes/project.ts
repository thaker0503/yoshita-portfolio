// schemas/project.ts

import { defineField } from "sanity";
import { PiProjectorScreenChartFill } from "react-icons/pi";

const project = {
  name: "project",
  title: "Project",
  type: "document",
  icon: PiProjectorScreenChartFill,
  fields: [
    defineField({
      name: "image",
      title: "Header Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    // create a field for carousel images
    defineField({
      name: "carouselImages",
      title: "Carousel Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "software",
      title: "Software Used",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    }),

  ],
};

export default project;