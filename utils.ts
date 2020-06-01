import { moment } from "https://deno.land/x/moment/moment.ts";

import "./locales/fr.js";

export const showTime = (theLang: string, date: typeof moment = moment()) => {
    return date.locale(theLang).format("LLLL");
}
