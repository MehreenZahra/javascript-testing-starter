import { describe, it, expect, test } from "vitest";
import { factorial, fizzBuzz, max } from "../src/intro";

describe('max',() =>{
    it('should return the first argument if it is greater', () => {
        //AAA
        // //Arrange
        // const a = 2;
        // const b = 1;
        // //Act
        // const result = max(2,1);
        // //Assert
        expect(max(2,1)).toBe(2)
    });
    it('should return the second argument if it is greater', () => {
        expect(max(1,2)).toBe(2)
    });
    it('should return the first argument if they are equal', () => {
        expect(max(1,1)).toBe(1)
    })
})

describe('fizzBuzz', () => {
    it('number is divisible by 3 and 5', ()=> {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    });
    it('number is divisible by 3', ()=> {
        expect(fizzBuzz(9)).toBe('Fizz')
    });
    it('number is divisible by 5', ()=> {
        expect(fizzBuzz(10)).toBe('Buzz')
    });
    it('number is not divisible by 3 and 5', ()=> {
        expect(fizzBuzz(2)).toBe('2')
    });
});
//0! = 1
//1! = 1
//2! = 2 * 1 = 2
//3! = 3 * 2 * 1 = 6
//4! = 4 * 3 * 2 * 1 = 24
describe('factorial', ()=> {
    it('should return 1 if given 0', ()=>{
        expect(factorial(0)).toBe(1)
    });
    it('should return 1 if given 1', ()=>{
        expect(factorial(1)).toBe(1)
    });
    it('should return 2 if given 2', ()=>{
        expect(factorial(2)).toBe(2)
    });
    it('should return 6 if given 3', ()=>{
        expect(factorial(3)).toBe(6)
    });
    it('should return 24 if given 4', ()=>{
        expect(factorial(4)).toBe(24)
    });
    it('should return undefined if given negative number', ()=>{
        expect(factorial(-1)).toBeUndefined()
    })
})