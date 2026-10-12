import { useState } from 'react'
import { Button, Label, Slider } from '@heroui/react'
import { PRICE } from './content'
// Sustituye este componente por tu calculadora si ya tienes una en React.
// Fórmula del documento: alumnos × formaciones × % × (precio ÷ 2)
const fields = [
  ['a', 'Alumnos por formación', { minValue: 10, maxValue: 200, step: 5 }],
  ['f', 'Formaciones al año', { minValue: 1, maxValue: 12, step: 1 }],
  ['p', 'Alumnos que se suscriben', { minValue: 0.1, maxValue: 0.9, step: 0.01, formatOptions: { style: 'percent' } }],
  ['pr', 'Precio mensual', { minValue: 10, maxValue: 50, step: 1, formatOptions: { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 } }],
]
export default function Calculator() {
  const [v, setV] = useState({ a: 30, f: 4, p: 0.4, pr: PRICE })
  const total = Math.round(v.a * v.f * v.p * (v.pr / 2))
  return (
    <div className="glass-card grid gap-8 rounded-4xl bg-white p-6 md:grid-cols-2 md:p-8">
      <div className="space-y-6">
        {fields.map(([k, label, props]) => (
          <Slider key={k} value={v[k]} onChange={x => setV({ ...v, [k]: Array.isArray(x) ? x[0] : x })} {...props}>
            <Label>{label}</Label>
            <Slider.Output />
            <Slider.Track><Slider.Fill /><Slider.Thumb /></Slider.Track>
          </Slider>
        ))}
      </div>
      <div className="flex flex-col justify-center gap-2 rounded-3xl bg-primary p-6 text-primary-foreground">
        <p className="text-sm opacity-85">Ingresos mensuales para tu escuela al cabo de un año</p>
        <p className="text-5xl font-extrabold tabular-nums">{total.toLocaleString('es-ES')} €</p>
        <p className="text-sm opacity-85">Ingresos recurrentes de alumnos que, sin OneAura, ya habrías perdido.</p>
        <Button variant="secondary" className="mt-4" onPress={() => document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' })}>Quiero verlo con mis números → Reservar demo</Button>
      </div>
      <p className="text-xs text-muted md:col-span-2">Estimación orientativa. Supone que nadie se da de baja. Los resultados dependen de cada escuela.</p>
    </div>
  )
}
