import { Link } from 'react-router-dom';
import ToastStack from '../ui/ToastStack.jsx';

export default function AuthLayout({ children, heroTitle, heroSubtitle, stats }) {
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      <section className="relative w-full md:w-1/2 lg:w-3/5 min-h-[280px] md:min-h-screen flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(https://picsum.photos/seed/saveplate-hero/1200/1400)` }}
          />
          <div className="absolute inset-0 bg-primary/50 backdrop-blur-[1px]" />
        </div>
        <div className="relative z-10 p-margin-mobile md:p-margin-desktop max-w-2xl text-surface">
          <div className="absolute -top-[220px] left-0 md:static mb-md flex items-center gap-sm">
            <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              eco
            </span>
            <Link to="/" className="font-headline-md text-headline-md font-bold">
              SavePlate
            </Link>
          </div>
          <h1 className="font-headline-xl text-headline-xl mb-md leading-tight">
            {heroTitle || 'Waste less, share more.'}
          </h1>
          <p className="font-body-lg text-body-lg opacity-90 mb-lg max-w-lg">
            {heroSubtitle ||
              'SavePlate helps Malaysian households track inventory, plan meals, and donate surplus food before it goes to waste.'}
          </p>
          {stats && (
            <div className="grid grid-cols-2 gap-md">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface-container-low p-md rounded-xl text-on-surface">
                  <span className="material-symbols-outlined text-primary mb-sm block">{s.icon}</span>
                  <div className="font-headline-md text-headline-md">{s.value}</div>
                  <div className="font-label-sm text-label-sm opacity-70">{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="w-full md:w-1/2 lg:w-2/5 paper-texture flex flex-col justify-center px-margin-mobile md:px-margin-desktop py-xl">
        <div className="max-w-md mx-auto w-full">{children}</div>
      </section>
      <ToastStack />
    </main>
  );
}
