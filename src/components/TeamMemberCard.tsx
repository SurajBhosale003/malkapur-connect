import { Mail, Phone } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  photo?: string;
  email: string;
  phone: string;
}

export const TeamMemberCard = ({ name, role, photo, email, phone }: TeamMemberCardProps) => {
  return (
    <div className="card-elevated p-6 text-center hover:scale-[1.02] transition-transform duration-300">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-3xl font-bold text-white">{name.charAt(0)}</span>
        )}
      </div>
      
      <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
      <p className="text-sm text-primary font-medium mb-4">{role}</p>
      
      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center justify-center space-x-2">
          <Mail className="w-4 h-4" />
          <span>{email}</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Phone className="w-4 h-4" />
          <span>{phone}</span>
        </div>
      </div>
    </div>
  );
};
