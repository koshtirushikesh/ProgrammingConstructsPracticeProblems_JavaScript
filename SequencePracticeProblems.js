//UC1
let randomNumber=Math.floor(Math.random() * 10);
console.log(randomNumber);

//UC2
let die = (Math.floor(Math.random() * 10)%6)+1;
console.log(die);

//UC3
let die_One= (Math.floor(Math.random() * 10)%6)+1;
let die_Two= (Math.floor(Math.random() * 10)%6)+1;
console.log(die_One + die_Two);

//if and else 
//UC1
{
    let random_One = (Math.floor(Math.random() * 900)+100);
    let random_Two = (Math.floor(Math.random() * 900)+100);
    let random_Three = (Math.floor(Math.random() * 900)+100);
    let random_Four = (Math.floor(Math.random() * 900)+100);
    let random_Five = (Math.floor(Math.random() * 900)+100);
    
    console.log(random_One);
    console.log(random_Two);
    console.log(random_Three);
    console.log(random_Four);
    console.log(random_Five);
    
}
//UC3
{
    let year =2004;
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
    {
        console.log("Leap Year");
    }
    else
    {
        console.log("Not Leap Year");
    }
}
//UC4
{
    let randomNumber=Math.floor(Math.random() * 10);
    
    if(randomNumber<=5)
    {
        console.log("Head");
    }
    else
    {
        console.log("Tail");
    }
}

// if else if and else
//UC1
let num=6;

if(num==1)
console.log("One");
else if(num==2)
console.log("Two");
else if(num==3)
console.log("Three");
else if(num==4)
console.log("Four");
else if(num==5)
console.log("Five");
else if(num==6)
console.log("Six");
else if(num==7)
console.log("Seven");
else if(num==8)
console.log("Eight");
else if(num==9)
console.log("Nine");

//UC2
let day = 5;

if(day==1)
console.log("Monday");
else if(day==2)
console.log("Tuesday");
else if(day==3)
console.log("Wednesday")
else if(day==4)
console.log("Thursday");
else if(day==5)
console.log("Friday");
else if(day==6)
console.log("Saturday");
else
console.log("Sunday");

//UC3
num = 100;

if(num==1)
console.log("one");
else if(num==10)
console.log("Ten");
else if(num==100)
console.log("hundred");
else
console.log("Thousand");

//uc4
let a=4,b=5,c=6;
let operation=2;

if(operation==1)
    console.log("a + b * c: " + a+b*c);
else if(operation==2)
    console.log("a % b + c: " + a % b + c);
else if(operation==3)
    console.log("c + a / b: " +c + a / b);
else
    console.log("a * b + c: " +a * b + c);

// case
//uc1
num=6;

switch(num)
{
    case 1: console.log("One"); break;
    case 2: console.log("Two"); break;
    case 3: console.log("Three"); break;
    case 4: console.log("Four"); break;
    case 5: console.log("Five"); break;
    case 6: console.log("Six"); break;
    case 7: console.log("Seven"); break;
    case 8: console.log("Eight"); break;
    case 9: console.log("Nine"); break;
}

//UC2
day=7;

switch(day)
{
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;   
}

//UC3
num = 100;

switch(num)
{
    case 1   :  console.log("one"); break;
    case 10  :  console.log("Ten"); break;
    case 100 :  console.log("Hundred"); break;
    case 1000:  console.log("Thousend"); break;
}
// uc4  

let unit=24;
let option=1;

switch(option)
{
    case 1: console.log("Feet to Inch: "+ unit*12); break;
    case 2: console.log("Feet to Meter: " + unit*0.3048); break;
    case 3: console.log("Inch to Feet: "+ unit/12); break;
    case 4: console.log("Meter to Feet: "+ unit/0.3048); break;
}