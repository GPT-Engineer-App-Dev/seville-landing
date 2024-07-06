import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, Twitter, Music, Utensils, Landmark, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    // This effect will run once when the component mounts
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src="/images/seville-cityscape.jpg" alt="Seville Cityscape" className="absolute inset-0 w-full h-full object-cover" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Seville</h1>
          <p className="text-xl md:text-2xl mb-8">Explore the heart of Andalusia</p>
          <Button size="lg" className="transition-transform hover:scale-105">Learn More</Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 bg-background overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Seville</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <p className="text-lg mb-4">
                Seville, the capital of Andalusia, is a city steeped in history and culture. Founded as the Roman city of Hispalis, it has been home to various civilizations, each leaving its mark on the city's architecture and traditions.
              </p>
              <p className="text-lg">
                Today, Seville is known for its stunning Gothic cathedral, the largest in the world, the iconic Giralda tower, and the beautiful Alcázar palace. The city is also famous for its flamenco music and dance, delicious tapas, and vibrant festivals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <img src="/images/seville-cathedral.jpg" alt="Seville Cathedral" className="rounded-lg shadow-lg w-full h-[300px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 md:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <HighlightCard {...highlight} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex justify-center space-x-6">
          <SocialIcon href="#" icon={<Facebook className="w-6 h-6" />} />
          <SocialIcon href="#" icon={<Instagram className="w-6 h-6" />} />
          <SocialIcon href="#" icon={<Twitter className="w-6 h-6" />} />
        </div>
      </footer>
    </div>
  );
};

const highlights = [
  {
    icon: <Music className="w-10 h-10" />,
    title: "Flamenco",
    description: "Experience the passion of authentic flamenco music and dance in its birthplace."
  },
  {
    icon: <Utensils className="w-10 h-10" />,
    title: "Tapas",
    description: "Savor a wide variety of delicious tapas in the city's many bars and restaurants."
  },
  {
    icon: <Landmark className="w-10 h-10" />,
    title: "Historical Sites",
    description: "Explore magnificent landmarks like the Seville Cathedral, Alcázar, and Plaza de España."
  },
  {
    icon: <PartyPopper className="w-10 h-10" />,
    title: "Festivals",
    description: "Join in the excitement of Seville's famous festivals, including Semana Santa and Feria de Abril."
  }
];

const HighlightCard = ({ icon, title, description }) => (
  <Card className="transition-transform hover:scale-105">
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

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    className="text-muted-foreground hover:text-foreground transition-colors duration-200 transform hover:scale-110"
  >
    {icon}
  </a>
);

export default Index;