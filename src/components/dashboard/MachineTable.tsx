import { mockMachines } from "@/data/mockData";

const statusColors: Record<string, string> = {
  active: "bg-success",
  idle: "bg-warning",
  maintenance: "bg-destructive",
};

const statusLabels: Record<string, string> = {
  active: "Active",
  idle: "Idle",
  maintenance: "Maintenance",
};

const MachineTable = () => {
  return (
    <div className="gradient-card border border-border rounded-xl shadow-card overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="font-bold text-foreground">Fleet Status</h3>
        <p className="text-xs text-muted-foreground mt-1">Real-time machine monitoring</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Machine</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Operator</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Fuel</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Hours</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Fuel Used</th>
            </tr>
          </thead>
          <tbody>
            {mockMachines.map((m) => (
              <tr key={m.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-semibold text-foreground">{m.name}</div>
                  <div className="text-xs font-mono text-muted-foreground">{m.id}</div>
                </td>
                <td className="px-6 py-4 text-muted-foreground">{m.operator}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5">
                    <span className={`h-2 w-2 rounded-full ${statusColors[m.status]}`} />
                    <span className="text-foreground text-xs">{statusLabels[m.status]}</span>
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${m.fuelLevel > 50 ? "bg-success" : m.fuelLevel > 25 ? "bg-warning" : "bg-destructive"}`}
                        style={{ width: `${m.fuelLevel}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{m.fuelLevel}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-mono text-foreground">{m.hoursToday}h</td>
                <td className="px-6 py-4 font-mono text-foreground">{m.fuelUsedToday}L</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MachineTable;
