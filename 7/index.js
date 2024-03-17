function drawGift(size, symbol) {

    if (size == 1) return "#\n"; 

    let head = [" ".repeat(size - 1) + "#".repeat(size)];
    let footer = ["#".repeat(size)];

    for (let i = 0; i < size - 2; ++i) {
        const row = "#" + symbol.repeat(size - 2) + 
            "#" + symbol.repeat(i) + "#";
        head.push(" ".repeat(size - 2 - i) + row)
        footer.unshift(row);
    }

    // Code here
    return head.join("\n") + "\n"
        + "#".repeat(size) + symbol.repeat(size - 2) + "#\n"
        + footer.join("\n") + "\n";
 }

console.log(drawGift(4, '+'));