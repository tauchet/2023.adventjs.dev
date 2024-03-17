function distributeGifts(weights) {

    const checkNeighbord = (i, j, mark) => {
        
        if (i < 0 || i >= weights.length || j < 0 || j >= weights[i].length) {
            return;
        }

        const value = weights[i][j];
        if (value) {
            mark.total += value;
            mark.count++;
        }

    }

    return weights.map((row, i) => (
        row.map((n, j) => {
            const reply = { total: 0, count: 0 };
            checkNeighbord(i, j, reply);
            checkNeighbord(i + 1, j, reply);
            checkNeighbord(i - 1, j, reply);
            checkNeighbord(i, j + 1, reply);
            checkNeighbord(i, j - 1, reply);
            return Math.round(reply.total / reply.count);
        })
    ));
}

const input = [
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4]
  ]
  
console.log(distributeGifts(input));