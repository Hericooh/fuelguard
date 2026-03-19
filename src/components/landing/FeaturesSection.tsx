import { motion } from "framer-motion";
import { Fuel, BarChart3, Smartphone, AlertTriangle, LayoutDashboard, FileText } from "lucide-react";

const features = [
  {
    icon: Fuel,
    title: "Fuel Tracking",
    desc: "Record every fueling event with machine ID, operator, litres, timestamp, and optional photo proof. Full audit trail.",
  },
  {
    icon: BarChart3,
    title: "Equipment Productivity",
    desc: "Track engine hours, idle time, daily output (tons, trips, meters). See money spent vs work done per machine.",
  },
  {
    icon: Smartphone,
    title: "Operator Mobile App",
    desc: "Simple phone interface for operators to submit shift reports, fuel received, readings, and downtime issues.",
  },
  {
    icon: AlertTriangle,
    title: "Anomaly Detection",
    desc: "Auto-flag fuel too high for hours worked, idle consumption, sudden spikes, and missing reports.",
  },
  {
    icon: LayoutDashboard,
    title: "Manager Dashboard",
    desc: "Fuel cost per machine, operator rankings, usage charts, money-losing machines, and real-time alerts.",
  },
  {
    icon: FileText,
    title: "Reports & Alerts",
    desc: "Daily PDF reports, weekly summaries, and instant SMS/WhatsApp alerts when anomalies are detected.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-semibold text-primary tracking-widest uppercase">Modules</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 mb-4">
            Everything You Need to <span className="text-gradient">Control Operations</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Six integrated modules that give you complete visibility and control over fuel, equipment, and operators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="gradient-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="h-10 w-10 rounded-lg gradient-amber flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
