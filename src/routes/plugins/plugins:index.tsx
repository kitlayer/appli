import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Card from "~/components/card";
import Pluginsbadge from "~/components/pluginsbadge";
import Pluginshero from "~/components/pluginshero";


export default component$(() => {
    const selectedBadge = useSignal("All"); // Seçilen badge bilgisini tutuyoruz.
  
    // handleBadgeUpdate fonksiyonunu QRL ile sarmalayarak reaktif hale getiriyoruz.
    const handleBadgeUpdate = $((badge: string) => {
      selectedBadge.value = badge; // Badge değiştiğinde state'i güncelliyoruz.
    });
  return (
    <>
      <main>
      <Pluginshero />
      <Pluginsbadge />
      <Card activeBadge={selectedBadge.value}/>
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