function transformTree(tree) {
    for (let i = 1; i < tree.length; ++i) {
        const value = tree[i];
        console.log({i, value, parent: ((i - 1) / 2)})
    }

    return tree.at(2.5);
 } 

function transformTree2(tree) {
    const mapped = tree.map(value => value == null ? null : { value, left: null, right: null })
    mapped.forEach((item, i) => {
        if (item == null) return;
        const dist = 2 * i;
        item.left = mapped[dist + 1] || null;
        item.right = mapped[dist + 2] || null;
    });
    return mapped[0] || null;
 } 

 function transformTree2(tree) {
    const next = (idx) => {
        const value = tree.at(idx);
        const dist = 2 * idx;
        return value == null ? null : { value, left: next(dist + 1), right: next(dist + 2) };
    }
    return next(0);
 } 

console.log(transformTree([3, 1, 0, 8, 12, null, 1]));