describe('object', () => {
    it('should support object', () => {
        const handphone: {
            id: number,
            name: string,
            price: number,
            description?: string,
            readonly cretedAt: Date
        } = {
            id: 1,
            name: "handphone",
            price: 5000000,
            cretedAt: new Date()
        };
        
        console.log(handphone);
        handphone.description = "Handphone ini sangat bagus";
        console.log(handphone);
    });

    it('should support type object', () => {
        const person: {[s: string]: number} = {
            "id": 1,
            "name": 2
        }
        
        for (const key in person) {
            console.log(key, person[key]);
        }

        const data: {[s: number]: string} = {
            1: 'A',
            2: 'B',
            3: 'C',
            4: 'D',
            5: 'E',
            6: 'F',
            7: 'G',
            8: 'H',
            9: 'I',
            10: 'J'
        }

        for (const key in data) {
            console.log(key, data[key]);
        }

        for (let index = 1; index <= 10; index++) {
            console.log(index, data[index]);
        }
    });
});