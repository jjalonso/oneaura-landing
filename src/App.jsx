import { useEffect, useState } from 'react'
import { Accordion, Button, Card, Chip } from '@heroui/react'
import Calculator from './Calculator'
import { BOOKING_URL, SCHOOLS_URL, COMMISSION, PAYMENT_FEE, LOGOS, faq } from './content'
const fmt = n => n.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
import heroImg from './assets/hero.webp'
import logoImg from './assets/oneaura.webp'
import chatImg from './assets/chat.webp'

const go = id => () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
const Reservar = ({ children, variant = 'primary', size = 'sm', className = '' }) => (
  <Button variant={variant} size={size} className={className} onPress={go('reserva')}>{children}</Button>
)
const S = ({ id, className = '', wide, children }) => (
  <section id={id} className={`px-5 py-20 md:py-28 ${className}`}><div className={`mx-auto ${wide ? 'max-w-6xl' : 'max-w-4xl'}`}>{children}</div></section>
)
const H2 = ({ children, className = '' }) => <h2 className={`mb-8 text-xl font-bold leading-snug tracking-tight md:text-2xl ${className}`}>{children}</h2>
const Tile = ({ children, className = '' }) => <Card className={`h-full !rounded-3xl !p-6 ${className}`}>{children}</Card>

const Nav = () => (
  <header className="glass-card sticky z-50 px-5" style={{ top: 'env(safe-area-inset-top, 0px)' }}>
    <div className="mx-auto flex h-14 max-w-6xl items-center justify-between">
      <a href="#" aria-label="OneAura"><img src={logoImg} alt="OneAura" className="h-7 w-auto" /></a>
      <nav className="hidden gap-6 text-xs md:flex"><a href="#como">Cómo funciona</a><a href="#calculadora">Calculadora</a><a href="#faq">Preguntas</a></nav>
      <div className="flex items-center gap-4"><a href={SCHOOLS_URL} className="text-xs text-neutral transition hover:text-primary">Acceso escuelas</a><Reservar>Reservar demo</Reservar></div>
    </div>
  </header>
)

