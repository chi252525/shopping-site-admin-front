interface ProductList {
  baseSku: string;
  name: string;
  firstCategory?: { name: string; id: number };
  secondCategory?: { name: string; id: number };
  startTime: string;
  endTime: string;
}

export type { ProductList };
