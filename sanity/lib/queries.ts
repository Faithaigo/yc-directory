import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`*[_type == "startup"  && defined(slug.current) && !defined($search) || title match $search || category match $search || author -> name match $search] | order(_createdAt desc){
  _id, title, slug, author ->{
    _id, name, bio, image
  },views, description, pitch, slug, _createdAt, image, category
}`)


export const STARTUP_BY_ID_QUERY = defineQuery(`*[_type == "startup" && _id == $id][0]{
  _id, title, slug, author ->{
    _id, name,username, bio, image
  },views, description, pitch, slug, _createdAt, image, category
}`)