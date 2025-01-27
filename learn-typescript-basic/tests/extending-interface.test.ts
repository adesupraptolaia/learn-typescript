describe('extending interface', () => {
    it('should support extending interface', () => {
        interface Employee {
            id: number;
            name: string;
        }
        interface Developer extends Employee {
            language: string
        }
        const developer: Developer = {
            id: 1,
            name: 'Ade',
            language: 'TypeScript'
        }
        console.log({developer});

        const bambang: Employee = {
            id: 2,
            name: 'Bambang'
        }
        console.log({bambang})
    });


    it('should support extending interface function', () => {
        interface Employee {
            id: number;
            name: string;
            getSalary(): number;
        }
        interface Developer extends Employee {
            language: string;
            sayHello(name: string): string
        }
        const developer: Developer = {
            id: 1,
            name: 'Ade',
            language: 'TypeScript',
            getSalary() {
                return 150_000_000;
            },
            sayHello(name: string): string {
                return `Hello ${name}, I'm ${this.name} a ${this.language} developer`;
            },
        }
        console.log({developer});
        expect(developer.getSalary()).toBe(150_000_000);
        expect(developer.sayHello('Budi')).toBe("Hello Budi, I'm Ade a TypeScript developer");

        const bambang: Employee = {
            id: 2,
            name: 'Bambang',
            getSalary() {
                return 5_000_000;
            }
        }
        console.log({bambang});
        expect(bambang.getSalary()).toBe(5_000_000);
    });

    it('should support intersection interface', () => {
        interface HasId {
            id: number;
        }
        interface HasName {
            name: string;
        }
        type HasIdAndName = HasId & HasName;
        const developer: HasIdAndName = {
            id: 1,
            name: 'Ade'
        }
        console.log({developer});

        interface Person extends HasId, HasName {
            age: number
        }

        const bambang: Person = {
            id: 2,
            name: 'Bambang',
            age: 20
        }
        console.log({bambang});

        interface Employee {
            id: number;
            name: string;
            age: number;
            getSalary(): number;
        }

        interface Person {
            id: number;
            name: string;
        }
    })

    it('should support type assertion', () => {
        interface Person {
            name: string;
            sayHello(name: string): string
        }

        const person: any = {
            id: 1,
            name: 'Ade'
        }

        const ade: Person = person as Person;

        console.log({ade});
        ade.name = 'Budi';
        console.log({ade});

        // error
        // ade.sayHello('Budi');
        // ade.age = 20;

        interface Developer {
            id: number;
            getSalary(): number;
        }

        // error, cant cast interface to interface
        // const developerAde: Developer = ade as Developer;
        // console.log({developerAde});
    })
});