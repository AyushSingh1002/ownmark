'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const reasons = [
  ['BRAND PRESENCE', 'Your identity becomes part of the physical guest experience.'],
  ['PREMIUM PRESENTATION', 'A thoughtfully designed bottle complements the table.'],
  ['DIFFERENTIATION', 'Make the experience feel specific to your business.'],
  ['CONSISTENCY', 'Extend your identity beyond menus, signage and digital media.'],
  ['CUSTOMER EXPERIENCE', 'Turn a basic necessity into a branded detail.'],
]
const audiences = [
  ['RESTAURANTS', 'Dining tables and everyday service.'],
  ['CAFÉS', 'Branded hydration for contemporary spaces.'],
  ['HOTELS & RESORTS', 'Guest rooms, dining and hospitality.'],
  ['WEDDINGS & EVENTS', 'Personalised bottles for celebrations and gatherings.'],
  ['CORPORATE EVENTS', 'Meetings, conferences and hosted experiences.'],
]
const process = [
  ['01', 'Share your brand', 'Send your logo, brand identity or design direction.'],
  ['02', 'We design', 'We create your bottle concept around your business.'],
  ['03', 'You approve', 'Review the concept before production.'],
  ['04', 'We produce', 'Your approved design moves into the appropriate production process.'],
  ['05', 'We deliver', 'Finished branded bottles are supplied for your business or event.'],
]
const portraits = [
  ['/designer-portrait-1.png', 'AURORA KITCHEN', 'Contemporary restaurant'],
  ['/designer-portrait-2.png', 'HOUSE N°7', 'Boutique hotel'],
  ['/designer-portrait-3.png', 'COMMON GROUND', 'Modern café'],
]

