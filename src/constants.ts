import type { Budget, Category, Transaction } from './types';

export const CATEGORIES: Category[] = [
  'Bills',
  'Takeout',
  'Misc',
  'Subscriptions',
  'Transport',
];

export const CATEGORY_COLORS: Record<Category, string> = {
  Bills: '#3B82F6',
  Takeout: '#F59E0B',
  Misc: '#8B5CF6',
  Subscriptions: '#EF4444',
  Transport: '#10B981',
};

export const DEFAULT_BUDGETS: Budget[] = [
  { category: 'Bills', limit: 500 },
  { category: 'Takeout', limit: 200 },
  { category: 'Misc', limit: 150 },
  { category: 'Subscriptions', limit: 100 },
  { category: 'Transport', limit: 150 },
];

export const SEED_TRANSACTIONS: Transaction[] = [
  { id: '1', date: '2026-03-01', description: 'Electric Bill', amount: 125.30, category: 'Bills', bank: 'Amex' },
  { id: '2', date: '2026-03-02', description: 'Water Bill', amount: 65.20, category: 'Bills', bank: 'Amex' },
  { id: '3', date: '2026-03-03', description: 'Internet Service', amount: 89.99, category: 'Bills', bank: 'Monzo' },
  { id: '4', date: '2026-03-05', description: 'Phone Bill', amount: 75.00, category: 'Bills', bank: 'Monzo' },
  { id: '5', date: '2026-03-10', description: 'Gas Bill', amount: 135.00, category: 'Bills', bank: 'Amex' },
  { id: '6', date: '2026-03-04', description: 'Uber Eats - McDonalds', amount: 23.50, category: 'Takeout', bank: 'Monzo' },
  { id: '7', date: '2026-03-06', description: 'DoorDash - Thai Place', amount: 34.99, category: 'Takeout', bank: 'Monzo' },
  { id: '8', date: '2026-03-08', description: 'Grubhub - Pizza Hut', amount: 28.75, category: 'Takeout', bank: 'Amex' },
  { id: '9', date: '2026-03-12', description: 'DoorDash - Sushi Bar', amount: 45.80, category: 'Takeout', bank: 'Monzo' },
  { id: '10', date: '2026-03-18', description: 'Uber Eats - Chipotle', amount: 18.43, category: 'Takeout', bank: 'Amex' },
  { id: '11', date: '2026-03-22', description: 'Grubhub - Indian Kitchen', amount: 42.50, category: 'Takeout', bank: 'Monzo' },
  { id: '12', date: '2026-03-07', description: 'Amazon Purchase', amount: 24.99, category: 'Misc', bank: 'Amex' },
  { id: '13', date: '2026-03-15', description: 'Pharmacy', amount: 12.50, category: 'Misc', bank: 'Monzo' },
  { id: '14', date: '2026-03-20', description: 'Office Supplies', amount: 7.76, category: 'Misc', bank: 'Amex' },
  { id: '15', date: '2026-03-09', description: 'Netflix', amount: 15.99, category: 'Subscriptions', bank: 'Monzo' },
  { id: '16', date: '2026-03-09', description: 'Spotify', amount: 10.99, category: 'Subscriptions', bank: 'Monzo' },
  { id: '17', date: '2026-03-09', description: 'Disney+', amount: 13.99, category: 'Subscriptions', bank: 'Amex' },
  { id: '18', date: '2026-03-09', description: 'iCloud Storage', amount: 2.99, category: 'Subscriptions', bank: 'Amex' },
  { id: '19', date: '2026-03-09', description: 'Gym Membership', amount: 49.99, category: 'Subscriptions', bank: 'Monzo' },
  { id: '20', date: '2026-03-09', description: 'Adobe Creative Cloud', amount: 59.99, category: 'Subscriptions', bank: 'Amex' },
  { id: '21', date: '2026-03-11', description: 'Uber Ride', amount: 18.50, category: 'Transport', bank: 'Monzo' },
  { id: '22', date: '2026-03-14', description: 'Gas Station', amount: 42.50, category: 'Transport', bank: 'Amex' },
];
