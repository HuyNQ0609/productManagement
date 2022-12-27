class Product{
    constructor(name, price, number, img) {
        this.name = name;
        this.price = price;
        this.number = number;
        this.img = img;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getNumber() {
        return this.number;
    }
    setName(value) {
        this.name = value;
    }
    setPrice(value) {
        this.price = value;
    }
    setNumber(value) {
        this.number = value;
    }
}