import { Sparkles, Lightbulb, Rocket, TrendingUp, BookOpen, Zap, ArrowRight, ArrowUp } from "lucide-react";
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

const spinoffOpportunities = [
  {
    id: 1,
    title: "Unidade de Educação Corporativa",
    description:
      "Transformar o programa interno de treinamento em uma vertical B2B oferecendo cursos e certificações para outras empresas do setor.",
    potentialRevenue: "R$ 2.400.000",
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
    icon: Zap,
    insights: [
      "12 competidores utilizam processos manuais",
      "ROI estimado de 340% em 18 meses",
      "Possibilidade de parceria com integradores",
    ],
  },
];

const hiddenAssetsData = [
  { name: "Propriedade Intelectual", value: 1680, color: "hsl(24, 100%, 50%)" },
  { name: "Base de Dados", value: 1200, color: "hsl(173, 80%, 40%)" },
  { name: "Relacionamentos", value: 960, color: "hsl(197, 71%, 52%)" },
  { name: "Know-how", value: 1040, color: "hsl(280, 65%, 60%)" },
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

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value * 1000);
};

export function ValorInvisivelView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Valor Invisível
        </h1>
        <p className="text-base md:text-lg text-muted-foreground">
          Oportunidades detectadas por IA que ainda não estão no seu radar
        </p>
      </div>

      {/* AI Insights Banner */}
      <div className="glass-card p-4 md:p-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
              Análise de Valor Oculto
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Nossa IA identificou <span className="text-primary font-semibold">R$ 4,8M</span> em valor 
              potencial não explorado nos seus ativos atuais. Isso representa um aumento de{" "}
              <span className="text-emerald-400 font-semibold">31%</span> no seu valuation atual.
            </p>
          </div>
        </div>
      </div>

      {/* Spin-off Opportunities */}
      <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <Rocket className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          Oportunidades de Spin-off Detectadas
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {spinoffOpportunities.map((opportunity, index) => (
            <div
              key={opportunity.id}
              className="glass-card p-4 md:p-6 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${300 + index * 150}ms` }}
            >
              <div className="flex items-start gap-3 md:gap-4 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <opportunity.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    {opportunity.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {opportunity.description}
              </p>

              <div className="p-3 md:p-4 rounded-lg bg-accent/50 mb-4">
                <p className="text-xs text-muted-foreground">Receita Potencial</p>
                <p className="text-xl md:text-2xl font-bold text-emerald-400">{opportunity.potentialRevenue}</p>
                <p className="text-xs text-muted-foreground">/ano</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Insights da IA:
                </p>
                {opportunity.insights.map((insight, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-chart-4 flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-muted-foreground">{insight}</span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-2 md:py-3 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2 text-sm md:text-base">
                Explorar Oportunidade
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Hidden Assets Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="glass-card p-4 md:p-6 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
            Valor dos Ativos Ocultos
          </h2>
          <div className="h-56 md:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hiddenAssetsData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 17%)" />
                <XAxis
                  type="number"
                  stroke="hsl(215, 20%, 55%)"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}k`}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  stroke="hsl(215, 20%, 55%)"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                  width={100}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222, 47%, 6%)",
                    border: "1px solid hsl(217, 33%, 17%)",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number) => [formatCurrency(value), "Valor"]}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {hiddenAssetsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Insights List */}
        <div className="glass-card p-4 md:p-6 animate-fade-in" style={{ animationDelay: "700ms" }}>
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            Insights de IA
          </h2>
          <div className="space-y-3 md:space-y-4">
            {aiInsights.map((insight, index) => (
              <div
                key={index}
                className="p-3 md:p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors animate-slide-in-left"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 className="font-semibold text-foreground text-sm md:text-base">{insight.title}</h3>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${
                      insight.impact === "alto"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-warning/10 text-warning"
                    }`}
                  >
                    Impacto {insight.impact}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Total Value Summary */}
      <div className="glass-card p-4 md:p-6 animate-fade-in" style={{ animationDelay: "1100ms" }}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground">
                Valor Total Identificado
              </h3>
              <p className="text-sm text-muted-foreground">
                Somando todas as oportunidades detectadas
              </p>
            </div>
          </div>
          <div className="text-left md:text-right">
            <p className="text-3xl md:text-4xl font-bold text-gradient">R$ 4.880.000</p>
            <p className="text-sm text-emerald-400 flex items-center gap-1 md:justify-end">
              <ArrowUp className="w-4 h-4" />
              Potencial de aumento de 31% no valuation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
