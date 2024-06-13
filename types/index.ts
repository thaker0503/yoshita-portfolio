import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    title: string;
    description: PortableTextBlock[];
    image: string;
    software: string[];
    carouselImages: string[];
};