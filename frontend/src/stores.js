import { writable, derived } from 'svelte/store';

export const Boards = writable([
  {
    name: 'Board 1',
    _id: 'asdasd',
    columns: [
      {
        name: 'Todo',
        tasks: [{ title: 'Make coffee' }, { title: 'Go sleeeeep' }, { title: 'Wake Up' }],
      },
      {
        name: 'Doing',
        tasks: [{ title: 'Nem tudom' }, { title: 'Ezt se tudom' }],
      },
    ],
  },
  { name: 'Szia uram', _id: 'sziauram' },
]);

export const activeBoardId = writable('asdasd');

export const activeBoard = derived([Boards, activeBoardId], ([$Boards, $activeBoardId]) => {
  return $Boards.find((board) => board._id === $activeBoardId);
});
