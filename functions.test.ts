const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('testing if it returns an object', ()=>{
        expect(typeof shuffleArray([1, 2, 3, 4, 5])).toBe('object')
    })
    test('testing if returned array is the same length', ()=>{
        expect(shuffleArray([1, 2, 3, 4, 5]).length).toBe(5)
    })
    
})