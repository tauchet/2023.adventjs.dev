function compile(code) {

    const ACTIONS = {
        "+": (copy) => { copy.value += 1; },
        "*": (copy) => { copy.value *= 2; },
        "-": (copy) => { copy.value -= 1; },
        "%": (copy, i) => { copy.mark = i; },
        "<": (copy) => { 
            if (copy.mark) {
                const temp = copy.mark;
                copy.mark = null;
                return temp + 1; 
            }
        },
        "¿": (copy, i) => {
            if (copy.value <= 0) {
                return code.indexOf("?", i + 1);
            }
        },
        "?": () => {}
    };

    const reply = { value: 0, mark: null };
    for (let i = 0; i < code.length; ++i) {
        const char = code[i];
        const func = ACTIONS[char];
        const mark = func(reply, i);
        if (mark) {
            i = mark - 1;
        }
    }

    return reply.value;
}

console.log(compile('++%++<')) // 3
// (1 + 1) * 2 - 1 = 3