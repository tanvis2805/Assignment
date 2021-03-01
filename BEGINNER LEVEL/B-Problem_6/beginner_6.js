// Beginner Level : Problem - 6
//Took help, need to study arrays 


// Function to get the first non consecutive number 
function nonConsecutiveNo(a, n) {

    let total = Math.floor((n + 1) * (n + 2) / 2);
    for (let i = 0; i < n; i++)
        total -= a[i];
    return total;
}

//Sample test case

let arr = [1, 2, 3, 4, 5, 7, 8];
let n = arr.length;
let miss = (nonConsecutiveNo(arr, n));
console.log(miss + 1);

//END OF CODE


