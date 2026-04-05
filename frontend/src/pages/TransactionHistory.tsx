import { useStore } from '../store';
import { CATEGORY_COLORS } from '../constants';

export default function TransactionHistory() {
  const { transactions } = useStore();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(t => (
              <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{t.date}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{t.description}</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                  ${t.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: CATEGORY_COLORS[t.category] + '20',
                      color: CATEGORY_COLORS[t.category],
                    }}
                  >
                    {t.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
