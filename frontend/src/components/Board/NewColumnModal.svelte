<script>
  import { createColumn } from '../../stores';

  let inputElem;

  function submit({ target }) {
    const formData = new FormData(target);
    const { columnName } = Object.fromEntries(formData);

    createColumn(columnName);

    inputElem.checked = false;
    target.reset();
  }
</script>

<input bind:this={inputElem} type="checkbox" id="new-column-modal" class="modal-toggle" />
<label for="new-column-modal" class="modal cursor-pointer">
  <form on:submit|preventDefault={submit} id="new-column" class="modal-box relative">
    <h3 class="text-lg font-bold">Create New Column</h3>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="label">
      <span class="label-text font-bold">Name</span>
    </label>
    <input name="columnName" type="text" placeholder="e.g. TODO" class="input input-bordered w-full" />

    <div class="modal-action">
      <button type="submit" class="btn btn-primary btn-circle w-full normal-case font-bold">Create Column</button>
    </div>
  </form>
</label>
