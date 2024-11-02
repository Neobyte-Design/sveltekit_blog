<!-- src/routes/+page.svelte -->
<script>
  export let data;
  console.log(data.posts);
</script>

<h1>My Blog</h1>

{#each data.posts as post}
  <article>
    <h2>{post.title}</h2>
    <p>{post.content.substring(0, 200)}...</p>
    <a href="/{post.slug}">Read more</a>
  </article>
{/each}
