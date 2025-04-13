import { component$, useSignal, $ } from "@builder.io/qwik";
import './badge.css';

export default component$(({ onBadgeChange }: { onBadgeChange?: (badge: string) => void }) => {
  const badges = [
    "All",
    "Icons",
    "Colors",
    "Typography",
    "Mockups",
    "Stock Photos",
    "Illustrations",
    "Inspiration",
    "AI Tools",
    "Design Tools",
    "UX Tools",
    "Design Systems",
    "Pattern",
    "Fonts",
  ];

  const activeBadge = useSignal("All");

  // Badge tıklama işlemi
  const handleBadgeClick = $((badge: string) => {
    activeBadge.value = badge; // Aktif badge'i güncelle
    onBadgeChange?.(badge); // Eğer onBadgeChange varsa çalıştır
  });

  return (
    <div class="badge-container">
      {badges.map((badge) => (
        <button
          key={badge}
          class={`badge ${activeBadge.value === badge ? "active" : ""}`}
          onClick$={() => handleBadgeClick(badge)}
        >
          {badge}
        </button>
      ))}
    </div>
  );
});
