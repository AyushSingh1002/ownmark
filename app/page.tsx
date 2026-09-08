import Link from 'next/link'

const portfolio = [
  ['AURORA KITCHEN', 'Contemporary restaurant'],
  ['HOUSE N°7', 'Boutique hotel'],
  ['COMMON GROUND', 'Modern café'],
  ['THE IVY ROOM', 'Fine dining'],
  ['MEHRA HOUSE', 'Private events'],
  ['NORTH & OAK', 'Modern hospitality'],
]

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

function Bottle({ label = 'OWNMARK' }: { label?: string }) {
  return (
    <div className="bottle-wrap" aria-hidden="true">
      <div className="bottle-cap" />
      <div className="bottle-neck" />
      <div className="bottle-body">
        <span>{label}</span>
        <i />
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <Link className="wordmark" href="#top">OWNMARK</Link>
        <div className="nav-links">
          <Link href="#insight">The insight</Link>
          <Link href="#work">Portfolio</Link>
          <Link href="#process">Process</Link>
        </div>
        <Link className="nav-cta" href="#contact">Start with your brand <span>↗</span></Link>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Your brand. Every table.</p>
          <h1>Custom-branded<br /><em>bottled water</em></h1>
          <p className="hero-intro">For hospitality &amp; events.</p>
          <Link className="button" href="#contact">Put your brand on the table <span>↗</span></Link>
        </div>
        <div className="hero-art">
          <div className="art-note">A SMALL DETAIL.<br />A LASTING IMPRESSION.</div>
          <div className="table-disc" />
          <Bottle />
          <div className="hero-shadow" />
          <div className="art-index">01 <span>/</span> 07</div>
        </div>
      </section>

      <section className="insight shell section-grid" id="insight">
        <div className="section-label"><span>01</span><span>THE INSIGHT</span></div>
        <div className="insight-content">
          <h2>Why should your table<br />carry <em>someone else&apos;s</em><br />brand?</h2>
          <div className="insight-text">
            <p>Your brand lives in every detail of the guest experience — from the space and menu to the packaging and presentation.</p>
            <p>Bottled water is one of the few things that can still arrive carrying someone else&apos;s identity.</p>
            <p><strong>OWNMARK</strong> turns it into another branded touchpoint. The bottle becomes part of the experience.</p>
          </div>
        </div>
      </section>

      <section className="doing shell section-grid">
        <div className="section-label"><span>02</span><span>WHAT WE DO</span></div>
        <div className="doing-content">
          <h2>From your brand<br />to <em>your bottle.</em></h2>
          <div className="steps-row">
            {[['01', 'YOUR BRAND', 'Logo, colours, identity'], ['02', 'OUR DESIGN', 'Bottle concept & label'], ['03', 'YOUR BOTTLE', 'Finished branded product']].map(([number, title, copy]) => (
              <div className="mini-step" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>
            ))}
          </div>
          <p className="large-copy">You bring the identity. We shape it into a bottle that feels like it belongs to your business. Then coordinate the production and supply of the finished branded product.</p>
          <div className="service-list"><p>Brand-led design <span>Bottle and label concepts developed around your identity.</span></p><p>Custom branded bottles <span>Your business name, visual language and presentation on the final product.</span></p><p>Production &amp; supply <span>Approved designs move into production through the appropriate supply process.</span></p></div>
        </div>
      </section>

      <section className="portfolio shell" id="work">
        <div className="portfolio-heading"><div className="section-label"><span>03</span><span>PORTFOLIO</span></div><h2>Your brand.<br /><em>Your bottle.</em></h2></div>
        <div className="portfolio-grid">{portfolio.map(([name, type], index) => <article className={`portfolio-card card-${index + 1}`} key={name}><div className="card-bottle"><Bottle label={index % 2 ? 'N°7' : 'A'}/></div><div className="portfolio-meta"><h3>{name}</h3><p>{type}</p></div></article>)}</div>
      </section>

      <section className="reasons shell section-grid">
        <div className="section-label"><span>04</span><span>WHY BRANDED WATER</span></div>
        <div className="reasons-content"><h2>More <em>than water.</em></h2><div className="reason-list">{reasons.map(([title, copy]) => <div className="reason" key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div></div>
      </section>

      <section className="audience shell section-grid">
        <div className="section-label"><span>05</span><span>WHO IT&apos;S FOR</span></div>
        <div className="audience-content"><h2>Built for <em>hospitality.</em></h2><div className="audience-list">{audiences.map(([title, copy]) => <div key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div><p className="closing-line">One idea. Different environments.</p></div>
      </section>

      <section className="process shell section-grid" id="process">
        <div className="section-label"><span>06</span><span>THE PROCESS</span></div>
        <div className="process-content"><h2>Simple from start<br /><em>to finish.</em></h2><div className="process-list">{process.map(([num, title, copy]) => <div className="process-step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div>
      </section>

      <section className="contact shell" id="contact"><div className="contact-copy"><p className="eyebrow">07 / LET&apos;S WORK TOGETHER</p><h2>Let&apos;s put your brand<br /><em>on the table.</em></h2><p>Send us your logo and tell us about your business. We&apos;ll show you what your branded bottle could look like.</p><Link className="button light" href="mailto:hello.onmark.support@gmail.com">Start with your brand <span>↗</span></Link></div><div className="contact-mark">OWN<br />MARK</div></section>

      <footer className="footer shell"><div><strong>OWNMARK</strong><span>Your brand. Every table.</span></div><div><a href="tel:+917269021785">+91 72690 21785</a><a href="mailto:hello.onmark.support@gmail.com">hello.onmark.support@gmail.com</a><span>Lucknow, India</span></div></footer>
    </main>
  )
}
