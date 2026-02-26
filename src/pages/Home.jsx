import { Link } from 'react-router-dom'
import {
    ArrowRight, ChevronRight, BarChart3, Building2, Code2,
    RefreshCw, ShieldCheck, Cloud, Star, TrendingUp, Users, Award, Cpu
} from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'
import './Home.css'

const services = [
    { icon: BarChart3, color: 'blue', title: 'Financial Consulting', desc: 'Strategic financial planning, investment advisory, and performance optimization tailored for growth.' },
    { icon: Building2, color: 'violet', title: 'Banking Technology', desc: 'Core banking modernization, digital banking platforms, and regulatory compliance solutions.' },
    { icon: Code2, color: 'green', title: 'IT Strategy', desc: 'Enterprise architecture, technology roadmaps, and digital infrastructure advisory.' },
    { icon: RefreshCw, color: 'pink', title: 'Digital Transformation', desc: 'End-to-end digital transformation journeys from assessment to implementation at scale.' },
    { icon: ShieldCheck, color: 'blue', title: 'Risk Management', desc: 'Comprehensive risk frameworks, compliance audits, and operational resilience strategies.' },
    { icon: Cloud, color: 'violet', title: 'Cloud Solutions', desc: 'Cloud migration, multi-cloud strategy, FinOps, and managed cloud services for enterprises.' },
]

const stats = [
    { end: 500, suffix: '+', label: 'Clients Worldwide', icon: Users },
    { end: 15, suffix: '+', label: 'Years of Expertise', icon: Award },
    { end: 98, suffix: '%', label: 'Client Satisfaction', icon: Star },
    { end: 50, suffix: '+', label: 'Expert Consultants', icon: Cpu },
]

const testimonials = [
    { name: 'Rajesh Sharma', role: 'CFO', company: 'FinCore Solutions', rating: 5, text: 'VJAutomateX transformed our financial reporting infrastructure. Their team delivered exceptional results — reducing our close cycle by 40% and improving data accuracy significantly.' },
    { name: 'Priya Mehta', role: 'CTO', company: 'IndiaBank Digital', rating: 5, text: 'The banking technology team at VJAutomateX helped us launch our digital banking platform 3 months ahead of schedule. Truly outstanding expertise.' },
    { name: 'Arjun Kapoor', role: 'VP Technology', company: 'TechBridge Corp', rating: 5, text: 'Their IT strategy consulting gave us a clear roadmap for the next 5 years. The cloud migration was seamless, saving us 35% in infrastructure costs.' },
]

const features = [
    { icon: TrendingUp, title: 'Results-Driven Approach', desc: 'Every engagement is anchored to measurable KPIs and business outcomes — not just deliverables.' },
    { icon: Cpu, title: 'Technology-First Mindset', desc: 'We blend deep domain expertise with cutting-edge tech to solve complex business challenges.' },
    { icon: ShieldCheck, title: 'Regulatory Excellence', desc: 'Deep knowledge of SEBI, RBI, Basel III, and international compliance frameworks.' },
    { icon: Users, title: 'Dedicated Expert Teams', desc: 'Senior consultants with 15+ years of industry experience assigned to every client.' },
]

