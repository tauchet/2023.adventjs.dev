function organizeGifts(gifts) {

    const regex = /(\d+)/g;
    const array = gifts.split(regex);
    const calculate = (count, char) => {
        const big = Math.floor(count / 50);
        const medium = Math.floor((count % 50) / 10);
        const small = Math.floor(count % 10);
        return  `[${char}]`.repeat(big) +
                `{${char}}`.repeat(medium) +
                (small > 0 ? `(${char.repeat(small)})` : "");
    }

    let reply = "";
    for (let i = 1; i < array.length; i += 2) {
        reply += calculate(array[i], array[i + 1]);
    }

    // Code here
    return reply;
}

const result1 = organizeGifts(`76a11b`)
console.log(result1)