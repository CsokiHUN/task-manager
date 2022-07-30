<script>
  let name = '';

  let inputElem;

  function createColumn() {
    console.log('create new column');
    console.log(name);

    name = '';
    inputElem.checked = false;
  }
</script>

<input bind:this={inputElem} type="checkbox" id="new-column-modal" class="modal-toggle" />
<label for="new-column-modal" class="modal cursor-pointer">
  <div class="modal-box relative">
    <h3 class="text-lg font-bold">Create New Column</h3>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="label">
      <span class="label-text font-bold">Name</span>
    </label>
    <input bind:value={name} type="text" placeholder="e.g. TODO" class="input input-bordered w-full" />

    <div class="modal-action">
      <button on:click={() => createColumn()} class="btn btn-primary btn-circle w-full normal-case font-bold">Create Task</button>
    </div>
  </div>
</label>
