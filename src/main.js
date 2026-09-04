/* ================================================================
   EDIT WEDDING DETAILS & ALL MEDIA HERE
   Replace remote image/audio URLs with your own hosted or local files.
   RSVP submissions are saved in this browser; connect submitRSVP()
   to your preferred form service or backend for production delivery.
================================================================ */

import './styles.css';


const weddingConfig = {
  bride: "Arienne",
  groom: "Emiel",
  weddingDate: "2029-1-07T15:30:00+08:00",
  displayDate: "January 7, 2029",
  venue: "Casa Esmeralda",
  ceremony: {
    date: "January 7, 2029", time: "3:00 in the afternoon",
    venue: "Parish of St. Joseph", address: "Cabalantian, Bacolor, Pampanga",
    mapLink: "https://www.google.com/maps/place/Parish+of+St.+Joseph-+Cabalantian/@15.0073894,120.6673043,17z/data=!3m1!4b1!4m6!3m5!1s0x3396f7ca45e882ff:0x881565778711f18a!8m2!3d15.0073894!4d120.6698846!16s%2Fg%2F11c2ng5w83?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D"
  },
  reception: {
    date: "January 7, 2029", time: "4:30 in the afternoon",
    venue: "Casa Esmeralda", address: "Bacolor, Pampanga, Philippines",
    mapLink: "https://www.google.com/maps/place/CASA+ESMERALDA/data=!4m2!3m1!1s0x0:0x6cda025b8865363e?sa=X&ved=1t:2428&ictx=111"
  },
  rsvpDeadline: "August 15, 2028",
  dressCode: {
    title: "Black Tie Optional",
    description: "We invite you to dress in rich, romantic tones and timeless silhouettes. Think floor-length gowns, refined cocktail dresses, and dark suits or tuxedos."
  },
  story: [
    { title: "How We Met", date: "2022", text: "It started with stolen glances at work, followed by a simple coffee that turned into hours of stories and laughter. We lost track of time, not wanting the conversation to end. And somewhere between those quiet moments and shared smiles, our story began.", image: "./public/images/TBR-Down.jpg" },
    { title: "Our First Date", date: "2022", text: "Under a canopy of café lights, we shared pasta, nervous laughter, and our dreams for the future. Somewhere between dessert and the ride home, forever began.", image: "./public/images/CafeJosefina.jpg" },
    { title: "The Proposal", date: "2026", text: "At golden hour, in a place that had quietly become ours, Emiel asked the simplest yet most meaningful question. With the sound of the waves, hearts full of love, and happy tears, Arienne gave the easiest answer of all—a beautiful, wholehearted yes.", image: "./public/images/ProposalPic.JPEG" },
    { title: "Our Journey", date: "Today & Always", text: "Through every adventure, ordinary Sunday, and beautiful surprise, we have chosen each other. We cannot wait to begin our greatest chapter with all of you.", image: "./public/images/BoracayWhite.jpg" }
  ],
  timeline: [
    { time: "3:00 PM", title: "Guest Arrival", text: "Come, settle in, and share in the joy." },
    { time: "3:30 PM", title: "The Ceremony", text: "We exchange our forever vows" },
    { time: "4:30 PM", title: "Cocktail Hour", text: "Drinks, music, and photographs" },
    { time: "5:30 PM", title: "A Night to Remember", text: "An evening filled with love, laughter, and cherished memories." },
    { time: "6:30 PM", title: "Dinner", text: "Good food, warm hearts, and cherished moments." },
    { time: "7:30 PM", title: "Dancing", text: "Our first dance, then yours" },
    { time: "8:30 PM", title: "Farewell", text: "A sparkling send-off under the stars" }
  ],
    entourage: {
    maidOfHonor: [
      "Name of Maid of Honor"
    ],

    bridesmaids: [
      "Bridesmaid Name 1",
      "Bridesmaid Name 2",
      "Bridesmaid Name 3"
    ],

    bestMan: [
      "Name of Best Man"
    ],

    groomsmen: [
      "Groomsman Name 1",
      "Groomsman Name 2",
      "Groomsman Name 3"
    ],

    parents: {
      bride: [
        "Bride's Father",
        "Bride's Mother"
      ],
      groom: [
        "Groom's Father",
        "Groom's Mother"
      ]
    },

    principalSponsors: [
      "Sponsor Name 1",
      "Sponsor Name 2",
      "Sponsor Name 3"
    ],

    flowerGirls: [
      "Flower Girl 1",
      "Flower Girl 2"
    ],

    ringBearer: [
      "Ring Bearer"
    ],
    
    bibleBearer: [
      "Bible Bearer"
    ],

    coinBearer: [
      "Coin Bearer"
    ]
  },
  images: {
    heroImage: "./public/images/CutePic.jpg",
    openingImage: "./public/images/OpeningBlurred.JPEG",
    dressImage: "./public/images/DressCode.png",
    galleryImages: [
      { src: "./public/images/OpeningBlurred.JPEG", alt: "Timeless walk on beach" },
      { src: "./public/images/Mamuksi.JPEG", alt: "The proof of yes" },
      { src: "./public/images/resized_SpinPic.jpg", alt: "Our Dance" },
      { src: "./public/images/SiargaoPic.JPG", alt: "Memorable Place" },
      { src: "./public/images/BoracayBrown.jpg", alt: "Walking together" },
      { src: "./public/images/Elyu.jpg", alt: "Cheesy Pictures" },
      { src: "./public/images/Tupad.jpg", alt: "BigBoss" },
      { src: "./public/images/BoracayWhite.jpg", alt: "All white <3" }
    ]
  },
  // Optional: set to a direct .mp3 URL or local path. Music begins after the guest accepts.
      backgroundMusic: [
    {
        title: "Bless the Broken Road (Piano Version)",
        file: "./public/music/bless-the-broken-road.mp3"
    },
    {
        title: "Bawat Daan (Piano Version)",
        file: "./public/music/bawat-daan.mp3"
    },
    {
        title: "Over and Over Again",
        file: "./public/music/over-and-over-again.mp3"
    },
    {
        title: "Hindi Ako Mawawala",
        file: "./public/music/hindi-ako-mawawala.mp3"
    },
    {
        title: "How Did You Know",
        file: "./public/music/how-did-you-know.mp3"
    },
    {
        title: "You'll Be in My Heart",
        file: "./public/music/youll-be-in-my-heart.mp3"
    },
    {
        title: "Never Knew Love Like This Before",
        file: "./public/music/never-knew-love-like-this-before.mp3"
    },
    {
        title: "Libu-libong Buwan",
        file: "./public/music/libu-libong-buwan.mp3"
    }
       ]
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const setText = (selector, value) => { const element = $(selector); if (element) element.textContent = value; };
const restoreBodyOverflow = () => { document.body.style.overflow = document.body.classList.contains("invitation-locked") ? "hidden" : ""; };

function populateInvitation() {
  const c = weddingConfig;
  document.title = `${c.bride} & ${c.groom} — Wedding Invitation`;
  ["#coverBride", "#heroBride"].forEach(id => setText(id, c.bride));
  ["#coverGroom", "#heroGroom"].forEach(id => setText(id, c.groom));
  setText("#coverDate", c.displayDate); setText("#heroDate", c.displayDate);
  setText("#coverVenue", c.venue); setText("#heroVenue", c.venue);
  const initials = `${c.groom[0]}&${c.bride[0]}`;
  setText("#monogram", initials); setText("#footerMonogram", initials);
  setText("#transitionMonogram", initials); setText("#sealMonogram", initials);
  setText("#footerNames", `${c.groom} & ${c.bride}`);
  setText("#letterGroom", c.groom); setText("#letterBride", c.bride); setText("#letterDate", c.displayDate);
  $("#openingPhoto").style.backgroundImage = `url('${c.images.openingImage}')`;
  $("#heroImage").src = c.images.heroImage; $("#dressImage").src = c.images.dressImage;
  setText("#dressTitle", c.dressCode.title); setText("#dressDescription", c.dressCode.description);
  setText("#rsvpDeadline", c.rsvpDeadline);
  ["ceremony", "reception"].forEach(type => {
    const info = c[type];
    setText(`#${type}When`, `${info.date} • ${info.time}`);
    setText(`#${type}Venue`, info.venue); setText(`#${type}Address`, info.address);
    $(`#${type}Map`).href = info.mapLink;
  });
  $("#storyList").innerHTML = c.story.map((item, index) => `
    <article class="story-entry">
      <div class="story-photo reveal zoom"><img src="${item.image}" alt="${item.title}" loading="lazy"></div>
      <div class="story-copy reveal up"><div class="story-number">0${index + 1}</div><time>${item.date}</time><h3>${item.title}</h3><p>${item.text}</p></div>
    </article>`).join("");
  $("#scheduleList").innerHTML = c.timeline.map(item => `<article class="schedule-item reveal up"><time>${item.time}</time><h3>${item.title}</h3><p>${item.text}</p></article>`).join("");
  $("#galleryGrid").innerHTML = c.images.galleryImages.map((image, index) => `<button class="gallery-item reveal zoom" data-index="${index}" aria-label="Open photo ${index + 1}: ${image.alt}"><img src="${image.src}" alt="${image.alt}" loading="lazy"></button>`).join("");
  if (c.backgroundMusic) $("#music").src = c.backgroundMusic;
}

const transitionDelay = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
let invitationTransitioning = false;

async function beginMusic() {
  const audio = $("#music");
  const musicButton = $("#musicButton");

  if (!weddingConfig.backgroundMusic || !audio) return;

  try {
    audio.volume = 0.3;
    await audio.play();
    musicButton.classList.add("playing");
    musicButton.setAttribute("aria-label", "Pause music");
  } catch (error) {
    console.warn("Music could not autoplay:", error);
  }
}

async function openInvitation() {
  if (invitationTransitioning) return;
  invitationTransitioning = true;

  const opening = $("#opening");
  const main = $("#invitation");
  const musicButton = $("#musicButton");
  const transition = $("#invitationTransition");
  const caption = $("#transitionCaption");
  const timing = reducedMotion ? { open: 40, reveal: 80, finish: 130 } : { open: 180, reveal: 1450, finish: 2250 };

  beginMusic();
  opening.classList.add("is-transitioning");
  transition.className = "invitation-transition active";
  transition.setAttribute("aria-hidden", "false");
  caption.textContent = "Opening your invitation";

  await transitionDelay(timing.open);
  transition.classList.add("opening");

  await transitionDelay(timing.reveal - timing.open);
  main.classList.add("visible");
  main.setAttribute("aria-hidden", "false");
  transition.classList.add("revealing");
  opening.classList.add("is-open");

  await transitionDelay(timing.finish - timing.reveal);
  opening.hidden = true;
  opening.classList.remove("is-transitioning");
  transition.className = "invitation-transition";
  transition.setAttribute("aria-hidden", "true");
  document.body.classList.remove("invitation-locked");
  musicButton.classList.add("visible");
  window.scrollTo({ top: 0, behavior: "auto" });
  $(".nav-mark").focus({ preventScroll: true });
  invitationTransitioning = false;
}

async function closeInvitation(event) {
  if (event) event.preventDefault();
  if (invitationTransitioning || !$("#invitation").classList.contains("visible")) return;
  invitationTransitioning = true;

  const opening = $("#opening");
  const main = $("#invitation");
  const transition = $("#invitationTransition");
  const caption = $("#transitionCaption");
  const musicButton = $("#musicButton");
  const audio = $("#music");
  const links = $(".nav-links");
  const toggle = $(".menu-toggle");
  const timing = reducedMotion ? { tuck: 45, seal: 85, cover: 130 } : { tuck: 650, seal: 1450, cover: 2350 };

  document.body.classList.add("invitation-locked");
  links.classList.remove("open");
  toggle.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  transition.className = "invitation-transition active closing";
  transition.setAttribute("aria-hidden", "false");
  caption.textContent = "Closing your invitation";

  await transitionDelay(timing.tuck);
  main.classList.remove("visible");
  main.setAttribute("aria-hidden", "true");
  transition.classList.add("tucking");

  await transitionDelay(timing.seal - timing.tuck);
  transition.classList.add("sealing");

  await transitionDelay(timing.cover - timing.seal);
  opening.hidden = false;
  opening.classList.remove("is-open", "is-transitioning");
  musicButton.classList.remove("visible", "playing");
  musicButton.setAttribute("aria-label", "Play music");
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  window.scrollTo({ top: 0, behavior: "auto" });
  transition.className = "invitation-transition";
  transition.setAttribute("aria-hidden", "true");
  $("#openInvitation").focus({ preventScroll: true });
  invitationTransitioning = false;
}

function setupReveals() {
  if (!("IntersectionObserver" in window)) return $$(".reveal").forEach(el => el.classList.add("visible"));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  }), { threshold: .13, rootMargin: "0px 0px -30px" });
  $$(".reveal").forEach(el => observer.observe(el));
}

