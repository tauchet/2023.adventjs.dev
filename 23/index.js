function organizeChristmasDinner(dishes) {
    return Object.values(
        dishes.reduce((reply, item) => {
            item.slice(1).forEach(plate => {
                reply[plate] ??= { id: plate, array: [] }
                reply[plate].array.push(item[0]);
            });
            return reply;
        }, {})
    )
    .filter(x => x.array.length > 1)
    .map(x => [x.id, ...x.array.sort()])
    .sort((a, b) => a[0].localeCompare(b[0]))
}

const dishes = [
    ["christmas turkey", "turkey", "sauce", "herbs"],
    ["cake", "flour", "sugar", "egg"],
    ["hot chocolate", "chocolate", "milk", "sugar"],
    ["pizza", "sauce", "tomato", "cheese", "ham"],
]

console.log(organizeChristmasDinner(dishes))