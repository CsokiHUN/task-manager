<script>
  import Column from './Column.svelte';

  import { activeBoard } from '../../stores';

  function newColumn() {
    console.log('new column nyehehehehhe');
  }
</script>

<main class="flex p-6 overflow-x-auto">
  {#if $activeBoard.columns}
    {#each $activeBoard.columns as column}
      <Column title={column.name} tasks={column.tasks} />
    {/each}
  {/if}

  <label
    for="new-column-modal"
    on:click={newColumn}
    class={`
    flex justify-center items-center bg-base-200 rounded-xl shadow-lg
    ${$activeBoard.columns?.length > 0 ? 'mt-12' : ''}
    px-8 text-xl font-bold opacity-80 hover:opacity-95 hover:cursor-pointer
    `}
  >
    <i class="fa-solid fa-plus" />
    <p class="ml-3">New Column</p>
  </label>
</main>

<style>
  main {
    min-height: calc(100% - 4.5rem);
  }
</style>