function setupCountdown() {
  const [date, time] = weddingConfig.weddingDate.split("T");
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);

  const destination = new Date(year, month - 1, day, hour, minute, 0).getTime();

  const update = () => {
    const distance = destination - Date.now();

    if (distance <= 0) {
      $("#countGrid").style.display = "none";
      $("#todayMessage").style.display = "block";
      return;
    }

    const years = Math.floor(distance / (365.25 * 86400000));
    const days = Math.floor((distance % (365.25 * 86400000)) / 86400000);
    const hours = Math.floor((distance / 3600000) % 24);
    const minutes = Math.floor((distance / 60000) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    setText("#years", String(years).padStart(2, "0"));
    setText("#days", String(days).padStart(3, "0"));
    setText("#hours", String(hours).padStart(2, "0"));
    setText("#minutes", String(minutes).padStart(2, "0"));
    setText("#seconds", String(seconds).padStart(2, "0"));
  };

  update();
  setInterval(update, 1000);
}

function setupNavigation() {
  const nav = $("#nav"), toggle = $(".menu-toggle"), links = $(".nav-links");
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 40), { passive: true });
  toggle.addEventListener("click", () => { const open = links.classList.toggle("open"); toggle.classList.toggle("open", open); toggle.setAttribute("aria-expanded", open); });
  $$("a", links).forEach(link => link.addEventListener("click", () => { links.classList.remove("open"); toggle.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }));
}

