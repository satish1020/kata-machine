// import {useState} from 'react';

export default function MinHeap() {
    let length: number = 0;
    let data: number[] =[];

    // each of the nodes are given an index. the parent of 5 and 6 is Math.Floor(5-1/2) and Math.floor(6-1/2) which is 2. So 5 and 6
    // have same parent 2.
    const getParentIndex = (index: number): number => {
        return Math.floor(index - 1 / 2);
    };

    // left child of first node is 2*1+ 1 = 2
    const getLeftChildIndex = (index: number): number => {
        return 2 * index + 1;
    };

    // right child of first node is 2*2 + 1 = 5.
    const getRightChildIndex = (index: number): number => {
        return 2 * index + 2;
    };

    // we will write heapify down recursively.
    // this can also be done in an iterative approach.
    // heapify down is done based on index number.
    const heapifyDown = (index: number) => {
        const leftChildIndex = getLeftChildIndex(index);
        const rightChildIndex = getRightChildIndex(index);
        if (index >= data.length || leftChildIndex >= data.length) {
            return;
        }
        let leftChild = data[leftChildIndex];
        let rightChild = data[rightChildIndex];
        let currentValue = data[index];

        // if right child is the smallest when compared to left value and current value.
        // since the top node should have the least value, we will swap the current value and right value.
        //
        if (leftChild > rightChild && rightChild > currentValue) {
            // current value will be right value
            data[index] = rightChild;
            // right value will be current value.
            data[rightChildIndex] = currentValue;
            // since current value will now have lease value, we will further heapify down the right value, until we the last value.
            heapifyDown(rightChildIndex);
        }
        if (rightChild > leftChild && currentValue > leftChild) {
            data[index] = rightChild;
            data[rightChildIndex] = currentValue;
            heapifyDown(leftChild);
        }
    };

    // we are writing this heapifyUp method recursively.
    // heapify up is done based on the index number.
    // Determine the parent index of the current index. Check if parent value is greater than the current value.
    // If parent value is more than current value. We need to heapify up current value. As the child nodes should always
    // be larger than the parent in min heap. Repeat this process until we reach index === 0 where the recursive operations stops.
    const heapifyUp = (index: number): void => {
        if (index === 0) {
            return;
        }
        const parentIndex = getParentIndex(index);
        const parentValue = data[parentIndex];
        const currentValue = data[index];

        // we need to heapifyUp the current value until the current value is greater than the parent.
        // But if parent value is greater than current value. We need to swap current element with the parent value.
        // We need to heapify up the parent value.
        if (parentValue > currentValue) {
            data[index] = parentValue;
            data[parentIndex] = currentValue;
            heapifyUp(parentIndex);
        }
    };

    // In min heap if we want to insert a new node or array element, the way we do is
    // we delete the first element and we insert the new value at the last element of the array.
    // so the value will be inserted in the last index of an array. Then we heapify this newly inserted value in the array.
    // With each element inserted in a heap or array. The length of the array or heap will be increased by 1, so we increase length by 1.
    const insertValue = (value: number): void => {
        // inserted new value in the last element if an array.
        data[length] = value;
        // now we heapify up the last index, where the new value is inserted.
        heapifyUp(length);
        // since we increased the length of array by inserting new element or value in an array. We need to increase length by 1.
        length++;
    };


    //In minimum heap.
    // we delete the first element of an array and return it.
    // Then we take the last element of the array and insert at the first element or head position and then heapify down.
    // whose index is zero
    const deleteValue = (): number => {
        // if there are no elements in a heap or an array and we are trying to delete, return -1 or undefined
        if (length === 0) {
            return -1;
        }
        const output = data[0];
        length--;
        if (length === 0) {
            // we need to return the 1 element in the heap or node.
            // since we will be deleting the only element in a heap or array. The array will not have any numbers in it.
            // So we are assigning an empty array to the data.
            data = [];
            // we are returning the output element  which has the only element deleted from from the array.
            return output;
        }
        // Since in min heap initially we delete the head or the element which is the first  index, we reduce the length by 1
        // we take the last index element and assign it to the first element of index 0.
        data[0] = data[length];
        // we heapify down starting from first index, which has the last element which is kept at the top.
        heapifyDown(0);
        return output;
    };
    

    const performOperation = (): void =>{
        insertValue(5)
        console.log('***insert1', data);
        insertValue(3)
        console.log('***insert2', data);
        insertValue(69)
        console.log('***insert3', data);
        insertValue(420)
        console.log('***insert4', data);
        insertValue(4)
        console.log('***insert5', data);
        insertValue(1)
        console.log('***insert6', data);
        insertValue(8)
        console.log('***insert7', data);
        insertValue(7)
        console.log('***insert8', data);
        console.log('***Insert length', length)

        deleteValue()
        console.log('***delete1', data)
        deleteValue()
        console.log('***delete2', data)
        deleteValue()
        console.log('***delete3', data)
        deleteValue()
        console.log('***delete4', data)
        deleteValue()
        console.log('***delete5', data)
        deleteValue()
        console.log('***delete6', data)
        deleteValue()
        console.log('***delete7', data)
        deleteValue()
        console.log('***delete8', data)
        console.log('***Delete length', length)
    }

    console.log('***insert final output', length)

    return{
        insertValue,
        deleteValue,
        length,
        performOperation
    }
}
