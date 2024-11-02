import type { PageLoad } from './$types';
export const prerender = true;

export const load: PageLoad = async ({ fetch, params }) => {
  
  const { slug } = params;
  const res = await fetch(`https://cms.neobytedesign.com/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`);
  const data = await res.json();

  if (data.data.length === 0) {
    return {
      status: 404,
      error: new Error('Not found'),
    };
  }

  return {
    post: data.data[0],
  };
}
