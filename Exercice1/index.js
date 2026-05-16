function pairNumbers(min, max) {
    if (min > max) return '';

    const result = [];
    const start = min % 2 === 0 ? min : min + 1;

    for (let i = start; i <= max; i += 2) {
        result.push(i);
    }

    return result.join(',');
}

export default pairNumbers;
