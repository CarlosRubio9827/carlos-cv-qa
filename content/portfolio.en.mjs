import spanish from './portfolio.mjs';

// Shared identity, links and dates stay aligned with the verified Spanish source.
export default {
  ...spanish,
  locale: 'en',
  title: 'QA Analyst | QA Automation',
  cv: { ...spanish.cv, label: 'Download CV', languageNote: 'CV in Spanish' },
  seo: {
    title: 'Carlos Rubio · QA Analyst | QA Automation',
    description: 'Carlos Alberto Rubio Gallego. Manual QA, Cypress automation, API testing and AI applied to software quality. Experience in Travel Tech and telecommunications.'
  },
  hero: {
    eyebrow: 'QA Analyst | QA Automation',
    headline: ['Quality starts', 'before the', 'first click.'],
    summary: 'I connect requirements, testing and automation to support software quality. Experience in Travel Tech, telecommunications and AI applied to QA.',
    primaryCta: 'Explore my experience', secondaryCta: 'Let’s talk',
    sectors: ['Travel Tech', 'Telecommunications', 'Banking requirements']
  },
  about: {
    heading: 'Understand the business.\nCare for the experience.',
    paragraphs: [
      'I’m Carlos Alberto Rubio Gallego, a QA analyst with a qualification in Information Systems. I have worked on telecommunications and Travel Tech projects and contributed to requirements gathering for the banking sector.',
      'My work connects requirements analysis with test strategy, design and execution. I have led the quality cycle within development teams, working together to identify defects and track findings throughout each sprint.'
    ],
    principles: [
      { label: 'Context before test cases', text: 'Understand requirements and business rules to define what to validate.' },
      { label: 'Quality throughout the sprint', text: 'Support the team from planning through defect tracking.' },
      { label: 'Tools with a purpose', text: 'Apply automation and AI to specific tasks in the testing process.' }
    ]
  },
  experience: spanish.experience.map((job, index) => ({ ...job, ...[
    {
      role: 'QA Analyst - QA Automation', period: 'Dec 2023 — Oct 2026', sector: 'Travel Tech · Loyalty programs',
      summary: 'I led the quality cycle for my assigned development team on Travel Tech projects focused on loyalty programs.',
      responsibilities: ['Designed and executed functional and API tests, validated data in MongoDB and analyzed Fetch requests and WebSocket communications.', 'Developed and maintained automated tests using Cypress and the Page Object Model; logged and tracked defects throughout each sprint.'],
      contributions: ['Created an extension to fill in recurring forms and reduce the time spent executing manual tests.', 'Implemented AI agents connected to Azure through MCP to centralize functional documentation and business rules.']
    },
    {
      role: 'QA Analyst', period: 'Jul 2021 — Aug 2023', sector: 'Telecommunications · Mobile services',
      summary: 'I led quality cycle management for a development team on a telecommunications project covering number portability, package purchases, top-ups and roaming.',
      responsibilities: ['Analyzed requirements, defined scope and prepared the test plan and strategy for each sprint.', 'Designed and executed end-to-end, smoke and regression tests; analyzed results and tracked findings.'],
      contributions: ['Automated the preparation of the resources needed to execute tests.']
    },
    {
      role: 'QA Analyst', period: 'Jun 2020 — Jul 2021', sector: 'Telecommunications · Banking requirements',
      summary: 'I contributed to quality assurance on telecommunications projects, from requirements analysis through test execution and results tracking.',
      responsibilities: ['Defined test scope and strategy; designed and executed functional, end-to-end, smoke and regression scenarios.', 'Analyzed findings and managed tools to log, monitor and track incidents.'],
      contributions: ['Gathered requirements for banking sector projects.']
    }
  ][index] })),
  skills: [
    { number: '01', title: 'Manual QA', icon: 'scan', description: 'From requirements to findings, with traceability.', tools: ['Requirements analysis', 'Planning and strategy', 'Test case design', 'Functional testing', 'End-to-end', 'Smoke and regression', 'Defect management'], example: 'Plans, scenarios and results tracking throughout the quality cycle.' },
    { number: '02', title: 'Automation', icon: 'code', description: 'Tests that evolve with the product.', tools: ['Cypress', 'Page Object Model', 'Selenium WebDriver'], example: 'Developed and maintained Cypress tests using POM in Travel Tech.' },
    { ...spanish.skills[2], title: 'APIs and data', description: 'Validation beyond the interface.', example: 'API testing, data validation and communication analysis.' },
    { ...spanish.skills[3], title: 'Quality management', description: 'Visible findings and continuous tracking.', example: 'Logging, monitoring and tracking defects and incidents during testing.' },
    { number: '05', title: 'Applied AI', icon: 'spark', description: 'Making business knowledge more accessible.', tools: ['AI agents', 'Claude', 'MCP', 'Azure'], example: 'Agents connected to Azure to consult functional documentation and business rules.' },
    { number: '06', title: 'Development and support', icon: 'terminal', description: 'Tools for solving everyday tasks.', tools: ['JavaScript', 'Git', 'GitHub', 'Groovy', 'Frontend development'], example: 'JavaScript development training and a browser extension to support testing.' }
  ],
  cases: [
    { ...spanish.cases[0], category: 'Test automation', title: 'A maintainable base\nfor testing.', problem: 'Validate product features and maintain automated tests as the product evolves.', contribution: 'Developed and maintained Cypress tests organized using the Page Object Model pattern.', benefit: 'Automated tests with a structure that separates page interactions from validation scenarios.' },
    { ...spanish.cases[1], category: 'Tools for QA', title: 'Less repetition.\nMore focus on testing.', problem: 'Repeatedly filling in the same forms during manual test execution.', contribution: 'Created an extension to automate filling in those forms.', benefit: 'Less time spent completing forms during manual testing, as documented in my CV.', tools: ['Form-filling extension', 'Task automation'] },
    { ...spanish.cases[2], category: 'Applied artificial intelligence', title: 'Business rules,\none query away.', problem: 'Make functional documentation and business rules easier for the team to access.', contribution: 'Implemented AI agents connected to Azure through MCP to centralize that knowledge.', benefit: 'Any team member can consult business rules and documentation.', tools: ['AI agents', 'Azure', 'MCP'] }
  ],
  education: { ...spanish.education, degree: 'Technology in Information Systems', qualification: 'Technologist', period: 'Jun 2017 — Jul 2020' },
  courses: spanish.courses.map((course, index) => ({ ...course, ...[
    { title: 'Cypress', type: 'Course', period: 'Jan 2023' },
    { title: 'FullStack Developer with JavaScript', type: 'Learning path', period: 'Oct 2022' },
    { title: 'Professional Git and GitHub Course', type: 'Course', period: 'Jan 2022' },
    { title: 'Front End Developer', type: 'Course', period: 'May 2020' }
  ][index] })),
  certification: { ...spanish.certification, level: 'English B1 · Intermediate' },
  languages: [{ name: 'Spanish', level: 'Native language' }, { name: 'English', level: 'B1 · Intermediate' }],
  contact: { heading: 'Let’s talk\nquality.', description: 'If you’re looking for someone who connects business needs with manual testing, automation and applied AI, let’s talk.', emailLabel: 'Email me', linkedinLabel: 'Connect on LinkedIn' },
  pending: spanish.pending.filter(item => !item.includes('versión en inglés'))
};
