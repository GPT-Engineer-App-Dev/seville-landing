import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, Twitter, Music, Utensils, Landmark, PartyPopper } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img src="/images/seville-cityscape.jpg" alt="Seville Cityscape" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Seville</h1>
          <p className="text-xl md:text-2xl mb-8">Explore the heart of Andalusia</p>
          <Button size="lg">Learn More</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Seville</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                Seville, the capital of Andalusia, is a city steeped in history and culture. Founded as the Roman city of Hispalis, it has been home to various civilizations, each leaving its mark on the city's architecture and traditions.
              </p>
              <p className="text-lg">
                Today, Seville is known for its stunning Gothic cathedral, the largest in the world, the iconic Giralda tower, and the beautiful Alcázar palace. The city is also famous for its flamenco music and dance, delicious tapas, and vibrant festivals.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/images/seville-cathedral.jpg" alt="Seville Cathedral" className="rounded-lg shadow-lg w-full h-[300px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 md:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <HighlightCard
              icon={<Music className="w-10 h-10" />}
              title="Flamenco"
              description="Experience the passion of authentic flamenco music and dance in its birthplace."
            />
            <HighlightCard
              icon={<Utensils className="w-10 h-10" />}
              title="Tapas"
              description="Savor a wide variety of delicious tapas in the city's many bars and restaurants."
            />
            <HighlightCard
              icon={<Landmark className="w-10 h-10" />}
              title="Historical Sites"
              description="Explore magnificent landmarks like the Seville Cathedral, Alcázar, and Plaza de España."
            />
            <HighlightCard
              icon={<PartyPopper className="w-10 h-10" />}
              title="Festivals"
              description="Join in the excitement of Seville's famous festivals, including Semana Santa and Feria de Abril."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex justify-center space-x-6">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
};

const HighlightCard = ({ icon, title, description }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-4">
        {icon}
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

export default Index;