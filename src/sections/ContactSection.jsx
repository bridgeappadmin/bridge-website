import React, { useState } from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { BlurText, Pop, Reveal } from '../motion.jsx';

const INFO = [
  {
    Icon: MapPin,
    title: 'Head office',
    lines: [
      'Tazmify HQ',
      'Koramangala, 4th Block',
      'Bengaluru, Karnataka 560034',
    ],
  },
  {
    Icon: Mail,
    title: 'Email',
    lines: ['contact@tazmify.com'],
    href: 'mailto:contact@tazmify.com',
  },
  {
    Icon: Phone,
    title: 'Phone',
    lines: ['+91 97338 77693'],
    href: 'tel:+919733877693',
  },
  {
    Icon: Clock,
    title: 'Availability',
    lines: ['Monday–Friday, 9:00 AM – 6:00 PM (IST)'],
  },
];

function Field({ id, label, required, type = 'text', placeholder, textarea }) {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div className={`field ${textarea ? 'field-full' : ''}`}>
      <label htmlFor={id}>
        {label}
        {required && <i aria-hidden="true">*</i>}
      </label>
      <Tag
        id={id}
        name={id}
        type={textarea ? undefined : type}
        required={required}
        placeholder={placeholder}
        rows={textarea ? 5 : undefined}
      />
    </div>
  );
}

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  return (
    <section className="section contact" id="contact">
      <div className="contact-grid">
        <div className="contact-copy">
          <BlurText
            as="h2"
            className="h2 contact-title"
            lines={[
              'Whether you’re a creator,',
              'brand or partner,',
              'we’d love to hear from you.',
            ]}
          />
          <Reveal className="contact-info" delay={0.3}>
            {INFO.map(({ Icon, title, lines, href }) => (
              <div className="info" key={title}>
                <h3>
                  <Icon size={18} /> {title}
                </h3>
                {lines.map((line) => (
                  <p key={line}>{href ? <a href={href}>{line}</a> : line}</p>
                ))}
              </div>
            ))}
          </Reveal>
        </div>
        <Pop
          as="form"
          className="contact-form"
          delay={0.1}
          amount="some"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <Field
            id="first-name"
            label="First name"
            required
            placeholder="Alex"
          />
          <Field
            id="last-name"
            label="Last name"
            required
            placeholder="Rivera"
          />
          <div className="field field-full">
            <label htmlFor="email">
              Email<i aria-hidden="true">*</i>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="alex@studio.com"
            />
          </div>
          <div className="field field-full">
            <label htmlFor="company">Company / Organization</label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Brightside Co."
            />
          </div>
          <Field
            id="message"
            label="Message"
            required
            placeholder="Write your message here..."
            textarea
          />
          <button className="contact-submit" type="submit">
            {sent ? 'Thanks — we’ll be in touch' : 'Submit'}
          </button>
        </Pop>
      </div>
    </section>
  );
}
