var marks: number[] = [10, 30, 40];
var i: number;

i = 1; 

while (i <= 10)
{  
     console.log(i); i++;
}

i = 1; do { console.log(i); i++; } while (i <= 10);

for (i = 1; i <= 10; i++) { console.log(i); }

for (var idx in marks) { console.log(`Marks for student ${ parseInt(idx) + 1} are ${marks[idx]}`); }

for (var m of marks) { console.log(m); }
