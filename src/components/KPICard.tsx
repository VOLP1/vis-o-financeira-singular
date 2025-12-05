import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  icon: LucideIcon;
  subtitle?: string;
  delay?: number;
}

export function KPICard({
  title,
  value,
  trend,
  trendUp = true,
  icon: Icon,
  subtitle,
  delay = 0,
}: KPICardProps) {
  return (
    <div
      className="glass-card-hover p-6 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        {trend && (
          <span
            className={cn(
              "text-sm font-semibold px-2 py-1 rounded-lg",
              trendUp
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-red-500/10 text-red-400"
            )}
          >
            {trend}
          </span>
        )}
      </div>
      <p className="stat-label mb-1">{title}</p>
      <p className="stat-value text-foreground">{value}</p>
      {subtitle && (
        <p className="text-xs text-muted-foreground mt-2">{subtitle}</p>
      )}
    </div>
  );
}
