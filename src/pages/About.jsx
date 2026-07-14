import { Link } from 'react-router-dom';
import PublicLayout from '../components/layout/PublicLayout.jsx';

const TOOLS = [
  {
    icon: 'inventory_2',
    title: 'Smart Inventory',
    desc: "Track your pantry items with expiry alerts, so you always know what's in stock before you buy more.",
  },
  {
    icon: 'volunteer_activism',
    title: 'Hyper-Local Donations',
    desc: 'Connect with neighbors and community groups instantly. One-tap surplus sharing makes giving easy.',
  },
  {
    icon: 'calendar_month',
    title: 'Meal Orchestration',
    desc: "Get suggestions based on what's about to expire — save money and reduce waste through smart planning.",
  },
];

const BEYOND = [
  { title: 'Education', desc: 'Guides on sustainable cooking and food preservation for households across Malaysia.' },
  { title: 'Logistics', desc: 'Making it simple to bridge the gap between donors and the neighbors who need surplus food most.' },
  { title: 'Data', desc: 'Surfacing insights that help communities and policymakers design better food security initiatives.' },
];

export default function About() {
  return (
    <PublicLayout>
      <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        {/* Hero: the problem */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-xl items-start mb-xl">
          <div className="md:col-span-7">
            <span className="text-secondary font-label-md uppercase tracking-widest mb-md block">
              The Malaysian Context
            </span>
            <h1 className="font-headline-xl text-on-background mb-lg leading-tight">
              Every day, Malaysia discards enough food to feed <span className="text-secondary">12 million people</span> three times over.
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-xl max-w-2xl">
              In a nation celebrated for its culinary heritage, we face a silent crisis. Approximately 16,688 tonnes of food waste are generated daily, with nearly 4,000 tonnes still perfectly edible. This isn't just an environmental burden—it's a missed opportunity to care for our neighbors.
            </p>
            <div className="grid grid-cols-2 gap-lg border-t border-outline-variant pt-lg">
              <div>
                <span className="font-headline-md text-primary block">4,000+</span>
                <span className="font-label-sm text-on-surface-variant">Tonnes of edible food wasted daily</span>
              </div>
              <div>
                <span className="font-headline-md text-primary block">24%</span>
                <span className="font-label-sm text-on-surface-variant">Increase during festive seasons</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-white border border-outline-variant p-md shadow-sm transform rotate-2 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Editorial Malaysian kitchen table with fresh herbs and rice"
                src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden md:block">
              <div className="bg-secondary-fixed text-on-secondary-fixed p-lg rounded-xl border border-secondary w-48 shadow-lg transform -rotate-3">
                <p className="font-label-md">"Food is the common ground, a universal experience."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission statement */}
        <section className="bg-primary-container text-on-primary-container p-xl rounded-xl mb-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <h2 className="font-label-md text-primary-fixed-dim uppercase tracking-widest mb-md">Our Mission</h2>
            <p className="font-headline-lg mb-lg">
              To digitize the Malaysian pantry, transforming surplus into sustainability through community-driven logistics and mindful consumption.
            </p>
            <p className="font-body-md opacity-90 leading-relaxed">
              NourishShare was born out of a simple observation: our kitchens are full, yet our neighbors are hungry. We believe that by providing the right digital tools, every household can become part of a decentralized network of food security—building infrastructure for a waste-free future, one kitchen at a time.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[200px] absolute -right-20 -top-20">volunteer_activism</span>
          </div>
        </section>

        {/* Tools */}
        <section className="mb-xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-xl gap-md">
            <div className="max-w-xl">
              <h2 className="font-headline-lg text-on-background mb-sm">Tools for Transformation</h2>
              <p className="font-body-md text-on-surface-variant">
                We&apos;ve reimagined the traditional pantry ledger for the modern age, focusing on simplicity and community connection.
              </p>
            </div>
            <div className="stamp-effect text-secondary font-bold uppercase text-sm">Pantry Approved</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {TOOLS.map((tool) => (
              <div key={tool.title} className="bg-surface-container border border-outline-variant p-lg rounded-lg flex flex-col hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-lg">
                  <span className="material-symbols-outlined text-primary">{tool.icon}</span>
                </div>
                <h3 className="font-headline-md mb-md">{tool.title}</h3>
                <p className="font-body-md text-on-surface-variant">{tool.desc}</p>
                <div className="mt-auto border-t border-outline-variant pt-md flex items-center gap-xs text-primary font-label-md cursor-pointer group">
                  Learn More <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Beyond the app */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-xl py-xl items-center border-t border-outline-variant">
          <div>
            <img
              className="w-full h-[400px] object-cover rounded-xl shadow-sm border border-outline-variant"
              alt="Community members gathering around a food-sharing table"
              src="https://images.unsplash.com/photo-1528150177501-4fd7066f6d16?auto=format&fit=crop&w=800&q=80"
            />
          </div>
          <div>
            <h2 className="font-headline-lg text-on-background mb-lg">Beyond the App</h2>
            <div className="space-y-lg">
              {BEYOND.map((item, i) => (
                <div key={item.title} className="flex gap-md">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-primary flex items-center justify-center font-bold text-primary">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-headline-md text-primary mb-xs">{item.title}</h4>
                    <p className="font-body-md text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary-fixed text-on-secondary-fixed p-xl rounded-xl text-center border border-secondary/20 my-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline-xl mb-md">Join the Movement</h2>
            <p className="font-body-lg mb-xl max-w-xl mx-auto">
              Be part of the solution. Start managing your pantry with purpose today and help us nourish Malaysia.
            </p>
            <div className="flex flex-col md:flex-row gap-md justify-center items-center">
              <Link to="/register" className="bg-primary text-on-primary px-xl py-md rounded-full font-headline-md hover:scale-105 transition-transform">
                Create Your Account
              </Link>
              <Link to="/contact" className="border border-primary text-primary px-xl py-md rounded-full font-headline-md hover:bg-primary/5 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
