import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Wheat, Droplets, School, Heart, TreeDeciduous, Users } from "lucide-react";
import festivalImage from "@/assets/festival.jpg";
import heroImage from "@/assets/hero-village.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4 animate-fade-in">
            About Malkapur
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            A village with rich heritage, growing towards a brighter future
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Malkapur History"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our History</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Malkapur's history dates back several centuries, with its name believed to be derived
                  from the local deity worshipped by the early settlers. The village has been a significant
                  agricultural center in the region, known for its fertile lands and hardworking farmers.
                </p>
                <p>
                  Over the decades, Malkapur has witnessed remarkable transformation while preserving its
                  cultural identity. From traditional farming methods to modern agricultural practices, from
                  oil lamps to electricity, our village has embraced progress without losing its soul.
                </p>
                <p>
                  Today, Malkapur stands as a model village, balancing tradition with modernity, and
                  continuing to grow as a cohesive, progressive community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Village Highlights</h2>
            <p className="text-muted-foreground text-lg">What makes Malkapur special</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-elevated p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <Wheat className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Agriculture</h3>
              <p className="text-muted-foreground">
                Primary crops include sugarcane, wheat, and jowar. Modern farming techniques and
                irrigation systems ensure high productivity.
              </p>
            </div>
            
            <div className="card-elevated p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <School className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Education</h3>
              <p className="text-muted-foreground">
                Three primary schools, one high school, and a junior college serve our youth,
                with plans for a technical training center.
              </p>
            </div>
            
            <div className="card-elevated p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Healthcare</h3>
              <p className="text-muted-foreground">
                Primary health center with qualified doctors, pharmacy, and ambulance service.
                Regular health camps and vaccination drives.
              </p>
            </div>
            
            <div className="card-elevated p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Water Supply</h3>
              <p className="text-muted-foreground">
                24/7 water supply through modern pipeline system. Water treatment plant ensures
                clean drinking water for all households.
              </p>
            </div>
            
            <div className="card-elevated p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <TreeDeciduous className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Environment</h3>
              <p className="text-muted-foreground">
                Active tree plantation drives, waste segregation, and solar energy adoption.
                Committed to sustainable development.
              </p>
            </div>
            
            <div className="card-elevated p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Community</h3>
              <p className="text-muted-foreground">
                Strong community bonds, regular cultural events, and support systems for
                senior citizens and underprivileged families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Festivals */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Culture & Traditions</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Malkapur's cultural heritage is vibrant and diverse. Our community celebrates all major
                  Hindu festivals with great enthusiasm, including Ganesh Chaturthi, Diwali, Holi, and
                  Makar Sankranti. These celebrations bring the entire village together.
                </p>
                <p>
                  Traditional arts like Lavani, Powada, and folk music are still practiced and performed
                  during village festivals. Our youth participate actively in preserving these art forms
                  while also embracing modern cultural expressions.
                </p>
                <p>
                  The village also hosts an annual fair that attracts visitors from neighboring areas,
                  showcasing local handicrafts, agricultural produce, and cultural performances.
                </p>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={festivalImage}
                alt="Village Festival"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Development Timeline</h2>
            <p className="text-muted-foreground text-lg">Key milestones in Malkapur's progress</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { year: "2020", title: "Solar Street Lights", description: "Installation of solar-powered street lights across all village roads" },
                { year: "2019", title: "Digital Literacy Center", description: "Establishment of computer training center for youth and adults" },
                { year: "2018", title: "New Community Hall", description: "Construction of modern multi-purpose community hall" },
                { year: "2017", title: "Road Connectivity", description: "Paving of all major village roads with cement concrete" },
                { year: "2016", title: "Water Treatment Plant", description: "Setting up modern water purification and distribution system" },
              ].map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start animate-fade-in">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary mt-2"></div>
                  <div className="flex-1 card-elevated p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
