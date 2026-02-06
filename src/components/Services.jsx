import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react'; // Changed import from ArrowRight, ArrowDownRight to Plus

const services = [
  {
    title: 'Digital Marketing',
    description: `At INFLUENCIFY®, our digital marketing approach is driven by real influence, real reach, and real results.

We help brands grow through:

• Influencer-led digital campaigns
• Paid promotions with trusted creators
• Product launches & awareness campaigns
• Audience-focused marketing strategies
• Data-backed performance tracking

Our ecosystem ensures brands don’t just get visibility — they get engagement, trust, and conversions across platforms like Instagram, YouTube, and emerging social channels.`
  },
  {
    title: 'Brand Strategy',
    description: `Through BrandSetu, we design brand strategies that work for local stores, startups, and national brands alike.

Our brand strategy includes:

• Positioning brands across the right niche & audience
• Matching brands with verified & relevant creators
• Market-specific campaign planning (local to pan-India)
• Building long-term brand credibility, not short hype

From fashion, beauty, food, tech, electronics, FMCG, healthcare, to digital products — we help brands stand out in every category, every sector, every market.`
  },
  {
    title: 'Social Media Management',
    description: `We manage social presence with a creator-first, audience-centric approach.

Our social media services cover:

• Instagram profile growth & optimization
• Creator-brand collaboration planning
• Consistent content scheduling & posting
• Engagement growth (likes, comments, shares, saves)
• Campaign execution & performance monitoring

Whether it’s a brand page or a creator profile, we ensure professional growth, authentic engagement, and platform-friendly visibility.`
  },
  {
    title: 'SEO / SEM',
    description: `INFLUENCIFY® supports brands and creators with search-driven growth strategies.

Our SEO/SEM support includes:

• Website & landing page SEO optimization
• Keyword-focused content planning
• Google visibility for brands & services
• Paid ad strategy alignment with influencer campaigns
• Organic + paid growth synchronization

This ensures your brand or platform is discoverable, searchable, and scalable in the digital ecosystem.`
  },
  {
    title: 'Content Creation',
    description: `Content is the backbone of influence — and we build it professionally and authentically.

We offer:

• Influencer review videos & reels
• Product demos & storytelling content
• Customer-friendly & honest reviews
• Campaign-based content creation
• Multi-format content (Reels, Shorts, Posts, Stories)

Every piece of content is designed to look organic, relatable, and trustworthy — not forced or scripted.`
  },
  {
    title: 'Web Design',
    description: `We design modern, influencer-friendly, conversion-focused websites.

Our web design solutions include:

• Creator & brand-centric UI/UX
• Instagram-friendly layouts
• Profile dashboards for creators & brands
• Listing systems for campaigns & collaborations
• Login, onboarding & data-driven features

From INFLUENCIFY® creator dashboards to BrandSetu brand listings — our web designs support growth, trust, and scalability.`
  }
];
const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleServiceClick = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const filterTags = ['Design', 'Development', 'Digital Marketing', 'SEO'];
  return <section id="services" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white uppercase">
            Brand <span className="text-accent-purple">Setu</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mt-4">BrandSetu, powered by INFLUENCIFY®, BrandSetu is a professional Creator × Brand collaboration platform connecting trusted brands with verified creators for paid, long-term, and growth-focused deals. From local brands to national campaigns — all in one place</p>
          <div className="flex flex-wrap gap-3 mt-8">
            {filterTags.map(tag => <button key={tag} className="px-5 py-2 border border-gray-600 rounded-full text-gray-400 cursor-default uppercase">
                {tag}
              </button>)}
          </div>
        </div>

        <div className="border-t border-gray-800">
          {services.map((service, index) => <div key={service.title} className="border-b border-gray-800">
              <div className="flex justify-between items-center cursor-pointer py-8 group" onClick={() => handleServiceClick(index)}>
                <div className="flex items-center gap-4">
                  <h3 className={`text-3xl md:text-5xl font-bold transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'}`}>
                    {service.title}
                  </h3>
                  {activeIndex === index && <motion.div className="w-4 h-4 bg-accent-purple rounded-full" initial={{
                scale: 0
              }} animate={{
                scale: 1
              }} />}
                </div>
                
                <motion.div className="text-accent-purple" animate={{
              rotate: activeIndex === index ? 45 : 0
            }} // Rotate Plus for open state
            transition={{
              duration: 0.3
            }}>
                  <Plus size={40} className={`${activeIndex === index ? 'text-accent-purple' : 'text-gray-600 group-hover:text-gray-400'} transition-colors`} />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {activeIndex === index && <motion.div initial={{
              opacity: 0,
              height: 0,
              y: -20
            }} animate={{
              opacity: 1,
              height: 'auto',
              y: 0
            }} exit={{
              opacity: 0,
              height: 0,
              y: -20
            }} transition={{
              duration: 0.4,
              ease: "easeInOut"
            }} className="overflow-hidden">
                    <div className="pb-8 pr-16">
                      <p className="text-lg text-gray-400 max-w-2xl">{service.description}</p>
                    </div>
                  </motion.div>}
              </AnimatePresence>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Services;