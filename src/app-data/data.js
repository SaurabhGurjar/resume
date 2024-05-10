import { v4 as uuidv4 } from "uuid";

export class Skills {
  constructor(type, skills) {
    this.id = uuidv4();
    this.type = type;
    this.skills = skills;
  }
}
export class Role {
  constructor(position, workdone, started, ended = "Ongoing") {
    this.id = uuidv4();
    this.position = position;
    this.started = started;
    this.ended = ended;
    this.workdone = workdone;
  }
}

export class Experience {
  constructor(name, description, address, position, workdone, started, ended) {
    this.id = uuidv4();
    this.company = name;
    this.description = description || "";
    this.address = address;
    this.role = [new Role(position, workdone, started, ended)];
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
  constructor(name, provider, completedIn) {
    this.id = uuidv4();
    this.name = name;
    this.provider = provider;
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
const nsllclbaWorkdone = [
  "Create new strategies to manage $2 million of accounts at risk, resulting in an increase of 4% in revenue in 6 months.",
  "Led the effort to deploy an automated time & expense reporting system for more than 90 onsite and offsite personnel across 3 locations.",
  "Oversaw the budget and schedule of a project to recruit, hire, and train 150 new employees at five new locations.",
];
const nsllc = new Experience(
  "Network Solutions LLC",
  "",
  "Dallas, TX",
  "Lead Business Analyst & Project Manager",
  nsllclbaWorkdone,
  "2019"
);

const nsllcsbaWorkdone = [
  "Through an improved pricing model, increased gross revenue of 15% in 2018 compared to 2017 with no change to fixed costs.",
  "Reduced warehouse processing time by 30% in just 3 months while industry norm in 10 months",
  "Achieved project milestones and deliverable with an internal and external team of 10+ analysts.",
];

nsllc.role.push(
  new Role("Senior Business Analyst", nsllcsbaWorkdone, "2017", "2019")
);

const lauzonWorkdone = [
  "Prepared 2016 Budget with Variance analysis to prior years.",
  "Assisted merger in advanced electronic space, identifying synergy opportunities of $60 M",
  "Reduced IPS (Customer Issues) by 2.2% while impacting merely 3% of GMV.",
  "Designed and maintained 10+ date integration jobs.",
];
const lauzon = new Experience(
  "Lauzon",
  "Lauzon is a 30-year-old limited company in the printing and packaging field with over 150 employees.",
  "Dallas, TX",
  "Business Analyst",
  lauzonWorkdone,
  "2013",
  "2016"
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
  summary: `Accomplished and detail-oriented Lead Business 
  Analyst with over 8 years of experience in driving business 
  requirements, process improvement, and strategic initiatives. 
  Proven ability to lead cross-functional teams, analyze complex 
  business processes, and implement innovative solutions that 
  optimize operational efficiency. Adept at stakeholder management, 
  project coordination, and delivering impactful insights to executive 
  leadership. Strong communication and problem-solving skills with a 
  track record of successfully delivering high-impact projects.`,
  allSkills: [businessSkills, technicalSkills],
  experience: [nsllc, lauzon],
  education: [edu1, edu2],
  certificates: [certif1, certif2, certif3],
  hobbies: [hobby1, hobby2, hobby3],
};
