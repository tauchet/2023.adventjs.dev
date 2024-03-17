function revealSabotage(store) {

    const MOVEMENTS = [
        [0, 1],
        [0, -1],
        [-1, 0],
        [1, 0],
        [1, 1],
        [-1, -1],
        [1, -1],
        [-1, 1]
    ]

    const count = (i, j) => {
        return MOVEMENTS.reduce((current, item) => {
            const y = i + item[1];
            if (y < 0 || y >= store.length) return current;
            return current + (store[y][j + item[0]] === "*" ? 1 : 0);
        }, 0);
    }

    return store.map((row, i) => row.map((item, j) => {
        if (item != '*') {
            const val = count(i, j);
            if (val > 0) return "" + val;
        }
        return item;
    }));
}

const store = [
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ']
  ]
  
  console.log(revealSabotage(store))