// sanity/sanity.query.ts

import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProject() {
    return client.fetch(
        groq`*[_type == "project"]{
      _id,
        title,
        description,
        "image": image.asset->url,
        software
    }`
    );
}

export async function getProjectById(id: string) {
    return client.fetch(
        groq`*[_type == "project" && _id == $id]{
      _id,
        title,
        description,
        "image": image.asset->url,
        software,
        "carouselImages": carouselImages[].asset->url
    }`,
        { id }
    );
}