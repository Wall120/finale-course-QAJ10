import { describe, expect, test } from "@jest/globals";
import { MathOperations } from '../src/mathOperations';
import { notStrictEqual } from "assert";
import { error } from "console";

const math = new MathOperations();

describe('Positive test-cases', () => {
    
    test('exponentiation of a number', () => {
        const pow = math.power(5, 3);
        expect(pow).toBe(125);
    });

    test('Square root of number', () => {
        const root = math.sqrt(1024);
        expect(root).toBe(32);
    });

    test('the arithmetic mean of an array of numbers', () => {
        const arr = math.average([50, 32, 45, 77]);
        expect(arr).toBe(51);
    });

    test('the minimum value in an array of numbers', () => {
        const min = math.min([102, 58, 90, 206]);
        expect(min).toBeLessThan(90);
        expect(min).toBe(58);
    });

    test('the maximum value in an array of numbers', () => {
        const max = math.max([45, 12, 68, 1024]);
        expect(max).toBe(1024);
        expect(max).toBeGreaterThan(68);
    });

    test('the modulus of a number', () => {
        const module = math.abs(2/3+5);
        expect(module).toBeCloseTo(5.666);
        expect(module).not.toBe(0);
    });

    test('Checking the number is odd', () => {
        const odd = math.isOdd(71);
        expect(odd).toBeTruthy();
    });

    test('Checking the number is even', () => {
        const evn = math.isEven(44);
        expect(evn).toBeTruthy();
    });

    test('Checking the number is prime', () => {
        const prime = math.isPrime(613);
        expect(prime).toBe(true);
    });

    test('the sum of the digits of a number', () => {
        const digit = math.sumOfDigits(6548);
        expect(digit).toBe(23);
    });

    test('Flipping a number', () => {
        const flip = math.reverseNumber(456732);
        expect(flip).toBe(237654);
    });

    test('the largest common divisor of two numbers', () => {
        const large = MathOperations.gcd(128, 80);
        expect(large).toBe(16);
    });

    test('the smallest common multiple of two numbers', () => {
        const small = MathOperations.lcm(128, 70);
        expect(small).toBe(4480);
    });

    test('Checking the number is not prime', () => {
        const prime = math.isPrime(12);
        expect(prime).toBe(false);
    });

    test('the number is odd - false', () => {
        const odd = math.isOdd(22);
        expect(odd).toBe(false);
    });

    describe('Negative test-cases', () => {

        test('raising a negative number to the power', () => {
          const exp = math.power(-8, 4);
          expect(exp).toBe(4096);
        });

        test('raising a negative number to the negative power', () => {
            const exp = math.power(-8, -4);
            expect(exp).toBeCloseTo(0.00024);
        });

        test('Square root of negative number', () => {
            expect(() => math.sqrt(-6)).toThrow('Square root of negative number');
        });

        test('the maximum value in an array', () => {
            expect(() => math.max([])).toThrow('Array is empty');
        });

        test('the minimum value in an array', () => {
            expect(() => math.min([])).toThrow('Array is empty');
        });

        test('the average value in a array', () => {
            expect(() => math.average([])).toThrow('Array is empty');
        });

        test('the number is prime throw false', () => {
            const prime = math.isPrime(-1);
            expect(prime).toBeFalsy();
        });

        test('the number is not odd', () => {
            const odd = math.isOdd(-24);
            expect(odd).toBeFalsy();
        });

        test('the sum of the digits of a negative number', () => {
            const nsum = math.sumOfDigits(-765);
            expect(nsum).toBeNaN();
        });

        test('the modulus of a negative numbers', () => {
            const numn = math.abs((-1/-7)+(-2/9));
            expect(numn).toBeCloseTo(0.079);
        });

        test('the largest common divisor of two numbers - negative', () => {
            const nlarge = MathOperations.gcd(135, -20);
            expect(nlarge).toBe(-5);
        });

        test('the smallest common multiple of two numbers - negative', () => {
            const nsmall = MathOperations.lcm(135, -20);
            expect(nsmall).toBe(-540);
        });

        test('sum of digits', () => {
            const sum = math.sumOfDigits(0);
            expect(sum).toBe(0);
        });

        test('revers string', () => {
            const str = math.reverseNumber('qwerty');
            expect(str).toBeNaN();        
        });

        test('sum of digits string', () => {
            const strnum = math.sumOfDigits('e16');
            expect(strnum).toBeNaN();
        });
    });
});