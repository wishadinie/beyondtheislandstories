import type { ImgKey } from "./images";

export type CategoryId = "heritage" | "art-craft" | "community" | "nature-wildlife";

export const CATEGORIES: Record<CategoryId, { label: string; path: string }> = {
  heritage: { label: "Heritage", path: "/heritage" },
  "art-craft": { label: "Art & Craft", path: "/art-craft" },
  community: { label: "Community", path: "/community" },
  "nature-wildlife": { label: "Nature & Wildlife", path: "/nature-wildlife" },
};

export type Section = { heading: string; body: string[]; image?: ImgKey; caption?: string };
export type Article = {
  slug: string;
  category: CategoryId;
  title: string;
  kicker: string;
  intro: string;
  hero: ImgKey;
  readTime: string;
  sections: Section[];
  facts: string[];
  references: { label: string; url: string }[];
};

const UNESCO = (id: number, name: string) => ({ label: `UNESCO World Heritage Centre — ${name}`, url: `https://whc.unesco.org/en/list/${id}/` });
const CCF = { label: "Central Cultural Fund, Sri Lanka", url: "https://www.ccf.gov.lk/" };
const ARCH = { label: "Department of Archaeology, Sri Lanka", url: "https://www.archaeology.gov.lk/" };
const DWC = { label: "Department of Wildlife Conservation, Sri Lanka", url: "https://www.dwc.gov.lk/" };
const FOREST = { label: "Forest Department of Sri Lanka", url: "https://www.forestdept.gov.lk/" };
const NCH = UNESCO(1203, "Central Highlands of Sri Lanka");

