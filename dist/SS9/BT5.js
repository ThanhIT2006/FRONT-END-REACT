class DataStore {
    data = [];
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
    remove(index) {
        if (index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
        }
        else {
            console.log("Index không hợp lệ");
        }
    }
}
const numberStore = new DataStore();
numberStore.add(10);
numberStore.add(20);
console.log(numberStore.getAll());
numberStore.remove(0);
console.log(numberStore.getAll());
const stringStore = new DataStore();
stringStore.add("Alice");
stringStore.add("Bob");
console.log(stringStore.getAll());
export {};
//# sourceMappingURL=BT5.js.map