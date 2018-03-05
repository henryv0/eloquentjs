function addTo(...a) {
    console.log(Number(a));
    return this.num + a;
}

const obj = {num: 2};

console.log(addTo.call(obj, 3));
