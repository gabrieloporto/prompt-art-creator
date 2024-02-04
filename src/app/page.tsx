"use client";

import { useFormState } from "react-dom";
import { Prediction } from "./lib/types";
import { createPrediction, getPrediction } from "./lib/actions";
import FormContent from "./ui/FormContent";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Home() {
  const [state, formAction] = useFormState(handleSubmit, null);

  async function handleSubmit(_state: Prediction | null, formData: FormData) {
    let prediction = await createPrediction(formData);

    while (["starting", "processing"].includes(prediction.status)) {
      prediction = await getPrediction(prediction.id);

      await sleep(4000);
    }
    return prediction;
  }

  return (
    <>
      <form action={formAction} className="flex flex-col mx-[20vw] gap-4">
        <FormContent output={state?.output} />
      </form>
    </>
  );
}
