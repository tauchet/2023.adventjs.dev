function getIndexsForPalindrome(word) {

    const chars = word.split("");
    const middle = Math.ceil(chars.length / 2);
    
    const temp = {};
    let used = false;

    for (let i = 0; i < middle; ++i) {
        const j = chars.length - 1 - i;
        const a = chars[i];
        const b = chars[j];
        const equals = i == j && used;
        if (a != b || equals) {
            used = true;
            (temp[a] ??= []).push(i);
            if (!equals) (temp[b] ??= []).push(j);
        }
    }

    const values = Object.values(temp);
    if (values.length == 0) return [];
    if (values.length != 2) return null;

    const [a, b] = values.sort((a, b) => a.length - b.length);
    return [Math.min(a[0], b[1]), Math.max(a[0], b[1])]

}

console.log(getIndexsForPalindrome('aaababa'));
console.log(getIndexsForPalindrome('rotavator'));
console.log(getIndexsForPalindrome('caababa'));
console.log(getIndexsForPalindrome('rotaratov'));
console.log(getIndexsForPalindrome('abac'));