import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import StatsCards from "@/components/dashboard/StatsCards";
import FuelChart from "@/components/dashboard/FuelChart";
import MachineTable from "@/components/dashboard/MachineTable";
import AlertsPanel from "@/components/dashboard/AlertsPanel";
import OperatorRanking from "@/components/dashboard/OperatorRanking";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <img src={logo} alt="FuelGuard" className="h-6 w-6" />
              <span className="font-bold text-foreground text-sm">
                Fuel<span className="text-gradient">Guard</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-muted-foreground">Demo Data</span>
            <span className="h-2 w-2 rounded-full bg-success animate-pulse-glow" />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div>
          <h1 className="text-2xl font-black text-foreground">Operations Dashboard</h1>
          <p className="text-sm text-muted-foreground">Real-time fleet monitoring & fuel intelligence</p>
        </div>

        <StatsCards />

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <FuelChart />
          </div>
          <AlertsPanel />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MachineTable />
          </div>
          <OperatorRanking />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
