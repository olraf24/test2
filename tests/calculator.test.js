const { add, subtract, multiply } = require('../src/calculator');

test('dodawanie 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('odejmowanie 5 - 3 = 2', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('mnożenie 4 * 3 = 12', () => {
    expect(multiply(4, 3)).toBe(12);
});
