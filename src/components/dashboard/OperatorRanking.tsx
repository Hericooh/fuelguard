import { mockOperatorStats } from "@/data/mockData";

const OperatorRanking = () => {
  const sorted = [...mockOperatorStats].sort((a, b) => b.efficiency - a.efficiency);

  return (
    <div className="gradient-card border border-border rounded-xl p-6 shadow-card">
      <div className="mb-4">
        <h3 className="font-bold text-foreground">Operator Ranking</h3>
        <p className="text-xs text-muted-foreground mt-1">By efficiency score</p>
      </div>
      <div className="space-y-3">
        {sorted.map((op, i) => (
          <div key={op.name} className="flex items-center gap-3">
            <span className={`text-xs font-mono font-bold w-5 ${i === 0 ? "text-primary" : "text-muted-foreground"}`}>
              #{i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-foreground truncate">{op.name}</span>
                <span className="text-xs font-mono text-muted-foreground">{op.fuelPerHour} L/hr</span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${op.efficiency >= 90 ? "bg-success" : op.efficiency >= 70 ? "bg-primary" : "bg-accent"}`}
                  style={{ width: `${op.efficiency}%` }}
                />
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-foreground">{op.efficiency}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OperatorRanking;
