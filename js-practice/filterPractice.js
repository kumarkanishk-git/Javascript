let numbers = [1,2,3,4,5,6]
let oddNumbers = numbers.filter(num => num%2!=0)
console.log(oddNumbers) // Output: [1, 3, 5]


let results = [{testCaseId:1,status:"pass"},{testCaseId:2,status:"fail"},{testCaseId:3,status:"pass"},{testCaseId:4,status:"fail"},{testCaseId:5,status:"skip"}]
let skippedResults = results.filter(r=>r.status==="skip")
console.log(skippedResults) // Output: [{testCaseId:5,status:"skip"}]