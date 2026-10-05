import { statSync } from 'node:fs';
import path from 'node:path';

export const folders = [
  { slug: 'christed-primers', title: 'CHRISTED PRIMERS' },
  { slug: 'legal-addendums', title: 'LEGAL & ADDENDUMS' },
  { slug: 'phase-i', title: 'PHASE I' },
];

const documents = [
  { title: 'Christed Override – One-Pager', file: 'christed_override_one_pager.pdf' },
  { title: 'Public Mission Brief', file: 'public_mission_brief.pdf' },
  { title: 'Christed Neural Mirror Primer', file: 'christed_neural_mirror_primer.pdf', folder: 'christed-primers' },
  { title: 'Christed Economics Primer', file: 'christed_economics_primer.pdf', folder: 'christed-primers' },
  { title: 'Provisioners Primer', file: 'provisioners_primer.pdf', folder: 'christed-primers' },
  { title: 'Phase I Provisioning Terms & Public Transparency Statement', file: 'phase_i_provisioning_and_public_transparency_statement.pdf', folder: 'legal-addendums' },
  { title: 'Material Transfer Protocol – Phase I', file: 'material_transfer_protocol_phase_i.pdf', folder: 'legal-addendums' },
  { title: 'Public Legal Summary', file: 'public_legal_summary.pdf', folder: 'legal-addendums' },
  { title: 'Spiritual Mission Charter', file: 'spiritual_mission_charter.pdf', folder: 'legal-addendums' },
  { title: 'Legal Preamble & Interpretive Notice', file: 'legal_preamble_interpretive_notice.pdf', folder: 'legal-addendums' },
  { title: 'Trust Structure Overview – Phase I', file: 'trust_structure_overview_phase_i.pdf', folder: 'legal-addendums' },
  { title: 'Citadel Addendum – Mission Housing', file: 'citadel_addendum_mission_housing.pdf', folder: 'legal-addendums' },
  { title: 'Ceremonial Assets & Infrastructure Addendum', file: 'ceremonial_assets_infrastructure_addendum.pdf', folder: 'legal-addendums' },
  { title: '01 – SEAL Team 69 Frequency Fortress – Christed Investment Packet v1.44', file: '01_christed_investment_packet_v1_44.pdf', folder: 'phase-i' },
  { title: '02 – Christed Resource Blueprint Phase I', file: '02_christed_resource_blueprint_phase_i.pdf', folder: 'phase-i' },
  { title: '03 – Christed Annex Pack – Phase I Mission Intelligence', file: '03_christed_annex_pack_phase_i.pdf', folder: 'phase-i' },
  { title: '04 – Christed Forecast Summary Mission Backers', file: '04_christed_forecast_summary.pdf', folder: 'phase-i' },
  { title: '05 – Christed Resource Blueprint Phase I (Excel)', file: '05_christed_resource_blueprint_excel.pdf', folder: 'phase-i' },
  { title: '06 – Frequency Fortress FAQ', file: '06_frequency_fortress_faq.pdf', folder: 'phase-i' },
  { title: '07 – Christed Glossary', file: '07_christed_glossary.pdf', folder: 'phase-i' },
  { title: '08 – Funding Portals', file: '08_funding_portals.pdf', folder: 'phase-i' },
  { title: '09 – How to Reach the Commander', file: '09_how_to_reach_the_commander.pdf', folder: 'phase-i' },
  { title: '10 – Temple Key – The Beloved Acknowledgement', file: '10_temple_key_the_beloved_acknowledgement.pdf', folder: 'phase-i' },
];

export function getDocuments(folder) {
  return documents.filter((document) => document.folder === folder).map((document) => {
    const filePath = path.join(process.cwd(), 'public', 'pdfs', document.file);
    const bytes = statSync(filePath).size;
    return {
      ...document,
      href: `/pdfs/${document.file}`,
      size: bytes < 1024 * 1024 ? `${Math.ceil(bytes / 1024)} KB` : `${(bytes / (1024 * 1024)).toFixed(1)} MB`,
    };
  });
}
