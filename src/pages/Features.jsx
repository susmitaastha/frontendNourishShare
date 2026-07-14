import { Link } from 'react-router-dom';
import PublicLayout from '../components/layout/PublicLayout.jsx';
import { useAuth } from '../hooks/useAuth';

export default function Features() {
  const { isAuthenticated } = useAuth();

  return (
    <PublicLayout>
      <section className="py-xl">
        <div className="max-w-7xl mx-auto px-lg">
          <div className="mb-xl max-w-2xl">
            <h1 className="font-headline-xl text-primary mb-sm">Designed for the modern kitchen</h1>
            <p className="font-body-lg text-on-surface-variant">
              A suite of tools that feel as natural as a handwritten shopping list, but smarter — everything
              you need to track, plan, and share.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-md">
            {/* Feature 1: Inventory */}
            <div className="md:col-span-2 bg-surface border border-outline-variant p-lg rounded-xl flex flex-col justify-between hover:border-primary transition-colors">
              <div>
                <span className="material-symbols-outlined text-primary mb-md text-3xl">kitchen</span>
                <h3 className="font-headline-md text-primary mb-sm">Visual Inventory Management</h3>
                <p className="font-body-md text-on-surface-variant max-w-md">
                  Categorize your staples with an interface inspired by heritage pantry ledgers. See exactly
                  what&apos;s in stock at a glance — fridge, pantry, and freezer, all in one dashboard.
                </p>
              </div>
              <div className="mt-lg h-32 bg-surface-container-low rounded-lg border border-dashed border-outline-variant flex items-center justify-center">
                <span className="font-label-sm text-outline italic">Smart Pantry View Preview</span>
              </div>
            </div>

            {/* Feature 2: Expiry */}
            <div className="bg-secondary-container p-lg rounded-xl text-on-secondary-container">
              <span className="material-symbols-outlined mb-md text-3xl">timer</span>
              <h3 className="font-headline-md mb-sm">Expiry Alerts</h3>
              <p className="font-body-md opacity-90">
                Gentle reminders that prioritize your most perishable items, like fresh produce and dairy.
              </p>
            </div>

            {/* Feature 3: Donations */}
            <div className="bg-primary p-lg rounded-xl text-on-primary">
              <span className="material-symbols-outlined mb-md text-3xl">handshake</span>
              <h3 className="font-headline-md mb-sm">Community Donations</h3>
              <p className="font-body-md opacity-90">
                Securely list excess food for local shelters or neighbors in a few taps, and browse what
                others are sharing nearby.
              </p>
            </div>

            {/* Feature 4: Privacy & security */}
            <div className="md:col-span-2 bg-tertiary-fixed p-lg rounded-xl flex items-center gap-lg">
              <div className="flex-1">
                <span className="material-symbols-outlined text-tertiary mb-md text-3xl">shield_lock</span>
                <h3 className="font-headline-md text-tertiary mb-sm">Privacy You Control</h3>
                <p className="font-body-md text-on-tertiary-fixed-variant">
                  Choose who can see your listings, enable two-factor authentication, and decide how much
                  detail claimers see before a pickup is confirmed.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-xl">
            <Link to={isAuthenticated ? '/dashboard' : '/register'} className="bg-primary text-on-primary px-xl py-md rounded-lg font-label-md hover:opacity-90 transition-opacity inline-flex items-center gap-sm">
              {isAuthenticated ? 'Go to Dashboard' : 'Try SavePlate Free'}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
