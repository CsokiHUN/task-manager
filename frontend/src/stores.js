import { writable, derived, get } from 'svelte/store';

export const Boards = writable([
  {
    name: 'Board 1',
    _id: 'asdasd',
    columns: [
      {
        name: 'Todo',
        _id: 'column_1',
        tasks: [{ title: 'Make coffee' }, { title: 'Go sleeeeep' }, { title: 'Wake Up' }],
      },
      {
        name: 'Doing',
        _id: 'column_2',
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

function updateBoardById(id, data) {
  const boards = get(Boards);
  Boards.set(
    boards.map((_board) => {
      if (_board._id === id) _board = data;
      return _board;
    })
  );
}

function updateActiveBoard(data) {
  return updateBoardById(get(activeBoardId), data);
}

export const createColumn = (name) => {
  const board = get(activeBoard);

  if (!board.columns) board.columns = [];

  board.columns = [
    ...board.columns,
    {
      name,
      _id: `column_${board.columns.length}`,
      tasks: [],
    },
  ];

  updateActiveBoard(board);
};

export const addTask = (columnId, task) => {
  const board = get(activeBoard);

  board.columns = board.columns.map((column) => {
    if (column._id === columnId) {
      column.tasks.push(task);
    }
    return column;
  });

  updateActiveBoard(board);
};
