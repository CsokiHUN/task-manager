<script>
  export let toggleMenu;

  import { Boards, activeBoardId } from '../stores';

  function changeTheme({ target }) {
    console.log(target.checked);
  }

  function selectBoard(id) {
    if (id === $activeBoardId) return;
    activeBoardId.set(id);
  }
</script>

<div class="drawer-side border-r border-r-slate-600">
  <label for="boards-drawer" class="drawer-overlay" />
  <ul class="menu p-4 pt-2 w-80 bg-base-200 text-base-content">
    <div class="mb-4">
      <button class="btn btn-ghost normal-case text-2xl font-bold">Task Manager</button>
    </div>

    <p class="font-bold uppercase text-sm mb-2">All boards ({$Boards.length})</p>

    {#each $Boards as board}
      <li on:click={() => selectBoard(board._id)} class="mb-2">
        <span class={`${$activeBoardId === board._id ? 'bg-primary text-white' : ''}`}
          ><i class="fa-solid fa-clipboard-list" />{board.name || 'Unknown'}</span
        >
      </li>
    {/each}
    <li>
      <a href="/" class="text-secondary font-bold"><i class="fa-solid fa-plus" />Create New Board</a>
    </li>

    <div class="bottom-4 w-72 fixed">
      <div class="bg-gray-700 text-xl flex justify-between items-center px-10 py-2">
        <i class="fa-solid fa-sun" />
        <input on:change={changeTheme} type="checkbox" class="toggle" />

        <i class="fa-solid fa-moon" />
      </div>

      <div on:click={toggleMenu} class="mt-3 hover:cursor-pointer">
        <i class="fa-solid fa-eye-slash" />
        Hide sidebar
      </div>
    </div>
  </ul>
</div>
