function checkIsValidCopy(original, copy) {
    if (original.length != copy.length) return false;

    const CODES = {
        "#": 130,
        "+": 131,
        ":": 132,
        ".": 133,
        " ": 134
    }

    return original.split("").every((char, i) => {
        if (char === copy[i]) return true;
        const a = CODES[original[i]] ?? original.charCodeAt(i);
        const b = CODES[copy[i]] ?? copy.charCodeAt(i);
        if (a >= 65 && a <= 122 && b >= 65 && b <= 122) {
            return original[i].toLowerCase() == copy[i];
        }
        return b > a;
    });
}

console.log(checkIsValidCopy(
    'Santa Claus is coming',
    'sa#ta Cl#us i+ comin#'
  ));