import Pfizer from "@/assets/testimonial/pfizer.svg";
import BlueCross from "@/assets/testimonial/blue-cross-blue-shield.svg";

type Testimonial = {
    logo: string;
    quote: string;
    identifier: string;
}

export const testimonial: Testimonial[] = [
    {
        logo: Pfizer,
        quote: "Since their first website launch 3 years ago, Wokine has been supporting ACCRO by producing their website presenting the brand and its range of products, as well as regularly reporting on them and training them on the not-to-be-missed key digital innovations in their industry.",
        identifier: "Pharmaceutical"
    },
    {
        logo: BlueCross,
        quote: "Wokine has been the digital partner of Kerialis for more than 5 years. We’ve been namely helping them to digitalize their processes, set up online sales tunnels, increase their conversion rate, etc.",
        identifier: "Animal Welfare Organisation"
    },
    {
        logo: Pfizer,
        quote: "Since their first website launch 3 years ago, Wokine has been supporting ACCRO by producing their website presenting the brand and its range of products, as well as regularly reporting on them and training them on the not-to-be-missed key digital innovations in their industry.",
        identifier: "Pharmaceutical"
    },
];