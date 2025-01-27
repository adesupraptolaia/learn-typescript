describe('Class Properties', () => {
    it('should create a class with properties', () => {
        class Person {
            readonly id: number
            name: string
            age?: number

            constructor(id: number, name: string, age?: number) {
                this.id = id
                this.name = name
                this.age = age
            }
        }

        const bambang: Person = new Person(1, 'Bambang', 30);
        expect(bambang.id).toBe(1);
        expect(bambang.name).toBe('Bambang');
        expect(bambang.age).toBe(30);

        bambang.age = 31;
        expect(bambang.id).toBe(1);
        expect(bambang.name).toBe('Bambang');
        expect(bambang.age).toBe(31);

        // error
        // bambang.id = 2;

        const budi: Person = new Person(2, 'Budi');
        expect(budi.id).toBe(2);
        expect(budi.name).toBe('Budi');
        expect(budi.age).toBeUndefined();
    })

    it('should create class with method', () => {
        class Person {
            readonly id: number
            name: string
            age?: number

            constructor(id: number, name: string, age?: number) {
                this.id = id
                this.name = name
                this.age = age
            }

            sayHello() {
                return `Hello ${this.name}`
            }
        }    

        const bambang: Person = new Person(1, 'Bambang', 30);
        expect(bambang.id).toBe(1);
        expect(bambang.name).toBe('Bambang');
        expect(bambang.age).toBe(30);
        expect(bambang.sayHello()).toBe('Hello Bambang')

        bambang.name = 'Budi';
        expect(bambang.id).toBe(1);
        expect(bambang.name).toBe('Budi');
        expect(bambang.age).toBe(30);
        expect(bambang.sayHello()).toBe('Hello Budi')
    })
})