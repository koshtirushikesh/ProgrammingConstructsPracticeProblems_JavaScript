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
