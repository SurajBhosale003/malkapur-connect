import { Calendar, IndianRupee } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  status: "completed" | "in-progress" | "upcoming";
  budget: string;
  startDate: string;
  endDate?: string;
  image?: string;
}

export const ProjectCard = ({
  title,
  description,
  status,
  budget,
  startDate,
  endDate,
  image,
}: ProjectCardProps) => {
  const statusConfig = {
    completed: { label: "Completed", color: "bg-green-500/90 text-white" },
    "in-progress": { label: "In Progress", color: "bg-blue-500/90 text-white" },
    upcoming: { label: "Upcoming", color: "bg-orange-500/90 text-white" },
  };

  return (
    <div className="card-elevated overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {image && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
          <div className="absolute top-4 right-4">
            <span className={`text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm ${statusConfig[status].color}`}>
              {statusConfig[status].label}
            </span>
          </div>
        </div>
      )}
      
      <div className="p-6">
        {!image && (
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusConfig[status].color.replace('/90', '/10').replace('text-white', 'text-primary')}`}>
              {statusConfig[status].label}
            </span>
          </div>
        )}
        
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
        
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <IndianRupee className="w-4 h-4 text-primary" />
            <span className="font-medium">{budget}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span>
              {startDate} {endDate && `- ${endDate}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
