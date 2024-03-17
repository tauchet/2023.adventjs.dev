function adjustLights(lights) {
    let resp = 0;
    for (let i = lights.length - 1; i >= 0; --i) {
        if (lights[i] == lights[i - 1]) {
            ++resp;
            --i;
        }
    }
    return resp;
}


function adjustLights2(lights) {
    let changesGreen = 0
    let changesRed = 0
  
    for (let i = 0; i < lights.length; i++) {
      if (i % 2 == 0) {
        if (lights[i] === "🟢") changesGreen++
        if (lights[i] === "🔴") changesRed++
      }
      else {
        if (lights[i] != "🟢") changesGreen++
        if (lights[i] != "🔴") changesRed++
      }
    }
  
    return changesGreen < changesRed ? changesGreen : changesRed
}

function generateString(length) {
    let result = [];
    for ( let i = 0; i < length; i++ ) {
        result.push(Math.floor(Math.random() * 2) == 0 ? "🔴" : "🟢");
    }
    return result;
}

for (let i = 0; i < 100000; ++i) {
    const array = generateString(Math.floor(Math.random() * 10));
    const a = adjustLights(array), b = adjustLights2(array);
    if (a != b) {
        console.log({ a, b, array });
        break;
    }
}

// FAILED
console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))