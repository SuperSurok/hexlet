import reverse from "../frontend_pro/js_tests/jest/theory/jest_theory";

test('reverse', () => {
    const str = 'hello';
    expect(reverse(str)).toEqual('olleh');
    expect(reverse('')).toEqual('');
});