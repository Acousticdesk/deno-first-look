import { parse } from "https://deno.land/std@0.54.0/flags/mod.ts";

import { showTime } from "./utils.ts";
import "./locales/fr.js";

const { args } = Deno;

const main = () => {
  const language: string = parse(args).lang;

  const languageWhitelist = ["en", "fr"];

  if (!language || !languageWhitelist.includes(language)) {
    console.log(
      `Invalaid --lang argument was not passed to cli. Expected ${languageWhitelist}, instead got: ${language}`,
    );
    return;
  }

  const time = showTime(language);

  console.log(time);
};

main();
