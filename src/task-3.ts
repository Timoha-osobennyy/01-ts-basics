interface Product {
  id: number;
  title: string;
}

const usernames: string[] = ["alice", "bob", "charlie"];
const ratings: number[] = [4.5, 3.8, 5];
const products: Product[] = [
  { id: 1, title: "Телефон" },
  { id: 2, title: "Ноутбук" },
];

console.log(`Імена користувачів: ${JSON.stringify(usernames)}`);
console.log(`Рейтинги: ${JSON.stringify(ratings)}`);
console.log(`Продукти: ${JSON.stringify(products)}`);