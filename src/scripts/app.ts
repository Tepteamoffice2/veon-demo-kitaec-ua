// Small client logic: mode switch (China / EV), shipping cut-off line, city tabs, header state, mobile dock.
const root = document.documentElement;

// 1. Mode switch — recolours field (CSS) and swaps brand list/select
const select = document.querySelector<HTMLSelectElement>("[data-brand-select]");
const lists = {
  china: Array.from(document.querySelectorAll<HTMLElement>(".board--china .board__row > span:first-of-type")).map((e) => e.textContent ?? ""),
  ev: Array.from(document.querySelectorAll<HTMLElement>(".board--ev .board__row > span:first-of-type")).map((e) => e.textContent ?? ""),
};
function setMode(mode: "china" | "ev") {
  root.dataset.mode = mode;
  document.querySelectorAll<HTMLButtonElement>("[data-mode-btn]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.modeBtn === mode)));
  if (select) {
    select.innerHTML = '<option value="">Оберіть марку</option>' + lists[mode].map((b) => `<option value="${b}">${b}</option>`).join("");
  }
}
root.dataset.mode = "china";
document.querySelectorAll<HTMLButtonElement>("[data-mode-btn]").forEach((b) => b.addEventListener("click", () => setMode(b.dataset.modeBtn as "china" | "ev")));

// 2. Shipping cut-off line (Europe/Kyiv). Without JS the static rule text stays.
const shipEl = document.querySelector<HTMLElement>("[data-ship-text]");
if (shipEl) {
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Kyiv", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const wd = get("weekday");
  const mins = Number(get("hour")) * 60 + Number(get("minute"));
  const weekend = wd === "Sat" || wd === "Sun";
  const cutoff = weekend ? 12 * 60 : 16 * 60;
  const label = weekend ? "12:00" : "16:00";
  shipEl.textContent = mins < cutoff ? `Замовте до ${label} — відправимо сьогодні` : "Наступна відправка — завтра";
}

// 3. City tabs
function setCity(city: string) {
  document.querySelectorAll<HTMLElement>("[data-city]").forEach((p) => { p.hidden = p.dataset.city !== city; });
  document.querySelectorAll<HTMLButtonElement>("[data-city-btn]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.cityBtn === city)));
}
if (document.querySelector("[data-city-btn]")) {
  setCity("kyiv");
  document.querySelectorAll<HTMLButtonElement>("[data-city-btn]").forEach((b) => b.addEventListener("click", () => setCity(b.dataset.cityBtn ?? "kyiv")));
}

// 4. Header compacts on scroll
const header = document.querySelector<HTMLElement>("[data-header]");
if (header) {
  const on = () => header.classList.toggle("is-compact", scrollY > 24);
  on();
  addEventListener("scroll", on, { passive: true });
}

// 5. Mobile menu closes after choosing an anchor
document.querySelectorAll<HTMLDetailsElement>("[data-menu]").forEach((d) => {
  d.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => d.removeAttribute("open")));
});

// 6. Mobile dock appears once the first screen is gone
const dock = document.querySelector<HTMLElement>("[data-dock]");
const hero = document.getElementById("hero");
if (dock && hero && "IntersectionObserver" in window) {
  new IntersectionObserver(([e]) => dock.classList.toggle("is-on", !e.isIntersecting), { threshold: 0 }).observe(hero);
} else if (dock) {
  dock.classList.add("is-on");
}

// 7. Touch: FutureLink hint closes itself after 3.5 s
document.querySelectorAll<HTMLElement>(".future-link").forEach((el) => {
  el.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "touch") setTimeout(() => { if (document.activeElement === el) el.blur(); }, 3500);
  });
});
