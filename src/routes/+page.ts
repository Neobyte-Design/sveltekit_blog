import type { PageLoad } from './$types';
export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('https://cms.neobytedesign.com/api/blog-posts');
  	const data = await res.json();

	// console.log(data.data);

	  return {
		posts: data.data,
	  };
}