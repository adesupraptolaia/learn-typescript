describe('Instanceof', () => {
    it('should create class with instanceof', () => {
        class Employee{}
        class Person{}
        class Customer extends Person{}

        const employee = new Employee();
        expect(typeof employee).toBe('object')
        expect(employee instanceof Employee).toBe(true)
        expect(employee instanceof Person).toBe(false)
        expect(employee instanceof Customer).toBe(false)

        const person = new Person();
        expect(typeof person).toBe('object')
        expect(person instanceof Employee).toBe(false)
        expect(person instanceof Person).toBe(true)
        expect(person instanceof Customer).toBe(false)
        
        const customer = new Customer();
        expect(typeof customer).toBe('object')
        expect(customer instanceof Employee).toBe(false)
        expect(customer instanceof Person).toBe(true)
        expect(customer instanceof Customer).toBe(true)
    })
})