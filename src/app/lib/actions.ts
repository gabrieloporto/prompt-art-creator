"use server";

import { Prediction } from "./types";
import { unstable_noStore as noStore } from "next/cache";

export async function createPrediction(
  formData: FormData
): Promise<Prediction> {
  noStore();

  const prediction = await fetch("https://replicate.com/api/predictions", {
    headers: {
      accept: "application/json",
      "accept-language": "es-AR,es;q=0.9,es-419;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      "content-type": "application/json",
      pragma: "no-cache",
      "sec-ch-ua":
        '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-csrftoken": "IS3lmIUUJH05xr5Vwu3NkqaBEArOXG3I",
    },
    referrer: "https://replicate.com/ai-forever/kandinsky-2?input=nodejs",
    referrerPolicy: "same-origin",
    body: JSON.stringify({
      input: {
        width: 432,
        height: 432,
        prompt: formData.get("prompt") as string,
        scheduler: "p_sampler",
        batch_size: 1,
        prior_steps: "5",
        guidance_scale: 4,
        prior_cf_scale: 4,
        num_inference_steps: 100,
      },
      is_training: false,
      create_model: "0",
      stream: false,
      version:
        "601eea49d49003e6ea75a11527209c4f510a93e2112c969d548fbb45b9c4f19f",
    }),
    method: "POST",
    mode: "cors",
    credentials: "include",
  }).then((res) => res.json() as Promise<Prediction>);

  return prediction;
}

export async function getPrediction(id: string) {
  noStore();

  return fetch("https://replicate.com/api/predictions/" + id, {
    headers: {
      accept: "*/*",
      "accept-language": "es-AR,es;q=0.9,es-419;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      pragma: "no-cache",
      "sec-ch-ua":
        '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
    referrer: "https://replicate.com/ai-forever/kandinsky-2?input=nodejs",
    referrerPolicy: "same-origin",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include",
  }).then((res) => res.json() as Promise<Prediction>);
}
