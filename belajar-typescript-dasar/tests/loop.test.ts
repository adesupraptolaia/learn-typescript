describe('loop', () => {
    it('should support loop', () => {
        const names: string[] = ['Ade', 'Budi', 'Caca'];
        for (const name of names) {
            console.log({ name });
        }

        for (const idx in names) {
            console.log({ idx }, names[idx]);
        }

        for (let i = 0; i < names.length; i++) {
            console.log(names[i]);
        }

        const person: { [value: string]: number } = {
            "id": 1,
            "name": 2
        }

        for (const key in person) {
            console.log(key, person[key]);
        }

        for (const [key, value] of Object.entries(person)) {
            console.log(key, value);
        }
    })

    it('should support while loop', () => {
        let i: number = 1;
        while (i < 10) {  
            if (i%2 === 0) {
                i++;
                continue;
            } else if (i === 6) {
                break;
            } else {
                console.log(i);
                i++;
            }
        }

        let stop: boolean = false;
        while (!stop) {
            console.log('loop');
            stop = true;
        }

        let n: number = 0;
        
        do {
            console.log(n);
            n++;
        } while (n <= 0);
    })
})