// Textos y ajustes editables en un solo sitio.
export const SCHOOLS_URL = 'https://admin.oneaura.app' // enlace de acceso de las escuelas (login)
export const BOOKING_URL = 'https://calendly.com/hello-oneaura/30min' // enlace de Calendly (o Cal.com) para el calendario de reservas
export const TERMS_URL = '#' // enlace a los términos y condiciones; sustitúyelo por la URL real
export const WHATSAPP_URL = 'https://wa.me/447474464848?text=%5BOneAura.app%5D%20Hola' // botón flotante de WhatsApp
import ines from './assets/logos/ines.webp'
import biel from './assets/logos/biel.webp'
import rita from './assets/logos/rita.webp'
import comunicaciones from './assets/logos/comunicaciones.webp'
import iker from './assets/logos/iker.webp'
// Escuelas que ya forman parte de OneAura, en orden de importancia; cls controla el tamaño: todos con la misma altura.
export const LOGOS = [
  { name: 'Inés Justicia', src: ines, cls: 'h-[32px]' },
  { name: 'Biel Giner', src: biel, cls: 'h-[17px]' },
  { name: 'Iker Tzaile', src: iker, cls: 'h-[28px]' },
  { name: 'Comunicaciones de Luz · María Fernanda', src: comunicaciones, cls: 'h-[28px]' },
  { name: 'Rita Klair', src: rita, cls: 'h-[28px]' },
]
export const COMMISSION = 8   // € fijos por suscripción y mes para OneAura
export const PAYMENT_FEE = 0.8 // € aprox. de coste de pasarela de pago por suscripción (se agrupa con OneAura)
export const PRICE = 18       // € por defecto en la calculadora
export const faq = [
  ['¿Me quitará tiempo?', 'No. Lo configuramos contigo y nosotros nos encargamos del soporte de la web app. Tus alumnos también pueden hablar directamente con nosotros si necesitan ayuda.'],
  ['¿Y si tengo pocos alumnos? ¿Encontrarán con quién practicar?', 'Funciona igual con 5 que con 30. Tu escuela puede configurarse para emparejar solo entre tus alumnos o también con estudiantes de la red OneAura, que es lo que recomendamos para el éxito de tus alumnos.'],
  ['¿Y si mis alumnos no quieren pagar?', 'Tú pones el precio. Y si no se suscriben, no pagas nada.'],
  ['¿Qué gastos fijos tiene mi escuela?', 'Ninguno por tu parte: no hay cuota mensual, coste de alta ni permanencia. Los gastos y comisiones son una parte fija de cada suscripción, así que solo existen cuando un alumno se suscribe. Si no hay suscripciones, no pagas nada.'],
  ['¿Cómo y cuándo cobro?', 'Usamos Stripe como pasarela de pago, y Stripe te permite transferir tu dinero a tu banco de forma diaria, semanal o mensual.'],
]
