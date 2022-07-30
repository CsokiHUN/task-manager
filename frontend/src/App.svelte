<script>
  import Menu from './components/Menu.svelte';
  import Header from './components/Header.svelte';
  import NewTaskModal from './components/NewTaskModal.svelte';
  import Board from './components/Board/Main.svelte';
  import NewColumnModal from './components/Board/NewColumnModal.svelte';

  let menuShowing = true;
  function toggleMenu() {
    menuShowing = !menuShowing;
  }
</script>

<div class={`drawer ${menuShowing ? 'drawer-mobile' : ''} h-screen`}>
  <input id="boards-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <Header {toggleMenu} />

    <Board />
  </div>

  <Menu {toggleMenu} />
</div>

<NewTaskModal />
<NewColumnModal />
