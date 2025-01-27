describe('Class', () => {
    it('should create a class', () => {
        class Person {
            name: string
            age: number

            constructor(name: string, age: number) {
                this.name = name
                this.age = age
            }
        }

        const bambang: Person = new Person('Bambang', 30);
        expect(bambang.name).toBe('Bambang');
        expect(bambang.age).toBe(30);

        bambang.age = 31;
        expect(bambang.name).toBe('Bambang');
        expect(bambang.age).toBe(31);
    })


})