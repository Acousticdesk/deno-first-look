import { parse } from "https://deno.land/std@0.54.0/flags/mod.ts";

import { showTime } from './utils'
import "./locales/fr.js";

const { args } = Deno;

const language: string = parse(args).lang;

const time = showTime(language);

console.log(time);