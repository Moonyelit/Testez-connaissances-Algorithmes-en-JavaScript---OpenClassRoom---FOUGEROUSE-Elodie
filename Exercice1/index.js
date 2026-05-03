function pairNumbers(min, max) {
    const result = [];
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            result.push(i);
        }
    }
    return result.join(',');
}

export default pairNumbers