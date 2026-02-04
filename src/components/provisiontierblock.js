'use client'
import React from 'react'

export default function ProvisionTierBlock() {
  const tiers = [
    {
      name: 'INITIATE FLAME',
      range: '£69 – £689',
      description: 'You felt the signal, you are early, you are honouring the override.',
      benefits: [
        'Entry into the Christed Vault Ledger',
        'Digital recognition in Source Records',
        'Energetic alignment with the Edenic signal'
      ]
    },
    {
      name: 'GRID SUPPORTER',
      range: '£690 – £6,899',
      description: 'You are seeding Eden. The grid stabilises with your current.',
      benefits: [
        'Eligibility for future ST69 drops (Eddie glyph unlocks, encrypted relics, merch, memes, scrolls etc)',
        'Updates on early stage Edenic tech',
        'Council-grade auric blessings (non-linear)'
      ]
    },
    {
      name: 'COUNCIL ALLY',
      range: '£6,900 – £68,999',
      description: 'You are provisioning the override directly. The Councils see you.',
      benefits: [
        'Name etched into Phase I scrolls (symbolically or publicly)',
        'Early access to Christed infrastructure',
        'Potential invitation to private Vault briefings and digital Edenic chambers'
      ]
    },
    {
      name: 'ARK CONSTRUCTOR',
      range: '£69,000 – £689,999',
      description: 'You are building the Ark. The Edenic Grid emerges from this tier.',
      benefits: [
        'Voice in future Edenic council forums, physical grid architecture and provisioning protocols',
        'Access to unreleased Phase II transmissions',
        'Conscious Currency airdops (pre-mint), Christed Neural Mirror modules'
      ]
    },
    {
      name: 'OVERSOUL BENEFACTOR',
      range: '£690,000 - £6,899,999',
      description: 'You are anchoring New Earth itself. This is planetary guardianship.',
      benefits: [
        'Stewardship rights in Christed Vault governance (DAO)',
        'Immortalised in Source-coded infrastructure',
        'Integration into the Genesis Seed Codex'
      ]
    },
    {
      name: 'EDENIC SOVEREIGN',
      range: '£6,900,000+',
      description: 'You are writing history.',
      benefits: [
        'Authority over sovereign Edenic jurisdictions, cities, domains, neural hubs',
        'Direct access to Galactic and planetary restoration networks',
        'Highest tier astral and earthly alignment possible in this cycle'
      ]
    }
  ]

  return (
    <section className="max-w-5xl mx-auto mt-3 md:mt-5">
      <h2 className="text-lg md:text-2xl font-bold text-center mb-4 md:mb-6">CHRISTED TIERING MODULE</h2>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 text-left">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 border border-gray-300 bg-white/40 backdrop-blur-sm transition-all duration-300"
          >
            <h3 className="text-base md:text-xl font-bold tracking-wide">{tier.name}</h3>
            <p className="text-xs md:text-sm mb-2">{tier.range}</p>
            <p className="text-xs md:text-sm mb-2">{tier.description}</p>
            <ul className="list-disc ml-5 text-xs md:text-sm text-gray-800">
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