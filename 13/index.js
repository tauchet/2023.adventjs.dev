function calculateTime(deliveries) {

    const min = 25_200;
    const total = deliveries.reduce((c, delivery) => {
        return c + delivery.split(":").reduce(
            (c, n, i) => c + n * Math.pow(60, 2 - i),
            0
        );
    }, 0);

    const pad = (value) => {
        if (value < 10) {
            return `0${value}`;
        }
        return value;
    }
    
    const diff = total - min;
    const hours = Math.floor(Math.abs(diff / 3600));
    const minutes = Math.floor(Math.abs((diff % 3600) / 60));
    const seconds = Math.abs(diff % 60);
    return (diff < 0 ? "-" : "") + pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  }

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']))
// '-02:20:00'