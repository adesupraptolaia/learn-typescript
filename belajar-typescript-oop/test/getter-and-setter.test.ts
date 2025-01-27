describe('Getter and Setter', () => {
    it('should create class with getter and setter', () => {
        class Person {
            private _name: string

            constructor(name: string) {
                this._name = name
            }

            get name() {
                return this._name
            }
            set name(name: string) {
                if (name !== "") {
                    this._name = name
                }
            }
        }
        const person = new Person("Bambang")
        expect(person.name).toBe('Bambang')

        person.name = 'Budi'
        expect(person.name).toBe('Budi')

        // error
        // person._name = 'Budi'

        person.name = ''
        expect(person.name).toBe('Budi')
    })
})