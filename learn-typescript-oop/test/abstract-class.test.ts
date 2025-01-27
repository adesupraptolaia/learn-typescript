describe('Abstract Class', () => {
    it('should create abstract class', () => {
        abstract class Person {
            readonly id: number
            abstract name: string

            constructor(id: number) {
                this.id = id
            }

            hello(): string {
                return 'hello'
            }

            abstract sayHello(name: string): string
        }

        class Employee extends Person {
            name: string
            constructor(id: number, name: string) {
                super(id)
                this.name = name
            }

            sayHello(name: string): string {
                return `hello ${name}`
            }
        }

        const employee = new Employee(1, 'John')
        expect(employee.id).toEqual(1)
        expect(employee.name).toEqual('John')
        expect(employee.hello()).toEqual('hello')
        expect(employee.sayHello('John')).toEqual('hello John')
    })
})