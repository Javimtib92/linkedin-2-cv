const extendedProfile = {
  languages: ["English", "Spanish", "Catalan"],
  skills: [
    "JavaScript",
    "TypeScript",
    "NodeJS",
    "React",
    "NextJS",
    "MongoDB",
    "GraphQL",
    "Express",
    "Terraform",
  ],
  hobbies: [],
  description:
    "Over 9 years of experience in software development specialized in <b>JavaScript</b>. Expert in TypeScript, React, NextJS and NodeJS. Product oriented engineer. Mentor and Tech Lead. Comfortable in the Frontend and the Backend. Knowledge of Terraform and AWS.",
  title: "Senior Full Stack Developer",
  phoneNumber: "+34 629 479 837",
  email: "javier.munoz.tous@gmail.com",
  links: [
    { name: "GitHub", href: "https://github.com/Javimtib92" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/javier-muñoz-tous/",
    },
  ],
};

export default {
  educationHistory: [
    {
      name: "IES Manacor",
      title: "Associate Degree Computer Science",
      description:
        "Develop, implement and maintain web applications, regardless of the model used and using specific technologies, guaranteeing access to data securely and meeting the criteria of accessibility, usability and quality required in the established standards.",
      startDate: 2014,
      endDate: 2016,
    },
    {
      name: "IES Llorenç Garcies I Font",
      title: "Associate Degree Business and Management",
      description: null,
      startDate: 2012,
      endDate: 2014,
    },
  ],
  imageUrl:
    "https://media.licdn.com/dms/image/D4D03AQFbEPfAzBYJNA/profile-displayphoto-shrink_200_200/0/1709458297088?e=2147483647&v=beta&t=fwlHPsEOY8lkXIZP37AlY50OjpjGUz_DbE8vrqcNvSg",
  jobHistory: [
    {
      name: "Self Employed",
      title: "",
      description: null,
      startDate: "2024-01",
      endDate: "2024-03",
    },
    {
      name: "Biogen",
      title: "Tech Lead/ Senior Full Stack Engineer",
      description:
        "Full-Stack developer and tech lead of a multi-language and multi-country platform for healthcare professionals.<br><br>I worked on various features such as:<br>- Content management flow (Contentful APIs and tools, GitLab CI/CD, Next.js)<br>- Virtual event streaming (Zoom API, Brightcove CDN)<br>- Custom registration and validation processes (Akamai Identity Cloud, GraphQL, DynamoDB)<br>- Automatic deployments to AWS (Terraform, AWS, GitLab CI/CD)<br>- UI component library (React, TypeScript, styled-components, Storybook)<br>- URLs and content localization (Next.js, Lokalise).<br><br>Achievements:<br>- Reduced EC2 costs more than 80% by running all countries in a single EC2 instance per environment instead of one instance per country per environment.<br>- Create a tool for automating the PRC (which is a Pharma term for content validation) by generating PDF's of a set of URLs navigating through the content and taking screenshots of all the dynamic elements on the page.<br>- Rebuilt our CI/CD workflow and environments to reduce build time. Move to single artifact deployments.",
      startDate: "2021-03",
      endDate: "2023-12",
    },
    {
      name: "2am. technologies",
      title: "Frontend Tech lead",
      description:
        "Frontend Tech Lead and Senior Engineer. Worked on a released and profitable Content Collaboration tool built with React following DDD principles. Designed a Chat Application for a client. Built a PDF annotation tool.<br><br>Main used technologies were Vue.js and React",
      startDate: "2017-12",
      endDate: "2021-03",
    },
    {
      name: "Air Europa",
      title: "Senior Full Stack Engineer",
      description:
        "As part of the maintenance team of Air Europa website I participated in the entire rebuild of legacy to new site using Vue.js. I also worked on the maintenance of the backend build with Java.",
      startDate: "2017-09",
      endDate: "2017-12",
    },
    {
      name: "Brujula Tecnologías de la Información S.A",
      title: "Full Stack Developer (eDreams)",
      description:
        "As a Developer in Brújula Tecnologías de la Información I worked for a big multinational online traveling agency. I developed my skills on the Backend using Java and worked on the Frontend with JavaScript. It was my first time working with a very big team and methodologies like Kanban.<br><br>I was part of the team that delivered the MVP of the eDreams Prime subscription. Now this subscription has 5 million users.",
      startDate: "2016-05",
      endDate: "2017-09",
    },
    {
      name: "Soluciones Corporativas IP (SCIP)",
      title: "Backend Software Developer",
      description:
        "Worked on an email parser and SPAM filter built with PHP. Intensive use of Regular Expressions.",
      startDate: "2016-04",
      endDate: "2016-05",
    },
    {
      name: "2am. technologies",
      title: "Junior Software Developer",
      description:
        "Internship with 2am I built and released two hybrid mobile applications using ionic.js and Cordova. Also worked on a social media application.<br><br>Used mainly AngularJS, gulp, grunt, ionic framework, CSS preprocessors like SASS or LESS.<br><br>By the end of the internship I was managing small projects on my own from the definition of the requirements to execution and deployment.",
      startDate: "2015-05",
      endDate: "2016-05",
    },
  ],
  location: "Capdepera, Balearic Islands, Spain",
  name: "Javier Muñoz Tous",
  ...extendedProfile,
} as const;
