'use client'

export default function MegavoltBlock() {
  return (
    <div className="
      w-full 
      max-w-[540px] 
      mx-auto 
      my-4 sm:my-6 
      px-4 py-4 
      sm:px-6 sm:py-6 
      bg-black 
      shadow-[0_0_25px_#FF0] 
      text-center
    ">
      <h2 className="
        text-[18px] 
        sm:text-[32px] 
        uppercase 
        font-megavolt 
        text-yellow-400 
        leading-tight 
        tracking-wider
      ">
        ⚡ Unleash the Frequency ⚡
      </h2>

      <p className="
        text-[10px] 
        sm:text-[16px] 
        mt-3 
        text-yellow-300 
        font-mono 
        tracking-tight
      ">
        This node is powered by Source code and sacred rage.
      </p>
    </div>
  )
}