import { sayHello } from "../src/say-hello"

describe('sayHello', () => {
    it('should say hello', () => {
        expect(sayHello('Ade')).toBe('Hello Ade')
    })
})