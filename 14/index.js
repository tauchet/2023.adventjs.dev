function maxGifts(houses) {

    if (houses.length == 0) return 0;
    if (houses.length == 1) return houses[0];
    if (houses.length == 2) return Math.max(...houses);

    const cache = {
        [houses.length - 1]: houses[houses.length - 1],
        [houses.length - 2]: houses[houses.length - 2]
    };

    for (let i = houses.length - 3; i >= 0; --i) {
        const n = houses[i];
        let temp = cache[i] ?? 0;
        for (let j = i + 2; j < houses.length; ++j) {
            temp = Math.max(temp, cache[j]);
        }
        cache[i] = n + temp;
    }

    return Math.max(...Object.values(cache));
}

console.log(maxGifts([1, 1, 1, 1]));