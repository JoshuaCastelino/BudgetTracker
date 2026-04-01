import { useStore } from '../store';
import { CATEGORY_COLORS } from '../constants';
import type { Category } from '../types';
import CategoryCard from '../components/CategoryCard';
import SpendingPieChart from '../components/SpendingPieChart';

export default function Dashboard() {
  const { budgets, getCategorySpending, totalSpending } = useStore();
  const spending = getCategorySpending();

  const pieData = budgets
    .map(b => ({
      name: b.category,
      value: Math.round((spending[b.category] || 0) * 100) / 100,
      color: CATEGORY_COLORS[b.category as Category],
    }))
    .filter(d => d.value > 0);

  return (
    <div className="space-y-8">
      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {budgets.map(budget => {
          const spent = spending[budget.category] || 0;
          const pct = budget.limit > 0 ? (spent / budget.limit) * 100 : 0;
          const isOver = spent > budget.limit;
          const remaining = budget.limit - spent;

          return (
            <CategoryCard
              key={budget.category}
              category={budget.category}
              spent={spent}
              budget={budget.limit}
              percentage={pct}
              isOver={isOver}
              remaining={remaining}
            />
          );
        })}
      </div>

      <SpendingPieChart data={pieData} total={totalSpending} />
    </div>
  );
}
