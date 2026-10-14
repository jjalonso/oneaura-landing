import { useEffect, useRef, useState } from 'react'
import { Accordion, Button, Card, Chip, Skeleton } from '@heroui/react'
import Calculator from './Calculator'
import { BOOKING_URL, SCHOOLS_URL, TERMS_URL, WHATSAPP_URL, CONTACT_EMAIL, COMMISSION, PAYMENT_FEE, LOGOS, faq } from './content'
const fmt = n => n.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
import heroImg from './assets/hero.webp'
import availabilityImg from './assets/availability.webp'
import dashboardImg from './assets/dashboard.webp'
import videollamadaImg from './assets/videollamada.webp'
import logoImg from './assets/oneaura.webp'
import chatImg from './assets/chat.webp'

const go = id => () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
const Reservar = ({ children, variant = 'primary', size = 'sm', className = '' }) => (
  <Button variant={variant} size={size} className={className} onPress={go('reserva')}>{children}</Button>
)
const S = ({ id, className = '', wide, children }) => (
  <section id={id} className={`px-5 py-20 md:py-28 ${className}`}><div className={`mx-auto ${wide ? 'max-w-6xl' : 'max-w-4xl'}`}>{children}</div></section>
)
const H2 = ({ children, className = '' }) => <h2 className={`mb-8 text-2xl font-bold leading-snug tracking-tight md:text-3xl ${className}`}>{children}</h2>
const Tile = ({ children, className = '' }) => <Card className={`h-full !rounded-3xl !p-6 ${className}`}>{children}</Card>

