// All AI Tools Data - 50 Real Tools
// Organized by category with complete information

export const CATEGORIES = [
  { id: 'writing', name: 'Writing', icon: '✍️' },
  { id: 'images', name: 'Images', icon: '🖼️' },
  { id: 'video', name: 'Video', icon: '🎬' },
  { id: 'music', name: 'Music', icon: '🎵' },
  { id: 'code', name: 'Code', icon: '💻' },
  { id: 'business', name: 'Business', icon: '📊' },
  { id: 'voice', name: 'Voice', icon: '🎙️' },
  { id: 'research', name: 'Research', icon: '🔬' }
];

export const TOOLS = [
  // WRITING (8 tools)
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    slug: 'chatgpt',
    category: 'writing',
    logo: '🤖',
    description: 'Conversational AI for writing, coding, analysis, and brainstorming',
    website_url: 'https://chatgpt.com',
    affiliate_url: null,
    score: 9.4,
    total_reviews: 2847,
    scores_breakdown: {
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
    features: ['Chat interface', 'Code generation', 'Document analysis', 'Creative writing', 'Multimodal input']
  },
  {
    id: 'claude',
    name: 'Claude',
    slug: 'claude',
    category: 'writing',
    logo: '🧠',
    description: 'Advanced AI assistant by Anthropic, excellent for coding and analysis',
    website_url: 'https://claude.ai',
    affiliate_url: null,
    score: 9.3,
    total_reviews: 1956,
    scores_breakdown: {
      ease_of_use: 9.4,
      output_quality: 9.5,
      value_for_money: 9.0,
      features: 9.1
    },
    trend: 58,
    users: '50M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 20,
      currency: 'USD'
    },
    features: ['Long context window', 'Code analysis', 'Document processing', 'Research assistance', 'Writing help']
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    slug: 'gemini',
    category: 'writing',
    logo: '✨',
    description: 'Google\'s multimodal AI model for text, images, and video',
    website_url: 'https://gemini.google.com',
    affiliate_url: null,
    score: 8.8,
    total_reviews: 1234,
    scores_breakdown: {
      ease_of_use: 9.0,
      output_quality: 8.7,
      value_for_money: 8.8,
      features: 8.7
    },
    trend: 35,
    users: '30M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 0,
      currency: 'USD'
    },
    features: ['Multimodal input', 'Image understanding', 'Web search integration', 'Real-time info', 'Google Workspace integration']
  },
  {
    id: 'copilot',
    name: 'GitHub Copilot',
    slug: 'copilot',
    category: 'writing',
    logo: '🚀',
    description: 'AI pair programmer for code generation and assistance',
    website_url: 'https://github.com/features/copilot',
    affiliate_url: null,
    score: 9.1,
    total_reviews: 1678,
    scores_breakdown: {
      ease_of_use: 9.3,
      output_quality: 9.0,
      value_for_money: 8.7,
      features: 9.2
    },
    trend: 44,
    users: '5M+',
    pricing: {
      model: 'subscription',
      free_tier: false,
      starting_price: 10,
      currency: 'USD'
    },
    features: ['Code completion', 'PR descriptions', 'Test generation', 'IDE integration', 'Multiple languages']
  },
  {
    id: 'jasper',
    name: 'Jasper',
    slug: 'jasper',
    category: 'writing',
    logo: '📝',
    description: 'AI content creation platform for marketing and copywriting',
    website_url: 'https://www.jasper.ai',
    affiliate_url: null,
    score: 8.5,
    total_reviews: 892,
    scores_breakdown: {
      ease_of_use: 8.8,
      output_quality: 8.3,
      value_for_money: 8.2,
      features: 8.5
    },
    trend: 12,
    users: '100K+',
    pricing: {
      model: 'subscription',
      free_tier: true,
      starting_price: 39,
      currency: 'USD'
    },
    features: ['Marketing copy', 'Blog writing', 'Social media content', 'Brand voice', 'SEO optimization']
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    slug: 'grammarly',
    category: 'writing',
    logo: '✏️',
    description: 'AI writing assistant for grammar, clarity, and tone',
    website_url: 'https://www.grammarly.com',
    affiliate_url: null,
    score: 8.7,
    total_reviews: 1245,
    scores_breakdown: {
      ease_of_use: 9.2,
      output_quality: 8.5,
      value_for_money: 8.3,
      features: 8.6
    },
    trend: 18,
    users: '30M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 12,
      currency: 'USD'
    },
    features: ['Grammar checking', 'Tone detection', 'Plagiarism detection', 'Style guide', 'Browser extension']
  },
  {
    id: 'writesonic',
    name: 'Writesonic',
    slug: 'writesonic',
    category: 'writing',
    logo: '🎯',
    description: 'AI writing tool for content creation and copywriting',
    website_url: 'https://writesonic.com',
    affiliate_url: null,
    score: 8.3,
    total_reviews: 756,
    scores_breakdown: {
      ease_of_use: 8.5,
      output_quality: 8.2,
      value_for_money: 8.2,
      features: 8.3
    },
    trend: 22,
    users: '50K+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 12,
      currency: 'USD'
    },
    features: ['Article generation', 'Email writing', 'Ad copy', 'Landing page', 'SEO content']
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    slug: 'notion-ai',
    category: 'writing',
    logo: '💡',
    description: 'AI features integrated into Notion for writing and content organization',
    website_url: 'https://www.notion.so',
    affiliate_url: null,
    score: 8.2,
    total_reviews: 634,
    scores_breakdown: {
      ease_of_use: 8.9,
      output_quality: 8.0,
      value_for_money: 8.2,
      features: 8.1
    },
    trend: 28,
    users: '20M+',
    pricing: {
      model: 'subscription',
      free_tier: true,
      starting_price: 10,
      currency: 'USD'
    },
    features: ['Content generation', 'Document summarization', 'Writing assistance', 'Brainstorming', 'Translation']
  },

  // IMAGES (8 tools)
  {
    id: 'midjourney',
    name: 'Midjourney',
    slug: 'midjourney',
    category: 'images',
    logo: '🎨',
    description: 'AI image generator for creating stunning visual artwork',
    website_url: 'https://www.midjourney.com',
    affiliate_url: null,
    score: 9.2,
    total_reviews: 2134,
    scores_breakdown: {
      ease_of_use: 8.8,
      output_quality: 9.4,
      value_for_money: 8.9,
      features: 9.2
    },
    trend: 62,
    users: '15M+',
    pricing: {
      model: 'subscription',
      free_tier: false,
      starting_price: 10,
      currency: 'USD'
    },
    features: ['Image generation', 'Image variations', 'Upscaling', 'Inpainting', 'Discord integration']
  },
  {
    id: 'dalle3',
    name: 'DALL-E 3',
    slug: 'dalle3',
    category: 'images',
    logo: '🖼️',
    description: 'OpenAI\'s image generation model with improved quality and accuracy',
    website_url: 'https://openai.com/dall-e-3',
    affiliate_url: null,
    score: 9.0,
    total_reviews: 1876,
    scores_breakdown: {
      ease_of_use: 9.1,
      output_quality: 9.2,
      value_for_money: 8.7,
      features: 8.9
    },
    trend: 51,
    users: '20M+',
    pricing: {
      model: 'pay_per_use',
      free_tier: false,
      starting_price: 0.08,
      currency: 'USD'
    },
    features: ['Text-to-image', 'Variations', 'Editing', 'High resolution', 'Natural language']
  },
  {
    id: 'stablediffusion',
    name: 'Stable Diffusion',
    slug: 'stable-diffusion',
    category: 'images',
    logo: '⚡',
    description: 'Open-source image generation model available for free and commercial use',
    website_url: 'https://stablediffusionweb.com',
    affiliate_url: null,
    score: 8.6,
    total_reviews: 1423,
    scores_breakdown: {
      ease_of_use: 8.4,
      output_quality: 8.6,
      value_for_money: 9.2,
      features: 8.5
    },
    trend: 38,
    users: '10M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 0,
      currency: 'USD'
    },
    features: ['Text-to-image', 'Image-to-image', 'Inpainting', 'Open-source', 'Customizable models']
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    slug: 'adobe-firefly',
    category: 'images',
    logo: '🔥',
    description: 'Adobe\'s generative AI tool integrated into Creative Cloud',
    website_url: 'https://www.adobe.com/products/firefly.html',
    affiliate_url: null,
    score: 8.8,
    total_reviews: 945,
    scores_breakdown: {
      ease_of_use: 9.0,
      output_quality: 8.8,
      value_for_money: 8.5,
      features: 8.8
    },
    trend: 45,
    users: '5M+',
    pricing: {
      model: 'subscription',
      free_tier: true,
      starting_price: 4.99,
      currency: 'USD'
    },
    features: ['Generative fill', 'Text-to-image', 'Creative variations', 'Photoshop integration', 'Adobe Firefly credit']
  },
  {
    id: 'canva',
    name: 'Canva AI',
    slug: 'canva-ai',
    category: 'images',
    logo: '🎭',
    description: 'Design platform with AI features for creating graphics and presentations',
    website_url: 'https://www.canva.com',
    affiliate_url: null,
    score: 8.5,
    total_reviews: 1567,
    scores_breakdown: {
      ease_of_use: 9.3,
      output_quality: 8.3,
      value_for_money: 8.6,
      features: 8.4
    },
    trend: 33,
    users: '150M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 14.99,
      currency: 'USD'
    },
    features: ['Image generation', 'Design templates', 'AI background removal', 'Text effects', 'Drag-and-drop editor']
  },
  {
    id: 'removebg',
    name: 'Remove.bg',
    slug: 'removebg',
    category: 'images',
    logo: '✂️',
    description: 'AI background remover for images with one click',
    website_url: 'https://www.remove.bg',
    affiliate_url: null,
    score: 8.9,
    total_reviews: 1234,
    scores_breakdown: {
      ease_of_use: 9.5,
      output_quality: 8.8,
      value_for_money: 8.8,
      features: 8.8
    },
    trend: 22,
    users: '50M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 0.99,
      currency: 'USD'
    },
    features: ['Background removal', 'Batch processing', 'High resolution', 'API access', 'Mobile app']
  },
  {
    id: 'upscayl',
    name: 'Upscayl',
    slug: 'upscayl',
    category: 'images',
    logo: '📈',
    description: 'Free open-source AI image upscaler for improving image quality',
    website_url: 'https://upscayl.github.io',
    affiliate_url: null,
    score: 8.4,
    total_reviews: 567,
    scores_breakdown: {
      ease_of_use: 8.6,
      output_quality: 8.3,
      value_for_money: 9.5,
      features: 8.2
    },
    trend: 41,
    users: '1M+',
    pricing: {
      model: 'free',
      free_tier: true,
      starting_price: 0,
      currency: 'USD'
    },
    features: ['Image upscaling', 'Batch processing', 'Multiple models', 'Open-source', 'No watermarks']
  },

  // VIDEO (6 tools)
  {
    id: 'runway',
    name: 'Runway',
    slug: 'runway',
    category: 'video',
    logo: '🎬',
    description: 'AI video generation and editing platform for creators',
    website_url: 'https://runwayml.com',
    affiliate_url: null,
    score: 9.1,
    total_reviews: 1456,
    scores_breakdown: {
      ease_of_use: 8.9,
      output_quality: 9.2,
      value_for_money: 8.8,
      features: 9.1
    },
    trend: 67,
    users: '3M+',
    pricing: {
      model: 'subscription',
      free_tier: true,
      starting_price: 13,
      currency: 'USD'
    },
    features: ['Video generation', 'Video editing', 'Motion tracking', 'Real-time collaboration', 'Magic tools']
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    slug: 'synthesia',
    category: 'video',
    logo: '🎥',
    description: 'AI video creation platform with virtual avatars and text-to-video',
    website_url: 'https://www.synthesia.io',
    affiliate_url: null,
    score: 8.7,
    total_reviews: 834,
    scores_breakdown: {
      ease_of_use: 8.8,
      output_quality: 8.6,
      value_for_money: 8.5,
      features: 8.7
    },
    trend: 48,
    users: '500K+',
    pricing: {
      model: 'subscription',
      free_tier: true,
      starting_price: 30,
      currency: 'USD'
    },
    features: ['Video avatars', 'Text-to-video', 'Lip-sync', 'Multi-language', 'Custom branding']
  },
  {
    id: 'descript',
    name: 'Descript',
    slug: 'descript',
    category: 'video',
    logo: '📹',
    description: 'Collaborative audio and video editing platform with AI transcription',
    website_url: 'https://www.descript.com',
    affiliate_url: null,
    score: 8.8,
    total_reviews: 1023,
    scores_breakdown: {
      ease_of_use: 9.0,
      output_quality: 8.7,
      value_for_money: 8.7,
      features: 8.8
    },
    trend: 52,
    users: '2M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 12,
      currency: 'USD'
    },
    features: ['Automatic transcription', 'Video/audio editing', 'Screen recording', 'Podcast editing', 'AI voice']
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    slug: 'heygen',
    category: 'video',
    logo: '🎭',
    description: 'AI video generation with avatars and voice synthesis',
    website_url: 'https://www.heygen.com',
    affiliate_url: null,
    score: 8.6,
    total_reviews: 745,
    scores_breakdown: {
      ease_of_use: 8.7,
      output_quality: 8.5,
      value_for_money: 8.5,
      features: 8.6
    },
    trend: 44,
    users: '1M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 25,
      currency: 'USD'
    },
    features: ['AI avatars', 'Video translation', 'Voice synthesis', 'Template library', 'API access']
  },
  {
    id: 'capcut',
    name: 'CapCut',
    slug: 'capcut',
    category: 'video',
    logo: '✂️',
    description: 'Free video editing app with AI-powered features',
    website_url: 'https://www.capcut.com',
    affiliate_url: null,
    score: 8.5,
    total_reviews: 2156,
    scores_breakdown: {
      ease_of_use: 9.2,
      output_quality: 8.3,
      value_for_money: 9.4,
      features: 8.4
    },
    trend: 38,
    users: '500M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 0,
      currency: 'USD'
    },
    features: ['Auto captions', 'Background removal', 'Auto zoom', 'Music library', 'Effects library']
  },

  // MUSIC (5 tools)
  {
    id: 'mubert',
    name: 'Mubert',
    slug: 'mubert',
    category: 'music',
    logo: '🎵',
    description: 'AI music generation platform for royalty-free background music',
    website_url: 'https://mubert.com',
    affiliate_url: null,
    score: 8.4,
    total_reviews: 623,
    scores_breakdown: {
      ease_of_use: 8.6,
      output_quality: 8.2,
      value_for_money: 8.4,
      features: 8.4
    },
    trend: 35,
    users: '500K+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 14.99,
      currency: 'USD'
    },
    features: ['AI music generation', 'Genre selection', 'Mood-based', 'Royalty-free', 'Customizable length']
  },
  {
    id: 'soundraw',
    name: 'Soundraw',
    slug: 'soundraw',
    category: 'music',
    logo: '🎼',
    description: 'AI music composition tool for creating original background music',
    website_url: 'https://soundraw.io',
    affiliate_url: null,
    score: 8.3,
    total_reviews: 456,
    scores_breakdown: {
      ease_of_use: 8.5,
      output_quality: 8.2,
      value_for_money: 8.2,
      features: 8.3
    },
    trend: 28,
    users: '100K+',
    pricing: {
      model: 'subscription',
      free_tier: true,
      starting_price: 9.99,
      currency: 'USD'
    },
    features: ['Music generation', 'Genre selection', 'Mood customization', 'Commercial license', 'No copyright issues']
  },
  {
    id: 'jukebox',
    name: 'Jukebox',
    slug: 'jukebox',
    category: 'music',
    logo: '🎶',
    description: 'OpenAI\'s neural network that generates music with singing',
    website_url: 'https://openai.com/jukebox',
    affiliate_url: null,
    score: 8.1,
    total_reviews: 345,
    scores_breakdown: {
      ease_of_use: 7.9,
      output_quality: 8.2,
      value_for_money: 8.2,
      features: 8.1
    },
    trend: 15,
    users: '100K+',
    pricing: {
      model: 'free',
      free_tier: true,
      starting_price: 0,
      currency: 'USD'
    },
    features: ['Music generation', 'Singing voice', 'Genre synthesis', 'Artist style transfer', 'Open-source']
  },
  {
    id: 'beatbot',
    name: 'BeatBot',
    slug: 'beatbot',
    category: 'music',
    logo: '🤖',
    description: 'AI music generation focused on electronic and dance music',
    website_url: 'https://beatbot.fm',
    affiliate_url: null,
    score: 8.0,
    total_reviews: 267,
    scores_breakdown: {
      ease_of_use: 8.2,
      output_quality: 7.9,
      value_for_money: 8.1,
      features: 8.0
    },
    trend: 22,
    users: '50K+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 4.99,
      currency: 'USD'
    },
    features: ['Beat generation', 'Electronic music', 'BPM control', 'Download options', 'Social sharing']
  },

  // CODE (6 tools)
  {
    id: 'codeium',
    name: 'Codeium',
    slug: 'codeium',
    category: 'code',
    logo: '💻',
    description: 'Free AI code completion tool integrated into IDEs',
    website_url: 'https://codeium.com',
    affiliate_url: null,
    score: 8.7,
    total_reviews: 892,
    scores_breakdown: {
      ease_of_use: 8.9,
      output_quality: 8.6,
      value_for_money: 9.4,
      features: 8.6
    },
    trend: 51,
    users: '1M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 0,
      currency: 'USD'
    },
    features: ['Code completion', 'IDE integration', 'Multiple languages', 'Fast inference', 'Free tier']
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    slug: 'tabnine',
    category: 'code',
    logo: '📖',
    description: 'AI code completion with whole-line and full-function completions',
    website_url: 'https://www.tabnine.com',
    affiliate_url: null,
    score: 8.5,
    total_reviews: 634,
    scores_breakdown: {
      ease_of_use: 8.6,
      output_quality: 8.4,
      value_for_money: 8.4,
      features: 8.5
    },
    trend: 36,
    users: '500K+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 12,
      currency: 'USD'
    },
    features: ['Code completion', 'Privacy focused', 'IDE extensions', 'Team features', 'API integration']
  },
  {
    id: 'replit-ghostwriter',
    name: 'Replit Ghostwriter',
    slug: 'replit-ghostwriter',
    category: 'code',
    logo: '👻',
    description: 'AI coding assistant built into the Replit IDE',
    website_url: 'https://replit.com/ai',
    affiliate_url: null,
    score: 8.4,
    total_reviews: 512,
    scores_breakdown: {
      ease_of_use: 8.7,
      output_quality: 8.3,
      value_for_money: 8.4,
      features: 8.3
    },
    trend: 42,
    users: '500K+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 7,
      currency: 'USD'
    },
    features: ['Code generation', 'Bug fixing', 'Explanation', 'Replit integration', 'Collaborative coding']
  },
  {
    id: 'amazon-codewhisperer',
    name: 'Amazon CodeWhisperer',
    slug: 'amazon-codewhisperer',
    category: 'code',
    logo: '🪬',
    description: 'AWS AI code generation tool for developers',
    website_url: 'https://aws.amazon.com/codewhisperer',
    affiliate_url: null,
    score: 8.3,
    total_reviews: 423,
    scores_breakdown: {
      ease_of_use: 8.4,
      output_quality: 8.2,
      value_for_money: 8.4,
      features: 8.2
    },
    trend: 31,
    users: '100K+',
    pricing: {
      model: 'free',
      free_tier: true,
      starting_price: 0,
      currency: 'USD'
    },
    features: ['Code generation', 'AWS integration', 'Security scanning', 'IDE support', 'Free for individuals']
  },
  {
    id: 'blackbox',
    name: 'Blackbox',
    slug: 'blackbox',
    category: 'code',
    logo: '⬛',
    description: 'AI code generation with community-powered examples',
    website_url: 'https://www.useblackbox.io',
    affiliate_url: null,
    score: 8.2,
    total_reviews: 345,
    scores_breakdown: {
      ease_of_use: 8.4,
      output_quality: 8.1,
      value_for_money: 8.3,
      features: 8.2
    },
    trend: 27,
    users: '200K+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 0,
      currency: 'USD'
    },
    features: ['Code generation', 'Community examples', 'Browser extension', 'Search code snippets', 'Fast']
  },

  // BUSINESS (8 tools)
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    slug: 'perplexity',
    category: 'business',
    logo: '🔍',
    description: 'AI search engine that provides detailed answers with sources',
    website_url: 'https://www.perplexity.ai',
    affiliate_url: null,
    score: 8.8,
    total_reviews: 1123,
    scores_breakdown: {
      ease_of_use: 8.9,
      output_quality: 8.8,
      value_for_money: 8.7,
      features: 8.8
    },
    trend: 63,
    users: '2M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 20,
      currency: 'USD'
    },
    features: ['Search with sources', 'Real-time info', 'Research', 'Citation', 'Clean UI']
  },
  {
    id: 'julius',
    name: 'Julius',
    slug: 'julius',
    category: 'business',
    logo: '📈',
    description: 'AI data analysis platform for business intelligence',
    website_url: 'https://julius.ai',
    affiliate_url: null,
    score: 8.6,
    total_reviews: 567,
    scores_breakdown: {
      ease_of_use: 8.5,
      output_quality: 8.7,
      value_for_money: 8.5,
      features: 8.6
    },
    trend: 48,
    users: '100K+',
    pricing: {
      model: 'subscription',
      free_tier: true,
      starting_price: 29,
      currency: 'USD'
    },
    features: ['Data analysis', 'Chart creation', 'Export reports', 'Python integration', 'Real-time insights']
  },
  {
    id: 'gong',
    name: 'Gong',
    slug: 'gong',
    category: 'business',
    logo: '🎯',
    description: 'AI platform for sales conversation intelligence',
    website_url: 'https://www.gong.io',
    affiliate_url: null,
    score: 8.9,
    total_reviews: 834,
    scores_breakdown: {
      ease_of_use: 8.7,
      output_quality: 9.0,
      value_for_money: 8.7,
      features: 9.0
    },
    trend: 54,
    users: '500K+',
    pricing: {
      model: 'subscription',
      free_tier: false,
      starting_price: 50,
      currency: 'USD'
    },
    features: ['Call recording', 'Conversation analysis', 'Coaching insights', 'Pipeline intelligence', 'CRM integration']
  },
  {
    id: 'salesforce-einstein',
    name: 'Salesforce Einstein',
    slug: 'salesforce-einstein',
    category: 'business',
    logo: '☁️',
    description: 'AI-powered CRM features for sales, service, and marketing',
    website_url: 'https://www.salesforce.com/ai',
    affiliate_url: null,
    score: 8.7,
    total_reviews: 945,
    scores_breakdown: {
      ease_of_use: 8.5,
      output_quality: 8.8,
      value_for_money: 8.5,
      features: 8.8
    },
    trend: 41,
    users: '10M+',
    pricing: {
      model: 'subscription',
      free_tier: false,
      starting_price: 165,
      currency: 'USD'
    },
    features: ['Predictive analytics', 'Opportunity scoring', 'Activity recommendations', 'Lead scoring', 'Forecasting']
  },
  {
    id: 'hubspot-ai',
    name: 'HubSpot AI',
    slug: 'hubspot-ai',
    category: 'business',
    logo: '🔄',
    description: 'AI features built into HubSpot CRM platform',
    website_url: 'https://www.hubspot.com',
    affiliate_url: null,
    score: 8.6,
    total_reviews: 1234,
    scores_breakdown: {
      ease_of_use: 8.8,
      output_quality: 8.5,
      value_for_money: 8.7,
      features: 8.6
    },
    trend: 45,
    users: '5M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 45,
      currency: 'USD'
    },
    features: ['Email writing', 'Content creation', 'Lead scoring', 'Chat assistant', 'Sales forecasting']
  },
  {
    id: 'monday-ai',
    name: 'Monday.com AI',
    slug: 'monday-ai',
    category: 'business',
    logo: '📅',
    description: 'AI-powered project management platform',
    website_url: 'https://monday.com',
    affiliate_url: null,
    score: 8.5,
    total_reviews: 1567,
    scores_breakdown: {
      ease_of_use: 8.7,
      output_quality: 8.4,
      value_for_money: 8.5,
      features: 8.5
    },
    trend: 38,
    users: '2M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 9,
      currency: 'USD'
    },
    features: ['Task automation', 'Workflow templates', 'AI automation', 'Status updates', 'Team collaboration']
  },
  {
    id: 'clickup-ai',
    name: 'ClickUp AI',
    slug: 'clickup-ai',
    category: 'business',
    logo: '✨',
    description: 'AI features in ClickUp project management platform',
    website_url: 'https://clickup.com',
    affiliate_url: null,
    score: 8.4,
    total_reviews: 1342,
    scores_breakdown: {
      ease_of_use: 8.6,
      output_quality: 8.3,
      value_for_money: 8.5,
      features: 8.4
    },
    trend: 42,
    users: '1M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 5,
      currency: 'USD'
    },
    features: ['Task generation', 'Summaries', 'Email templates', 'Writing assistance', 'Automation']
  },

  // VOICE (5 tools)
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    slug: 'elevenlabs',
    category: 'voice',
    logo: '🎙️',
    description: 'AI text-to-speech with natural, human-like voices',
    website_url: 'https://elevenlabs.io',
    affiliate_url: null,
    score: 9.2,
    total_reviews: 1456,
    scores_breakdown: {
      ease_of_use: 9.3,
      output_quality: 9.2,
      value_for_money: 8.9,
      features: 9.1
    },
    trend: 71,
    users: '2M+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 5,
      currency: 'USD'
    },
    features: ['Text-to-speech', 'Voice cloning', 'Natural voices', 'Multiple languages', 'API access']
  },
  {
    id: 'google-tts',
    name: 'Google Text-to-Speech',
    slug: 'google-tts',
    category: 'voice',
    logo: '🔊',
    description: 'Google\'s cloud text-to-speech service',
    website_url: 'https://cloud.google.com/text-to-speech',
    affiliate_url: null,
    score: 8.5,
    total_reviews: 678,
    scores_breakdown: {
      ease_of_use: 8.6,
      output_quality: 8.4,
      value_for_money: 8.6,
      features: 8.4
    },
    trend: 24,
    users: '100K+',
    pricing: {
      model: 'pay_per_use',
      free_tier: true,
      starting_price: 0.004,
      currency: 'USD'
    },
    features: ['Multiple voices', 'Multiple languages', 'SSML support', 'Voice effects', 'Audio profiles']
  },
  {
    id: 'murf',
    name: 'Murf',
    slug: 'murf',
    category: 'voice',
    logo: '🎤',
    description: 'AI voice generator for creating voiceovers',
    website_url: 'https://murf.ai',
    affiliate_url: null,
    score: 8.7,
    total_reviews: 845,
    scores_breakdown: {
      ease_of_use: 8.8,
      output_quality: 8.7,
      value_for_money: 8.5,
      features: 8.7
    },
    trend: 48,
    users: '500K+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 14,
      currency: 'USD'
    },
    features: ['AI voiceovers', 'Text-to-speech', 'Voice cloning', 'Video sync', 'Commercial license']
  },
  {
    id: 'descript-overdub',
    name: 'Descript Overdub',
    slug: 'descript-overdub',
    category: 'voice',
    logo: '🎧',
    description: 'AI voice synthesis integrated in Descript',
    website_url: 'https://www.descript.com/overdub',
    affiliate_url: null,
    score: 8.6,
    total_reviews: 567,
    scores_breakdown: {
      ease_of_use: 8.8,
      output_quality: 8.5,
      value_for_money: 8.5,
      features: 8.6
    },
    trend: 35,
    users: '500K+',
    pricing: {
      model: 'subscription',
      free_tier: false,
      starting_price: 12,
      currency: 'USD'
    },
    features: ['AI voice generation', 'Natural sounding', 'Voice cloning', 'Editing integration', 'Real-time preview']
  },

  // RESEARCH (5 tools)
  {
    id: 'scite',
    name: 'Scite',
    slug: 'scite',
    category: 'research',
    logo: '📚',
    description: 'AI platform for discovering and understanding scientific articles',
    website_url: 'https://scite.ai',
    affiliate_url: null,
    score: 8.8,
    total_reviews: 512,
    scores_breakdown: {
      ease_of_use: 8.7,
      output_quality: 8.9,
      value_for_money: 8.7,
      features: 8.8
    },
    trend: 52,
    users: '100K+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 120,
      currency: 'USD'
    },
    features: ['Citation context', 'Smart citations', 'Research discovery', 'Paper summaries', 'Academic network']
  },
  {
    id: 'elicit',
    name: 'Elicit',
    slug: 'elicit',
    category: 'research',
    logo: '🔬',
    description: 'AI research assistant for literature reviews',
    website_url: 'https://elicit.org',
    affiliate_url: null,
    score: 8.6,
    total_reviews: 345,
    scores_breakdown: {
      ease_of_use: 8.5,
      output_quality: 8.7,
      value_for_money: 8.5,
      features: 8.6
    },
    trend: 41,
    users: '50K+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 0,
      currency: 'USD'
    },
    features: ['Literature search', 'Paper summarization', 'Key findings extraction', 'Research organization', 'CSV export']
  },
  {
    id: 'consensus',
    name: 'Consensus',
    slug: 'consensus',
    category: 'research',
    logo: '🧪',
    description: 'AI-powered research search engine powered by scientific papers',
    website_url: 'https://consensus.app',
    affiliate_url: null,
    score: 8.7,
    total_reviews: 434,
    scores_breakdown: {
      ease_of_use: 8.8,
      output_quality: 8.7,
      value_for_money: 8.6,
      features: 8.7
    },
    trend: 57,
    users: '200K+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 0,
      currency: 'USD'
    },
    features: ['Scientific search', 'Study summaries', 'AI synthesis', 'Citation analysis', 'Trend insights']
  },
  {
    id: 'scholarcy',
    name: 'Scholarcy',
    slug: 'scholarcy',
    category: 'research',
    logo: '📖',
    description: 'AI tool to summarize research papers and documents',
    website_url: 'https://www.scholarcy.com',
    affiliate_url: null,
    score: 8.5,
    total_reviews: 289,
    scores_breakdown: {
      ease_of_use: 8.7,
      output_quality: 8.4,
      value_for_money: 8.4,
      features: 8.5
    },
    trend: 33,
    users: '50K+',
    pricing: {
      model: 'freemium',
      free_tier: true,
      starting_price: 0,
      currency: 'USD'
    },
    features: ['Paper summaries', 'Key points extraction', 'Browser extension', 'Citation export', 'Flashcard generation']
  }
];

export const TRENDING_TOOLS = TOOLS.slice(0, 6);

export const SEARCH_SUGGESTIONS = [
  'Scrivere una canzone',
  'Togliere sfondo',
  'Creare musica',
  'Generare immagini',
  'Video editing',
  'Coding assistant'
];

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
    views: 32000,
    verdict: 'Midjourney for quality, DALL-E for speed'
  },
  {
    id: 'runway-vs-synthesia',
    tool_a: 'Runway',
    tool_b: 'Synthesia',
    views: 28000,
    verdict: 'Runway for editing, Synthesia for avatars'
  },
  {
    id: 'elevenlabs-vs-murf',
    tool_a: 'ElevenLabs',
    tool_b: 'Murf',
    views: 25000,
    verdict: 'ElevenLabs for quality, Murf for simplicity'
  }
];