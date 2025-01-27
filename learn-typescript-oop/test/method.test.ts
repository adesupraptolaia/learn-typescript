describe('Method', () => {
    it('should create class with method', () => {
        class Person {
            name: string;
            age: number;
            constructor(name: string, age: number) {
                this.name = name;
                this.age = age;
            }
            sayHello(name: string): string {
                return `Hello ${name}, My name is ${this.name}`
            }
        }

        const bambang: Person = new Person('Bambang', 30);
        expect(bambang.name).toBe('Bambang');
        expect(bambang.age).toBe(30);
        expect(bambang.sayHello("Budi")).toBe('Hello Budi, My name is Bambang');
    })
})