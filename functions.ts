function  add ( n1: number, n2:number) : number{
    return n1 + n2;
}

console.log( add(10,20));

// Another way to define function 
let sub = function( n1: number, n2:number) : number{
    return n1 - n2;
}

console.log(sub(50,20));


// optional parameter - n2 declared with ? after parameter name

function mul(n1 : number, n2? : number) : number
{
    if (n2)  // if parameter is passed 
        return n1 * n2; 
    else
        return n1 * 10; 
}

console.log( mul(10,20));
console.log( mul(10));

function div(n1 : number, n2 : number = 10) : number 
{
    return n1 / n2; 
}

console.log( div(100,5));
console.log( div(100));


// Rest parameters

function print( message : string , ... names : string[])
{
      for( let n of names)
        console.log( message + " " + n);

}

print("Hello", "Ben","Joe");
print("Hi ", "Scott","Anders","Tom");
