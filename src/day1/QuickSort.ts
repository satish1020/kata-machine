// The average-case time complexity of QuickSort is O(n*log n), where n is the number of elements to be sorted. In the worst-case scenario, if the pivot chosen is either the largest or smallest element in the list, the time complexity can be O(n^2). However, this scenario is rare and can be mitigated by choosing a good pivot element (e.g., median, or median of medians).
export default function quick_sort(
    arr: number[],
    min = 0,
    max = arr.length - 1,
): void {
    if (min < max) {
        const pivot = partition(arr, min, max);
        quick_sort(arr, min, pivot - 1);
        quick_sort(arr, pivot + 1, max);
    }
}

// arr = [5, 3, 8, 4, 2, 7, 1, 6]

const partition = (arr: number[], min: number, max: number) => {
    // select a pivot to be the max index value in the array.
    // i is initially set to the min index - 1
    // we loop all the length of the array until we reach the max index.
    // if the value of current index is less than pivot we swap and increment i.
    // finally we swap the pivot with the value at i + 1.

    let pivot = arr[max];
    let i = min -1;

    for(let j=0; j< arr.length -1;j++){
        if(arr[i]< pivot){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i+1], arr[max]] = [arr[max], arr[i+1]];
    return i+1;
};
