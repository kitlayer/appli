import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Pluginsbadge from "~/components/pluginsbadge";
import Templatecard from "~/components/templatecard";
import Templatehero from "~/components/templatehero";


export default component$(() => {
  return (
    <>
      <main>
      <Templatehero />
      <Pluginsbadge />
      <Templatecard />
      </main>
    </>
 );
});

export const head: DocumentHead = {
  title: "Kitlayer | A Platform of Inspiration and Resources for Designers",
  meta: [
    {
      name: "description",
      content: "A Platform of Inspiration and Resources for Designers",
    },
    {
      name: "keywords",
      content: "design, inspiration, resources, Kitlayer , UI , UX",
    },
    {
      name: "author",
      content: "Kitlayer Team",
    },
  ],
  links: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
};