function setupParallax() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const image = $("#heroImage"); let ticking = false;
  const update = () => {
    const hero = $("#home").getBoundingClientRect();
    if (hero.bottom > 0 && hero.top < innerHeight) {
      const progress = (innerHeight - hero.top) / (innerHeight + hero.height);
      image.style.transform = `scale(1.06) translateY(${(progress - .5) * 28}px)`;
    }
    ticking = false;
  };
  window.addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
  update();
}

function setupButtons() {
  $$(".ripple").forEach(button => button.addEventListener("click", event => {
    const rect = button.getBoundingClientRect(), dot = document.createElement("span");
    const size = Math.max(rect.width, rect.height); dot.className = "ripple-dot";
    Object.assign(dot.style, { width: `${size}px`, height: `${size}px`, left: `${event.clientX - rect.left - size / 2}px`, top: `${event.clientY - rect.top - size / 2}px` });
    button.append(dot); setTimeout(() => dot.remove(), 700);
  }));
}
function setupEntourageModal() {

  const modal = $("#entourageModal");

  if (!modal) {
    console.warn("Entourage modal not found.");
    return;
  }

  const openButton = $("#openEntourage");

  if (!openButton) {
    console.warn("Entourage open button not found.");
    return;
  }


  /* =========================================================
     RENDER ENTOURAGE
     ========================================================= */

  function renderEntourage() {

    const entourage = weddingConfig.entourage;

    const container = $("#entourageContent");

    if (!container) {
      console.warn("Entourage content container not found.");
      return;
    }


    /* =========================================================
       CREATE NAMES
       ========================================================= */

    const createNames = (names) => {

      if (!Array.isArray(names) || names.length === 0) {

        return `
          <p class="entourage-empty">
            To be announced
          </p>
        `;

      }

      return `
        <div class="entourage-names">

          ${names.map(name => `
            <span>${name}</span>
          `).join("")}

        </div>
      `;
    };


    /* =========================================================
       CREATE GROUP
       ========================================================= */

    const createGroup = (
      title,
      names,
      className = ""
    ) => {

      return `
        <article class="entourage-group ${className}">

          <h3>
            ${title}
          </h3>

          ${createNames(names)}

        </article>
      `;
    };


    /* =========================================================
       BUILD CONTENT
       ========================================================= */

    container.innerHTML = `

      <!-- MAID OF HONOR / BEST MAN -->

      <div class="entourage-featured-grid">

        ${createGroup(
          "Maid of Honor",
          entourage.maidOfHonor,
          "featured"
        )}

        ${createGroup(
          "Best Man",
          entourage.bestMan,
          "featured"
        )}

      </div>


      <!-- DIVIDER -->

      <div class="entourage-section-divider">
        <span>✦</span>
      </div>

      <div class="entourage-maids-grid">
      <!-- BRIDESMAIDS -->

      ${createGroup(
        "Bridesmaids",
        entourage.bridesmaids
      )}
      

      <!-- GROOMSMEN -->

      ${createGroup(
        "Groomsmen",
        entourage.groomsmen
      )}
      </div>

      <!-- DIVIDER -->

      <div class="entourage-section-divider">
        <span>✦</span>
      </div>


      <!-- PARENTS -->

      <div class="entourage-parents-grid">

        ${createGroup(
          "Parents of the Bride",
          entourage.parents.bride
        )}

        ${createGroup(
          "Parents of the Groom",
          entourage.parents.groom
        )}

      </div>


      <!-- DIVIDER -->

      <div class="entourage-section-divider">
        <span>✦</span>
      </div>


      <!-- PRINCIPAL -->

      <div class="entourage-principal-grid">

        ${createGroup(
          "Principal Sponsors",
          entourage.principalSponsors
        )}

      </div>

      <!-- DIVIDER -->

      <div class="entourage-section-divider">
        <span>✦</span>
      </div>


      <!-- BEARERS -->

      <div class="entourage-bearers-grid">

        ${createGroup(
          "Flower Girls",
          entourage.flowerGirls
        )}

        ${createGroup(
          "Ring Bearer",
          entourage.ringBearer
        )}

        ${createGroup(
          "Bible Bearer",
          entourage.bibleBearer
        )}

        ${createGroup(
          "Coin Bearer",
          entourage.coinBearer
        )}

      </div>

    `;
  }


  /* =========================================================
     OPEN MODAL
     ========================================================= */

  const open = () => {

    console.log("Opening entourage modal...");

    renderEntourage();

    /*
     * IMPORTANT:
     * CSS uses .is-open, so JavaScript must also use .is-open.
     */

    modal.classList.add("is-open");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "entourage-modal-open"
    );


    /* Prevent focus issues */

    setTimeout(() => {

      const closeButton =
        modal.querySelector(
          ".entourage-modal-close"
        );

      if (closeButton) {
        closeButton.focus();
      }

    }, 300);

  };


  /* =========================================================
     CLOSE MODAL
     ========================================================= */

  const close = () => {

    modal.classList.remove("is-open");

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "entourage-modal-open"
    );

  };


  /* =========================================================
     OPEN BUTTON
     ========================================================= */

  openButton.addEventListener(
    "click",
    function (event) {

      event.preventDefault();
      event.stopPropagation();

      open();

    }
  );


  /* =========================================================
     CLOSE BUTTONS
     ========================================================= */

  $$('[data-close="entourage"]')
    .forEach(element => {

      element.addEventListener(
        "click",
        function (event) {

          event.preventDefault();
          event.stopPropagation();

          close();

        }
      );

    });


  /* =========================================================
     RETURN API
     ========================================================= */

  return {
    modal,
    open,
    close
  };

}
const RSVP_URL = "https://script.google.com/macros/s/AKfycbxGfWN8HTsdSwOVr9fjfROgGmHcx-qkYteAwSUoJWLvXHsGSl4D775yusUtEjx-eswPKQ/exec";

