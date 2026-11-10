export const emailpos = {
  slug: "emailpos",
  name: "EmailPOS",
  path: "/work/emailpos",
  url: "https://eposaudiomail.com/lp.php?slug=activegard",
  urlLabel: "See a live landing page",
  location: "Global",
  eyebrow: "Case study",
  headline: "Enterprise email, actually production-ready.",
  previewHeading: "Stop building campaigns inside Salesforce.",
  challengeHeading: "Global brand. Painful production.",
  solutionHeading: "A studio that sits in front of Marketing Cloud.",
  stackHeading: "Purpose-built, not another ESP.",
  stackBody:
    "Custom PHP production app wired to Salesforce Marketing Cloud and GA4. Block editor, versioned templates, landing pages in EPOS chrome, and a checker that catches size, links, and unsubscribe issues before send.",
  outcomeHeading: "Live across regions and channels.",
  lede:
    "EmailPOS is the campaign studio behind EPOS Audio. geodesAic built a full production pipeline — templates, editor, landing pages, QA, and analytics — so marketers can ship brand-safe email without living in Salesforce Marketing Cloud.",
  challenge: {
    title: "The challenge",
    body: "A global headset brand needed region- and channel-specific email and landing pages that matched eposaudio.com, passed production checks, and still sent through Salesforce Marketing Cloud. Off-the-shelf ESPs could not own the EPOS template, the QA bar, or the channel split.",
  },
  solution: {
    title: "The solution",
    body: "A purpose-built studio: curated templates, a block editor, AI draft-from-URL, landing pages with the real EPOS header and footer, a production checker, asset library, and a dashboard over Marketing Cloud sends. Channel vs end-customer, region by region.",
  },
  stack: ["Custom PHP", "Salesforce Marketing Cloud", "GA4", "Cloudflare", "Block editor"],
  outcome: {
    title: "The outcome",
    body: "A live operations platform used for EPOS campaigns across UKI, DACH, France, Nordics and more. Marketers start from templates or a web page, pass the checker, publish a matching landing page, and read send performance without rebuilding the brand in an ESP.",
  },
  frames: [
    {
      label: "Product enablement & web engineering",
      title: "A real production app, not a plugin.",
      body: "Email editor, landing-page builder, asset library, admin, and public LP rendering that wraps official EPOS chrome. Evidence geodesAic can ship an internal product teams actually open every week.",
    },
    {
      label: "Business process & automation",
      title: "Template, check, send, measure.",
      body: "Generate-from-URL, shared templates with version history, a checker for size/links/unsubscribe, and Marketing Cloud analytics. The same AI-process story: remove handoffs between brand, regions, and the ESP.",
    },
    {
      label: "Branding & go-to-market",
      title: "EPOS identity, channel by channel.",
      body: "Campaigns stay on-brand for partner and end-customer audiences. Landing pages look like eposaudio.com. The commercial system is the product: faster launches, fewer broken emails, one studio for a global team.",
    },
  ],
  flow: ["Template", "Editor", "Checker", "Landing page", "SFMC send"],
} as const;
