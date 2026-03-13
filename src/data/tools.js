export const CATEGORIES = [
  { id: 'writing', name: 'Writing', icon: '✍️' },
  { id: 'images', name: 'Images', icon: '🖼️' },
  { id: 'video', name: 'Video', icon: '🎬' },
  { id: 'music', name: 'Music', icon: '🎵' },
  { id: 'code', name: 'Code', icon: '💻' },
  { id: 'business', name: 'Business', icon: '📊' },
  { id: 'voice', name: 'Voice', icon: '🎙️' },
  { id: 'research', name: 'Research', icon: '🔬' },
]

export const TRENDING_TOOLS = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    slug: 'chatgpt',
    category: 'writing',
    description: 'AI chatbot by OpenAI for any conversation',
    logo: '🤖',
    score: 9.4,
    scores: {
      ease_of_use: 9.5,
      output_quality: 9.3,
      value_for_money: 8.9,
      features: 9.4
    },
    trend: 42,
    users: '100M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 20,
      currency: 'USD'
    },
    features: ['Chat interface', 'Code generation', 'Analysis', 'Creative writing'],
    website_url: 'https://chatgpt.com',
    affiliate_url: 'https://chatgpt.com?ref=spotatool'
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    slug: 'midjourney',
    category: 'images',
    description: 'AI image generation tool for stunning visuals',
    logo: '🎨',
    score: 9.6,
    scores: {
      ease_of_use: 8.8,
      output_quality: 9.8,
      value_for_money: 9.1,
      features: 9.5
    },
    trend: 38,
    users: '14M+',
    pricing: {
      model: 'subscription',
      free_tier: false,
      starting_price: 10,
      currency: 'USD'
    },
    features: ['Text to image', 'Image to image', 'Upscaling', 'Style transfer'],
    website_url: 'https://midjourney.com',
    affiliate_url: 'https://midjourney.com?ref=spotatool'
  },
  {
    id: 'claude',
    name: 'Claude',
    slug: 'claude',
    category: 'writing',
    description: 'Advanced AI assistant by Anthropic',
    logo: '🧠',
    score: 9.5,
    scores: {
      ease_of_use: 9.4,
      output_quality: 9.6,
      value_for_money: 9.2,
      features: 9.4
    },
    trend: 55,
    users: '50M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 20,
      currency: 'USD'
    },
    features: ['Long context', 'Code analysis', 'Document processing', 'Reasoning'],
    website_url: 'https://claude.ai',
    affiliate_url: 'https://claude.ai?ref=spotatool'
  },
  {
    id: 'runwayml',
    name: 'Runway ML',
    slug: 'runwayml',
    category: 'video',
    description: 'AI video creation and editing platform',
    logo: '🎥',
    score: 9.2,
    scores: {
      ease_of_use: 8.9,
      output_quality: 9.4,
      value_for_money: 8.8,
      features: 9.2
    },
    trend: 48,
    users: '8M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 12,
      currency: 'USD'
    },
    features: ['Video generation', 'Motion tracking', 'Color grading', 'Effects'],
    website_url: 'https://runway.com',
    affiliate_url: 'https://runway.com?ref=spotatool'
  },
  {
    id: 'dallae3',
    name: 'DALL-E 3',
    slug: 'dallae3',
    category: 'images',
    description: 'Advanced image generation from text',
    logo: '🎭',
    score: 9.3,
    scores: {
      ease_of_use: 9.2,
      output_quality: 9.5,
      value_for_money: 8.9,
      features: 9.1
    },
    trend: 35,
    users: '30M+',
    pricing: {
      model: 'pay_per_use',
      free_tier: false,
      starting_price: 0.04,
      currency: 'USD'
    },
    features: ['Text to image', 'Variations', 'Editing', 'High resolution'],
    website_url: 'https://openai.com/dall-e-3',
    affiliate_url: 'https://openai.com/dall-e-3?ref=spotatool'
  },
  {
    id: 'mubert',
    name: 'Mubert',
    slug: 'mubert',
    category: 'music',
    description: 'AI music generation for creators',
    logo: '🎼',
    score: 8.8,
    scores: {
      ease_of_use: 9.0,
      output_quality: 8.6,
      value_for_money: 8.9,
      features: 8.7
    },
    trend: 32,
    users: '5M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 9.99,
      currency: 'USD'
    },
    features: ['Music generation', 'Customization', 'Licensing', 'Royalty-free'],
    website_url: 'https://mubert.com',
    affiliate_url: 'https://mubert.com?ref=spotatool'
  }
]

export const COMPARISONS = [
  {
    id: 'chatgpt-vs-claude',
    tool_a: 'ChatGPT',
    tool_b: 'Claude',
    views: 45000,
    verdict: 'Claude wins for coding, ChatGPT for general use'
  },
  {
    id: 'midjourney-vs-dalle',
    tool_a: 'Midjourney',
    tool_b: 'DALL-E 3',
    views: 38000,
    verdict: 'Midjourney for creativity, DALL-E for precision'
  },
  {
    id: 'runway-vs-synthesia',
    tool_a: 'Runway ML',
    tool_b: 'Synthesia',
    views: 25000,
    verdict: 'Runway for editing, Synthesia for avatars'
  },
  {
    id: 'mubert-vs-soundraw',
    tool_a: 'Mubert',
    tool_b: 'SOUNDRAW',
    views: 18000,
    verdict: 'Mubert for variety, SOUNDRAW for quality'
  }
]

export const SEARCH_SUGGESTIONS = [
  'Togliere sfondo',
  'Creare musica',
  'Scrivere copy',
  'Generare immagini',
  'Video editing',
  'Coding assistant'
]