function setupRSVP() {

  const modal = $("#rsvpModal");

  // Step 1
  const lookup = $("#guestLookup");
  const guestName = $("#guestName");
  const guestError = $("#guestError");
  const checkGuest = $("#checkGuest");

  // Step 2
  const plusOneStep = $("#plusOneStep");
  const plusOneName = $("#plusOneName");
  const plusOneError = $("#plusOneError");
  const continueWithPlusOne = $("#continueWithPlusOne");
  const plusOneWelcome = $("#plusOneWelcome");

  // Step 3
  const form = $("#rsvpForm");
  const rsvpName = $("#rsvpName");
  const rsvpPlusOne = $("#rsvpPlusOne");
  const guestWelcome = $("#guestWelcome");

  // Success
  const success = $("#formSuccess");


  // =====================================
  // OPEN MODAL
  // =====================================

  const open = () => {

    modal.classList.add("open");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow = "hidden";


    // Reset everything

    lookup.style.display = "block";

    plusOneStep.style.display = "none";

    form.style.display = "none";

    success.style.display = "none";


    guestError.style.display = "none";

    plusOneError.style.display = "none";


    guestName.value = "";

    plusOneName.value = "";

    rsvpName.value = "";

    rsvpPlusOne.value = "";


    setTimeout(() => {
      guestName.focus();
    }, 350);
  };


  // =====================================
  // CLOSE MODAL
  // =====================================

  const close = () => {

    modal.classList.remove("open");

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    restoreBodyOverflow();
  };


  $("#openRsvp").addEventListener(
    "click",
    open
  );


  $$('[data-close="rsvp"]').forEach(el => {

    el.addEventListener(
      "click",
      close
    );

  });


  // =====================================
  // CHECK GUEST
  // =====================================

  checkGuest.addEventListener(
    "click",
    async () => {

      const name =
        guestName.value.trim();


      if (!name) {

        guestError.textContent =
          "Please enter your full name.";

        guestError.style.display =
          "block";

        guestName.focus();

        return;
      }


      checkGuest.disabled = true;

      checkGuest.innerHTML =
        "Checking...";

      guestError.style.display =
        "none";


      try {

        const response = await fetch(
          RSVP_URL +
          "?action=checkGuest&name=" +
          encodeURIComponent(name)
        );


        const result =
          await response.json();


        if (!result.found) {

          guestError.textContent =
            "We couldn't find your name on our guest list. Please check your spelling and try again.";

          guestError.style.display =
            "block";

          return;
        }


        // Guest found

        rsvpName.value =
          result.name;


        guestWelcome.textContent =
          `Welcome, ${result.name}! ❤️`;


        // =====================================
        // CHECK PLUS ONE
        // =====================================

        if (
          result.withPlusOne === true
        ) {

          // Guest has a Plus One

          lookup.style.display =
            "none";

          plusOneStep.style.display =
            "block";

          plusOneWelcome.textContent =
            `Welcome, ${result.name}! ❤️`;

          setTimeout(() => {
            plusOneName.focus();
          }, 100);

        } else {

          // Guest does NOT have a Plus One

          lookup.style.display =
            "none";

          form.style.display =
            "block";

        }

      } catch (error) {

        console.error(
          "Guest lookup failed:",
          error
        );

        guestError.textContent =
          "We're having trouble checking the guest list. Please try again.";

        guestError.style.display =
          "block";

      } finally {

        checkGuest.disabled =
          false;

        checkGuest.innerHTML =
          'Continue <span>→</span>';

      }

    }
  );


  // =====================================
  // PLUS ONE CONTINUE
  // =====================================

  continueWithPlusOne.addEventListener(
    "click",
    () => {

      const name =
        plusOneName.value.trim();


      if (!name) {

        plusOneError.textContent =
          "Please enter your Plus One's name.";

        plusOneError.style.display =
          "block";

        plusOneName.focus();

        return;
      }


      plusOneError.style.display =
        "none";


      rsvpPlusOne.value =
        name;


      plusOneStep.style.display =
        "none";

      form.style.display =
        "block";

    }
  );


  // =====================================
  // SUBMIT RSVP
  // =====================================

  form.addEventListener(
    "submit",
    async event => {

      event.preventDefault();


      const submission =
        Object.fromEntries(
          new FormData(form)
        );


      const button =
        form.querySelector(
          'button[type="submit"]'
        );


      button.disabled =
        true;

      button.innerHTML =
        "Sending...";


      try {

        await fetch(
          RSVP_URL,
          {
            method: "POST",

            mode: "no-cors",

            headers: {
              "Content-Type":
                "text/plain"
            },

            body:
              JSON.stringify(
                submission
              )
          }
        );


        form.style.display =
          "none";

        success.style.display =
          "block";


        createHeartBurst(
          innerWidth / 2,
          innerHeight / 2
        );


        form.reset();


      } catch (error) {

        console.error(
          "RSVP submission failed:",
          error
        );


        alert(
          "Sorry, we couldn't submit your RSVP. Please try again."
        );


        button.disabled =
          false;

        button.innerHTML =
          'Send My RSVP <span>→</span>';

      }

    }
  );


  return {
    modal,
    close
  };
}

