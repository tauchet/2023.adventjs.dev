const map = `
..S1..
.......2
`

function travelDistance(map) {

    const lines = map.split("\n");
    const lineLength = lines.reduce((c, x) => Math.max(c, x.length), 0);
    map = lines.map(i => (i + (".".repeat(lineLength - i.length)))).join("");

    const location = (idx, lineLength) => {
        const x = idx % lineLength;
        return { x, y: Math.floor(((idx - x) / lineLength)) };
    }

    let position = location(map.indexOf("S"), lineLength);
    let target = -1;
    let counter = 0;
    let reply = 0;

    while ((target = map.indexOf(String(++counter))) != -1) {
        const next = location(target, lineLength);
        reply += Math.max(position.x, next.x) - Math.min(position.x, next.x);
        reply += Math.max(position.y, next.y) - Math.min(position.y, next.y);
        position = next;
    }

    return reply;
}

const result = travelDistance(map)
console.log(result)