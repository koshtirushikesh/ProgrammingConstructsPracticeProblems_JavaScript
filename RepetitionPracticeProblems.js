
// for loop
//uc1

let tableOfTwo=2;
let n =10;
for(let i =1; i<n && tableOfTwo <= 256 ;i++)
{
    console.log(tableOfTwo);
    tableOfTwo = tableOfTwo + tableOfTwo; 
}


// while loop
//uc1
tableOfTwo=2;
n =10;
let i =1; 
while(i<n && tableOfTwo <= 256)
{
    console.log(tableOfTwo);
    tableOfTwo = tableOfTwo + tableOfTwo;
    i++;
}
//uc3
let headCount = 0;
let tailCount = 0;

while(headCount < 11 && tailCount < 11)
{
    let randomNumber=Math.floor(Math.random() * 10);
    
    if(randomNumber<=5)
    {
        console.log("Head");
        headCount++;
    }
    else
    {
        console.log("Tail");
        tailCount++;
    }
}
console.log("head count: " + headCount);
console.log("tail count: " + tailCount);
