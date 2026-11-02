export function esPinValido(pin) {
    if (typeof pin !== 'string') {
        return false;
    }

    const longitudValida = pin.length === 4 || pin.length === 6;
    const soloDigitos = /^[0-9]+$/.test(pin);
    const digitosDistintos = new Set(pin).size > 1;

    return longitudValida && soloDigitos && digitosDistintos;
}