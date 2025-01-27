describe('Inheritance', () => {
    it('should create class with inheritance', () => {
        class Person {
            name: string

            constructor(name: string) { 
                this.name = name
            }
        }

        class Employee extends Person {
            id: number

            constructor(id: number, name: string) {
                super(name)
                this.id = id
            }
        }

        const employee = new Employee(1, 'Bambang')
        expect(employee.id).toBe(1)
        expect(employee.name).toBe('Bambang')

        employee.name = 'Budi'
        employee.id = 2
        expect(employee.id).toBe(2)
        expect(employee.name).toBe('Budi')


        class Manager extends Employee {
            role: string

            constructor(id: number, name: string, role: string) {
                super(id, name)
                this.role = role
            }
        }

        const manager = new Manager(1, 'Bambang', 'Manager')
        expect(manager.id).toBe(1)
        expect(manager.name).toBe('Bambang')
        expect(manager.role).toBe('Manager')

        manager.name = 'Budi'
        expect(manager.id).toBe(1)
        expect(manager.name).toBe('Budi')
        expect(manager.role).toBe('Manager')
    })

    it('should interface inheritance', () => {
        interface canSayHello {
            sayHello(name: string): string
        }
        interface canSayHai {
            sayHai(name: string): string
        }

        class Person implements canSayHello, canSayHai {
            name: string

            constructor(name: string) {
                this.name = name
            }

            sayHello(name: string): string {
                return `Hello ${name}, My name is ${this.name}`
            }

            sayHai(name: string): string {
                return `Hai ${name}, My name is ${this.name}`
            }
        }

        const person = new Person('Bambang')
        expect(person.sayHello('Budi')).toBe('Hello Budi, My name is Bambang')
        expect(person.sayHai('Budi')).toBe('Hai Budi, My name is Bambang')


        person.name = 'Nana'
        expect(person.sayHello('Budi')).toBe('Hello Budi, My name is Nana')
        expect(person.sayHai('Budi')).toBe('Hai Budi, My name is Nana')
    })
})