export const ARTICLES: Article[] = [
  // ───────────── HERITAGE ─────────────
  {
    slug: "sigiriya",
    category: "heritage",
    title: "The Ancient Wonder of Sigiriya",
    kicker: "Heritage · Central Province",
    intro:
      "Rising abruptly from the forests of the central plains, the rock of Sigiriya carries the ruins of a fifth-century royal capital — a place where palace, garden and landscape were designed as one.",
    hero: "sigiriya",
    readTime: "7 min read",
    sections: [
      {
        heading: "King Kashyapa and the making of a capital",
        body: [
          "According to the Culavamsa chronicle, Sigiriya was built by King Kashyapa I (Kassapa), who reigned from 477 to 495 CE. Having seized the throne from his father, King Dhatusena, he moved his capital from Anuradhapura to this granite monolith.",
          "UNESCO describes the site as the ruins of the capital built by the parricidal King Kassapa I, which was abandoned after his death. The rock later became a Buddhist monastic site until around the 14th century.",
        ],
      },
      {
        heading: "Architecture and the Lion Gate",
        body: [
          "The summit, nearly 200 metres above the surrounding plain, held the royal palace, cisterns and terraces. Visitors climbed past a great lion figure built of brick and plaster; today only its colossal paws survive, flanking the final staircase — the origin of the name Sīhagiri, ‘Lion Rock’.",
        ],
        image: "lionPaws",
        caption: "The surviving lion paws mark the final ascent to the summit.",
      },
      {
        heading: "Water gardens and engineering",
        body: [
          "On the western side lie some of the oldest landscaped gardens in Asia. Symmetrical water gardens, pools, channels and fountains are laid out along a central axis, while boulder gardens and terraced gardens rise toward the rock.",
          "Underground conduits fed by reservoirs supplied the fountains, some of which still function during heavy rains — a testament to the hydraulic knowledge of the period.",
        ],
        image: "sigiriyaGarden",
        caption: "The symmetrical water gardens on the western approach.",
      },
      {
        heading: "Frescoes and the Mirror Wall",
        body: [
          "In a sheltered pocket of the western rock face survive paintings of elegant female figures, often called the ‘Sigiriya maidens’. They are among the finest surviving examples of ancient Sri Lankan painting.",
          "Below them runs the polished Mirror Wall, covered with verses scratched by visitors between roughly the 8th and 10th centuries — some of the earliest examples of Sinhala poetry and writing.",
        ],
        image: "sigiriyaFresco",
        caption: "Fresco figures preserved in a sheltered pocket of the rock.",
      },
    ],
    facts: [
      "Inscribed on the UNESCO World Heritage List in 1982.",
      "Its gardens are considered among the oldest landscaped gardens in the world.",
      "The Mirror Wall graffiti preserve centuries-old Sinhala verse.",
      "Managed today as part of the Cultural Triangle by the Central Cultural Fund.",
    ],
    references: [UNESCO(202, "Ancient City of Sigiriya"), CCF, ARCH],
  },
  {
    slug: "anuradhapura",
    category: "heritage",
    title: "Anuradhapura, the Sacred City",
    kicker: "Heritage · North Central Province",
    intro:
      "For more than a millennium Anuradhapura was the political and religious heart of the island — a city of monasteries, colossal stupas and vast man-made lakes that still sustain life today.",
    hero: "ruwanwelisaya",
    readTime: "8 min read",
    sections: [
      {
        heading: "An ancient kingdom",
        body: [
          "Anuradhapura served as a capital of Sri Lanka from around the 4th century BCE until the early 11th century CE. UNESCO notes it as a political and religious capital that flourished for some 1,300 years before being abandoned after invasion in 993.",
        ],
      },
      {
        heading: "Sacred sites and Buddhist heritage",
        body: [
          "The city grew around the Jaya Sri Maha Bodhi, a sacred fig tree traditionally said to have grown from a cutting of the Bodhi tree at Bodh Gaya, brought to the island by the nun Sanghamitta in the 3rd century BCE. It is venerated as one of the oldest historically documented trees in the world.",
          "Great monastic complexes — the Mahavihara, Abhayagiri and Jetavana — made the city a major centre of Buddhist learning.",
        ],
      },
      {
        heading: "Ruwanwelisaya and Jetavanaramaya",
        body: [
          "The Ruwanwelisaya, its dome now gleaming white, was built by King Dutugemunu in the 2nd century BCE and remains one of the most revered stupas on the island.",
          "Jetavanaramaya, built by King Mahasena in the 3rd century CE, is thought to have reached around 122 metres in its original form, making it one of the tallest structures of the ancient world and among the largest brick monuments ever built.",
        ],
        image: "jetavana",
        caption: "Jetavanaramaya — a monument built of brick on a monumental scale.",
      },
      {
        heading: "Reservoirs and irrigation",
        body: [
          "Kings of Anuradhapura built large reservoirs (wewa) such as Basawakkulama, Tissa Wewa and Nuwara Wewa. These tanks, linked by canals, stored monsoon rains for paddy cultivation and drinking water — an irrigation civilisation whose works are still in use.",
        ],
        image: "anuradhapuraTank",
        caption: "Tissa Wewa, one of the ancient reservoirs of Anuradhapura.",
      },
      {
        heading: "Archaeological discoveries",
        body: [
          "Excavations around the Citadel have revealed evidence of early urban settlement, while the city’s guard stones, moonstones (sandakada pahana) and inscriptions are key sources for the study of early Sri Lankan art and history.",
        ],
      },
    ],
    facts: [
      "Inscribed on the UNESCO World Heritage List in 1982.",
      "The Sri Maha Bodhi is among the oldest documented trees planted by humans.",
      "Ancient tanks built here still irrigate surrounding farmland.",
    ],
    references: [UNESCO(200, "Sacred City of Anuradhapura"), CCF, ARCH],
  },
  {
    slug: "polonnaruwa",
    category: "heritage",
    title: "Polonnaruwa, the Medieval Capital",
    kicker: "Heritage · North Central Province",
    intro:
      "After the fall of Anuradhapura, Polonnaruwa rose as the island’s capital — a garden city of palaces, image houses and a vast ‘sea’ built by a king.",
    hero: "galVihara",
    readTime: "7 min read",
    sections: [
      {
        heading: "The Polonnaruwa Kingdom",
        body: [
          "Polonnaruwa became the capital after Anuradhapura was sacked in 993. It was first established by the Chola conquerors, and then by Sinhalese kings after Vijayabahu I restored local rule in the late 11th century.",
        ],
      },
      {
        heading: "King Parakramabahu I",
        body: [
          "The city reached its peak under Parakramabahu I (reigned 1153–1186). The Culavamsa credits him with the saying that not even a little water that comes from rain should flow into the ocean without being made useful to man.",
        ],
      },
      {
        heading: "Gal Vihara and ancient architecture",
        body: [
          "The Gal Vihara contains four Buddha images carved from a single granite rock face — seated, standing and a recumbent figure about 14 metres long — considered masterpieces of Sinhalese sculpture.",
          "The circular Vatadage of the Sacred Quadrangle, with its guard stones and moonstones, shows the refined ornamental architecture of the period.",
        ],
        image: "polonnaruwa",
        caption: "The Vatadage in the Sacred Quadrangle of Polonnaruwa.",
      },
      {
        heading: "Irrigation and engineering",
        body: [
          "Parakrama Samudra — the ‘Sea of Parakrama’ — is a large reservoir formed by connecting older tanks. It continues to supply water for agriculture around Polonnaruwa today.",
        ],
        image: "parakrama",
        caption: "The waters of Parakrama Samudra.",
      },
      {
        heading: "Historical significance",
        body: [
          "UNESCO describes Polonnaruwa as containing the Brahmanic monuments built by the Cholas as well as the monumental ruins of the fabulous garden-city created by Parakramabahu I in the 12th century.",
        ],
      },
    ],
    facts: [
      "Inscribed on the UNESCO World Heritage List in 1982.",
      "Gal Vihara’s recumbent Buddha is about 14 metres long.",
      "Both Hindu and Buddhist monuments survive within the ancient city.",
    ],
    references: [UNESCO(201, "Ancient City of Polonnaruwa"), CCF, ARCH],
  },

  // ───────────── ART & CRAFT ─────────────
  {
    slug: "kandyan-dance",
    category: "art-craft",
    title: "The Art of Kandyan Dance",
    kicker: "Art & Craft · Performance",
    intro:
      "Born in ritual and refined in royal courts, Kandyan dance is the most recognisable of Sri Lanka’s classical dance traditions — and one of three regional schools with distinct rhythms and roots.",
    hero: "kandyan",
    readTime: "6 min read",
    sections: [
      {
        heading: "Origins in ritual",
        body: [
          "Kandyan dance (Uda Rata Natum) traces its roots to the Kohomba Kankariya, a ritual of the hill country performed to invoke blessings. Over centuries it developed under the patronage of the Kandyan kings and is today performed on stage and in temple processions.",
        ],
      },
      {
        heading: "The ves costume",
        body: [
          "The most celebrated dancers wear the ves costume — a beaded breastplate, silver ornaments and a crowned headdress. Traditionally the ves headdress is worn only after an initiation ceremony, marking the dancer’s mastery.",
        ],
      },
      {
        heading: "Movement and drumming",
        body: [
          "Kandyan dance is driven by the geta bera, a double-headed drum played with the hands. Dancers perform powerful leaps, spins and intricate footwork set to patterns known as vannam, many of which describe animals and birds.",
        ],
        image: "perahera",
        caption: "Performers at the Kandy Esala Perahera.",
      },
      {
        heading: "Three regional traditions",
        body: [
          "Low Country dance (Pahatha Rata) of the southern coast is linked to healing and exorcism rituals such as the Sanni Yakuma and Thovil. It features masks and the yak bera drum, played with both hands.",
          "Sabaragamuwa dance, from the region around Sri Pada (Adam’s Peak), is associated with devotion to the god Saman and uses the davula, a drum played with a stick on one side.",
          "Together the three styles share a vocabulary of rhythm and ritual, yet each is shaped by its landscape, deities and communities.",
        ],
        image: "lowcountry",
        caption: "A Low Country dance performance.",
      },
      {
        heading: "Its cultural role",
        body: [
          "Today Kandyan dance is a national symbol, seen at the Esala Perahera in Kandy, at weddings and state ceremonies, and taught in schools across the country.",
        ],
      },
    ],
    facts: [
      "Each tradition is defined by its own drum: geta bera, yak bera and davula.",
      "There are traditionally said to be 18 vannam in the Kandyan repertoire.",
      "The Kandy Esala Perahera honours the Sacred Tooth Relic.",
    ],
    references: [
      { label: "Ministry of Buddhasasana, Religious & Cultural Affairs — Department of Cultural Affairs", url: "https://www.cultural.gov.lk/" },
      { label: "Sri Dalada Maligawa (Temple of the Sacred Tooth Relic)", url: "https://sridaladamaligawa.lk/" },
      { label: "Encyclopaedia Britannica — Kandyan dance", url: "https://www.britannica.com/art/Kandyan-dance" },
    ],
  },
  {
    slug: "traditional-masks",
    category: "art-craft",
    title: "The Living Tradition of Ambalangoda Masks",
    kicker: "Art & Craft · Southern Province",
    intro:
      "In the coastal town of Ambalangoda, families of carvers have kept alive the craft of the painted wooden mask — once worn for healing rituals and folk theatre, now admired around the world.",
    hero: "mask",
    readTime: "6 min read",
    sections: [
      {
        heading: "Three families of masks",
        body: [
          "Sri Lankan masks are broadly grouped by the performances they serve. Kolam masks portray kings, villagers and animals in a satirical folk drama. Sanni masks represent the demons of illness in healing rituals, traditionally eighteen of them. Raksha masks — fierce, cobra-crowned faces — appear in festivals and processions.",
        ],
      },
      {
        heading: "Wood, colour and symbolism",
        body: [
          "Masks are traditionally carved from kaduru, a light wood, and painted in bold colours. Every detail carries meaning: bulging eyes, fangs and serpents express power, while colours indicate character and the illness or force represented.",
        ],
        image: "maskMaker",
        caption: "Carving wood by hand in a traditional workshop.",
      },
      {
        heading: "The workshops of Ambalangoda",
        body: [
          "Ambalangoda is home to long-established mask-carving families and workshops, some with small museums explaining the meaning of each mask. Visitors can watch carvers shape, sand and paint masks entirely by hand.",
        ],
      },
      {
        heading: "Kolam — theatre in masks",
        body: [
          "Kolam is a folk drama of the southern coast in which masked characters parade and tell stories, often with humour and social satire. It is one of the oldest forms of theatre on the island.",
        ],
      },
    ],
    facts: [
      "The Sanni Yakuma ritual traditionally features eighteen illness demons.",
      "Raksha masks often feature crowns of cobras.",
      "Most mask-making knowledge is passed down within families.",
    ],
    references: [
      { label: "Encyclopaedia Britannica — Kolam", url: "https://www.britannica.com/art/kolam" },
      { label: "Department of Cultural Affairs, Sri Lanka", url: "https://www.cultural.gov.lk/" },
      { label: "Sri Lanka Tourism Promotion Bureau — Ambalangoda", url: "https://www.srilanka.travel/" },
    ],
  },
  {
    slug: "handloom",
    category: "art-craft",
    title: "Threads of the Island: Handloom & Textiles",
    kicker: "Art & Craft · Weaving",
    intro:
      "From the geometric Dumbara weaves of the Kandy region to bright cotton handloom of the villages, Sri Lankan textiles carry patterns passed from hand to hand.",
    hero: "textile",
    readTime: "5 min read",
    sections: [
      {
        heading: "Traditional weaving",
        body: [
          "Handloom weaving has long been a village craft in Sri Lanka, practised on wooden frame looms. Weavers dye cotton yarn and build up stripes, checks and motifs thread by thread.",
        ],
      },
      {
        heading: "Dumbara weaving",
        body: [
          "In the Dumbara valley near Kandy, weavers produce distinctive mats and textiles with bold geometric and stylised animal motifs. The craft is traditionally associated with particular weaving communities of the region.",
        ],
      },
      {
        heading: "Colour and pattern",
        body: [
          "Patterns vary by region and maker — from earthy natural tones to vivid contemporary palettes. Designers in Colombo have helped bring handloom into modern fashion and interiors while working with village weavers.",
        ],
      },
      {
        heading: "The people behind the craft",
        body: [
          "Handloom is overwhelmingly a skill of women weavers in rural areas. Government and cooperative programmes support training and markets, helping keep the craft a living livelihood.",
        ],
      },
    ],
    facts: [
      "Every handloom cloth is built up thread by thread on a manual loom.",
      "Dumbara weaving is named after a valley in the Kandy District.",
      "Handloom is supported nationally through the National Crafts Council.",
    ],
    references: [
      { label: "National Crafts Council, Sri Lanka", url: "https://www.craftscouncil.gov.lk/" },
      { label: "Department of Textile Industries, Sri Lanka", url: "https://www.textiledept.gov.lk/" },
    ],
  },
  {
    slug: "poetry",
    category: "art-craft",
    title: "Poetry, Music & Storytelling",
    kicker: "Art & Craft · Oral Traditions",
    intro:
      "Long before print, Sri Lanka’s culture travelled in verse — sung in paddy fields, chanted at harvest, whispered in folk tales beside the hearth.",
    hero: "music",
    readTime: "5 min read",
    sections: [
      {
        heading: "Janakavi — the people’s poetry",
        body: [
          "Janakavi (folk poetry) is anonymous verse composed and passed on orally by ordinary people. It includes work songs such as goyam kavi sung during the paddy harvest, pal kavi sung by farmers keeping night watch over crops, and nelum kavi sung while threshing.",
        ],
      },
      {
        heading: "Classical verse",
        body: [
          "Alongside folk verse grew a literary tradition, including the sandesha kavya — message poems in which a bird carries a message across the island, describing towns and landscapes along the way.",
        ],
      },
      {
        heading: "Instruments",
        body: [
          "Drums lie at the heart of traditional music: the geta bera, yak bera, davula and thammattama. They are joined by wind instruments such as the horanewa, and the udekki, a small hourglass drum.",
        ],
      },
      {
        heading: "Stories by the hearth",
        body: [
          "Folk tales of the witty Andare and the foolish Mahadenamutta and his pupils remain well known. Through humour they teach about wisdom, foolishness and life in the village.",
        ],
      },
    ],
    facts: [
      "Janakavi is usually anonymous, belonging to communities rather than authors.",
      "Sandesha poems are an important source on medieval Sri Lankan places.",
      "Andare is said to have been a jester at a royal court.",
    ],
    references: [
      { label: "National Library and Documentation Services Board", url: "https://www.natlib.lk/" },
      { label: "Department of Cultural Affairs, Sri Lanka", url: "https://www.cultural.gov.lk/" },
    ],
  },

  // ───────────── COMMUNITY ─────────────
  {
    slug: "languages",
    category: "community",
    title: "Sinhala, Tamil, English: The Island’s Voices",
    kicker: "Community · Languages",
    intro:
      "Walk through any Sri Lankan town and three languages surround you — on signboards, in markets and in classrooms. Each carries its own literature, history and rhythm.",
    hero: "temple",
    readTime: "4 min read",
    sections: [
      {
        heading: "Official languages",
        body: [
          "The Constitution of Sri Lanka recognises Sinhala and Tamil as official and national languages, with English as the link language. Public signs and documents commonly appear in all three.",
        ],
      },
      {
        heading: "Sinhala",
        body: [
          "Sinhala is an Indo-Aryan language with its own rounded script. Its written tradition stretches back over two thousand years, through early cave inscriptions and the verses of the Sigiriya Mirror Wall.",
        ],
      },
      {
        heading: "Tamil",
        body: [
          "Tamil, a Dravidian language with one of the world’s oldest literary traditions, is spoken by Sri Lankan Tamil, Indian Tamil and many Muslim communities, with distinct regional dialects in Jaffna, Batticaloa and the hill country.",
        ],
        image: "kovil",
        caption: "Hindu temples are central to Tamil cultural life.",
      },
      {
        heading: "English and everyday mixing",
        body: [
          "English, a legacy of British rule, remains important in business, law and higher education. Everyday speech often blends languages freely — a reflection of the island’s mixed society.",
        ],
      },
    ],
    facts: [
      "Sinhala and Tamil are both official languages under the Constitution.",
      "The Sinhala script has its own distinctive rounded letterforms.",
      "Sri Lankan Malays and Burghers have historically spoken their own creole languages.",
    ],
    references: [
      { label: "Department of Official Languages, Sri Lanka", url: "https://www.languagesdept.gov.lk/" },
      { label: "Constitution of Sri Lanka — Parliament of Sri Lanka", url: "https://www.parliament.lk/constitution" },
    ],
  },
  {
    slug: "village-life",
    category: "community",
    title: "Rhythms of the Village",
    kicker: "Community · Rural Life",
    intro:
      "Paddy fields, tank-side villages and fishing beaches — rural Sri Lanka still follows the rhythm of rains, harvests and the sea.",
    hero: "village",
    readTime: "5 min read",
    sections: [
      {
        heading: "The paddy field",
        body: [
          "Rice is at the centre of rural life. Cultivation follows two main seasons — Maha and Yala — tied to the monsoons, and in the dry zone it depends on village tanks, many of them ancient.",
        ],
      },
      {
        heading: "Wewa, dagoba, yaya",
        body: [
          "A traditional saying describes the ideal village as the tank (wewa), the temple (dagoba) and the paddy field (yaya) — the three pillars of community life in the Sinhala dry zone.",
        ],
      },
      {
        heading: "Village markets",
        body: [
          "Weekly fairs (pola) bring farmers and traders together to sell vegetables, fruit, dried fish and household goods.",
        ],
        image: "market",
        caption: "Fresh produce at a roadside stall in the south.",
      },
      {
        heading: "Fishing communities",
        body: [
          "Along the coast, fishing families launch boats before dawn. On the southern coast, a few fishermen still practise stilt fishing, perched on poles above the surf.",
        ],
        image: "fishermen",
        caption: "Stilt fishermen near Galle.",
      },
    ],
    facts: [
      "Sri Lanka has two main cultivation seasons: Maha and Yala.",
      "Many village tanks in the dry zone are centuries old.",
      "The weekly pola remains a central part of rural economic life.",
    ],
    references: [
      { label: "Department of Agriculture, Sri Lanka", url: "https://doa.gov.lk/" },
      { label: "Department of Agrarian Development", url: "https://www.agrariandept.gov.lk/" },
    ],
  },
  {
    slug: "colombo",
    category: "community",
    title: "Colombo — Where the Island Meets the World",
    kicker: "Community · The Modern City",
    intro:
      "Port, marketplace and creative capital: Colombo is where centuries of trade, faiths and languages meet a fast-changing skyline.",
    hero: "colombo",
    readTime: "5 min read",
    sections: [
      {
        heading: "A port city",
        body: [
          "Colombo’s harbour drew Arab, Portuguese, Dutch and British traders over the centuries. It is Sri Lanka’s commercial capital and largest city, while the legislative capital lies at nearby Sri Jayawardenepura Kotte.",
        ],
      },
      {
        heading: "Old and new",
        body: [
          "In Fort, the Dutch Hospital — among the oldest buildings in the district — now houses restaurants and shops, a short walk from glass towers and the Lotus Tower.",
        ],
        image: "colonial",
        caption: "The restored Dutch Hospital in Colombo Fort.",
      },
      {
        heading: "Galle Face Green",
        body: [
          "This seafront promenade fills each evening with families, kite flyers and street-food stalls selling isso vadai and kottu as the sun sets over the Indian Ocean.",
        ],
        image: "galleFace",
        caption: "Sunset at Galle Face Green.",
      },
      {
        heading: "Pettah",
        body: [
          "Pettah is the city’s bustling bazaar district — narrow streets packed with traders, spices, textiles and electronics, alongside landmarks like the red-and-white Jami Ul-Alfar Mosque.",
        ],
        image: "mosque",
        caption: "Jami Ul-Alfar Mosque in Pettah.",
      },
      {
        heading: "A creative city",
        body: [
          "Independent cafés, galleries, design studios and music venues make Colombo the centre of contemporary Sri Lankan culture — a place where tradition is constantly reinterpreted.",
        ],
      },
    ],
    facts: [
      "Colombo is the commercial capital; Sri Jayawardenepura Kotte is the legislative capital.",
      "Pettah’s Jami Ul-Alfar Mosque was completed in 1909.",
      "Galle Face Green has been a public promenade since the colonial era.",
    ],
    references: [
      { label: "Colombo Municipal Council", url: "https://www.colombo.mc.gov.lk/" },
      { label: "Urban Development Authority, Sri Lanka", url: "https://www.uda.gov.lk/" },
    ],
  },

  // ───────────── NATURE & WILDLIFE ─────────────
  {
    slug: "wildlife",
    category: "nature-wildlife",
    title: "The Wild Island",
    kicker: "Nature & Wildlife · Fauna",
    intro:
      "Few places so small hold such a variety of large animals: elephants, leopards and bears on land, and blue whales offshore.",
    hero: "elephant",
    readTime: "6 min read",
    sections: [
      {
        heading: "Sri Lankan elephants",
        body: [
          "The Sri Lankan elephant (Elephas maximus maximus) is a subspecies of the Asian elephant. During the dry season, large numbers gather around the reservoirs of Minneriya and Kaudulla — a spectacle known locally as ‘the Gathering’.",
        ],
      },
      {
        heading: "Leopards",
        body: [
          "The Sri Lankan leopard (Panthera pardus kotiya) is an endemic subspecies and the island’s top predator. Yala and Wilpattu National Parks are among the best places to see it.",
        ],
        image: "leopard",
        caption: "A Sri Lankan leopard in Yala National Park.",
      },
      {
        heading: "Sloth bears",
        body: [
          "The Sri Lankan sloth bear (Melursus ursinus inornatus) lives in the dry-zone forests, feeding on termites, fruit and honey. It is shy and rarely seen.",
        ],
        image: "slothbear",
        caption: "A Sri Lankan sloth bear.",
      },
      {
        heading: "Endemic birds",
        body: [
          "Sri Lanka is home to more than thirty endemic bird species, including the Sri Lanka junglefowl — the national bird — and the Sri Lanka blue magpie, found in the wet zone forests.",
        ],
        image: "junglefowl",
        caption: "A female Sri Lanka junglefowl.",
      },
      {
        heading: "Marine wildlife",
        body: [
          "Off the southern coast near Mirissa, blue whales can be seen in season, along with sperm whales and spinner dolphins.",
        ],
        image: "bluewhale",
        caption: "A blue whale off Mirissa.",
      },
    ],
    facts: [
      "The Sri Lankan leopard is an endemic subspecies.",
      "The Sri Lanka junglefowl is the national bird.",
      "Sri Lanka is part of the Western Ghats and Sri Lanka biodiversity hotspot.",
    ],
    references: [DWC, { label: "IUCN Red List of Threatened Species", url: "https://www.iucnredlist.org/" }, { label: "Field Ornithology Group of Sri Lanka", url: "https://fogsl.cmb.ac.lk/" }],
  },
  {
    slug: "forests",
    category: "nature-wildlife",
    title: "Forests & National Parks",
    kicker: "Nature & Wildlife · Protected Areas",
    intro:
      "From misty rainforest to dry-zone scrub and lake-dotted plains, Sri Lanka’s protected areas guard a remarkable diversity of habitats.",
    hero: "sinharaja",
    readTime: "6 min read",
    sections: [
      {
        heading: "Sinharaja Forest Reserve",
        body: [
          "Sinharaja is the country’s last viable area of primary tropical rainforest. Inscribed by UNESCO in 1988, it is home to a high proportion of the island’s endemic trees, insects, amphibians, reptiles and birds.",
        ],
      },
      {
        heading: "Yala National Park",
        body: [
          "Yala in the south-east combines scrub jungle, lagoons and coastline. It is renowned for its leopards, elephants and sloth bears, and also protects ancient monastic ruins.",
        ],
        image: "yala",
        caption: "Yala is renowned for its leopards.",
      },
      {
        heading: "Wilpattu National Park",
        body: [
          "Wilpattu, in the north-west, is Sri Lanka’s largest national park. It is known for its villus — natural lakes filled by rainwater — which attract wildlife throughout the year.",
        ],
        image: "wilpattu",
        caption: "Wildlife in Wilpattu.",
      },
      {
        heading: "Knuckles Mountain Range",
        body: [
          "The Knuckles range, named for peaks resembling clenched knuckles, contains cloud forests and grasslands. It forms part of UNESCO’s Central Highlands World Heritage Site.",
        ],
        image: "knuckles",
        caption: "Peaks of the Knuckles range.",
      },
    ],
    facts: [
      "Sinharaja became a UNESCO World Heritage Site in 1988.",
      "Wilpattu is the largest national park in Sri Lanka.",
      "The Knuckles range is part of the Central Highlands World Heritage Site (2010).",
    ],
    references: [UNESCO(405, "Sinharaja Forest Reserve"), NCH, DWC, FOREST],
  },
  {
    slug: "oceans",
    category: "nature-wildlife",
    title: "Oceans & Coastlines",
    kicker: "Nature & Wildlife · The Sea",
    intro:
      "Ringed by more than a thousand kilometres of coast, Sri Lanka lives by the sea — its reefs, lagoons, turtle beaches and fishing towns.",
    hero: "coast",
    readTime: "5 min read",
    sections: [
      {
        heading: "Coral reefs",
        body: [
          "Reefs such as those at Pigeon Island near Trincomalee and Hikkaduwa on the south-west coast shelter colourful fish and corals. Like reefs worldwide, they are vulnerable to warming seas and coral bleaching.",
        ],
        image: "coral",
        caption: "A pufferfish at Nilaveli, on the east coast.",
      },
      {
        heading: "Coastal ecosystems",
        body: [
          "Mangroves, lagoons and seagrass beds protect shorelines and serve as nurseries for fish and shellfish, supporting both biodiversity and coastal livelihoods.",
        ],
      },
      {
        heading: "Marine turtles",
        body: [
          "Five of the world’s seven species of marine turtle nest on Sri Lankan beaches, including the green turtle, olive ridley and leatherback. Rekawa on the south coast is an important nesting site.",
        ],
        image: "turtle",
        caption: "A turtle on the southern coast.",
      },
      {
        heading: "Fishing communities",
        body: [
          "Fishing families along the coast use everything from traditional oru outrigger canoes to modern multi-day boats, and fish markets remain lively hubs of coastal life.",
        ],
      },
    ],
    facts: [
      "Five of the seven marine turtle species nest in Sri Lanka.",
      "Pigeon Island is a protected marine national park.",
      "Mangroves help protect coastlines from erosion and storm surges.",
    ],
    references: [DWC, { label: "Marine Environment Protection Authority", url: "https://www.mepa.gov.lk/" }, { label: "Coast Conservation and Coastal Resource Management Department", url: "https://www.coastal.gov.lk/" }],
  },
  {
    slug: "mountains",
    category: "nature-wildlife",
    title: "Mountains & Waterfalls",
    kicker: "Nature & Wildlife · The Highlands",
    intro:
      "In the centre of the island the land rises into misty peaks, cloud forests and grasslands, cut by countless waterfalls.",
    hero: "hortonPlains",
    readTime: "5 min read",
    sections: [
      {
        heading: "The Central Highlands",
        body: [
          "Peak Wilderness, Horton Plains and the Knuckles Conservation Forest together make up the Central Highlands World Heritage Site, recognised by UNESCO in 2010 for its exceptional endemic species.",
        ],
      },
      {
        heading: "Horton Plains",
        body: [
          "This high plateau of grasslands and cloud forest ends dramatically at World’s End, a sheer escarpment with views toward the southern lowlands on clear mornings. It is also the source of several major rivers.",
        ],
      },
      {
        heading: "Ella",
        body: [
          "The hill town of Ella sits among tea estates and ridges. Nearby, the Nine Arch Bridge carries the hill-country railway across a valley, a celebrated piece of colonial-era engineering.",
        ],
        image: "ella",
        caption: "The hill country near Ella and Demodara.",
      },
      {
        heading: "Waterfalls",
        body: [
          "The highlands are threaded with waterfalls, from Ravana Falls near Ella to Bambarakanda, the island’s tallest.",
        ],
        image: "waterfall",
        caption: "Ravana Falls near Ella.",
      },
    ],
    facts: [
      "The Central Highlands became a World Heritage Site in 2010.",
      "Bambarakanda is considered the tallest waterfall in Sri Lanka.",
      "Horton Plains is a national park managed by the Department of Wildlife Conservation.",
    ],
    references: [NCH, DWC, FOREST],
  },
  {
    slug: "tea-country",
    category: "nature-wildlife",
    title: "Life Among the Tea Plantations",
    kicker: "Nature & Wildlife · Hill Country",
    intro:
      "Emerald terraces wrap the hills of Nuwara Eliya, Dimbula and Uva. Tea shaped this landscape — and the lives of the communities who tend it.",
    hero: "tea",
    readTime: "6 min read",
    sections: [
      {
        heading: "From coffee to tea",
        body: [
          "In the 19th century the hill country was planted with coffee until a leaf disease devastated the crop. Tea took its place: in 1867 James Taylor planted tea commercially at Loolecondera Estate near Kandy.",
        ],
      },
      {
        heading: "Making Ceylon Tea",
        body: [
          "Leaves are hand-plucked, then withered, rolled, oxidised and dried in factories that often stand on the estate itself. Growing regions are distinguished by elevation, giving each its own character.",
        ],
        image: "teaPicker",
        caption: "Tea estate in the hill country.",
      },
      {
        heading: "Hill-country communities",
        body: [
          "Plantation workers were largely brought from South India during British rule. Their descendants — the Malaiyaha or Indian Tamil community — have shaped the culture of the hills, with their own temples, festivals and traditions.",
        ],
      },
      {
        heading: "Tea and identity",
        body: [
          "‘Ceylon Tea’ remains one of the island’s best-known exports, and a cup of plain tea — often sweet and milky — is part of daily life in every home.",
        ],
      },
    ],
    facts: [
      "James Taylor began commercial tea planting at Loolecondera in 1867.",
      "Tea regions are classified by elevation: high, mid and low grown.",
      "The country is still officially marketed as ‘Ceylon Tea’.",
    ],
    references: [
      { label: "Sri Lanka Tea Board", url: "https://www.pureceylontea.com/" },
      { label: "Tea Research Institute of Sri Lanka", url: "https://www.tri.lk/" },
    ],
  },
];

export const getArticle = (category: string, slug: string) =>
  ARTICLES.find((a) => a.category === category && a.slug === slug);

export const byCategory = (c: CategoryId) => ARTICLES.filter((a) => a.category === c);