function Bottle({ label = 'OWNMARK' }: { label?: string }) {
  return <div className="bottle-wrap" aria-hidden="true"><div className="bottle-cap" /><div className="bottle-neck" /><div className="bottle-body"><span>{label}</span><i /></div></div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [selectedAudience, setSelectedAudience] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(null)
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 640)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const copyEmail = async () => {
    await navigator.clipboard.writeText('hello.onmark.support@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14 })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
  const closeMenu = () => setMenuOpen(false)
  const whatsappHref = 'https://wa.me/917269021785?text=Hi%20OWNMARK%2C%20I%27d%20like%20to%20create%20custom%20branded%20water%20for%20my%20business.'
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <Link className="wordmark" href="#top" onClick={closeMenu}>OWNMARK</Link>
      <div className="nav-actions"><button className="theme-toggle" type="button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}><span>{dark ? 'Light' : 'Dark'}</span><i /></button><button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}><span>{menuOpen ? 'Close' : 'Menu'}</span><i /></button></div>
      <div className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="mobile-navigation"><Link href="#insight" onClick={closeMenu}>The insight</Link><Link href="#work" onClick={closeMenu}>Designers</Link><Link href="#process" onClick={closeMenu}>Process</Link></div>
      <Link className="nav-cta" href="#contact" onClick={closeMenu}>Start with your brand <span>↗</span></Link>
    </nav>

    <section className="hero shell" id="top"><div className="hero-copy reveal"><p className="eyebrow">Your brand. Every table.</p><h1>Custom-branded<br /><em>bottled water</em></h1><p className="hero-intro">For hospitality &amp; events.</p><Link className="button" href="#contact">Put your brand on the table <span>↗</span></Link></div><div className="hero-art reveal delay-1"><div className="art-note">A SMALL DETAIL.<br />A LASTING IMPRESSION.</div><div className="table-disc" /><Bottle /><div className="art-index">01 <span>/</span> 07</div></div></section>

    <section className="insight shell section-grid reveal-on-scroll" id="insight"><div className="section-label"><span>01</span><span>THE INSIGHT</span></div><div className="insight-content"><h2>Why should your table<br />carry <em>someone else&apos;s</em><br />brand?</h2><div className="insight-text"><p>Your brand lives in every detail of the guest experience — from the space and menu to the packaging and presentation.</p><p>Bottled water is one of the few things that can still arrive carrying someone else&apos;s identity.</p><p><strong>OWNMARK</strong> turns it into another branded touchpoint. The bottle becomes part of the experience.</p></div></div></section>

    <section className="doing shell section-grid reveal-on-scroll"><div className="section-label"><span>02</span><span>WHAT WE DO</span></div><div className="doing-content"><h2>From your brand<br />to <em>your bottle.</em></h2><div className="steps-row">{[['01', 'YOUR BRAND', 'Logo, colours, identity'], ['02', 'OUR DESIGN', 'Bottle concept & label'], ['03', 'YOUR BOTTLE', 'Finished branded product']].map(([number, title, copy]) => <div className="mini-step" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div><p className="large-copy">You bring the identity. We shape it into a bottle that feels like it belongs to your business. Then coordinate the production and supply of the finished branded product.</p><div className="service-list"><p>Brand-led design <span>Bottle and label concepts developed around your identity.</span></p><p>Custom branded bottles <span>Your business name, visual language and presentation on the final product.</span></p><p>Production &amp; supply <span>Approved designs move into production through the appropriate supply process.</span></p></div></div></section>

    <section className="portfolio shell reveal-on-scroll" id="work"><div className="portfolio-heading"><div className="section-label"><span>03</span><span>DESIGNERS</span></div><h2>People behind<br /><em>the bottle.</em></h2></div><div className="portfolio-grid">{portraits.map(([image, name, type], index) => <article className={`portfolio-card card-${index + 1}`} key={name}><img src={image} alt={`${name} designer portrait`} /><div className="portfolio-meta"><h3>{name}</h3><p>{type}</p></div></article>)}</div></section>

    <section className="reasons shell section-grid reveal-on-scroll"><div className="section-label"><span>04</span><span>WHY BRANDED WATER</span></div><div className="reasons-content"><h2>More <em>than water.</em></h2><div className="reason-list">{reasons.map(([title, copy]) => <div className="reason" key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>
    <section className="audience shell section-grid reveal-on-scroll"><div className="section-label"><span>05</span><span>WHO IT&apos;S FOR</span></div><div className="audience-content"><h2>Built for <em>hospitality.</em></h2><div className="audience-tabs" role="tablist" aria-label="Audience types">{audiences.map(([title], index) => <button className={selectedAudience === index ? 'is-active' : ''} type="button" role="tab" aria-selected={selectedAudience === index} onClick={() => setSelectedAudience(index)} key={title}>{title}</button>)}</div><div className="audience-feature"><p className="audience-feature-index">0{selectedAudience + 1}</p><div><h3>{audiences[selectedAudience][0]}</h3><p>{audiences[selectedAudience][1]}</p><p className="audience-feature-copy">A considered branded detail for every guest, table and hosted experience.</p></div></div><p className="closing-line">One idea. Different environments.</p></div></section>
    <section className="process shell section-grid reveal-on-scroll" id="process"><div className="section-label"><span>06</span><span>THE PROCESS</span></div><div className="process-content"><h2>Simple from start<br /><em>to finish.</em></h2><div className="process-list">{process.map(([num, title, copy]) => <div className="process-step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section>
    <section className="contact shell reveal-on-scroll" id="contact"><div className="contact-copy"><p className="eyebrow">07 / LET&apos;S WORK TOGETHER</p><h2>Let&apos;s put your brand<br /><em>on the table.</em></h2><p>Send us your logo and tell us about your business. We&apos;ll show you what your branded bottle could look like.</p><div className="contact-actions"><a className="button light" href="#enquiry">Get your bottle designed <span>↗</span></a><a className="text-action light-action" href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp us <span>↗</span></a></div></div><div className="contact-mark">OWN<br />MARK</div></section>
    <section className="enquiry shell section-grid reveal-on-scroll" id="enquiry"><div className="section-label"><span>08</span><span>YOUR BRAND</span></div><div className="enquiry-content"><h2>Start with <em>your brand.</em></h2>{submitted ? <div className="form-success"><span>THANK YOU</span><h3>Your enquiry is ready to review.</h3><p>We&apos;ll be in touch about your custom bottle direction.</p><button className="text-action" type="button" onClick={() => setSubmitted(false)}>Send another enquiry <span>＋</span></button></div> : <form className="enquiry-form" onSubmit={handleSubmit}><div className="form-grid"><label>Business / brand name<input required name="business" placeholder="Your business name" /></label><label>Your name<input required name="name" placeholder="Contact person" /></label><label>Email<input required type="email" name="email" placeholder="you@business.com" /></label><label>Phone / WhatsApp<input required type="tel" name="phone" placeholder="+91 ..." /></label></div><label>Business type<select name="type" defaultValue="Restaurant"><option>Restaurant</option><option>Café</option><option>Hotel / Resort</option><option>Wedding / Event</option><option>Corporate event</option><option>Other</option></select></label><label>Additional requirements<textarea name="message" rows={4} placeholder="Tell us a little about your bottle project" /></label><label className="upload-label">Logo upload<input type="file" name="logo" accept="image/*,.pdf" /></label><button className="button" type="submit">Get your bottle designed <span>↗</span></button></form>}</div></section>
    <section className="faq shell section-grid reveal-on-scroll" id="faq"><div className="section-label"><span>09</span><span>QUESTIONS</span></div><div className="faq-content"><h2>Good to <em>know.</em></h2><div className="faq-list">{['Can you use our existing logo and brand identity?','Can you help design the bottle label?','Do you supply different bottle sizes?','How does the ordering process work?','Can we reorder the same design?'].map((question, index) => <div className="faq-item" key={question}><button type="button" aria-expanded={faqOpen === index} onClick={() => setFaqOpen(faqOpen === index ? null : index)}><span>{question}</span><b>{faqOpen === index ? '−' : '+'}</b></button>{faqOpen === index && <p>Share your brand and requirements with us. We&apos;ll shape the next step around your business or event.</p>}</div>)}</div></div></section>
    <footer className="footer shell"><div><strong>OWNMARK</strong><span>Your brand. Every table.</span></div><div><a href="tel:+917269021785">+91 72690 21785</a><button className="footer-email" type="button" onClick={copyEmail}>{copied ? 'Email copied' : 'hello.onmark.support@gmail.com'}</button><span>Lucknow, India</span></div></footer>{showTop && <a className="back-to-top" href="#top" aria-label="Back to top">↑</a>}
  </main>
}
