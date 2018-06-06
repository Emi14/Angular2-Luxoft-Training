export class Product {
  name: string;
  price: number;
  manufacturer: string;

  constructor(name: string, manufacturer: string, price: number) {
    this.price = price;
    this.name = name;
    this.manufacturer = manufacturer;
  }
}
