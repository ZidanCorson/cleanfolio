const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'ZW.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Zidan Wang',
  role: 'Full Stack Software Developer',
  description:
    'Motivated and versatile professional with experience in software development, data engineering, and language services. Adept at delivering technical solutions and facilitating effective communication across diverse environments. Passionate about continuous learning and contributing to impactful projects.',
  resume: 'https://zidan-the-translator.netlify.app/',
  social: {
    linkedin: 'https://www.linkedin.com/in/zidan-wang-520b5a227/',
    github: 'https://github.com/ZidanCorson/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'ETL Data Pipeline Project',
    description:
      'Completed an end-to-end ETL data pipeline project, utilizing Python for data extraction and transformation, SQL for data manipulation, and AWS for cloud-based storage and processing. Gained hands-on experience in cloud data engineering and automated data workflows.',
    stack: ['Python', 'SQL', 'AWS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'FriendFace Social Media Platform',
    description:
      'Developed a full-stack social media platform called FriendFace. Built the front end using Angular, JavaScript, and Node.js, and implemented the backend with Spring Boot and Java. Utilized MariaDB for database management and deployed the website using AWS static website hosting.',
    stack: ['Angular', 'JavaScript', 'Java', 'Spring Boot', 'MariaDB', 'AWS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Bank Stock Trading Application',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Angular', 'JavaScript', 'Java', 'Spring Boot', 'AWS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
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
