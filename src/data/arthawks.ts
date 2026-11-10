export const arthawks = {
  slug: "arthawks",
  name: "Art Hawks",
  path: "/work/arthawks",
  url: "https://arthawks.com",
  urlLabel: "Visit arthawks.com",
  location: "Bristol",
  eyebrow: "Case study",
  headline: "From brand to live marketplace.",
  previewHeading: "Art on real walls. No gallery cut.",
  challengeHeading: "Monetise the room, skip the gallery.",
  solutionHeading: "Map, QR, match, pay, collect.",
  stackHeading: "Fast, light, and actually shipping.",
  stackBody:
    "Custom platform on a modern stack — not a WordPress skin. Built for instant loads, a map-first explorer experience, and a payment path venues can trust.",
  outcomeHeading: "Live. Scalable. Commercially grounded.",
  lede:
    "Art Hawks turns cafés, bars, and neighbourhood rooms into a city-wide gallery. geodesAic took it from identity and architecture through to a live product with matching, payments, and venue operations.",
  challenge: {
    title: "The challenge",
    body: "Connect independent artists directly with commercial venues so physical rooms can sell original work — without gallery overhead, and without forcing either side onto a bloated template stack.",
  },
  solution: {
    title: "The solution",
    body: "A location-based platform: city map, room walls, QR on the hang, buy on the spot, collect in person. Automated venue–artist matching, a clean transaction pipeline, and onboarding that venues can actually run.",
  },
  stack: ["SvelteKit", "Supabase", "Tailwind CSS", "Stripe", "MapLibre"],
  outcome: {
    title: "The outcome",
    body: "A deployed, scalable product that proves end-to-end execution: brand identity, commercial model, and live code in one system. Pilot city Bristol. Artists keep 70%; venues earn 15% on a hung sale.",
  },
  frames: [
    {
      label: "Product enablement & web engineering",
      title: "Custom build, not a template.",
      body: "SvelteKit, Supabase, Stripe, and a map-first interface. Fast, light, and built to scale — evidence that geodesAic ships real web applications, not off-the-shelf skins.",
    },
    {
      label: "Business process & automation",
      title: "Matching, QR discovery, payments.",
      body: "Venue–artist matching, wall QRs, and a buy-to-pickup pipeline. The same operational story as geodesAic’s AI process work: remove handoffs, cut friction, keep humans on the decisions that matter.",
    },
    {
      label: "Branding & go-to-market",
      title: "Identity with a commercial spine.",
      body: "Platform identity, a 70 / 15 / 15 commission split, and venue onboard workflows. The build is backed by a model venues and artists can explain in one sentence.",
    },
  ],
  flow: ["Map", "Room", "Wall QR", "Buy", "Pickup"],
} as const;
