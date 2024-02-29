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
        '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-csrftoken": "IS3lmIUUJH05xr5Vwu3NkqaBEArOXG3I",
    },
    referrer: "https://replicate.com/lucataco/sdxl-lightning-4step",
    referrerPolicy: "same-origin",
    body: JSON.stringify({
      input: {
        width: 1024,
        height: 1024,
        prompt: formData.get("prompt") as string,
        scheduler: "K_EULER",
        num_outputs: 1,
        guidance_scale: 0,
        negative_prompt: "worst quality, low quality, blur",
        num_inference_steps: 4,
      },
      is_training: false,
      create_model: "0",
      stream: false,
      version:
        "727e49a643e999d602a896c774a0658ffefea21465756a6ce24b7ea4165eba6a",
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
        '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
    referrer: "https://replicate.com/lucataco/sdxl-lightning-4step",
    referrerPolicy: "same-origin",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include",
  }).then((res) => res.json() as Promise<Prediction>);
}
