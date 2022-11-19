function get_discriminant(a, b, c, d) {
    const length = arguments.length

    switch (length) {
        case 3:
            return b**2 - 4 * a * c
        case 4:
            return -4 * b**3 * d + b**2 * c**3 + 18 * a * b * c * d - 27 * a**2 * d ** 2
    }
}

const lineynoye_uravnenie = (k, b) => {
    return [-b / k]
}

const kvadratnoye_uravnenie = (a, b, c) => {
    let roots = []
    const D = get_discriminant(a, b, c)

    if (D === 0) {
        const x = (-b) / (2 * a)
        roots.push(x)
    } else {
        const x1 = (-b + Math.sqrt(D)) / (2 * a)
        const x2 = (-b - Math.sqrt(D)) / (2 * a)
        roots.push(x1, x2)
    }

    return roots
}

const kubicheskoe_uravneniye = (a, b, c, d) => {
    let roots = []

    const p = (3 * a * c - b**2) / (3 * a**2)
    const q = (2 * b**3 - 9 * a * b * c + 27 * a**2 * d) / (27 * a**3)

    const x1 = Math.cbrt( ((-q + Math.sqrt(q**2 + (4 / 27) * p**3)) / 2) )
    const x2 = Math.cbrt( ((-q - Math.sqrt(q**2 + (4 / 27) * p**3)) / 2) )

    roots.push(x1, x2)

    return roots

}


function uravneniya(...props) {
    const length = props.length

    switch (length) {
        case 2:
            return lineynoye_uravnenie(...props)
        case 3:
            return kvadratnoye_uravnenie(...props)
        case 4:
            return kubicheskoe_uravneniye(...props)
        default:
            return null;
    }

}

console.log(uravneniya(8, -36, 54, -27))
