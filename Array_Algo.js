testArr = [6,3,5,1,2,4]
var sum=0;
for(let i=0; i<testArr.length; i++){
    sum+=testArr[i];
    console.log("Num:", testArr[i], "Sum:", sum );
}

// Expected Outcome
// Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21

// echo "# Arrays_Algo" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/jcambray10/Arrays_Algo.git
// git push -u origin main

testArr = [6,3,5,1,2,4]
var sum=0;
for(let i=0; i<testArr.length; i++){
    testArr[i] = testArr[i] * i;
}
console.log(testArr);

// Expected Outcome Console.log
// [0,3,10,3,8,20]