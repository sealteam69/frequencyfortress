import OrgasmButton from "../../components/orgasmredirectbutton-2"
import DisobedienceCounter from "../../components/disobediencecounter-2"

export default function Orgasm404() {
  return (
    <main
      className="
        bg-[#FF13F0]
        min-h-svh
        text-white
        grid grid-rows-[1fr_auto_1fr] gap-y-8
        items-center
        text-center
        px-4
        sm:px-6
        md:px-12
      "
    >
      <div aria-hidden="true" />
      <div className="flex flex-col items-center justify-center w-full">
        <h1
          className="
            text-[22px]
            sm:text-[28px]
            md:text-[32px]
            italic
            text-[#8A00C4]
            font-inter
            font-bold
          "
        >
          Error 404:
        </h1>

        <p
          className="
            text-[22px]
            sm:text-[28px]
            md:text-[32px]
            italic
            text-[#8A00C4]
            font-inter
            font-bold
          "
        >
          You just couldn’t help yourself, could you?
        </p>

        <div className="mt-10">
          <OrgasmButton />
        </div>

      </div>

      <div className="self-end justify-self-center pb-20 sm:pb-30">
        <DisobedienceCounter />
      </div>
    </main>
  );
}
