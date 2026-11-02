import { test } from 'node:test';
import assert from 'node:assert';
import { esPinValido } from '../src/esPinValido.js';

test('acepta un PIN de 4 dígitos', () => {
    assert.strictEqual(esPinValido('1234'), true);
});

test('acepta un PIN de 6 dígitos', () => {
    assert.strictEqual(esPinValido('123456'), true);
});

test('rechaza un PIN de menos de 4 dígitos', () => {
    assert.strictEqual(esPinValido('123'), false);
});

test('rechaza un PIN de más de 6 dígitos', () => {
    assert.strictEqual(esPinValido('1234567'), false);
});

test('rechaza letras', () => {
    assert.strictEqual(esPinValido('12a4'), false);
});

test('rechaza un PIN vacío', () => {
    assert.strictEqual(esPinValido(''), false);
});

test('rechaza null', () => {
    assert.strictEqual(esPinValido(null), false);
});

test('rechaza undefined', () => {
    assert.strictEqual(esPinValido(undefined), false);
});

test('rechaza todos los dígitos iguales', () => {
    assert.strictEqual(esPinValido('1111'), false);
    assert.strictEqual(esPinValido('888888'), false);
});

test('acepta un PIN con ceros', () => {
    assert.strictEqual(esPinValido('0123'), true);
});