function setupGallery() {
  const lightbox = $("#lightbox"), image = $(".lightbox-stage img"), caption = $(".lightbox-stage p"), count = $(".lightbox-count");
  let current = 0, touchX = 0;
  const show = index => { current = (index + weddingConfig.images.galleryImages.length) % weddingConfig.images.galleryImages.length; const item = weddingConfig.images.galleryImages[current]; image.src = item.src; image.alt = item.alt; caption.textContent = item.alt; count.textContent = `${current + 1} / ${weddingConfig.images.galleryImages.length}`; image.style.animation = "none"; requestAnimationFrame(() => image.style.animation = ""); };
  const open = index => { show(index); lightbox.classList.add("open"); lightbox.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; };
  const close = () => { lightbox.classList.remove("open"); lightbox.setAttribute("aria-hidden", "true"); restoreBodyOverflow(); };
  $$(".gallery-item").forEach(item => item.addEventListener("click", () => open(Number(item.dataset.index))));
  $(".lightbox-close").addEventListener("click", close); $(".lightbox-prev").addEventListener("click", () => show(current - 1)); $(".lightbox-next").addEventListener("click", () => show(current + 1));
  lightbox.addEventListener("click", e => { if (e.target === lightbox) close(); });
  lightbox.addEventListener("touchstart", e => touchX = e.changedTouches[0].screenX, { passive: true });
  lightbox.addEventListener("touchend", e => { const delta = e.changedTouches[0].screenX - touchX; if (Math.abs(delta) > 45) show(current + (delta < 0 ? 1 : -1)); }, { passive: true });
  return { lightbox, close, show: direction => show(current + direction) };
}

