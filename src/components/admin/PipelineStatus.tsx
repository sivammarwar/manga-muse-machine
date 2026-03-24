import { motion } from "framer-motion";
import { PipelineRun } from "@/lib/admin-data";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Zap, Clock, ImageIcon, FileText, BookOpen } from "lucide-react";

const phaseOrder = ["IDEATION", "ASSET_GEN", "WRITING", "VALIDATION", "PUBLISHING", "COMPLETED"] as const;
const phaseLabels: Record<string, string> = {
  IDEATION: "Ideation",
  ASSET_GEN: "Asset Generation",
  WRITING: "Content Writing",
  VALIDATION: "Validation",
  PUBLISHING: "Publishing",
  COMPLETED: "Completed",
};
const phaseIcons: Record<string, React.ReactNode> = {
  IDEATION: <Zap className="w-3.5 h-3.5" />,
  ASSET_GEN: <ImageIcon className="w-3.5 h-3.5" />,
  WRITING: <FileText className="w-3.5 h-3.5" />,
  VALIDATION: <BookOpen className="w-3.5 h-3.5" />,
  PUBLISHING: <Clock className="w-3.5 h-3.5" />,
  COMPLETED: <Zap className="w-3.5 h-3.5" />,
};

interface PipelineStatusProps {
  pipeline: PipelineRun;
}

export function PipelineStatus({ pipeline }: PipelineStatusProps) {
  const currentIdx = phaseOrder.indexOf(pipeline.phase);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="rounded-lg bg-gradient-card border border-border p-6 shadow-card"
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-display text-xl tracking-wider text-foreground">Pipeline Status</h3>
        <Badge variant="secondary" className="bg-primary/15 text-primary border-0">
          Week of {new Date(pipeline.weekStart).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
        </Badge>
      </div>

      {/* Phase timeline */}
      <div className="flex items-center gap-1 mb-6">
        {phaseOrder.map((phase, i) => {
          const isActive = i === currentIdx;
          const isDone = i < currentIdx;
          return (
            <div key={phase} className="flex-1 flex flex-col items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs border transition-all ${
                  isActive
                    ? "border-primary bg-primary/20 text-primary shadow-glow"
                    : isDone
                    ? "border-primary/50 bg-primary/10 text-primary/70"
                    : "border-border bg-muted/30 text-muted-foreground"
                }`}
              >
                {phaseIcons[phase]}
              </div>
              <span className={`text-[10px] text-center leading-tight ${isActive ? "text-primary font-medium" : "text-muted-foreground"}`}>
                {phaseLabels[phase]}
              </span>
              {i < phaseOrder.length - 1 && (
                <div className="hidden" /> // connector handled by gap
              )}
            </div>
          );
        })}
      </div>

      {/* Progress bar for current phase */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{phaseLabels[pipeline.phase]} Progress</span>
          <span>{pipeline.phaseProgress}%</span>
        </div>
        <Progress value={pipeline.phaseProgress} className="h-2" />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 mt-5 pt-5 border-t border-border">
        <div className="text-center">
          <p className="font-display text-lg text-foreground">{pipeline.seriesCount}</p>
          <p className="text-xs text-muted-foreground">Series</p>
        </div>
        <div className="text-center">
          <p className="font-display text-lg text-foreground">{pipeline.imagesGenerated.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground">Images</p>
        </div>
        <div className="text-center">
          <p className="font-display text-lg text-foreground">{pipeline.chaptersWritten}</p>
          <p className="text-xs text-muted-foreground">Chapters</p>
        </div>
      </div>
    </motion.div>
  );
}
