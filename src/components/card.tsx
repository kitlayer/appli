import { component$ } from "@builder.io/qwik";
import './card.css';


const Props ={
  
}

export default component$(({ activeBadge }: { activeBadge: string }) => {
  const cards = [
    {
      logo: "/images/card/pexels.png",
      title: "Pexels",
      description: "Design and collaborate all in the browser The world’s",
      badges: ["Stock Photos"],
      link: "https://www.pexels.com/",
    },
    {
      logo: "/images/card/freepik.png",
      title: "Freepik",
      description: "Online community for showcasing user artwork",
      badges: ["Stock Photos"],
      link: "https://www.freepik.com/",
    },
    {
      logo: "/images/card/lucide.png",
      title: "Lucide.dev",
      description: "The world’s largest mobile and web design library",
      badges: ["Icons"],
      link: "https://lucide.dev/",
    },
    {
      logo: "/images/card/picular.jpg",
      title: "Picular",
      description: "All the design inspiration you need.Served fresh.",
      badges: ["Colors"],
      link: "https://picular.co/",
    },
    {
      logo: "/images/card/colorhunt.png",
      title: "Color Hunt",
      description: "All the design inspiration you need.Served fresh.",
      badges: ["Colors"],
      link: "https://colorhunt.co/",
    },
    {
      logo: "/images/card/mobbin.png",
      title: "Mobbin",
      description: "All the design inspiration you need.Served fresh.",
      badges: ["Inspiration"],
      link: "https://mobbin.com/",
    },
    {
      logo: "/images/card/fontshare.jpg",
      title: "Font Share",
      description: "All the design inspiration you need.Served fresh.",
      badges: ["Fonts"],
      link: "https://www.fontshare.com/",
    },
    {
      logo: "/images/card/cufonfonts.png",
      title: "Cufon Fonts",
      description: "All the design inspiration you need.Served fresh.",
      badges: ["Fonts"],
      link: "https://www.cufonfonts.com/",
    },
  ];

  // Kartları activeBadge'a göre filtreliyoruz
  const filteredCards = cards.filter(card => 
    activeBadge === "All" || card.badges.includes(activeBadge)
  );

  return (
    <div class="cards-container">
      {filteredCards.map((card, index) => (
        <a
          key={index}
          href={card.link}
          class="card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={card.logo} alt={`${card.title} logo`} class="card-logo" />
          <h3 class="card-title">{card.title}</h3>
          <p class="card-description">{card.description}</p>
          <div class="card-divider"></div>
          <div class="card-footer">
            <div class="card-badges">
              {card.badges.map((badge, badgeIndex) => (
                <span key={badgeIndex} class="card-badge">
                  {badge}
                </span>
              ))}
            </div>
            <div class="card-link">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#888888"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17L17 7" />
              </svg>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
});
