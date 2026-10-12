import { Accordion, Button, Card, Chip, Surface } from '@heroui/react'
import Calculator from './Calculator'
import { BOOKING_URL, SLOTS_LEFT, LOGOS, faq } from './content'

const go = id => () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
const BookingButton = ({ children, variant = 'primary', size = 'lg', className = '' }) => (
  <Button variant={variant} size={size} className={className} onPress={go('reserva')}>{children}</Button>
)
const S = ({ id, className = '', children }) => (
  <section id={id} className={`px-5 py-20 ${className}`}><div className="mx-auto max-w-5xl">{children}</div></section>
)
const H2 = ({ children, className = '' }) => <h2 className={`mb-6 text-3xl font-extrabold leading-tight md:text-4xl ${className}`}>{children}</h2>

const Phone = ({ children, className = '' }) => (
  <div className={`w-56 rounded-4xl bg-white p-2 shadow-sanctuary ${className}`}>
    <div className="min-h-[270px] rounded-3xl bg-background p-4 text-sm">
      <p className="mb-3 text-xs font-bold text-primary">✦ Escuela Luz Interior</p>{children}
    </div>
  </div>
)

const Nav = () => (
  <header className="glass-card sticky z-50 px-5" style={{ top: 'env(safe-area-inset-top, 0px)' }}>
    <div className="mx-auto flex h-16 max-w-5xl items-center justify-between">
      <a href="#" className="text-xl font-extrabold text-primary">OneAura</a>
      <nav className="hidden gap-6 text-sm md:flex">
        <a href="#como">Cómo funciona</a><a href="#calculadora">Calculadora</a><a href="#fundadores">Fundadores</a>
      </nav>
      <BookingButton size="sm">Reservar demo</BookingButton>
    </div>
  </header>
)

const Hero = () => (
  <S className="bg-gradient-to-b from-soft to-background">
    <div className="grid items-center gap-12 md:grid-cols-2">
      <div>
        <Chip size="sm" className="mb-4 bg-secondary text-secondary-foreground">Para escuelas y formadores de mediumnidad</Chip>
        <h1 className="text-4xl font-extrabold leading-tight text-primary md:text-6xl">Tu formación termina. Tus ingresos, no.</h1>
        <p className="mt-5 text-lg">Tu propia app y tu propio sistema de suscripciones para que tus alumnos sigan practicando después del curso, y tu escuela facture todos los meses.</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <BookingButton>Reserva tu demo gratuita de 20 minutos</BookingButton>
          <Button variant="ghost" size="lg" onPress={go('calculadora')}>Calcula cuánto puede ganar tu escuela ↓</Button>
        </div>
        <p className="mt-5 text-sm text-muted">Sin coste de alta · Sin permanencia · Plazas limitadas para escuelas fundadoras</p>
      </div>
      <div className="relative mx-auto h-[360px] w-full max-w-sm">
        <Phone className="absolute right-0 top-6 scale-90 opacity-60 blur-[1px]">
          <p className="text-xs text-muted">Suscriptores activos</p><p className="text-2xl font-bold">42</p>
          <p className="mt-3 text-xs text-muted">Ingresos este mes</p><p className="text-2xl font-bold">336 €</p>
        </Phone>
        <Phone className="absolute left-0 top-0 -rotate-6">
          <Card className="!p-3">
            <p className="text-xs text-muted">Tu próxima práctica</p>
            <p className="font-bold">Jueves 20:00</p>
            <p className="text-xs">Círculo con Laura, Marta y Javier</p>
            <div className="mt-3 rounded-full bg-primary py-2 text-center text-xs font-semibold text-primary-foreground">Unirme a la videollamada</div>
          </Card>
        </Phone>
      </div>
    </div>
  </S>
)

const Logos = () => LOGOS.length === 0 ? null : (
  <S className="!py-10">
    <p className="mb-5 text-center text-sm font-semibold text-muted">Escuelas fundadoras de OneAura</p>
    <div className="flex flex-wrap items-center justify-center gap-8">{LOGOS.map(l => <img key={l.name} src={l.src} alt={l.name} className="h-10 grayscale transition hover:grayscale-0" />)}</div>
  </S>
)

