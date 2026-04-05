import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Transaction, Budget, Category } from './types';
import { DEFAULT_BUDGETS, SEED_TRANSACTIONS } from './constants';

interface StoreContextType {
  transactions: Transaction[];
  budgets: Budget[];
  addTransactions: (transactions: Transaction[]) => void;
  updateCategory: (id: string, category: Category) => void;
  getCategorySpending: () => Record<Category, number>;
  totalSpending: number;
}

const StoreContext = createContext<StoreContextType | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>(SEED_TRANSACTIONS);
  const [budgets] = useState<Budget[]>(DEFAULT_BUDGETS);

  const addTransactions = useCallback((transactions: Transaction[]) => {
    setTransactions(prev => [...prev, ...transactions]);
  }, []);

  const updateCategory = useCallback((id: string, category: Category) => {
    setTransactions(prev =>
      prev.map(t => (t.id === id ? { ...t, category } : t))
    );
  }, []);

  const getCategorySpending = useCallback(() => {
    const spending: Record<string, number> = {};
    for (const t of transactions) {
      spending[t.category] = (spending[t.category] || 0) + t.amount;
    }
    return spending as Record<Category, number>;
  }, [transactions]);

  const totalSpending = transactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <StoreContext.Provider
      value={{ transactions, budgets, addTransactions, updateCategory, getCategorySpending, totalSpending }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within StoreProvider');
  return context;
}
