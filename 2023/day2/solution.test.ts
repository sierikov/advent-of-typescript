import { CookieSurveyInput } from "./solution";
import { Expect, Equal } from "type-testing";

const cookieInventory = {
  chocolate: 1,
  sugar: 20,
  gingerBread: 10,
  peanutButter: 30,
  snickeDoodle: 73,
};

type test_cookies_actual = CookieSurveyInput<typeof cookieInventory>;

type test_cookies_expected =
  | "chocolate"
  | "sugar"
  | "gingerBread"
  | "peanutButter"
  | "snickeDoodle";
type test_cookies = Expect<Equal<test_cookies_actual, test_cookies_expected>>;
