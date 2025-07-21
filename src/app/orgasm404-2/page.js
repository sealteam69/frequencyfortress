import OrgasmButton from "../../components/orgasmredirectbutton-2"
import DisobedienceCounter from "../../components/disobediencecounter-2"

export default function Orgasm404() {
  return (
    <main
      className="
        bg-[#FF13F0] 
        min-h-screen 
        text-white 
        flex flex-col 
        justify-center 
        items-center 
        text-center 
        px-4 py-8 
        sm:px-6 sm:py-10 
        md:px-12 md:py-16
      "
    >
      <h1
        className="
          m-2 
          text-[24px] 
          sm:text-[32px] 
          md:text-[36px] 
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
          m-2 
          text-[24px] 
          sm:text-[32px] 
          md:text-[36px] 
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

      <div className="mt-5">
        <DisobedienceCounter />
      </div>
    </main>
  );
}