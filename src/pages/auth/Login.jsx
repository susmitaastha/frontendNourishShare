import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout.jsx';
import Input from '../../components/ui/Input.jsx';
import Button from '../../components/ui/Button.jsx';
import { useAuth } from '../../hooks/useAuth';

export default function Login() {
  const navigate = useNavigate();
  const { login, user } = useAuth();
  const [identity, setIdentity] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!identity || !password) {
      setError('Please enter your email/phone and password.');
      return;
    }
    setError('');
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      if (user.twoFactorEnabled) {
        navigate('/verify-identity');
      } else {
        login();
        navigate('/dashboard');
      }
    }, 700);
  }

  return (
    <AuthLayout
      heroTitle="Feed your soul, manage your surplus."
      heroSubtitle="Our digital pantry helps you track inventory, plan meals, and share abundance with those who need it most in your community."
    >
      <header className="mb-xl">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Welcome Back</h2>
        <p className="font-body-md text-on-surface-variant">Step back into your digital pantry.</p>
      </header>
      <form className="space-y-lg" onSubmit={handleSubmit}>
        <Input 
          label="Email or Phone Number"
          placeholder="Enter your email or phone number"
          value={identity}
          onChange={(e) => setIdentity(e.target.value)}
        />
        <div className="space-y-xs">
          <div className="flex justify-between items-center">
            <label className="font-label-md text-label-md text-primary block">Password</label>
            <Link to="/forgot-password" className="font-label-sm text-label-sm text-secondary hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              className="stamped-input py-sm font-body-md placeholder:opacity-30 w-full pr-xl"
              placeholder="••••••••"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-outline text-[20px] hover:text-primary transition-colors"
              onClick={() => setShowPassword((s) => !s)}
            >
              {showPassword ? 'visibility_off' : 'visibility'}
            </button>
          </div>
        </div>
        {error && <p className="text-error text-label-sm">{error}</p>}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="w-5 h-5 rounded border-outline-variant text-primary bg-surface-container-low cursor-pointer"
          />
          <label htmlFor="remember" className="ml-sm font-label-md text-label-md text-on-surface-variant cursor-pointer">
            Keep me logged in
          </label>
        </div>
        <Button type="submit" className="w-full" disabled={submitting} icon={submitting ? undefined : 'arrow_forward'}>
          {submitting ? 'Logging in...' : 'Log in'}
        </Button>
        <footer className="mt-xl text-center">
          <p className="font-body-md text-on-surface-variant">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="font-label-md text-label-md text-secondary hover:underline ml-xs">
              Register your pantry
            </Link>
          </p>
        </footer>
      </form>
    </AuthLayout>
  );
}
