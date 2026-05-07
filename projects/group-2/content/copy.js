// All op-ed copy in one editable file.
// Non-coders can edit this freely; structure is stable and consumed by the scene modules.

export const copy = {
  meta: {
    title: "The Next Frontier of AI Isn't a Model. It's an Orbit.",
    author: "Asger Møller Grimberg",
    dateline: "An op-ed on the geopolitics of AI in space",
    description:
      "An interactive op-ed on the geopolitics of AI data centres in space.",
  },

  liftoff: {
    kicker: "Geopolitics of Artificial Intelligence — Space & Data centres",
    title: "The Next Frontier of AI\nMay Not Be Trained on Earth.",
    subtitle:
      "Within a decade, the most consequential compute may no longer be on Earth at all.",
    scrollHint: "Scroll to launch",
  },

  whyNow: {
    altitude: "12 km · Stratosphere",
    kicker: "Act I",
    heading: "Data centres in space: The strategic case.",
    lede: "For most of the computing age, the question of where to put a server has been a dull matter of cheap land, cool air and abundant electrons. That has recently been changing.",
    figure: {
      src: "assets/energy-chart.jpeg",
      alt: "Bar chart showing data centre electricity generation by energy source — Global, China, U.S. — 2025 vs 2035. Source: IEA / Statista.",
      caption: "Source: IEA via Statista",
    },
    sections: [
      {
        body: [
          "The idea of putting data centres in orbit, which was long the preserve of science fiction, has in the past eighteen months slipped into investor decks, research papers and regulatory filings. The reason is that Earth has become rather inhospitable to the sort of AI-related computing the world now insists on doing.",
          "Start with the demand shock. The International Energy Agency reckons that global electricity consumption from data centres will more than double by 2030, to roughly 945 terawatt-hours, which is slightly more than Japan consumes in total today. Artificial intelligence is the engine behind these projections. Power use by AI-optimised servers is growing at 30% a year and by the end of the decade America will draw more electricity to shuffle data than to smelt aluminium, forge steel, bake cement and manufacture chemicals combined. Alphabet, Amazon, Microsoft and Meta are expected to spend some $400bn combined on terrestrial data centres in 2026 alone.",
          "The grid is not keeping up. The IEA estimates that up to a fifth of planned projects risk delay for want of transmission capacity. In Virginia, Dublin and suburban Frankfurt, moratoria and utility queues now stretch past the decade. The result is that hyperscalers have quietly become energy companies that happen to run software, pursuing nuclear-reactor offtake agreements that would have seemed eccentric in 2020.",
          "Nor is the grid the only obstacle. Local communities have grown resistant to facilities that arrive with promises of tax revenue and leave with the water table. Planning battles in Ireland, the Netherlands and parts of the American south have delayed or killed projects that would otherwise have broken ground years ago. Opposition that was once fragmented is becoming organised.",
        ],
      },
      {
        subhead: "A sunnier solution",
        body: [
          "Orbit, interestingly, solves several of these problems at once. A solar panel in the right low-Earth orbit, more specifically a dawn-to-dusk sun-synchronous one that sits in nearly continuous sunlight, generates up to eight times more energy per panel per year than the equivalent on the ground, according to Google's modelling. Solar irradiance in orbit is also 36% higher than at the surface, and neither weather nor night interferes. This makes it a thermodynamic advantage for chips, where heat can be radiated directly into space, with no need for the vast cooling infrastructure that terrestrial AI campuses require. Land use falls to zero. Planning permission is, for now, not a concept.",
          "There are also structural advantages that play into strategic rather than strictly economic logic. Space is, at least in principle, jurisdiction-light: a sovereign compute layer that sits outside the patchwork of European, American and Chinese data-protection regimes. Latency for Earth-to-orbit round trips remains a constraint for anything consumer-facing, but the heaviest AI workloads, among them model training, scientific simulation and batch inference, do not require results to return in 20 milliseconds or 200. They care about the cost of compute capacity.",
        ],
      },
      {
        subhead: "Space-euphoria is not all that simple",
        body: [
          "The romance meets the rocket-launch equation. Google's feasibility paper, the most careful public analysis to date, concludes that launch costs to low-Earth orbit would need to fall to roughly $200 per kilogram before orbital compute becomes cost-competitive with a terrestrial data centre on a per-kilowatt basis. Current prices, depending on provider and profile, sit between $1,500 and $2,900. SpaceX's Starship, which is not yet operational at scale, is meant to change this, but would have to reach something like 180 launches a year, a demanding target. Google's own projection for when the economics might arrive is the mid-2030s, which in AI-investment years is several eternities.",
          "Launch costs are not the only hurdle. Cosmic radiation degrades chips, passive thermal management at data-centre scale remains unproven, and repairing a broken server in orbit is a rather more involved task than dispatching a hardware engineer. The sustainability case, often invoked as the clinching argument, is shakier than advertised. A single re-entering satellite deposits aluminium in the upper atmosphere and thousands of them falling out of orbit each year could measurably affect Earth's albedo. A 2023 FAA report projected that by 2035 debris from large constellations could injure or kill one person every two years, a finding SpaceX disputed but which independent researchers have not dismissed. Orbital slots, like the electromagnetic spectrum, are not infinite commons.",
        ],
      },
    ],
    gallery: {
      kicker: "The wager, in four frames",
      heading: "Neither fantasy nor imminent.",
      text: "Data centres in space are neither fantasy nor imminent. They are a credible hedge against a ground-based bottleneck that is real, large and arriving fast, but the hedge is contingent on a launch-cost revolution that has been promised before. The strategic case is that the bet is now cheap enough to take seriously. The strategic risk is the one common to large infrastructure everywhere: not whether it works eventually, but whether it works in time and at scale.",
      images: [
        {
          src: "assets/1Inside.avif",
          title: "Building the hardware",
          alt: "Engineers at Thales Alenia Space assembling a satellite payload in a cleanroom.",
        },
        {
          src: "assets/2Starcloud_Prototype.webp",
          title: "First orbital prototype",
          alt: "A Starcloud prototype satellite alongside a docking module against the curve of Earth.",
        },
        {
          src: "assets/3SC_sattelites.png",
          title: "A modular constellation",
          alt: "Rendering of a formation of Starcloud compute satellites connected by optical links.",
        },
        {
          src: "assets/4Starcloud_Vision_Solar_Panels.webp",
          title: "The 5 GW vision",
          alt: "A full-scale 5 GW orbital data centre concept with a 4 km solar-panel array.",
        },
      ],
    },
  },

  actors: {
    kicker: "Act II",
    heading: "Actors and strategic positioning in orbital compute.",
    lede: "The actors that matter are not those building orbital data centres outright, but those assembling the layers from which such a system could emerge. What exists today is not an industry, but a set of adjacent capabilities advancing in parallel.",
    sections: [
      {
        body: [
          "If orbital compute materialises, it will do so less by deliberate design than by convergence, as these components begin to interact under conditions in which terrestrial constraints become harder to absorb.",
          "Among companies, the movement is incremental rather than declaratory. Google's Project Suncatcher envisions compact constellations of solar-powered satellites, carrying TPUs and connected by free-space optical links, with the logic being fragmentation rather than replication: modular nodes aimed at workloads for which latency is not binding. In partnership with Planet Labs, two demonstration satellites are slated for launch by early 2027, designed to test TPU performance in the space environment and validate high-bandwidth intersatellite links. What is notable here is structural: the two leading orbital compute efforts are owned by the two largest cloud providers. This is not coincidental. Orbital compute is emerging from within existing hyperscale architectures, not alongside them, which means the firms best positioned to build it are precisely those with the most to gain from escaping terrestrial constraints. Amazon's Project Kuiper fits this picture differently. It is primarily a broadband connectivity network aimed at underserved markets, and framing it as orbital compute infrastructure overstates the case. Its relevance is indirect: it builds the transport layer that a more capable orbital system would eventually need.",
          "The strategic meaning of these developments, however, is not contained at the level of companies. It lies in how different political economies absorb, or resist, the possibility of a compute layer that is in principle less tied to territory.",
        ],
      },
      {
        subhead: "The United States",
        body: [
          "In the United States, the defining feature is concentration. The same ecosystem hosts the dominant cloud providers, leading semiconductor design firms, and the only launch company currently attempting to compress costs at the required scale. This creates a system in which orbital compute need not be planned as a discrete strategy. It can emerge as a residual response to bottlenecks within an otherwise continuous scaling model.",
          "It also carries a perceived regulatory advantage: a compute layer in orbit sits more loosely within national data regimes, offering flexibility to firms operating across jurisdictions. That claim is less settled than it appears. GDPR applies based on where data subjects are located and where the controller is established, not where processing physically occurs. The arbitrage is real at the margins, but it is not a clean jurisdictional escape.",
        ],
      },
      {
        subhead: "China",
        body: [
          "China's position is structured less by scaling constraints than by exposure to external control over critical technologies. Its AI and digital strategies have consistently prioritised reducing dependence on foreign semiconductors, cloud services and standards-setting processes. Within this framework, space infrastructure is a strategic domain in its own right.",
          "The absence of a visible Suncatcher equivalent does not indicate misalignment. China has been developing inter-satellite optical link technology through its Tiandu programme, and CASC has published roadmaps for in-orbit computing capacity. The sequencing differs from the American model, but the direction is consistent: orbital compute as an instrument of sovereign capability rather than cost optimisation.",
        ],
      },
      {
        subhead: "The European Union",
        body: [
          "The European Union operates within a system defined by partial capability and structural dependence. It faces the same terrestrial bottlenecks as the United States — grid congestion, slow permitting and local resistance — but without equivalent control over the firms that define the frontier of AI infrastructure. Its response has focused on areas where sovereignty can be more directly constructed: secure connectivity through the IRIS² constellation, and high-performance computing through EuroHPC.",
          "Neither addresses orbital compute directly. IRIS² is a connectivity play and EuroHPC has no orbital dimension. The Union's primary constraint is not where compute sits, but who owns it, and orbit does not resolve that.",
        ],
      },
      {
        subhead: "What emerges",
        body: [
          "What emerges is a set of asymmetrical positions. In the United States, orbital compute is an extension of scale. In China, a potential instrument of autonomy. In Europe, a distant hedge against a dependency that space infrastructure alone cannot fix. The technology remains contingent on cost. Its strategic relevance is already legible in how it maps onto existing distributions of power.",
        ],
      },
    ],
    map: {
      kicker: "Orbital compute ecosystems",
      heading: "Who to watch, in space and in compute.",
      sub: "The institutions and private players whose positions today are most likely to shape any move to orbital AI.",
    },
    regions: [
      {
        code: "US",
        name: "United States",
        stance: "Scale",
        approach: "Orbital compute as a residual response to terrestrial bottlenecks — absorbed into existing hyperscale architectures.",
        publicPlayers: [
          "NASA",
          "U.S. Space Force",
          "DARPA",
          "FAA Office of Commercial Space (AST)",
          "NIST",
        ],
        privatePlayers: [
          "Google — Project Suncatcher (with Planet Labs)",
          "Amazon — Project Kuiper",
          "SpaceX — Starship / Starlink",
          "NVIDIA",
          "Microsoft Azure Space",
          "Meta",
        ],
      },
      {
        code: "CN",
        name: "China",
        stance: "Autonomy",
        approach: "Orbital compute as an instrument of sovereign capability — insulated from foreign semiconductors, cloud and standards.",
        publicPlayers: [
          "CNSA (China National Space Administration)",
          "CASC (China Aerospace Science & Technology)",
          "Chinese Academy of Sciences — Tiandu programme",
          "MIIT",
        ],
        privatePlayers: [
          "Alibaba Cloud",
          "Huawei Cloud",
          "GalaxySpace",
          "Landspace",
          "CAS Space",
        ],
      },
      {
        code: "EU",
        name: "European Union",
        stance: "Sovereignty",
        approach: "Distant hedge against dependency — focus on secure connectivity and sovereign compute rather than orbital scale.",
        publicPlayers: [
          "European Commission (DG DEFIS, DG CNECT)",
          "ESA",
          "EuroHPC Joint Undertaking",
          "EUSPA",
        ],
        privatePlayers: [
          "Airbus Defence & Space",
          "Thales Alenia Space",
          "ArianeGroup",
          "OVHcloud",
          "IRIS² industrial consortium",
        ],
      },
    ],
  },

  governance: {
    altitude: "36,000 km · Geostationary",
    kicker: "Act III",
    heading: "Governance: The Treaty Landscape & Regulatory Gaps.",
    lede: "Space law was written for astronauts and satellites. Not for AI training runs.",
    intro: [
      "The frameworks that govern outer space were written for a different era of competition. The Outer Space Treaty dates to 1967 and the Liability Convention to 1972. Their authors were concerned with states launching rockets, not private firms deploying autonomous systems that make consequential decisions without human authorisation. The result is a governance architecture that was never designed for the technology it now needs to address.",
      "The most fundamental problem is jurisdictional. Space law is state-centric by design: responsibility flows through national governments, which are expected to authorise and supervise their private operators. This worked tolerably well when the actors were national space agencies. It works poorly when a cloud-based AI system, developed by a private company, launched by a contractor and operating across multiple orbital regimes, causes harm. Attribution is difficult to establish because no treaty assigns legal responsibility to an algorithm. Enforcement is impractical because no body has meaningful authority over a system that exists, physically and legally, outside any national territory.",
      "AI governance, meanwhile, has developed on an entirely separate track. The UN frameworks that address artificial intelligence — among them the Global Digital Compact and the Global Partnership on AI — are voluntary instruments oriented toward terrestrial applications. The EU AI Act is binding, but its jurisdictional reach above the atmosphere is legally ambiguous and practically untested. The two bodies of law were never designed to speak to each other, and there is no institutional mechanism that currently compels them to.",
      "What emerges is a cumulative gap rather than a single failure. Space law does not account for AI and AI regulation does not account for space.",
    ],
    tableHeading: "Overview of AI treaties and Frameworks: Who, What, Why",
    tableSubhead:
      "Key international frameworks and their limitations in governing autonomous AI and its applications in space.",
    groups: [
      {
        label: "UN Space Treaties",
        treaties: [
          {
            name: "Outer Space Treaty",
            meta: "1967 · 114 parties",
            scope:
              "Governs state use of outer space; bans weapons of mass destruction; prohibits national appropriation of celestial bodies.",
            relevance:
              "States remain responsible for national space activities, including those by private actors. Bans on weaponisation may apply to autonomous AI weapons in orbit.",
            gaps: [
              "No definition of autonomous or AI-driven 'space activity'",
              "State responsibility unclear when AI acts without human authorisation",
              "Private-sector AI operations not directly addressed",
              "No obligation for algorithmic transparency",
            ],
            severity: "critical",
          },
          {
            name: "Liability Convention",
            meta: "1972 · 98 parties",
            scope:
              "Establishes liability of launching states for damage caused by space objects. Fault-based liability for damage beyond Earth's surface.",
            relevance:
              "Primary legal mechanism for assigning blame when a space object causes harm — but written for human-operated hardware.",
            gaps: [
              "Fault attribution near-impossible for autonomous AI decisions",
              "No provision for AI-caused cyberattacks or data harm",
              "Multi-actor liability (developer, operator, AI) unresolved",
              "'Launching state' concept doesn't map to cloud-based AI",
            ],
            severity: "critical",
          },
          {
            name: "Registration Convention",
            meta: "1976 · 73 parties",
            scope:
              "Requires states to register space objects with the UN Secretary-General and maintain national registries.",
            relevance:
              "AI-enabled satellites must still be registered, providing a baseline traceability mechanism.",
            gaps: [
              "No requirement to disclose AI capabilities or autonomy level",
              "Software updates changing AI behaviour post-launch untracked",
              "Mega-constellations strain the registry system",
            ],
            severity: "significant",
          },
          {
            name: "Rescue Agreement",
            meta: "1968 · 98 parties",
            scope:
              "Obliges states to rescue astronauts and return space objects. Focuses on personnel safety and state cooperation.",
            relevance:
              "Relevant when AI systems are used in crewed missions or affect crew safety decisions.",
            gaps: [
              "Silent on AI decision-making in life-critical crewed systems",
              "No framework for human override of autonomous spacecraft",
            ],
            severity: "significant",
          },
        ],
      },
      {
        label: "Arms Control & Security",
        treaties: [
          {
            name: "Partial Nuclear Test Ban Treaty",
            meta: "1963 · 126 parties",
            scope:
              "Bans nuclear tests in the atmosphere, outer space and underwater.",
            relevance:
              "Indirectly constrains AI-directed nuclear weapons in space, but was not designed for autonomous systems.",
            gaps: [
              "Does not address AI-automated launch or targeting decisions",
              "No requirement for human authorisation in nuclear command chains",
            ],
            severity: "critical",
          },
        ],
      },
      {
        label: "Data, Digital & Emerging Frameworks",
        treaties: [
          {
            name: "EU AI Act",
            meta: "2024 · EU member states",
            scope:
              "First binding AI regulation; classifies AI systems by risk level and sets conformity, transparency and oversight requirements.",
            relevance:
              "Applies to AI systems marketed or used in the EU; space operators with an EU nexus must comply.",
            gaps: [
              "Jurisdiction in orbit remains legally ambiguous",
              "Scope for AI operating beyond Earth's atmosphere unclear",
              "No specific provisions for autonomous spacecraft or satellites",
              "Enforcement beyond Earth's surface impractical",
            ],
            severity: "significant",
          },
          {
            name: "GDPR",
            meta: "2018 · EU + EEA",
            scope: "Regulates processing of personal data of EU residents.",
            relevance:
              "Applies to Earth-observation AI that captures personal data (e.g. imagery identifying individuals).",
            gaps: [
              "Resolution thresholds for personal data from orbit undefined",
              "AI inference from satellite data not explicitly covered",
              "Cross-border data flows from space not addressed",
            ],
            severity: "significant",
          },
          {
            name: "ITU Radio Regulations",
            meta: "Ongoing · ITU members",
            scope:
              "Allocates radio spectrum and orbital slots; coordinates satellite frequency use to prevent interference.",
            relevance:
              "AI-driven satellite constellations must comply; coordination required for spectrum use.",
            gaps: [
              "Does not govern AI-driven dynamic spectrum sharing",
              "Mega-constellation filings overwhelm the ITU coordination process",
              "No standards for AI interference avoidance between operators",
            ],
            severity: "significant",
          },
        ],
      },
      {
        label: "Soft Law & Guidelines (Non-binding)",
        treaties: [
          {
            name: "UN COPUOS LTS Guidelines",
            meta: "2019 · Voluntary",
            scope:
              "21 voluntary guidelines for sustainable use of outer space, covering space debris, safety and international cooperation.",
            relevance:
              "Guidelines on space situational awareness and collision avoidance are increasingly AI-relevant.",
            gaps: [
              "Entirely voluntary — no enforcement mechanism",
              "No specific guidance on AI or autonomous systems",
              "Adoption uneven across spacefaring nations",
            ],
            severity: "critical",
          },
          {
            name: "UN AI Governance Frameworks (GDC / GPAI)",
            meta: "2024–2025 · Voluntary",
            scope:
              "Global Digital Compact and Global Partnership on AI seek to align AI development with human rights and sustainable development goals.",
            relevance:
              "Establishes norms for responsible AI that, in principle, extend to space applications.",
            gaps: [
              "No legally binding obligations",
              "Space-specific applications not addressed",
              "No mechanism to connect AI governance to space law bodies",
            ],
            severity: "critical",
          },
        ],
      },
    ],
    note: "The Moon Agreement (1979) and Export Control Regimes (MTCR, Wassenaar) also carry partial relevance but have limited ratification or narrow technical scope. No treaty currently contains explicit, binding provisions specifically governing AI or autonomous decision-making in outer space. All coverage is derivative — applied by analogy from frameworks designed for a pre-AI era. Obligations are state-centric, and regulation of non-state or autonomous actors is indirect or non-existent.",
  },

  futures: {
    altitude: "Beyond",
    kicker: "Act IV",
    heading: "What This Means for the Geopolitics of AI.",
    lede: "Three geopolitical shifts are already underway. None of them will wait for a treaty.",
    geopolitics: {
      intro: [
        "The gap between space law not accounting for AI and AI regulation not accounting for space is not a neutral absence. It is an allocation of power. Where binding law is absent, the first actor to operate sets the terms for later practice. That allocation is already taking shape in orbit: spectrum filings arrive faster than the ITU can process them, coordination rules emerge through bilateral arrangements rather than treaty, and contracts between commercial satellite operators and intelligence agencies carry terms that are routinely classified.",
        "Three geopolitical shifts are already underway.",
      ],
      shifts: [
        {
          title: "The legal regime is running out of road.",
          body: "The Outer Space Treaty forbids states from claiming sovereignty over orbit or the Moon, but says nothing about storing data, running a training cluster, or owning the software that does either. The emerging logic is one of de facto control through use: a company that saturates a useful slice of orbit has effectively claimed it, a quiet appropriation by other means that the treaty never anticipated. The treaty regime bans formal sovereignty but does not regulate functional control.",
          indicator: "The indicator to watch is orbital filings, applications submitted to the ITU to claim slices of orbit. And that indicator has already begun to tip. SpaceX has roughly 7,000 Starlink satellites in orbit and applications for 30,000 more under its Gen2 system. China\u2019s Guowang and Qianfan constellations, filed in response, account for another 27,000 between them. These satellites don\u2019t even need to launch. The filings alone are enough to lock other companies out of the same slices of orbit. Thus, the legal fiction of the commons is ending in practice before anyone has said so in law. The slots being locked up are the same ones where compute satellites \u2014 orbital data centres included \u2014 will need to fly. Filings made for connectivity foreclose orbits before AI infrastructure has even applied.",
        },
        {
          title: "Who writes the rules when the treaty bodies cannot.",
          body: "The Artemis Accords, a non-binding US-led framework, now have 62 state signatories and operational norms that function in practice as law: safety zones, resource-extraction rights, reporting requirements. The International Lunar Research Station (ILRS), the China-Russia counterpart, has a different signatory list and a different set of norms. Neither is a treaty. Both are soft-law coalitions whose standards bind participants in practice, and states without space programmes of their own are being asked to choose between two rule-sets that neither of them wrote.",
          indicator: "The indicator to watch is whose framework applies when a country actually extracts resources from the Moon, the Artemis Accords or the ILRS. And the first attempts are already scheduled. China\u2019s Chang\u2019e-7 is set to land at the lunar south pole in 2026 to look for water ice. Chang\u2019e-8 follows in 2028 to test whether China can actually extract water from the lunar surface. Artemis III, the American counterpart, is now scheduled for 2027, pushed back from an original 2025 target. Whichever framework governs the first real extraction \u2014 the Artemis Accords if the US gets there first, the ILRS if China does \u2014 becomes the standard for everyone else. Not through any treaty or declaration. Through whoever moved first. The first lunar extraction will not be performed by humans alone. Whichever framework governs it will, by extension, govern the autonomous systems doing the extracting.",
        },
        {
          title: "The public/private distinction has collapsed.",
          body: "Article VI of the Outer Space Treaty makes each state responsible for the activities of its \u201Cnon-governmental entities,\u201D a phrase that assumed a clear line between governments and private companies. That line has now collapsed, and differently in each major political economy. In the United States, SpaceX\u2019s Starshield division operates a classified variant of Starlink for American intelligence agencies under a $1.8 billion contract with the National Reconnaissance Office, signed in 2021 and disclosed only in 2024: nominally private, functionally a state capability. In China, CASC and CASIC operate within a system whose military coordination was consolidated under the PLA Aerospace Force, established directly under the Central Military Commission on 19 April 2024. The same day, the Strategic Support Force it replaced was dissolved: nominally commercial, with a chain of command that is not. In Europe, Thales Alenia Space and Airbus are the principal industrial partners for IRIS\u00B2, the EU\u2019s \u20AC10.6 billion sovereign constellation contracted in December 2024: technically private, directed by a strategic-autonomy doctrine that is not.",
          indicator: "The indicator to watch is liability attribution. The first serious incident involving a nominally private orbital system acting under classified state direction will expose whether Article VI can bear the weight placed on it, or whether the entire framework of state responsibility in space requires reconstruction from the ground up. What’s at stake is not just satellites. It is which state, which doctrine and which oversight regime applies to the compute, the models and the inference running on them.",
        },
      ],
      closer: "These three shifts are neither coordinated nor reversible. By 2030, when the ISS is retired, when Tiangong is the only government-run outpost in low-Earth orbit, and when Chang\u2019e-8 has tested Chinese extraction of lunar water ice, the questions of who governs AI in space and on whose terms will already have been answered. Those answers will not have come from treaty negotiation. They will have come from what the operators did in the meantime. By then, the question won\u2019t be whether AI in space is regulated. It will be by whom, and on whose terms.",
    },
    closer: {
      line: "The rocket has already left the pad.",
      cta: "The debate has not.",
    },
  },

  timeline: {
    kicker: "The next decade in orbit",
    heading: "Upcoming developments.",
    bands: {
      top: "COMMERCIAL / TECHNICAL",
      bottom: "GOVERNANCE / POLICY",
    },
    columns: [
      {
        year: "2024",
        highlight: true,
        top: [
          { text: "First commercial active debris-removal demonstrations (ESA’s ClearSpace-1, Astroscale’s ELSA-M)" },
          { text: "Chang’e-7 surveys the lunar south pole (ILRS)" },
          { text: "Artemis II, first crewed lunar flyby since Apollo 17" },
        ],
        bottom: [
          { text: "China stands up a dedicated PLA Aerospace Force", highlight: true },
        ],
      },
      {
        year: "2025",
        highlight: true,
        top: [
          { text: "First commercial data hardware delivered to the lunar surface (Lonestar’s “Freedom Mission”)", highlight: true, ai: true },
        ],
        bottom: [
          { text: "Publicly reported space cyber incidents up 118% year-on-year (Jan–Aug)", highlight: true },
        ],
      },
      {
        year: "2026",
        top: [
          { text: "Google’s Suncatcher: first on-orbit TPU performance results", ai: true },
        ],
        bottom: [
          { text: "UN COPUOS Long-Term Sustainability working group delivers draft report" },
          { text: "EU AI Act full applicability", ai: true },
        ],
      },
      {
        year: "2027",
        top: [
          { text: "Artemis III" },
          { text: "IRIS² initial services" },
          { text: "Axiom launches orbital data-centre prototype at ISS", ai: true },
          { text: "Google launches its Project Suncatcher demonstration satellites", ai: true },
        ],
        bottom: [
          { text: "UN Working Group on space resources report to COPUOS" },
          { text: "UNISPACE IV convening proposed" },
          { text: "First EU AI Act enforcement test on a non-EU space operator (anticipated)", ai: true },
        ],
      },
      {
        year: "2028",
        top: [
          { text: "China’s Chang’e-8 tests extraction of lunar water ice" },
          { text: "First sustained AI inference workload demonstrated in orbit", ai: true },
        ],
        bottom: [],
      },
      {
        year: "2030",
        top: [
          { text: "~80,000 satellites in orbit; ~70% commercially owned" },
          { text: "ISS retired; private LEO stations take over (Axiom, Starlab, Orbital Reef, Vast, Above: Space)" },
          { text: "First orbital data-centre demonstrator above 100 kW (target)", ai: true },
        ],
        bottom: [
          { text: "Tiangong: the only government-run station left in low-Earth orbit" },
        ],
      },
      {
        year: "2035",
        top: [
          { text: "Space economy projected at ~$1 trillion" },
          { text: "China-Russia ILRS basic station operational at lunar South Pole" },
        ],
        bottom: [],
      },
      {
        year: "2040",
        top: [],
        bottom: [],
      },
    ],
  },

  regNet: {
    kicker: "The regulatory chasm",
    heading: "Two systems. No bridge.",
    lede: "Space law was written for hardware in a state-centric era. AI regulation was written for software on the ground. Neither was designed for what happens when a model trains itself in orbit.",
    beats: [
      {
        label: "01 · Two systems",
        caption: "Two regulatory systems sit either side of the Kármán line. Each has its own treaties, regulators and logic. Neither was drafted with the other in mind.",
      },
      {
        label: "02 · Space treaties",
        caption: "Space treaties were drafted between 1967 and 1979 to govern states launching hardware. They say nothing about software, training data, or autonomous decision-making.",
      },
      {
        label: "03 · AI frameworks",
        caption: "AI regulation is younger and almost entirely terrestrial. The EU AI Act, GDPR, the OECD/UN AI compacts — all assume the system runs somewhere on Earth.",
      },
      {
        label: "04 · Bridges that don’t hold",
        caption: "There have been attempts to bridge the two — by analogy, by soft-law reference, by jurisdictional stretch. None binds. Each connection breaks at the point of attribution, scope or enforcement.",
      },
      {
        label: "05 · What falls between",
        caption: "What sits in the chasm is what nobody regulates: the technical questions that orbital AI actually raises. They have no home in either system.",
      },
    ],
    spaceCluster: {
      label: "Space treaties & soft law",
      sub: "Designed for state actors operating hardware. Pre-AI in concept, drafting and enforcement.",
      nodes: [
        { id: "ost", name: "Outer Space Treaty", year: "1967 · 114 parties", anchor: true, x: 240, y: 320,
          desc: "Bedrock of space law. Holds states responsible for their nationals’ activities in orbit and bans national appropriation. Says nothing about software, datasets, or autonomous decision-making — and Article VI’s state-private distinction is now blurred by classified contracting." },
        { id: "liab", name: "Liability Convention", year: "1972 · 98 parties", x: 320, y: 195,
          desc: "Assigns liability to launching states for damage caused by space objects. Built for human-operated hardware. Fault attribution becomes near-impossible when the cause is an autonomous AI decision, and the framework has no place for cloud-based AI services." },
        { id: "reg", name: "Registration Convention", year: "1976 · 73 parties", x: 360, y: 320,
          desc: "Requires states to register their space objects with the UN. Provides traceability of the hardware — but not of its AI capabilities, autonomy level, or post-launch model updates that change behaviour in orbit." },
        { id: "rescue", name: "Rescue Agreement", year: "1968 · 98 parties", x: 320, y: 425,
          desc: "Crew-safety treaty: states must rescue astronauts and return space objects. Silent on AI decision-making in life-critical crewed systems and on human override of autonomous spacecraft." },
        { id: "moon", name: "Moon Agreement", year: "1979 · 18 parties", weak: true, x: 220, y: 510,
          desc: "Declares the Moon a common heritage of mankind and prohibits unilateral resource appropriation. Limited ratification — none of the major spacefaring states are parties. Effectively eclipsed by the Artemis Accords." },
        { id: "itu", name: "ITU Radio Regs", year: "Ongoing", x: 130, y: 425,
          desc: "Allocates radio spectrum and orbital slots; the de facto coordinator of who flies where. Mega-constellation filings now overwhelm its process, and it does not govern AI-driven dynamic spectrum sharing or interference avoidance." },
        { id: "copuos", name: "COPUOS LTS Guidelines", year: "2019 · Voluntary", soft: true, x: 130, y: 210,
          desc: "Twenty-one voluntary guidelines for sustainable use of outer space. Touch on situational awareness and collision avoidance — increasingly AI-relevant in practice — but with no enforcement mechanism and uneven adoption across spacefaring states." },
      ],
      edges: [
        { from: "ost", to: "liab" },
        { from: "ost", to: "reg" },
        { from: "ost", to: "rescue" },
        { from: "ost", to: "moon", weak: true },
        { from: "ost", to: "itu" },
        { from: "copuos", to: "ost", soft: true },
        { from: "copuos", to: "itu", soft: true },
      ],
    },
    aiCluster: {
      label: "AI & data regulation",
      sub: "Designed for terrestrial systems. Built around data subjects, EU markets and human operators.",
      nodes: [
        { id: "eu", name: "EU AI Act", year: "2024 · EU member states", anchor: true, x: 960, y: 320,
          desc: "First binding AI law. Classifies systems by risk and sets conformity, transparency and oversight duties. Applies to AI marketed or used in the EU; how it reaches a model running in orbit is legally ambiguous and practically untested." },
        { id: "gdpr", name: "GDPR", year: "2018 · EU + EEA", x: 880, y: 195,
          desc: "Regulates processing of personal data of EU residents. Applies to Earth-observation AI that captures personal data, but resolution thresholds for personal data from orbit are undefined and AI inference from satellite imagery is not explicitly covered." },
        { id: "coe", name: "CoE AI Framework", year: "2024 · Council of Europe", x: 1085, y: 320,
          desc: "First international AI treaty: binds parties to human-rights, democracy and rule-of-law obligations across the AI lifecycle. Drafted with terrestrial deployment in mind; orbital applications are not addressed." },
        { id: "gdc", name: "Global Digital Compact", year: "2024 · Voluntary", soft: true, x: 1075, y: 210,
          desc: "UN Pact for the Future commitment aligning AI with human rights and SDGs. Voluntary, with no binding obligations and no mechanism connecting it to space-law bodies." },
        { id: "gpai", name: "GPAI / OECD AI", year: "2020–25 · Voluntary", soft: true, x: 1075, y: 425,
          desc: "OECD-anchored multilateral AI principles and working groups. Influential on national policy, but soft-law and silent on space-specific applications." },
        { id: "bletchley", name: "Bletchley / Seoul / Paris", year: "2023–25 · Voluntary", soft: true, x: 985, y: 510,
          desc: "Successive AI Safety Summits producing declarations on frontier-model risk and evaluations. Generated the AI Safety Institute network. None of the texts engages orbital deployment." },
        { id: "exp", name: "Dual-use export controls", year: "Ongoing", x: 855, y: 425,
          desc: "US BIS rules, EU Dual-Use Regulation and the Wassenaar Arrangement constrain advanced AI accelerators and related technology. They stop at the launchpad: once compute is in orbit, control over its operation is contractual, not regulatory." },
      ],
      edges: [
        { from: "eu", to: "gdpr" },
        { from: "eu", to: "coe" },
        { from: "gdc", to: "gpai", soft: true },
        { from: "bletchley", to: "gpai", soft: true },
        { from: "bletchley", to: "eu", soft: true },
        { from: "exp", to: "eu" },
      ],
    },
    ghostEdges: [
      { from: "ost", to: "eu", reason: "EU AI Act jurisdiction above the atmosphere is legally untested." },
      { from: "liab", to: "gdpr", reason: "Liability for AI-caused data harm in orbit fits no existing regime." },
      { from: "reg", to: "eu", reason: "Registration says nothing about AI capabilities or post-launch model updates." },
      { from: "copuos", to: "gpai", reason: "Soft-law guidance touching both is non-binding and uncoordinated." },
      { from: "itu", to: "exp", reason: "Spectrum coordination doesn’t see AI; export controls stop at the launchpad." },
    ],
    chasmLabels: [
      "Algorithmic fault attribution",
      "In-orbit model training",
      "Autonomous targeting in space",
      "Dual-use compute in orbit",
      "AI-driven debris avoidance",
    ],
    closer: "No treaty currently contains explicit, binding provisions specifically governing AI in outer space. All coverage is derivative — applied by analogy from frameworks designed for a pre-AI era. Where binding law is absent, the first actor to operate sets the terms.",
  },

  openQuestions: {
    kicker: "Open questions",
    heading: "Six questions to keep your eye on.",
    lede: "Each is live, each is unresolved, and each will shape what space governance looks like in the next decade.",
    hint: "Tap each card to read",
    items: [
      {
        title: "Space debris",
        question: "When does low-Earth orbit get too crowded to use? And who pays when a dead satellite hits a working one?",
        body: "The current liability rules were written when satellites were few and their owners clearly identifiable. They were not designed for an environment with tens of thousands of objects, abandoned hardware, or companies that have since gone out of business.",
      },
      {
        title: "Surveillance from orbit",
        question: "What does privacy mean when commercial satellites can pick out individual cars from orbit and revisit any spot on Earth in minutes?",
        body: "Surveillance law developed in a context of ground-based cameras. How it applies at orbital scale is an open question.",
      },
      {
        title: "Cybersecurity in space",
        question: "What happens when the satellites the world now depends on for internet, navigation, and finance are hacked?",
        body: "A single cyber-attack on a commercial satellite network at the start of the Ukraine war disabled tens of thousands of European connections in a morning. No existing treaty was designed with this kind of scenario in mind.",
      },
      {
        title: "The night sky",
        question: "Will the growth of satellite networks in low orbit eventually make ground-based astronomy impossible? And if so, who has the authority to act on it?",
        body: "Tens of thousands of new satellites are reflecting sunlight and crossing telescope images, making it harder for astronomers on the ground to observe the universe. No current rules require operators to limit their visibility or their interference with astronomy.",
      },
      {
        title: "The space divide",
        question: "Who speaks for the roughly 160 countries that don’t operate their own satellites or rockets, and aren’t currently at the negotiating table?",
        body: "The frameworks that shape space activity are largely written by the countries already operating in space. Those without space programmes typically end up working within rules they did not help write.",
      },
      {
        title: "The environmental footprint",
        question: "What is the real environmental cost of launching thousands of objects each year, and of those same objects burning up on re-entry?",
        body: "Rocket exhaust affects stratospheric chemistry, and re-entering satellites deposit metallic particulates in the upper atmosphere. The cumulative impact is still being studied, and existing environmental frameworks do not yet specifically cover these activities.",
      },
    ],
  },
};
