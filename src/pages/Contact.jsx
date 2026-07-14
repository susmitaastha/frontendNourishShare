import { useState } from 'react';
import PublicLayout from '../components/layout/PublicLayout.jsx';
import Input from '../components/ui/Input.jsx';
import Button from '../components/ui/Button.jsx';

const CONTACT_INFO = [
  { icon: 'mail', label: 'Email', value: 'hello@saveplate.my' },
  { icon: 'location_on', label: 'Address', value: 'Kuala Lumpur, Malaysia' },
  { icon: 'schedule', label: 'Support Hours', value: 'Mon–Fri, 9am–6pm (MYT)' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <PublicLayout>
      <section className="py-xl">
        <div className="max-w-5xl mx-auto px-lg">
          <div className="text-center mb-xl">
            <h1 className="font-headline-xl text-primary mb-sm">Get in Touch</h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Questions, partnership ideas, or feedback on SavePlate? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-xl">
            <div className="md:col-span-2 space-y-lg">
              {CONTACT_INFO.map((info) => (
                <div key={info.label} className="flex items-start gap-md p-lg bg-surface-container-low rounded-xl border border-outline-variant">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">{info.icon}</span>
                  </div>
                  <div>
                    <p className="font-label-md text-on-surface-variant">{info.label}</p>
                    <p className="font-body-md text-primary font-semibold">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:col-span-3 bg-white p-lg md:p-xl rounded-xl border border-outline-variant">
              {sent ? (
                <div className="text-center py-xl">
                  <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center text-primary mx-auto mb-md">
                    <span className="material-symbols-outlined text-[32px]">check_circle</span>
                  </div>
                  <h3 className="font-headline-md text-primary mb-sm">Message sent</h3>
                  <p className="font-body-md text-on-surface-variant">
                    Thanks for reaching out — our team will get back to you soon.
                  </p>
                </div>
              ) : (
                <form className="space-y-lg" onSubmit={handleSubmit}>
                  <Input
                    label="Your Name"
                    placeholder="Ahmad Zulkifli"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="ahmad@email.com"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    required
                  />
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant">Message</label>
                    <textarea
                      className="stamped-input py-sm font-body-md w-full resize-none"
                      rows={5}
                      placeholder="How can we help?"
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" icon="send" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
