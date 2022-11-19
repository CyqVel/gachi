function shotToCenter(x, y) {
    return (x === 0 && y === 0) ? 10 : 0;
}

function shotToCircle(x, y) {
    return (x**2 + y**2 <= 1) ? 2 : 0;
}

function shotToRomb(x, y) {
    return ((x**2 + y**2) / 2 <= 0) ? 5 : 0;
}

function shot(x, y) {
    return shotToCenter(x, y) || shotToCircle(x, y) || 0 || shotToRomb(x,y);
}

