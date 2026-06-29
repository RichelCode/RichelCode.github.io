/* ════════════════════════════════════════════════════════════════════════
   SITE CONFIG, identity, links, and integration credentials.
   ════════════════════════════════════════════════════════════════════════ */

export const site = {
  name: "Richel Ohenewaa Attafuah",
  firstName: "Richel",
  tagline: "Richel makes tech easy",
  role: "AI/ML Engineer · Data Scientist · Educator",
  valueProp:
    "I build AI and machine learning systems that solve real problems, and I make the hard parts easy to understand.",
  email: "richelattafuah@gmail.com",
  location: "Oxford, Ohio · from Ghana",
  url: "https://richelcode.github.io",
};

/* ----------------------------------------------------------------------------
   SOCIAL LINKS
---------------------------------------------------------------------------- */
export const socials = {
  github: "https://github.com/RichelCode", // TODO: confirm GitHub URL
  linkedin: "https://www.linkedin.com/in/richel-attafuah", // TODO: paste your exact LinkedIn URL
  medium: "https://medium.com/@richelattafuah",
  youtube: "https://www.youtube.com/@richelattafuah23",
  email: "mailto:richelattafuah@gmail.com",
};

/* ----------------------------------------------------------------------------
   FORMSPREE, contact form (React, @formspree/react)
   Form ID provided and wired in. Change here if you ever rotate it.
---------------------------------------------------------------------------- */
export const FORMSPREE_ID = "xrewklzz";

/* ----------------------------------------------------------------------------
   MAILERLITE, newsletter + product-interest forms (custom-styled, posts to
   the JSONP subscribe action below). Account + action provided and wired in.
---------------------------------------------------------------------------- */
export const MAILERLITE_ACCOUNT_ID = "2475589";
export const MAILERLITE_SUBSCRIBE_ACTION =
  "https://assets.mailerlite.com/jsonp/2475589/forms/191493913543968361/subscribe";

/* Freebie / ebook signups.
   Every signup is tagged with the group "freebie-rag-ebook" (sent as
   fields[interest]) so you can separate it from the general newsletter.

   OPTIONAL (recommended): create a SECOND MailerLite embedded form whose group
   is "RAG ebook", then paste its subscribe action URL here to route freebie
   signups into their own MailerLite group automatically. If left as-is, signups
   still arrive (tagged via the interest field) on the main form. */
export const MAILERLITE_FREEBIE_ACTION = MAILERLITE_SUBSCRIBE_ACTION; // TODO (optional): dedicated freebie form action URL
export const FREEBIE_GROUP = "freebie-rag-ebook";

/* Direct download link for the finished ebook PDF. Leave empty until the PDF is
   ready: delivery happens via a MailerLite automation that emails the link. */
export const EBOOK_DOWNLOAD_URL = ""; // TODO: paste the public PDF link once the ebook is finished

/* ----------------------------------------------------------------------------
   ASSETS the user provides (drop the files at these paths in the repo):
     - public/images/richel-headshot.jpg   (professional headshot, hero + about)
     - public/images/hello-wave.gif        (small cute waving GIF beside greeting)
   The site falls back to a styled placeholder until the real files are added.
---------------------------------------------------------------------------- */
export const assets = {
  headshot: "/images/richel-headshot.jpg",
  helloGif: "/images/hello-wave.gif",
  // About-page photo story (building / teaching / portrait)
  aboutBuilding: "/images/about-building.jpg",
  aboutTeaching: "/images/about-teaching.jpg",
  aboutPortrait: "/images/about-portrait.jpg",
  // Freebie ebook cover mockup (replace with your real cover when ready)
  ebookCover: "/images/rag-ebook-cover.png",
};

/* ----------------------------------------------------------------------------
   PRIMARY NAV, the "rooms" of the site
---------------------------------------------------------------------------- */
export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Work With Me", href: "/work" },
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "Videos", href: "/videos" },
  { label: "Products", href: "/products" },
  { label: "Freebies", href: "/freebies" },
];
