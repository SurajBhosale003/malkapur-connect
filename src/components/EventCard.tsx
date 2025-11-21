import { Calendar, MapPin, User } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  venue: string;
  organizer: string;
  description: string;
  type: "upcoming" | "completed";
  image?: string;
}

export const EventCard = ({
  title,
  date,
  venue,
  organizer,
  description,
  type,
  image,
}: EventCardProps) => {
  return (
    <div className="card-elevated overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {image && (
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
          <div className="absolute top-4 right-4">
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm ${
                type === "upcoming"
                  ? "bg-primary/90 text-primary-foreground"
                  : "bg-green-500/90 text-white"
              }`}
            >
              {type === "upcoming" ? "Upcoming" : "Completed"}
            </span>
          </div>
        </div>
      )}
      
      <div className="p-6">
        {!image && (
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                type === "upcoming"
                  ? "bg-primary/10 text-primary"
                  : "bg-green-500/10 text-green-600"
              }`}
            >
              {type === "upcoming" ? "Upcoming" : "Completed"}
            </span>
          </div>
        )}
        
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="space-y-2 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{venue}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            <span>{organizer}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
