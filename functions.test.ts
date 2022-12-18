const {shuffleArray} = require('./utils')
const { bots, playerRecord } = require("./data");
let testdata = [1,2,3,4,5];

describe('shuffleArray should', () => {
     let result = shuffleArray(testdata);
    test("test shuffleArray function returns an array",()=>{
         expect(Array.isArray(result)).toBe(true);  
          })
    test("test function to return same length as arguments",()=>{
        expect(testdata.length).toBe(result.length)
    })
    test("test all the same items are in array",()=>{ 
        expect(testdata).toEqual(result.sort()); 
    })
    test("test items has been shuffled",()=>{
        expect(testdata).toEqual(expect.arrayContaining(result));
    })
})