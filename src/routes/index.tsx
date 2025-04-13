import { component$, useSignal, $ } from "@builder.io/qwik"; 
import Hero from '../components/hero';
import Badge from "~/components/badge";
import Card from "~/components/card";

export default component$(() => {
  const selectedBadge = useSignal("All"); // Seçilen badge bilgisini tutuyoruz.

  // handleBadgeUpdate fonksiyonunu QRL ile sarmalayarak reaktif hale getiriyoruz.
  const handleBadgeUpdate = $((badge: string) => {
    selectedBadge.value = badge; // Badge değiştiğinde state'i güncelliyoruz.
  });

  return (
    <>
      <main>
        <Hero />
        <Badge onBadgeChange={handleBadgeUpdate} /> {/* Badge tıklandığında onBadgeChange çağrılacak */}
        <Card activeBadge={selectedBadge.value} /> {/* Seçilen badge bilgisi Card'a aktarılacak */}
      </main>
    </>
  );
});