export default function Home() {
    return (
        <div className="home">
            {/* ── Hero ── */}
            <section className="hero-section">
                <div className="hero-grid-bg" />
                <div className="hero-particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 8}s`,
                            animationDuration: `${6 + Math.random() * 8}s`,
                            width: `${2 + Math.random() * 3}px`,
                            height: `${2 + Math.random() * 3}px`,
                        }} />
                    ))}
                </div>
                <div className="hero-glow-1" />
                <div className="hero-glow-2" />

                <div className="container hero-content">
                    <div className="hero-badge badge">
                        <span>Trusted by 500+ enterprises worldwide</span>
                    </div>
                    <h1 className="hero-title">
                        Intelligent Automation<br />
                        for <span className="gradient-text">Finance</span>,{' '}
                        <span className="gradient-text-green">Banking</span> &amp; IT
                    </h1>
                    <p className="hero-subtitle">
                        VJAutomateX delivers transformative consulting solutions that harness the power of technology and strategic insight to drive exponential growth and operational excellence.
                    </p>
                    <div className="hero-cta">
                        <Link to="/contact" className="btn btn-primary">
                            <span>Start Your Journey</span>
                            <ArrowRight size={18} />
                        </Link>
                        <Link to="/services" className="btn btn-outline">
                            <span>Explore Services</span>
                            <ChevronRight size={18} />
                        </Link>
                    </div>

                    {/* Floating badges */}
                    <div className="hero-float-cards">
                        <div className="float-card float-card-1">
                            <BarChart3 size={20} className="float-card-icon" />
                            <div>
                                <div className="float-card-label">Finance</div>
                                <div className="float-card-value">₹2.5B+ managed</div>
                            </div>
                        </div>
                        <div className="float-card float-card-2">
                            <Building2 size={20} className="float-card-icon" />
                            <div>
                                <div className="float-card-label">Banking</div>
                                <div className="float-card-value">60+ bank partners</div>
                            </div>
                        </div>
                        <div className="float-card float-card-3">
                            <Code2 size={20} className="float-card-icon" />
                            <div>
                                <div className="float-card-label">IT Projects</div>
                                <div className="float-card-value">200+ delivered</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-scroll-indicator">
                    <div className="scroll-dot" />
                </div>
            </section>

            {/* ── Services ── */}
            <section className="section services-section">
                <div className="container">
                    <div className="section-header center">
                        <div className="badge">What We Do</div>
                        <h2 className="section-title">Comprehensive Consulting Services</h2>
                        <p className="section-subtitle">
                            From financial strategy to digital transformation — we cover the full spectrum of enterprise consulting needs.
                        </p>
                    </div>
                    <div className="services-grid">
                        {services.map((service, idx) => {
                            const Icon = service.icon
                            return (
                                <div key={idx} className={`service-card glass-card service-card-${service.color}`}>
                                    <div className={`icon-box icon-box-${service.color}`}>
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-desc">{service.desc}</p>
                                    <Link to="/services" className="service-link">
                                        Learn more <ChevronRight size={14} />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── Stats ── */}
            <section className="stats-section">
                <div className="stats-inner">
                    <div className="container">
                        <div className="stats-grid">
                            {stats.map((stat, idx) => {
                                const Icon = stat.icon
                                return (
                                    <div key={idx} className="stat-item">
                                        <div className="stat-icon-wrap">
                                            <Icon size={22} />
                                        </div>
                                        <div className="stat-number">
                                            <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={2200} />
                                        </div>
                                        <div className="stat-label">{stat.label}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Why Choose Us ── */}
            <section className="section why-section">
                <div className="container why-inner">
                    <div className="why-text">
                        <div className="badge">Why VJAutomateX</div>
                        <h2 className="section-title">The Strategic Advantage That Sets Us Apart</h2>
                        <p className="section-subtitle">
                            We don't just consult — we become your long-term growth partners, embedding ourselves deeply in your business to deliver lasting impact.
                        </p>
                        <Link to="/about" className="btn btn-primary why-btn">
                            <span>Discover Our Approach</span>
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div className="why-features">
                        {features.map((f, idx) => {
                            const Icon = f.icon
                            return (
                                <div key={idx} className="why-feature-card glass-card">
                                    <div className="why-feature-icon">
                                        <Icon size={22} />
                                    </div>
                                    <div>
                                        <h4 className="why-feature-title">{f.title}</h4>
                                        <p className="why-feature-desc">{f.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── Testimonials ── */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-header center">
                        <div className="badge">Client Stories</div>
                        <h2 className="section-title">Trusted by Industry Leaders</h2>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="testimonial-card glass-card">
                                <div className="testimonial-stars">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={14} fill="var(--accent-blue)" color="var(--accent-blue)" />
                                    ))}
                                </div>
                                <p className="testimonial-text">"{t.text}"</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="testimonial-name">{t.name}</div>
                                        <div className="testimonial-role">{t.role}, {t.company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section className="section-sm cta-section">
                <div className="container">
                    <div className="cta-banner glass-card">
                        <div className="cta-glow-1" />
                        <div className="cta-glow-2" />
                        <div className="cta-content">
                            <div className="badge" style={{ marginBottom: 16 }}>Ready to Transform?</div>
                            <h2 className="cta-title">Let's Build Your Future Together</h2>
                            <p className="cta-subtitle">
                                Get a free 60-minute consultation with our senior experts and discover how VJAutomateX can accelerate your business growth.
                            </p>
                            <div className="cta-actions">
                                <Link to="/contact" className="btn btn-primary">
                                    <span>Book Free Consultation</span>
                                    <ArrowRight size={18} />
                                </Link>
                                <Link to="/services" className="btn btn-outline">
                                    <span>View All Services</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
