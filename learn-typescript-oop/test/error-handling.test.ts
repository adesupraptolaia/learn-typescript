describe('Error Handling', () => {
    it('should create class with error handling', () => {
        class ValidationError extends Error {
            constructor(message: string) {
                super(message)
            }
        }


        function doubleIt(value: number): number {
            if (value < 0) {
                throw new ValidationError('Value must be greater than 0')
            }
            return value * 2
        }

        try {
            const result = doubleIt(-1);
            console.log(result);
        } catch (error) {
            if (error instanceof ValidationError) {
                expect(error.message).toBe('Value must be greater than 0');
                expect(error instanceof ValidationError).toBe(true);
            } else {
                console.log(`An error occurred ${error}`);
            }
        }

        try {
            let data: any;
            console.log(data.bambang)
        } catch (error) {
            if (error instanceof ValidationError) {
                expect(error.message).toBe('Value must be greater than 0');
                expect(error instanceof ValidationError).toBe(true);
            } else {
                console.log(`An error occurred ${error}`);
            }
        }
    })
})