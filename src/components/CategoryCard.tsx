import type { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  spent: number;
  budget: number;
  percentage: number;
  isOver: boolean;
  remaining: number;
}

export default function CategoryCard({
  category,
  spent,
  budget,
  percentage,
  isOver,
  remaining,
}: CategoryCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">{category}</h3>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            isOver
              ? 'bg-red-100 text-red-700'
              : 'bg-green-100 text-green-700'
          }`}
        >
          {isOver ? 'Over Budget' : 'Under Budget'}
        </span>
      </div>

      <div className="space-y-1 mb-4">
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-gray-500">Spent</span>
          <span className={`text-2xl font-bold ${isOver ? 'text-red-600' : 'text-green-600'}`}>
            ${spent.toFixed(2)}
          </span>
        </div>
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-gray-500">Budget</span>
          <span className="text-lg text-gray-700">${budget.toFixed(2)}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
        <div
          className={`h-2 rounded-full transition-all duration-500 ${
            isOver ? 'bg-red-500' : 'bg-green-500'
          }`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-xs text-gray-400">
        <span>{percentage.toFixed(1)}% of budget</span>
      </div>
      <p className={`text-sm font-medium mt-1 ${isOver ? 'text-red-500' : 'text-green-500'}`}>
        {isOver ? '+' : '-'}${Math.abs(remaining).toFixed(2)} ({Math.abs((remaining / budget) * 100).toFixed(1)}%)
      </p>
    </div>
  );
}
