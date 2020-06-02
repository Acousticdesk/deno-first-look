import { moment } from "https://deno.land/x/moment/moment.ts";

import "./locales/fr.js";

export const showTime = (language: string, date: typeof moment = moment()) => {
    return date.locale(language).format("LLLL");
}
