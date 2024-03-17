function maxDistance(movements) {
    // Code here
    const result = movements.split("").reduce(([a, b], el) => {
        return [a + (el === ">" ? 1 : (el === "<" ? -1 : 0)), b + (el === "*" ? 1 : 0)];
    }, [0, 0]);
    return Math.abs(result[0]) + result[1];
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2