describe('Method Overriding', () => {
    it('should create class with method overriding', () => {
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
        class Student extends Person {
            id: number;
            constructor(id: number, name: string, age: number) {
                super(name, age);
                this.id = id
            }

            sayHello(name: string): string {
                const result = super.sayHello(name); 
                return `${result}, I'm ${this.age} years old, I'm a student`
            }
        }

        const bambang: Person = new Person('Bambang', 30);
        expect(bambang.name).toBe('Bambang');
        expect(bambang.age).toBe(30);
        expect(bambang.sayHello("Budi")).toBe('Hello Budi, My name is Bambang');

        const student: Student = new Student(1, 'Bambang', 30);
        expect(student.id).toBe(1);
        expect(student.name).toBe('Bambang');
        expect(student.age).toBe(30);
        expect(student.sayHello("Budi")).toBe(`Hello Budi, My name is Bambang, I'm 30 years old, I'm a student`);
    })
})