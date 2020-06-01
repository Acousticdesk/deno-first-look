import { moment } from "https://deno.land/x/moment/moment.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { showTime } from "./utils.ts";

Deno.test('given showTime', () => {
    const time = showTime('en', moment.utc('2020-06-01T11:00:00Z'))

    assertEquals(time, 'Monday, June 1, 2020 11:00 AM')
})
