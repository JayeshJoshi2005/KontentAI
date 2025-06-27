export default [
  {
    name: 'Blog Title',
    desc: 'AI tool that generates blog titles based on your niche and outline.',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
    aiPrompt: 'Give me 5 blog topic ideas in bullet points only based on the given niche and outline. Format the output for a rich text editor.',
    slug: 'generate-blog-title',
    form: [
      {
        label: 'Enter your blog niche',
        field: 'input',
        name: 'niche',
        required: true
      },
      {
        label: 'Enter blog outline',
        field: 'textarea',
        name: 'outline'
      }
    ]
  },
  {
    name: 'Blog Content',
    desc: 'Generate engaging blog content based on your topic and outline.',
    category: 'blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
    slug: 'blog-content-generation',
    aiPrompt: 'Generate blog content based on the topic and outline. Format output for a rich text editor.',
    form: [
      {
        label: 'Enter your blog topic',
        field: 'input',
        name: 'topic',
        required: true
      },
      {
        label: 'Enter blog Outline here',
        field: 'textarea',
        name: 'outline'
      }
    ]
  },
  {
    name: 'Blog Topic Ideas',
    desc: 'Generate catchy and relevant blog topic ideas based on your niche.',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
    slug: 'blog-topic-idea',
    aiPrompt: 'Generate the top 5 blog topic ideas in bullet points only (no description), based on the given niche. Output in rich text editor format.',
    form: [
      {
        label: 'Enter your Niche',
        field: 'input',
        name: 'niche',
        required: true
      }
    ]
  },
  {
    name: 'Youtube SEO Title',
    desc: 'Generate SEO-optimized YouTube titles based on keywords and outline.',
    category: 'Youtube Tools',
    icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
    slug: 'youtube-seo-title',
    aiPrompt: 'Generate the best 5 SEO-optimized high-ranking YouTube titles in bullet points based on keywords and outline. Output in HTML tags format.',
    form: [
      {
        label: 'Enter your YouTube video topic keywords',
        field: 'input',
        name: 'keywords',
        required: true
      },
      {
        label: 'Enter YouTube description outline here',
        field: 'textarea',
        name: 'outline'
      }
    ]
  },
  {
    name: 'Youtube Description',
    desc: 'Generate engaging 4–5 line YouTube descriptions with emojis.',
    category: 'Youtube Tool',
    icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
    slug: 'youtube-description',
    aiPrompt: 'Generate a 4–5 line YouTube description with emojis based on the topic and outline. Output in rich text editor format.',
    form: [
      {
        label: 'Enter your blog topic/title',
        field: 'input',
        name: 'topic',
        required: true
      },
      {
        label: 'Enter YouTube outline here',
        field: 'textarea',
        name: 'outline'
      }
    ]
  },
  {
    name: 'Youtube Tags',
    desc: 'Generate high-impact YouTube tags based on your title and content.',
    category: 'Youtube Tool',
    icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
    slug: 'youtube-tag',
    aiPrompt: 'Generate 10 YouTube tags in bullet points based on the title and outline. Output in rich text editor format.',
    form: [
      {
        label: 'Enter your YouTube title',
        field: 'input',
        name: 'title',
        required: true
      },
      {
        label: 'Enter YouTube video outline here (Optional)',
        field: 'textarea',
        name: 'outline'
      }
    ]
  },
  {
    name: 'Rewrite Article (Plagiarism Free)',
    desc: 'Rewrite any content to make it plagiarism-free and undetectable by AI detectors.',
    icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
    category: 'Rewriting Tool',
    slug: 'rewrite-article',
    aiPrompt: 'Rewrite the given article to make it plagiarism-free. Output in rich text editor format.',
    form: [
      {
        label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
        field: 'textarea',
        name: 'article',
        required: true
      }
    ]
  },
  {
    name: 'Text Improver',
    desc: 'Improve your writing by correcting grammar, tone, and clarity.',
    icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
    category: 'Writing Assistant',
    slug: 'text-improver',
    aiPrompt: 'Rewrite the given text professionally without grammar mistakes. Output in rich text editor format.',
    form: [
      {
        label: 'Enter text that you want to re-write or improve',
        field: 'textarea',
        name: 'textToImprove'
      }
    ]
  },
  {
    name: 'Add Emojis to Text',
    desc: 'Enhance your text by adding relevant emojis.',
    icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
    category: 'blog',
    slug: 'add-emoji-to-text',
    aiPrompt: 'Add emojis to the given text based on its content. Output in rich text editor format.',
    form: [
      {
        label: 'Enter your text to add emojis',
        field: 'textarea',
        name: 'outline',
        required: true
      }
    ]
  },
  {
    name: 'Instagram Post Generator',
    desc: 'Create 3 creative Instagram posts based on keywords.',
    icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
    category: 'blog',
    slug: 'instagram-post-generator',
    aiPrompt: 'Generate 3 Instagram posts based on given keywords. Output in rich text editor format.',
    form: [
      {
        label: 'Enter Keywords for your post',
        field: 'input',
        name: 'keywords',
        required: true
      }
    ]
  },
  {
    name: 'Instagram Hash Tag Generator',
    desc: 'Generate 15 Instagram hashtags tailored to your content.',
    icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
    category: 'blog',
    slug: 'instagram-hash-tag-generator',
    aiPrompt: 'Generate 15 Instagram hashtags based on given keywords. Output in rich text editor format.',
    form: [
      {
        label: 'Enter Keywords for your Instagram hashtags',
        field: 'input',
        name: 'keywords',
        required: true
      }
    ]
  },
  {
    name: 'Instagram Post/Reel Idea',
    desc: 'Generate trending Instagram post or reel ideas based on niche.',
    icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
    category: 'instagram',
    slug: 'instagram-post-idea-generator',
    aiPrompt: 'Generate 5–10 trending Instagram post/reel ideas based on the given niche. Output in rich text editor format.',
    form: [
      {
        label: 'Enter Keywords / Niche for your Instagram idea',
        field: 'input',
        name: 'keywords',
        required: true
      }
    ]
  },
  {
    name: 'English Grammar Check',
    desc: 'AI-powered tool to correct grammar mistakes in English text.',
    icon: 'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
    category: 'english',
    slug: 'english-grammer-checker',
    aiPrompt: 'Rewrite the inputText with correct grammar. Output in rich text editor format.',
    form: [
      {
        label: 'Enter text to correct the grammar',
        field: 'input',
        name: 'inputText',
        required: true
      }
    ]
  },
  {
    name: 'Write Code',
    desc: 'AI tool to generate code in any programming language based on your description.',
    icon: 'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
    category: 'Coding',
    slug: 'write-code',
    aiPrompt: 'Write code based on the user’s codeDescription. Output in rich text editor format inside a code block.',
    form: [
      {
        label: 'Enter description of code you want along with Programming Lang',
        field: 'textarea',
        name: 'codeDesscripton',
        required: true
      }
    ]
  },
  {
    name: 'Explain Code',
    desc: 'AI tool to explain code line by line in simple terms.',
    icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
    category: 'Coding',
    slug: 'explain-code',
    aiPrompt: 'Explain the code line by line based on codeDescription. Output in rich text editor format inside a code block.',
    form: [
      {
        label: 'Enter code which you want to understand',
        field: 'textarea',
        name: 'codeDesscripton',
        required: true
      }
    ]
  },
  {
    name: 'Code Bug Detector',
    desc: 'Analyze your code to detect bugs and suggest fixes.',
    icon: 'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
    category: 'code-bug-detector',
    slug: 'code-bug-detector',
    aiPrompt: 'Analyze codeInput to find bugs and provide solutions. Output in rich text editor format inside a code block.',
    form: [
      {
        label: 'Enter code which you want to test for bugs',
        field: 'textarea',
        name: 'codeInput',
        required: true
      }
    ]
  },
  {
    name: 'Tagline Generator',
    desc: 'Craft unique and memorable taglines for your brand or product.',
    icon: 'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
    category: 'Marketing',
    slug: 'tagline-generator',
    aiPrompt: 'Based on productName and outline, generate 5–10 catchy taglines. Output in rich text editor format.',
    form: [
      {
        label: 'Product/Brand Name',
        field: 'input',
        name: 'productName',
        required: true
      },
      {
        label: 'What you are selling / Marketing',
        field: 'textarea',
        name: 'outline',
        required: true
      }
    ]
  },
  {
    name: 'Product Description',
    desc: 'Generate compelling product descriptions optimized for e-commerce.',
    icon: 'https://cdn-icons-png.flaticon.com/128/679/679922.png',
    category: 'Marketing',
    slug: 'product-description',
    aiPrompt: 'Based on productName and description, generate a short product description for e-commerce. Output in rich text editor format.',
    form: [
      {
        label: 'Product Name',
        field: 'input',
        name: 'productName',
        required: true
      },
      {
        label: 'Product Details',
        field: 'textarea',
        name: 'outline',
        required: true
      }
    ]
  }
];
