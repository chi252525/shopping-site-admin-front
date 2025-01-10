interface ProductList {
  baseSku: string;
  name: string;
  firstCategory?: { label: string; value: number };
  secondCategory?: { label: string; value: number };
  startTime: string;
  endTime: string;
}

export type { ProductList };
