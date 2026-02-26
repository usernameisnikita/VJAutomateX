import { Link } from 'react-router-dom'
import {
    BarChart3, Building2, Code2, RefreshCw, ShieldCheck, Cloud,
    CheckCircle2, ArrowRight, TrendingUp, Lock, Settings, Database
} from 'lucide-react'
import './Services.css'
import './About.css'

const domains = [
    {
        id: 'finance',
        icon: BarChart3,
        color: 'blue',
        label: 'Finance',
        title: 'Financial Consulting',
        desc: 'We deliver comprehensive financial advisory services that help organizations optimize their financial performance, manage capital efficiently, and navigate complex regulatory landscapes.',
        services: [
            'Financial Modeling & Forecasting',
            'Investment Portfolio Advisory',
            'Treasury & Cash Management',
            'M&A Due Diligence',
            'Financial Performance Optimization',
            'Capital Markets Strategy',
        ],
    },
    {
        id: 'banking',
        icon: Building2,
        color: 'violet',
        label: 'Banking',
        title: 'Banking Technology',
        desc: 'We help banks and financial institutions modernize their core systems, launch digital products, and achieve seamless regulatory compliance — from strategy through to full implementation.',
        services: [
            'Core Banking Modernization',
            'Digital Banking Platform Launch',
            'Payment Systems Integration',
            'Regulatory Compliance (RBI / Basel III)',
            'Lending Automation',
            'Customer Experience Transformation',
        ],
    },
    {
        id: 'it',
        icon: Code2,
        color: 'green',
        label: 'IT Strategy',
        title: 'IT Strategy & Architecture',
        desc: 'From enterprise architecture blueprints to technology vendor selection, our IT consultants provide the strategic clarity and execution roadmap to align your technology investments with business goals.',
        services: [
            'Enterprise Architecture Design',
            'Technology Roadmap Development',
            'ERP Implementation (SAP / Oracle)',
            'DevOps & Agile Transformation',
            'IT Vendor Selection & Governance',
            'Legacy System Modernization',
        ],
    },
    {
        id: 'digital',
        icon: RefreshCw,
        color: 'blue',
        label: 'Digital',
        title: 'Digital Transformation',
        desc: 'We guide organizations through holistic digital transformation — rethinking processes, culture, and technology to create a future-fit, agile enterprise.',
        services: [
            'Digital Strategy & Roadmap',
            'Process Automation (RPA / AI)',
            'Data & Analytics Platforms',
            'Customer Journey Digitization',
            'Change Management',
            'Digital KPI Frameworks',
        ],
    },
    {
        id: 'risk',
        icon: ShieldCheck,
        color: 'pink',
        label: 'Risk',
        title: 'Risk & Compliance',
        desc: 'In an increasingly regulated environment, our risk specialists help you build robust frameworks that protect your business while enabling confident growth.',
        services: [
            'Enterprise Risk Management',
            'Regulatory Compliance Audits',
            'Operational Risk Frameworks',
            'Cybersecurity Risk Assessment',
            'AML / KYC Program Design',
            'Business Continuity Planning',
        ],
    },
    {
        id: 'cloud',
        icon: Cloud,
        color: 'violet',
        label: 'Cloud',
        title: 'Cloud & Infrastructure',
        desc: 'Accelerate innovation and reduce costs with our cloud-first consulting — from readiness assessment through migration and ongoing FinOps optimization.',
        services: [
            'Cloud Readiness Assessments',
            'AWS / Azure / GCP Migration',
            'Multi-Cloud & Hybrid Strategy',
            'FinOps & Cost Optimization',
            'Kubernetes & Container Strategy',
            'Managed Cloud Services',
        ],
    },
]

const colorMap = {
    blue: 'var(--accent-blue)',
    violet: 'var(--accent-violet)',
    green: 'var(--accent-green)',
    pink: 'var(--accent-pink)',
}

const process = [
    { step: '01', title: 'Discovery', desc: 'Deep-dive workshops to understand your challenges, goals, and existing landscape.' },
    { step: '02', title: 'Assessment', desc: 'Gap analysis, benchmarking, and opportunity identification backed by data.' },
    { step: '03', title: 'Strategy', desc: 'Custom roadmap design with clear milestones, ownership, and success metrics.' },
    { step: '04', title: 'Execution', desc: 'Hands-on implementation support with embedded consultant teams.' },
    { step: '05', title: 'Measure', desc: 'Continuous monitoring of KPIs and course-correction to ensure target outcomes.' },
]

export default function Services() {
    return (
        <div className="services-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="page-hero-glow" />
                <div className="page-hero-grid" />
                <div className="container">
                    <div className="badge">Our Services</div>
                    <h1 className="page-hero-title">Full-Spectrum Consulting Services</h1>
                    <p className="page-hero-subtitle">
                        From financial strategy and banking technology to IT architecture and digital transformation — we partner with you at every stage of your growth journey.
                    </p>
                </div>
            </section>

            {/* Domain Cards */}
            <section className="section">
                <div className="container">
                    <div className="domains-grid">
                        {domains.map((domain) => {
                            const Icon = domain.icon
                            const accentColor = colorMap[domain.color]
                            return (
                                <div key={domain.id} className="domain-card glass-card" style={{ '--domain-color': accentColor }}>
                                    <div className="domain-top">
                                        <div className={`icon-box icon-box-${domain.color}`}>
                                            <Icon size={26} />
                                        </div>
                                        <span className="domain-label" style={{ color: accentColor }}>{domain.label}</span>
                                    </div>
                                    <h3 className="domain-title">{domain.title}</h3>
                                    <p className="domain-desc">{domain.desc}</p>
                                    <ul className="domain-services">
                                        {domain.services.map((s, i) => (
                                            <li key={i}>
                                                <CheckCircle2 size={14} style={{ color: accentColor }} />
                                                <span>{s}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="domain-cta">
                                        Start this engagement <ArrowRight size={14} />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section process-section">
                <div className="container">
                    <div className="section-header center">
                        <div className="badge">How We Work</div>
                        <h2 className="section-title">Our Engagement Process</h2>
                        <p className="section-subtitle">A structured, proven approach that delivers measurable results at every stage.</p>
                    </div>
                    <div className="process-steps">
                        {process.map((step, i) => (
                            <div key={i} className="process-step glass-card">
                                <div className="process-step-num">{step.step}</div>
                                <h4 className="process-step-title">{step.title}</h4>
                                <p className="process-step-desc">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="section-sm">
                <div className="container">
                    <div className="services-bottom-cta glass-card">
                        <div className="sbc-content">
                            <h3 className="sbc-title">Not sure which service you need?</h3>
                            <p className="sbc-text">Our consultants will evaluate your needs and recommend the best engagement model — at no cost.</p>
                        </div>
                        <Link to="/contact" className="btn btn-primary">
                            <span>Get a Free Assessment</span>
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
