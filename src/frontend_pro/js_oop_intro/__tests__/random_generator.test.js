import {Random} from "../challenges/random_generator/random_generator";

test('random1', () => {
    const newRand = new Random(100);
    const result1 = newRand.getNext();
    const result2 = newRand.getNext();
    expect(result1).not.toBe(result2);

    const newRand2 = new Random(100);
    const result21 = newRand2.getNext();
    const result22 = newRand2.getNext();
    expect(result1).toBe(result21);
    expect(result2).toBe(result22);
})

test('random2', () => {
    const newRand = new Random(100);
    const result1 = newRand.getNext();
    const result2 = newRand.getNext();
    expect(result1).not.toBe(result2);

    newRand.reset()

    const result21 = newRand.getNext();
    const result22 = newRand.getNext();
    expect(result1).toBe(result21)
    expect(result2).toBe(result22)
})