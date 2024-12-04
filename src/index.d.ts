interface ScoreInf {
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
  username: string
  isVerified: boolean
}

interface Country {
  name: string
  code: string
}

interface Influencer {
  id: string
  _id: string
  pictureUrl: string
  fullName: string
  title: string
  nicheName: string
  profileUrl: string
  score: ScoreInf
  growth: {
    value: string
    type: string
  }
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

interface NetworksCount {
  youtube: number
  twitter: number
  tiktok: number
  linkedin: number
  instagram: number
}

interface PostType {
  label: string
  network: string
}

interface Post {
  media_id: string
  username: string
  profileImageUrl: string
  date: string
  network: string
  caption: string
  thumbnailUrl: string
  mediaUrl: string
  viewCount: string | null
  viewCountRaw: number | null
  buzzCount: string | null
  buzzCountRaw: number | null
  likeCount: string
  likeCountRaw: number
  commentCount: string
  commentCountRaw: number
  shareCount: string | null
  shareCountRaw: number | null
  engagementRate: string
  engagementRateRaw: number
  postType: PostType
}

interface Industry {
  _id: string
  name: string
  slug: string
  niches: Niche
  primary: boolean
  state: number
}

interface Niche {
  id: string
  name: string
  slug: string
  primary: boolean
  state: number
}

interface TopRank {
  topTitle: string
  topUrl: string
  rank: string
  rankPercent: string
  comment: string
  rankingPreview: RankingPreview[]
}

interface RankingPreview {
  rankPercent: string
  rawRankPercent: number
  creator: Creator
}

interface Creator {
  pictureUrl: string
  profileUrl: string
  fullName: string
  networkScore: NetworkScore
  isSelf?: boolean
}

interface NetworkScore {
  network: string
  networkProfileUrl: string
  score: string
  comment: string
}

interface Biography {
  name: string
  code: string
}

interface Language {
  name: string
  code: string
}

interface NetworkFollower {
  network: string
  followerCount: number
  followerCountText: string
  networkProfileUrl: string
  percent: number
}

interface Score {
  score: string
  tier: number
  title: string
}

interface Prices {
  min: number
  max: number
}

interface CreatorPrices {
  instagram: {
    prices: Prices
  }
  youtube: {
    prices: Prices
  }
  tiktok: {
    prices: Prices
  }
}

interface Metrics {
  growth: Growth
  activity: Activity
  reachability: Reachability
}

interface Growth {
  value: string
  comment: Comment
}

interface Activity {
  value: string
  comment: Comment
}

interface Reachability {
  value: string
  comment: Comment
}

interface Comment {
  score: string
  text: string
}

interface CreatorData {
  _id: string
  id: string
  isVerified: boolean
  industries: {
    name: string
  }
  networksStats: NetworkStats[]
  topRanks: TopRank[]
  pictureUrl: string
  fullName: string
  title: string
  country: Biography
  language: Language
  biography: string
  networkFollowers: NetworkFollower[]
  networkScores: NetworkScore[]
  score: Score
  badges: Badges
  topPost: string | null
  updatedTimeText: string
  updatedTime: number
  prices: CreatorPrices
  metrics: Metrics
}

interface Badges {
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

interface Data {
  networksCount: NetworksCount
  posts: Post[]
  totalCount: number
  similarProfiles: ProfilesSimilar[]
  creator: CreatorData
}

type ProfilesSimilar = {
  id: number
  fullName: string
  niche: string
  pictureUrl: string
}
interface OverviewEvolution {
  id: string
  data: EvolutionData[]
  growth: Growth
}

interface EvolutionData {
  value: number | null
  displayedValue: string
  date: string
  timestamp: number
  other_data?: {
    score_tier: number
  }
}

interface Growth {
  growth: string
  type: string
}

interface AudienceEvolution {
  data: AudienceData[]
  title: string
  network: string
  growth: Growth
}

interface AudienceData {
  date: string
  value: number
  displayedValue: string
  timestamp: number
}

interface Network {
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
  influenceScore: InfluenceScore
  metrics: Metrics
}

interface InfluenceScore {
  score: string
  comment: string
}

interface Metrics {
  activity: MetricDetail
  followers: MetricDetail
  engagement: MetricDetail
  growth: MetricDetail
  raw_growth: MetricDetail
  avg_engagement: MetricDetail
  avg_views: MetricDetail
  last_activity_str: MetricDetail
  prices: string
  postsPerDay: number
  postsMostCommonTimeUtc: number
}

interface MetricDetail {
  title: string
  value: string | number
  score: string
}

interface SocialCoverage {
  overviewEvolution: OverviewEvolution[]
  audienceEvolutions: AudienceEvolution[]
  networks: Network[]
}

interface DataSocialCoverage {
  socialCoverage: SocialCoverage
  blurredFields: BlurredFields
}

interface BlurredFields {
  creator: CreatorBlurredFields
  overview: OverviewBlurredFields
  socialCoverage: SocialCoverageBlurredFields
  content: ContentBlurredFields
  creatorNetwork: CreatorNetworkBlurredFields
  audience: AudienceBlurredFields
  scoring: ScoringBlurredFields
  partnerships: PartnershipsBlurredFields
}

interface CreatorBlurredFields {
  creatorScore: boolean
  profileResume: boolean
  creatorTopRanks: boolean
  metrics: boolean
}

interface OverviewBlurredFields {
  bestPosts: boolean
  wordCloud: boolean
}

interface SocialCoverageBlurredFields {
  graphEvolution: boolean
  networks: boolean
  newsletter: boolean
  podcast: boolean
}

interface ContentBlurredFields {
  posts: boolean
}

interface CreatorNetworkBlurredFields {
  available: boolean
}

interface AudienceBlurredFields {
  available: boolean
}

interface ScoringBlurredFields {
  available: boolean
}

interface PartnershipsBlurredFields {
  available: boolean
}

interface Category {
  id: string
  label: string
  value: string
}

interface Project {
  id: string
  total_influencers_count: number
  name: string
  statutProjets: StatutProjets[]
  created_at: string
  updated_at: string
}

interface StatutProjets {
  id: string
  name: string
  order: string
  influencers: Influencer[]
  influencers_count: string
}

interface ListType {
  name: string
  id: string
  influencers_count: string
  influencers: Influencer[]
  isSelected: boolean
  created_at: string
  updated_at: string
}
