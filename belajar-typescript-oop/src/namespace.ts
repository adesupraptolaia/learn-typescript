export namespace MathUtils {
    export const PI = 3.14;

    export function sum(...args: number[]): number {
        let total: number = 0;
        for (const arg of args) {
            total += arg;
        }
        return total
    }
}

export namespace Person {
    export function sayHello(name: string): string {
        return `Hello, ${name}`;
    }
}

export namespace Employee {
    export function sayHello(name: string): string {
        return `Hello, ${name}, I am an employee`;
    }
}