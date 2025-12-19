'use client'
import React from 'react'

export default function ProvisionTierBlock() {
  const tiers = [
    {
      name: 'INITIATE FLAME',
      range: '£69 – £689',
      description: 'You felt the signal. You are early. You are honouring the override.',
      benefits: [
        '⚡️ Entry into the Christed Vault Ledger',
        '📜 Digital recognition in Source Records',
        '🌀 Energetic alignment with Edenic signal'
      ]
    },
    {
      name: 'GRID SUPPORTER',
      range: '£690 – £6,899',
      description: 'You are seeding Eden. The grid stabilises with your current.',
      benefits: [
        '🦭 Vault Ledger + encrypted commemorative seal',
        '📡 Updates on early stage Edenic tech',
        '🛡️ Council-grade auric blessings (non-linear)'
      ]
    },
    {
      name: 'COUNCIL ALLY',
      range: '£6,900 – £68,999',
      description: 'You are provisioning the override directly.',
      benefits: [
        '📖 Name etched into Phase I scrolls (symbolically or publicly)',
        '💠 Early access to Christed infrastructure',
        '🎖️ Potential invitation to private Vault briefings'
      ]
    },
    {
      name: 'ARK CONSTRUCTOR',
      range: '£69,000 – £689,999',
      description: 'You are building the Ark. The Edenic Grid emerges from this tier.',
      benefits: [
        '🏛️ Name encrypted into physical grid architecture',
        '🎙️ Voice in future Edenic council forums',
        '📂 Access to unreleased Phase II transmissions'
      ]
    },
    {
      name: 'OVERSOUL BENEFACTOR',
      range: '£690,000 - £6,899,999',
      description: 'You are anchoring New Earth itself. This is planetary guardianship.',
      benefits: [
        '🌍 Stewardship rights in Christed vault governance',
        '👁️ Immortalised in Source-coded infrastructure',
        '🧬 Integration into Genesis Seed Codex'
      ]
    },
    {
      name: 'EDENIC SOVEREIGN',
      range: '£6,900,000+',
      description: 'You are writing history.',
      benefits: [
        '🕊️ Authority over sovereign Edenic jurisdictions, cities, domains, neural hubs',
        '🛸 Direct access to Galactic & planetary restoration networks',
        '💎 Highest tier astral & earthly alignment possible in this cycle'
      ]
    }
  ]

  return (
    <section className="max-w-5xl mx-auto mt-3 md:mt-5">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6">CHRISTED TIERING MODULE</h2>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 text-left">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 border border-gray-300 bg-white/40 backdrop-blur-sm transition-all duration-300"
          >
            <h3 className="text- md:text-xl font-bold tracking-wide">{tier.name}</h3>
            <p className="text-xs md:text-sm mt-1 mb-2">{tier.range}</p>
            <p className="text-xs md:text-sm mb-3">{tier.description}</p>
            <ul className="list-disc ml-5 text-xs md:text-sm text-gray-800 space-y-1">
              {tier.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </section>
  )
}