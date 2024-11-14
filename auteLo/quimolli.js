class CandyStore {
  constructor() {
    this.candies = 0;
  }

  addCandy() {
    this.candies++;
  }
}

const store = new CandyStore();
console.log(store.candies);  // Output: 0

store.addCandy();
console.log(store.candies);  // Output: 1

store.addCandy();
console.log(store.candies);  // Output: 2
