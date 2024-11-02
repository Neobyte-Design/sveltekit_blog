<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
    export let data;
    console.log(data.post);
</script>

<article>
  <h1>{data.post.title}</h1>
  {@html data.post.content}
</article>
