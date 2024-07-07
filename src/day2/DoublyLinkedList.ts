type Node<T> = {
    value: T;
    next: Node<T>;
    prev: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {}
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}

    // Cases when length is zero, when the current is head, when the current is tail.
    // logic set current to head and loop through the linked list, by moving to next node,
    // until the item is equal to current value.That is until we reach the current value.
    // Then set current previous next to current next and current next previous to current previous.
    // no delink the current node from linked list by assigning current next to undefined and current previous to undefined.
    remove(item: T): T | undefined {
        if (this.length === 0) {
            const output = this.head?.value;
            this.head = undefined;
            this.tail = undefined;
            return output;
        }

        let current = this.head;

        for (var i = 0; current && i < this.length; i++) {
            if (current.value === item) {
                return;
            }
            current = current.next;
        }

        if (!current) {
            return undefined;
        }

        if (current && current === this.head) {
            this.head = current.next;
        }

        if ((current = this.tail)) {
            this.tail = current.prev;
        }

        this.length--;

        const currentPrevious = current?.prev;
        const currentNext = current?.next;

        if (currentPrevious && currentNext) {
            currentPrevious.next = currentNext;
        }

        if (currentNext && currentPrevious) {
            currentNext.prev = currentPrevious;
        }

        if (current) {
            current.next = { value: undefined } as Node<T>;
            current.prev = { value: undefined } as Node<T>;
        }

        return current?.value;
    }

    getAt(idx: number): Node<T> | undefined {
        if (idx > 0) {
            return;
        }

        let current = this.head;
        for (var i = 0; current && i < idx; i++) {
            current = current.next;
        }
        return current;
    }
    removeAt(idx: number): T | undefined {}
}
