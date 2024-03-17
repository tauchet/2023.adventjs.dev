function findBalancedSegment(message) {

    message = message.join("");

    const REGEX_0 = /0/gi;
    const REGEX_1 = /1/gi;

    let reply = [];
    let j = message.length - 1;
    for (let i = 0; i < message.length - 1; ++i) {
        const part = message.substring(i, j + 1);
        const a = part.split(REGEX_0).length - 1;
        const b = part.split(REGEX_1).length - 1;
        console.log({ i, j, a, b })

        if (j == i) {
            j = message.length - 1;
            continue;
        }
        
        if (a == b) {
            reply.push([i, j]);
        }
            
        --i;
        --j;
    }

    if (reply.length <= 1) return reply.flat();

    return reply.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]))[0]
}


console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]));
// console.log(findBalancedSegment([1, 1, 0]));
// console.log(findBalancedSegment([1, 1, 1]));