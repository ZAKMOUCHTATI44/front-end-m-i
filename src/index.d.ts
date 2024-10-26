interface Score {
  score: string
  tier: number
  raw: number
}

interface Growth {
  value: string
  type: string
}

interface BestNetwork {
  name: string
  tier: string
  score: number
}

interface Badge {
  exceptionalGrowth: boolean
  linkedinTopVoice: boolean
  looseFollowers: boolean
  wroteABook: boolean
  hasANewsletter: boolean
  hasAPodcast: boolean
  hasTopics: boolean
  hasCause: boolean
  isInactive: boolean
}

interface NetworkStats {
  network: string
  followers: string
  profileUrl: string
  score: string | null
  growth: Growth
}

interface Country {
  name: string
  code: string
}

interface Influencer {
  _id: string
  pictureUrl: string
  fullName: string
  title: string
  nicheName: string
  profileUrl: string
  score: Score
  growth: Growth
  rank: number
  biography: string
  bestNetwork: BestNetwork
  country: Country
  badges: Badge
  networksStats: NetworkStats[]
}