const Problema = () => (
  <S>
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div>
        <H2>El último día de curso empiezas a perder a tus alumnos.</H2>
        <p className="text-lg">Les das unas cuantas prácticas y les animas a seguir quedando. La intención es buena, pero en unas semanas el grupo de WhatsApp se apaga y cada uno vuelve a su vida.</p>
      </div>
      <Surface variant="tertiary" className="mx-auto w-full max-w-xs text-muted">
        <p className="mb-3 text-center text-xs font-semibold">Prácticas Promoción Marzo ✨</p>
        <div className="ml-auto max-w-[85%] rounded-2xl bg-white p-3 text-sm">¿Alguien quiere practicar esta semana? 🙏<p className="mt-1 text-right text-[10px]">hace 3 semanas · sin respuesta</p></div>
      </Surface>
    </div>
    <div className="mt-12 grid gap-5 md:grid-cols-3">
      {[['Se quedan sin con quién practicar.', 'La familia y los amigos se acaban pronto.'], ['Buscan prácticas fuera de tu escuela.', 'Acaban en grupos de redes sociales, con desconocidos y sin ningún criterio.'], ['El vínculo se rompe.', 'Cuando vuelvan a formarse, puede que no sea contigo.']].map(([t, d]) => (
        <Card key={t}>
          <Card.Header>
            <Card.Title className="text-base text-primary">{t}</Card.Title>
            <Card.Description className="text-sm">{d}</Card.Description>
          </Card.Header>
        </Card>
      ))}
    </div>
  </S>
)

const Coste = () => (
  <S className="bg-primary text-center text-primary-foreground">
    <H2>Lo que no aparece en tus cuentas</H2>
    <p className="mx-auto max-w-2xl text-lg opacity-90">Tú has hecho lo más difícil, que es formarles. Pero entre una formación y la siguiente, esos alumnos no te aportan nada, y algunos no volverán. Cada promoción que termina es una comunidad que se pierde.</p>
    <p className="mx-auto mt-10 max-w-3xl text-3xl font-extrabold leading-tight text-secondary md:text-5xl">Ingresas cuando hay curso. El resto de meses, cero.</p>
  </S>
)

const Solucion = () => (
  <S>
    <H2>OneAura: la práctica continua de tu escuela, en piloto automático</H2>
    <div className="grid gap-6 md:grid-cols-3">
      {[['▣', 'Tu propia app', 'Con el nombre y el logo de tu escuela. Tus alumnos practican contigo, no en cualquier otro sitio.'], ['€', 'Tus propias suscripciones', 'Tú decides el precio y cobras cada mes. Sin desarrollar nada ni gestionar pagos.'], ['◷', 'Práctica organizada sola', 'Franjas semanales, círculos de práctica, emparejamiento automático y videollamada integrada.']].map(([i, t, d]) => (
        <div key={t}><div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-soft text-xl text-primary">{i}</div><h3 className="mb-1 text-lg font-bold text-primary">{t}</h3><p>{d}</p></div>
      ))}
    </div>
  </S>
)

const Como = () => (
  <S id="como" className="bg-soft">
    <H2 className="text-primary">En marcha en 3 pasos</H2>
    <ol className="grid gap-5 md:grid-cols-3">
      {[['Configuramos tu escuela.', 'Tu logo, tu precio y tus franjas de práctica. Lo hacemos contigo en una sesión.'], ['Lo presentas al terminar el curso.', 'Tus alumnos se suscriben como la forma oficial de seguir practicando con tu escuela.'], ['Practican cada semana y tú cobras cada mes.', 'Nosotros nos ocupamos de los horarios, las parejas y la tecnología.']].map(([t, d], i) => (
        <li key={t}>
          <Card>
            <span className="mb-3 grid h-10 w-10 place-items-center rounded-full bg-primary font-bold text-primary-foreground">{i + 1}</span>
            <Card.Header>
              <Card.Title className="text-base">{t}</Card.Title>
              <Card.Description className="text-sm">{d}</Card.Description>
            </Card.Header>
          </Card>
        </li>
      ))}
    </ol>
  </S>
)

const Alumnos = () => (
  <S className="text-center"><div className="mx-auto max-w-2xl">
    <H2 className="text-primary">Tus alumnos te lo agradecerán</H2>
    <p className="text-lg">Práctica real cada semana, con compañeros de su nivel y dentro de la escuela en la que confían. Sin buscar desconocidos en redes ni organizar nada.</p>
  </div></S>
)

const Modelo = () => (
  <S className="bg-soft text-center"><div className="mx-auto max-w-2xl">
    <H2 className="text-primary">Solo ganamos si tú ganas</H2>
    <p className="mb-8 text-lg">Sin cuota mensual ni coste de alta. Compartimos cada suscripción. Si tus alumnos no se suscriben, no pagas nada.</p>
    <Card className="text-left">
      <p className="mb-3 font-semibold">Suscripción de 16 €</p>
      <div className="flex overflow-hidden rounded-full text-sm font-semibold"><div className="w-1/2 bg-primary p-3 text-primary-foreground">8 € para tu escuela</div><div className="w-1/2 bg-secondary p-3 text-secondary-foreground">8 € para OneAura</div></div>
      <p className="mt-2 text-xs text-muted">OneAura: tecnología, pagos, soporte</p>
    </Card>
  </div></S>
)

