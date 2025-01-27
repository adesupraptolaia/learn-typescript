import { Employee, MathUtils, Person } from "../src/namespace";

describe('Namespace', () => {
    it('should create namespace', () => {
        expect(MathUtils.PI).toBe(3.14);
        expect(MathUtils.sum(1, 2, 3)).toBe(6);
        expect(MathUtils.sum(1, 2, 3, 4)).toBe(10);

        expect(Employee.sayHello('John')).toBe('Hello, John, I am an employee');

        expect(Person.sayHello('John')).toBe('Hello, John');
    })
})