import { Link } from 'react-router-dom'
import { Zap, Linkedin, Twitter, Github, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import './Footer.css'

export default function Footer() {
    const year = new Date().getFullYear()

    const services = [
        'Financial Consulting',
        'Banking Technology',
        'IT Strategy',
        'Digital Transformation',
        'Risk Management',
        'Cloud Solutions',
    ]

    const quickLinks = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Contact', path: '/contact' },
    ]

    return (
        <footer className="footer">
            <div className="footer-glow-line" />
            <div className="footer-body">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand */}
                        <div className="footer-brand">
                            <Link to="/" className="footer-logo">
                                <div className="footer-logo-icon"><Zap size={18} /></div>
                                <span className="footer-logo-text">
                                    <span className="logo-vj">VJ</span>AutomateX
                                </span>
                            </Link>
                            <p className="footer-tagline">
                                Transforming businesses through intelligent automation, strategic consulting, and technology-first solutions across Finance, Banking, and IT.
                            </p>
                            <div className="footer-socials">
                                <a href="#" aria-label="LinkedIn" className="social-btn"><Linkedin size={18} /></a>
                                <a href="#" aria-label="Twitter" className="social-btn"><Twitter size={18} /></a>
                                <a href="#" aria-label="GitHub" className="social-btn"><Github size={18} /></a>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="footer-col">
                            <h4 className="footer-col-title">Services</h4>
                            <ul className="footer-links">
                                {services.map(s => (
                                    <li key={s}>
                                        <Link to="/services" className="footer-link">
                                            <ArrowRight size={12} />
                                            {s}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-col">
                            <h4 className="footer-col-title">Company</h4>
                            <ul className="footer-links">
                                {quickLinks.map(l => (
                                    <li key={l.path}>
                                        <Link to={l.path} className="footer-link">
                                            <ArrowRight size={12} />
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer-col">
                            <h4 className="footer-col-title">Contact</h4>
                            <ul className="footer-contact-list">
                                <li>
                                    <Mail size={15} className="contact-icon" />
                                    <a href="mailto:info@vjautomatex.com" className="footer-link-plain">info@vjautomatex.com</a>
                                </li>
                                <li>
                                    <Phone size={15} className="contact-icon" />
                                    <a href="tel:+911234567890" className="footer-link-plain">+91 12345 67890</a>
                                </li>
                                <li>
                                    <MapPin size={15} className="contact-icon" style={{ flexShrink: 0, marginTop: 2 }} />
                                    <span className="footer-link-plain">Mumbai, Maharashtra<br />India — 400001</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p className="footer-copyright">
                        © {year} VJAutomateX. All rights reserved.
                    </p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <span>·</span>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
