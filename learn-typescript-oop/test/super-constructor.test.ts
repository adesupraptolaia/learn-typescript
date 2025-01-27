describe('Super Constructor', () => {
    it('should create class with super constructor', () => {
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
    })
})