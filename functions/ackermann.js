function ackermann(m, n) {
    return m === 0 ? n + 1 : ackermann(m - 1, n === 0  ? 1 : ackermann(m, n - 1));}

ackermann(1,2)