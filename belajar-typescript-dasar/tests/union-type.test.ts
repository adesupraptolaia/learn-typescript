describe('union type', () => {
    it('should support union type', () => {
        let name: string | number = 'Ade';
        console.log(name);

        name = 20;
        console.log(name);
    })
})