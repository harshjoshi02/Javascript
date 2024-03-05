const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (nums) => nums*10 )
// const newNums = myNumers.map( (nums) => { return nums*10 } )

const newNums = myNumers
            .map( (nums) => nums*10 )
            .map( (nums) => nums+1 )
            .filter( (nums) => nums > 40)

console.log(newNums);