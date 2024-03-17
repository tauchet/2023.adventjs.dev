function decode(message) {
    let mark = null;
    while (mark = message.match(/[(]([^()]+)[)]/i)) {
        const head = message.substring(0, mark.index);
        const middle = mark[1].split("").reverse().join("");
        const footer = message.substring(mark.index + mark[0].length);
        message = head + middle + footer;
    }
    return message;
}

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus