describe('Class Relationship', () => {
    it('should create class with relationship', () => {
        class Person {
            name: string
            constructor(name: string) {
                this.name = name
            }
        }

        class Employee {
            name: string
            constructor(name: string) {
                this.name = name
            }
        }

        // you can do this in typescript
        // but, it's not recommended
        // it may cause confusion
        const person: Person = new Employee('John Doe');
        expect(person.name).toBe('John Doe');


        const employee: Employee = new Person('John Doe');
        expect(employee.name).toBe('John Doe');
    })
})