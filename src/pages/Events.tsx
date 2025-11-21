import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EventCard } from "@/components/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Village Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Stay updated with upcoming programs and community activities
          </p>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="section-spacing">
        <div className="container-custom">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <EventCard
                  title="Health Check-up Camp"
                  date="15th March 2024"
                  venue="Village Health Center"
                  organizer="Grampanchayat Health Committee"
                  description="Free health screening, blood pressure check, diabetes test, and consultation with specialist doctors."
                  type="upcoming"
                />
                <EventCard
                  title="Farmers' Workshop"
                  date="22nd March 2024"
                  venue="Community Hall"
                  organizer="Agriculture Department"
                  description="Training on modern farming techniques, organic farming, and government subsidy schemes."
                  type="upcoming"
                />
                <EventCard
                  title="Women's Day Celebration"
                  date="8th March 2024"
                  venue="Community Hall"
                  organizer="Women's Self Help Group"
                  description="Cultural programs, recognition of women achievers, and skill development workshop."
                  type="upcoming"
                />
                <EventCard
                  title="Tree Plantation Drive"
                  date="5th April 2024"
                  venue="Village Outskirts"
                  organizer="Environment Committee"
                  description="Community plantation of 1000+ trees. All residents invited to participate."
                  type="upcoming"
                />
                <EventCard
                  title="Youth Sports Tournament"
                  date="12th April 2024"
                  venue="Village Sports Ground"
                  organizer="Youth Club"
                  description="Inter-ward cricket and volleyball competitions with prizes for winners."
                  type="upcoming"
                />
                <EventCard
                  title="Digital Literacy Workshop"
                  date="18th April 2024"
                  venue="Digital Literacy Center"
                  organizer="Grampanchayat IT Committee"
                  description="Training on smartphone usage, online payments, and government services."
                  type="upcoming"
                />
                <EventCard
                  title="Gudi Padwa Celebration"
                  date="9th April 2024"
                  venue="Village Temple Complex"
                  organizer="Cultural Committee"
                  description="Traditional New Year celebration with cultural programs and community feast."
                  type="upcoming"
                />
                <EventCard
                  title="Independence Day"
                  date="15th August 2024"
                  venue="Village Ground"
                  organizer="Grampanchayat"
                  description="Flag hoisting ceremony, cultural performances, and patriotic programs."
                  type="upcoming"
                />
                <EventCard
                  title="Ganesh Chaturthi"
                  date="7th September 2024"
                  venue="Community Mandap"
                  organizer="Festival Committee"
                  description="10-day grand celebration with daily aartis, cultural programs, and prasad distribution."
                  type="upcoming"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="past" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <EventCard
                  title="Republic Day Celebration"
                  date="26th January 2024"
                  venue="Village Ground"
                  organizer="Grampanchayat"
                  description="Flag hoisting, parade by school children, and cultural performances."
                  type="completed"
                />
                <EventCard
                  title="Makar Sankranti Fair"
                  date="14th January 2024"
                  venue="Main Market Area"
                  organizer="Festival Committee"
                  description="Traditional kite flying, local handicrafts exhibition, and food stalls."
                  type="completed"
                />
                <EventCard
                  title="Winter Health Camp"
                  date="15th December 2023"
                  venue="Village Health Center"
                  organizer="Health Committee"
                  description="Free health check-up and medicine distribution for elderly citizens."
                  type="completed"
                />
                <EventCard
                  title="Annual Sports Day"
                  date="10th November 2023"
                  venue="Sports Ground"
                  organizer="Youth Committee"
                  description="Inter-school and inter-ward sports competitions with prizes."
                  type="completed"
                />
                <EventCard
                  title="Diwali Celebration"
                  date="12th November 2023"
                  venue="Community Hall"
                  organizer="Cultural Committee"
                  description="Community Diwali celebration with cultural programs and sweets distribution."
                  type="completed"
                />
                <EventCard
                  title="Farmers' Training Program"
                  date="5th October 2023"
                  venue="Agriculture Office"
                  organizer="Agriculture Department"
                  description="Training on soil testing, crop rotation, and pest management."
                  type="completed"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Festival Calendar */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Annual Festival Calendar</h2>
            <p className="text-muted-foreground text-lg">Major celebrations in Malkapur</p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="card-elevated p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">Makar Sankranti</h3>
                <span className="text-sm text-muted-foreground">January</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Harvest festival celebrated with kite flying, traditional sweets, and community gathering.
              </p>
            </div>
            
            <div className="card-elevated p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">Holi</h3>
                <span className="text-sm text-muted-foreground">March</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Festival of colors celebrated with traditional songs, dance, and community bonfire.
              </p>
            </div>
            
            <div className="card-elevated p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">Gudi Padwa</h3>
                <span className="text-sm text-muted-foreground">April</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Maharashtrian New Year celebrated with traditional decorations and processions.
              </p>
            </div>
            
            <div className="card-elevated p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">Ganesh Chaturthi</h3>
                <span className="text-sm text-muted-foreground">September</span>
              </div>
              <p className="text-sm text-muted-foreground">
                10-day grand celebration with daily programs, cultural events, and community participation.
              </p>
            </div>
            
            <div className="card-elevated p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">Diwali</h3>
                <span className="text-sm text-muted-foreground">October/November</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Festival of lights with community celebrations, cultural programs, and fireworks.
              </p>
            </div>
            
            <div className="card-elevated p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">Village Fair</h3>
                <span className="text-sm text-muted-foreground">December</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Annual fair with handicrafts, local produce, food stalls, and entertainment programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
