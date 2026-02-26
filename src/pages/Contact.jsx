import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Linkedin, Twitter } from 'lucide-react'
import './Contact.css'
import './About.css'

const serviceOptions = [
    'Financial Consulting',
    'Banking Technology',
    'IT Strategy',
    'Digital Transformation',
    'Risk & Compliance',
    'Cloud Solutions',
    'Other / Not Sure',
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = 'Name is required'
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required'
        if (!form.message.trim()) e.message = 'Message is required'
        return e
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length) { setErrors(errs); return }
        setLoading(true)
        // Simulate form submission
        await new Promise(r => setTimeout(r, 1500))
        setLoading(false)
        setSubmitted(true)
    }

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="page-hero-glow" />
                <div className="page-hero-grid" />
                <div className="container">
                    <div className="badge">Contact Us</div>
                    <h1 className="page-hero-title">Let's Start a Conversation</h1>
                    <p className="page-hero-subtitle">
                        Whether you have a specific challenge in mind or simply want to explore how we can help — our team is ready to listen.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Form */}
                        <div className="contact-form-wrap glass-card">
                            {submitted ? (
                                <div className="contact-success">
                                    <CheckCircle size={56} className="success-icon" />
                                    <h3 className="success-title">Message Received!</h3>
                                    <p className="success-text">
                                        Thank you for reaching out. A VJAutomateX consultant will get back to you within 1 business day.
                                    </p>
                                    <button className="btn btn-outline" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', message: '' }) }}>
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="form-title">Send us a message</h2>
                                    <p className="form-subtitle">Fill in the form below and we'll respond within 24 hours.</p>
                                    <form onSubmit={handleSubmit} className="contact-form" noValidate>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="name">Full Name *</label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    placeholder="John Doe"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    className={errors.name ? 'error' : ''}
                                                />
                                                {errors.name && <span className="field-error">{errors.name}</span>}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email Address *</label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="john@company.com"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    className={errors.email ? 'error' : ''}
                                                />
                                                {errors.email && <span className="field-error">{errors.email}</span>}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="company">Company / Organization</label>
                                                <input
                                                    id="company"
                                                    name="company"
                                                    type="text"
                                                    placeholder="VJAutomateX Inc."
                                                    value={form.company}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="service">Service of Interest</label>
                                                <select id="service" name="service" value={form.service} onChange={handleChange}>
                                                    <option value="">Select a service...</option>
                                                    {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message">Your Message *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                placeholder="Tell us about your challenge, project, or what you'd like to discuss..."
                                                value={form.message}
                                                onChange={handleChange}
                                                className={errors.message ? 'error' : ''}
                                            />
                                            {errors.message && <span className="field-error">{errors.message}</span>}
                                        </div>
                                        <button type="submit" className="btn btn-primary contact-submit" disabled={loading}>
                                            {loading ? (
                                                <span className="loading-dots">Sending<span>.</span><span>.</span><span>.</span></span>
                                            ) : (
                                                <><span>Send Message</span><Send size={16} /></>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>

                        {/* Info Panel */}
                        <div className="contact-info-col">
                            <div className="contact-info-cards">
                                {[
                                    { icon: Mail, title: 'Email Us', lines: ['info@vjautomatex.com', 'support@vjautomatex.com'], href: 'mailto:info@vjautomatex.com' },
                                    { icon: Phone, title: 'Call Us', lines: ['+91 12345 67890', '+91 98765 43210'], href: 'tel:+911234567890' },
                                    { icon: MapPin, title: 'Visit Us', lines: ['Level 12, Nariman Point', 'Mumbai, Maharashtra 400021'], href: '#' },
                                    { icon: Clock, title: 'Business Hours', lines: ['Mon – Fri: 9:00 AM – 7:00 PM IST', 'Sat: 10:00 AM – 3:00 PM IST'], href: null },
                                ].map((card, i) => {
                                    const Icon = card.icon
                                    return (
                                        <div key={i} className="info-card glass-card">
                                            <div className="info-card-icon"><Icon size={20} /></div>
                                            <div>
                                                <h4 className="info-card-title">{card.title}</h4>
                                                {card.lines.map((line, j) => (
                                                    card.href ? (
                                                        <a key={j} href={card.href} className="info-card-line link">{line}</a>
                                                    ) : (
                                                        <p key={j} className="info-card-line">{line}</p>
                                                    )
                                                ))}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Social */}
                            <div className="contact-social glass-card">
                                <p className="contact-social-title">Connect with us</p>
                                <div className="contact-social-links">
                                    <a href="#" className="contact-social-btn"><Linkedin size={18} /> LinkedIn</a>
                                    <a href="#" className="contact-social-btn"><Twitter size={18} /> Twitter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
