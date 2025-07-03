interface ProductItem {
    id: number;
    title: string;
  }
  
  const usernames: string[] = ["alice", "bob", "charlie"];
  const ratings: number[] = [4.5, 3.8, 5];
  const products: ProductItem[] = [
    { id: 1, title: "Телефон" },
    { id: 2, title: "Ноутбук" },
  ];
  
  console.log(`Имена пользователей: ${JSON.stringify(usernames)}`);
  console.log(`Рейтинги: ${JSON.stringify(ratings)}`);
  console.log(`Продукты: ${JSON.stringify(products)}`);