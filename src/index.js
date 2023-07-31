module.exports = function reverse(n) {
    let module_n = Math.abs(n) + ""
    return module_n.split('').reverse().join('')
}
