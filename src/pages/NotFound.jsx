import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import './About.css'

export default function NotFound() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '24px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <div style={{
                position: 'absolute',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,212,255,0.06), transparent 70%)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(6rem, 15vw, 10rem)',
                    fontWeight: 800,
                    lineHeight: 1,
                    background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-violet))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '16px',
                }}>404</div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
                    Page Not Found
                </h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 32px', lineHeight: 1.7 }}>
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/" className="btn btn-primary">
                        <Home size={16} />
                        <span>Go Home</span>
                    </Link>
                    <button className="btn btn-outline" onClick={() => window.history.back()}>
                        <ArrowLeft size={16} />
                        <span>Go Back</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
