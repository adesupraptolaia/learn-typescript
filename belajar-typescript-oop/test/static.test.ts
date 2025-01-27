describe('Static', () => {
    it('should create class static configuration', () => {
        class Configuration {
            static NAME: string = 'Configuration';
            static VERSION: string = '1.0.0';
            static AUTHOR: string = 'Ade Laia';
        }

        // error
        // const abc = new Configuration();
        // expect(abc.NAME).toBe('Configuration');

        expect(Configuration.NAME).toBe('Configuration');
        expect(Configuration.VERSION).toBe('1.0.0');
        expect(Configuration.AUTHOR).toBe('Ade Laia');
    })

    it('should create class static properties', () => {
        class CounterStatic {
            static count: number = 0;

            id: number

            constructor(id: number) {
                this.id = id
            }

            increment() {
                CounterStatic.count++;
            }

            static incrementStatic() {
                CounterStatic.count++;
            }
        }

        const counter = new CounterStatic(1);
        expect(counter.id).toBe(1);
        counter.increment();
        expect(CounterStatic.count).toBe(1);
        counter.increment();
        expect(CounterStatic.count).toBe(2);

        const counter2 = new CounterStatic(2);
        expect(counter2.id).toBe(2);
        counter2.increment();
        expect(CounterStatic.count).toBe(3);
        counter2.increment();
        expect(CounterStatic.count).toBe(4);

        const counter3 = new CounterStatic(3);
        expect(counter3.id).toBe(3);
        counter3.increment();
        expect(CounterStatic.count).toBe(5);
        counter3.increment();
        expect(CounterStatic.count).toBe(6);

        // error, object cannot access static. Static properties/method can only be accessed by class
        // counter.incrementStatic();
        // counter2.incrementStatic();
        // counter3.incrementStatic();
    })

    it('should create class static method', () => {
        class MathUtils {
            static sum(...values: number[]): number {
                let total = 0;
                for (const value of values) {
                    total += value;
                }
                return total;
            }
        }

        expect(MathUtils.sum(1, 2, 3)).toBe(6);
        expect(MathUtils.sum(1, 2, 3, 4)).toBe(10);
    })
})