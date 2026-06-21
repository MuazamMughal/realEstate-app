import type {
  CoreValue,
  Post,
  Project,
  Reason,
  Service,
  Stat,
  TeamMember,
  Testimonial,
} from './types'

export const stats: Stat[] = [
  { label: 'Properties Sold', value: 1280, suffix: '+' },
  { label: 'Happy Clients', value: 3400, suffix: '+' },
  { label: 'Projects Completed', value: 215, suffix: '+' },
  { label: 'Years of Experience', value: 18, suffix: '' },
]

export const services: Service[] = [
  {
    _id: 's1',
    title: 'Property Buying',
    slug: 'property-buying',
    excerpt: 'Acquire premium residential and commercial properties with expert guidance.',
    description:
      'From first viewing to final handover, our advisors guide you through every step of acquiring premium residential and commercial property — backed by deep market intelligence and an off-market network.',
    image: '/images/project-1.png',
    benefits: ['Curated premium listings', 'Off-market access', 'Negotiation expertise', 'Full legal support'],
    category: 'Real Estate',
  },
  {
    _id: 's2',
    title: 'Property Selling',
    slug: 'property-selling',
    excerpt: 'Sell your property faster and for more with strategic marketing.',
    description:
      'We position your property to attract qualified buyers through cinematic media, targeted campaigns and a proven sales process that maximises value and minimises time on market.',
    image: '/images/project-2.png',
    benefits: ['Professional media', 'Targeted buyer reach', 'Premium valuation', 'Swift transactions'],
    category: 'Real Estate',
  },
  {
    _id: 's3',
    title: 'Property Rentals',
    slug: 'property-rentals',
    excerpt: 'Find or list rental properties with a seamless, managed experience.',
    description:
      'Whether you are renting a home or leasing an investment, our rental specialists handle tenant sourcing, contracts and management so your experience is effortless.',
    image: '/images/project-3.png',
    benefits: ['Verified tenants', 'Managed contracts', 'Rent collection', 'Maintenance support'],
    category: 'Real Estate',
  },
  {
    _id: 's4',
    title: 'Real Estate Consultancy',
    slug: 'real-estate-consultancy',
    excerpt: 'Strategic advice grounded in real market data and decades of experience.',
    description:
      'Our consultants translate complex market dynamics into clear, actionable strategy — helping you make confident decisions across acquisition, disposal and development.',
    image: '/images/about.png',
    benefits: ['Market analysis', 'Feasibility studies', 'Risk assessment', 'Strategic roadmaps'],
    category: 'Real Estate',
  },
  {
    _id: 's5',
    title: 'Construction Services',
    slug: 'construction-services',
    excerpt: 'Residential and commercial construction delivered to the highest standard.',
    description:
      'We deliver residential and commercial construction projects on time and to specification, combining engineering excellence with meticulous quality control.',
    image: '/images/project-3.png',
    benefits: ['Residential builds', 'Commercial projects', 'Quality assurance', 'On-time delivery'],
    category: 'Construction',
  },
  {
    _id: 's6',
    title: 'Building Development',
    slug: 'building-development',
    excerpt: 'End-to-end development from land acquisition to handover.',
    description:
      'From concept and feasibility to design, build and handover, we manage the full development lifecycle, creating landmark assets that perform.',
    image: '/images/cta.png',
    benefits: ['Land sourcing', 'Design management', 'Project delivery', 'Asset optimisation'],
    category: 'Construction',
  },
  {
    _id: 's7',
    title: 'Investment Advisory',
    slug: 'investment-advisory',
    excerpt: 'Build and protect wealth through sound property investment.',
    description:
      'Our investment team identifies high-yield opportunities and structures portfolios that balance growth, income and long-term security.',
    image: '/images/project-2.png',
    benefits: ['Yield analysis', 'Portfolio strategy', 'Market timing', 'Wealth protection'],
    category: 'Investment',
  },
  {
    _id: 's8',
    title: 'Property Marketing',
    slug: 'property-marketing',
    excerpt: 'Cinematic, data-driven marketing that sells premium properties.',
    description:
      'We craft cinematic campaigns and data-driven marketing that put your property in front of the right audience, at the right time, with the right story.',
    image: '/images/project-1.png',
    benefits: ['Cinematic media', 'Digital campaigns', 'Brand positioning', 'Lead generation'],
    category: 'Investment',
  },
]

export const projects: Project[] = [
  {
    _id: 'p1',
    name: 'The Clifton Residences',
    slug: 'clifton-residences',
    description: 'A landmark collection of seaside residences with panoramic ocean views.',
    image: '/images/project-1.png',
    location: 'Clifton, Karachi',
    category: 'Residential',
  },
  {
    _id: 'p2',
    name: 'DHA Sky Lofts',
    slug: 'dha-sky-lofts',
    description: 'Designer lofts in the heart of DHA, defined by light and craftsmanship.',
    image: '/images/project-2.png',
    location: 'DHA, Karachi',
    category: 'Luxury Apartments',
  },
  {
    _id: 'p3',
    name: 'Horizon Commercial Tower',
    slug: 'horizon-commercial-tower',
    description: 'A grade-A commercial tower engineered for the next generation of business.',
    image: '/images/project-3.png',
    location: 'Gulshan, Karachi',
    category: 'Commercial',
  },
]

