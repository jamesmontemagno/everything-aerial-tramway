export type Tramway = {
  id: string
  name: string
  location: string
  region: string
  type: string
  opened: string
  length: string
  verticalRise: string
  rideTime: string
  capacity: string
  highlight: string
  vibe: string
  story: string
  tags: string[]
}

export const tramways: Tramway[] = [
  {
    id: 'wings-of-tatev',
    name: 'Wings of Tatev',
    location: 'Syunik Province, Armenia',
    region: 'Europe / Caucasus',
    type: 'Reversible aerial tramway',
    opened: '2010',
    length: '5,752 m',
    verticalRise: 'Deep gorge crossing',
    rideTime: '11-12 min',
    capacity: '25 passengers per cabin',
    highlight: 'World-record non-stop reversible cableway.',
    vibe: 'Epic, dramatic, pilgrimage-meets-engineering.',
    story:
      'Built as part of the Tatev Revival program, it links Halidzor to Tatev Monastery and turns a hard mountain transfer into a destination-worthy ride.',
    tags: ['record-holder', 'heritage', 'dramatic views'],
  },
  {
    id: 'zugspitze',
    name: 'Cable Car Zugspitze',
    location: 'Bavaria, Germany',
    region: 'Europe / Alps',
    type: 'Reversible aerial tramway',
    opened: '2017',
    length: '3,213 m free span',
    verticalRise: '1,945 m',
    rideTime: 'Summit access ride',
    capacity: '120 passengers per cabin',
    highlight: 'Three world-record engineering claims on one line.',
    vibe: 'Alpine superlative, precision-engineered, summit drama.',
    story:
      'The Zugspitze line is the enthusiast favorite for raw technical bragging rights: huge span, huge rise, huge views, and barrier-free access.',
    tags: ['engineering feat', 'alpine', 'record-holder'],
  },
  {
    id: 'palm-springs',
    name: 'Palm Springs Aerial Tramway',
    location: 'California, USA',
    region: 'North America',
    type: 'Reversible aerial tramway',
    opened: '1963',
    length: '2.5 miles',
    verticalRise: '2,643 ft to 8,516 ft stations',
    rideTime: '10 min',
    capacity: 'Large rotating tramcars',
    highlight: 'Home of the world’s largest rotating tramcars.',
    vibe: 'Mid-century icon, desert-to-alpine jump, playful classic.',
    story:
      'Palm Springs is a model enthusiast destination because it mixes engineering history, architecture, hiking, weather drama, and memorable rotating cabins.',
    tags: ['rotating cabins', 'history', 'destination'],
  },
  {
    id: 'roosevelt-island',
    name: 'Roosevelt Island Tram',
    location: 'New York City, USA',
    region: 'North America',
    type: 'Urban aerial tramway',
    opened: '1976',
    length: '3,140 ft',
    verticalRise: 'Crosses East River',
    rideTime: '3-4 min',
    capacity: '110 passengers per cabin',
    highlight: 'A real commuter tram with skyline bragging rights.',
    vibe: 'Urban, cinematic, transit nerd heaven.',
    story:
      'Originally an interim solution, it became a permanent and beloved transit link with iconic Manhattan views and standard MTA fare integration.',
    tags: ['urban transit', 'iconic skyline', 'commuter'],
  },
  {
    id: 'portland',
    name: 'Portland Aerial Tram',
    location: 'Portland, Oregon, USA',
    region: 'North America',
    type: 'Urban / institutional aerial tramway',
    opened: '2007',
    length: '3,300 ft',
    verticalRise: '500 ft',
    rideTime: '3 min',
    capacity: '79 passengers per cabin',
    highlight: 'Campus utility ride that still feels scenic.',
    vibe: 'Smart civic infrastructure with enthusiast appeal.',
    story:
      'Portland shows how tramways can be practical, elegant, and a little theatrical at the same time, tying a medical campus to the waterfront below.',
    tags: ['urban mobility', 'campus', 'utility'],
  },
  {
    id: 'table-mountain',
    name: 'Table Mountain Aerial Cableway',
    location: 'Cape Town, South Africa',
    region: 'Africa',
    type: 'Scenic aerial tramway',
    opened: '1929',
    length: 'Summit cableway',
    verticalRise: 'Sea-to-summit drama',
    rideTime: 'Fast summit ride',
    capacity: 'Rotating cabins',
    highlight: 'One of the world’s signature scenic cableway experiences.',
    vibe: 'Iconic landscape, global bucket-list energy.',
    story:
      'Table Mountain is category-defining: a tramway that is inseparable from the identity of a city and from the view people dream about before they arrive.',
    tags: ['bucket-list', 'rotating cabins', 'landmark'],
  },
]

export const taxonomy = [
  {
    title: 'Aerial tramway',
    description:
      'Big cabins shuttling back and forth on a reversible line. This is the star of the enthusiast site.',
  },
  {
    title: 'Gondola',
    description:
      'Smaller cabins moving continuously. Similar family, different riding rhythm and system logic.',
  },
  {
    title: 'Funicular',
    description:
      'Cable-powered rail cars climbing a steep slope. Ropeway-adjacent, but not suspended in the air.',
  },
  {
    title: 'Urban cable transit',
    description:
      'The city-minded branch of the ropeway world: fast, photogenic, and surprisingly practical.',
  },
]

export const timeline = [
  {
    era: 'Mining origins',
    note: 'Industrial ropeways moved ore and freight through rough terrain long before passenger systems became iconic attractions.',
  },
  {
    era: 'Wire-rope breakthrough',
    note: 'Stronger cables unlocked longer spans, heavier loads, and the engineering leap from rough utility to reliable systems.',
  },
  {
    era: 'Tourism era',
    note: 'Mountain access, sightseeing, and winter recreation turned tramways into destinations in their own right.',
  },
  {
    era: 'Urban experiments',
    note: 'A small but fascinating subset of tramways became transit links, proving ropeways can be practical as well as spectacular.',
  },
]

export const funFacts = [
  'Palm Springs introduced the world’s largest rotating tramcars during its modernization program.',
  'Wings of Tatev is famous both for its length and for the speed of its construction.',
  'Zugspitze markets itself around three major world-record engineering claims.',
  'Roosevelt Island’s tram was meant to be temporary and ended up becoming a permanent icon.',
  'Many enthusiasts use “tramway,” “cable car,” and “gondola” interchangeably even though they are not the same system type.',
  'The best tramway experiences mix movement, terrain, weather, story, and what waits at the top.',
]

export const enthusiastModes = [
  {
    title: 'Record hunter',
    description: 'Chases longest rides, biggest rises, tallest towers, and systems that make engineers grin.',
  },
  {
    title: 'History nerd',
    description: 'Wants origin stories, modernization timelines, mountain myths, and how utility became spectacle.',
  },
  {
    title: 'Urban ropeway fan',
    description: 'Cares about headways, commuting, skyline views, and when cable transit beats the street below.',
  },
]
