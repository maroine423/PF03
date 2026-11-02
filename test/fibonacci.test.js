import { test } from 'node:test';
import assert from 'node:assert';
import { fibonacci } from '../src/fibonacci.js';

test('fibonacci(0) devuelve 0', () => {
    assert.strictEqual(fibonacci(0), 0);
});

test('fibonacci(1) devuelve 1', () => {
    assert.strictEqual(fibonacci(1), 1);
});

test('fibonacci(2) devuelve 1', () => {
    assert.strictEqual(fibonacci(2), 1);
});

test('fibonacci(3) devuelve 2', () => {
    assert.strictEqual(fibonacci(3), 2);
});

test('fibonacci(5) devuelve 5', () => {
    assert.strictEqual(fibonacci(5), 5);
});

test('fibonacci(-1) lanza un RangeError', () => {
    assert.throws(
        () => fibonacci(-1),
        {
            name: 'RangeError',
            message: 'solo números enteros ≥ 0'
        }
    );
});