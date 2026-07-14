import { Link } from 'react-router-dom';

export default function PublicFooter() {
  return (
    <footer className="bg-surface-container py-xl border-t border-outline-variant">
      <div className="max-w-7xl mx-auto px-lg grid grid-cols-1 md:grid-cols-4 gap-xl">
        <div className="md:col-span-1">
          <div className="flex items-center gap-sm mb-md">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M5 12c0-3 2.5-5.5 5.5-5.5S16 9 16 12s-2.5 5.5-5.5 5.5S5 15 5 12Z" />
                <path d="M12 6C14.5 6 16 7.5 16 10c0 1.86-1.07 3.45-2.63 4.15" />
              </svg>
            </span>
            <span className="font-headline-md text-primary font-bold">NourishShare</span>
          </div>
          <p className="font-label-sm text-on-surface-variant mb-lg">
            A digital ecosystem for mindful consumption and food waste reduction in Malaysia.
          </p>
          <div className="flex gap-md">
            <a
              className="w-8 h-8 flex items-center justify-center border border-outline rounded-full text-primary hover:bg-primary hover:text-on-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a
              className="w-8 h-8 flex items-center justify-center border border-outline rounded-full text-primary hover:bg-primary hover:text-on-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-label-md text-primary mb-md">Product</h4>
          <ul className="space-y-sm font-label-sm text-on-surface-variant">
            <li>
              <Link className="hover:text-primary" to="/features">
                Features
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to="/how-it-works">
                How It Works
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to="/register">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-primary mb-md">Company</h4>
          <ul className="space-y-sm font-label-sm text-on-surface-variant">
            <li>
              <Link className="hover:text-primary" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-primary mb-md">Contact</h4>
          <ul className="space-y-sm font-label-sm text-on-surface-variant">
            <li className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-sm">mail</span> hello@nourishshare.my
            </li>
            <li className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-sm">location_on</span> Kuala Lumpur, Malaysia
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-lg mt-xl pt-lg border-t border-outline-variant text-center">
        <p className="font-label-sm text-on-surface-variant/60">
          © 2026 NourishShare. Reducing food waste, one kitchen at a time.
        </p>
      </div>
    </footer>
  );
}
