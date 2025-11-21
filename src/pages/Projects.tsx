import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Projects & Social Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Building a better tomorrow for Malkapur
          </p>
        </div>
      </section>

      {/* Projects Tabs */}
      <section className="section-spacing">
        <div className="container-custom">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="Solar Street Light Installation"
                  description="Installation of 180 solar-powered LED street lights across all village roads for better night safety and energy efficiency."
                  status="completed"
                  budget="₹45 Lakhs"
                  startDate="Jan 2023"
                  endDate="Dec 2023"
                />
                <ProjectCard
                  title="Community Hall Renovation"
                  description="Modernization of community hall with new audio-visual equipment, air conditioning, and expanded seating capacity."
                  status="in-progress"
                  budget="₹32 Lakhs"
                  startDate="Oct 2023"
                  endDate="Mar 2024"
                />
                <ProjectCard
                  title="Digital Village Initiative"
                  description="Free WiFi zones, digital payment training, and online government services access points throughout the village."
                  status="in-progress"
                  budget="₹18 Lakhs"
                  startDate="Nov 2023"
                  endDate="May 2024"
                />
                <ProjectCard
                  title="Concrete Road Construction"
                  description="Paving of all remaining unpaved village roads with cement concrete for all-weather accessibility."
                  status="upcoming"
                  budget="₹85 Lakhs"
                  startDate="Apr 2024"
                />
                <ProjectCard
                  title="Playground Development"
                  description="Creation of modern sports facilities including cricket pitch, volleyball court, and children's play equipment."
                  status="completed"
                  budget="₹28 Lakhs"
                  startDate="Jun 2022"
                  endDate="Nov 2022"
                />
                <ProjectCard
                  title="Drip Irrigation Training"
                  description="Training program for farmers on water-efficient drip irrigation systems with subsidy support."
                  status="in-progress"
                  budget="₹12 Lakhs"
                  startDate="Jan 2024"
                  endDate="Dec 2024"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="completed" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="Solar Street Light Installation"
                  description="Installation of 180 solar-powered LED street lights across all village roads for better night safety and energy efficiency."
                  status="completed"
                  budget="₹45 Lakhs"
                  startDate="Jan 2023"
                  endDate="Dec 2023"
                />
                <ProjectCard
                  title="Playground Development"
                  description="Creation of modern sports facilities including cricket pitch, volleyball court, and children's play equipment."
                  status="completed"
                  budget="₹28 Lakhs"
                  startDate="Jun 2022"
                  endDate="Nov 2022"
                />
                <ProjectCard
                  title="Water Treatment Plant"
                  description="Installation of modern water purification system ensuring clean drinking water for all households."
                  status="completed"
                  budget="₹65 Lakhs"
                  startDate="Mar 2021"
                  endDate="Sep 2021"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="ongoing" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="Community Hall Renovation"
                  description="Modernization of community hall with new audio-visual equipment, air conditioning, and expanded seating capacity."
                  status="in-progress"
                  budget="₹32 Lakhs"
                  startDate="Oct 2023"
                  endDate="Mar 2024"
                />
                <ProjectCard
                  title="Digital Village Initiative"
                  description="Free WiFi zones, digital payment training, and online government services access points throughout the village."
                  status="in-progress"
                  budget="₹18 Lakhs"
                  startDate="Nov 2023"
                  endDate="May 2024"
                />
                <ProjectCard
                  title="Drip Irrigation Training"
                  description="Training program for farmers on water-efficient drip irrigation systems with subsidy support."
                  status="in-progress"
                  budget="₹12 Lakhs"
                  startDate="Jan 2024"
                  endDate="Dec 2024"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="upcoming" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="Concrete Road Construction"
                  description="Paving of all remaining unpaved village roads with cement concrete for all-weather accessibility."
                  status="upcoming"
                  budget="₹85 Lakhs"
                  startDate="Apr 2024"
                />
                <ProjectCard
                  title="Solar Pump Installation"
                  description="Installation of solar-powered water pumps for agricultural use, reducing electricity dependency."
                  status="upcoming"
                  budget="₹42 Lakhs"
                  startDate="Jun 2024"
                />
                <ProjectCard
                  title="Senior Citizen Care Center"
                  description="Establishment of dedicated facility with recreational activities and health monitoring for elderly residents."
                  status="upcoming"
                  budget="₹22 Lakhs"
                  startDate="Aug 2024"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Social Initiatives */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Social Welfare Programs</h2>
            <p className="text-muted-foreground text-lg">Community support initiatives</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-elevated p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Free Health Check-up Camps</h3>
              <p className="text-muted-foreground mb-4">
                Quarterly health screening camps with specialist doctors from nearby cities. Free medicines
                and diagnostic tests for all village residents, with special focus on women and children.
              </p>
              <div className="text-sm text-primary font-medium">Held: Every 3 months</div>
            </div>
            
            <div className="card-elevated p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Educational Scholarships</h3>
              <p className="text-muted-foreground mb-4">
                Financial assistance for meritorious students pursuing higher education. Support for
                underprivileged students with books, uniforms, and school supplies.
              </p>
              <div className="text-sm text-primary font-medium">Beneficiaries: 150+ students annually</div>
            </div>
            
            <div className="card-elevated p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Senior Citizen Support</h3>
              <p className="text-muted-foreground mb-4">
                Monthly pension support, free medical check-ups, and social engagement activities.
                Dedicated helpline for emergency assistance and home visits by health workers.
              </p>
              <div className="text-sm text-primary font-medium">Coverage: All senior citizens 60+</div>
            </div>
            
            <div className="card-elevated p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Cleanliness Drives</h3>
              <p className="text-muted-foreground mb-4">
                Weekly community cleaning campaigns, waste segregation awareness, and plastic-free
                village initiative. Composting training for organic waste management.
              </p>
              <div className="text-sm text-primary font-medium">Participation: 500+ volunteers</div>
            </div>
            
            <div className="card-elevated p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Skill Development</h3>
              <p className="text-muted-foreground mb-4">
                Free vocational training in tailoring, computer skills, and entrepreneurship.
                Special programs for women empowerment and youth employment.
              </p>
              <div className="text-sm text-primary font-medium">Trained: 300+ individuals yearly</div>
            </div>
            
            <div className="card-elevated p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Food Security Program</h3>
              <p className="text-muted-foreground mb-4">
                Subsidized ration for below poverty line families, community kitchen during emergencies,
                and nutrition programs for pregnant women and infants.
              </p>
              <div className="text-sm text-primary font-medium">Families covered: 280+</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
