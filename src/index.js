class Sorter {

  constructor() {
    // your implementation
    this.compareFunction = (a, b) => a > b ? 1 : -1;
    this.list = [];
  }

  add(element) {
    // your implementation
    this.list.push(element);
  }

  at(index) {
    // your implementation
    return this.list[index];
  }

  get length() {
    // your implementation
    return this.list.length;
  }

  toArray() {
    // your implementation
    return this.list;
  }

  sort(indices) {
    // your implementation

    // 7 6 5
    // 0 1 2
    let sortedItems = [];

      for (let i = 0; i < indices.length; i++){
          sortedItems.push(this.list[indices[i]]);
      }

      indices.sort((a, b) => a > b ? 1 : -1);
      sortedItems.sort(this.compareFunction);

      for(let j = 0; j < indices.length; j++){
        this.list[indices[j]] = sortedItems[j];
      }

      return this.list;
  }

  setComparator(compareFunction) {
    // your implementation
      this.compareFunction = compareFunction;
  }
}


module.exports = Sorter;