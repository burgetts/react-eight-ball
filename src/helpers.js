/* Randomly pick one item from array. */

function choose(arr) {
    const randomElement = arr[Math.floor(Math.random() * arr.length)];
    return randomElement
}

export default choose;