import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleSocialClick = (e) => {
    // We only show toast if there is no href (placeholder)
    if (!e.currentTarget.getAttribute('href') || e.currentTarget.getAttribute('href') === '#') {
      e.preventDefault();
      toast({
        title: "Feature Not Implemented 🚧",
        description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
      });
    }
  };

  const handleNavClick = e => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const [path, id] = href.split('#');
    if (path === '/' || path === '') {
      navigate('/');
      setTimeout(() => {
        if (id) {
          const targetElement = document.getElementById(id);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      handleSocialClick(e);
    }
  };

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/#' },
        { name: 'Services', href: '/#services' },
        { name: 'Portfolio', href: '/#portfolio' },
        { name: 'About', href: '/#about' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Careers', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: 'Github',
      url: '#' // Add Github link here
    },
    {
      icon: <Twitter size={20} />,
      name: 'Twitter',
      url: '#' // Add Twitter link here
    },
    {
      icon: <Linkedin size={20} />,
      name: 'Linkedin',
      url: '#' // Add Linkedin link here
    },
    {
      icon: <Instagram size={20} />,
      name: 'Instagram',
      url: 'https://www.instagram.com/influencify.store?utm_source=qr&igsh=M3ZqeTJoNzN1azVs' 
    }
  ];

  return (
    <footer className="bg-[#0C0D0D] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <p className="text-2xl font-bold text-white tracking-wider glow-effect">BrandSetu</p>
            <p className="text-gray-400">One Ecosystem. One Roadmap.</p>
          </div>

          {footerSections.map(section => (
            <div key={section.title}>
              <p className="font-semibold text-white mb-6">{section.title}</p>
              <ul className="space-y-4">
                {section.links.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={e => {
                        if (link.href === '/contact') {
                          e.preventDefault();
                          navigate('/contact');
                        } else if (link.href.includes('#')) {
                          handleNavClick(e);
                        } else {
                          handleSocialClick(e);
                        }
                      }}
                      className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-semibold text-white mb-6">Connect With Us</p>
            <div className="flex space-x-4">
              {/* UPDATE: Changed button to <a> tag for external links */}
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url !== '#' ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  onClick={handleSocialClick}
                  className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} INFLUENCIFY. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;