const Hero = () => (
  <S wide className="bg-gradient-to-b from-soft to-background !pt-14 md:!pt-20">
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div>
        <Chip size="md" className="mb-5 !h-auto !px-4 !py-1.5 !text-xs bg-secondary text-secondary-foreground md:!text-sm">Para escuelas y formadores de mediumnidad y canalización</Chip>
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-primary md:text-4xl">Tu formación termina.<br />Tus ingresos no deberían.</h1>
        <p className="mt-4 max-w-lg text-sm">Tu propia web app de prácticas, con tu marca y tu propio sistema de suscripciones para que tus alumnos sigan practicando después del curso, y tu escuela facture todos los meses.</p>
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

const Logos = () => LOGOS.length === 0 ? null : (
  <S className="!pt-14 !pb-24 md:!pb-32">
    <p className="mb-8 text-center text-sm font-semibold text-neutral md:text-base">Escuelas que ya forman parte de OneAura</p>
    <div className="flex flex-col items-center gap-y-8">
      {[LOGOS.slice(0, 3), LOGOS.slice(3)].map((row, i) => (
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
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-secondary">1.- El Problema</p>
        <H2>El último día de curso empiezas a perder a tus alumnos.</H2>
        <p className="opacity-90">Les das unas cuantas prácticas y les animas a seguir practicando en el grupo. Pero en unas semanas el grupo de WhatsApp se apaga y cada uno vuelve a su rutina.</p>
      </div>
      <img src={chatImg} alt="Chat de WhatsApp: «Alguien sigue aqui?» hace 1 mes y «Quiere practicar alguien mañana?» hace 2 semanas, sin respuesta" className="mx-auto w-full max-w-md drop-shadow-lg md:ml-auto md:mr-0 md:max-w-[23rem]" />
    </div>
    <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
      {[['Los grupos y chats se apagan.', 'En poco tiempo la gente deja de participar y los grupos se olvidan.'], ['Buscar prácticas no es fácil.', 'Lo intentan en Facebook o TikTok sin apenas seguidores, acordar horarios, zonas horarias distintas... es una pesadilla.'], ['El vínculo se rompe.', 'Cuando vuelvan a formarse, es probable que el alumno haya explorado otros mediums o técnicas y no sea contigo.']].map(([t, d]) => (
        <Tile key={t}><h3 className="mb-1.5 text-xs font-semibold text-primary">{t}</h3><p className="text-xs text-foreground">{d}</p></Tile>
      ))}
    </div>
    <p className="mx-auto mt-14 max-w-2xl text-balance text-center text-lg font-semibold leading-snug text-secondary md:text-xl">Y cuando el alumno se va, dejas de generar ingresos con&nbsp;él.</p>
  </S>
)

const Solucion = () => (
  <S className="bg-soft">
    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">3.- Qué gana tu escuela</p>
    <H2>Tu propia web app y tus suscripciones para ingresos recurrentes</H2>
    <div className="grid items-stretch gap-6 md:grid-cols-2">
      {[['▣', 'Tu propia web app', <>Con el nombre y el logo de tu escuela y tu propia dirección, por ejemplo <span className="whitespace-nowrap font-semibold text-primary">tuescuela.practicas.app</span>. Tus alumnos entran desde el móvil, sin descargar nada.</>], ['€', 'Tus propias suscripciones', 'Tú decides el precio y cobras cada mes. Sin desarrollar nada ni gestionar pagos.']].map(([i, t, d]) => (
        <Tile key={t}><div className="mb-3 grid h-9 w-9 place-items-center rounded-full bg-soft text-sm text-primary">{i}</div><h3 className="mb-1.5 text-xs font-semibold text-primary">{t}</h3><p className="text-xs">{d}</p></Tile>
      ))}
    </div>
  </S>
)

const Como = () => (
  <S id="como">
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">2.- Qué ganan tus alumnos</p>
      <H2 className="text-primary !mb-4">Ellos registran su disponibilidad y nosotros los emparejamos</H2>
      <p>Prácticas continuas con otros estudiantes de la red OneAura. Sin esfuerzo, nuestro sistema los mantiene practicando en rutina.</p>
    </div>
    <ol className="grid items-stretch gap-6 md:grid-cols-3">
      {[['Marcan su disponibilidad.', 'Eligen sus franjas horarias disponibles, de lunes a domingo.'], ['Nuestra IA los empareja.', 'Nuestra IA empareja estudiantes y los notifica para una sesión programada con entre 2 y 7 días de antelación.'], ['Videollamadas integradas.', 'Les avisamos cuando llega la hora y se unen a una videollamada de 60 minutos. Al terminar, pueden valorar a su compañero.']].map(([t, d], i) => (
        <li key={t} className="flex"><Tile className="w-full"><span className="mb-3 grid h-7 w-7 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">{i + 1}</span><h3 className="mb-1.5 text-xs font-semibold">{t}</h3><p className="text-xs">{d}</p></Tile></li>
      ))}
    </ol>
  </S>
)

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
      <p className="mb-6">Sin cuota mensual ni coste de alta. De lo que paga cada alumno, una parte fija es para OneAura y gastos, y todo lo demás es para tu escuela.</p>
      <Tile className="text-left">
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-xs">Lo que paga cada alumno al mes</span>
          <span className="text-xl font-bold tabular-nums text-primary">{price} €</span>
        </div>
        <div className="mt-5 flex h-3 overflow-hidden rounded-full bg-neutral-surface" aria-hidden="true">
          <div className="bg-secondary" style={{ width: `${(fee / max) * 100}%` }} />
          <div className="bg-primary transition-[width] duration-700 ease-out" style={{ width: `${(school / max) * 100}%` }} />
        </div>
        <div className="mt-3 flex justify-between gap-4 text-xs">
          <span><span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-secondary" /><b>Gastos y comisiones</b></span>
          <span><span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-primary" /><b className="text-primary">Para tu escuela</b></span>
        </div>
      </Tile>
      <p className="mt-8 text-balance text-base font-semibold leading-snug text-primary md:text-lg">Los gastos de plataforma no cambian, pongas el precio que pongas.</p>
    </div></S>
  )
}

const Fundador = () => (
  <S><div className="mx-auto max-w-2xl">
    <H2 className="text-primary">Por qué creamos OneAura</H2>
    <p className="mb-3">Como estudiantes de mediumnidad en distintos cursos, notamos siempre lo mismo: practicar era lo más difícil. Cuadrar horarios entre zonas horarias, exponernos en redes sociales sin tener seguidores y otras muchas dificultades hacían que encontrar con quién practicar fuera un esfuerzo constante.</p>
    <p>Creamos OneAura para que eso no vuelva a pasar, y para que las escuelas que forman a esos alumnos puedan seguir acompañándolos.</p>
    <p className="mt-5 text-sm font-semibold text-primary">Juan &amp; Per</p>
  </div></S>
)

const Faq = () => (
  <S id="faq"><div className="mx-auto max-w-2xl">
    <H2 className="text-primary">Preguntas frecuentes</H2>
    <Accordion>
      {faq.map(([q, a], i) => (
        <Accordion.Item key={i} id={String(i)}>
          <Accordion.Heading><Accordion.Trigger className="text-xs">{q}<Accordion.Indicator /></Accordion.Trigger></Accordion.Heading>
          <Accordion.Panel><Accordion.Body className="text-xs">{a}</Accordion.Body></Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  </div></S>
)

const Reserva = () => (
  <S id="reserva" className="bg-primary text-center text-primary-foreground">
    <H2>Tus alumnos ya quieren seguir practicando. Dales dónde hacerlo.</H2>
    <p className="mb-6 opacity-90">Reserva 30 minutos. Te enseñamos la web app y calculamos juntos lo que puede generar tu escuela.</p>
    <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl bg-white text-foreground">
      {BOOKING_URL ? <iframe title="Reservar demo" src={`${BOOKING_URL}${BOOKING_URL.includes('?') ? '&' : '?'}embed_domain=1&embed_type=Inline&hide_gdpr_banner=1&primary_color=825355`} className="h-[700px] w-full border-0" />
        : <div className="p-10 text-xs text-muted">[Aquí va el calendario de Calendly / Cal.com: define <code>BOOKING_URL</code> en <code>src/content.js</code>]</div>}
    </div>
    {BOOKING_URL && <p className="mt-5 text-xs opacity-90">¿No ves el calendario? <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4">Ábrelo en otra pestaña</a>.</p>}
  </S>
)

const Footer = () => (
  <footer className="px-5 pb-10 pt-12 text-xs text-muted">
    <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3">
      <span>© 2026 OneAura</span>
      <nav className="flex flex-wrap gap-4"><a href={SCHOOLS_URL}>Acceso escuelas</a><a href="#">Aviso legal</a><a href="#">Privacidad</a><a href="#">Cookies</a><a href="mailto:hola@oneaura.app">Contacto</a><a href="#">WhatsApp</a><a href="#">Instagram</a><a href="#">LinkedIn</a></nav>
    </div>
  </footer>
)

export default function App() {
  return <><Nav /><Hero /><Logos /><Problema /><Como /><Solucion /><S id="calculadora"><H2 className="text-primary">¿Cuánto puede ganar tu escuela?</H2><Calculator /></S><Modelo /><Fundador /><Faq /><Reserva /><Footer /></>
}
