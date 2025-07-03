interface Product {
    readonly id: number;
    title: string;
    description?: string;
  }
  
  const product: Product = {
    id: 1,
    title: "Планшет",
    description: "Компактный и быстрый",
  };
  
  console.log(`Продукт: ${JSON.stringify(product)}`);