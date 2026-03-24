import { motion } from "framer-motion";
import { KpiData } from "@/lib/admin-data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const CHART_COLORS = [
  "hsl(0, 78%, 55%)",
  "hsl(35, 90%, 55%)",
  "hsl(160, 60%, 45%)",
  "hsl(210, 50%, 55%)",
  "hsl(270, 40%, 50%)",
  "hsl(340, 80%, 60%)",
  "hsl(50, 90%, 55%)",
  "hsl(190, 70%, 50%)",
  "hsl(220, 60%, 50%)",
  "hsl(15, 90%, 55%)",
];

interface KpiChartsProps {
  kpis: KpiData;
}

export function KpiCharts({ kpis }: KpiChartsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Weekly output line chart */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-lg bg-gradient-card border border-border p-6 shadow-card"
      >
        <h3 className="font-display text-lg tracking-wider text-foreground mb-4">Weekly Output</h3>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={kpis.weeklyOutput}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
            <XAxis dataKey="week" tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 12 }} axisLine={false} />
            <YAxis tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 12 }} axisLine={false} />
            <Tooltip
              contentStyle={{
                background: "hsl(220, 18%, 10%)",
                border: "1px solid hsl(220, 15%, 18%)",
                borderRadius: "8px",
                color: "hsl(40, 10%, 92%)",
              }}
            />
            <Line type="monotone" dataKey="images" stroke="hsl(0, 78%, 55%)" strokeWidth={2} dot={{ fill: "hsl(0, 78%, 55%)" }} />
            <Line type="monotone" dataKey="chapters" stroke="hsl(35, 90%, 55%)" strokeWidth={2} dot={{ fill: "hsl(35, 90%, 55%)" }} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Category distribution pie chart */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="rounded-lg bg-gradient-card border border-border p-6 shadow-card"
      >
        <h3 className="font-display text-lg tracking-wider text-foreground mb-4">Category Distribution</h3>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={kpis.categoryDistribution}
              dataKey="count"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={80}
              strokeWidth={0}
            >
              {kpis.categoryDistribution.map((_, i) => (
                <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "hsl(220, 18%, 10%)",
                border: "1px solid hsl(220, 15%, 18%)",
                borderRadius: "8px",
                color: "hsl(40, 10%, 92%)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Phase timings bar chart */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-lg bg-gradient-card border border-border p-6 shadow-card lg:col-span-2"
      >
        <h3 className="font-display text-lg tracking-wider text-foreground mb-4">Average Phase Duration (hours)</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={kpis.phaseTimings} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" horizontal={false} />
            <XAxis type="number" tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 12 }} axisLine={false} />
            <YAxis dataKey="phase" type="category" tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 12 }} axisLine={false} width={100} />
            <Tooltip
              contentStyle={{
                background: "hsl(220, 18%, 10%)",
                border: "1px solid hsl(220, 15%, 18%)",
                borderRadius: "8px",
                color: "hsl(40, 10%, 92%)",
              }}
            />
            <Bar dataKey="hours" fill="hsl(0, 78%, 55%)" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
