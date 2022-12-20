<script>
  export let title = 'Unknown';
  export let tasks = [];

  import Card from './Card.svelte';
</script>

<div class="mr-6">
  <h5 class="font-bold flex items-center m-3">
    <div class="w-4 h-4 rounded-full shadow-md bg-primary mr-2" />
    {title}
  </h5>
  {#each tasks || [] as task}
    <Card {task} />
  {/each}
</div>
