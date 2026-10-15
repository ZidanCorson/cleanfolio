const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://zidan-the-developer.netlify.app/',
  title: 'ZW.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Zidan Wang',
  role: 'Full Stack Software Developer',
  description:
    'Motivated and versatile professional with experience in software development, data engineering, and language services. Adept at delivering technical solutions and facilitating effective communication across diverse environments. Passionate about continuous learning and contributing to impactful projects. Seeking exciting job opportunities and project collaborations - let\'s connect!',
  resume: 'https://zidan-developer.netlify.app/',
  social: {
    linkedin: 'https://www.linkedin.com/in/zidan-wang-dev/',
    github: 'https://github.com/ZidanCorson/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'IELTS Speaking Coach — AI Speaking Examiner',
    description:
      'Get a higher IELTS speaking band with your own AI examiner. Speak your answer and get instant band scores across all four IELTS criteria (fluency, lexical resource, grammar, pronunciation), see a band-8 rewrite of your own answer, build a personal vocabulary bank, and practise Part 1, 2 and 3 questions with prep timers and full mock tests.',
    stack: ['React', 'TypeScript', 'Vite', 'Express', 'Neon (Postgres)', 'Gemini API'],
    sourceCode: 'https://github.com/ZidanCorson/Ielts-speaking',
    livePreview: 'https://ielts-speaking-bot.vercel.app/',
  },
  {
    name: 'IELTS Listening Pro — Diagnostic Listening Practice',
    description:
      'A free IELTS listening practice platform that goes beyond scoring: every wrong answer is tagged with a reason (spelling, singular/plural, distractor, or pace), then replays only the few seconds that held the missed answer. Includes 3 full mock tests plus 53 question sets built on public-domain VOA Learning English audio, aligned line-by-line via speech recognition, covering all official IELTS question types with official band-score conversion.',
    stack: ['React', 'Vite'],
    sourceCode: 'https://github.com/ZidanCorson/IELTS-Listening',
    livePreview: 'https://ielts-listening-pro.netlify.app/',
  },
  {
    name: 'Talk Therapy — AI-Assisted Mental Health Journaling',
    description:
      'A full-stack journaling app combining mood tracking with AI-powered CBT/ACT reflection sessions. Features an AI wellness companion with rolling memory, mood trend charts, psychoeducation insights, and strong privacy guardrails including encryption and GDPR-compliant data handling.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Gemini API', 'Tailwind CSS'],
    sourceCode: 'https://github.com/ZidanCorson/Talk-therapy',
    livePreview: 'https://cbt-talk-therapy.netlify.app/',
  },
  {
    name: 'Phil Fitness — Personal Trainer Marketing Site',
    description:
      'A marketing site for a Newcastle-based personal trainer, built to convert visitors into free-consultation bookings. Showcases 1-2-1, online, and small-group coaching options, client testimonials, and a direct Instagram/email booking flow, with a bold dark theme and scroll-driven animations.',
    stack: ['React', 'Vite'],
    sourceCode: 'https://github.com/ZidanCorson/PhilFitness',
    livePreview: 'https://phil-fitness.vercel.app/',
  },
  {
    name: 'Baobaby Bao & Coffee Marketing Website - React',
    description:
      'I led the end-to-end development of Baobaby’s marketing website, a vibrant React-based web application built to showcase a local food brand in Gosforth. The project featured a custom gallery, interactive menus, and a seamless user experience, with TypeScript and modular CSS used to support maintainability and scalability. I was responsible for UI design, implementation, deployment, responsive behavior, component architecture, and version control using Git and GitHub.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'OpenAI API'],
    sourceCode: 'https://github.com/ZidanCorson/Baobaby-react',
    livePreview: 'https://baobaby-react.vercel.app/',
  },
  {
    name: 'Angular E-Commerce Frontend',
    description:
      'NgEcommerce is a full-featured e-commerce web application built with Angular (v17+) and Tailwind CSS, featuring a complete user authentication system with login and signup pages, multi-page architecture with product browsing and filtering, and shopping cart management. ',
    stack: ['Angular', 'HTML', 'TypeScript', 'Tailwind CSS',],
    sourceCode: 'https://github.com/ZidanCorson/ng-ecommerce',
    livePreview: 'https://angularecommercefrontend.netlify.app/products/all',
  },
  {
    name: 'Luxury Travel Selector',
    description:
      'Developed to demonstrate modern frontend capabilities, this interactive app features a polished "glassmorphism" UI built with React, TypeScript, and Bootstrap. It integrates the Open-Meteo API for real-time data, utilizes conditional rendering for seamless user flows, and showcases responsive design principles.',
    stack: ['React', 'TypeScript', 'Vite', 'Bootstrap', 'Open-Meteo API'],
    sourceCode: 'https://github.com/ZidanCorson/react-app-travel-selector',
    livePreview: 'https://reacttravelselector.netlify.app/',
  },
  {
    name: 'ETL Data Pipeline Project',
    description:
      'Completed an end-to-end ETL data pipeline project, utilizing Python for data extraction and transformation, SQL for data manipulation, and AWS for cloud-based storage and processing. Gained hands-on experience in cloud data engineering and automated data workflows.',
    stack: ['Python', 'SQL', 'AWS'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'FriendFace Social Media Platform',
    description:
      'Developed a full-stack social media platform called FriendFace. Built the front end using Angular, JavaScript, and Node.js, and implemented the backend with Spring Boot and Java. Utilized MariaDB for database management and used AWS for cloud hosting.',
    stack: ['Angular', 'JavaScript', 'Java', 'Spring Boot', 'MariaDB', 'AWS'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Bank Stock Trading Application',
    description:
      'Developed a full-stack stock trading platform for trading stocks and managing portfolios. Built with Angular for the frontend and Java Spring Boot for the backend, it uses AWS for cloud hosting, DynamoDB for data storage, and Docker for containerization. Implemented CI/CD pipelines.',
    stack: ['Angular', 'JavaScript', 'Java', 'Spring Boot', 'AWS', 'DynamoDB', 'Docker', 'CI/CD'],
    sourceCode: '',
    livePreview: '',
  },
  {
  name: 'Intelligent Document Processing System',
  description:
    'A cloud-based document processing pipeline built with AWS services and Terraform IaC that automates document extraction and analysis. Users upload documents to S3, triggering Lambda functions that process documents through Amazon Textract for OCR, with structured JSON outputs stored in a dedicated S3 bucket for downstream analysis.',
  stack: ['AWS S3', 'AWS Lambda', 'Amazon Textract', 'Terraform', 'Python'],
  sourceCode: '',
  livePreview: 'https://docs.aws.amazon.com/solutions/intelligent-document-processing-on-aws/',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'Node.js',
  'AWS',
  'Terraform',
  'SQL',
  'Git',
  'CI/CD',
  'Java',
  'Python',
  'Docker',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: '1002742215@qq.com',
}

export { header, about, projects, skills, contact }
