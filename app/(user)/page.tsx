import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import BlogList from "@/components/BlogList";

const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->,
  'imageUrl': mainImage.asset->url

} | order(createdAt desc)
`;
export default async function Home() {
  const posts = await client.fetch(query);

  return <BlogList key={posts._id} posts={posts} />;
}
