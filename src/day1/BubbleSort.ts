// input [9, 3, 7, 4, 69, 420, 42]; --> n = 7
// after first inner loop   [3, 7, 4, 9, 42, 69, 420]; --> n-1 = 6   i = 1  j = n - i = 7 -1 = 6
// after second inner loop  [3, 4, 7, 9, 42, 69, 420]; --> n-2 = 5   i = 2  j = n - i = 7 -2 = 5
// after third inner loop   [3, 4, 7, 9, 42, 69, 420]; --> n-3 = 4   i= 3  j = n - i = 7 -3 = 4
// after fourth inner loop  [3, 4, 7, 9, 42, 69, 420]; --> n-4 = 3   i = 4  j = n - i = 7 -4 = 3
// after fifth inner loop   [3, 4, 7, 9, 42, 69, 420]; --> n-5 = 2   i = 5   j = n - i = 7 -5 = 2
// after sixth inner loop   [3, 4, 7, 9, 42, 69, 420]; --> n-6 = 1   i = 6 ---> n -1 = 7 -1 = 6,  j = n - i = 7 -6 = 1

// as shown above i is the outer loop and j is the inner loop. 
// i is the number of times we need to iterate through the array.
// j is the number of times we need to compare the elements in the array.

export default function bubble_sort(arr: number[]): void {
    const n = arr.length;
    let swapped: boolean;
    for (let i = 0; i < n - 1; i++) { // Corrected to loop until n - 1
        swapped = false;
        for (let j = 0; j < n - i; j++) { // Updated loop to go from 0 to n - i
            let left = arr[j];
            let right = arr[j + 1];
            if (left > right) {
                // Swap elements directly in the array using left and right
                arr[j] = right;
                arr[j + 1] = left;
                swapped = true;
            }
        }
        if (!swapped) break; // If no two elements were swapped by inner loop, then break
    }
}

export  function bubble_sort_alternative1(arr: number[]): void {
    const n = arr.length;
    let swapped: boolean;
    for (let i = 0; i < n - 1; i++) { // Corrected to loop until n - 1
        swapped = false;
        for (let j = 0; j < n - 1 - i; j++) { // Loop with reducing size
            let left = arr[j];
            let right = arr[j + 1];
            if (left > right) {
                // Swap elements directly in the array using left and right
                arr[j] = right;
                arr[j + 1] = left;
                swapped = true;
            }
        }
        if (!swapped) break; // If no two elements were swapped by inner loop, then break
    }
}

export  function bubble_sort_alternative2(arr: number[]): void {
    const n = arr.length;
    for (let i = 0; i < n; i++) { // Loop from 0 to n
        for (let j = 0; j < n - 1; j++) { // Always loop until n - 1
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in wrong order
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// alternative

export  function bubble_sort_alternative3(arr: number[]): void {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) { // Loop until n - 1
        for (let j = 0; j < n - 1 - i; j++) { // Correct, loops with reducing size
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in wrong order
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}