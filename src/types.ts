export type Category = 'Bills' | 'Takeout' | 'Misc' | 'Subscriptions' | 'Transport';

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: Category;
  bank: string;
}

export interface Budget {
  category: Category;
  limit: number;
}

export interface User {
  name: string;
  email: string;
}
