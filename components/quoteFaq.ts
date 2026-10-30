/* Quote-stage objections only. Deliberately not a rerun of the service-page
   FAQs: the quote page answers what stops someone finishing the form, not
   what a given clean includes. Every answer restates something already true
   and published elsewhere on the site. Also listed on /faq/. */
import { CONDITION_FAQ } from "./conditionFaq";

export type QuoteFaq = {
  q: string;
  a: string;
  link?: { href: string; text: string };
};

export const QUOTE_FAQ: QuoteFaq[] = [
  {
    q: "Am I committing to anything by requesting a quote?",
    a: "No. The quote is free and there is no obligation. You are telling us about your home so we can put a real number in front of you \u2014 nothing is booked and nothing is charged until you say yes.",
  },
  {
    q: "Do you need to come to my house before quoting?",
    a: "No. That is what the questions in the form are for. Tell us the size and condition of the home and the service you want, add photos if you like, and we will send you prices for light, moderate and heavy condition. Your quote is based on the condition you describe, so if our cleaner arrives and finds the home in a different condition, we will adjust the price and document why. We always do our best to honor your original quote, but please keep in mind that organizing and heavy buildup take our cleaners more time and manpower.",
  },
  CONDITION_FAQ,
  {
    q: "What if my home is in really bad shape?",
    a: "Then answer the condition question honestly \u2014 it helps us rather than putting us off. We would far rather know in advance than surprise a cleaner on the day, and an accurate answer is what makes the quote accurate. We have cleaned homes at every point on that scale.",
  },
  {
    q: "How do you work out the price?",
    a: "Square footage, bedrooms and bathrooms, the service you picked, and the condition of the home — plus whether there are pets, and anything extra you want done. Add-ons such as inside the oven, inside the refrigerator or wash-and-fold laundry are priced on top, and special requests are quoted with the job. There is no trip charge and no zone pricing anywhere in our service area, so where you live does not change the number.",
    link: { href: "/services/#addons", text: "See everything each clean covers, and every add-on" },
  },
  {
    q: "Do I pay anything now?",
    a: "No. There is no payment at the quote stage and no card needed to get a price. You pay after your service is complete.",
  },
];
