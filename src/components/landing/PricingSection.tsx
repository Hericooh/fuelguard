import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "3,000",
    desc: "For small companies with up to 5 machines",
    features: ["Up to 5 machines", "Fuel tracking module", "Basic dashboard", "Daily reports", "Email support"],
    highlight: false,
  },
  {
    name: "Professional",
    price: "10,000",
    desc: "For growing operations with 6–25 machines",
    features: ["Up to 25 machines", "All 6 modules", "Anomaly detection", "SMS/WhatsApp alerts", "Priority support", "Operator mobile app"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "20,000+",
    desc: "For large fleets and mining operations",
    features: ["Unlimited machines", "All modules + custom", "GPS integration", "API access", "Dedicated account manager", "Custom reports"],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-semibold text-primary tracking-widest uppercase">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 mb-4">
            Plans That <span className="text-gradient">Pay For Themselves</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The fuel savings alone cover your subscription cost — everything else is profit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-xl border p-8 relative ${
                plan.highlight
                  ? "border-primary/50 shadow-glow gradient-card"
                  : "border-border gradient-card"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-amber text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-sm text-muted-foreground">KES </span>
                <span className="text-4xl font-black font-mono text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <Button
                className={`w-full mb-6 ${
                  plan.highlight ? "gradient-amber text-primary-foreground font-bold border-0" : ""
                }`}
                variant={plan.highlight ? "default" : "outline"}
              >
                Get Started
              </Button>
              <ul className="space-y-3">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
