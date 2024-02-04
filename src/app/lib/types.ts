export interface Prediction {
  status: "starting" | "processing" | "succeeded";
  id: string;
  output: [string];
}

export interface Output {
  output: Prediction["output"] | undefined;
}
