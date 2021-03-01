// Intermediate Level : Problem - 4

//declaring function to find the pythagorean triplets
function pythaTriplets(triplet) {
    let a, b, c = 0;
    let m = 2;
    while (c < triplet) {
        for (let n = 1; n < m; ++n) {
            a = m * m - n * n;
            b = 2 * m * n;
            c = m * m + n * n;
            if (c > triplet)
                break;
            console.log(a, b, c);
        }
        m++;
    }
}

let triplet = prompt("Enter the limit:");

console.log(pythaTriplets(triplets));

//END OF CODE