// components/AboutLedgerModal.js
'use client'
export default function AboutLedgerModal({ isOpen, onClose}) {
  if (!isOpen) return null

  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm px-6">
      <div className="bg-white rounded-lg max-w-xl w-full p-6 relative text-left">
        <h2 className="text-base md:text-lg font-bold mb-3">About the Christed Vault Ledger</h2>
        <p className=" text-gray-800 mb-4 text-xs md:text-sm">
          The Ledger is a sovereign, encrypted accounting mechanism – part ceremonial record, part transparent tracking system for all capital flows provisioned into the Frequency Fortress mission.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 text-xs md:text-sm">
          <li>Private & anonymous flows are blessed and protected.</li>
          <li>Public flows may be named in future Edenic architecture or scrolls.</li>
          <li>A cryptographically verifiable public version will be released post-Phase I.</li>
          <li>The Ledger supports multi-chain tracking and fiat onramps (BTC, ETH, SOL, XMR, Revolut, Stripe).</li>
          <li>It is overseen by the Oversoul accounting protocol and mirrored in Source-field registers.</li>
        </ul>
        <p className=" text-gray-700 text-xs md:text-sm">
          You are not donating, you are provisioning a divine override. This is spiritual, legal, and memetic territory. 
          The Christed Vault Ledger ensures karmic neutrality and planetary alignment for all contributors.
        </p>
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-5 right-5 text-black hover:text-black text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  )
}