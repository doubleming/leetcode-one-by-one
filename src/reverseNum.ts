function reverse(x: number): number {
    const stack: number[] = []
    const isNa = x < 0
    x = isNa ? x*-1 : x
    while(x) {
        const d = x % 10
        stack.push(d)
        x = Math.floor(x / 10)
    }
    let degit = 0
    let res = 0
    while(stack.length) {
        const d = stack.pop()
        if (d === undefined) {
            break
        }
        if (d === 0 && degit === 0) {
            continue
        }
        res += d * (10 ** degit)
        degit += 1
    }
    return isNa ? res * -1 : res
};


console.log(reverse(-123))