function setupMusic() {
    const button = $("#musicButton");
    const audio = $("#music");

    let currentTrack = 0;

    const playlist = weddingConfig.backgroundMusic;

    if (!Array.isArray(playlist) || playlist.length === 0) {
        console.warn("No background music configured.");
        return;
    }

    /* =========================================================
       CREATE PLAYLIST MENU
       ========================================================= */

    const musicMenu = document.createElement("div");

    musicMenu.className = "music-menu";
    musicMenu.id = "musicMenu";

    musicMenu.innerHTML = `
    <div class="music-menu-header">
        <span>Our Music</span>

        <button
            type="button"
            class="music-play-toggle"
            id="musicPlayToggle"
            aria-label="Pause music"
        >
            <svg class="music-play-icon" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
            </svg>

            <svg class="music-pause-icon" viewBox="0 0 24 24">
                <path d="M6 5h4v14H6zM14 5h4v14h-4z"/>
            </svg>
        </button>
    </div>

    <div class="music-list" id="musicList"></div>
`;

    document.body.appendChild(musicMenu);

    const musicList = document.getElementById("musicList");


    /* =========================================================
       CREATE SONG BUTTONS
       ========================================================= */

    playlist.forEach((song, index) => {

        const songButton = document.createElement("button");

        songButton.type = "button";
        songButton.className = "music-track";

        songButton.innerHTML = `
            <span class="music-track-number">${index + 1}</span>
            <span class="music-track-name">${song.title}</span>
        `;

        songButton.addEventListener("click", async (event) => {

            event.stopPropagation();

            currentTrack = index;

            audio.src = song.file;

            try {

                await audio.play();

                updateActiveTrack();

            } catch (error) {

                console.warn(
                    "Music could not play:",
                    error
                );
            }
        });


        musicList.appendChild(songButton);
    });


    const trackButtons =
        musicList.querySelectorAll(".music-track");


    /* =========================================================
       ACTIVE SONG
       ========================================================= */

    function updateActiveTrack() {

        trackButtons.forEach((track, index) => {

            track.classList.toggle(
                "active",
                index === currentTrack
            );

        });
    }

    /* =========================================================
      PLAY / PAUSE BUTTON
      ========================================================= */

    function updatePlayToggle() {

        if (audio.paused) {

            musicPlayToggle.classList.remove("playing");

            musicPlayToggle.setAttribute(
                "aria-label",
                "Play music"
            );

        } else {

            musicPlayToggle.classList.add("playing");

            musicPlayToggle.setAttribute(
                "aria-label",
                "Pause music"
            );
        }
    }


    musicPlayToggle.addEventListener("click", async (event) => {

        event.stopPropagation();

        if (audio.paused) {

            try {

                if (!audio.src) {
                    loadTrack(currentTrack);
                }

                await audio.play();

            } catch (error) {

                console.warn(
                    "Music could not play:",
                    error
                );
            }

        } else {

            audio.pause();
        }

        updatePlayToggle();
    });


    /* =========================================================
       LOAD SONG
       ========================================================= */

    function loadTrack(index, autoplay = false) {

        if (!playlist[index]) return;

        currentTrack = index;

        audio.src = playlist[index].file;

        updateActiveTrack();

        if (autoplay) {

            audio.play()
                .then(() => {

                    button.classList.add("playing");

                    button.setAttribute(
                        "aria-label",
                        "Pause music"
                    );

                })
                .catch(error => {

                    console.warn(
                        "Music could not play:",
                        error
                    );

                });
        }
    }


        /* =========================================================
          MUSIC BUTTON
          ========================================================= */

      button.addEventListener("click", (event) => {

          event.stopPropagation();

          // Only open / close the playlist.
          // DO NOT pause or play the music.
          musicMenu.classList.toggle("show");
      });

    /* =========================================================
       NEXT SONG
       ========================================================= */

    audio.addEventListener("ended", () => {

        currentTrack++;

        if (currentTrack >= playlist.length) {
            currentTrack = 0;
        }

        loadTrack(currentTrack, true);
    });


    /* =========================================================
       AUDIO STATE
       ========================================================= */

      audio.addEventListener("play", () => {

          button.classList.add("playing");

          button.setAttribute(
              "aria-label",
              "Open music playlist"
          );

          musicPlayToggle.classList.add("playing");

          musicPlayToggle.setAttribute(
              "aria-label",
              "Pause music"
          );

          updateActiveTrack();
      });


      audio.addEventListener("pause", () => {

          button.classList.remove("playing");

          button.setAttribute(
              "aria-label",
              "Open music playlist"
          );

          musicPlayToggle.classList.remove("playing");

          musicPlayToggle.setAttribute(
              "aria-label",
              "Play music"
          );
      });


    /* =========================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
       ========================================================= */

    document.addEventListener("click", (event) => {

        if (
            !musicMenu.contains(event.target) &&
            !button.contains(event.target)
        ) {

            musicMenu.classList.remove("show");
        }
    });


    /* =========================================================
       INITIALIZE FIRST SONG
       ========================================================= */

    loadTrack(0, false);
}

