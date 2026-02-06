import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const billingOptions = [
  { key: 'monthly', label: 'Monthly' },
  { key: 'quarterly', label: 'Quarterly' },
  { key: 'yearly', label: 'Yearly' }
];

const plans = [
  {
    id: 'basic',
    name: 'Trial Basic',
    badge: 'Silver Verified',
    accent: 'from-slate-800 to-slate-900',
    price: {
      monthly: '₹799',
      quarterly: '₹2,199',
      yearly: '₹7,999'
    },
    originalPrice: {
      monthly: '₹999',
      quarterly: '₹2,799',
      yearly: '₹9,999'
    },
    savings: 'Save 20%',
    features: [
      'Silver verified badge',
      'Enhanced profile visibility',
      'Priority in search results',
      'Only 2 brand access (Trial)',
      'Up to 5 portfolio items',
      'BrandSetu commission: 15%'
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    badge: 'Gold Verified',
    accent: 'from-amber-700 to-orange-900',
    highlighted: true,
    price: {
      monthly: '₹3,999',
      quarterly: '₹10,999',
      yearly: '₹34,999'
    },
    originalPrice: {
      monthly: '₹4,999',
      quarterly: '₹13,999',
      yearly: '₹42,999'
    },
    savings: 'Save 20%',
    features: [
      'Gold verified badge',
      'Premium profile visibility',
      'Top in search results',
      '5 + 2 brand deal unlock',
      'Up to 15 portfolio items',
      'BrandSetu commission: 7–8%',
      'Advanced ranking and analytics tools',
      '24×7 priority support'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    badge: 'Influencer Blue Verified',
    accent: 'from-blue-800 to-indigo-900',
    price: {
      monthly: '₹20,999',
      quarterly: '₹59,999',
      yearly: '₹1,99,999'
    },
    originalPrice: {
      monthly: '₹24,999',
      quarterly: '₹72,999',
      yearly: '₹2,49,999'
    },
    savings: 'Save 16%',
    features: [
      'Influencer blue Verified badge',
      'Maximum visibility to premium brands',
      '28+ exclusive partnerships',
      'Unlimited portfolio items',
      'Dedicated account manager',
      'Signature analytics dashboard',
      'Influencer commission only 4.7%',
      '24×7 priority support'
    ]
  }
];

const Subscription = () => {
  const [billing, setBilling] = useState('monthly');

  return (
    <section id="subscription" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 uppercase"
          >
            High-Trust, Creator Focused Membership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-lg md:text-xl text-gray-300"
          >
            designed to boost Visiblity, Credibility and access to "High-Value" Premium Brand Collaboration. / "Deals".
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="flex flex-col items-center gap-4 mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 p-2">
            {billingOptions.map(option => (
              <button
                key={option.key}
                type="button"
                onClick={() => setBilling(option.key)}
                className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                  billing === option.key
                    ? 'bg-white text-black shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <span className="px-4 py-1 text-xs md:text-sm rounded-full bg-accent-purple/10 text-accent-purple uppercase tracking-wide">
            Brirdging an Ecosystem with 2700+ INFLUENCIFY BRANDS
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {plans.map(plan => {
            const isHighlighted = plan.highlighted;
            const price = plan.price[billing];
            const original = plan.originalPrice[billing];

            return (
              <div
                key={plan.id}
                className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b ${plan.accent} p-6 md:p-8 flex flex-col h-full ${
                  isHighlighted ? 'ring-2 ring-accent-purple shadow-2xl scale-[1.02]' : ''
                }`}
              >
                {isHighlighted && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-semibold bg-accent-purple text-white uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6 mt-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm uppercase tracking-wide text-gray-300">{plan.badge}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl md:text-4xl font-bold text-white">{price}</span>
                    <span className="text-sm text-gray-400 line-through">{original}</span>
                  </div>
                  <p className="text-sm text-emerald-400 mt-1">{plan.savings}</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-100 flex-1">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-purple" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    size="lg"
                    className={`w-full rounded-full font-semibold ${
                      isHighlighted
                        ? 'bg-accent-purple hover:bg-accent-purple/90 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Subscription;

