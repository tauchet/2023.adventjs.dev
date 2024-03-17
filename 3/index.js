// https://adventjs.dev/es/challenges/2023/3

function findNaughtyStep(original, modified) {
    const a = original.length > modified.length ? modified : original;
    const b = original.length > modified.length ? original : modified;
    const queue = a.split("");
    return b.split("").filter(char => {
        const idx = queue.findIndex(b => b === char);
        if (idx >= 0) {
            queue.splice(idx, 1);
        }
        return idx == -1;
    }).join("");
}

const original = 'stepfor'
const modified = 'stepor'
console.log(findNaughtyStep(original, modified)) // 'e'