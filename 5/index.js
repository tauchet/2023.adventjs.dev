function cyberReindeer(road, time) {
    let idx = road.indexOf("S");
    const reply = [road];
    road = road.replace("S", ".");
    for (let i = 0; i < time - 1; ++i) {
        if (i >= 4) road = road.split("|").join("*");
        if (road[idx + 1] !== "\|") {
            ++idx;
        }
        const str = road.substring(0, idx) + "S" + road.substring(idx + 1);
        reply.push(str);
    }

    // Code here
    return reply;
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result);