const Fundadoras = () => (
  <S id="fundadores">
    <Surface variant="secondary" className="grid items-center gap-10 !p-8 md:grid-cols-2 md:!p-12">
      <div>
        <H2 className="text-primary">Buscamos 10 escuelas fundadoras</H2>
        <p className="mb-4">Las primeras escuelas tendrán condiciones que no volveremos a ofrecer:</p>
        <ul className="mb-6 space-y-2">{['Configuración de tu app sin coste', 'Condiciones especiales durante los primeros meses', 'Acompañamiento personal en el lanzamiento', 'Voz en las próximas funciones de OneAura'].map(x => <li key={x}><span className="mr-2 text-primary">✓</span>{x}</li>)}</ul>
        <p className="mb-5 font-bold text-primary">Quedan {SLOTS_LEFT} plazas</p>
        <BookingButton>Solicitar mi plaza de fundadora</BookingButton>
      </div>
      <div className="mx-auto grid h-56 w-56 place-items-center rounded-full bg-primary text-center text-primary-foreground shadow-sanctuary">
        <div><p className="text-3xl text-secondary">✦</p><p className="px-4 font-bold">Escuela Fundadora</p><p className="text-sm text-secondary">OneAura 2026</p></div>
      </div>
    </Surface>
  </S>
)

const Fundador = () => (
  <S><div className="mx-auto grid max-w-3xl items-center gap-8 md:grid-cols-[160px_1fr]">
    <div className="grid h-40 w-40 place-items-center rounded-full bg-neutral-surface text-center text-xs text-muted">[Tu foto real]</div>
    <div>
      <H2 className="text-primary">Por qué creé OneAura</H2>
      <p className="text-lg">Vi una y otra vez lo mismo: alumnos con talento que dejaban de practicar al terminar su formación porque no tenían con quién. Creé OneAura para que eso no vuelva a pasar, y para que las escuelas que forman a esos alumnos puedan seguir acompañándolos.</p>
      <p className="mt-3 font-semibold">[Tu nombre y firma]</p>
    </div>
  </div></S>
)

const Faq = () => (
  <S><div className="mx-auto max-w-3xl">
    <H2 className="text-primary">Preguntas frecuentes</H2>
    <Accordion>
      {faq.map(([q, a], i) => (
        <Accordion.Item key={i} id={String(i)}>
          <Accordion.Heading><Accordion.Trigger>{q}<Accordion.Indicator /></Accordion.Trigger></Accordion.Heading>
          <Accordion.Panel><Accordion.Body>{a}</Accordion.Body></Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  </div></S>
)

const BookingSection = () => (
  <S id="reserva" className="bg-primary text-center text-primary-foreground">
    <H2>Tus alumnos ya quieren seguir practicando. Dales dónde hacerlo.</H2>
    <p className="mb-8 text-lg opacity-90">Reserva 20 minutos. Te enseñamos la app y calculamos juntos lo que puede generar tu escuela.</p>
    <div className="mx-auto max-w-3xl overflow-hidden rounded-4xl bg-white text-foreground">
      {BOOKING_URL ? <iframe title="Reservar demo" src={BOOKING_URL} className="h-[680px] w-full border-0" />
        : <div className="p-12 text-sm text-muted">[Aquí va el calendario de Calendly / Cal.com: define <code>BOOKING_URL</code> en <code>src/content.js</code>]</div>}
    </div>
  </S>
)

const Footer = () => (
  <footer className="px-5 pb-10 pt-8 text-sm text-muted">
    <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
      <span>© 2026 OneAura</span>
      <nav className="flex flex-wrap gap-5"><a href="#">Aviso legal</a><a href="#">Privacidad</a><a href="#">Cookies</a><a href="mailto:hola@oneaura.app">Contacto</a><a href="#">WhatsApp</a><a href="#">Instagram</a><a href="#">LinkedIn</a></nav>
    </div>
  </footer>
)

export default function App() {
  return <><Nav /><Hero /><Logos /><Problema /><Coste /><Solucion /><Como /><S id="calculadora"><H2 className="text-primary">¿Cuánto puede ganar tu escuela?</H2><Calculator /></S><Alumnos /><Modelo /><Fundadoras /><Fundador /><Faq /><BookingSection /><Footer /></>
}
