describe('Visibility', () => {
    it('should create class with visibility', () => {
        class Counter {
            private count: number = 0;

            // public is default
            public increment() {
                this.count++
            }

            public getCounter(): number {
                return this.count
            }
        }

        const counter = new Counter()
        counter.increment()
        expect(counter.getCounter()).toBe(1)

        counter.increment()
        expect(counter.getCounter()).toBe(2)

        // error
        // counter.count = 10

        class DoubleCounter extends Counter {
            public increment(): void {
                // error
                // this.count += 2
            }
        }
    })

    it('should create class with protected', () => {
        class Counter {
            protected count: number = 0;

            public increment() {
                this.count++
            }

            public getCounter(): number {
                return this.count
            }
        }

        class DoubleCounter extends Counter {
            public increment(): void {
                this.count += 2
            }
        }

        const counter = new DoubleCounter()
        counter.increment()
        expect(counter.getCounter()).toBe(2)

        counter.increment()
        expect(counter.getCounter()).toBe(4)

        // error
        // counter.count = 10
    })
})