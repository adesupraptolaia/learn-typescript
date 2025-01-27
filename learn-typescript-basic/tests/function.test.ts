describe('function', () => {
    it('should support function', () => {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }
        expect(sayHello('Ade')).toBe('Hello Ade');

        function printHello(name: string): void {
            console.log(`Hello ${name}`);
        }
        printHello('Ade');
    })

    it('should support default parameter', () => {
        function sayHello(name: string = 'Guest'): string {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe('Hello Guest');
        expect(sayHello('Ade')).toBe('Hello Ade');
    })

    it('should support rest parameter', () => {
        function sum(...numbers: number[]): number {
            let total: number = 0;
            for (let number of numbers) {
                total += number;
            }
            return total;
        }
        expect(sum(1, 2, 3)).toBe(6);
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    })

    it('should support optinal parameter', () => {
        function sayHello(fName: string, lName?: string): string {
            if (lName) {
                return `Hello ${fName} ${lName}`;
            } else {
                return `Hello ${fName}`;
            }
        }

        expect(sayHello('Ade')).toBe('Hello Ade');
        expect(sayHello('Ade', 'Suprapto')).toBe('Hello Ade Suprapto');
    })

    it('should support function overloading', () => {
        function sayHello(name: string): string;
        function sayHello(name: string, lastName: string): string;
        function sayHello(name: string, lastName?: string): string {
            if (lastName) {
                return `Hello ${name} ${lastName}`;
            } else {
                return `Hello ${name}`;
            }
        }
        expect(sayHello('Ade')).toBe('Hello Ade');
        expect(sayHello('Ade', 'Suprapto')).toBe('Hello Ade Suprapto');

        function callMe(value: string): string;
        function callMe(value: number): number;
        function callMe(value: boolean): any;
        function callMe(value: any): any {
            if (typeof value === 'string') {
                return `String: ${value}`;
            } else if (typeof value === 'number') {
                return value * 100;
            } else {
                return `Unknown ${value}`;
            }
        }

        expect(callMe('Ade')).toBe('String: Ade');
        expect(callMe(40)).toBe(4_000);
        expect(callMe(true)).toBe('Unknown true');
    })

    it('should support function as parameter', () => {
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }

        function toUpperCase(name: string): string {
            return name.toUpperCase();
        }

        expect(sayHello('ade', toUpperCase)).toBe('Hello ADE');

        expect(sayHello('ADE', (name: string): string => {
            return name.toLowerCase();
        })).toBe('Hello ade');

        expect(sayHello('ade', function(name: string): string {
            return name.toUpperCase();
        })).toBe('Hello ADE');
    })
})