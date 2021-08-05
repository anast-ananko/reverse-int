module.exports = function reverse (n) {
    if (n < 0) n = Math.abs(n);
    let str = n.toString();
    console.log (str);
    return str.split('').reverse().join('');
}
