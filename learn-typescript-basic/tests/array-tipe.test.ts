describe('array tipe', () => {
    it('should same with array', () => {
        const names: string[] = ['Ade', 'Budi', 'Caca'];
        expect(names).toEqual(['Ade', 'Budi', 'Caca']);

        names.push('Dedi');
        expect(names).toEqual(['Ade', 'Budi', 'Caca', 'Dedi']);
    })

    it('readonly array', () => {
        const names: readonly string[] = ['Ade', 'Budi', 'Caca'];
        expect(names).toEqual(['Ade', 'Budi', 'Caca']);

        // not allowed
        // names.push('Dedi');
        // expect(names).toEqual(['Ade', 'Budi', 'Caca']);
    })

    it('tuple', () => {
        const person: readonly [string, number] = ['Ade', 20];
        expect(person).toEqual(['Ade', 20]);

        // not allowed
        // person[0] = 'Budi';
        // expect(person).toEqual(['Budi', 20]);
    })
})