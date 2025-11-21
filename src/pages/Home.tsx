import { useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatCounter } from "@/components/StatCounter";
import { EventCard } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Users, Home as HomeIcon, TreeDeciduous, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "@/assets/hero-village.jpg";
import festivalImage from "@/assets/festival.jpg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero parallax effect
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Stats fade in
    if (statsRef.current) {
      gsap.from(statsRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 w-full h-[120%]"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to Malkapur
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              A thriving community rooted in tradition, growing towards progress
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button className="btn-hero">
                  Explore Our Village
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCounter icon={Users} value={12500} label="Population" />
            <StatCounter icon={HomeIcon} value={2800} label="Households" />
            <StatCounter icon={TreeDeciduous} value={1200} label="Hectares Farmland" suffix="+" />
            <StatCounter icon={Building2} value={45} label="Public Facilities" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">About Malkapur</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Malkapur is a vibrant village in Maharashtra, known for its rich agricultural heritage
                and close-knit community. With a history spanning several centuries, our village has
                witnessed remarkable growth while maintaining its traditional values.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Located in the heart of Maharashtra's agricultural belt, Malkapur is home to dedicated
                farmers, skilled artisans, and progressive citizens working together for community development.
              </p>
              <Link to="/about">
                <Button variant="outline">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={festivalImage}
                alt="Malkapur Community"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg">Stay connected with our community activities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard
              title="Health Check-up Camp"
              date="15th March 2024"
              venue="Village Health Center"
              organizer="Grampanchayat Health Committee"
              description="Free health screening for all village residents"
              type="upcoming"
            />
            <EventCard
              title="Farmers' Workshop"
              date="22nd March 2024"
              venue="Community Hall"
              organizer="Agriculture Department"
              description="Latest farming techniques and sustainable practices"
              type="upcoming"
            />
            <EventCard
              title="Independence Day Celebration"
              date="15th August 2024"
              venue="Village Ground"
              organizer="Grampanchayat"
              description="Cultural programs and flag hoisting ceremony"
              type="upcoming"
            />
          </div>
          
          <div className="text-center mt-8">
            <Link to="/events">
              <Button variant="outline">
                View All Events
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Find Us</h2>
            <p className="text-muted-foreground text-lg">Malkapur, Maharashtra</p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15268.536507295019!2d73.9235403002895!3d16.91867479224983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1b959f498c1a5%3A0x68f919310dc9cb54!2sMalkapur%2C%20Maharashtra%20415101!5e0!3m2!1sen!2sin!4v1763708141841!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
