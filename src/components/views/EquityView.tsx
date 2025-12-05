import { Shield, TrendingUp, AlertTriangle, Target, ArrowUpRight, ArrowDownRight } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const valuationHistory = [
  { periodo: "2022 Q4", valor: 8.2 },
  { periodo: "2023 Q1", valor: 9.1 },
  { periodo: "2023 Q2", valor: 10.5 },
  { periodo: "2023 Q3", valor: 11.8 },
  { periodo: "2023 Q4", valor: 12.4 },
  { periodo: "2024 Q1", valor: 13.2 },
  { periodo: "2024 Q2", valor: 14.1 },
  { periodo: "2024 Q3", valor: 15.4 },
];

const riskMatrix = [
  { category: "Mercado", level: "baixo", description: "Setor em expansão, demanda crescente" },
  { category: "Operacional", level: "medio", description: "Dependência de fornecedor único" },
  { category: "Financeiro", level: "baixo", description: "Fluxo de caixa saudável, sem dívidas" },
  { category: "Regulatório", level: "baixo", description: "Em conformidade com todas normas" },
  { category: "Tecnológico", level: "medio", description: "Necessita atualização de sistemas" },
  { category: "Pessoas", level: "baixo", description: "Equipe estável, baixa rotatividade" },
];

const metrics = [
  { label: "EBITDA", value: "R$ 720.000", change: "+15%", up: true },
  { label: "Múltiplo", value: "21.4x", change: "+2.3x", up: true },
  { label: "ROE", value: "28%", change: "+4%", up: true },
  { label: "Dívida/EBITDA", value: "0.8x", change: "-0.3x", up: true },
];

export function EquityView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Equity Rating & Valuation
        </h1>
        <p className="text-lg text-muted-foreground">
          Análise de valor e classificação de risco empresarial
        </p>
      </div>

      {/* Rating & Valuation Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Rating Badge */}
        <div className="glass-card p-8 flex flex-col items-center justify-center animate-fade-in" style={{ animationDelay: "100ms" }}>
          <Shield className="w-12 h-12 text-primary mb-4" />
          <div className="relative">
            <div className="text-8xl font-black text-gradient animate-pulse-glow rounded-2xl px-8 py-4">
              A+
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-lg font-semibold text-foreground mt-6">
            Rating de Crédito
          </p>
          <p className="text-sm text-muted-foreground text-center mt-2">
            Excelente capacidade de honrar compromissos financeiros
          </p>
          <div className="mt-6 w-full">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>D</span>
              <span>C</span>
              <span>B</span>
              <span>A</span>
              <span>A+</span>
            </div>
            <div className="h-2 bg-gradient-to-r from-red-500 via-warning via-chart-4 to-emerald-500 rounded-full">
              <div className="relative">
                <div className="absolute right-0 -top-1 w-4 h-4 bg-white rounded-full border-2 border-primary shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Valuation Widget */}
        <div className="lg:col-span-2 glass-card p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Evolução do Valuation
              </h2>
              <p className="text-sm text-muted-foreground">Milhões de Reais</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary">R$ 15,4M</p>
              <p className="text-sm text-emerald-400 flex items-center justify-end gap-1">
                <ArrowUpRight className="w-4 h-4" />
                +88% desde 2022
              </p>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={valuationHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 17%)" />
                <XAxis
                  dataKey="periodo"
                  stroke="hsl(215, 20%, 55%)"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="hsl(215, 20%, 55%)"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}M`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222, 47%, 6%)",
                    border: "1px solid hsl(217, 33%, 17%)",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number) => [`R$ ${value}M`, "Valuation"]}
                />
                <Bar dataKey="valor" radius={[4, 4, 0, 0]}>
                  {valuationHistory.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        index === valuationHistory.length - 1
                          ? "hsl(24, 100%, 50%)"
                          : "hsl(217, 33%, 25%)"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className="glass-card p-4 animate-fade-in"
            style={{ animationDelay: `${300 + index * 100}ms` }}
          >
            <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
            <p className="text-2xl font-bold text-foreground">{metric.value}</p>
            <p
              className={`text-sm flex items-center gap-1 mt-1 ${
                metric.up ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {metric.up ? (
                <ArrowUpRight className="w-4 h-4" />
              ) : (
                <ArrowDownRight className="w-4 h-4" />
              )}
              {metric.change}
            </p>
          </div>
        ))}
      </div>

      {/* Risk Matrix */}
      <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "700ms" }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Matriz de Riscos
            </h2>
            <p className="text-sm text-muted-foreground">
              Avaliação detalhada por categoria
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="text-sm text-muted-foreground">Baixo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-warning" />
              <span className="text-sm text-muted-foreground">Médio</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <span className="text-sm text-muted-foreground">Alto</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {riskMatrix.map((risk, index) => (
            <div
              key={risk.category}
              className={`p-4 rounded-lg border-l-4 ${
                risk.level === "baixo"
                  ? "bg-emerald-500/5 border-emerald-500"
                  : risk.level === "medio"
                  ? "bg-warning/5 border-warning"
                  : "bg-red-500/5 border-red-500"
              } animate-slide-in-left`}
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-foreground">{risk.category}</span>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    risk.level === "baixo"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : risk.level === "medio"
                      ? "bg-warning/20 text-warning"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {risk.level.charAt(0).toUpperCase() + risk.level.slice(1)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{risk.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Target Valuation */}
      <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "1400ms" }}>
        <div className="flex items-center gap-4">
          <Target className="w-10 h-10 text-primary" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">
              Meta de Valuation 2025
            </h3>
            <p className="text-sm text-muted-foreground">
              Baseado em projeções de crescimento e múltiplos de mercado
            </p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-foreground">R$ 22M</p>
            <p className="text-sm text-emerald-400">+43% vs atual</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Atual: R$ 15,4M</span>
            <span>Meta: R$ 22M</span>
          </div>
          <div className="h-4 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-chart-4 rounded-full transition-all duration-1000"
              style={{ width: "70%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