export const testimonials: Testimonial[] = [
  {
    _id: 't1',
    name: 'Ahmed Khan',
    position: 'Managing Director',
    company: 'Pak Holdings',
    image: '/images/team-1.png',
    review:
      'Trust delivered beyond expectations. Their market insight and attention to detail made selling our portfolio effortless and remarkably profitable.',
    rating: 5,
  },
  {
    _id: 't2',
    name: 'Fatima Hassan',
    position: 'Private Investor',
    company: 'Independent',
    image: '/images/team-2.png',
    review:
      'From the first consultation to handover, the team was transparent, professional and genuinely invested in my goals. A truly premium experience.',
    rating: 5,
  },
  {
    _id: 't3',
    name: 'Ali Malik',
    position: 'CEO',
    company: 'Meridian Capital',
    image: '/images/team-3.png',
    review:
      'Their construction and development arm completed our project on time and to an exceptional standard. I would not work with anyone else.',
    rating: 5,
  },
]

export const team: TeamMember[] = [
  {
    _id: 'tm1',
    name: 'Khalid Rahman',
    position: 'Founder & CEO',
    description: 'Two decades shaping landmark developments and trusted client relationships across Pakistan.',
    image: '/images/team-1.png',
  },
  {
    _id: 'tm2',
    name: 'Sara Mansour',
    position: 'Head of Advisory',
    description: 'Leads our advisory practice with a data-driven approach to acquisition and investment strategy.',
    image: '/images/team-2.png',
  },
  {
    _id: 'tm3',
    name: 'Ali Hassan',
    position: 'Director of Construction',
    description: 'Oversees delivery across residential and commercial builds with a relentless focus on quality.',
    image: '/images/team-3.png',
  },
]

export const reasons: Reason[] = [
  { title: 'Trusted Advisors', description: 'Relationships built on integrity, transparency and long-term value.' },
  { title: 'Market Expertise', description: 'Deep, data-driven knowledge of premium property markets.' },
  { title: 'Professional Team', description: 'Specialists across sales, construction and investment.' },
  { title: 'Transparent Process', description: 'Clear communication and honesty at every single stage.' },
  { title: 'End-to-End Solutions', description: 'From acquisition to construction to investment — all in one place.' },
  { title: 'Proven Results', description: 'A track record of landmark projects and satisfied clients.' },
]

export const coreValues: CoreValue[] = [
  { title: 'Integrity', description: 'We do what we say, and we always act in our clients best interest.' },
  { title: 'Excellence', description: 'We pursue the highest standard in everything we deliver.' },
  { title: 'Transparency', description: 'Honest, clear communication builds lasting trust.' },
  { title: 'Innovation', description: 'We embrace new ideas and technology to stay ahead.' },
]

export const posts: Post[] = [
  {
    _id: 'b1',
    title: 'The 2026 Outlook for Premium Property Investment',
    slug: '2026-outlook-premium-property-investment',
    excerpt:
      'What the smart money is watching as we move into a new cycle of growth in the luxury property market.',
    author: 'Sara Mansour',
    category: 'Investment',
    tags: ['Investment', 'Market Trends', 'Strategy'],
    coverImage: '/images/project-2.png',
    publishedAt: '2026-05-12',
    readingTime: 6,
    body: [
      {
        text: 'The premium property market is entering a defining new cycle. Investors who understand the underlying drivers of demand are positioning themselves now for the next wave of growth.',
      },
      {
        heading: 'A flight to quality',
        text: 'Across global gateway cities, capital continues to concentrate in the highest-quality assets. Scarcity of prime stock, combined with sustained demand from international buyers, is supporting resilient values even as wider markets fluctuate.',
      },
      {
        heading: 'Where the opportunity lies',
        text: 'Branded residences, waterfront developments and mixed-use landmarks are commanding premium yields. Our advisory team is guiding clients toward assets that combine income, growth and long-term security.',
      },
      {
        heading: 'Positioning for the cycle',
        text: 'The investors who succeed in 2026 will be those who move early, diversify intelligently and partner with advisors who understand the full lifecycle of property — from acquisition to development to exit.',
      },
    ],
  },
  {
    _id: 'b2',
    title: 'How Cinematic Marketing Sells Luxury Homes Faster',
    slug: 'cinematic-marketing-sells-luxury-homes',
    excerpt:
      'A look behind the scenes at the media strategy that helps premium properties find the right buyer.',
    author: 'Khalid Rahman',
    category: 'Marketing',
    tags: ['Marketing', 'Media', 'Selling'],
    coverImage: '/images/project-1.png',
    publishedAt: '2026-04-28',
    readingTime: 5,
    body: [
      {
        text: 'Selling a luxury home is about telling a story. Cinematic media transforms a property from a listing into an aspiration — and that emotional connection is what drives premium offers.',
      },
      {
        heading: 'The power of the first frame',
        text: 'Today buyers form an impression in seconds. High-production photography, drone cinematography and immersive virtual tours capture attention and communicate value instantly.',
      },
      {
        heading: 'Reaching the right audience',
        text: 'Beautiful media only works when it reaches qualified buyers. Our data-driven campaigns target the audiences most likely to transact, maximising both reach and relevance.',
      },
    ],
  },
  {
    _id: 'b3',
    title: 'A Guide to Building Your Dream Home From the Ground Up',
    slug: 'guide-building-dream-home',
    excerpt:
      'From land acquisition to handover, here is how our development process turns a vision into reality.',
    author: 'David Carter',
    category: 'Construction',
    tags: ['Construction', 'Development', 'Guide'],
    coverImage: '/images/project-3.png',
    publishedAt: '2026-04-10',
    readingTime: 7,
    body: [
      {
        text: 'Building a bespoke home is one of the most rewarding investments you can make. With the right partner, the journey from empty plot to finished residence is seamless and exciting.',
      },
      {
        heading: 'Start with the land',
        text: 'The right plot is the foundation of any successful build. We help clients evaluate location, orientation, zoning and long-term value before committing.',
      },
      {
        heading: 'Design and delivery',
        text: 'Our integrated design and construction teams work in lockstep, ensuring your vision is realised on time, on budget and to an exceptional standard of craftsmanship.',
      },
    ],
  },
]