function createHeartBurst(x, y) {
  const burst = $("#heartBurst"); burst.style.left = `${x}px`; burst.style.top = `${y}px`;
  for (let i = 0; i < 8; i++) { const heart = document.createElement("i"); heart.textContent = i % 2 ? "♥" : "✦"; const angle = (Math.PI * 2 * i) / 8, distance = 35 + Math.random() * 40; heart.style.setProperty("--x", `${Math.cos(angle) * distance}px`); heart.style.setProperty("--y", `${Math.sin(angle) * distance}px`); heart.style.setProperty("--r", `${Math.random() * 100 - 50}deg`); burst.append(heart); setTimeout(() => heart.remove(), 850); }
}

populateInvitation();

setupReveals();
setupCountdown();
setupNavigation();
setupParallax();
setupButtons();
setupMusic();
setupEntourageModal();

const rsvp = setupRSVP();
const gallery = setupGallery();

$("#openInvitation").addEventListener("click", openInvitation);

$(".nav-mark").addEventListener("click", closeInvitation);

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    if (rsvp.modal.classList.contains("open")) {
      rsvp.close();
    }

    if (gallery.lightbox.classList.contains("open")) {
      gallery.close();
    }

    const entourageModal = $("#entourageModal");

    if (
      entourageModal &&
      entourageModal.classList.contains("open")
    ) {
      entourageModal
        .querySelector('[data-close="entourage"]')
        ?.click();
    }
  }

  if (
    gallery.lightbox.classList.contains("open") &&
    event.key === "ArrowRight"
  ) {
    gallery.show(1);
  }

  if (
    gallery.lightbox.classList.contains("open") &&
    event.key === "ArrowLeft"
  ) {
    gallery.show(-1);
  }

});