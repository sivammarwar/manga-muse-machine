import { StatCard } from "@/components/admin/StatCard";
import { PipelineStatus } from "@/components/admin/PipelineStatus";
import { PublishingQueue } from "@/components/admin/PublishingQueue";
import { KpiCharts } from "@/components/admin/KpiCharts";
import { mockPipeline, mockQueue, mockKpis } from "@/lib/admin-data";
import {
  BookOpen,
  ImageIcon,
  Layers,
  Target,
  Clock,
  Fingerprint,
} from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="p-6 md:p-8 space-y-8">
      <div>
        <h1 className="font-display text-4xl tracking-wider text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-1">Pipeline monitoring, publishing queue & performance metrics</p>
      </div>

      {/* KPI stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <StatCard index={0} title="Total Series" value={mockKpis.totalSeries} icon={Layers} trend={{ value: 10, positive: true }} />
        <StatCard index={1} title="Total Chapters" value={mockKpis.totalChapters} icon={BookOpen} trend={{ value: 10, positive: true }} />
        <StatCard index={2} title="Total Images" value={mockKpis.totalImages.toLocaleString()} icon={ImageIcon} trend={{ value: 8, positive: true }} />
        <StatCard index={3} title="Consistency Score" value={`${mockKpis.avgConsistencyScore}%`} subtitle="Face similarity avg" icon={Fingerprint} />
        <StatCard index={4} title="On-Time Publish" value={`${mockKpis.publishOnTime}%`} icon={Clock} trend={{ value: 2.1, positive: true }} />
        <StatCard index={5} title="Unique Premises" value={mockKpis.uniquePremises} subtitle="30-day rolling" icon={Target} />
      </div>

      {/* Pipeline status */}
      <PipelineStatus pipeline={mockPipeline} />

      {/* Publishing queue */}
      <PublishingQueue queue={mockQueue} />

      {/* Charts */}
      <KpiCharts kpis={mockKpis} />
    </div>
  );
};

export default AdminDashboard;
