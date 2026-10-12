import { useState } from 'react'
import { Button, Label, Slider } from '@heroui/react'
import { COMMISSION, PAYMENT_FEE, PRICE } from './content'
const fmt = n => n.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
// Sustituye este componente por tu calculadora si ya tienes una en React.
// Fórmula: alumnos × formaciones × % × (precio − comisión OneAura − coste de pasarela)
const fields = [
  ['a', 'Alumnos por formación', { minValue: 10, maxValue: 200, step: 5 }],
  ['f', 'Formaciones al año', { minValue: 1, maxValue: 12, step: 1 }],
  ['p', 'Alumnos que se suscriben', { minValue: 0.1, maxValue: 0.9, step: 0.01, formatOptions: { style: 'percent' } }],
  ['pr', 'Precio de suscripción mensual', { minValue: 10, maxValue: 50, step: 1, formatOptions: { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 } }],
]
export default function Calculator() {
  const [v, setV] = useState({ a: 30, f: 4, p: 0.3, pr: PRICE })
  const net = v.pr - COMMISSION - PAYMENT_FEE
  const total = Math.round(v.a * v.f * v.p * net)
  return (
    <div className="glass-card grid gap-8 rounded-3xl bg-white p-6 md:grid-cols-2 md:p-8">
      <div className="space-y-5">
        {fields.map(([k, label, props]) => (
          <Slider key={k} value={v[k]} onChange={x => setV({ ...v, [k]: Array.isArray(x) ? x[0] : x })} {...props}>
            <Label>{label}</Label>
            <Slider.Output />
            <Slider.Track><Slider.Fill /><Slider.Thumb /></Slider.Track>
          </Slider>
        ))}
      </div>
      <div className="flex flex-col justify-center gap-2 rounded-2xl bg-primary p-5 text-primary-foreground">
        <p className="text-4xl font-bold tabular-nums">{total.toLocaleString('es-ES')} €</p>
        <p className="text-sm opacity-85">Ingresos recurrentes de alumnos que, sin OneAura, ya habrías perdido.</p>
        <p className="text-xs opacity-80">{v.pr} € − Gastos y comisiones = {fmt(net)} € para tu escuela.</p>
        <Button variant="secondary" size="sm" className="mt-3 h-auto min-h-9 w-full whitespace-normal py-2 text-center" onPress={() => document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' })}>Quiero verlo con mis números → Reservar demo</Button>
      </div>
      <p className="text-xs text-muted md:col-span-2">Estimación orientativa. Sin contar las bajas, impuestos y otros factores.</p>
    </div>
  )
}
