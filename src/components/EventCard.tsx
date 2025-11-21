import { Calendar, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  title: string;
  date: string;
  venue: string;
  organizer: string;
  description: string;
  type: "upcoming" | "completed";
}

export const EventCard = ({ title, date, venue, organizer, description, type }: EventCardProps) => {
  return (
    <div className="card-elevated p-6 hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <Badge variant={type === "upcoming" ? "default" : "secondary"}>
          {type === "upcoming" ? "Upcoming" : "Completed"}
        </Badge>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      
      <div className="space-y-2 text-sm">
        <div className="flex items-center text-muted-foreground">
          <Calendar className="w-4 h-4 mr-2 text-primary" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="w-4 h-4 mr-2 text-primary" />
          <span>{venue}</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <Users className="w-4 h-4 mr-2 text-primary" />
          <span>{organizer}</span>
        </div>
      </div>
    </div>
  );
};
