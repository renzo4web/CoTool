export const hexToRgb = (hex = "000000") => {
    console.log(hex);
    let r, g, b;
    if (hex.length > 4) {
        r = hex.slice(1, 3);
        g = hex.slice(3, 5);
        b = hex.slice(5, 7);
    } else {
        r = hex.slice(1, 2).repeat(2);
        g = hex.slice(2, 3).repeat(2);
        b = hex.slice(3, 4).repeat(2);
    }

    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);

    console.log({
        r,
        g,
        b
    });
    return {
        r,
        g,
        b
    };

};
// FFB627  
export const rgbToHex = (r = 0o0, g = 0o0, b = 0o0) => {


    const [hex1, hex2, hex3] = [r.toString(16), g.toString(16), b.toString(16)];
    const result = [];

    for (const hex of [hex1, hex2, hex3]) {
        if (hex <= 10) {
            result.push("0" + hex);
            console.log(hex);
        } else {
            result.push(hex);
        }
    }

    return "#" + result.join("");

};
rgbToHex(0, 255, 255);