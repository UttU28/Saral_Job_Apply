import { ButtonGroup } from "../types/button";

export const buttonGroups: ButtonGroup[] = [
    {
        id: "personalInfo",
        buttons: [
            {
                id: "firstName",
                text: "First Name",
                value: "Utsav",
            },
            {
                id: "lastName",
                text: "Last Name",
                value: "Chaudhary",
            },
            {
                id: "fullName",
                text: "Full Name",
                value: "Utsav Chaudhary",
            },
            {
                id: "phone",
                text: "Phone",
                value: "9876543210",
            },
            {
                id: "email",
                text: "Email",
                value: "email@gmail.com",
            },
            {
                id: "linkedin",
                text: "LinkedIn",
                value: "https://www.linkedin.com/in/utsavmaan28",
            },
            {
                id: "portfolio",
                text: "Portfolio",
                value: "https://thatinsaneguy28.netlify.app/",
            },
            {
                id: "github",
                text: "GitHub",
                value: "https://github.com/UttU28/",
            },
        ],
    },
    {
        id: "address",
        buttons: [
            {
                id: "addressLine1",
                text: "Address Line 1",
                value: "Shaitan Galli",
            },
            {
                id: "city",
                text: "City",
                value: "Khatra Mehal",
            },
            {
                id: "state",
                text: "State",
                value: "Shamshan K Saamne",
            },
            {
                id: "country",
                text: "Country",
                value: "United States",
            },
            {
                id: "zipCode",
                text: "Zip Code",
                value: "123456",
            },
        ],
    },
    {
        id: "credentials",
        buttons: [
            {
                id: "email",
                text: "Email",
                value: "email@gmail.com",
            },
            {
                id: "password",
                text: "Password",
                value: "YourPasswordHere",
            },
        ],
    },
    {
        id: "company1",
        buttons: [
            {
                id: "startDate1",
                text: "Start Date",
                value: "02/2024",
            },
            {
                id: "endDate1",
                text: "End Date",
                value: "Present",
            },
            {
                id: "companyName1",
                text: "Company Name",
                value: "Long Company Name Pvt. Ltd.",
            },
            {
                id: "jobTitle1",
                text: "Job Title",
                value: "Software Engineer",
            },
            {
                id: "description1",
                text: "Description",
                value: `• Assisted in fine-tuning Llama 3.2 model on Azure Kubernetes Service (AKS) for scalable, low-latency inference. Built secure RESTful API endpoints with FastAPI, utilizing Azure API Management for auth, rate-limiting, and scalability.\n
• Developed an interactive analytics dashboard, using React.js and D3.js, featuring advanced visual analytics and RBAC through Azure Active Directory and Azure DevOps for seamless deployment and updates.\n
• Developed official company website using Next.js. Implemented dynamic CMS with RBAC for admin functionalities & updates. Configured SMTP with Azure Communication Services & utilized Azure App Service for hosting.\n
• Implemented a user profile dashboard by integrating Fireblocks SDK & Metamask, enabling on-chain ID creation to streamline user interactions with blockchain assets. Deployed secure and scalable APIs using Azure Functions.`,
            },
        ],
    },
    {
        id: "company2",
        buttons: [
            {
                id: "startDate2",
                text: "Start Date",
                value: "06/2021",
            },
            {
                id: "endDate2",
                text: "End Date",
                value: "08/2022",
            },
            {
                id: "companyName2",
                text: "Company Name",
                value: "Another Very Long Company Name Pvt. Ltd.",
            },
            {
                id: "jobTitle2",
                text: "Job Title",
                value: "Python Web Developer I",
            },
            {
                id: "description2",
                text: "Description",
                value: `• Developed an in-house data scraping application using Python, Selenium, RestAPI, and Beautiful Soup, building a data pipeline and leveraging Azure Cloud for data storage, analysis, and marketing automation.\n
• Used NLTK and spaCy for NLP tasks, including text preprocessing & classifying data, improving accuracy & efficiency.\n
• Developed a data dashboard using the Django framework in Python, integrating dynamic data updates from CosmosDB. Utilized D3.js and Chart.js to create interactive and live charts and graphs based on filters.\n
• Tested and implemented data filtering techniques in Python utilizing NumPy & Pandas for cleaning & preprocessing data.`,
            },
        ],
    },
    {
        id: "coverletter",
        buttons: [
            {
                id: "coverLetterText",
                text: "Cover Letter",
                value: `I hope this letter finds you caffeinated and ready for a laugh because I’m about to pitch myself as the next great addition to your team, one poorly worded pun at a time.
When I stumbled across the job posting for [Position Title], I knew it was fate—or at least a well-placed internet algorithm. My qualifications may seem standard: I have [X years] of experience in [Industry], a [Degree/Certification], and a knack for [Skill]. But here’s where it gets exciting: I also once assembled IKEA furniture without swearing, managed to keep a plant alive for over a year, and consistently beat my coworkers in office trivia (especially the "90s sitcoms" category).
At my last job, I spearheaded initiatives that saved the company time, money, and a lot of awkward "who forgot to file this" meetings. In short, I’m the human equivalent of Ctrl+Z—always ready to undo disasters and find a solution.
I’m particularly drawn to this position because of [Company Value or Specific Job Detail]. Plus, your office has a snack bar, right? (If not, I’m great at bringing donuts to win people over.)
Enclosed is my résumé, which includes more serious-sounding accomplishments. I’d love to chat further about how I can bring my talents—and possibly a fruit basket—to your team.
Thank you for considering my application. I look forward to hearing from you, preferably via email, phone, or carrier pigeon.`
            }
        ]
    },
    {
        id: "university1",
        buttons: [
            {
                id: "universityName",
                text: "University Name",
                value: "SUNY Binghamton",
            },
            {
                id: "major",
                text: "Major",
                value: "Computer Science",
            },
            {
                id: "degree",
                text: "Degree",
                value: "Master of Science",
            },
            {
                id: "gradDate",
                text: "Graduation Date",
                value: "Dec 2023",
            },
            {
                id: "gpa",
                text: "GPA",
                value: "3.44",
            },
        ],
    },
];
