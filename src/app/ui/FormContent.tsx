import { useFormStatus } from "react-dom";
import { HomeIcon } from "./HomeIcon";
import { Output } from "../lib/types";
import MyLoader from "./Skeleton";
import Image from "next/image";

export default function FormContent({ output }: Output) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <section className="flex items-center justify-center mb-[21px]">
          <MyLoader />
        </section>
      ) : !pending && !output ? (
        <section className="flex gap-4 items-center justify-center">
          <HomeIcon />
          <h1 className="text-3xl font-bold">
            Crea tu imagen <br />
            con tan solo <span className="text-[#8b8fa5]">Texto</span>.
          </h1>
        </section>
      ) : (
        <article className="flex items-center justify-center mb-[21px]">
          {output && (
            <Image
              src={output[0]}
              alt="Previsualizacion del render"
              width={380}
              height={380}
            />
          )}
        </article>
      )}
      <input
        type="text"
        className="text-black h-10 rounded-lg pl-4"
        placeholder="Introduce el texto a convertir en imagen..."
        name="prompt"
        required
      />
      <button
        className="bg-[#6c708b] hover:bg-[#8b8fa5] transition-all ease-in-out duration-200 h-10 rounded-lg"
        disabled={pending}
      >
        {pending ? "Cargando..." : "Crear Imagen"}
      </button>
    </>
  );
}
