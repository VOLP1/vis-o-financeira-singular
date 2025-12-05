import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { DashboardView } from "@/components/views/DashboardView";
import { MaturidadeView } from "@/components/views/MaturidadeView";
import { EquityView } from "@/components/views/EquityView";
import { ValorInvisivelView } from "@/components/views/ValorInvisivelView";
import { cn } from "@/lib/utils";

type View = "dashboard" | "maturidade" | "equity" | "valor-invisivel";

const Index = () => {
  const [activeView, setActiveView] = useState<View>("dashboard");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return <DashboardView />;
      case "maturidade":
        return <MaturidadeView />;
      case "equity":
        return <EquityView />;
      case "valor-invisivel":
        return <ValorInvisivelView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        activeView={activeView}
        onViewChange={setActiveView}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <main
        className={cn(
          "min-h-screen transition-all duration-300 p-8",
          isSidebarCollapsed ? "ml-20" : "ml-64"
        )}
      >
        <div className="max-w-7xl mx-auto">{renderView()}</div>
      </main>
    </div>
  );
};

export default Index;
