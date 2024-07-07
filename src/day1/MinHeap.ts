export default class MinHeapClass extends Component {
    // length is used for insertion and deletion
    private length: number;
    private data: number[];

    constructor() {
        super();
        this.length = 0;
        this.data = [];
    }

    // we need 5 private functions heapifyUp, heapifyDown, parent, left children, right children

    private getParent(index: number): number {
        const parentIndex = Math.floor(index -1 /2)
        return parentIndex
    }

    private getLeftChildren(index: number): number{
        const leftChildren = 2* 2 + 1
        return leftChildren
    }

    private getRightChildren(index: number): number{
        const rightChildren = 2* index +1
        return rightChildren
    }

    // writing he
    private heapifyUp(index: number): void{
        if(index === 0){
            return
        }
        const partentIndex = this.getParent(index)
        const currentNodeValue = this.data[index]
        const parentNodeValue = this.data[partentIndex]
        if(parentNodeValue > currentNodeValue){
            this.data[this.getParent(index)] = currentNodeValue
            this.data[index] = parentNodeValue
            this.heapifyUp(partentIndex)
        }
    }

    private heapifyDown(index: number): void {
        const currentNodeIndex = this.data[index]
        const leftNodeIndex= this.getLeftChildren(index)
        const rightNodeIndex = this.getRightChildren(index)

        if(index >= this.data.length ||  leftNodeIndex >= this.data.length){
            return
        }

        const currentNodeValue = this.data[currentNodeIndex]
        const leftNodeValue = this.data[leftNodeIndex]
        const rightNodeValue = this.data[rightNodeIndex]

        if(leftNodeValue > rightNodeValue &&  currentNodeValue > rightNodeValue){
            this.data[currentNodeIndex] = rightNodeValue
            this.data[rightNodeIndex] = currentNodeValue
            this.heapifyDown(rightNodeIndex)
        }
        if(rightNodeValue > leftNodeValue && currentNodeValue > leftNodeValue){
            this.data[currentNodeIndex] = leftNodeValue
            this.data[leftNodeIndex] = currentNodeValue
            this.heapifyDown(leftNodeIndex)
        }
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(length) 
        this.length ++;
    }

    delete(): number {
        if(this.length === 0){
            return -1;
        }
        const lastNode = this.data[this.length]
        const firstNode = this.data[0]

        firstNode = lastNode
    }


    }
}
