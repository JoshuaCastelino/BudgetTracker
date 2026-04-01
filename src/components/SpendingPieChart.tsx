import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export interface SpendingPieChartEntry {
  name: string;
  value: number;
  color: string;
}

interface SpendingPieChartProps {
  data: SpendingPieChartEntry[];
  total: number;
}

export default function SpendingPieChart({ data, total }: SpendingPieChartProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Spending Breakdown</h2>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={120}
                paddingAngle={3}
                dataKey="value"
                stroke="none"
              >
                {data.map(entry => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                formatter={(value: any) => `$${Number(value).toFixed(2)}`}
                contentStyle={{
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full lg:w-1/2 space-y-3">
          {data.map(entry => {
            const pct = total > 0 ? (entry.value / total) * 100 : 0;
            return (
              <div key={entry.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-sm font-medium text-gray-700">{entry.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-gray-900">
                    ${entry.value.toFixed(2)}
                  </span>
                  <span className="text-xs text-gray-400 ml-2">
                    ({pct.toFixed(1)}%)
                  </span>
                </div>
              </div>
            );
          })}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-900">Total</span>
            <span className="text-sm font-bold text-gray-900">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
