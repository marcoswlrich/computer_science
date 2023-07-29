let arrayStrings = ["a", "b", "c", "d"];

//push --add item na lista na ultima posicao
arrayStrings.push("e"); //0(1)

//pop --exclui ultimo da lista
arrayStrings.pop(); //0(1)

//unshift --add item na primeira posicao da lista
arrayStrings.unshift("x"); // O(n)

//splice add item na posicao escolhida
arrayStrings.splice(2, 1, "marcos"); // O(n)

console.log(arrayStrings);

type NumIndexObject = { [index: number]: any };

class MyArray<T> {
  public length: number;
  private data: NumIndexObject;

  constructor() {
    this.length = 0;
    this.data = Object.create({});
  }

  public get(index: number): T | null {
    if (index > 0 && index < this.length) {
      return this.data[index];
    }
    return null;
  }

  public push(item: T): number {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }

  public pop(): T | null {
    if (this.length > 0) {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
    return null;
  }

  public delete(index: number): T | null {
    if (index >= 0 && index < this.length) {
      const item = this.data[index];
      this.shiftItems(index);
      return item;
    }
    return null;
  }

  shiftItems(index: number): void {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray<string>();
newArray.push("hello");
newArray.push("word");
newArray.push("!!!!");
newArray.pop();
newArray.push("marcos");
newArray.delete(1);
console.log(newArray);
