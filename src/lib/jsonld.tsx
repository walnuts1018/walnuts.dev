import { Person as JsonLDPerson, WithContext } from "schema-dts";

export const person: WithContext<JsonLDPerson> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Walnuts (@walnuts1018)",
  url: "https://walnuts.dev",
  image: "https://walnuts.dev/_next/image?url=%2Fwalnuts.png&w=1080&q=75",
  sameAs: [
    "https://x.com/walnuts1018",
    "https://www.instagram.com/walnuts_1018/",
    "https://github.com/walnuts1018",
  ],
};
