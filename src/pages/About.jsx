import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Lightbulb, Globe, Award } from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'
import './About.css'

const values = [
    { icon: Target, title: 'Precision', desc: 'Every recommendation is backed by rigorous analysis and data-driven insights.' },
    { icon: Heart, title: 'Integrity', desc: 'Transparent, ethical consulting with your best interests always at the forefront.' },
    { icon: Lightbulb, title: 'Innovation', desc: 'Continuously exploring cutting-edge technologies to deliver forward-looking solutions.' },
    { icon: Globe, title: 'Global Perspective', desc: 'International expertise combined with deep local market knowledge.' },
]

const team = [
    { name: 'Vikram Jain', role: 'Founder & CEO', expertise: 'Financial Strategy, FinTech', initials: 'VJ', color: '#00D4FF' },
    { name: 'Ananya Singh', role: 'Head of Banking', expertise: 'Core Banking, Digital Payments', initials: 'AS', color: '#7B2FBE' },
    { name: 'Rohan Mehta', role: 'Chief Technology Officer', expertise: 'Enterprise IT, Cloud Architecture', initials: 'RM', color: '#00FF88' },
    { name: 'Neha Kapoor', role: 'Head of Risk & Compliance', expertise: 'Regulatory Compliance, Risk Frameworks', initials: 'NK', color: '#FF2D78' },
]

const milestones = [
    { year: '2009', event: 'Founded in Mumbai with a team of 3 consultants' },
    { year: '2012', event: 'Expanded into banking technology consulting' },
    { year: '2015', event: 'Launched IT strategy division; crossed 100 clients' },
    { year: '2018', event: 'Opened offices in Bangalore and Delhi' },
    { year: '2021', event: 'Digital Transformation practice established' },
    { year: '2024', event: 'XAutomateX rebranded; 500+ clients milestone achieved' },
]

export default function About() {
    return (
        <div className="about-page">
            {/* Page Header */}
            <section className="page-hero">
                <div className="page-hero-glow" />
                <div className="page-hero-grid" />
                <div className="container">
                    <div className="badge">Our Story</div>
                    <h1 className="page-hero-title">About VJAutomateX</h1>
                    <p className="page-hero-subtitle">
                        Born out of a vision to bridge the gap between business strategy and technology execution — we've spent 15+ years helping enterprises across Finance, Banking, and IT thrive in an ever-evolving world.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section">
                <div className="container">
                    <div className="mv-grid">
                        <div className="mv-card glass-card">
                            <div className="mv-icon">
                                <Target size={28} />
                            </div>
                            <h3 className="mv-title">Our Mission</h3>
                            <p className="mv-text">
                                To empower organizations with transformative consulting and technology solutions that create lasting competitive advantage, operational excellence, and sustainable growth across the financial and technology sectors.
                            </p>
                        </div>
                        <div className="mv-card glass-card">
                            <div className="mv-icon mv-icon-violet">
                                <Eye size={28} />
                            </div>
                            <h3 className="mv-title">Our Vision</h3>
                            <p className="mv-text">
                                To be the most trusted consulting partner for technology-driven transformation in Asia's financial markets — recognized for our deep expertise, integrity, and unwavering commitment to client success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <div className="about-stats-bar">
                <div className="container">
                    <div className="about-stats-row">
                        {[
                            { label: 'Years of Experience', end: 15, suffix: '+' },
                            { label: 'Clients Served', end: 500, suffix: '+' },
                            { label: 'Projects Completed', end: 1200, suffix: '+' },
                            { label: 'Industry Awards', end: 28, suffix: '' },
                        ].map((s, i) => (
                            <div key={i} className="about-stat">
                                <div className="about-stat-num">
                                    <AnimatedCounter end={s.end} suffix={s.suffix} duration={2000} />
                                </div>
                                <div className="about-stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Values */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header center">
                        <div className="badge">Our DNA</div>
                        <h2 className="section-title">The Values We Live By</h2>
                        <p className="section-subtitle">Four core principles that guide every engagement, every recommendation, and every relationship we build.</p>
                    </div>
                    <div className="values-grid">
                        {values.map((v, i) => {
                            const Icon = v.icon
                            return (
                                <div key={i} className="value-card glass-card">
                                    <div className="value-icon"><Icon size={26} /></div>
                                    <h3 className="value-title">{v.title}</h3>
                                    <p className="value-desc">{v.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section">
                <div className="container">
                    <div className="section-header center">
                        <div className="badge">The Experts</div>
                        <h2 className="section-title">Leadership Team</h2>
                        <p className="section-subtitle">Senior practitioners who've spent careers at the intersection of finance, banking, and technology.</p>
                    </div>
                    <div className="team-grid">
                        {team.map((member, i) => (
                            <div key={i} className="team-card glass-card">
                                <div className="team-avatar" style={{ background: `linear-gradient(135deg, ${member.color}40, ${member.color}20)`, borderColor: `${member.color}40` }}>
                                    <span style={{ color: member.color }}>{member.initials}</span>
                                </div>
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                                <p className="team-expertise">{member.expertise}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section timeline-section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header center">
                        <div className="badge">Our Journey</div>
                        <h2 className="section-title">15 Years of Growth</h2>
                    </div>
                    <div className="timeline">
                        {milestones.map((m, i) => (
                            <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="timeline-content glass-card">
                                    <span className="timeline-year">{m.year}</span>
                                    <p className="timeline-event">{m.event}</p>
                                </div>
                                <div className="timeline-dot" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-sm">
                <div className="container about-cta-wrap">
                    <div className="about-cta glass-card">
                        <Award size={40} className="about-cta-icon" />
                        <h3 className="about-cta-title">Ready to work with the best?</h3>
                        <p className="about-cta-text">Let's talk about how we can accelerate your business transformation.</p>
                        <Link to="/contact" className="btn btn-primary">
                            <span>Get In Touch</span>
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
