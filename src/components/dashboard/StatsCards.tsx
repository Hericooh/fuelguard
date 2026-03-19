import { Fuel, Clock, AlertTriangle, TrendingUp } from "lucide-react";
import { mockMachines } from "@/data/mockData";

const stats = [
  {
    label: "Total Fuel Today",
    value: `${mockMachines.reduce((s, m) => s + m.fuelUsedToday, 0)}L`,
    icon: Fuel,
    change: "-8% vs yesterday",
    positive: true,
  },
  {
    label: "Active Machines",
    value: `${mockMachines.filter((m) => m.status === "active").length}/${mockMachines.length}`,
    icon: TrendingUp,
    change: "4 operating now",
    positive: true,
  },
  {
    label: "Total Engine Hours",
    value: `${mockMachines.reduce((s, m) => s + m.hoursToday, 0).toFixed(1)}h`,
    icon: Clock,
    change: "+12% productivity",
    positive: true,
  },
  {
    label: "Active Alerts",
    value: "3",
    icon: AlertTriangle,
    change: "2 critical, 1 warning",
    positive: false,
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <div key={i} className="gradient-card border border-border rounded-xl p-5 shadow-card">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{s.label}</span>
            <s.icon className="h-4 w-4 text-primary" />
          </div>
          <div className="text-2xl font-black font-mono text-foreground">{s.value}</div>
          <div className={`text-xs mt-1 ${s.positive ? "text-success" : "text-accent"}`}>{s.change}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
