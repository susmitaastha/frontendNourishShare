import { Link } from 'react-router-dom';
import PublicLayout from '../components/layout/PublicLayout.jsx';
import { useAuth } from '../hooks/useAuth';

const STAGES = [
  {
    icon: 'person_add',
    title: '1. Create your account',
    desc: 'Register in under a minute, verify your email, and optionally enable two-factor authentication to keep your pantry secure.',
  },
  {
    icon: 'inventory_2',
    title: '2. Log your food',
    desc: 'Add items to your fridge, pantry, or freezer with quantity, category, storage location, and expiry date.',
  },
  {
    icon: 'notifications_active',
    title: '3. Get expiry alerts',
    desc: "SavePlate watches your inventory and nudges you before anything crosses its best-before date.",
  },
  {
    icon: 'volunteer_activism',
    title: '4. Use it, or share it',
    desc: 'Mark an item as used when it\'s gone, or convert it to a donation listing in a couple of taps if you have surplus.',
  },
  {
    icon: 'explore',
    title: '5. Browse the community',
    desc: 'Discover what neighbors nearby are sharing, filter by category or distance, and claim what you need.',
  },
  {
    icon: 'query_stats',
    title: '6. Track your impact',
    desc: 'See how much food you\'ve saved from waste and how many donations you\'ve made over time.',
  },
];

export default function HowItWorks() {
  const { isAuthenticated } = useAuth();

  return (
    <PublicLayout>
      <section className="py-xl">
        <div className="max-w-5xl mx-auto px-lg">
          <div className="text-center mb-xl">
            <h1 className="font-headline-xl text-primary mb-sm">How SavePlate Works</h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              From your first login to your first donation claimed — here&apos;s the full loop.
            </p>
          </div>

          <div className="space-y-lg">
            {STAGES.map((stage, i) => (
              <div
                key={stage.title}
                className={`group flex flex-col md:flex-row items-start gap-lg p-lg rounded-xl border border-outline-variant transition-all hover:-translate-y-1 hover:border-primary hover:bg-primary/5 ${
                  i % 2 === 0 ? 'bg-surface' : 'bg-surface-container-low'
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-on-primary">
                  <span className="material-symbols-outlined text-[28px]">{stage.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-primary mb-xs transition-colors group-hover:text-secondary">{stage.title}</h3>
                  <p className="font-body-md text-on-surface-variant transition-colors group-hover:text-on-background">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-xl">
            <Link
              to={isAuthenticated ? '/dashboard' : '/register'}
              className="bg-primary text-on-primary px-xl py-md rounded-lg font-label-md hover:opacity-90 transition-opacity inline-flex items-center gap-sm"
            >
              {isAuthenticated ? 'Go to Dashboard' : 'Get Started'}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
