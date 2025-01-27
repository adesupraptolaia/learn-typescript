describe('interface', () => {
    it('should support interface', () => {
        interface Seller {
            id: number;
            name: string;
            email: string;
        }

        const seller: Seller = {
            id: 1,
            name: 'Ade',
            email: 'a@b.com'
        };

        console.log(seller);
    });

    it('should support interface function', () => {
        interface AddFunction {
            (a: number, b: number): number;
        }

        function add(a: number, b: number): number {
            return a + b;
        }

        const addFunction: AddFunction = add;

        expect(addFunction(1, 2)).toBe(3);
    })

    it('should support indexable interface', () => {
        interface StringArray {
            [index: number]: string;
        }

        const names: StringArray = ['Ade', 'Budi', 'Caca'];

        expect(names[0]).toBe('Ade');   
        expect(names[1]).toBe('Budi');  
        expect(names[2]).toBe('Caca');
    })

    it('should support indexable interface non number index', () => {
        interface StringMap {
            [key: string]: string;
        }

        const names: StringMap = {
            "name": "Ade",
            "email": "a@b.com"
        }

        expect(names["name"]).toBe('Ade');
        expect(names["email"]).toBe('a@b.com');

        names["name"] = "Budi";
        names["age"] = "20";

        expect(names["name"]).toBe('Budi');
        expect(names["email"]).toBe('a@b.com');
        expect(names["age"]).toBe('20');
    })
});