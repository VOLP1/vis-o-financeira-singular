import { Sparkles, Lightbulb, Rocket, TrendingUp, Users, BookOpen, Zap, ArrowRight, Brain } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const spinoffOpportunities = [
  {
    id: 1,
    title: "Unidade de Educação Corporativa",
    description:
      "Transformar o programa interno de treinamento em uma vertical B2B oferecendo cursos e certificações para outras empresas do setor.",
    potentialRevenue: "R$ 2.400.000",
    timeToMarket: "6 meses",
    investmentRequired: "R$ 350.000",
    confidence: 87,
    icon: BookOpen,
    insights: [
      "34 empresas já demonstraram interesse em seu conteúdo",
      "Setor de EdTech B2B cresceu 42% em 2024",
      "Você já possui 80% do conteúdo necessário",
    ],
  },
  {
    id: 2,
    title: "Plataforma de Automação de Processos",
    description:
      "Licenciar as automações internas desenvolvidas pela equipe de TI como produto SaaS para empresas similares.",
    potentialRevenue: "R$ 1.800.000",
    timeToMarket: "9 meses",
    investmentRequired: "R$ 520.000",
    confidence: 74,
    icon: Zap,
    insights: [
      "12 competidores utilizam processos manuais",
      "ROI estimado de 340% em 18 meses",
      "Possibilidade de parceria com integradores",
    ],
  },
];

const hiddenAssets = [
  { name: "Propriedade Intelectual", value: 35, color: "hsl(24, 100%, 50%)" },
  { name: "Base de Dados", value: 25, color: "hsl(173, 80%, 40%)" },
  { name: "Relacionamentos", value: 20, color: "hsl(197, 71%, 52%)" },
  { name: "Know-how", value: 20, color: "hsl(280, 65%, 60%)" },
];

const aiInsights = [
  {
    title: "Padrão de Crescimento Detectado",
    description:
      "Clientes que usam mais de 3 features têm LTV 4.2x maior. Foco em onboarding pode aumentar receita em R$ 680.000/ano.",
    impact: "alto",
  },
  {
    title: "Oportunidade de Precificação",
    description:
      "Análise comparativa sugere que seus serviços estão 23% abaixo do mercado. Ajuste gradual pode adicionar R$ 1.2M em margem.",
    impact: "alto",
  },
  {
    title: "Sinergia de Portfólio",
    description:
      "Cross-sell entre produtos A e B tem conversão de apenas 8%. Campanhas direcionadas podem elevar para 25%.",
    impact: "medio",
  },
];

export function ValorInvisivelView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-chart-5 flex items-center justify-center ai-glow">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            Valor Invisível
          </h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Oportunidades detectadas por IA que ainda não estão no seu radar
        </p>
      </div>

      {/* AI Insights Banner */}
      <div className="gradient-border glass-card p-6 animate-fade-in ai-glow" style={{ animationDelay: "100ms" }}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-chart-5/20 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Análise de Valor Oculto
            </h2>
            <p className="text-muted-foreground">
              Nossa IA identificou <span className="text-primary font-semibold">R$ 4,8M</span> em valor 
              potencial não explorado nos seus ativos atuais. Isso representa um aumento de{" "}
              <span className="text-emerald-400 font-semibold">31%</span> no seu valuation atual.
            </p>
          </div>
        </div>
      </div>

      {/* Spin-off Opportunities */}
      <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
        <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <Rocket className="w-6 h-6 text-primary" />
          Oportunidades de Spin-off Detectadas
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {spinoffOpportunities.map((opportunity, index) => (
            <div
              key={opportunity.id}
              className="gradient-border glass-card p-6 hover:ai-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${300 + index * 150}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-chart-5/20 flex items-center justify-center">
                  <opportunity.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {opportunity.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      Confiança: {opportunity.confidence}%
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {opportunity.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 rounded-lg bg-accent/50">
                  <p className="text-xs text-muted-foreground">Receita Potencial</p>
                  <p className="text-lg font-bold text-emerald-400">{opportunity.potentialRevenue}</p>
                  <p className="text-xs text-muted-foreground">/ano</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-accent/50">
                  <p className="text-xs text-muted-foreground">Tempo</p>
                  <p className="text-lg font-bold text-foreground">{opportunity.timeToMarket}</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-accent/50">
                  <p className="text-xs text-muted-foreground">Investimento</p>
                  <p className="text-lg font-bold text-primary">{opportunity.investmentRequired}</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Insights da IA:
                </p>
                {opportunity.insights.map((insight, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-chart-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{insight}</span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-3 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2">
                Explorar Oportunidade
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Hidden Assets Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Distribuição de Ativos Ocultos
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={hiddenAssets}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {hiddenAssets.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222, 47%, 6%)",
                    border: "1px solid hsl(217, 33%, 17%)",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number) => [`${value}%`, ""]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {hiddenAssets.map((asset) => (
              <div key={asset.name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: asset.color }}
                />
                <span className="text-sm text-muted-foreground">
                  {asset.name}
                </span>
                <span className="text-sm font-semibold text-foreground ml-auto">
                  {asset.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights List */}
        <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "700ms" }}>
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Insights de IA
          </h2>
          <div className="space-y-4">
            {aiInsights.map((insight, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors animate-slide-in-left"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{insight.title}</h3>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      insight.impact === "alto"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-warning/10 text-warning"
                    }`}
                  >
                    Impacto {insight.impact}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Total Value Summary */}
      <div className="glass-card p-6 animate-fade-in gradient-border" style={{ animationDelay: "1100ms" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-chart-5 flex items-center justify-center ai-glow">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Valor Total Identificado
              </h3>
              <p className="text-sm text-muted-foreground">
                Somando todas as oportunidades detectadas
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-gradient">R$ 4.880.000</p>
            <p className="text-sm text-emerald-400 flex items-center justify-end gap-1">
              <ArrowRight className="w-4 h-4" />
              Potencial de aumento de 31% no valuation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
