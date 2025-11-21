import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  status: "completed" | "in-progress" | "upcoming";
  budget: string;
  startDate: string;
  endDate?: string;
}

export const ProjectCard = ({ title, description, status, budget, startDate, endDate }: ProjectCardProps) => {
  const statusConfig = {
    completed: { label: "Completed", variant: "default" as const, color: "bg-green-500" },
    "in-progress": { label: "In Progress", variant: "secondary" as const, color: "bg-yellow-500" },
    upcoming: { label: "Upcoming", variant: "outline" as const, color: "bg-blue-500" },
  };

  const config = statusConfig[status];

  return (
    <div className="card-elevated p-6">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground flex-1">{title}</h3>
        <Badge variant={config.variant}>{config.label}</Badge>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Budget:</span>
          <span className="font-medium text-foreground">{budget}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Start Date:</span>
          <span className="font-medium text-foreground">{startDate}</span>
        </div>
        {endDate && (
          <div className="flex justify-between">
            <span className="text-muted-foreground">End Date:</span>
            <span className="font-medium text-foreground">{endDate}</span>
          </div>
        )}
      </div>
      
      {status === "in-progress" && (
        <div className="mt-4">
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: "60%" }}></div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">60% Complete</p>
        </div>
      )}
    </div>
  );
};
