<script>
  export let toggleMenu;

  import { activeBoard } from '../stores';
</script>

<div class="navbar bg-base-200 border-b border-b-slate-600">
  <div class="flex-1">
    <label for="boards-drawer" class="btn btn-ghost normal-case text-xl lg:hidden">{$activeBoard.name}</label>
    <button on:click={toggleMenu} class="btn btn-ghost normal-case text-xl hidden lg:block">{$activeBoard.name}</button>
  </div>
  <div class="flex-none">
    <label for="new-task-modal" class="btn modal-button btn-sm btn-primary btn-circle w-fit px-3 font-bold normal-case">
      <i class="fa-solid fa-plus mr-1 pt-0.5" />
      Add New Task
    </label>

    <button class="btn btn-square btn-ghost ml-2">
      <i class="fa-solid fa-ellipsis-vertical" />
    </button>
  </div>
</div>
