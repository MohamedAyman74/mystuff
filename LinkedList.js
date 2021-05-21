class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor(val) {
        this.head = {
            val: val,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    getValues(){
        const arr = [];
        let node = this.head;
        while(node !== null){
            arr.push(node.val);
            node = node.next;
        }
        return arr;
    }

    append(val) {
        const newNode = new Node(val);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(val){
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(idx, val){
      if(idx >= this.length){
        return this.append(val);
      }
      else if(idx === 0){
        return this.prepend(val);
      }
      let previousNode = this.head;
      const insertedNode = new Node(val);
      while(idx != 0){
        if(idx === 1){
          insertedNode.next = previousNode.next;
          previousNode.next = insertedNode;
          this.length++;
          break;
        }
        previousNode = previousNode.next;
        idx--;
      }
      return this;
    }

    //edit remove and insert to use function instead of while loop.
    remove(idx){
      if(idx === 0){
        this.head = this.head.next;
        this.length--;
        return this.getValues();
      }
      let previousNode = this.head;
      let holdingNode = {};
      let nextNode = {};
      while(idx >= 0){
        if(idx === 1){
          holdingNode = previousNode;
        }
        if(idx === 0){
          nextNode = previousNode.next;
        }
        previousNode = previousNode.next;
        idx--;
      }
      holdingNode.next = nextNode;
      this.length--;
      return this.getValues();
    }

    getFirst(){
      return this.head.val;
    }

    getLast(){
      return this.tail.val;
    }

    getIndex(idx){
      if(idx >= this.length){
        return `No index with this number. The maximum length of the list is ${this.length}`
      }
      let previousNode = this.head;
      while(idx > 0){
        previousNode = previousNode.next;
        idx--;
      }
      return previousNode.val;
    }
}

let myLinkedList = new LinkedList("Coconut");
