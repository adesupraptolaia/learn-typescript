describe('Parameter Properties', () => {
    class Person {
        constructor(public id: number, public name: string, protected counter: number = 0, private age: number) {
    
        }
    
        sayHello(name: string): string {
            return `Hello ${name}, My name is ${this.name}`
        }
    }
    
    class Employee extends Person {
        sayHello(name: string): string {
            return super.sayHello(name) + ", I'm an employee"
        }
    }

    class Manager extends Employee {
        sayHello(name: string): string {
            return super.sayHello(name) + ", I'm a manager"
        }
    }

    it('should create class with parameter properties', () => {

        let person: Person = new Person(1, 'John Doe', 0, 30);
        expect(person.id).toBe(1);
        expect(person.name).toBe('John Doe');
        expect(person.sayHello('Budi')).toBe('Hello Budi, My name is John Doe');
        expect(person instanceof Person).toBe(true);
        expect(person instanceof Employee).toBe(false);
        // console.log({ person }); // { person: Person { id: 1, name: 'John Doe', counter: 0, age: 30 } }


        // polymorphism, convert to child class
        person = new Employee(2, 'Albert', 10, 30);
        expect(person.id).toBe(2);
        expect(person.name).toBe('Albert');
        expect(person.sayHello('Budi')).toBe("Hello Budi, My name is Albert, I'm an employee");
        expect(person instanceof Person).toBe(true);
        expect(person instanceof Employee).toBe(true);
        // console.log({ person }); // { person: Employee { id: 2, name: 'Albert', counter: 10, age: 30 } }


        let employee: Employee = new Employee(3, 'Bambang', 0, 30);
        expect(employee.id).toBe(3);
        expect(employee.name).toBe('Bambang');
        expect(employee.sayHello('Budi')).toBe("Hello Budi, My name is Bambang, I'm an employee");
        expect(employee instanceof Person).toBe(true);
        expect(employee instanceof Employee).toBe(true);
        // console.log({ employee }); // { employee: Employee { id: 3, name: 'Bambang', counter: 0, age: 30 } }


        employee = new Person(4, 'Nana', 0, 30);
        expect(employee.id).toBe(4);
        expect(employee.name).toBe('Nana');
        expect(employee.sayHello('Budi')).toBe('Hello Budi, My name is Nana');
        expect(employee instanceof Person).toBe(true);
        expect(employee instanceof Employee).toBe(false);
        // console.log({ employee }); // { employee: Person { id: 4, name: 'Nana', counter: 0, age: 30 } }
    })

    it('should function parameters', () => {
        function introducePerson(person: Person): string {
            return `Hi, My name is ${person.name}`
        }

        const person: Person = new Person(1, 'John Doe', 0, 30);
        expect(introducePerson(person)).toBe('Hi, My name is John Doe')

        const employee: Employee = new Employee(2, 'Albert', 10, 30);
        expect(introducePerson(employee)).toBe('Hi, My name is Albert')
    })

    it('should support type cast', () => {
        function introducePerson(person: Person): string {
            if (person instanceof Manager) {
                return `Hi, My name is ${person.name}, I'm a manager`
            } else if (person instanceof Employee) {
                return `Hi, My name is ${person.name}, I'm an employee`
            } else {
                return `Hi, My name is ${person.name}`
            }
        }

        // Person
        let person: Person = new Person(1, 'John Doe', 0, 30);
        expect(introducePerson(person)).toBe('Hi, My name is John Doe')

        person = new Employee(1, 'John Doe', 0, 30);
        expect(introducePerson(person)).toBe(`Hi, My name is John Doe, I'm an employee`)

        person = new Manager(1, 'John Doe', 0, 30);
        expect(introducePerson(person)).toBe(`Hi, My name is John Doe, I'm a manager`)

        // Employee
        let employee: Employee = new Employee(2, 'Albert', 10, 30);
        expect(introducePerson(employee)).toBe(`Hi, My name is Albert, I'm an employee`)

        employee = new Manager(2, 'Bambang', 0, 30);
        expect(introducePerson(employee)).toBe(`Hi, My name is Bambang, I'm a manager`)

        employee = new Person(2, 'Nana', 0, 30);
        expect(introducePerson(employee)).toBe('Hi, My name is Nana')

        // Manager
        let manager: Manager = new Manager(3, 'Bambang', 0, 30);
        expect(introducePerson(manager)).toBe(`Hi, My name is Bambang, I'm a manager`)

        manager = new Employee(3, 'Bambang', 0, 30);
        expect(introducePerson(manager)).toBe(`Hi, My name is Bambang, I'm an employee`)

        manager = new Person(3, 'Bambang', 0, 30);
        expect(introducePerson(manager)).toBe('Hi, My name is Bambang')
    }) 
})