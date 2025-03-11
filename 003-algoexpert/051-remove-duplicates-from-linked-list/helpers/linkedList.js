export const createLinkedList = (SolutionLinkedList) => {
  class LinkedList extends SolutionLinkedList {
    addMany(values) {
      let current = this;

      while (current.next !== null) {
        current = current.next;
      }

      for (const value of values) {
        current.next = new LinkedList(value);
        current = current.next;
      }

      return this;
    }

    getNodesInArray() {
      const nodes = [];
      let current = this;

      while (current !== null) {
        nodes.push(current.value);
        current = current.next;
      }

      return nodes;
    }
  };

  return LinkedList;
};