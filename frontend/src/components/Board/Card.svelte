<script>
  export let task = {};
</script>

<div class="card w-72 bg-base-200 shadow-md mb-3 rounded-xl">
  <div class="card-body p-3">
    <h2 class="card-title text-lg font-bold">{task.title || 'Unknown'}</h2>
    <p class="text-sm">0 of 3 subtasks</p>
  </div>
</div>
