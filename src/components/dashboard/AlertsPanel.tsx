import { AlertTriangle, AlertCircle, Info } from "lucide-react";
import { mockAlerts } from "@/data/mockData";

const iconMap: Record<string, typeof AlertTriangle> = {
  critical: AlertTriangle,
  warning: AlertCircle,
  info: Info,
};

const colorMap: Record<string, string> = {
  critical: "text-destructive bg-destructive/10 border-destructive/20",
  warning: "text-warning bg-warning/10 border-warning/20",
  info: "text-muted-foreground bg-secondary border-border",
};

const AlertsPanel = () => {
  return (
    <div className="gradient-card border border-border rounded-xl p-6 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-foreground">Anomaly Alerts</h3>
          <p className="text-xs text-muted-foreground mt-1">Auto-detected issues</p>
        </div>
        <span className="h-5 w-5 rounded-full bg-destructive/20 flex items-center justify-center">
          <span className="h-2 w-2 rounded-full bg-destructive animate-pulse-glow" />
        </span>
      </div>
      <div className="space-y-3">
        {mockAlerts.map((alert) => {
          const Icon = iconMap[alert.type];
          return (
            <div key={alert.id} className={`flex gap-3 rounded-lg border p-3 ${colorMap[alert.type]}`}>
              <Icon className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-mono font-bold">{alert.machine}</span>
                  <span className="text-xs opacity-60">{alert.time}</span>
                </div>
                <p className="text-xs leading-relaxed">{alert.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AlertsPanel;
