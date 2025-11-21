import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { LucideIcon } from "lucide-react";

interface StatCounterProps {
  icon: LucideIcon;
  value: number;
  label: string;
  suffix?: string;
}

export const StatCounter = ({ icon: Icon, value, label, suffix = "" }: StatCounterProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="card-elevated p-6 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-3xl font-bold text-foreground mb-2">
        {isVisible && <CountUp end={value} duration={2.5} separator="," />}
        {suffix}
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};
