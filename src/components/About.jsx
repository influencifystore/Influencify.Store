import React from 'react';
import { motion } from 'framer-motion';
const About = () => {
  return <section id="about" className="py-24 bg-[#0C0D0D] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img className="w-full h-full object-cover" alt="Modern office with creative team working on computers" src="/application.png" />
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white uppercase">
              We're passionate about digital <span className="text-accent-purple">excellence</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">BrandSetu - powered by INFLUENCIFY®
              </h3>
                <p className="text-lg text-gray-400">BrandSetu is built for brands that want clarity, control, and results from influencer marketing.
We connect you with creators who align with "your brand values, audience, and growth goals. We help brands run targeted, performance-driven campaigns with creators who genuinely influence their audience.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">CollabSetu &gt;&gt;LAUNCHING SOON&lt;&lt;</h3>
                <p className="text-lg text-gray-400">"We're building a structured creator-to-creator collaboration system to ensure fair growth, real reach, and long-term opportunities. Early members get lifetime benefits.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }} className="lg:order-last">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img className="w-full h-full object-cover" alt="Diverse team collaborating around a table with laptops and notes" src="/brand-image.png" />
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white uppercase">
              Your vision, our <span className="text-accent-purple">expertise</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">For Brands (Across All India & All Categories).</h3>
                <p className="text-lg text-gray-400">Through BrandSetu, we work with all types of brands, from local stores to national companies, across every state, every sector, and every product category.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">For Creators (Influencers).</h3>
                <p className="text-lg text-gray-400">INFLUENCIFY® is not just a collaboration platform — it's a complete creator growth roadmap.

We guide creators:

From starter to professional

From confused to clear

From unknown to verified

We Help Creators With:

Clear creator roadmap & niche direction

Profile optimization & brand-ready positioning

Growth tools for reach, visibility & engagement

Access to verified brand collaborations

Skill-building for content, consistency & quality

Long-term creator credibility, not short-term fame

Whether you're:

A small creator,

A growing influencer, or

An established content creator

INFLUENCIFY® supports your journey at every stage.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;