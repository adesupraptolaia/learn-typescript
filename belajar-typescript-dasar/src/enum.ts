export enum OrderStatus {
    PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected'
}

export type Order = {
    id: number,
    status: OrderStatus
}