describe('conditional', () => {
    it('should support conditional', () => {
        function getResult(examValue: number): string {
            if (examValue >= 80) {
                return 'Very Good';
            } else if (examValue >= 60) {
                return 'Good';
            } else {
                return 'Try Again!';
            }
        }

        expect(getResult(90)).toBe('Very Good');
        expect(getResult(70)).toBe('Good');
        expect(getResult(40)).toBe('Try Again!');
    })

    it('should support ternary operator', () => {
        function getResult(examValue: number): string {
            return examValue >= 80 ? 'Very Good' : 'Try Again!';
        }

        expect(getResult(90)).toBe('Very Good');
        expect(getResult(40)).toBe('Try Again!');
    })

    it('should support switch case', () => {
        function getResult(examValue: string): string {
            switch (examValue) {
                case "A":
                    return 'Perfect';
                case "B":
                    return 'Very Good';
                case "C":
                    return 'Good';
                default:
                    return 'Try Again!';
            }
        }

        expect(getResult('A')).toBe('Perfect');
        expect(getResult('B')).toBe('Very Good');
        expect(getResult('C')).toBe('Good');
        expect(getResult('D')).toBe('Try Again!');
    })
})