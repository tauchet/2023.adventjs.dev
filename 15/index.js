function autonomousDrive(store, movements) {

    const initialY = store.findIndex(x => x.includes("!"));
    const initialX = store[initialY].indexOf('!');

    const currentMovement = {
        x: initialX,
        y: initialY
    }

    const MOVEMENTS = {
        "R": [1, 0],
        "L": [-1, 0],
        "U": [0, -1],
        "D": [0, 1]
    }

    movements.forEach(movement => {
        const coords = MOVEMENTS[movement];
        const nX = currentMovement.x + coords[0];
        const nY = currentMovement.y + coords[1];
        if (store[nY] == undefined) return;
        if (store[nY][nX] == undefined || store[nY][nX] == "*") return;
        currentMovement.x = nX;
        currentMovement.y = nY;
    });

    return store.map((row, idx) => {
        if (idx == initialY) {
            row = row.substring(0, initialX) + 
            "." + 
            row.substring(initialX + 1)
        }
        if (idx == currentMovement.y) {
            row = row.substring(0, currentMovement.x) + 
            "!" + 
            row.substring(currentMovement.x + 1)
        }
        return row;
    });
}

const result = autonomousDrive(['..!....', '...*.*.'], ['R', 'R', 'D', 'L'])
console.log(result)