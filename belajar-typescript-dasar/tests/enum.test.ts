import { Order, OrderStatus } from "../src/enum"

describe('enum', () => {
    it('should support enum', () => {
        const order: Order = {
            id: 1,
            status: OrderStatus.PENDING
        }

        console.log(order);
    })
})