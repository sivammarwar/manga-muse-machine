import { motion } from "framer-motion";
import { QueueItem } from "@/lib/admin-data";
import { getCategoryInfo } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const statusStyles: Record<string, string> = {
  published: "bg-emerald-500/15 text-emerald-400 border-0",
  publishing: "bg-amber-500/15 text-amber-400 border-0",
  pending: "bg-muted text-muted-foreground border-0",
  failed: "bg-red-500/15 text-red-400 border-0",
};

interface PublishingQueueProps {
  queue: QueueItem[];
}

export function PublishingQueue({ queue }: PublishingQueueProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="rounded-lg bg-gradient-card border border-border shadow-card overflow-hidden"
    >
      <div className="p-6 pb-4">
        <h3 className="font-display text-xl tracking-wider text-foreground">Publishing Queue</h3>
        <p className="text-xs text-muted-foreground mt-1">
          {queue.filter((q) => q.status === "published").length} published &middot;{" "}
          {queue.filter((q) => q.status === "pending").length} pending &middot;{" "}
          {queue.filter((q) => q.status === "failed").length} failed
        </p>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Series</TableHead>
              <TableHead className="text-muted-foreground">Category</TableHead>
              <TableHead className="text-muted-foreground">Chapters</TableHead>
              <TableHead className="text-muted-foreground">Scheduled</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {queue.map((item, i) => {
              const cat = getCategoryInfo(item.category);
              return (
                <TableRow key={item.id} className="border-border">
                  <TableCell className="font-medium text-foreground">{item.articleTitle}</TableCell>
                  <TableCell>
                    <span className="text-sm">
                      {cat?.icon} {cat?.label}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">Ch. {item.chaptersRange}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {new Date(item.scheduledDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={statusStyles[item.status]}>
                      {item.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
}