const WhatsAppFloat = () => {
  const [raised, setRaised] = useState(false)
  useEffect(() => {
    const footer = document.getElementById('site-footer')
    if (!footer) return
    const observer = new IntersectionObserver(([entry]) => setRaised(entry.isIntersecting))
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea por WhatsApp"
      className={`fixed right-5 z-[2147483647] flex h-11 items-center gap-2 rounded-full bg-[#25D366] pl-3 pr-4 font-semibold text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl ${raised ? 'bottom-28' : 'bottom-5'}`}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="size-6 shrink-0 fill-white">
        <path d="M16 3C9 3 3.5 8.5 3.5 15.4c0 2.4.7 4.7 1.9 6.7L3.3 29l7.1-2c1.9 1 4 1.6 6.1 1.6h.1c6.9 0 12.5-5.5 12.5-12.4C29.1 8.5 23.4 3 16 3zm7.3 17.7c-.3.9-1.8 1.7-2.5 1.8-.6.1-1.4.1-2.3-.1-.5-.2-1.2-.4-2.1-.8-3.7-1.6-6.1-5.3-6.3-5.6-.2-.2-1.5-2-1.5-3.8 0-1.8.9-2.7 1.3-3.1.3-.4.7-.4 1-.4h.7c.2 0 .5 0 .8.6.3.7 1 2.4 1.1 2.5.1.2.1.4 0 .6-.1.2-.2.4-.4.6l-.6.7c-.2.2-.4.4-.2.8.2.4.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.8.4.2.6.1.8-.1.2-.2.9-1.1 1.2-1.4.2-.4.5-.3.8-.2.3.1 2 .9 2.3 1.1.3.2.5.2.6.4.1.1.1.8-.2 1.7z" />
      </svg>
      <span className="whitespace-nowrap text-xs">¿Dudas? Escríbenos</span>
    </a>
  )
}

const Nav = () => (
  <header className="glass-card sticky z-50 px-4 sm:px-5" style={{ top: 'env(safe-area-inset-top, 0px)' }}>
    {/* Nada encoge: logo y boton llevan shrink-0, asi que lo que cede es
        "Acceso escuelas", que parte en dos lineas. Por eso la fila es min-h-14
        y no h-14 — con alto fijo la segunda linea se montaba sobre el logo.
        Y flex-wrap por si aun asi no cabe (~300px): el grupo de la derecha baja
        a su propia linea en vez de desbordar la pagina, que es lo que ensanchaba
        el documento y dejaba una franja blanca a la derecha. */}
    <div className="mx-auto flex min-h-14 max-w-6xl flex-wrap items-center justify-between gap-y-2 py-2">
      <a href="#" aria-label="OneAura" className="shrink-0"><img src={logoImg} alt="OneAura" className="h-7 w-auto" /></a>
      <nav className="hidden gap-6 text-sm md:flex"><a href="#como">Cómo funciona</a><a href="#calculadora">Calculadora</a><a href="#faq">Preguntas</a></nav>
      <div className="flex items-center gap-3 sm:gap-4"><a href={SCHOOLS_URL} className="text-sm leading-tight text-neutral transition hover:text-primary">Acceso escuelas</a><Reservar className="shrink-0">Reservar demo</Reservar></div>
    </div>
  </header>
)

const Hero = () => (
  <S wide className="bg-gradient-to-b from-soft to-background !pt-14 md:!pt-20">
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div>
        <Chip size="md" className="mb-5 !h-auto !px-4 !py-1.5 !text-xs bg-secondary text-secondary-foreground sm:!text-sm md:!text-base">Para escuelas y formadores de mediumnidad y canalización</Chip>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-[2.5rem]">Tu formación termina.<br />Tus ingresos no deberían.</h1>
        <p className="mt-4 max-w-lg text-base">Tu propia web app de prácticas, con tu marca y tu propio sistema de suscripciones para que tus alumnos sigan practicando después del curso, y tu escuela facture todos los meses.</p>
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Reservar>Reserva tu demo gratuita de 30 minutos</Reservar>
          <Button variant="ghost" size="sm" onPress={go('calculadora')}>Calcula cuánto puede ganar tu escuela ↓</Button>
        </div>
        <p className="mt-4 text-xs text-muted">Sin coste de alta · Sin permanencia</p>
      </div>
      <img src={heroImg} alt="Web app de la escuela con la pantalla de inicio y una videollamada de práctica" className="mx-auto w-full max-w-[22rem] md:max-w-[34rem]" />
    </div>
  </S>
)

const VISIBLE_LOGOS = LOGOS.filter(l => !l.hidden)
const Logos = () => VISIBLE_LOGOS.length === 0 ? null : (
  <S className="!pt-14 !pb-24 md:!pb-32">
    <p className="mb-8 text-center text-base font-semibold text-neutral md:text-lg">Escuelas que ya forman parte de OneAura</p>
    <div className="flex flex-col items-center gap-y-8">
      {[VISIBLE_LOGOS.slice(0, 3), VISIBLE_LOGOS.slice(3)].filter(row => row.length).map((row, i) => (
        <div key={i} className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {row.map(l => <img key={l.name} src={l.src} alt={l.name} className={`${l.cls} w-auto opacity-80 mix-blend-multiply grayscale transition hover:opacity-100 hover:grayscale-0`} />)}
        </div>
      ))}
    </div>
  </S>
)

const Problema = () => (
  <S className="bg-primary text-primary-foreground">
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-secondary">1.- El Problema</p>
        <H2>El último día de curso empiezas a perder a tus alumnos.</H2>
        <p className="opacity-90">Les das unas cuantas prácticas y les animas a seguir practicando en el grupo. Pero en unas semanas el grupo de WhatsApp se apaga y cada uno vuelve a su rutina.</p>
      </div>
      <img src={chatImg} alt="Chat de WhatsApp: «Alguien sigue aqui?» hace 1 mes y «Quiere practicar alguien mañana?» hace 2 semanas, sin respuesta" className="mx-auto w-full max-w-md drop-shadow-lg md:ml-auto md:mr-0 md:max-w-[23rem]" />
    </div>
    <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
      {[['Los grupos y chats se apagan.', 'En poco tiempo la gente deja de participar y los grupos se olvidan.'], ['Buscar prácticas no es fácil.', 'Lo intentan en Facebook o TikTok sin apenas seguidores, acordar horarios, zonas horarias distintas... es una pesadilla.'], ['El vínculo se rompe.', 'Cuando vuelvan a formarse, es probable que el alumno haya explorado otros mediums o técnicas y no sea contigo.']].map(([t, d]) => (
        <Tile key={t}><h3 className="mb-1.5 text-sm font-semibold text-primary">{t}</h3><p className="text-sm text-foreground">{d}</p></Tile>
      ))}
    </div>
    <p className="mx-auto mt-14 max-w-2xl text-balance text-center text-xl font-semibold leading-snug text-secondary md:text-2xl">Y cuando el alumno se va, dejas de generar ingresos con&nbsp;él.</p>
  </S>
)

const Solucion = () => (
  <S className="bg-soft">
    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">3.- Qué gana tu escuela</p>
    <H2>Tu propia web app y tus suscripciones para ingresos recurrentes</H2>
    <div className="grid items-stretch gap-6 md:grid-cols-2">
      {[['▣', 'Tu propia web app', <>Con el nombre y el logo de tu escuela y tu propia dirección, por ejemplo <span className="whitespace-nowrap font-semibold text-primary">tuescuela.practicas.app</span>. Tus alumnos entran desde el móvil, sin descargar nada.</>], ['€', 'Tus propias suscripciones', 'Tú decides el precio y cobras cada mes. Sin desarrollar nada ni gestionar pagos.']].map(([i, t, d]) => (
        <Tile key={t}><div className="mb-3 grid h-9 w-9 place-items-center rounded-full bg-soft text-base text-primary">{i}</div><h3 className="mb-1.5 text-sm font-semibold text-primary">{t}</h3><p className="text-sm">{d}</p></Tile>
      ))}
    </div>
  </S>
)

const COMO_STEPS = [
  ['Marcan su disponibilidad.', 'Eligen sus franjas horarias disponibles, de lunes a domingo.'],
  ['Nuestra IA los empareja.', 'Nuestra IA empareja estudiantes y los notifica para una sesión programada con entre 2 y 7 días de antelación.'],
  ['Videollamadas integradas.', 'Les avisamos cuando llega la hora y se unen a una videollamada de 60 minutos. Al terminar, pueden valorar a su compañero.'],
]
const COMO_SLIDES = [
  { src: availabilityImg, alt: 'Panel de disponibilidad semanal del alumno, con sus franjas horarias', rotate: '-rotate-2' },
  { src: dashboardImg, alt: 'Panel de la escuela con las próximas sesiones y el historial de un alumno', rotate: 'rotate-2' },
  { src: videollamadaImg, alt: 'Videollamada de práctica entre dos alumnas', rotate: '' },
]
const Como = () => {
  const [slide, setSlide] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setSlide(n => (n + 1) % COMO_SLIDES.length), 4000)
    return () => clearInterval(t)
  }, [])
  return (
    <S id="como">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">2.- Qué ganan tus alumnos</p>
        <H2 className="text-primary !mb-4">Ellos registran su disponibilidad y nosotros los emparejamos</H2>
        <p>Prácticas continuas con otros estudiantes de la red OneAura. Sin esfuerzo, nuestro sistema los mantiene practicando en rutina.</p>
      </div>
      <ol className="grid items-stretch gap-6 md:grid-cols-3">
        {COMO_STEPS.map(([t, d], i) => (
          <li key={t} className="flex flex-col">
            <Tile className="w-full"><span className="mb-3 grid h-7 w-7 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">{i + 1}</span><h3 className="mb-1.5 text-sm font-semibold">{t}</h3><p className="text-sm">{d}</p></Tile>
            {/* En movil cada paso lleva su imagen justo debajo, sin carrusel ni
                animacion: en una columna estrecha es mas claro ver cada captura
                pegada a lo que explica. En md+ se ocultan y manda el carrusel. */}
            <img src={COMO_SLIDES[i].src} alt={COMO_SLIDES[i].alt} className="mt-4 w-full md:hidden" />
          </li>
        ))}
      </ol>
      <div className="mt-6 hidden grid-cols-3 gap-6 md:grid" aria-hidden="true">
        {COMO_SLIDES.map((_, i) => (
          <div key={i} className={`h-1.5 rounded-full transition-colors duration-700 ${i === slide ? 'bg-primary' : 'bg-neutral-surface'}`} />
        ))}
      </div>
      <div className="relative mx-auto mt-8 hidden h-[28rem] w-full max-w-2xl overflow-hidden md:block md:h-[34rem]">
        {COMO_SLIDES.map((s, i) => (
          <img key={s.src} src={s.src} alt={s.alt} className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${s.rotate} ${i === slide ? 'opacity-100' : 'opacity-0'}`} />
        ))}
      </div>
    </S>
  )
}

const PRICES = [15, 20, 25, 30]
const Modelo = () => {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI(n => (n + 1) % PRICES.length), 2000)
    return () => clearInterval(t)
  }, [])
  const price = PRICES[i]
  const fee = COMMISSION + PAYMENT_FEE
  const school = price - fee
  const max = PRICES[PRICES.length - 1]
  return (
    <S className="bg-soft"><div className="mx-auto max-w-xl text-center">
      <H2 className="text-primary">Solo ganamos si tú ganas</H2>
      <p className="mb-6">Sin cuota mensual ni coste de alta. De lo que paga cada alumno, una parte fija es para <b>OneAura</b> y gastos, y todo lo demás es para <b>tu escuela</b>.</p>
      <Tile className="text-left">
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-sm">Lo que paga cada alumno al mes</span>
          <span className="text-2xl font-bold tabular-nums text-primary">{price} €</span>
        </div>
        <div className="mt-5 flex h-3 overflow-hidden rounded-full bg-neutral-surface" aria-hidden="true">
          <div className="bg-secondary" style={{ width: `${(fee / max) * 100}%` }} />
          <div className="bg-primary transition-[width] duration-700 ease-out" style={{ width: `${(school / max) * 100}%` }} />
        </div>
        <div className="mt-3 flex justify-between gap-4 text-sm">
          <span><span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-secondary" /><b>Gastos y comisiones</b></span>
          <span><span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-primary" /><b className="text-primary">Para tu escuela</b></span>
        </div>
      </Tile>
      <p className="mt-8 text-balance text-lg font-semibold leading-snug text-primary md:text-xl">Los gastos de plataforma no cambian, pongas el precio que pongas.</p>
    </div></S>
  )
}

const Fundador = () => (
  <S><div className="mx-auto max-w-2xl">
    <H2 className="text-primary">Por qué creamos OneAura</H2>
    <p className="mb-3">Como estudiantes de mediumnidad en distintos cursos, notamos siempre lo mismo: practicar era lo más difícil. Cuadrar horarios entre zonas horarias, exponernos en redes sociales sin tener seguidores y otras muchas dificultades hacían que encontrar con quién practicar fuera un esfuerzo constante.</p>
    <p>Creamos OneAura para que eso no vuelva a pasar, y para que las escuelas que forman a esos alumnos puedan seguir acompañándolos.</p>
    <p className="mt-5 text-base font-semibold text-primary">Juan &amp; Per</p>
  </div></S>
)

const Faq = () => (
  <S id="faq"><div className="mx-auto max-w-2xl">
    <H2 className="text-primary">Preguntas frecuentes</H2>
    <Accordion>
      {faq.map(([q, a], i) => (
        <Accordion.Item key={i} id={String(i)}>
          <Accordion.Heading><Accordion.Trigger className="text-sm">{q}<Accordion.Indicator /></Accordion.Trigger></Accordion.Heading>
          <Accordion.Panel><Accordion.Body className="text-sm">{a}</Accordion.Body></Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  </div></S>
)

const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js'
// Calendly's own inline embed, nothing else: a div with their class, their
// data-url and data-resize, and their script. widget.js finds the div itself
// and takes over — it creates the iframe, sizes it, and writes the height onto
// this div on every step (that growing is theirs, not ours). The script is
// injected after mount on purpose: loaded from index.html it would run its
// one-shot scan before React had rendered the div, and find nothing.
const Reserva = () => {
  const ref = useRef(null)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    if (!BOOKING_URL) return
    // Calendly posts its page height from the iframe. The first ones while it
    // boots are tiny (26px, then 2px — measured); the first real one comes
    // with the painted calendar. Registered before widget.js loads, so this
    // runs before widget.js applies that same height to the div.
    // On wide screens the first real height is its narrow layout's (602px),
    // then the right one (700px) 44ms later — measured. So it's ready once
    // the heights stop changing, not on the first big one, or the box would
    // blink to 602 as the reserved height let go.
    let settle
    const onMessage = e => {
      if (e.origin !== 'https://calendly.com' || e.data?.event !== 'calendly.page_height') return
      if (parseInt(e.data.payload?.height, 10) < 200) return
      clearTimeout(settle)
      settle = setTimeout(() => setReady(true), 200)
    }
    window.addEventListener('message', onMessage)
    const failsafe = setTimeout(() => setReady(true), 10000)
    if (!document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`)) {
      const script = document.createElement('script')
      script.src = CALENDLY_SCRIPT
      script.async = true
      document.body.appendChild(script)
    }
    return () => { window.removeEventListener('message', onMessage); clearTimeout(failsafe); clearTimeout(settle) }
  }, [])
  const url = `${BOOKING_URL}${BOOKING_URL.includes('?') ? '&' : '?'}hide_event_type_details=1&hide_gdpr_banner=1&primary_color=825355&background_color=ffffff&text_color=645d5e`
  return (
    <S id="reserva" className="bg-primary text-center text-primary-foreground">
      <H2>Tus alumnos ya quieren seguir practicando. Dales dónde hacerlo.</H2>
      <p className="mb-3 opacity-90">Reserva 30 minutos. Te enseñamos la web app y calculamos juntos lo que puede generar tu escuela.</p>
      <p className="mb-6 text-sm opacity-90">¿Prefieres escribirnos? <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline underline-offset-4">{CONTACT_EMAIL}</a></p>
      <div className={`calendly-wrap relative mx-auto max-w-2xl text-foreground ${ready ? 'is-ready' : ''}`}>
        {BOOKING_URL
          ? <>
              {/* In place of Calendly's spinner while it loads: a calendar
                  outline — the month bar, then rows of day cells — in the
                  reserved box, under the still-transparent embed. Unmounted
                  the moment the calendar is ready, in the same render that
                  shows the (opaque) iframe over it, so there's no gap. */}
              {!ready && (
                <div aria-hidden="true" className="absolute inset-0 px-6 pt-14">
                  <Skeleton animationType="pulse" className="mx-auto h-4 w-32 rounded-full bg-white/15" />
                  <div className="mx-auto mt-10 grid max-w-sm grid-cols-7 gap-3">
                    {Array.from({ length: 28 }).map((_, i) => <Skeleton key={i} animationType="pulse" className="aspect-square rounded-full bg-white/15" />)}
                  </div>
                </div>
              )}
              <div ref={ref} className="calendly-inline-widget relative" data-url={url} data-resize="true" style={{ minWidth: 320 }} />
            </>
          : <div className="p-10 text-xs text-muted">[Aquí va el calendario de Calendly / Cal.com: define <code>BOOKING_URL</code> en <code>src/content.js</code>]</div>}
      </div>
      {BOOKING_URL && <p className="mt-5 text-sm opacity-90">¿No ves el calendario? <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4">Ábrelo en otra pestaña</a>.</p>}
    </S>
  )
}

const Footer = () => (
  <footer id="site-footer" className="px-5 pb-10 pt-12 text-xs text-muted">
    <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3">
      <span>© 2026 OneAura</span>
      <nav className="flex flex-wrap gap-4"><a href={SCHOOLS_URL}>Acceso escuelas</a><a href={TERMS_URL}>Privacy &amp; Terms</a><a href={`mailto:${CONTACT_EMAIL}`}>Contacto</a></nav>
    </div>
  </footer>
)

export default function App() {
  return <><Nav /><Hero /><Logos /><Problema /><Como /><Solucion /><S id="calculadora"><H2 className="text-primary">¿Cuánto puede ganar tu escuela?</H2><Calculator /></S><Modelo /><Fundador /><Faq /><Reserva /><Footer /><WhatsAppFloat /></>
}
