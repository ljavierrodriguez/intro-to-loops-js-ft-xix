/* 

Loops: 

for(initializer; condition; increment) {
    sentences
}

for (index in collection) {
    sentences
}

for (value of collection) {
    sentences
}

while (condition) {
    sentences
}

do {
    sentences
} while (condition)


*/

let nombres = ["Hugo", "Paco", "Luis", "Donald"];

let estudiantes = [
    { name: 'Hugo' },
    { name: 'Paco' },
    { name: 'Luis' },
    { name: 'Donald' },
]

/* 
counter++
counter = counter + 1
counter += 1
*/
//      1               2            4
for (let counter = 1; counter <= 10; counter++) {
    // console.log(counter); // 3
}

for (let counter = 0; counter <= 100; counter += 5) {
    console.log(counter);
}

for (let indice = 0; indice < nombres.length; indice++) {
    console.log(nombres[indice])
}

for (let indice = 0; indice < estudiantes.length; indice++) {
    //console.log(estudiantes[indice]['name']);
    console.log(estudiantes[indice].name);
}

for (let indice in nombres) {
    console.log(indice);
    console.log(nombres[indice]);
}

for (let nombre of nombres) {
    console.log(nombre);
}

for (let indice in estudiantes) {
    console.log(indice);
    console.log(estudiantes[indice]['name']);
}

for (let estudiante of estudiantes) {
    console.log(estudiante);
    //onsole.log(estudiante['name']);
    console.log(estudiante.name);
}


let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero += 1;
}

let pares = 0;
while (pares <= 100) {
    console.log(pares);
    pares += 10;
}

let index = 0;
while (index < nombres.length) {
    console.log(nombres[index]);
    index++;
}

index = 0;
while (index < estudiantes.length) {
    console.log(estudiantes[index].name);
    index++;
}


let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 10)

//                0       1       2
//              0  1    0  1    0  1  
let matriz = [[1, 2], [3, 4], [5, 6]]

console.log(matriz[1][1])
console.log(matriz[2][1])

//let arr = matriz[2]; // [5, 6]
//arr[1]
// matriz[2][1]

let matrix = [
    [
        [1, 2, 3]
    ],
    [
        [4, 5, 6]
    ],
    [
        [7, 8, 9]
    ]
]

console.log(matrix[2][0][2])

// nested loops o loops anidados
for (let arr of matrix) {
    //console.log(arr);
    for (let arr2 of arr) {
        //console.log(arr2);
        for (let x of arr2) {
            console.log(x);
        }
    }
}

let x = 0;
while (x < matrix.length) {
    console.log('Entrando al primer while')
    console.log(matrix[x]);
    let y = 0;
    while (y < matrix[x].length) {
        console.log('Entrando al segundo while')
        console.log(matrix[x][y]);
        let z = 0;
        while (z < matrix[x][y].length) {
            console.log('Entrando al tercer while')
            console.log(matrix[x][y][z])
            z++;
        }
        y++;
    }
    x++;
}