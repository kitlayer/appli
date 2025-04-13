import { component$, useSignal, $, useVisibleTask$ } from '@builder.io/qwik';
import './badge.css';

export default component$(() => {
  const badges = [
    "All",
    "Icons",
    "Color Platte",
    "Typography",
    "Mockups",
    "Prototyping",
    "Wireframing",
    "Animation",
    "Chrome Plugins",
    "Design Systems",
    "Illustrations",
    "Image & Assets",
    "Accessibility Tools",
    "Performance & Optimization",
  ];

  const containerElement = useSignal<HTMLElement | null>(null); // badge-container için signal
  const isDragging = useSignal(false);
  const startX = useSignal(0);
  const scrollLeft = useSignal(0);

  // DOM elemanına erişimi garantilemek için useVisibleTask$ kullanıyoruz
  useVisibleTask$(() => {
    if (containerElement.value) {
      console.log("Container element loaded:", containerElement.value);
    }
  });

  // Fare ile sürükleme başlangıcı
  const handleMouseDown = $((e: MouseEvent) => {
    if (!containerElement.value) return;
    console.log("Mouse down:", e.pageX);
    isDragging.value = true;
    startX.value = e.pageX - containerElement.value.offsetLeft;
    scrollLeft.value = containerElement.value.scrollLeft;
  });

  // Fare ile sürükleme hareketi
  const handleMouseMove = $((e: MouseEvent) => {
    if (!isDragging.value || !containerElement.value) return;
    console.log("Mouse move:", e.pageX);
    e.preventDefault();
    const x = e.pageX - containerElement.value.offsetLeft;
    const walk = (x - startX.value) * 1.5; // Kaydırma hızı
    containerElement.value.scrollLeft = scrollLeft.value - walk;
  });

  // Fare ile sürükleme bitişi
  const handleMouseUp = $(() => {
    console.log("Mouse up");
    isDragging.value = false;
  });

  // Dokunmatik cihazlar için sürükleme başlangıcı
  const handleTouchStart = $((e: TouchEvent) => {
    if (!containerElement.value) return;
    console.log("Touch start:", e.touches[0].pageX);
    isDragging.value = true;
    startX.value = e.touches[0].pageX - containerElement.value.offsetLeft;
    scrollLeft.value = containerElement.value.scrollLeft;
  });

  // Dokunmatik cihazlar için sürükleme hareketi
  const handleTouchMove = $((e: TouchEvent) => {
    if (!isDragging.value || !containerElement.value) return;
    console.log("Touch move:", e.touches[0].pageX);
    e.preventDefault();
    const x = e.touches[0].pageX - containerElement.value.offsetLeft;
    const walk = (x - startX.value) * 1.5; // Kaydırma hızı
    containerElement.value.scrollLeft = scrollLeft.value - walk;
  });

  // Dokunmatik cihazlar için sürükleme bitişi
  const handleTouchEnd = $(() => {
    console.log("Touch end");
    isDragging.value = false;
  });

  return (
    <div
      ref={(el) => (containerElement.value = el)} // Ref'i signal ile bağla
      class="badge-container"
      onMouseDown$={handleMouseDown}
      onMouseMove$={handleMouseMove}
      onMouseUp$={handleMouseUp}
      onMouseLeave$={handleMouseUp}
      onTouchStart$={handleTouchStart}
      onTouchMove$={handleTouchMove}
      onTouchEnd$={handleTouchEnd}
    >
      {badges.map((badge, index) => {
        const badgeSlug = badge.toLowerCase().replace(/\s+/g, '-');
        const badgeLink = badge === "ALL" ? '/all' : `/${badgeSlug}`;

        return (
          <a
            key={index}
            href={badgeLink}
            class={`badge ${badge === "All" ? "active" : ""}`}
          >
            {badge}
          </a>
        );
      })}
    </div>
  );
});