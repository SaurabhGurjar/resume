import { v4 as uuidv4 } from "uuid";

export class Skills {
  constructor(type, skills) {
    this.id = uuidv4();
    this.type = type;
    this.skills = skills;
  }
}

export class Education {
  constructor(institute, address, course, started, ended) {
    this.id = uuidv4();
    this.institute = institute;
    this.address = address;
    this.course = course;
    this.started = started;
    this.ended = ended;
  }
}

export class Certificate {
  constructor(course, institute, completedIn) {
    this.id = uuidv4();
    this.course = course;
    this.institute = institute;
    this.completedIn = completedIn;
  }
}

export class Hobby {
  constructor(title, description) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
  }
}

const businessSkills = new Skills("Business", [
  "Budgeting",
  "Financial Analysis",
  "Project Management",
  "Stakeholder Management",
  "Business Strategy",
]);

const technicalSkills = new Skills("Technology", [
  "Excel",
  "VBA",
  "SQL",
  "QuickBooks",
  "Power BI",
  "Tableau",
  "Python",
]);

const edu1 = new Education(
  "University of Wisconsin",
  "Wisconsin",
  "M.Sc. in Finance",
  "2012",
  "2013"
);

const edu2 = new Education(
  "BBA: Business, Supply Chain Management",
  "Wisconsin",
  "M.Sc. in Finance",
  "2008",
  "2012"
);

const hobby1 = new Hobby(
  "Giving back to my community",
  "With my two kids, I spend at least on day each month volunteering."
);

const hobby2 = new Hobby(
  "Horse-riding & spending time in nature",
  "Recharging during the weekend is vital for leading a high-performing team."
);

const hobby3 = new Hobby(
  "Developing my team into star analysts",
  "Not only is it very satisfying, but it is also the hightest value-add of any leader."
);

const certif1 = new Certificate(
  "PMI Professional in Business Analysis (PBA)",
  "PMI",
  "2019"
);

const certif2 = new Certificate(
  "Certified Associate in Project Management (CAPM)",
  "PMI",
  "2018"
);

const certif3 = new Certificate(
  "High-Dimensional Data Analysis",
  "Havard",
  "2017"
);

export const data = {
  personalInfo: {
    firstName: "jonathan",
    lastName: "wright",
    role: "lead business analyst",
    email: "name@gmail.com",
    phoneNumber: "+1-921-389-0182",
    address: "dallas, tx",
    socialLinks: [
      {
        name: "linkedIn",
        link: "linkedin.com/in/jonwrightjr",
      },
    ],
  },
  summary: `lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Perspiciatis cum officia porro consequuntur consequatur? Vero ipsa exercitationem 
    ab veniam commodi explicabo nam, quos animi, illo laborum ex nisi voluptatibus odio!`,
  allSkills: [businessSkills, technicalSkills],
  education: [edu1, edu2],
  certificates: [certif1, certif2, certif3],
  hobbies: [hobby1, hobby2, hobby3],
};

export const certificatesData = [
  {
    course: "PMI Professional in Business Analysis (PBA)",
    institute: "PMI",
    completedIn: "2019",
  },
  {
    course: "Certified Associate in Project Management (CAPM)",
    institute: "PMI",
    completedIn: "2018",
  },
  {
    course: "High-Dimensional Data Analysis",
    institute: "Havard",
    completedIn: "2017",
  },
];

export const educationData = [
  {
    school: "University of Wisconsin",
    course: "M.Sc. in Finance",
    address: "Wisconsin",
    started: "2012",
    ended: "2013",
  },
  {
    school: "University of Wisconsin",
    course: "BBA: Business, Supply Chain Management",
    address: "Wisconsin",
    started: "2008",
    ended: "2012",
  },
];

export const hobbyData = [
  {
    title: "Giving back to my community",
    description:
      "With my two kids, I spend at least on day each month volunteering.",
  },
  {
    title: "Horse-riding & spending time in nature",
    description:
      "Recharging during the weekend is vital for leading a high-performing team.",
  },
  {
    title: "Developing my team into star analysts",
    description:
      "Not only is it very satisfying, but it is also the hightest value-add of any leader.",
  },
];
export const work = [
  {
    company: "Network Solutions LLC",
    description: "",
    address: "Dallas, TX",
    role: [
      {
        position: "Lead Business Analyst & Project Manager",
        started: "2019",
        ended: "Ongoing",
        workdone: [
          "Create new strategies to manage $2 million of accounts at risk, resulting in an increase of 4% in revenue in 6 months.",
          "Led the effort to deloy an automated time & expense reporting system for more than 90 onsite and offsite personnel across 3 locations.",
          "Oversaw the budget and schedule of a project to recruit, hire, and train 150 new employees at five new locations.",
        ],
      },
      {
        position: "Senior Business Analyst",
        started: "2017",
        ended: "2019",
        workdone: [
          "Through an improved pricing model, increased gross revenue of 15% in 2018 compared to 2017 with no change to fixed costs.",
          "Reduced warehouse processing time by 30% in just 3 months while industry norm in 10 months",
          "Achieved project milestones and deliverable with an internal and external team of 10+ analysts.",
        ],
      },
    ],
  },

  {
    company: "Lauzon",
    description:
      "Lauzon is a 30-year-old limited company in the printing and packaging field with over 150 employees.",
    address: "Dallas, TX",
    role: [
      {
        position: "Business Analyst",
        started: "2013",
        ended: "2016",
        workdone: [
          "Prepared 2016 Budget with Variance analysis to prior years.",
          "Assisted merger in advanced electronic space, identifying synergy opportunities of $60 M",
          "Reduced IPS (Customer Issues) by 2.2% while impacting merely 3% of GMV.",
          "Designed and maintained 10+ date integration jobs.",
        ],
      },
    ],
  },
];


