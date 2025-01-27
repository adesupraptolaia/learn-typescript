describe('alias', () => {
    it('should support alias', () => {
        type Price = number;

        type Product = {
            id: number;
            name: string;
            price: Price;
            description?: string; // optional
            readonly cretedAt: Date; // readonly
        }

        const handphone: Product = {
            id: 1,
            name: "handphone",
            price: 5_000_000,
            cretedAt: new Date()
        }

        console.log(handphone);

        handphone.description = "Handphone ini sangat bagus";
        console.log(handphone);
    })
})