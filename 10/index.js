function createChristmasTree(ornaments, height) {
    if (height <= 0) return "|";
    let reply = "";
    const elements = ornaments.repeat(height * height).split("");
    for (let i = 1; i <= height; ++i) {
        const space = " ".repeat(height - i);
        const content = elements.splice(0, i).join(" ");
        reply += space + content + "\n";
    }
    return reply + " ".repeat(height - 1) + "|\n";
}

console.log(createChristmasTree("123", 12));