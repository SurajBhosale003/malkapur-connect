import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import sarpanchImage from "@/assets/sarpanch.jpg";

const Leadership = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Our Leadership
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Meet the dedicated team serving Malkapur with commitment and vision
          </p>
        </div>
      </section>

      {/* Sarpanch Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="card-elevated max-w-4xl mx-auto p-8 md:p-12">
            <div className="grid md:grid-cols-[300px,1fr] gap-8 items-start">
              <div className="mx-auto md:mx-0">
                <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg mb-4">
                  <img
                    src={sarpanchImage}
                    alt="Sarpanch"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-foreground mb-2">Shri Ramesh Patil</h2>
                  <p className="text-xl text-primary font-medium mb-1">Sarpanch</p>
                  <p className="text-sm text-muted-foreground">Term: 2020-2025</p>
                </div>
                
                <div className="prose prose-sm max-w-none text-muted-foreground mb-6">
                  <p className="mb-4">
                    Honored citizens of Malkapur,
                  </p>
                  <p className="mb-4">
                    It is my privilege to serve as your Sarpanch and work towards the holistic development
                    of our beloved village. Over the past years, we have made significant strides in
                    infrastructure development, healthcare, education, and agricultural modernization.
                  </p>
                  <p className="mb-4">
                    Our focus remains on transparent governance, sustainable development, and ensuring
                    that every household in Malkapur has access to basic amenities and opportunities
                    for growth. Together, we are building a stronger, more prosperous community.
                  </p>
                  <p>
                    I am committed to listening to your concerns and working tirelessly for our collective progress.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <span className="font-medium">Email:</span>
                    <span className="ml-2">sarpanch@malkapur.gov.in</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <span className="font-medium">Phone:</span>
                    <span className="ml-2">+91 9876 543210</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-muted-foreground text-lg">
              Dedicated members working for village development
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TeamMemberCard
              name="Smt. Savita Jadhav"
              role="Deputy Sarpanch"
              email="savita.j@malkapur.gov.in"
              phone="+91 9876 543211"
            />
            <TeamMemberCard
              name="Shri Prakash Shinde"
              role="Ward Member - Ward 1"
              email="prakash.s@malkapur.gov.in"
              phone="+91 9876 543212"
            />
            <TeamMemberCard
              name="Smt. Anita Deshmukh"
              role="Ward Member - Ward 2"
              email="anita.d@malkapur.gov.in"
              phone="+91 9876 543213"
            />
            <TeamMemberCard
              name="Shri Suresh Pawar"
              role="Ward Member - Ward 3"
              email="suresh.p@malkapur.gov.in"
              phone="+91 9876 543214"
            />
            <TeamMemberCard
              name="Smt. Meena Kulkarni"
              role="Village Secretary"
              email="meena.k@malkapur.gov.in"
              phone="+91 9876 543215"
            />
            <TeamMemberCard
              name="Shri Vijay Gaikwad"
              role="Accountant"
              email="vijay.g@malkapur.gov.in"
              phone="+91 9876 543216"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;
