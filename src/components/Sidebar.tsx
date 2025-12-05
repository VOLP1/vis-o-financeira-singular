import {
  LayoutDashboard,
  Target,
  TrendingUp,
  Sparkles,
  Settings,
  Bell,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

type View = "dashboard" | "maturidade" | "equity" | "valor-invisivel";

interface SidebarProps {
  activeView: View;
  onViewChange: (view: View) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const menuItems = [
  {
    id: "dashboard" as View,
    label: "Visão Geral",
    icon: LayoutDashboard,
  },
  {
    id: "maturidade" as View,
    label: "Maturidade",
    icon: Target,
  },
  {
    id: "equity" as View,
    label: "Equity & Valuation",
    icon: TrendingUp,
  },
  {
    id: "valor-invisivel" as View,
    label: "Valor Invisível",
    icon: Sparkles,
  },
];

export function Sidebar({
  activeView,
  onViewChange,
  isCollapsed,
  onToggleCollapse,
}: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300 z-50",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center animate-pulse-glow">
            <span className="text-primary-foreground font-bold text-lg">F</span>
          </div>
          {!isCollapsed && (
            <div className="animate-fade-in">
              <h1 className="text-xl font-bold text-foreground">FinEx</h1>
              <p className="text-xs text-muted-foreground">Enterprise Intelligence</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <p className={cn(
          "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-4 transition-opacity",
          isCollapsed && "opacity-0"
        )}>
          Módulos
        </p>
        {menuItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={cn(
              "w-full sidebar-item",
              activeView === item.id && "sidebar-item-active"
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <item.icon
              className={cn(
                "w-5 h-5 flex-shrink-0",
                activeView === item.id && "text-primary"
              )}
            />
            {!isCollapsed && (
              <span className="font-medium">{item.label}</span>
            )}
          </button>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-sidebar-border space-y-2">
        <button className="w-full sidebar-item">
          <Bell className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="font-medium">Notificações</span>}
          {!isCollapsed && (
            <span className="ml-auto bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
              3
            </span>
          )}
        </button>
        <button className="w-full sidebar-item">
          <Settings className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="font-medium">Configurações</span>}
        </button>
        <button className="w-full sidebar-item text-red-400 hover:text-red-300 hover:bg-red-500/10">
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="font-medium">Sair</span>}
        </button>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={onToggleCollapse}
        className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-card border border-border rounded-full flex items-center justify-center hover:bg-accent transition-colors"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-muted-foreground" />
        )}
      </button>
    </aside>
  );
}
