import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BrainIcon, 
  ChildIcon, 
  BriefcaseIcon, 
  UsersIcon, 
  BarChartIcon, 
  ChevronRightIcon, 
  ArrowRightIcon 
} from '../Icons';
import './About.css';

const aboutTabs = [
  {
    id: 'dmit',
    title: 'Dermatoglyphics Brain Mapping',
    tagline: 'FROM BIOMETRIC FINGERPRINTS TO 10 LOBE MAPS',
    desc: 'Scientific fingerprint analysis to decode 10 brain lobes, left vs. right hemisphere dominance, 8 multiple intelligences, and innate learning sensitivities—replacing trial and error with biological clarity.',
    image: '/sandip_pala_dmi.jpg',
    icon: <BrainIcon size={24} color="#F59E0B" />,
    link: '/programs/brain-mapping'
  },
  {
    id: 'child',
    title: 'Child Development & DISC Profile',
    tagline: 'FROM EARLY TALENT DISCOVERY TO ZERO HOMEWORK STRESS',
    desc: 'Identify your child\'s innate cognitive channels (Visual, Auditory, Kinesthetic) and DISC personality type (Dominant Eagle, Influential Peacock, Steady Dove, Conscientious Owl) to foster academic confidence and eliminate study friction.',
    image: '/card_child_dev.jpg',
    icon: <ChildIcon size={24} color="#EC4899" />,
    link: '/programs/child-development'
  },
  {
    id: 'business',
    title: 'Personalized Business Development',
    tagline: 'FROM TRIAL-AND-ERROR TO SCIENTIFIC SCALING',
    desc: 'Spearheaded by Sandip Pala with frameworks refined alongside top business coaches Dr. Vivek Bindra and Harshvardhan Jain. Aligns executive decision-making and leadership roles with your biological "Zone of Genius" for sustainable business scaling.',
    image: '/sandip_pala_harshvardhan.jpg',
    icon: <BriefcaseIcon size={24} color="#60A5FA" />,
    link: '/programs/business-development'
  },
  {
    id: 'team',
    title: 'Team Building & Corporate Growth',
    tagline: 'FROM CONFLICT TO HIGH-PERFORMANCE TEAM SYNERGY',
    desc: 'Build resilient, high-output corporate teams by evaluating individual brain lobe distributions, communication styles, and leadership traits—optimizing delegation and preventing workplace burnout.',
    image: '/card_team_build.jpg',
    icon: <UsersIcon size={24} color="#10B981" />,
    link: '/programs/team-building'
  },
  {
    id: 'report',
    title: 'Comprehensive Diagnostic Report',
    tagline: 'FROM 68+ PAGE PRINTED REPORT TO LIFETIME ROADMAP',
    desc: 'In-depth printed diagnostic report covering 10 brain lobes, 8 multiple intelligences, quotient assessment (IQ, EQ, CQ, AQ), and lifetime actionable remediation plans verified across neuroscience and genetics.',
    image: '/brain_report.jpg',
    icon: <BarChartIcon size={24} color="#C084FC" />,
    link: '/about'
  }
];

const About = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const currentTab = aboutTabs[activeTabIndex];

  return (
    <section className="section about" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header animate-reveal fade-up">
          <div className="section-badge">
            <BrainIcon size={14} color="#F59E0B" />
            <span>Strategic Brain Leadership</span>
          </div>
          <h2 className="section-title">
            Unlocking Human Potential with <span className="gradient-text-gold">Sandip Pala</span>
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Discover our scientific brain-based cognitive analysis solutions designed for children, parents, leaders, and enterprise teams in Rajkot.
          </p>
        </div>

        {/* Tabbed Showcase Grid */}
        <div className="about-tabbed__grid">
          {/* Left Column: Vertical List of Tab Buttons */}
          <div className="about-tabbed__list animate-reveal fade-right">
            {aboutTabs.map((tab, index) => {
              const isActive = activeTabIndex === index;
              return (
                <button
                  key={tab.id}
                  className={`about-tabbed__item ${isActive ? 'about-tabbed__item--active' : ''}`}
                  onClick={() => setActiveTabIndex(index)}
                  type="button"
                >
                  <span className="about-tabbed__item-title">{tab.title}</span>
                  {isActive && (
                    <span className="about-tabbed__item-arrow">
                      <ChevronRightIcon size={18} color="#F59E0B" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Tab Card Display */}
          <div className="about-tabbed__card glass-card animate-reveal fade-left">
            {/* Image Header with Badge */}
            <div className="about-tabbed__img-wrapper">
              <img src={currentTab.image} alt={currentTab.title} className="about-tabbed__img" />
              <div className="about-tabbed__img-overlay"></div>
              <div className="about-tabbed__icon-badge">
                {currentTab.icon}
              </div>
            </div>

            {/* Content Details */}
            <div className="about-tabbed__content">
              <h3 className="about-tabbed__card-title">{currentTab.title}</h3>
              <div className="about-tabbed__card-tagline">{currentTab.tagline}</div>
              <p className="about-tabbed__card-desc">{currentTab.desc}</p>

              <Link to={currentTab.link} className="about-tabbed__cta-btn">
                <span>READ MORE</span>
                <ArrowRightIcon size={16} color="#FFFFFF" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
