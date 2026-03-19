import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart } from "recharts";
import { mockFuelHistory } from "@/data/mockData";

const FuelChart = () => {
  return (
    <div className="gradient-card border border-border rounded-xl p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-bold text-foreground">Weekly Fuel Consumption</h3>
          <p className="text-xs text-muted-foreground mt-1">Litres consumed vs engine hours</p>
        </div>
        <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">This Week</span>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={mockFuelHistory}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" />
          <XAxis dataKey="day" stroke="hsl(220, 10%, 50%)" fontSize={12} />
          <YAxis yAxisId="left" stroke="hsl(220, 10%, 50%)" fontSize={12} />
          <YAxis yAxisId="right" orientation="right" stroke="hsl(220, 10%, 50%)" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(220, 18%, 10%)",
              border: "1px solid hsl(220, 14%, 18%)",
              borderRadius: "8px",
              fontSize: "12px",
            }}
          />
          <Bar yAxisId="left" dataKey="fuel" fill="hsl(38, 92%, 50%)" radius={[4, 4, 0, 0]} name="Fuel (L)" />
          <Line yAxisId="right" type="monotone" dataKey="hours" stroke="hsl(142, 72%, 42%)" strokeWidth={2} name="Hours" dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FuelChart;
