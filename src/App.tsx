import { useState } from 'react'
import daniPhoto from './assets/dani.jpg'
import dogHeroLogo from './assets/doghero-logo.png'

// ─── CONFIG ──────────────────────────────────────────────────────────────────
// Edit these values to personalize the site
const WHATSAPP_NUMBER = '`https://wa.me/5511933559384?text=${encodeURIComponent(message)}`' // e.g. 5511999999999
const INSTAGRAM_HANDLE = 'seu_instagram'
const DOG_HERO_PROFILE_URL = 'https://servicos.petlove.com.br/prestador/tia-dani-1'
const REGION_NEIGHBORHOODS = 'Pinheiros, Vila Madalena, Alto de Pinheiros, Perdizes, Lapa e bairros próximos'

function whatsappLink(message: string) {
  return `https://wa.me/${5511933559384}?text=${encodeURIComponent(message)}`
}

// ─── ICONS ───────────────────────────────────────────────────────────────────
function IconPaw() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M8.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM5 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm14 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-2.5 1c0 2.76-2.02 5-4.5 5s-4.5-2.24-4.5-5c0-1.5.75-2.5 2-3l2.5-1.5 2.5 1.5c1.25.5 2 1.5 2 3Z"/>
    </svg>
  )
}

function IconWhatsapp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/>
    </svg>
  )
}

function IconCheck() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  )
}

