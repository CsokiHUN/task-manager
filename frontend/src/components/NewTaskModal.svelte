<script>
  let title = '';
  let description = '';
  let subtasks = ['', ''];

  function deleteSubtask(key) {
    subtasks = subtasks.filter((_, _key) => _key !== key);
  }

  function addTask() {
    console.log('add new task');
    console.log(title);
    console.log(description);
  }
</script>

<input type="checkbox" id="new-task-modal" class="modal-toggle" />
<label for="new-task-modal" class="modal cursor-pointer">
  <div class="modal-box relative">
    <h3 class="text-lg font-bold">Add New Task</h3>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="label">
      <span class="label-text font-bold">Title</span>
    </label>
    <input bind:value={title} type="text" placeholder="e.g. Take coffee break" class="input input-bordered w-full" />

    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="label">
      <span class="label-text font-bold">Description</span>
    </label>
    <textarea
      bind:value={description}
      class="textarea textarea-bordered w-full h-28 resize-none"
      placeholder="e.g. It's always good to take a break. This 15 minute brak will recharge the batteries a little."
    />

    <div>
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="label">
        <span class="label-text font-bold">Subtasks</span>
      </label>

      {#if subtasks.length === 0}
        <p class="text-center italic">No subtasks added</p>
      {:else}
        <div class="overflow-y-auto max-h-64">
          {#each subtasks as value, key}
            <div class="flex justify-between items-center">
              <input
                {value}
                type="text"
                placeholder={key === 0 ? `e.g. Make coffee` : `e.g. Drink coffee & smile`}
                class="input input-bordered w-full mb-2"
              />
              <button on:click={() => deleteSubtask(key)} class="btn btn-ghost ml-2 text-xl">
                <i class="fa-solid fa-xmark" />
              </button>
            </div>
          {/each}
        </div>
      {/if}

      <button on:click={() => (subtasks = [...subtasks, ''])} class="btn btn-circle w-full normal-case font-bold mt-3"
        ><i class="fa-solid fa-plus" />Add New Subtask</button
      >
    </div>

    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="label">
      <span class="label-text font-bold">Status</span>
    </label>
    <!-- TODO: Add board columns -->
    <select class="select select-bordered w-full">
      <option>Todo</option>
      <option>Doing</option>
    </select>

    <div class="modal-action">
      <button on:click={addTask} class="btn btn-primary btn-circle w-full normal-case font-bold">Create Task</button>
    </div>
  </div>
</label>
