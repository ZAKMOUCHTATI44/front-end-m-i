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

type Network = {
  network: string
  userId: string
  username: string
  fullName: string
  pictureUrl: string
  follower_Count: number
  profileUrl: string
  isVerified: boolean
  biography: string
  favikonUrl: string
  score: number
  influenceScore: {
    score: string
    comment: string
  }
  metrics: {
    activity: {
      title: string
      value: string
      score: string
    }
    followers: {
      title: string
      value: string
    }
    engagement: {
      title: string
      value: string
      score: string
    }
    growth: {
      title: string
      value: string
      score: string
    }
    raw_growth: {
      title: string
      value: string
      score: string
    }
    avg_engagement: {
      title: string
      value: string
      score: string
    }
    avg_views: {
      title: string
      value: string
      score?: string
    }
    last_activity_str: {
      title: string
      value: string
      score: string
    }
    prices: string
    postsPerDay: number
    postsMostCommonTimeUtc: number
  }
}
