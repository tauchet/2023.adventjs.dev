// https://adventjs.dev/es/challenges/2023/2
function manufacture(gifts, materials) {
    // Code here
    const REGEX = new RegExp(`[^${materials}]`);
    return gifts.filter(gift => REGEX.exec(gift) == null);
}

console.log(manufacture(['tren', 'oso', 'pelota'], 'tronesa'))