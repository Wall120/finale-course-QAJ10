export class MathOperations {
    // Возведение числа в степень
     power(base: number, exponent: number) {
        return Math.pow(base, exponent);
    }

    // Нахождение квадратного корня числа
     sqrt(number: number) {
        if (number < 0) {
            throw new Error("Square root of negative number");
        }
        return Math.sqrt(number);
    }

    // Проверка, является ли число четным
     isEven(number: number) {
        return number % 2 === 0;
    }

    // Проверка, является ли число нечетным
     isOdd(number: number) {
        return number % 2 !== 0;
    }

    // Нахождение модуля числа
     abs(number: number) {
        return Math.abs(number);
    }

    // Нахождение наибольшего общего делителя двух чисел
     static gcd(a: number, b: number) {
        if (!b) {
            return a;
        }
        return MathOperations.gcd(b, a % b);
    }

    // Нахождение наименьшего общего кратного двух чисел
    static lcm(a: number, b: number) {
        return Math.abs(a * b) / MathOperations.gcd(a, b);
    }

    // Нахождение максимального значения в массиве чисел
     max(arr: any) {
        if (arr.length === 0) {
            throw new Error("Array is empty");
        }
        return Math.max(...arr);
    }

    // Нахождение минимального значения в массиве чисел
     min(arr: any) {
        if (arr.length === 0) {
            throw new Error("Array is empty");
        }
        return Math.min(...arr);
    }

    // Нахождение среднего арифметического массива чисел
     average(arr: any) {
        if (arr.length === 0) {
            throw new Error("Array is empty");
        }
        const sum = arr.reduce((acc:number, num: number) => acc + num, 0);
        return sum / arr.length;
    }

    // Проверка, является ли число простым
     isPrime(number: number) {
        if (number <= 1) return false;
        if (number <= 3) return true;
        if (number % 2 === 0 || number % 3 === 0) return false;
        for (let i = 5; i * i <= number; i += 6) {
            if (number % i === 0 || number % (i + 2) === 0) return false;
        }
        return true;
    }

    // Нахождение суммы цифр числа
     sumOfDigits(number: any) {
        return number
            .toString()
            .split('')
            .map(Number)
            .reduce((acc, digit) => acc + digit, 0);
    }

    // Переворачивание числа (например, 12345 становится 54321)
     reverseNumber(number: any) {
        return parseInt(number.toString().split('').reverse().join(''), 10);
    }
}
