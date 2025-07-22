// import isPrime from 'prime-number-check'

// export const checkNumber = (value) =>{
//     return isPrime(value) ?"The number is prime" : "The number is not prime"
// }
// console.log(checkNumber(5))


// function processData(input,callback){
//     try{
//         if(!input){
//             throw new Error("no Input provided")
//         }
//         const result = input.toUpperCase();
//         callback(null,result);
        
//     }catch(err){
//         callback(err);
//     }
// }
// processData("hello",(err,result)=>{
//     if(err) console.log(err)
//     else console.log(result)
// })

 function processData(input){
    return new Promise((resolve,reject)=>{
        try{
            if(!input){
                reject( new Error("no Input provided"))
            }
            const result = input.toUpperCase()
            resolve(result)
        }catch(err){
            reject(err)
        }

    })
    
}

processData("hello")
    .then((result)=>console.log(result))
    .catch((err)=>console.log(err))

