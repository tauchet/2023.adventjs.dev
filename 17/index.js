function optimizeIntervals(intervals) {
    return intervals
        .sort((a, b) => a[0] - b[0])
        .reduce((reply, int) => {

            const idx = reply.findIndex(compare => {
                return int[0] >= compare[0] && int[0] <= compare[1] ||
                    int[1] >= compare[0] && int[1] <= compare[1]
            });

            if (idx == -1) {
                reply.push(int);
            } else {
                const compare = reply[idx];
                reply[idx] = [
                    Math.min(compare[0], int[0]), 
                    Math.max(compare[1], int[1])
                ]
            }

            return reply;
    }, []);
}

console.log(

    optimizeIntervals([
        [5, 8],
        [2, 7],
        [3, 4]
    ])
);