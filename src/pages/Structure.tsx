import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { School, Church, Building2, Droplets, TreeDeciduous, Hospital, ShoppingBag } from "lucide-react";
import villageMapImage from "@/assets/village-map.jpg";

const Structure = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Village Structure
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Overview of Malkapur's layout and key facilities
          </p>
        </div>
      </section>

      {/* Village Map */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Village Layout</h2>
            <p className="text-muted-foreground text-lg">Visual representation of our village structure</p>
          </div>
          
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <img
              src={villageMapImage}
              alt="Village Map"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Wards */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Village Wards</h2>
            <p className="text-muted-foreground text-lg">Malkapur is divided into 3 administrative wards</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-elevated p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">Ward 1</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Area:</strong> Eastern Malkapur</p>
                <p><strong>Households:</strong> ~950</p>
                <p><strong>Population:</strong> ~4,200</p>
                <p><strong>Ward Member:</strong> Shri Prakash Shinde</p>
                <p className="text-sm pt-2">
                  Includes main market area, primary school, and the historic temple complex.
                </p>
              </div>
            </div>
            
            <div className="card-elevated p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">Ward 2</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Area:</strong> Central Malkapur</p>
                <p><strong>Households:</strong> ~900</p>
                <p><strong>Population:</strong> ~4,000</p>
                <p><strong>Ward Member:</strong> Smt. Anita Deshmukh</p>
                <p className="text-sm pt-2">
                  Houses the Grampanchayat office, health center, and community hall.
                </p>
              </div>
            </div>
            
            <div className="card-elevated p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">Ward 3</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Area:</strong> Western Malkapur</p>
                <p><strong>Households:</strong> ~950</p>
                <p><strong>Population:</strong> ~4,300</p>
                <p><strong>Ward Member:</strong> Shri Suresh Pawar</p>
                <p className="text-sm pt-2">
                  Agricultural area with high school, sports ground, and water treatment plant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facilities */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Key Facilities</h2>
            <p className="text-muted-foreground text-lg">Public infrastructure serving our community</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Education</h3>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>3 Primary Schools</p>
                <p>1 High School</p>
                <p>1 Junior College</p>
                <p>1 Digital Literacy Center</p>
              </div>
            </div>
            
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Hospital className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Healthcare</h3>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>1 Primary Health Center</p>
                <p>2 Private Clinics</p>
                <p>1 Pharmacy</p>
                <p>Ambulance Service</p>
              </div>
            </div>
            
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Water</h3>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>1 Water Treatment Plant</p>
                <p>3 Overhead Tanks</p>
                <p>15 Public Taps</p>
                <p>2 Borewells</p>
              </div>
            </div>
            
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Church className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Religious</h3>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>2 Temples</p>
                <p>1 Masjid</p>
                <p>1 Church</p>
                <p>Community Prayer Hall</p>
              </div>
            </div>
            
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Government</h3>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>Grampanchayat Office</p>
                <p>Post Office</p>
                <p>Police Station</p>
                <p>Ration Shop</p>
              </div>
            </div>
            
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Commercial</h3>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>Main Market Area</p>
                <p>Vegetable Market</p>
                <p>Agricultural Co-op</p>
                <p>Bank & ATM</p>
              </div>
            </div>
            
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <TreeDeciduous className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Parks & Recreation</h3>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>Community Park</p>
                <p>Sports Ground</p>
                <p>Children's Playground</p>
                <p>Open Gym</p>
              </div>
            </div>
            
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Community</h3>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>Community Hall</p>
                <p>Library</p>
                <p>Senior Citizen Center</p>
                <p>Youth Club</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Stats */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Infrastructure Highlights</h2>
            <p className="text-muted-foreground text-lg">Key development indicators</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-elevated p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Electrification</p>
            </div>
            <div className="card-elevated p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Road Connectivity</p>
            </div>
            <div className="card-elevated p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">18 km</div>
              <p className="text-muted-foreground">Total Road Length</p>
            </div>
            <div className="card-elevated p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">180</div>
              <p className="text-muted-foreground">Street Lights</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Structure;
