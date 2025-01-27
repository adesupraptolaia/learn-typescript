import { Seller } from "../src/seller"

describe('seller', () => {
    it('should support interface', () => {
        const seller: Seller = {
            id: 1,
            name: 'Ade',
            email: 'a@b.com'
        }

        console.log(seller);
    })
})