import { component$, useStyles$, useSignal } from '@builder.io/qwik';
import { useLocation, Link } from '@builder.io/qwik-city'; // Link bileşenini ekliyoruz
import headerStyles from './header.css?inline';

export default component$(() => {
  useStyles$(headerStyles);
  const isMenuOpen = useSignal(false);
  const loc = useLocation();

  // Mevcut URL'yi konsola yazdırarak hata ayıklama yapalım
  console.log('Current pathname:', loc.url.pathname);

  // Menü öğeleri
  const navItems = [
    { label: 'Resources', href: '/' },
    { label: 'Plugins', href: '/plugins' },
    { label: 'Templates', href: '/template' },
    { label: 'Education', href: '#' },
    { label: 'Blog', href: '#' },
  ];

  // URL karşılaştırmasını daha esnek hale getirelim
  const isActive = (href: string) => {
    // Sondaki '/' karakterini kaldır ve büyük-küçük harf duyarlılığını göz ardı et
    const cleanPathname = loc.url.pathname.replace(/\/$/, '').toLowerCase();
    const cleanHref = href.replace(/\/$/, '').toLowerCase();
    
    // Ana sayfa için özel kontrol
    if (cleanHref === '/') {
      return cleanPathname === '' || cleanPathname === '/';
    }
    return cleanPathname === cleanHref;
  };

  return (
    <header>
      <div class="header-content">
        <div class="header-left">
          <div class="logo">
            <Link href="/"> {/* Logo için de Link kullanıyoruz */}
              <span class="logo-icon">⚡</span>
              <span class="logo-text">KİTLAYER</span>
            </Link>
          </div>
          <nav class={`nav ${isMenuOpen.value ? 'open' : ''}`}>
            {/* Arama çubuğu menü içinde, Resources'un üstünde */}
            <div class="search-bar mobile-search-bar">
              <svg class="search-icon" width="14" height="14" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" fill="#888888"/>
              </svg>
              <input type="text" placeholder="Search docs..." class="search-input"/>
              <span class="shortcut-icon">⌘K</span>
            </div>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    class={{
                      active: isActive(item.href),
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Mobil görünümde Submit butonu */}
            <button type="button" class="sign-up mobile-sign-up">
              Submit
              <svg class="arrow-icon" width="14" height="14" viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.8L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill="#d1d5db"/>
              </svg>
            </button>
          </nav>
        </div>
        <div class="header-right">
          <div class="search-bar">
            <svg class="search-icon" width="14" height="14" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" fill="#888888"/>
            </svg>
            <input type="text" placeholder="Search docs..." class="search-input"/>
            <span class="shortcut-icon">⌘K</span>
          </div>
          <button type="button" class="sign-up">
            Submit
            <svg class="arrow-icon" width="14" height="14" viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.8L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill="#d1d5db"/>
            </svg>
          </button>
          <button
            class="hamburger"
            onClick$={() => {
              isMenuOpen.value = !isMenuOpen.value;
            }}
          >
            {isMenuOpen.value ? (
              <svg
                class="hamburger-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                class="hamburger-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M4 12H20"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M4 18H20"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
});