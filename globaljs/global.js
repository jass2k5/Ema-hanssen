import { themes, SelectorsTheme, SelectorMobileNav,  SelectorIntersection, SelectorHero } from './config.js';
export function ThemeSwitcher() {
    try {
        const themeBtn = document.querySelector(SelectorsTheme.darkbtn);
        const body = document.body;
        const logo = document.querySelector(SelectorsTheme.logo);
        if (!themeBtn) throw new Error("theme button not found!");
        //checking local storage for theme
        if (localStorage.getItem(themes.themeKey) === themes.dark) {
            body.classList.add(SelectorsTheme.rootDarkclass);
            themeBtn.style.justifyContent = "flex-end";
            if (logo) logo.style.color = "white";
        };
        //working button
        themeBtn.addEventListener('click', () => {
            body.classList.toggle(SelectorsTheme.rootDarkclass);
            const isDark = body.classList.contains(SelectorsTheme.rootDarkclass);
            themeBtn.style.justifyContent = isDark ? "flex-end" : "flex-start";
            if (logo) logo.style.color = isDark ? "white" : "#0E1011";
            localStorage.setItem(themes.themeKey, isDark ? themes.dark : themes.light);
        });

    } catch (error) {
        console.warn("theme switch skipped", error.message);
    };
}
export function MobileNav() {
    const overlay = document.querySelector(SelectorMobileNav.overlay);
    const btn = document.querySelector(SelectorMobileNav.menuBtn);
    const mobileLinks = document.querySelectorAll(SelectorMobileNav.mobileLinks);

    if (!overlay || !btn || !mobileLinks) {
        console.warn("error occured retrieving div");
        return;
    }
    btn.addEventListener('click', () => {
        overlay.classList.toggle(SelectorMobileNav.activeClass);
        const isActive = overlay.classList.contains(SelectorMobileNav.activeClass);
        btn.textContent = isActive ? 'close' : 'Menu';
    });
    //links working
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetDestination = link.getAttribute(SelectorMobileNav.attribute);
            if (targetDestination) {
                window.open(targetDestination, '_blank');
                overlay.classList.toggle(SelectorMobileNav.activeClass);
                const isActive = overlay.classList.contains(SelectorMobileNav.activeClass);
                btn.textContent = isActive ? 'close' : 'Menu';
            }
        });
    });
}
export function ScrollAnimation() {
    try {
        const observeScroll = new IntersectionObserver((enteries, observer) => {
            enteries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(`${entry.target} is intersected`)
                    entry.target.classList.add(SelectorIntersection.fadeup);
                    observer.unobserve(entry.target);
                }
            })
        }, SelectorIntersection.observerProperties);

        const allelementstoslide = document.querySelectorAll(SelectorIntersection.allElements);
        allelementstoslide.forEach((el) => {
            observeScroll.observe(el);
        });
    } catch (error) {
        console.warn("error in intersection observer api", error.message);
    }
}
export function gotoLink(){
    const links = document.querySelectorAll(`${SelectorHero.contactBoxes},.contact-box`);
    links.forEach(link =>{
        link.addEventListener('click',()=>{
            const url = link.getAttribute(SelectorHero.attribute);
            window.open(url,'_blank');
        })
    })
}

export function buildOfflineScreen() {
  const overlay = document.createElement('div');
  overlay.id = 'offline-overlay';
  overlay.className = 'offline-overlay';
  
  // Inject the inner HTML
  overlay.innerHTML = `
    <img src="../img/error.png" alt="No Connection" class="offline-img" />
    <div class="offline-content">
      <h2>Connection Lost.</h2>
      <p>Please check your internet connection to view the portfolio.</p>
      <button id="offline-refresh-btn" class="offline-refresh-btn">Try Again</button>
    </div>
  `;
  
 const refreshBtn = overlay.querySelector('#offline-refresh-btn');
  
  refreshBtn.addEventListener('click', () => {
    window.location.reload(); 
  });
  document.body.appendChild(overlay);
  
  return overlay;
}

// 2. Run the function so the overlay exists in the background
const offlineOverlay = buildOfflineScreen();

// 3. Listen for the connection to drop or return
window.addEventListener('offline', () => {
  offlineOverlay.classList.add('is-active');
});

window.addEventListener('online', () => {
  offlineOverlay.classList.remove('is-active');
});
