document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});


// Cookie banner

const cookieBanner = document.getElementById("cookie-consent-banner");

if (cookieBanner) {
  const button = document.getElementById("cookie-consent-button");
  const consentKey = "cookieConsent";
  const consentValue = "accepted";
  const cookieName = "cookie_consent";

  function hasConsent() {
    if (localStorage.getItem(consentKey) === consentValue) {
      return true;
    }
    const match = document.cookie.match(
      new RegExp("(?:^|; )" + cookieName + "=([^;]*)")
    );
    return match && match[1] === consentValue;
  }

  // Сохраняем согласие
  function setConsent() {
    localStorage.setItem(consentKey, consentValue);
    const d = new Date();
    d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
    document.cookie = `${cookieName}=${consentValue};expires=${d.toUTCString()};path=/`;
  }

  // Показываем баннер, если нет согласия
  if (!hasConsent()) {
    cookieBanner.classList.remove("hidden");

    button.addEventListener("click", () => {
      setConsent();
      cookieBanner.classList.add("hidden");
    });
  }
}