function IconChevron({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
    </svg>
  )
}

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  )
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  )
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre mim', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Dog Hero', href: '#dog-hero' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#D8D0C0]">
      <nav className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 text-[#5C7A5A]">
          <IconPaw />
          <span className="font-['Lora'] font-semibold text-[#2C2A26] text-base tracking-tight">Dani Dog Walker</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-[#7A7268] hover:text-[#5C7A5A] transition-colors font-['Outfit']">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink('Olá, Dani! Gostaria de saber mais sobre seus serviços.')}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#5C7A5A] text-white text-sm px-4 py-2 rounded-full hover:bg-[#4d6849] transition-colors font-['Outfit']"
        >
          <IconWhatsapp />
          WhatsApp
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-[#2C2A26]">
          {open ? <IconX /> : <IconMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FAF8F5] border-t border-[#D8D0C0] px-5 pb-6 pt-4">
          <ul className="flex flex-col gap-4">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-[#2C2A26] hover:text-[#5C7A5A] transition-colors font-['Outfit']"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink('Olá, Dani! Gostaria de saber mais sobre seus serviços.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 bg-[#5C7A5A] text-white text-sm px-4 py-3 rounded-full hover:bg-[#4d6849] transition-colors font-['Outfit']"
          >
            <IconWhatsapp />
            Falar pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-[#d6cfc2]">
        <img
          src="https://images.unsplash.com/photo-1758787413157-9a2ec56433c6?w=1400&h=900&fit=crop&auto=format"
          alt="Pessoa passeando com cachorro em parque ensolarado"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C2A26]/60 via-[#2C2A26]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 w-full py-20">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#8BA888]" />
            <span className="text-[#8BA888] text-sm font-['Outfit'] tracking-widest uppercase">Zona Oeste · São Paulo</span>
          </div>
          <h1 className="font-['Lora'] text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.15] mb-6">
            Passeios, cuidados e hospedagem com carinho e responsabilidade.
          </h1>
          <p className="text-white/85 text-lg font-['Outfit'] font-light leading-relaxed mb-10">
            Cuidados para o seu cão com uma rotina segura, divertida e pensada para as necessidades de cada pet.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#servicos"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[#2C2A26] text-sm font-['Outfit'] font-medium rounded-full hover:bg-[#F5F0E8] transition-colors"
            >
              Conheça meus serviços
            </a>
            <a
              href={whatsappLink('Olá, Dani! Gostaria de conversar sobre os cuidados do meu cão.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#5C7A5A] text-white text-sm font-['Outfit'] font-medium rounded-full hover:bg-[#4d6849] transition-colors"
            >
              <IconWhatsapp />
              Fale comigo pelo WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <div className="w-px h-8 bg-white/40" />
        <span className="text-xs font-['Outfit'] tracking-widest uppercase">role</span>
      </div>
    </section>
  )
}

function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#D8D0C0]">
              <img
                src={daniPhoto}
                alt="Dani, dog walker na Zona Oeste de São Paulo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-3 md:-right-8 bg-[#5C7A5A] text-white rounded-2xl p-5 shadow-lg max-w-[180px]">
              <div className="text-3xl font-['Lora'] font-bold leading-none mb-1">+</div>
              <div className="text-sm font-['Outfit'] font-light leading-snug">Estudante de Medicina Veterinária</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#5C7A5A]" />
              <span className="text-[#5C7A5A] text-sm font-['Outfit'] tracking-widest uppercase">Sobre mim</span>
            </div>
            <h2 className="font-['Lora'] text-3xl md:text-4xl font-semibold text-[#2C2A26] leading-snug mb-6">
              Oi! Eu sou a Dani.
            </h2>
            <div className="space-y-4 text-[#4A4640] font-['Outfit'] font-light text-base leading-relaxed">
              <p>
                Trabalho com passeios e cuidados para cães, oferecendo uma rotina de qualidade, segurança e atenção às necessidades de cada pet. Além dos passeios, também ofereço pet sitter e hospedagem familiar na minha casa.
              </p>
              <p>
                Meu objetivo é proporcionar ao seu cão momentos de diversão, gasto de energia e bem-estar — enquanto você fica tranquilo sabendo que ele está sendo cuidado com responsabilidade e carinho.
              </p>
              <p>
                Também sou estudante de Medicina Veterinária, o que faz parte da minha formação e do meu interesse pelo bem-estar e comportamento dos animais.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Passeios', 'Pet Sitter', 'Hospedagem familiar', 'Zona Oeste SP'].map(tag => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-[#EDE8DE] text-[#5C7A5A] text-sm font-['Outfit'] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface Service {
  title: string
  badge?: string
  duration: string
  price: string
  description: string
  extras?: string[]
  whatsappMsg: string
  cta: string
  highlight?: boolean
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className={`relative flex flex-col rounded-2xl p-7 border transition-shadow hover:shadow-md ${
      service.highlight
        ? 'bg-[#5C7A5A] border-[#5C7A5A] text-white'
        : 'bg-[#F5F0E8] border-[#D8D0C0] text-[#2C2A26]'
    }`}>
      {service.badge && (
        <span className={`absolute top-5 right-5 text-xs font-['Outfit'] px-3 py-1 rounded-full ${
          service.highlight ? 'bg-white/20 text-white' : 'bg-[#5C7A5A] text-white'
        }`}>
          {service.badge}
        </span>
      )}
      <div className="mb-4">
        <div className={`text-xs font-['Outfit'] tracking-widest uppercase mb-2 ${service.highlight ? 'text-white/70' : 'text-[#7A7268]'}`}>
          {service.duration}
        </div>
        <h3 className={`font-['Lora'] text-xl font-semibold leading-snug ${service.highlight ? 'text-white' : 'text-[#2C2A26]'}`}>
          {service.title}
        </h3>
      </div>

      <div className={`text-2xl font-['Lora'] font-bold mb-4 ${service.highlight ? 'text-white' : 'text-[#5C7A5A]'}`}>
        {service.price}
      </div>

      <p className={`text-sm font-['Outfit'] font-light leading-relaxed flex-1 mb-4 ${service.highlight ? 'text-white/85' : 'text-[#4A4640]'}`}>
        {service.description}
      </p>

      {service.extras && (
        <ul className="mb-5 space-y-1.5">
          {service.extras.map(e => (
            <li key={e} className={`flex items-start gap-2 text-sm font-['Outfit'] ${service.highlight ? 'text-white/80' : 'text-[#4A4640]'}`}>
              <span className={`mt-0.5 shrink-0 ${service.highlight ? 'text-white' : 'text-[#5C7A5A]'}`}><IconCheck /></span>
              {e}
            </li>
          ))}
        </ul>
      )}

      <a
        href={whatsappLink(service.whatsappMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-['Outfit'] font-medium transition-colors ${
          service.highlight
            ? 'bg-white text-[#5C7A5A] hover:bg-[#F5F0E8]'
            : 'bg-[#5C7A5A] text-white hover:bg-[#4d6849]'
        }`}
      >
        <IconWhatsapp />
        {service.cta}
      </a>
    </div>
  )
}

function Servicos() {
  const services: Service[] = [
    {
      title: 'Passeio Avulso',
      duration: '1 hora por passeio',
      price: 'R$ 50',
      description: 'Uma opção para quem precisa de um passeio pontual, mantendo o cão ativo, entretido e com uma rotina de passeio de qualidade.',
      whatsappMsg: 'Olá, Dani! Gostaria de agendar um passeio avulso de 1 hora para o meu cão.',
      cta: 'Agendar passeio',
    },
    {
      title: 'Plano Mensal · 1 Hora',
      badge: 'Popular',
      duration: '1h · seg–sex · 5×/semana',
      price: 'R$ 490/mês',
      description: 'Para cães que precisam de uma rotina fixa de passeios durante a semana.',
      extras: ['5 passeios por semana', 'Segunda a sexta-feira', '1 hora por passeio', 'Atualizações para o tutor'],
      whatsappMsg: 'Olá, Dani! Tenho interesse no Plano Mensal de 1 hora (R$ 490/mês). Podemos conversar?',
      cta: 'Quero o plano',
      highlight: true,
    },
    {
      title: 'Plano Mensal · 2 Horas',
      duration: '2h · seg–sex · 5×/semana',
      price: 'R$ 690/mês',
      description: 'Para cães com mais energia ou que se beneficiam de uma rotina mais longa de atividade e exploração.',
      extras: ['5 passeios por semana', 'Segunda a sexta-feira', '2 horas por passeio', 'Atualizações para o tutor'],
      whatsappMsg: 'Olá, Dani! Tenho interesse no Plano Mensal de 2 horas (R$ 690/mês). Podemos conversar?',
      cta: 'Quero o plano',
    },
    {
      title: 'Pet Sitter',
      duration: 'Visita de 1 hora · valor por cão',
      price: 'R$ 60 / visita',
      description: 'Cuidados na casa do tutor para manter o pet confortável e sua rotina preservada enquanto você estiver fora.',
      extras: ['Alimentação e água', 'Companhia e brincadeiras', 'Cuidados combinados', 'Atualizações para o tutor'],
      whatsappMsg: 'Olá, Dani! Gostaria de saber mais sobre o serviço de Pet Sitter (R$ 60/visita).',
      cta: 'Contratar pet sitter',
    },
    {
      title: 'Hospedagem Familiar',
      duration: 'Por diária · ambiente residencial',
      price: 'Consulte valores',
      description: 'Hospedagem na minha própria casa, em ambiente residencial e familiar, com cuidados durante a estadia e rotina adaptada às necessidades do pet.',
      extras: ['Ambiente familiar e acolhedor', 'Rotina adaptada ao pet', 'Cuidados durante toda a estadia', 'Atualizações regulares'],
      whatsappMsg: 'Olá, Dani! Gostaria de consultar disponibilidade e valores para hospedagem familiar.',
      cta: 'Consultar disponibilidade',
    },
  ]

  return (
    <section id="servicos" className="py-24 bg-[#EDE8DE]">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#5C7A5A]" />
            <span className="text-[#5C7A5A] text-sm font-['Outfit'] tracking-widest uppercase">Serviços</span>
            <div className="h-px w-8 bg-[#5C7A5A]" />
          </div>
          <h2 className="font-['Lora'] text-3xl md:text-4xl font-semibold text-[#2C2A26] leading-snug">
            O que ofereço para o seu cão
          </h2>
          <p className="mt-4 text-[#7A7268] font-['Outfit'] font-light max-w-xl mx-auto">
            Cada serviço é pensado para atender as necessidades do seu pet com atenção, segurança e carinho.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 3).map(s => <ServiceCard key={s.title} service={s} />)}
        </div>
        <div className="grid sm:grid-cols-2 gap-5 mt-5">
          {services.slice(3).map(s => <ServiceCard key={s.title} service={s} />)}
        </div>
      </div>
    </section>
  )
}

function ComoFunciona() {
  const steps = [
    { n: '01', title: 'Entre em contato', text: 'Fale comigo pelo WhatsApp e conte um pouco sobre o seu cão — porte, temperamento, rotina e necessidades.' },
    { n: '02', title: 'Conversamos juntos', text: 'Conversamos sobre a rotina do pet, horários disponíveis e o serviço mais adequado para vocês.' },
    { n: '03', title: 'Realizo o serviço', text: 'Realizo o passeio ou cuidado conforme o combinado, sempre com atenção e responsabilidade.' },
    { n: '04', title: 'Você fica por dentro', text: 'Você recebe atualizações durante o atendimento para ficar tranquilo sabendo que tudo corre bem.' },
  ]

  return (
    <section id="como-funciona" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#5C7A5A]" />
            <span className="text-[#5C7A5A] text-sm font-['Outfit'] tracking-widest uppercase">Como funciona</span>
            <div className="h-px w-8 bg-[#5C7A5A]" />
          </div>
          <h2 className="font-['Lora'] text-3xl md:text-4xl font-semibold text-[#2C2A26]">
            Simples e transparente
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-[calc(100%-0px)] w-full h-px bg-[#D8D0C0] z-0" style={{ left: 'calc(50% + 20px)', width: 'calc(100% - 20px)' }} />
              )}
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#5C7A5A] text-white flex items-center justify-center font-['Lora'] font-semibold text-sm mb-5">
                  {i + 1}
                </div>
                <h3 className="font-['Lora'] text-lg font-semibold text-[#2C2A26] mb-3">{s.title}</h3>
                <p className="text-[#7A7268] font-['Outfit'] font-light text-sm leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Diferenciais() {
  const items = [
    'Atendimento personalizado para cada pet',
    'Passeios recreativos e educativos',
    'Comunicação constante com o tutor',
    'Experiência prática com cães',
    'Estudante de Medicina Veterinária',
    'Atendimento na Zona Oeste de São Paulo',
  ]

  return (
    <section className="py-24 bg-[#5C7A5A]">
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-white/50" />
              <span className="text-white/70 text-sm font-['Outfit'] tracking-widest uppercase">Por que me escolher</span>
            </div>
            <h2 className="font-['Lora'] text-3xl md:text-4xl font-semibold text-white leading-snug mb-4">
              Cuidado que vai além do passeio
            </h2>
            <p className="text-white/80 font-['Outfit'] font-light leading-relaxed">
              Cada atendimento é tratado com atenção individual, respeitando o ritmo e as necessidades de cada cão.
            </p>
          </div>
          <ul className="space-y-4">
            {items.map(item => (
              <li key={item} className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <IconCheck />
                </div>
                <span className="text-white/90 font-['Outfit'] font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function DogHero() {
  return (
    <section id="dog-hero" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-5">
        <div className="bg-[#F5F0E8] rounded-2xl p-10 md:p-14 border border-[#D8D0C0] flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#5C7A5A]" />
              <span className="text-[#5C7A5A] text-sm font-['Outfit'] tracking-widest uppercase">Dog Hero</span>
            </div>
            <h2 className="font-['Lora'] text-2xl md:text-3xl font-semibold text-[#2C2A26] mb-4 leading-snug">
              Também estou na Dog Hero
            </h2>
            <p className="text-[#4A4640] font-['Outfit'] font-light leading-relaxed mb-8">
              Além dos atendimentos particulares, você também pode encontrar meu perfil na Dog Hero e agendar por lá.
            </p>
            <a
              href={DOG_HERO_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#5C7A5A] text-white text-sm font-['Outfit'] font-medium rounded-full hover:bg-[#4d6849] transition-colors"
            >
              Ver meu perfil na Dog Hero
            </a>
          </div>
          <div className="hidden md:block w-48 h-48 rounded-2xl overflow-hidden bg-white shrink-0 flex items-center justify-center p-6">
            <img
              src={dogHeroLogo}
              alt="Logo Dog Hero"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Regiao() {
  return (
    <section className="py-20 bg-[#EDE8DE]">
      <div className="max-w-5xl mx-auto px-5 text-center">
        <IconPaw />
        <h2 className="mt-4 font-['Lora'] text-2xl md:text-3xl font-semibold text-[#2C2A26] mb-3">
          Região atendida
        </h2>
        <p className="text-[#7A7268] font-['Outfit'] font-light max-w-xl mx-auto">
          Atendo cães na Zona Oeste de São Paulo, com foco em{' '}
          <span className="text-[#5C7A5A] font-medium">{REGION_NEIGHBORHOODS}</span>.
        </p>
        <p className="mt-3 text-sm text-[#7A7268] font-['Outfit'] font-light">
          Dúvidas sobre a sua região?{' '}
          <a
            href={whatsappLink('Olá, Dani! Gostaria de saber se você atende na minha região.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5C7A5A] underline underline-offset-2 hover:text-[#4d6849]"
          >
            Entre em contato
          </a>
          .
        </p>
      </div>
    </section>
  )
}

function Depoimentos() {
  return (
  <section id="depoimentos" className="py-24 px-4 bg-[#FAF8F5]">
  {/* Esta é a div que controla a largura. max-w-4xl, max-w-3xl ou max-w-2xl */}
  <div className="max-w-4xl mx-auto">
    
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">O que dizem os tutores</h2>
      <p className="text-gray-600">O que os clientes dizem sobre o cuidado e os passeios.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Depoimento 1 */}
      <div className="bg-gray-50 p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
        <p className="text-gray-700 italic mb-6">
          "A Dani é super pontual e cuidadosa com o Thor. Ele volta sempre cansado e feliz para casa!"
        </p>
        <div>
          <p className="font-semibold text-gray-900">Mariana Silva</p>
          <p className="text-xs text-gray-500">Tutora do Thor (Golden Retriever)</p>
        </div>
      </div>

      {/* Depoimento 2 */}
      <div className="bg-gray-50 p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
        <p className="text-gray-700 italic mb-6">
          "Excelente profissional! Me manda atualizações durante todo o passeio e passa muita segurança."
        </p>
        <div>
          <p className="font-semibold text-gray-900">Carlos Eduardo</p>
          <p className="text-xs text-gray-500">Tutor do Mel (Spitz Alemão)</p>
        </div>
      </div>

      {/* Depoimento 3 */}
      <div className="bg-gray-50 p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
        <p className="text-gray-700 italic mb-6">
          "O serviço de pet sitter foi salvador nas minhas viagens. Recomendo de olhos fechados!"
        </p>
        <div>
          <p className="font-semibold text-gray-900">Beatriz Souza</p>
          <p className="text-xs text-gray-500">Tutora da Luna (SRD)</p>
        </div>
      </div>
    </div>
    
  </div>
</section>
  )
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const items = [
    {
      q: 'Quais regiões você atende?',
      a: `Atendo na Zona Oeste de São Paulo, com foco em ${REGION_NEIGHBORHOODS}. Se tiver dúvidas sobre a sua região específica, entre em contato para consultar disponibilidade.`,
    },
    {
      q: 'Como funciona o passeio avulso?',
      a: 'O passeio avulso tem duração de 1 hora e pode ser agendado de forma pontual, sem compromisso de plano mensal. É ideal para quem precisa de um passeio ocasional ou quer conhecer o serviço antes de contratar um plano.',
    },
    {
      q: 'Qual a diferença entre o plano de 1h e o de 2h?',
      a: 'Ambos oferecem 5 passeios por semana, de segunda a sexta. A diferença é a duração: o plano de 1h é indicado para cães com necessidade moderada de exercício, enquanto o de 2h é ideal para cães com mais energia ou que se beneficiam de mais tempo de exploração e atividade.',
    },
    {
      q: 'O que inclui o serviço de pet sitter?',
      a: 'A visita de pet sitter dura 1 hora e é realizada na casa do tutor. Pode incluir alimentação, troca de água, companhia, brincadeiras e outros cuidados previamente combinados. O objetivo é manter o pet confortável e a rotina preservada enquanto você está fora.',
    },
    {
      q: 'Como funciona a hospedagem familiar?',
      a: 'O pet fica hospedado na minha própria casa, em ambiente residencial e familiar — não em canil. A rotina é adaptada às necessidades de cada cão. Valores e disponibilidade são consultados individualmente, entre em contato para mais informações.',
    },
    {
      q: 'Você atende cães de qualquer porte?',
      a: 'Entre em contato para consultar disponibilidade e condições de acordo com o porte do seu cão.',
    },
    {
      q: 'Como faço para agendar?',
      a: 'O agendamento é feito pelo WhatsApp. Entre em contato, conte sobre o seu cão e conversamos sobre horários e o serviço mais adequado para vocês.',
    },
    {
      q: 'Você é veterinária?',
      a: 'Não. Sou estudante de Medicina Veterinária, o que faz parte da minha formação e do meu interesse pelo bem-estar e comportamento dos animais. Não ofereço atendimento veterinário.',
    },
  ]

  return (
    <section className="py-24 bg-[#EDE8DE]">
      <div className="max-w-2xl mx-auto px-5">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#5C7A5A]" />
            <span className="text-[#5C7A5A] text-sm font-['Outfit'] tracking-widest uppercase">Dúvidas frequentes</span>
            <div className="h-px w-8 bg-[#5C7A5A]" />
          </div>
          <h2 className="font-['Lora'] text-3xl font-semibold text-[#2C2A26]">FAQ</h2>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="bg-[#FAF8F5] border border-[#D8D0C0] rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
              >
                <span className="font-['Outfit'] font-medium text-[#2C2A26] text-sm">{item.q}</span>
                <span className="shrink-0 text-[#5C7A5A]"><IconChevron open={openIdx === i} /></span>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-5">
                  <p className="text-[#4A4640] font-['Outfit'] font-light text-sm leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contato() {
  return (
    <section id="contato" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="hidden md:block">
            <div className="aspect-square rounded-2xl overflow-hidden bg-[#D8D0C0]">
              <img
                src="https://images.unsplash.com/photo-1680795082050-28f6495af899?w=700&h=700&fit=crop&auto=format"
                alt="Cão durante passeio em trilha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#5C7A5A]" />
              <span className="text-[#5C7A5A] text-sm font-['Outfit'] tracking-widest uppercase">Contato</span>
            </div>
            <h2 className="font-['Lora'] text-3xl md:text-4xl font-semibold text-[#2C2A26] leading-snug mb-4">
              Vamos cuidar do seu melhor amigo?
            </h2>
            <p className="text-[#4A4640] font-['Outfit'] font-light leading-relaxed mb-8">
              Entre em contato para conversar sobre a rotina do seu cão e encontrar o serviço mais adequado para vocês.
            </p>

            <div className="space-y-4">
              <a
                href={whatsappLink('Olá, Dani! Gostaria de saber mais sobre seus serviços para o meu cão.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#5C7A5A] text-white font-['Outfit'] font-medium rounded-full hover:bg-[#4d6849] transition-colors"
              >
                <IconWhatsapp />
                Falar pelo WhatsApp
              </a>
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#F5F0E8] text-[#2C2A26] font-['Outfit'] font-medium rounded-full border border-[#D8D0C0] hover:bg-[#EDE8DE] transition-colors"
              >
                <IconInstagram />
                @{INSTAGRAM_HANDLE}
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-[#D8D0C0]">
              <p className="text-sm text-[#7A7268] font-['Outfit'] font-light">
                Atendo na <span className="text-[#5C7A5A]">Zona Oeste de São Paulo</span> — {REGION_NEIGHBORHOODS}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#2C2A26] text-white/70 py-10">
      <div className="max-w-5xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-['Outfit'] font-light">
        <div className="flex items-center gap-2 text-white">
          <span className="text-[#8BA888]"><IconPaw /></span>
          <span className="font-['Lora'] font-medium">Dani Dog Walker</span>
        </div>
        <p className="text-center">
          Dog walker · Pet Sitter · Hospedagem Familiar · Zona Oeste SP
        </p>
        <p className="text-white/40 text-xs">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <ComoFunciona />
        <Diferenciais />
        <DogHero />
        <Regiao />
        <Depoimentos />
        <FAQ />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}
