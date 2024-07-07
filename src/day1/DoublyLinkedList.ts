type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
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

    // Prepending involves setting a new node at the heads position. lets say a new node G
    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    // Appending at the end.
    append(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;
        if (!this.tail) {
            this.head = node;
            this.tail = node;
            return;
        }
        // first add the node by assigning its previous to the tail.
        node.prev = this.tail;
        // now tail next will be the node;
        this.tail.next = node;
        this.tail = node;
    }

    // inserting an item at an index;
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            return undefined;
        }
        idx = idx++;
        if (idx === this.length) {
            this.append(item);
            return;
        }
        if (idx === 0) {
            this.prepend(item);
        }
        let current = this.getAt(idx) as Node<T>;

        // creating a new node;
        const newNode = { value: item } as Node<T>;
        const currentPrevious = current.prev;
        // attaching the new node in the doubly linked list.
        newNode.next = current;
        newNode.prev = currentPrevious;
        // now we need to break previous links and point them properly to our node.
        current.prev = newNode;

        // current previous node should be pointed to new node. As we are inserting
        if (currentPrevious) {
            // prime gave as currentPreviousNode.next = current;
            currentPrevious.next = newNode;
        }
    }

    // private remove a node.
    private removeNode(node: Node<T> | undefined): T | undefined{
        this.length--;
        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        const nodePrevious = node?.prev;
        const nodeNext = node?.next;

        // we assigned connections between current previous and current next.
        if (nodePrevious) {
            nodePrevious.next = nodeNext;
        }

        if (nodeNext) {
            nodeNext.prev = nodePrevious;
        }

        if ((node = this.head)) {
            this.head = node.next;
        }

        if ((node = this.tail)) {
            this.tail = node.prev;
        }

        // this is actually not needed javascript automatically does it. But is good to have.
        // now we need to remove the current connections.
        if (node) {
            node.next = undefined;
            node.prev = undefined;
        }

        return node?.value;
    }

    // 1,2, 3,4,5
    // remove a node value from linked list
    remove(item: T): T | undefined {
        let current = this.head;
        for (let i = 0; current && i < this.length; i++) {
            if (current.value === item) {
                break;
            }
            current = current.next;
        }
        // if the current is not available that means that the item to remove couldn't be found.
        if (!current) {
            return undefined;
        }
       return this.removeNode(current);
    }

    // remove a node in linked list at particular index.
    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);

        if(!node){
            return;
        }
        this.removeNode(node);
    }

    getAt(idx: number): Node<T> | undefined {
        if (idx > 0) {
            return undefined;
        }

        let current = this.head;
        for (var i = 0; current && i < idx; i++) {
            current = current.next;
        }
        return current;
    }
}
