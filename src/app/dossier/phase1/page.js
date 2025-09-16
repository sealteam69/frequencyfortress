import PDFCarousel from '@/components/pdfcarousel'

export default function Phase1Page() {
  return (
    <>
      <PDFCarousel
        title="📁 Phase I Packet"
        files={[
          { file: '01_seal_team_69_frequency_fortress_christed_investment_packet_v1_3.pdf', title: '01 Seal Team 69 Frequency Fortress Christed Investment Packet' },
          { file: '02_christed_resource_blueprint_phase_1.pdf', title: '02 Christed Resource Blueprint' },
          // ...
        ]}
      />
      <PDFCarousel
        title="📜 Addendums & Legal"
        files={[
          { file: 'citadel_addendum_mission_housing_and_infrastructure.pdf', title: '🏠 Citadel Addendum – Housing + Infra' },
          // ...
        ]}
      />
      <PDFCarousel
        title="🌐 Standalone Briefs"
        files={[
          { file: 'christed_override_one_pager.pdf', title: '⚡ Christed Override – One Pager' },
          { file: 'public_mission_brief.pdf', title: '🛰️ Public Mission Brief' },
        ]}
      />
    </>
  )
}