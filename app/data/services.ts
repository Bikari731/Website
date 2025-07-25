import { ContentBlock, ContentHeading, ContentHeadingWithList, FAQ, Service, ServiceType, SubServiceDetail } from "../interface/service";

//AMER SERVICES SUBSERVICES
const GoldenVisa:SubServiceDetail = {
        slug: "golden-visa",
        title: "Golden Visa",
        logo: "/serivces/golden-visa.webp",
        image: "/services/images/golden-visa.webp",
        summary: "Get a 10-year UAE residency with dedicated support for professionals, investors, and families.",
        heroText: "Secure your future in the UAE with the prestigious 10-year Golden Visa. We streamline the process for eligible individuals and businesses.",
        description: "The UAE Golden Visa is a prestigious, long-term residency program introduced by the UAE government to attract skilled professionals, investors, entrepreneurs, and their families. This visa offers individuals and their dependents a renewable 10-year residency without the need for a local sponsor, enabling them to live, work, and thrive in the UAE.",
        serviceTypes: [
          {
            type: "Investor",
            description: "Individuals who make significant financial contributions, either by purchasing real estate worth at least AED 2 million or investing at least AED 2 million in accredited public investment funds or companies with substantial capital. This category aims to attract capital and foster economic growth."
          },
          {
            type: "Professional",
            description: "Highly qualified individuals with a minimum bachelor's degree and significant professional experience, typically earning a substantial monthly salary (e.g., AED 30,000-50,000) in vital sectors like healthcare, engineering, IT, and education. Recent expansions include specific roles like nurses, teachers, content creators, and e-sports professionals."
          },
          {
            type: "Family",
            description: "The UAE Golden Visa offers a significant benefit by allowing the primary visa holder to sponsor their family members, ensuring long-term stability and family reunification in the UAE. This comprehensive family sponsorship includes spouses, children, and parents, with flexible conditions regarding age and marital status for dependents."
          },
          {
            type: "Entrepreneur",
            description: "Founders or owners of innovative, high-potential economic projects, typically startups, which demonstrate significant value (e.g., project value of AED 500,000 or annual revenue of AED 1 million for SMEs). Eligibility may also extend to founders of previously sold entrepreneurial projects valued over AED 7 million."
          },
        ] as ServiceType[],
        content: [
          {
            heading: "Key Benefits:",
            list: [
              { text: "10-Year Renewable UAE Residency", description: "1Enjoy long-term stability and peace of mind with a 10-year residency visa, which is easily renewable. This eliminates the need for frequent renewals associated with standard residency visas and offers greater freedom to live, work, and thrive in the UAE." },
              { text: "No Local Sponsor Required", description: "Unlike traditional UAE visas that require a local sponsor or employer, the Golden Visa is self-sponsored. You have complete independence and the flexibility to work with any employer or start your own venture without needing external sponsorship." },
              { text: "Eligible to Sponsor Family Members", description: "As a Golden Visa holder, you can sponsor your spouse, children (regardless of age), and domestic helpers, ensuring your entire family can reside in the UAE under your sponsorship. This provides family security, access to education, and healthcare." },
              { text: "Pathway to Secure High-Level Positions in the UAE", description: "Holding a Professional Golden Visa demonstrates your expertise and commitment, making you a top candidate for leadership roles and senior positions. Government and private sectors in the UAE actively seek Golden Visa professionals in key industries like technology, healthcare, and education." }
            ]
          } as ContentHeadingWithList,
          {
            heading: "Investor Golden Visa",
            paragraph: "The Investor Golden Visa is designed for individuals who make significant financial investments in the UAE through real estate, business partnerships, or capital investments. This visa provides long-term residency and allows investors to grow their wealth while contributing to the nation’s economy."
          } as ContentHeading,
          {
            heading: "Eligibility Highlights – Investor Golden Visa",
            list: [
              { text: "Real Estate Investment:", description: "You must invest in a property or multiple properties in the UAE with a total value of AED 2 million or more. The property must be retained for at least two years, and off-plan or mortgage-based options may be accepted under certain conditions." },
              { text: "Public Investment or Business Investment:", description: "An investment of AED 2 million or more in a UAE-based company, investment fund, or shares also qualifies. Documentation such as trade licenses, MOA, or capital investment proof is required." },
              { text: "Ownership and Retention Period:", description: "The assets or shares must be fully owned and held for a minimum of two years to maintain Golden Visa eligibility." },
            ]
          } as ContentHeadingWithList,
          {
            heading: "Professional Golden Visa",
            paragraph: "The Professional Golden Visa offers a 10-year residency to highly qualified individuals who contribute to the UAE’s knowledge-based economy. Applicants must hold advanced degrees, have specialized experience, and often require a valid employment contract in a priority sector like healthcare, science, or technology."
          } as ContentHeading,
          {
            heading: "Eligibility Highlights – Professional Golden Visa",
            list: [
              { text: " Valid Employment in the UAE:", description: "You must be currently employed in the UAE in a priority sector such as medicine, IT, engineering, science, education, or law. The position must align with UAE’s strategic vision for innovation and development." },
              { text: " Minimum Education: Bachelor’s or Master’s Degree:", description: "Applicants should hold at least a Bachelor’s degree in their field of expertise. Some professions may require Master’s degrees or equivalent certifications, especially in technical or scientific disciplines." },
              { text: "Minimum Monthly Salary (Usually AED 30,000 or More):", description: "To qualify, you typically need to earn a minimum monthly salary of AED 30,000. In some cases, a lower threshold (e.g., AED 20,000) may be accepted based on sector and credentials. Official salary slips or contracts from a UAE-based employer are required." },
            ]
          } as ContentHeadingWithList,
          {
            heading: "Family Golden Visa",
            paragraph: "The Family Golden Visa allows Golden Visa holders to sponsor their immediate family members — including spouse, children of any age, and domestic helpers — ensuring long-term residency and security for the entire household in the UAE."
          } as ContentHeading,
          {
            heading: "Eligibility Highlights – Family Golden Visa",
            list: [
              { text: "Golden Visa Sponsorship:", description: "You must be a current Golden Visa holder (professional, investor, or entrepreneur) to be eligible to sponsor your family members under the Family Golden Visa." },
              { text: "No Age Limit for Children:", description: "Unlike standard family visas, the Golden Visa allows you to sponsor your children regardless of their age, ensuring continuous support for dependents in education or early careers." },
              { text: "Required Documents for Sponsorship:", description: "You’ll need to submit valid documents such as marriage certificates, birth certificates, Emirates ID of the main sponsor, and proof of income or accommodation." },
            ]
          } as ContentHeadingWithList,
          {
            heading: "Entrepreneur Golden Visa",
            paragraph: "The Entrepreneur Golden Visa supports business owners, startup founders, and innovators who have launched or plan to launch successful ventures in the UAE. It offers a 5 or 10-year residency and promotes innovation and economic development through entrepreneurship."
          } as ContentHeading,
          {
            heading: "Eligibility Highlights – Entrepreneur Golden Visa",
            list: [
              { text: "Ownership of a Registered Startup:", description: "You must be a founder or partner in a UAE-registered startup or small business in an approved sector, such as tech, sustainability, or education. The business must be registered with a valid trade license." },
              { text: "Minimum Capital Requirement:", description: "The business should have a minimum capital valuation of AED 500,000 or more. In some cases, alternative criteria such as annual revenue or external funding may be considered." },
              { text: "Business Incubator or Government Approval:", description: "A letter of approval from a UAE-certified incubator or government entity supporting innovation or SMEs is typically required to validate your eligibility." },
            ]
          } as ContentHeadingWithList,
          {
            heading: "Documents Required for UAE Golden Visa",
            list: [
              { 
                text: "Passport Copy:", 
                description: "A clear and full-color scanned copy of the applicant’s valid passport. The passport must have at least six months of remaining validity at the time of application to meet UAE immigration requirements." 
              },
              { 
                text: "Recent Passport-Sized Photograph:", 
                description: "A recent photograph with a white background, in color, showing a full front view of the applicant’s face. The photo should follow UAE visa photo size standards." 
              },
              { 
                text: "Valid Emirates ID (if applicable):", 
                description: "For applicants already residing in the UAE, a copy of the current Emirates ID is required. It serves as proof of legal residency and identity within the UAE." 
              },
              { 
                text: "Educational Certificates:", 
                description: "Attested academic degrees such as Bachelor's or Master’s certificates from a recognized university. These documents must be attested by the issuing country’s authorities and the UAE Ministry of Foreign Affairs (MOFA)." 
              },
              { 
                text: "Employment/Salary Certificate or Labor Contract:", 
                description: "For professionals, an official salary certificate or labor contract issued by a UAE-based employer confirming job role, monthly salary, and employment duration is necessary to prove eligibility." 
              },
              { 
                text: "Business License or Investment Proof:", 
                description: "For investors and entrepreneurs, documents such as a valid trade license, commercial registration, Memorandum of Association (MOA), or real estate title deeds are required to prove business ownership or investment value." 
              },
              { 
                text: "Medical Fitness Certificate:", 
                description: "A health certificate issued by a UAE government-approved medical center confirming the applicant is free from communicable diseases like HIV or tuberculosis. It must be recent, usually within the last 90 days." 
              },
              { 
                text: "Police Clearance Certificate:", 
                description: "A certificate of good conduct issued either by the UAE Police (for residents) or from the applicant’s home country (for new applicants), verifying the absence of any criminal record." 
              },
              { 
                text: "Family Sponsorship Documents:", 
                description: "For family visa applications, supporting documents include attested marriage certificates (for spouses), birth certificates (for children), and proof of accommodation such as a tenancy contract or Ejari registered under the applicant's name." 
              },
            ]
          } as ContentHeadingWithList,

          {
            heading: "Processing Time",
            paragraph: "The Golden Visa application typically takes between 2-4 weeks depending on eligibility verification and documentation completeness."
          } as ContentHeading,
          {
            heading: "Who Should Apply for the Golden Visa",
            paragraph: "The UAE Golden Visa is tailored for individuals who make significant contributions to the country's development. It is ideal for skilled professionals, real estate and business investors, startup founders, and families seeking long-term residency. Whether you're a doctor, engineer, entrepreneur, or content creator, this visa offers a pathway to stability and growth in the UAE."
          } as ContentHeading,
          {
            heading: "How to Apply for a UAE Golden Visa",
            list: [
              { text: "Step 1 – Initial Eligibility Check:", description: "Evaluate your qualifications, occupation, or investment to ensure you meet the UAE’s Golden Visa requirements for your specific category (professional, investor, entrepreneur, or family)." },
              { text: "Step 2 – Document Preparation:", description: "Gather and attest all necessary documents including passports, certificates, business licenses, or real estate proof. Ensure they meet MOFA and other UAE standards." },
              { text: "Step 3 – Submit Application Online:", description: "Apply through the UAE's official portals like ICP or GDRFA depending on your location (mainland or Dubai). Upload documents and pay the relevant application fee." },
              { text: "Step 4 – Undergo Medical & Security Checks:", description: "Attend a medical fitness test and apply for a police clearance certificate. Both are mandatory to complete the application process." },
              { text: "Step 5 – Receive Approval & Visa Issuance:", description: "Once approved, your visa is stamped or issued electronically. You’ll also receive a 10-year Emirates ID and the option to sponsor dependents." }
            ]
          } as ContentHeadingWithList,
          {
            heading: "Why Choose Us for Your Golden Visa Application",
            list: [
              { text: "Expert Advisory Team:", description: "Our experienced consultants ensure accurate eligibility evaluation and personalized support tailored to your profile." },
              { text: "Complete End-to-End Assistance:", description: "We handle the entire process, from document collection and attestation to visa issuance, so you don’t have to worry about paperwork or delays." },
              { text: "Fast-Track Processing:", description: "Our partnerships with licensed PROs and government portals allow us to expedite your application and reduce processing times." },
              { text: "Transparent Pricing:", description: "No hidden charges — just clear, competitive pricing for all services provided." },
              { text: "High Success Rate:", description: "We’ve helped numerous clients across various sectors successfully secure their Golden Visas and relocate with confidence." }
            ]
          } as ContentHeadingWithList,
          {
            heading: "Golden Visa Fees & Processing Time",
            list: [
              { text: "Application Fees:", description: "Visa application costs vary by emirate and category, but generally range between AED 2,800 and AED 4,500. Additional service charges may apply depending on your case." },
              { text: "Medical Test & Emirates ID:", description: "You’ll need to undergo a medical test (approx. AED 300–500) and apply for a 10-year Emirates ID (AED 1,000+ depending on region)." },
              { text: "Document Attestation Costs:", description: "If you’re submitting degrees or business documents, MOFA and consulate attestation charges may apply, typically ranging from AED 150 to AED 500 per document." },
              { text: "Total Estimated Cost:", description: "The full process may cost between AED 5,000 and AED 10,000 depending on your category and services required." },
              { text: "Processing Time:", description: "Visa issuance typically takes 2 to 4 weeks once all documents are submitted and verified." }
            ]
          } as ContentHeadingWithList,
        ] as ContentBlock[],
        faqs: [
          {
            question: "What is the UAE Golden Visa?",
            answer: "The UAE Golden Visa is a long-term residency visa (typically 10 years) granted to eligible individuals such as professionals, investors, entrepreneurs, and their families. It allows the holder to live, work, and study in the UAE without the need for a local sponsor."
          },
          {
            question: "Who is eligible for the Golden Visa?",
            answer: "Eligibility varies by category. Professionals with advanced qualifications, investors with a minimum AED 2 million investment, startup founders, and family members of Golden Visa holders may all qualify based on specific requirements."
          },
          {
            question: "Can I sponsor my family under the Golden Visa?",
            answer: "Yes, Golden Visa holders can sponsor their spouse, children (regardless of age), and domestic workers. Family visas are valid for the same duration and are renewable along with the main holder’s visa."
          },
          {
            question: "Do I need to stay in the UAE continuously to maintain the Golden Visa?",
            answer: "No. Unlike standard residency visas, Golden Visa holders can stay outside the UAE for more than six consecutive months without the visa being canceled."
          },
          {
            question: "How long does it take to get the Golden Visa approved?",
            answer: "The processing time typically ranges from 2 to 4 weeks, depending on the applicant’s profile, the accuracy of submitted documents, and the relevant authorities’ review process."
          }
        ] as FAQ[]
      }

const FamilyVisa:SubServiceDetail = {
        slug: "family-visa",
        title: "Family Visa",
        logo: "/services/family-visa.webp",
        image: "/services/images/family-visa.webp",
        summary: "Reunite and live together in the UAE with our Family Visa services—streamlined, secure, and reliable.",
        heroText: "Bring your loved ones closer in the UAE. Our expert guidance ensures a smooth, stress-free Family Visa application.",
        description: "The UAE Family Visa enables eligible residents to sponsor their close family members—spouse, children, and in some cases, parents—ensuring long-term residency, stability, and access to education, healthcare, and banking services in the UAE.",
        serviceTypes: [
          {
            type: "New",
            description: "Apply for a fresh Family Visa for your spouse, children, or parents. Ideal for first-time sponsorship applications."
          },
          {
            type: "Renew",
            description: "Renew your family’s existing residency visas seamlessly before expiration to maintain uninterrupted legal status."
          },
          {
            type: "Cancel",
            description: "Process visa cancellations for dependents due to exit, job changes, or family relocation, ensuring compliance with immigration rules."
          },
          {
            type: "Extension",
            description: "Extend an existing family visa under special conditions such as medical treatment, education, or pending renewals."
          }
        ] as ServiceType[],
        content: [
          {
            heading: "Key Benefits of the Family Visa",
            list: [
              { text: "Long-Term Residency for Dependents", description: "Grant your family a 2‑ or 3‑year residency visa—renewable—aligned with your own visa term." },
              { text: "Access to Education & Healthcare", description: "Family members receive full access to UAE schools, health facilities, and public services just like residents." },
              { text: "Visa Renewal Alignment", description: "Family visas can be renewed simultaneously with the sponsor’s residency, reducing paperwork and ensuring consistency." },
              { text: "Comfort & Stability", description: "Live together under one roof for financial and emotional support, resulting in greater well‑being and cohesion." }
            ]
          } as ContentHeadingWithList,
          {
            heading: "Available Family Visa Services",
            list: [
              {
                text: "Spouse & Children",
                description: "Sponsorship of a legal spouse and children under 18, or older if they’re still studying and financially dependent on the sponsor."
              },
              {
                text: "Parents",
                description: "Sponsor your mother and father by meeting specific financial and housing criteria defined by UAE immigration authorities."
              },
              {
                text: "Extended Family (Conditional)",
                description: "In select situations, sponsorship of siblings, stepchildren, or dependents with medical needs may be allowed with proper documentation and government approval."
              }
            ]
          } as ContentHeadingWithList,
          {
            heading: "Eligibility Requirements – Family Visa",
            list: [
              { text: "Sponsor’s Residency Status", description: "The sponsor must hold a valid UAE residency visa, with sufficient remaining validity." },
              { text: "Minimum Salary Threshold", description: "Sponsors typically must earn at least AED 4,000–10,000/month depending on the emirate and type of family visa requested." },
              { text: "Proof of Accommodation", description: "Submit valid tenancy agreement (Ejari) or freehold property title to demonstrate adequate housing for dependents." },
              { text: "Dependent Documentation", description: "Provide attested marriage certificate for spouse, birth certificates for children, and attested parent ID/passport copies when applicable." }
            ]
          } as ContentHeadingWithList,
          {
            heading: "Documents Required for Family Visa",
            list: [
              { text: "Passport Copies", description: "Scanned copies of valid passports for both sponsor and dependent(s), each with a minimum of six months validity." },
              { text: "Residence Visa & Emirates ID", description: "Copy of the sponsor’s current residency visa and Emirates ID." },
              { text: "Tenancy Contract (Ejari) or Property Title", description: "Registered lease agreement or proof of property ownership to confirm suitable accommodation." },
              { text: "Passport-Sized Photograph", description: "Recent color photos of dependents with a white background, following UAE visa requirements." },
              { text: "Attested Marriage/Birth Certificates", description: "Marriage certificate (for spouse) or birth certificates (for children), attested by home country authority and UAE MOFA." },
              { text: "Sponsor Salary Certificate", description: "Current salary certificate from employer (on company letterhead) or bank statement to demonstrate financial capability." },
              { text: "Medical Fitness Certificate (for dependents aged 18+)", description: "Medical test from a UAE-approved center confirming the dependent is free from communicable diseases." }
            ]
          } as ContentHeadingWithList,
          {
            heading: "How to Apply for a Family Visa",
            list: [
              { text: "Step 1 – Eligibility and Document Check:", description: "Evaluate your residency visa validity, salary requirements, and prepare attested documents as listed." },
              { text: "Step 2 – Submit Application:", description: "Apply through the relevant immigration authority (e.g., ICP, GDRFA) with the required forms and fees." },
              { text: "Step 3 – Medical and Security Check:", description: "If dependents are adult, complete medical fitness tests and procure police clearance if required." },
              { text: "Step 4 – Visa Stamp & Emirates ID:", description: "Once approved, visa is stamped in passport and Emirates ID registered for each dependent." },
              { text: "Step 5 – Renewal Process:", description: "Renew family visas along with your own residency—usually every 2 or 3 years—by resubmitting updated documents." }
            ]
          } as ContentHeadingWithList,
          {
            heading: "Processing Time & Fees",
            list: [
              { text: "Application Processing Time", description: "Family visa applications typically take 3–10 business days from submission to visa stamping." },
              { text: "Government & Service Fees", description: "Fees vary by emirate—expect AED 1,200‑3,500 per dependent including issuance and medical costs." },
              { text: "Renewal Charges", description: "Visa renewals incur standard government charges plus medical and Emirates ID renewal fees." }
            ]
          } as ContentHeadingWithList
        ] as ContentBlock[],
        faqs: [
          { question: "Can I sponsor my spouse and children on separate visas?", answer: "No, under the Family Visa they are all approved together—but you can apply for different visa term lengths (e.g., 2‑ or 3‑year visas)." },
          { question: "Do I need a minimum salary to sponsor my family?", answer: "Yes. The minimum salary requirement varies by emirate—typically AED 4,000–10,000. Additional allowances or bank statements may help meet the criteria." },
          { question: "What happens if my tenancy contract expires?", answer: "You must renew your accommodation proof (Ejari or title deed); failure to do so may delay visa issuance or renewal." },
          { question: "Can I sponsor my parents under this visa?", answer: "Yes, parents can be sponsored if you meet the salary and accommodation requirements. Additional documents and approvals may apply." },
          { question: "How long does the visa process take?", answer: "Processing usually takes 3–10 business days. You’ll receive the visa stamp, then can collect Emirates ID shortly after." }
        ] as FAQ[]
      }

const EmploymentVisa:SubServiceDetail = {
        slug: "employment-visa",
        title: "Employment Visa",
        logo: "/services/employment-visa.webp",
        image: "/services/images/employment-visa.webp",
        summary: "Start your career journey in the UAE with our expert employment visa services.",
        heroText: "Work legally in the UAE with an official Employment Visa. We assist with processing, documentation, medicals, and more.",
        description: "The UAE Employment Visa is a mandatory requirement for foreign nationals who have secured a job in the country. Issued by the employer and approved by the Ministry of Human Resources and Emiratisation (MOHRE), this visa allows legal work and residence in the UAE for up to 2 years, renewable. We support employees and companies with complete visa processing services, ensuring compliance and efficiency.",

        serviceTypes: [
          {
            type: "New",
            description: "Apply for a fresh employment visa after receiving a valid job offer and approval from the Ministry of Labor. We ensure smooth onboarding and immigration clearance."
          },
          {
            type: "Renew",
            description: "Renew your existing employment visa before it expires. Typically done every 1 or 2 years depending on contract terms and emirate regulations."
          },
          {
            type: "Cancel",
            description: "Process visa cancellation upon resignation, job change, or exit from the UAE. Necessary to avoid overstay fines and maintain immigration records."
          },
          {
            type: "Transfer",
            description: "Transfer sponsorship to a new employer within the UAE without leaving the country. Subject to MOHRE approval and contract termination from previous employer."
          }
        ] as ServiceType[],

        content: [
          {
            heading: "Available Employment Visa Services",
            list: [
              {
                text: "Private Sector Visa (Mainland)",
                description: "Issued for employees working with UAE mainland companies. Involves labor contract approval from MOHRE and residency processing."
              },
              {
                text: "Free Zone Employment Visa",
                description: "Specific to employees in UAE Free Zones. Sponsored by the Free Zone Authority, often with easier transfer and processing policies."
              },
              {
                text: "Government Sector Employment Visa",
                description: "Provided by UAE government or semi-government entities. Typically includes 2–3 year validity and premium processing."
              },
              {
                text: "Domestic Worker Visa",
                description: "For roles such as drivers, maids, cooks, and nannies. Requires medical tests, police clearance, and employer sponsorship."
              }
            ]
          } as ContentHeadingWithList,

          {
            heading: "Documents Required for Employment Visa",
            list: [
              {
                text: "Passport Copy:",
                description: "Color copy of the employee’s passport, valid for at least 6 months at the time of application."
              },
              {
                text: "Passport-Sized Photograph:",
                description: "Recent photo with white background meeting UAE visa standards."
              },
              {
                text: "Educational Certificates (if required):",
                description: "Attested degree or diploma certificates depending on job role. Must be attested by home country authorities and UAE MOFA."
              },
              {
                text: "Offer Letter & Employment Contract:",
                description: "Official job offer and signed labor contract from the hiring company approved by MOHRE or Free Zone Authority."
              },
              {
                text: "Medical Fitness Certificate:",
                description: "Issued by a UAE-authorized clinic or hospital confirming the applicant is fit for employment and free from infectious diseases."
              },
              {
                text: "Emirates ID Biometrics Appointment:",
                description: "Applicants must attend a biometric scan at an official Emirates ID center after medical clearance."
              },
              {
                text: "Entry Permit (if outside UAE):",
                description: "A temporary visa issued to enter the UAE for residency stamping, valid for 60 days."
              }
            ]
          } as ContentHeadingWithList,

          {
            heading: "Employment Visa Processing Time & Fees",
            list: [
              {
                text: "Processing Time:",
                description: "Typical processing takes 5 to 10 working days after document submission. May vary by employer type and location."
              },
              {
                text: "Medical & Emirates ID Fees:",
                description: "Medical test costs range from AED 300–500; Emirates ID fees are approx. AED 170/year depending on duration."
              },
              {
                text: "Visa Stamping Fees:",
                description: "Final residency stamping on the passport costs approx. AED 500–1,000 depending on emirate and validity period."
              },
              {
                text: "Renewal & Cancellation Fees:",
                description: "Renewal charges are similar to new visa processing. Cancellation fees vary but typically range AED 150–300."
              }
            ]
          } as ContentHeadingWithList
        ] as ContentBlock[],

        faqs: [
          {
            question: "Who applies for the employment visa—the employee or employer?",
            answer: "The employment visa is applied for by the employer or company sponsor. The employee provides required documents, and the employer completes the formalities."
          },
          {
            question: "Can I change jobs without canceling my current visa?",
            answer: "Yes, employment visa transfers are possible but subject to labor law conditions, employer NOC, and approval from MOHRE or Free Zone Authority."
          },
          {
            question: "Is it mandatory to undergo medical tests for employment visas?",
            answer: "Yes, a medical fitness test from an authorized UAE medical center is compulsory for all employment visa applicants before visa stamping."
          },
          {
            question: "How long is the employment visa valid?",
            answer: "Employment visas are typically valid for 1 or 2 years, depending on your employer type and visa agreement."
          },
          {
            question: "Can my family join me on my employment visa?",
            answer: "Yes, once your employment visa and Emirates ID are issued, you can sponsor your spouse, children, and parents under a family visa."
          }
        ] as FAQ[]
      }

const TouristVisa:SubServiceDetail = {
        slug: "tourist-visa",
        title: "Tourist Visa",
        logo: "/services/tourist-visa.webp",
        image: "/services/images/tourist-visa.webp",
        summary: "Explore the UAE with flexible tourist visa options—short stay, long stay, or multiple entry.",
        heroText: "Visit the UAE hassle-free. We provide reliable and quick tourist visa solutions tailored to your travel needs.",
        description: "The UAE Tourist Visa allows travelers from around the world to visit the Emirates for leisure, exploration, or short-term business. With options ranging from 30-day single entry to 5-year multi-entry visas, our services ensure a seamless application process—whether you’re coming for a vacation or to explore opportunities.",
        
        serviceTypes: [
          {
            type: "New",
            description: "Apply for a fresh UAE tourist visa for 30, 60, or 90 days based on your travel duration. Available for both single and multiple entries."
          },
          {
            type: "Extend",
            description: "Extend your existing tourist visa inside the UAE without exiting. Options available for 30 and 60-day extensions depending on visa type."
          },
          {
            type: "Cancel",
            description: "Cancel an unused or active tourist visa to avoid penalties or to prepare for a new application. Especially useful if you plan to change visa status."
          },
          {
            type: "Multiple Entry",
            description: "Apply for long-term multiple-entry visas such as the 5-year tourist visa, allowing flexible travel in and out of the UAE."
          }
        ] as ServiceType[],

        content: [
          {
            heading: "Available Tourist Visa Services",
            list: [
              {
                text: "30-Day Single Entry",
                description: "Ideal for short trips, holidays, or visits with friends and family. Can be extended once for 30 more days without exit."
              },
              {
                text: "60-Day Single Entry",
                description: "Perfect for extended vacations or multiple-city exploration within the UAE. Can be extended inside the country."
              },
              {
                text: "Multi-Entry Visa (5-Year)",
                description: "Enables tourists to visit the UAE multiple times over 5 years, staying up to 90 days per visit (extendable to 180 days annually)."
              },
              {
                text: "Express Tourist Visa",
                description: "Fast-track processing for urgent travel needs. Get your visa approved within 24–48 hours with premium service support."
              }
            ]
          } as ContentHeadingWithList,

          {
            heading: "Documents Required for Tourist Visa",
            list: [
              {
                text: "Passport Copy:",
                description: "Clear color scan of your passport, valid for at least six months from the date of intended entry into the UAE."
              },
              {
                text: "Photograph:",
                description: "Recent passport-sized photo with white background, as per UAE visa standards."
              },
              {
                text: "Confirmed Flight Ticket:",
                description: "Round-trip flight booking showing your arrival and departure from the UAE."
              },
              {
                text: "Accommodation Proof:",
                description: "Hotel booking, rental agreement, or residence address in the UAE (if staying with a relative or sponsor)."
              },
              {
                text: "Sponsor’s ID (if applicable):",
                description: "Copy of UAE resident sponsor’s Emirates ID and visa page (required if applying through a resident)."
              }
            ]
          } as ContentHeadingWithList,

          {
            heading: "Tourist Visa Processing Time & Fees",
            list: [
              {
                text: "Processing Time:",
                description: "Standard visas are processed within 2 to 5 business days. Express visas may be issued within 24–48 hours."
              },
              {
                text: "Visa Fees:",
                description: "Visa fees vary by type. 30-day starts from AED 350; 60-day from AED 550; Multi-entry 5-year visa costs approx. AED 1,500–2,000."
              },
              {
                text: "Extension Fees:",
                description: "Tourist visa extensions typically cost AED 600–900 depending on duration and visa type."
              },
              {
                text: "Cancellation Charges:",
                description: "If canceling a previously issued visa before travel, expect a fee between AED 100–200."
              }
            ]
          } as ContentHeadingWithList
        ] as ContentBlock[],

        faqs: [
          {
            question: "How long does it take to get a UAE tourist visa?",
            answer: "It usually takes 2–5 business days. Express processing is available within 24–48 hours for urgent travel."
          },
          {
            question: "Can I extend my tourist visa from inside the UAE?",
            answer: "Yes, you can extend most tourist visas once for 30 or 60 days without leaving the country. Extension requests must be submitted before expiry."
          },
          {
            question: "What is the validity of a 5-year tourist visa?",
            answer: "The 5-year visa allows multiple entries, each up to 90 days. It can be extended for another 90 days annually, with a total of 180 days per year."
          },
          {
            question: "Can I convert a tourist visa to a residency visa?",
            answer: "Yes, under certain conditions. If you get a job or start a business, you may change your status without exiting the UAE."
          },
          {
            question: "Do I need a sponsor for a tourist visa?",
            answer: "Not always. Tourist visas can be applied through travel agencies, airlines, or UAE residents depending on the type. Some longer visas require a UAE-based sponsor."
          }
        ] as FAQ[]
      }

const VisitVisa:SubServiceDetail = {
        slug: "visit-visa",
        title: "Visit Visa",
        logo: "/services/visit-visa.webp",
        image: "/services/images/visit-visa.webp",
        summary: "Invite family or friends to the UAE with flexible visit visa options ranging from 30 to 90 days.",
        heroText: "Bring your loved ones to the UAE with hassle-free Visit Visa solutions—fast processing, expert guidance, and full compliance.",
        description: "The UAE Visit Visa allows residents and citizens to sponsor friends or relatives for short-term stays in the UAE. Available for 30, 60, and 90-day durations, this visa is ideal for family visits, reunions, and short-term hosting. We simplify the process with complete support, whether you're applying for a new visa, renewal, or extension.",

        serviceTypes: [
          {
            type: "New",
            description: "Apply for a fresh Visit Visa to invite family or friends to the UAE for short stays. Options include 30, 60, and 90-day single or multiple entry."
          },
          {
            type: "Renew",
            description: "Renew a valid visit visa to extend your guest’s legal stay. Ensure a smooth renewal before the original visa expires."
          },
          {
            type: "Cancel",
            description: "Cancel unused or active visit visas before expiry to avoid overstays or fines—especially when changing visa status."
          },
          {
            type: "Extension",
            description: "Apply for a 30-day or 60-day extension from within the UAE. Ideal for guests who need more time before departing."
          }
        ] as ServiceType[],

        content: [
          {
            heading: "Available Visit Visa Services",
            list: [
              {
                text: "30-Day Visit Visa",
                description: "Perfect for short-term stays with relatives or friends. Can be extended once for an additional 30 days."
              },
              {
                text: "60-Day Visit Visa",
                description: "Offers flexibility for longer visits. Renewable within the UAE based on immigration approval."
              },
              {
                text: "90-Day Visit Visa",
                description: "Suitable for extended stays such as family reunions or caregiving. Multiple entry options available."
              },
              {
                text: "Multiple Entry Visit Visa",
                description: "Allows visitors to enter and exit the UAE multiple times within the visa validity—ideal for those with frequent travel needs."
              }
            ]
          } as ContentHeadingWithList,

          {
            heading: "Documents Required for Visit Visa",
            list: [
              {
                text: "Visitor’s Passport Copy:",
                description: "A clear color scan of the visitor’s passport, valid for at least six months from the date of intended entry."
              },
              {
                text: "Passport-Sized Photograph:",
                description: "A recent, color photo of the visitor against a white background meeting UAE visa standards."
              },
              {
                text: "Sponsor’s Emirates ID:",
                description: "A copy of the UAE resident sponsor's Emirates ID (front and back) is mandatory."
              },
              {
                text: "Sponsor’s Visa Page & Passport:",
                description: "A valid UAE residence visa copy and passport page of the sponsor."
              },
              {
                text: "Proof of Relationship (if applicable):",
                description: "Birth or marriage certificate if applying for a visa for close family members like parents, children, or spouse."
              },
              {
                text: "Tenancy Contract or Accommodation Proof:",
                description: "Valid Ejari or tenancy contract in the sponsor's name to prove suitable accommodation for the visitor."
              },
              {
                text: "Bank Statement or Salary Slip (optional):",
                description: "Some applications may require proof of income to demonstrate financial ability to support the guest during their stay."
              }
            ]
          } as ContentHeadingWithList,

          {
            heading: "Visit Visa Processing Time & Fees",
            list: [
              {
                text: "Processing Time:",
                description: "Standard applications are processed in 2–5 working days. Urgent or express options may be available at an extra fee."
              },
              {
                text: "Visa Fees:",
                description: "Fees vary depending on duration and type. 30-day visas start from AED 350, while 90-day visas may cost AED 800–1,200."
              },
              {
                text: "Extension Charges:",
                description: "A typical 30-day extension fee ranges from AED 600–950 depending on visa type and current status."
              },
              {
                text: "Overstay Penalty:",
                description: "Overstaying a visit visa incurs daily fines of AED 50 plus service charges. Timely cancellation or extension is crucial."
              }
            ]
          } as ContentHeadingWithList
        ] as ContentBlock[],

        faqs: [
          {
            question: "What is the difference between a Visit Visa and a Tourist Visa?",
            answer: "A Visit Visa is typically sponsored by a UAE resident or citizen for family or friends, while a Tourist Visa can be obtained through travel agencies or airlines without a local sponsor."
          },
          {
            question: "Can a Visit Visa be extended from inside the UAE?",
            answer: "Yes, most visit visas can be extended once for 30 or 60 days without exiting the country. Extensions must be requested before the visa expires."
          },
          {
            question: "Can I apply for a Visit Visa without a sponsor?",
            answer: "No. Visit Visas require a UAE-based sponsor such as a family member, friend, or employer. If you don’t have a sponsor, you can opt for a Tourist Visa instead."
          },
          {
            question: "How many times can a Visit Visa be extended?",
            answer: "Visit Visas can typically be extended once from within the UAE. For longer stays, reapplication or visa status change is required."
          },
          {
            question: "Can a Visit Visa be converted into a residence visa?",
            answer: "Yes. If you secure a job or start a business in the UAE, you can apply to change your visa status without exiting the country."
          }
        ] as FAQ[]
      }

const EmiratedId:SubServiceDetail = {
        slug: "emirates-id",
        title: "Emirates ID",
        logo: "/services/emirates-id.webp",
        image: "/services/images/emirates-id.webp",
        summary: "Get your Emirates ID processed quickly and efficiently – new, renewal, replacement, or update.",
        heroText: "Your Emirates ID is your official identity in the UAE. We offer complete assistance for new applications, renewals, updates, and replacements.",
        description: "The Emirates ID is a mandatory identification card issued by the Federal Authority for Identity, Citizenship, Customs, and Port Security (ICP) for all UAE residents and citizens. It is required for accessing government services, banking, healthcare, travel, and more. Whether you're applying for a new card, renewing, or replacing a lost one, we provide complete support throughout the process.",

        serviceTypes: [
          {
            type: "New",
            description: "Issuance of a fresh Emirates ID for new residents or first-time applicants. Usually done along with visa stamping."
          },
          {
            type: "Renew",
            description: "Renew your Emirates ID before it expires to continue accessing public services and legal benefits in the UAE."
          },
          {
            type: "Cancel",
            description: "Cancel your Emirates ID when leaving the UAE permanently or when canceling your residence visa."
          },
          {
            type: "Update / Replace",
            description: "Request changes (like name, address, nationality) or replace a lost, damaged, or stolen Emirates ID."
          }
        ] as ServiceType[],

        content: [
          {
            heading: "Available Emirates ID Services",
            list: [
              {
                text: "New Emirates ID Registration",
                description: "Required for all new UAE residents or citizens after obtaining a residence visa. Includes biometric capture and data verification."
              },
              {
                text: "Renewal of Emirates ID",
                description: "Renew before expiration to avoid fines. Typically done every 2 or 3 years, depending on visa validity."
              },
              {
                text: "Replacement of Lost/Damaged ID",
                description: "If your card is lost, stolen, or physically damaged, apply for a replacement through the ICP portal or typing centers."
              },
              {
                text: "Update Personal Details",
                description: "Change address, passport number, marital status, or profession by updating your ID record officially."
              }
            ]
          } as ContentHeadingWithList,

          {
            heading: "Documents Required for Emirates ID",
            list: [
              {
                text: "Passport Copy:",
                description: "A valid passport copy with at least 6 months of validity."
              },
              {
                text: "Residence Visa Page:",
                description: "A stamped UAE residence visa (for expatriates). Required for new or renewal applications."
              },
              {
                text: "Old Emirates ID (for renewal or replacement):",
                description: "A copy or physical card if available. Helps in validating and updating previous data."
              },
              {
                text: "Birth Certificate (for children under 15):",
                description: "Required for minors applying for new or renewed Emirates ID."
              },
              {
                text: "Recent Photograph (if applicable):",
                description: "A colored passport-size photograph with a white background for children or for manual updates."
              }
            ]
          } as ContentHeadingWithList,

          {
            heading: "Emirates ID Processing Time & Fees",
            list: [
              {
                text: "Standard Processing Time:",
                description: "Typically 3–7 business days after biometric appointment and data submission."
              },
              {
                text: "Urgent Service (Fawri):",
                description: "Receive your Emirates ID within 24 hours via Fawri service. Additional fee applies and only available for citizens or select categories."
              },
              {
                text: "New ID Fees:",
                description: "AED 100 for each year of validity (e.g., AED 200 for 2 years) plus service center charges."
              },
              {
                text: "Renewal/Replacement Fees:",
                description: "Standard fee AED 100–150/year. Urgent replacements cost an extra AED 150–300 depending on service center."
              },
              {
                text: "Late Renewal Fine:",
                description: "AED 20 per day up to AED 1,000 maximum if Emirates ID is not renewed on time."
              }
            ]
          } as ContentHeadingWithList
        ] as ContentBlock[],

        faqs: [
          {
            question: "Is Emirates ID mandatory for all UAE residents?",
            answer: "Yes, all UAE citizens and residents must obtain and carry a valid Emirates ID. It serves as proof of identity across all public and private sectors."
          },
          {
            question: "When should I renew my Emirates ID?",
            answer: "You should renew your Emirates ID within 30 days of its expiration. Delays may result in fines."
          },
          {
            question: "What should I do if I lose my Emirates ID?",
            answer: "Report the loss immediately via the ICP portal or service center and apply for a replacement. You’ll receive a new card within a few days."
          },
          {
            question: "Can I update my address or job title on Emirates ID?",
            answer: "Yes, any changes to your address, employer, marital status, or other details must be updated via the official channels."
          },
          {
            question: "How can I check the status of my Emirates ID?",
            answer: "You can track your Emirates ID status online using the application number or ID number through the [ICP website](https://icp.gov.ae)."
          }
        ] as FAQ[]
      }

const MedicalServices:SubServiceDetail = {
        slug: "medical-services",
        title: "Medical Services",
        logo: "/services/medical.webp",
        image: "/services/images/medical.webp",
        summary: "Fast-track your UAE visa with mandatory medical tests for new, renewal, and transfer cases.",
        heroText: "We provide seamless assistance with government-approved medical fitness tests required for UAE visa processing. Get your reports faster and error-free.",
        description: "Medical fitness tests are mandatory for all expatriates applying for a UAE residency visa — whether new, renewal, or transfer. Conducted at government-authorized medical centers, these tests ensure public safety and screen applicants for infectious diseases like tuberculosis and HIV. We help you book appointments, prepare required documents, and receive results without delays.",

        serviceTypes: [
          {
            type: "New",
            description: "Required for first-time residency visa applicants to confirm fitness before visa stamping."
          },
          {
            type: "Renew",
            description: "Mandatory test for renewing an existing visa after its expiry or nearing expiry."
          },
          {
            type: "Transfer",
            description: "For visa transfers to new sponsors/employers; a fresh medical report is typically required."
          },
          {
            type: "Urgent / VIP Medical",
            description: "Fast-track testing options with results available in 1 day or less. Includes VIP processing at select centers."
          }
        ] as ServiceType[],

        content: [
          {
            heading: "Available Medical Services",
            list: [
              {
                text: "Standard Medical Fitness Test",
                description: "Includes chest X-ray and blood test to detect tuberculosis (TB), HIV/AIDS, and other communicable diseases."
              },
              {
                text: "VIP/Urgent Medical Test",
                description: "Quick results within 24 hours, ideal for urgent visa stamping or renewals. Includes fast-track queue and priority service."
              },
              {
                text: "Medical Typing & Appointment Booking",
                description: "We handle all pre-registration, form typing, and secure an appointment at your preferred approved medical center."
              },
              {
                text: "Result Collection & Follow-Up",
                description: "We collect your official results and guide you on next steps for Emirates ID and visa stamping."
              }
            ]
          } as ContentHeadingWithList,

          {
            heading: "Documents Required for Medical Test",
            list: [
              {
                text: "Passport Copy:",
                description: "A valid color scan or physical copy of your passport with at least 6 months of validity."
              },
              {
                text: "Visa Entry Permit or Residency Copy:",
                description: "Required to determine visa type and for processing at medical centers."
              },
              {
                text: "Passport-Sized Photograph:",
                description: "Recent photo with white background, as per UAE ID/passport standards."
              },
              {
                text: "Emirates ID (if renewing):",
                description: "Existing Emirates ID must be presented when applying for renewal-related tests."
              },
              {
                text: "Medical Test Application Receipt (if pre-typed):",
                description: "If typing was done elsewhere, the medical application form must be shown at the center."
              }
            ]
          } as ContentHeadingWithList,

          {
            heading: "Medical Test Processing Time & Fees",
            list: [
              {
                text: "Standard Test Duration:",
                description: "Results typically available in 24–48 working hours after completing the test."
              },
              {
                text: "Urgent/VIP Test Duration:",
                description: "Results ready within 4–12 hours depending on the center. Ideal for tight visa deadlines."
              },
              {
                text: "Standard Medical Test Fees:",
                description: "Ranges from AED 320 to AED 370 depending on emirate and center."
              },
              {
                text: "VIP Medical Test Fees:",
                description: "Ranges from AED 500 to AED 750 depending on the fast-track or premium services selected."
              }
            ]
          } as ContentHeadingWithList
        ] as ContentBlock[],

        faqs: [
          {
            question: "Who needs to take the UAE medical fitness test?",
            answer: "All foreign nationals applying for a new residence visa, renewing an existing one, or transferring employment must undergo a medical fitness test at an authorized center."
          },
          {
            question: "What diseases are checked in the medical test?",
            answer: "The test primarily screens for infectious diseases such as tuberculosis (TB) and HIV/AIDS. In some professions, additional screenings may be required."
          },
          {
            question: "Where can I take the medical test in the UAE?",
            answer: "Medical fitness tests must be done at government-approved centers. We’ll help you locate and book the nearest and fastest option."
          },
          {
            question: "Is the medical fitness test required every time I renew my visa?",
            answer: "Yes, medical tests are required for most renewal and transfer visa processes. Always check with your visa category and emirate rules."
          },
          {
            question: "Can I get medical results urgently?",
            answer: "Yes, urgent or VIP services are available that deliver results within 4 to 24 hours. Additional fees apply depending on center and location."
          }
        ] as FAQ[]
      }

const ChangeStatus:SubServiceDetail = {
        slug: "status-change",
        title: "Status Change",
        logo: "/services/status-change.webp",
        image: "/services/images/status-change.webp",
        summary: "Change your UAE visa status legally without exiting the country.",
        heroText: "We assist with seamless in-country visa status changes – no exit required. Ideal for job switch, new residency, or student-to-work transitions.",
        description: "Status Change is the legal process of updating your visa category or residency permit while remaining inside the UAE. Whether you're shifting from a tourist visa to an employment visa, investor to family sponsor, or completing residency issuance after entry permit approval, we handle every step with accuracy and speed.",

        serviceTypes: [
          {
            type: "New Status Change",
            description: "Applicable when converting a visit or tourist visa to a residence visa (employment, family, golden, etc.) without leaving the country."
          },
          {
            type: "Renewal Status Change",
            description: "In cases where visa renewal involves status amendments – like change of employer or residency type – a formal status update is required."
          },
          {
            type: "Transfer / Employer Change",
            description: "For professionals changing jobs, this allows legal transfer of visa sponsorship within the UAE under the new employer."
          },
          {
            type: "Overstay Regularization",
            description: "Support for individuals who have overstayed and need to regularize their status before visa issuance, avoiding fines or blacklisting."
          }
        ] as ServiceType[],

        content: [
          {
            heading: "When You Need a Status Change",
            list: [
              {
                text: "Tourist/Visit Visa to Residence Visa",
                description: "Convert your current visit or tourist visa to a valid UAE residence visa without exiting the country."
              },
              {
                text: "Change of Employer or Sponsor",
                description: "If you're switching jobs or sponsors (family to employer or vice versa), a status update is required before new visa issuance."
              },
              {
                text: "Entry Permit to Residency",
                description: "After your entry permit is issued, status change completes the process for getting your Emirates ID and visa stamped."
              },
              {
                text: "Student Visa to Employment Visa",
                description: "Graduates and interns switching to full-time employment can change visa status without travel or exit."
              }
            ]
          } as ContentHeadingWithList,

          {
            heading: "Documents Required for Status Change",
            list: [
              {
                text: "Passport Copy:",
                description: "Must be valid for at least six months at the time of application."
              },
              {
                text: "Entry Permit or Tourist Visa Copy:",
                description: "Your current UAE visa or entry status must be documented to initiate the change."
              },
              {
                text: "New Visa Approval / Offer Letter:",
                description: "A job offer, entry permit, or visa approval form is needed to validate the change."
              },
              {
                text: "Old Emirates ID (if applicable):",
                description: "If previously issued, this helps in updating records and processing cancellation."
              },
              {
                text: "Photograph:",
                description: "Passport-sized color photo with white background, as per UAE standards."
              }
            ]
          } as ContentHeadingWithList,

          {
            heading: "Status Change Fees & Timelines",
            list: [
              {
                text: "Government Fees:",
                description: "Status change fees typically range between AED 600 to AED 1,300 depending on category and emirate."
              },
              {
                text: "Service Typing Fees:",
                description: "Additional AED 100 to AED 200 for form typing, documentation, and processing through authorized centers."
              },
              {
                text: "Processing Time:",
                description: "Usually 2–5 working days after entry permit issuance or document submission."
              },
              {
                text: "Penalty Waiver Support (if applicable):",
                description: "We assist in clearing overstay fines or applying for penalty waivers before final status change."
              }
            ]
          } as ContentHeadingWithList
        ] as ContentBlock[],

        faqs: [
          {
            question: "What is a status change in UAE visa processing?",
            answer: "A status change allows individuals to legally change their visa type inside the UAE without leaving the country. It is typically used when converting a tourist visa to a residence visa or switching between visa sponsors."
          },
          {
            question: "Can I do status change without exiting the UAE?",
            answer: "Yes, most visa types (employment, family, golden, investor, student) allow for in-country status change without needing to travel or exit."
          },
          {
            question: "How long does the status change take?",
            answer: "It usually takes 2–5 working days, depending on the visa type, document accuracy, and government approval times."
          },
          {
            question: "What if I overstayed my previous visa?",
            answer: "Overstayers can still complete status change after paying fines or requesting a waiver. Our team can help with this process to avoid complications."
          },
          {
            question: "Is status change mandatory for new visas?",
            answer: "Yes. If you're in the UAE on a tourist or visit visa, and you’re issued a new residence entry permit, you must complete status change before final visa stamping."
          }
        ] as FAQ[]
      }

const DataModification:SubServiceDetail = {
        slug: "data-modification",
        title: "Data Modification",
        logo: "/services/data-modification.webp",
        image: "/services/images/data-modification.webp",
        summary: "Correct or update your UAE visa and residency data quickly and accurately.",
        heroText: "We assist with official data modifications on your UAE visa, Emirates ID, and residency records — hassle-free and fully compliant.",
        description: "Data Modification is the official process to update or correct personal and professional information on your UAE visa or Emirates ID. Whether it’s correcting name spellings, updating passport details, changing job titles, or amending sponsor information, our experts handle your application efficiently, ensuring all changes comply with UAE immigration regulations.",

        serviceTypes: [
          {
            type: "Name Correction",
            description: "Correct misspelled or incorrectly entered names on visa or Emirates ID documents."
          },
          {
            type: "Passport Number Update",
            description: "Update your visa and Emirates ID records when you renew or change your passport."
          },
          {
            type: "Job Title or Employer Name Change",
            description: "Modify your job title or employer name in your visa records due to promotions, transfers, or new sponsorship."
          },
          {
            type: "Date of Birth or Other Personal Details",
            description: "Correct errors or update other personal information like date of birth or nationality."
          }
        ] as ServiceType[],

        content: [
          {
            heading: "Common Data Modification Scenarios",
            list: [
              {
                text: "Misspelled Name on Visa or ID",
                description: "Fix common typographical errors or name mismatches between your passport and UAE documents."
              },
              {
                text: "Updating Passport Information",
                description: "When you renew or get a new passport, update your visa records to reflect the new passport number and expiry."
              },
              {
                text: "Changing Employer or Job Title Details",
                description: "Ensure your job title and sponsoring company information is accurate after promotions or employer changes."
              },
              {
                text: "Correcting Personal Information",
                description: "Adjust incorrect date of birth, nationality, or other personal data on government records."
              }
            ]
          } as ContentHeadingWithList,

          {
            heading: "Documents Required for Data Modification",
            list: [
              {
                text: "Passport Copy:",
                description: "A clear color copy of your valid passport."
              },
              {
                text: "Old Visa / Emirates ID Copy:",
                description: "Copies of your current visa and Emirates ID reflecting existing data."
              },
              {
                text: "Official Supporting Documents:",
                description: "Documents justifying the change, such as a new passport, marriage certificate, or employer letter."
              },
              {
                text: "Completed Application Form:",
                description: "The relevant government form for data correction or modification."
              }
            ]
          } as ContentHeadingWithList,

          {
            heading: "Data Modification Fees and Timeline",
            list: [
              {
                text: "Government Fees:",
                description: "Fees vary depending on the type of modification but generally range between AED 200 to AED 700."
              },
              {
                text: "Typing and Service Charges:",
                description: "Additional fees for application typing, documentation, and processing."
              },
              {
                text: "Processing Time:",
                description: "Usually 3 to 7 working days depending on the type of change and approval process."
              }
            ]
          } as ContentHeadingWithList
        ] as ContentBlock[],

        faqs: [
          {
            question: "What kind of data can be modified on UAE visa or Emirates ID?",
            answer: "You can modify personal details such as name corrections, passport numbers, job titles, employer names, and other data inaccuracies."
          },
          {
            question: "How long does data modification take?",
            answer: "Most modifications are processed within 3 to 7 working days after submission of all required documents."
          },
          {
            question: "Is it mandatory to update my visa if my passport number changes?",
            answer: "Yes, whenever you renew or change your passport, your visa and Emirates ID data must be updated accordingly."
          },
          {
            question: "Can I modify my name on the visa if it was misspelled?",
            answer: "Yes, name correction is a common data modification service and must be done officially to avoid future issues."
          },
          {
            question: "What documents do I need for data modification?",
            answer: "Generally, a valid passport copy, current visa and Emirates ID copies, and any official documents supporting the requested changes."
          }
        ] as FAQ[]
      }

//TASHEEL SERVICES SUBSERVICES
const WorkPermit: SubServiceDetail = {
  slug: "work-permit",
  title: "Work Permit Services",
  logo: "/services/work-permit.webp",
  image: "/services/images/work-permit.webp",
  summary: "Manage your employment journey with smooth work permit issuance, renewal, modification, cancellation, and payment support.",
  heroText: "Work legally in the UAE with complete support for applying, renewing, modifying, cancelling, and paying fees for your Ministry of Labour work permit.",
  description: "The UAE Work Permit is an official document issued by the Ministry of Human Resources and Emiratisation (MOHRE), allowing individuals to work legally under an employer. The process includes initial application, renewal, modification of details (such as job title or sponsor), cancellation if needed, and fee payment. These services are crucial for maintaining legal employment status and ensuring compliance with UAE labor laws.",
  serviceTypes: [
    {
      type: "New",
      description: "Initiate a new work permit for employees newly hired in the UAE, involving job offer issuance, insurance, medical, and contract submission under employer sponsorship."
    },
    {
      type: "Renew",
      description: "Extend the validity of existing work permits before expiry to maintain uninterrupted employment. Requires valid documents and fee payment."
    },
    {
      type: "Cancel",
      description: "Cancel an active work permit if an employee resigns or is terminated. Necessary to avoid fines and facilitate visa cancellation or transfer."
    },
    {
      type: "Modify",
      description: "Update employee details on the work permit such as occupation, salary, or company name (in case of business structure change or promotion)."
    },
    {
      type: "Payment",
      description: "Process payments for all work permit related fees including new applications, renewals, modifications, and cancellations through official channels."
    }
  ] as ServiceType[],
  content: [
    {
      heading: "What is a UAE Work Permit?",
      paragraph: "A UAE Work Permit is a legal authorization that allows foreign nationals to work under a registered company. Issued by MOHRE, it is valid for up to 2 years and requires a labor contract. Without this document, employment in the private sector is considered illegal."
    },
    {
      heading: "Required Documents for Work Permit Services",
      list: [
        { text: "Valid Passport Copy", description: "Must have at least 6 months validity at the time of application." },
        { text: "Passport-Sized Photograph", description: "A recent color photo with white background." },
        { text: "Educational Certificates (if applicable)", description: "Attested degree or diploma for professional roles." },
        { text: "Offer Letter or Contract", description: "Issued by the employer and approved by MOHRE." },
        { text: "Medical Fitness Certificate", description: "Mandatory after entry or renewal, from a UAE-approved health center." },
        { text: "Visa Copy & Emirates ID (for renewals/modifications)", description: "Only required if already residing in UAE." }
      ]
    },
    {
      heading: "Work Permit Renewal",
      list: [
        { text: "Renewal Eligibility:", description: "Permits can be renewed if employment continues under the same employer and all documents remain valid." },
        { text: "Timing:", description: "Renewal must be initiated before permit expiry to avoid fines." },
        { text: "Process Steps:", description: "Employer submits renewal request → pay fees → update contract → medical test (if needed) → new permit issued." }
      ]
    },
    {
      heading: "Work Permit Cancellation",
      list: [
        { text: "When to Cancel:", description: "Must be done when employee leaves job, switches employer, or relocates." },
        { text: "Documents Needed:", description: "Original permit, employee consent (or signed resignation), company authorization." },
        { text: "Result:", description: "Allows legal visa cancellation or transfer to new employer without penalties." }
      ]
    },
    {
      heading: "Work Permit Modification",
      list: [
        { text: "Reasons for Modification:", description: "Change of job title, salary update, company name change, or location." },
        { text: "Required Documents:", description: "Supporting documents like salary certificate, amended contract, trade license changes." },
        { text: "Approval Time:", description: "Usually within 2-5 working days after submission and review." }
      ]
    },
    {
      heading: "Work Permit Payment",
      paragraph: "Work permit fees cover application, renewal, modification, and cancellation processes. Payment can be made online through MOHRE portals, authorized typing centers, or government service centers. Timely payment of fees is essential to avoid fines or service delays.",
      list: [
        { text: "Payment Methods:", description: "Online payment via MOHRE website or app, bank transfer, or in-person at approved centers." },
        { text: "Fee Amounts:", description: "Fees vary depending on permit type and company classification, typically ranging from AED 250 to AED 3,000." },
        { text: "Payment Confirmation:", description: "After payment, keep receipts and transaction IDs as proof, which are required for processing applications." }
      ]
    },
    {
      heading: "Fees & Processing Time",
      list: [
        { text: "New Permit Application Fee:", description: "Ranges from AED 250 to AED 3,000 depending on company classification." },
        { text: "Renewal Fee:", description: "AED 250 – AED 1,200 depending on labor category." },
        { text: "Modification Fee:", description: "AED 100 – AED 300 depending on change type." },
        { text: "Cancellation Fee:", description: "Typically free or AED 100, depending on channel used." },
        { text: "Processing Time:", description: "Most permits are processed within 2–5 working days." }
      ]
    }
  ] as ContentBlock[],
  faqs: [
    {
      question: "Who issues the UAE work permit?",
      answer: "Work permits are issued by the Ministry of Human Resources and Emiratisation (MOHRE) for private sector jobs. In free zones, the respective authority (e.g., DAFZA, DMCC) handles issuance."
    },
    {
      question: "Can I switch employers without cancelling my permit?",
      answer: "No, the existing work permit must be cancelled before a new one is issued under the new employer. MOHRE approval is required for the switch."
    },
    {
      question: "Is there a grace period after cancellation?",
      answer: "Yes, after work permit cancellation, you typically get a 30-day grace period to exit the UAE or obtain a new visa sponsorship."
    },
    {
      question: "Do I need a medical test every time I renew the permit?",
      answer: "Yes, a medical fitness test is required during renewals or for certain occupational changes involving health or public safety."
    },
    {
      question: "Can I modify my work permit details after it's issued?",
      answer: "Yes, you can modify specific details like job title or company name with proper documentation and approval from MOHRE."
    },
    {
      question: "How can I pay my work permit fees?",
      answer: "Payments can be made online via the MOHRE website or mobile app, at authorized typing centers, or government service centers. Always keep payment confirmation receipts."
    }
  ] as FAQ[]
}

const NewSignatureCardCreation: SubServiceDetail = {
  slug: "signature-card",
  title: "New Signature Card Creation",
  logo: "/services/signature-card.webp",
  image: "/services/images/signature.webp",
  summary: "Register your company’s official signature for MOHRE transactions and labor-related procedures.",
  heroText: "Create a new Signature Card to authorize legal signatories for your establishment across all Tasheel and MOHRE-related services.",
  description:
    "A Signature Card is an official document issued by the Ministry of Human Resources and Emiratisation (MOHRE) that authorizes company representatives to legally sign and process labor-related documents. It is essential for businesses setting up a new establishment file with MOHRE and is required before applying for work permits, labor contracts, and other employment transactions. The Signature Card ensures that only verified individuals are empowered to act on behalf of the company.",
  serviceTypes: [
    {
      type: "New",
      description: "Issue a new Signature Card for your establishment to enable official transactions with the Ministry of Labour and Tasheel service centers."
    }
  ] as ServiceType[],
  content: [
    {
      heading: "What is a Signature Card?",
      paragraph:
        "A Signature Card is a MOHRE-issued document that lists the authorized signatories of a company who can represent it in labor-related dealings, such as issuing job offers, work permits, and contracts. It ensures transparency, security, and verification in employment procedures."
    },
    {
      heading: "Why Do You Need a Signature Card?",
      list: [
        { text: "Required for MOHRE Access", description: "You cannot initiate labor-related processes without a valid Signature Card." },
        { text: "Secure Government Transactions", description: "Only authorized personnel can perform tasks such as permit issuance and cancellation." },
        { text: "Mandatory for New Establishments", description: "A prerequisite for companies opening a new establishment file." }
      ]
    },
    {
      heading: "Documents Required",
      list: [
        { text: "Trade License Copy", description: "A valid, updated copy of the company's trade license." },
        { text: "Emirates ID of Owner/Partner", description: "Copy of Emirates ID of the person authorized to sign." },
        { text: "Passport Copy of Owner/Partner", description: "Passport copy of the authorized signatory." },
        { text: "Company Stamp", description: "The official stamp of the company used for MOHRE approvals." },
        { text: "E-signature of Authorized Person", description: "Digital signature of the authorized representative for official submissions." }
      ]
    },
    {
      heading: "Steps to Apply",
      list: [
        { text: "Step 1 – Gather Documents", description: "Collect and verify all required documents, including trade license and ID copies." },
        { text: "Step 2 – Visit Tasheel Center", description: "Visit a Tasheel service center and fill out the Signature Card application form." },
        { text: "Step 3 – Biometric or Digital Signature", description: "Authorized person must verify their identity using Emirates ID or biometric authentication." },
        { text: "Step 4 – Submission & Approval", description: "Submit application for MOHRE approval. Once verified, a Signature Card is issued." }
      ]
    },
    {
      heading: "Fees & Processing Time",
      list: [
        { text: "Government Fees", description: "Approx. AED 250–350 depending on the emirate and channel." },
        { text: "Service Fees", description: "Additional AED 100–200 may apply for service center support." },
        { text: "Processing Time", description: "Usually 1–2 working days after submission." }
      ]
    }
  ] as ContentBlock[],
  faqs: [
    {
      question: "What is a Signature Card used for?",
      answer: "It is used to authorize designated individuals to handle labor transactions on behalf of a company, including work permit issuance, cancellations, and labor contract approvals."
    },
    {
      question: "Is a Signature Card mandatory for all businesses?",
      answer: "Yes, it is mandatory for all companies that wish to register with MOHRE and apply for labor-related services like work permits or job offers."
    },
    {
      question: "Can I add multiple signatories to the Signature Card?",
      answer: "Yes, multiple authorized signatories can be added, provided they are verified by MOHRE with valid documents and Emirates IDs."
    },
    {
      question: "Where do I apply for a Signature Card?",
      answer: "You can apply through any authorized Tasheel service center by submitting the required documents and undergoing identity verification."
    },
    {
      question: "How long is the Signature Card valid?",
      answer: "It remains valid as long as the trade license and business registration are active. Updates are required if the signatory or business ownership changes."
    }
  ] as FAQ[]
}

const NewEstablishmentFileOpening: SubServiceDetail = {
  slug: "establishment-file",
  title: "New Establishment File Opening",
  logo: "/services/icons/establishment.svg",
  image: "/services/images/establishment.webp",
  summary: "Open a new establishment file to officially register your business with the Ministry of Human Resources and Emiratisation (MOHRE).",
  heroText: "Start your business journey in the UAE by opening your establishment file through Tasheel.",
  description: "Opening an Establishment File is the first legal step for any company in the UAE to hire employees and operate under the Ministry of Human Resources and Emiratisation (MOHRE). This file allows businesses to sponsor work permits, manage employee records, and access MOHRE services. Tasheel centers facilitate the process by verifying business details and submitting the required documentation directly to MOHRE.",
  serviceTypes: [
    {
      type: "New",
      description: "For newly registered companies needing an official file in the MOHRE system to begin operations and apply for work permits."
    }
  ] as ServiceType[],
  content: [
    {
      heading: "Documents Required",
      list: [
        { text: "Trade License", description: "A valid trade license issued by the relevant licensing authority in the UAE." },
        { text: "Tenancy Contract", description: "A registered Ejari contract for your business premises." },
        { text: "Owner’s Emirates ID and Passport Copy", description: "Copies of all partners' or owners’ valid Emirates IDs and passports." },
        { text: "Chamber of Commerce Certificate", description: "Valid membership in the Chamber of Commerce, as applicable." },
        { text: "MOA or AOA", description: "Memorandum or Articles of Association as proof of business formation." }
      ]
    } as ContentHeadingWithList,
    {
      heading: "Application Process",
      list: [
        { text: "Step 1 – Document Collection", description: "Gather all necessary documents including license, tenancy contract, and IDs." },
        { text: "Step 2 – Tasheel Submission", description: "Visit a Tasheel center or submit online to initiate the file creation." },
        { text: "Step 3 – MOHRE Verification", description: "The application is reviewed and approved by MOHRE." },
        { text: "Step 4 – Establishment File Number Issued", description: "Once approved, you receive your unique Establishment File number." }
      ]
    } as ContentHeadingWithList
  ],
  faqs: [
    {
      question: "What is an establishment file?",
      answer: "An establishment file is a digital record of your company in the MOHRE system. It enables you to apply for employee work permits, pay labor fees, and manage labor relations."
    },
    {
      question: "Can I open the file online?",
      answer: "Yes, through authorized Tasheel platforms or by visiting a Tasheel center, depending on the emirate and licensing authority."
    },
    {
      question: "How long does it take to open the file?",
      answer: "The process typically takes 1–3 working days, provided all documents are in order."
    }
  ] as FAQ[]
};

const NewJobOfferLetter: SubServiceDetail = {
  slug: "job-offer-letter",
  title: "New Job Offer Letter",
  logo: "/services/icons/job-offer-letter.svg",
  image: "/services/images/job-offer.webp",
  summary: "Issue an official job offer letter for new employees to initiate the work permit application process.",
  heroText: "Simplify hiring by obtaining a legally compliant job offer letter through Tasheel services.",
  description: "The Job Offer Letter is a mandatory document required by the Ministry of Human Resources and Emiratisation (MOHRE) to sponsor and issue a work permit for a new employee. It outlines the terms and conditions of employment, including salary, job title, and duration. Tasheel facilitates the issuance of the job offer letter after verifying employer credentials and compliance with labor laws.",
  serviceTypes: [
    {
      type: "New",
      description: "For employers hiring new employees who need a formal job offer letter to start the visa and work permit process."
    }
  ] as ServiceType[],
  content: [
    {
      heading: "Required Documents",
      list: [
        { text: "Company Trade License", description: "A valid trade license of the employer’s company." },
        { text: "Establishment File Number", description: "Your MOHRE establishment file number." },
        { text: "Employee Passport Copy", description: "Clear copy of the prospective employee’s passport." },
        { text: "Salary Details", description: "Agreed salary and job title to be stated in the offer letter." }
      ]
    } as ContentHeadingWithList,
    {
      heading: "Process to Obtain Job Offer Letter",
      list: [
        { text: "Step 1 – Submit Employee Details", description: "Provide all necessary employee and job details to Tasheel." },
        { text: "Step 2 – Document Verification", description: "Tasheel verifies company credentials and document authenticity." },
        { text: "Step 3 – Issue Offer Letter", description: "Tasheel issues the official job offer letter compliant with MOHRE regulations." },
        { text: "Step 4 – Use for Work Permit Application", description: "The job offer letter is used to apply for the employee’s work permit and residency visa." }
      ]
    } as ContentHeadingWithList,
  ],
  faqs: [
    {
      question: "Why do I need a job offer letter?",
      answer: "A job offer letter is required by MOHRE to initiate the work permit process for a new employee. It confirms the employment terms and employer sponsorship."
    },
    {
      question: "Can the job offer letter be issued online?",
      answer: "Yes, through Tasheel’s online platforms or service centers, you can request and receive the job offer letter."
    },
    {
      question: "How long does it take to issue the job offer letter?",
      answer: "Typically, the offer letter is issued within 1 to 2 working days after all documents are verified."
    }
  ] as FAQ[]
};

const MOLInsurance: SubServiceDetail = {
  slug: "mol-insurance",
  title: "MOL Insurance",
  logo: "/services/icons/mol-insurance.svg",
  image: "/services/images/mol.webp",
  summary: "Obtain and manage mandatory labor insurance coverage for your employees under the Ministry of Labor regulations.",
  heroText: "Ensure your workforce is protected with compliant MOL insurance coverage, streamlined through Tasheel services.",
  description: "MOL Insurance is a mandatory insurance policy required by the Ministry of Human Resources and Emiratisation (MOHRE) for all employees working in the UAE. This insurance provides coverage for work-related injuries, occupational diseases, and other risks to safeguard both the employee and employer. Tasheel facilitates the issuance, renewal, and management of MOL insurance to ensure full compliance with labor laws.",
  serviceTypes: [
    {
      type: "New",
      description: "Purchase MOL insurance for newly hired employees to comply with labor law requirements."
    },
    {
      type: "Renew",
      description: "Renew existing MOL insurance policies before expiry to maintain uninterrupted coverage."
    }
  ] as ServiceType[],
  content: [
    {
      heading: "What is MOL Insurance?",
      paragraph: "MOL Insurance is a compulsory insurance that protects workers from occupational injuries and illnesses. It is part of the UAE labor law aimed at enhancing worker safety and providing compensation in case of accidents."
    } as ContentHeading,
    {
      heading: "Documents Required",
      list: [
        { text: "Company Trade License", description: "Valid license of the employer company." },
        { text: "Establishment File Number", description: "MOHRE establishment file number." },
        { text: "Employee Passport Copy", description: "Copy of the employee’s passport." },
        { text: "Work Permit Copy", description: "Copy of the employee’s valid work permit." },
      ]
    } as ContentHeadingWithList,
    {
      heading: "Process for Obtaining MOL Insurance",
      list: [
        { text: "Step 1 – Submit Employee Details", description: "Provide all relevant employee information and documents to Tasheel." },
        { text: "Step 2 – Insurance Policy Issuance", description: "Tasheel coordinates with insurance providers to issue the policy." },
        { text: "Step 3 – Receive Insurance Certificate", description: "You will receive the official insurance certificate confirming coverage." },
        { text: "Step 4 – Maintain Policy and Renewals", description: "Ensure timely renewals to keep coverage valid and avoid penalties." }
      ]
    } as ContentHeadingWithList,
    {
      heading: "Benefits of MOL Insurance",
      list: [
        { text: "Compliance with UAE Labor Law", description: "Avoid fines and legal issues by maintaining mandatory insurance." },
        { text: "Protection for Employees", description: "Provides financial compensation for workplace injuries or illnesses." },
        { text: "Peace of Mind for Employers", description: "Mitigates risks associated with employee accidents or health issues." }
      ]
    } as ContentHeadingWithList,
  ],
  faqs: [
    {
      question: "Is MOL Insurance mandatory for all employees?",
      answer: "Yes, all employees working in the UAE must have MOL insurance coverage as per the Ministry of Labor regulations."
    },
    {
      question: "How long does it take to get MOL insurance?",
      answer: "The insurance policy is typically issued within 1 to 3 working days after submitting all required documents."
    },
    {
      question: "Can MOL insurance be renewed online?",
      answer: "Yes, renewals can be processed through Tasheel online portals or service centers before the current policy expires."
    },
    {
      question: "What happens if MOL insurance is not renewed on time?",
      answer: "Failure to renew MOL insurance on time may result in fines, legal penalties, and suspension of work permits."
    }
  ] as FAQ[]
};

const LabourContractSubmission: SubServiceDetail = {
  slug: "labour-contract",
  title: "Labour Contract Submission",
  logo: "/services/labour-contract-submission.webp",
  image: "/services/images/contract-submission.webp",
  summary: "Submit and register employee labour contracts with the Ministry of Labour to ensure legal employment compliance.",
  heroText: "Efficiently submit labour contracts to the Ministry of Labour for approval and official registration, securing lawful work agreements.",
  description: "Labour Contract Submission is the formal process of submitting employee contracts to the UAE Ministry of Labour for validation and registration. This ensures the contract terms are legally recognized, protecting both employer and employee rights under UAE labor law.",
  serviceTypes: [
    {
      type: "New",
      description: "Submission of newly drafted labour contracts for new hires."
    },
    {
      type: "Renew",
      description: "Re-submission of renewed or extended labour contracts."
    },
    {
      type: "Modification",
      description: "Submission of amended contracts reflecting changes in terms, salary, or job role."
    }
  ],
  content: [
    {
      heading: "Key Points:",
      list: [
        { text: "Mandatory Registration", description: "Labour contracts must be registered with the Ministry of Labour to be legally valid." },
        { text: "Protects Employer and Employee Rights", description: "Ensures clear terms and legal enforceability." },
        { text: "Supports Work Permit Issuance", description: "Registered contracts are required for work permit and visa processing." }
      ]
    },
    {
      heading: "Required Documents:",
      list: [
        { text: "Signed Labour Contract", description: "Original signed contract between employer and employee." },
        { text: "Employee Passport Copy", description: "Clear copy of employee’s passport." },
        { text: "Company Trade License", description: "Valid commercial license of the employer company." },
        { text: "Emirates ID Copy", description: "Employee’s Emirates ID (if applicable)." }
      ]
    },
    {
      heading: "Submission Process:",
      list: [
        { text: "Document Verification", description: "Check all contract details for completeness and compliance with UAE labor law." },
        { text: "Online or In-Person Submission", description: "Submit contracts via Ministry of Labour portals or authorized service centers." },
        { text: "Contract Registration", description: "Ministry reviews and officially registers the contract, issuing confirmation." }
      ]
    },
    {
      heading: "Processing Time",
      paragraph: "Labour contract submission and registration typically take 1-3 working days, depending on completeness and system processing."
    }
  ],
  faqs: [
    {
      question: "Is labour contract submission mandatory?",
      answer: "Yes, all employment contracts must be submitted to the Ministry of Labour to be legally valid."
    },
    {
      question: "Can I submit the contract online?",
      answer: "Yes, contracts can be submitted via the Ministry of Labour’s online portal or authorized centers."
    },
    {
      question: "What happens if the contract is not registered?",
      answer: "Unregistered contracts may lead to legal disputes and affect visa or work permit issuance."
    }
  ]
}

const PROCardLabour: SubServiceDetail = {
  slug: "pro-card",
  title: "PRO Card Labour",
  logo: "/services/pro-card-labour.webp",
  image: "/services/images/pro.webp",
  summary: "Obtain and manage PRO cards for labour personnel to facilitate government transactions and approvals.",
  heroText: "Simplify government procedures with PRO cards designed specifically for labour service representatives.",
  description: "The PRO Card for labour enables authorized representatives to carry out government transactions on behalf of companies or workers related to labour affairs. It is essential for accessing Ministry of Labour services, submitting applications, and handling various official processes efficiently.",
  serviceTypes: [
    {
      type: "New",
      description: "Application for new PRO cards for labour representatives."
    },
    {
      type: "Renew",
      description: "Renewal of existing PRO cards before expiry."
    },
    {
      type: "Cancel",
      description: "Cancellation of PRO cards no longer in use or when representatives leave."
    }
  ],
  content: [
    {
      heading: "Benefits of PRO Card Labour:",
      list: [
        { text: "Authorized Access", description: "Allows representatives to manage labour-related government transactions efficiently." },
        { text: "Time-Saving", description: "Reduces the need for direct visits to government offices by company personnel." },
        { text: "Improved Compliance", description: "Ensures that only authorized personnel handle sensitive documentation and applications." }
      ]
    },
    {
      heading: "Required Documents:",
      list: [
        { text: "Completed PRO Card Application Form", description: "Official form filled and signed by company representative." },
        { text: "Company Trade License Copy", description: "Valid commercial license of the applying company." },
        { text: "Labour Card Copy", description: "Copy of the labour card of the applicant." },
        { text: "Passport Copy", description: "Clear copy of the applicant’s passport." },
        { text: "Emirates ID Copy", description: "Copy of Emirates ID (if available)." },
        { text: "No Objection Letter (NOC)", description: "Letter from the employer authorizing the applicant to apply for the PRO card." }
      ]
    },
    {
      heading: "Application Process:",
      list: [
        { text: "Submit Documents", description: "Provide all required documentation to the relevant government authority or authorized service provider." },
        { text: "Verification and Processing", description: "Authorities verify submitted documents and process the PRO card application." },
        { text: "Card Issuance", description: "Once approved, the PRO card is issued and handed over to the applicant." }
      ]
    },
    {
      heading: "Validity and Renewal",
      paragraph: "PRO cards are usually valid for one to two years. Renewal must be completed before expiry to maintain uninterrupted service access."
    }
  ],
  faqs: [
    {
      question: "Who needs a PRO Card Labour?",
      answer: "Companies appoint representatives who frequently deal with labour and immigration authorities to manage their transactions efficiently."
    },
    {
      question: "Can the PRO card be renewed online?",
      answer: "Yes, renewal can often be done through authorized service centers or government portals, depending on current regulations."
    },
    {
      question: "What happens if the PRO card expires?",
      answer: "An expired PRO card will restrict the holder’s ability to conduct official labour transactions until renewed."
    }
  ]
}

const EmployeesReportsPrinting: SubServiceDetail = {
  slug: "employee-reports",
  title: "Employees Reports Printing",
  logo: "/services/reports.webp",
  image: "/services/images/reports.webp",
  summary: "Print official labour-related reports for employees, including salary certificates, employment status, and work permit details.",
  heroText: "Get accurate and official printed reports of employee records for HR, legal, and visa purposes.",
  description: "Employees Reports Printing service enables employers and authorized persons to obtain official printed reports related to their workforce. These reports include employment status, salary details, work permit information, and other labor-related documents required for audits, visa processing, or legal compliance.",
  serviceTypes: [
    {
      type: "New",
      description: "Request for newly generated employee reports."
    },
    {
      type: "Renew",
      description: "Reprint or renewal of expired reports for updated records."
    }
  ],
  content: [
    {
      heading: "Types of Reports Available:",
      list: [
        { text: "Employment Status Report", description: "Summary of employee’s current employment status with the company." },
        { text: "Salary Certificate", description: "Official document verifying the employee’s salary details." },
        { text: "Work Permit Details", description: "Report on the validity and status of the employee’s work permit." },
        { text: "Labour Card Information", description: "Details of the employee’s registered labour card and associated data." }
      ]
    },
    {
      heading: "Who Can Request:",
      paragraph: "Employers, HR departments, PRO officers, or authorized representatives with proper authorization can request these reports."
    },
    {
      heading: "Required Documents:",
      list: [
        { text: "Company Trade License Copy", description: "Valid license of the employer." },
        { text: "Authorized Letter or Power of Attorney", description: "Authorization for the person requesting the reports." },
        { text: "Employee Details", description: "Full name and labour card or passport number of employees." }
      ]
    },
    {
      heading: "Application Process:",
      list: [
        { text: "Submit Request", description: "Provide necessary employee and company details via the appropriate government portal or service center." },
        { text: "Verification", description: "Verification of company authorization and employee information." },
        { text: "Report Printing", description: "Official printed reports are issued and delivered to the requester." }
      ]
    },
    {
      heading: "Processing Time",
      paragraph: "Typically, reports are processed and ready within 1-3 working days."
    }
  ],
  faqs: [
    {
      question: "Can I request reports for all employees at once?",
      answer: "Yes, bulk requests are allowed provided you have authorization and provide complete employee information."
    },
    {
      question: "Are the printed reports considered official documents?",
      answer: "Yes, these reports are officially issued by the Ministry of Labour or authorized entities and are accepted for legal and administrative purposes."
    },
    {
      question: "How long does it take to get the reports?",
      answer: "Processing usually takes 1-3 business days depending on the volume and completeness of information."
    }
  ]
}

//BUSINESS SETUP SUBSERVICES
const MainlandCompanyFormation: SubServiceDetail = {
  slug: "mainland",
  title: "Mainland Company Formation",
  logo: "/services/mainland-company.webp",
  image: "/services/images/mainland.webp",
  summary: "Establish your company in the UAE mainland with full compliance and flexible business activities.",
  heroText: "Set up your mainland company with ease, access local markets, and benefit from a wide range of business activities and office options.",
  description: "Mainland company formation allows businesses to operate across the UAE with access to local markets and government contracts. It involves trade license issuance, legal approvals, and registration with the Department of Economic Development (DED). This setup offers freedom to do business anywhere in the UAE, hire staff freely, and benefit from flexible office location options.",
  serviceTypes: [
    {
      type: "New Company Setup",
      description: "Complete assistance with trade name reservation, initial approvals, legal documentation, and license issuance."
    },
    {
      type: "License Renewal",
      description: "Ensure uninterrupted business activity by renewing your mainland trade license before expiry."
    },
    {
      type: "License Amendment",
      description: "Modify your business activities, shareholding structure, or office address with official approval."
    }
  ] as ServiceType[],
  content: [
    {
      heading: "Why Choose Mainland Company Formation?",
      list: [
        { text: "Wider Market Access", description: "Operate freely across all UAE emirates and serve local clients without restrictions." },
        { text: "Flexible Business Activities", description: "Choose from thousands of business activities approved by DED." },
        { text: "Office Location Flexibility", description: "Rent office spaces anywhere in the mainland for your operations." }
      ]
    },
    {
      heading: "Required Documents",
      list: [
        { text: "Passport Copies", description: "Valid passports of all shareholders and managers." },
        { text: "No Objection Certificate (NOC)", description: "Required if the shareholder is on UAE residence visa under another sponsor." },
        { text: "Memorandum of Association (MOA)", description: "Drafted and notarized with company details and share distribution." }
      ]
    },
    {
      heading: "Process Steps",
      list: [
        { text: "Trade Name Reservation", description: "Select and reserve a unique trade name with DED." },
        { text: "Initial Approvals", description: "Submit documents for initial approvals and clearances." },
        { text: "Drafting MOA", description: "Prepare and notarize the company’s Memorandum of Association." },
        { text: "Lease Agreement", description: "Provide tenancy contract for the office space." },
        { text: "License Issuance", description: "Obtain the trade license and commercial registration certificate." }
      ]
    },
    {
      heading: "Fees & Processing Time",
      list: [
        { text: "License Fee", description: "Varies by activity, starting around AED 10,000 per year." },
        { text: "Service Charges", description: "Additional fees for document preparation and PRO services." },
        { text: "Processing Time", description: "Typically 2–3 weeks for full company formation." }
      ]
    }
  ] as ContentBlock[],
  faqs: [
    {
      question: "Can a foreigner own 100% of a mainland company?",
      answer: "Yes, under the recent UAE commercial companies law amendments, 100% foreign ownership is allowed for most mainland businesses."
    },
    {
      question: "Is a physical office mandatory for mainland companies?",
      answer: "Yes, you need a valid tenancy contract or Ejari to complete the licensing process."
    },
    {
      question: "Can I change business activities after company formation?",
      answer: "Yes, business activities can be amended through official procedures with the DED."
    }
  ] as FAQ[]
}

const FreeZoneCompanySetup: SubServiceDetail = {
  slug: "free-zone",
  title: "Free Zone Company Setup",
  logo: "/services/freezone-company.webp",
  image: "/services/images/freezone.webp",
  summary: "Launch your company in one of UAE’s free zones with 100% ownership and tax benefits.",
  heroText: "Benefit from zero taxes, full foreign ownership, and world-class facilities by setting up your company in a UAE free zone.",
  description: "Free zone company setup allows entrepreneurs and investors to establish businesses with full foreign ownership and tax exemptions. Each free zone caters to specific industries such as technology, media, logistics, or finance, offering specialized infrastructure and simplified business processes.",
  serviceTypes: [
    {
      type: "New Company Setup",
      description: "Complete support with registration, license issuance, and initial approvals in your selected free zone."
    },
    {
      type: "License Renewal",
      description: "Renew your free zone trade license annually to continue operations without interruptions."
    },
    {
      type: "License Amendment",
      description: "Modify your business activities, shareholder structure, or office facilities within the free zone."
    }
  ] as ServiceType[],
  content: [
    {
      heading: "Advantages of Free Zone Setup",
      list: [
        { text: "100% Foreign Ownership", description: "No local partner required, full control over your company." },
        { text: "Tax Exemptions", description: "Exempt from corporate and personal income taxes for a specific period." },
        { text: "Simplified Import/Export", description: "Easier customs procedures and duty exemptions for trading companies." }
      ]
    },
    {
      heading: "Popular Free Zones",
      list: [
        { text: "Dubai Multi Commodities Centre (DMCC)", description: "Ideal for commodities trading and finance." },
        { text: "Jebel Ali Free Zone (JAFZA)", description: "Logistics and industrial hubs with large-scale infrastructure." },
        { text: "Dubai Internet City (DIC)", description: "Technology and media companies." }
      ]
    },
    {
      heading: "Required Documents",
      list: [
        { text: "Passport Copies", description: "Valid passports of shareholders and managers." },
        { text: "Business Plan", description: "Brief description of business activities." },
        { text: "Proof of Address", description: "Residence proof of shareholders." }
      ]
    },
    {
      heading: "Setup Process",
      list: [
        { text: "Select Free Zone", description: "Choose a free zone that matches your business needs." },
        { text: "Reserve Company Name", description: "Apply for trade name reservation within the free zone." },
        { text: "Submit Documents", description: "Complete application with all required documents." },
        { text: "Obtain License", description: "Receive your free zone trade license and registration." }
      ]
    },
    {
      heading: "Fees & Processing Time",
      list: [
        { text: "License Fee", description: "Starts from AED 15,000 annually, depending on free zone and activity." },
        { text: "Service Fees", description: "Additional PRO and document processing fees." },
        { text: "Processing Time", description: "Usually 1–2 weeks for new company formation." }
      ]
    }
  ] as ContentBlock[],
  faqs: [
    {
      question: "Can I sponsor visas with a free zone company?",
      answer: "Yes, most free zones allow company owners to sponsor a limited number of visas depending on office space and license type."
    },
    {
      question: "Do I need a local partner in free zones?",
      answer: "No, free zone companies offer 100% foreign ownership without a local sponsor."
    },
    {
      question: "Are free zone companies allowed to trade outside the free zone?",
      answer: "Free zone companies can trade within the free zone and internationally, but trading directly in the mainland requires a local distributor or mainland license."
    }
  ] as FAQ[]
}

const LicenseManagementServices: SubServiceDetail = {
  slug: "trade-license",
  title: "License Renewal, Cancellation & Amendments",
  logo: "/services/license-management.webp",
  image: "/services/images/trade.webp",
  summary: "Complete services for renewing, cancelling, or amending business licenses across UAE jurisdictions.",
  heroText: "Keep your business compliant with timely license renewals, hassle-free cancellations, and official amendments.",
  description: "Our license management services help businesses maintain their legal standing by facilitating smooth renewal, cancellation, or amendment of trade licenses. Whether you need to update your business activities, cancel an old license, or renew for the coming year, we provide end-to-end assistance.",
  serviceTypes: [
    {
      type: "Renewal",
      description: "Renew your existing trade license to continue business operations legally."
    },
    {
      type: "Cancellation",
      description: "Cancel your trade license if you are closing or ceasing business."
    },
    {
      type: "Amendment",
      description: "Make changes to your trade license details such as business activities, ownership, or location."
    }
  ] as ServiceType[],
  content: [
    {
      heading: "License Renewal",
      paragraph: "Renewing your trade license ensures uninterrupted business operations and compliance with UAE laws. Renewal requires submitting documents, paying fees, and updating your business information if needed."
    },
    {
      heading: "License Cancellation",
      paragraph: "License cancellation is necessary when you decide to close your business or stop trading. It officially removes your business from the government registry and stops all license fees."
    },
    {
      heading: "License Amendments",
      paragraph: "Amendments allow you to update your license details such as changing your business activity, adding partners, or relocating your office."
    },
    {
      heading: "Process and Fees",
      list: [
        { text: "Submission of Request", description: "Provide necessary documents and application forms." },
        { text: "Fee Payment", description: "Pay the required government fees depending on the license type." },
        { text: "Processing Time", description: "Usually 3–7 business days for renewals or amendments, 5–10 days for cancellations." }
      ]
    }
  ] as ContentBlock[],
  faqs: [
    {
      question: "Can I renew my license without visiting government offices?",
      answer: "Yes, many renewals and amendments can be completed online through government portals."
    },
    {
      question: "What documents are needed for cancellation?",
      answer: "Original trade license, shareholder approval, and clearance certificates are typically required."
    },
    {
      question: "How long does amendment approval take?",
      answer: "Amendments are usually approved within 3 to 7 business days."
    }
  ] as FAQ[]
}

const MOAIssuance: SubServiceDetail = {
  slug: "moa-issuance",
  title: "Memorandum of Association (MOA) Issuance",
  logo: "/services/moa-issuance.webp",
  image: "/services/images/moa.webp",
  summary: "Professional drafting and notarization of your company's Memorandum of Association for legal compliance.",
  heroText: "Secure your company’s legal foundation with expertly drafted and government-approved MOAs.",
  description: "The Memorandum of Association (MOA) is a key legal document defining the company’s structure, shareholder rights, and business scope. Our services include MOA drafting, review, and notarization to ensure your company complies with UAE laws and regulations.",
  serviceTypes: [
    {
      type: "Drafting",
      description: "Prepare a customized MOA reflecting shareholder agreements, capital distribution, and business activities."
    },
    {
      type: "Review & Amendments",
      description: "Review existing MOA documents and suggest or implement amendments as needed."
    },
    {
      type: "Notarization",
      description: "Handle government notarization and legalization of the MOA document."
    }
  ] as ServiceType[],
  content: [
    {
      heading: "Importance of MOA",
      paragraph: "The MOA outlines the legal framework of your company including shareholders’ rights, company objectives, and management responsibilities. It is a mandatory document for company registration in the UAE."
    },
    {
      heading: "Key MOA Clauses",
      list: [
        { text: "Share Capital", description: "Defines the total capital and shareholders’ contributions." },
        { text: "Shareholders’ Rights", description: "Details ownership percentages and voting rights." },
        { text: "Business Activities", description: "Specifies permitted commercial activities." },
        { text: "Management", description: "Outlines company management and decision-making process." }
      ]
    },
    {
      heading: "Process of MOA Issuance",
      list: [
        { text: "Drafting", description: "Customized to your business structure and needs." },
        { text: "Shareholder Approval", description: "All shareholders must approve the MOA." },
        { text: "Notarization", description: "Official government notarization completes the process." }
      ]
    }
  ] as ContentBlock[],
  faqs: [
    {
      question: "Is MOA mandatory for all company types?",
      answer: "Yes, MOA is required for mainland companies and many free zone companies during registration."
    },
    {
      question: "Can MOA be amended after company formation?",
      answer: "Yes, amendments are possible but require shareholder approval and government consent."
    },
    {
      question: "Who drafts the MOA?",
      answer: "Our legal experts draft the MOA tailored to your company’s needs and UAE regulations."
    }
  ] as FAQ[]
}

const PROServices: SubServiceDetail = {
  slug: "pro-services",
  title: "PRO Services",
  logo: "/services/pro-services.webp",
  image: "/services/images/pro.webp",
  summary: "Efficient public relations officer (PRO) services to manage government paperwork and approvals.",
  heroText: "Let our experienced PRO team handle your government transactions, documentation, and approvals smoothly.",
  description: "PRO services assist companies with government liaison work such as visa processing, labor approvals, trade license renewals, document attestations, and other administrative tasks. Our PRO agents are knowledgeable in UAE government procedures ensuring quick and accurate service.",
  serviceTypes: [
    {
      type: "Visa Processing",
      description: "Assist with employment, family, and visit visas including applications and cancellations."
    },
    {
      type: "Trade License Renewal",
      description: "Manage timely renewal of business licenses to maintain compliance."
    },
    {
      type: "Document Attestation",
      description: "Handle notarization and attestation of company and personal documents."
    }
  ] as ServiceType[],
  content: [
    {
      heading: "Why Use PRO Services?",
      paragraph: "PRO services save you time and reduce errors by managing complex government processes and ensuring documentation meets all requirements."
    },
    {
      heading: "Common PRO Tasks",
      list: [
        { text: "Visa Applications & Cancellations", description: "Submission and follow-up with immigration authorities." },
        { text: "License Renewals", description: "Ensuring timely submission and fee payments." },
        { text: "Document Attestation", description: "Official certification of documents for government use." }
      ]
    },
    {
      heading: "Process & Fees",
      list: [
        { text: "Service Agreement", description: "Define scope and fees with client." },
        { text: "Document Collection & Submission", description: "Gather required documents and submit to authorities." },
        { text: "Follow-Up", description: "Track applications and provide status updates." }
      ]
    }
  ] as ContentBlock[],
  faqs: [
    {
      question: "What is a PRO?",
      answer: "A PRO is a Public Relations Officer who manages communication and paperwork between businesses and government entities."
    },
    {
      question: "Can PROs help with visa applications?",
      answer: "Yes, PROs handle visa processing, including family, employment, and visit visas."
    },
    {
      question: "Do PRO services guarantee approval?",
      answer: "While PROs facilitate the process and ensure correct documentation, approvals are subject to government discretion."
    }
  ] as FAQ[]
}

const OfficeSpaceEjari: SubServiceDetail = {
  slug: "office-space-and-ejari",
  title: "Office Space & Ejari Services",
  logo: "/services/office-ejari.webp",
  image: "/services/images/office.webp",
  summary: "Find and lease office space with Ejari registration for legal tenancy contracts.",
  heroText: "Secure your office space with legally registered Ejari contracts compliant with Dubai regulations.",
  description: "Office space leasing is a key requirement for mainland company formation and license renewals. Ejari is the official online system for registering tenancy contracts in Dubai, ensuring transparency and legal protection for both landlords and tenants.",
  serviceTypes: [
    {
      type: "Office Space Leasing",
      description: "Assistance in finding suitable office space according to business requirements."
    },
    {
      type: "Ejari Registration",
      description: "Register tenancy contracts with Ejari to obtain legal proof of lease."
    }
  ] as ServiceType[],
  content: [
    {
      heading: "Why Ejari Registration is Important",
      paragraph: "Ejari registration is mandatory for all tenancy contracts in Dubai and required by government authorities for trade license issuance and visa applications."
    },
    {
      heading: "Required Documents",
      list: [
        { text: "Tenancy Contract", description: "Signed lease agreement between landlord and tenant." },
        { text: "Passport Copies", description: "Valid passports of the tenant and landlord." },
        { text: "Emirates ID Copies", description: "For both tenant and landlord if available." }
      ]
    },
    {
      heading: "Ejari Registration Process",
      list: [
        { text: "Submit Documents", description: "Provide lease contract and ID copies to Ejari portal." },
        { text: "Verification", description: "Ejari verifies tenancy details with landlord and authorities." },
        { text: "Issuance of Ejari Certificate", description: "Official proof of tenancy contract is generated." }
      ]
    },
    {
      heading: "Fees & Timeline",
      list: [
        { text: "Ejari Registration Fee", description: "Approx. AED 220 per contract." },
        { text: "Processing Time", description: "Usually 1–2 working days." }
      ]
    }
  ] as ContentBlock[],
  faqs: [
    {
      question: "Is Ejari registration mandatory for businesses?",
      answer: "Yes, Ejari is required to legally prove tenancy for trade license and visa purposes."
    },
    {
      question: "Can Ejari be registered online?",
      answer: "Yes, the Ejari system is fully online with electronic document submission."
    },
    {
      question: "What documents do I need for Ejari?",
      answer: "Tenancy contract, passport copies, and Emirates ID copies."
    }
  ] as FAQ[]
}

const BankAccountSetup: SubServiceDetail = {
  slug: "bank-account",
  title: "Bank Account Setup",
  logo: "/services/bank-account.webp",
  image: "/services/images/bank.webp",
  summary: "Assistance with opening corporate bank accounts in the UAE with leading local and international banks.",
  heroText: "Open your company’s bank account hassle-free with expert guidance and document preparation.",
  description: "Opening a corporate bank account in the UAE requires extensive documentation and compliance with bank regulations. Our service supports document preparation, submission, and liaison with banks to facilitate quick approvals and account activation.",
  serviceTypes: [
    {
      type: "Account Opening",
      description: "Assist with choosing the right bank and submitting all required documents."
    },
    {
      type: "Document Preparation",
      description: "Ensure all legal and company documents meet bank requirements."
    },
    {
      type: "Follow-Up & Approval",
      description: "Liaise with banks on your behalf to track and expedite account approval."
    }
  ] as ServiceType[],
  content: [
    {
      heading: "Requirements for Corporate Bank Account",
      list: [
        { text: "Valid Trade License", description: "Company license issued by DED or free zone authority." },
        { text: "Company MOA & Shareholder Details", description: "Memorandum of Association and passports of shareholders." },
        { text: "Board Resolution", description: "Authorizing company representatives to open and operate accounts." },
        { text: "Proof of Address", description: "Of company and shareholders, including utility bills or tenancy contracts." }
      ]
    },
    {
      heading: "Process of Account Opening",
      list: [
        { text: "Select Bank & Account Type", description: "Based on business needs, choose suitable banking solutions." },
        { text: "Prepare Documentation", description: "Gather and notarize required documents." },
        { text: "Submit Application", description: "File application and documents with the bank." },
        { text: "Interview & Approval", description: "Attend bank meetings or interviews if required for verification." },
        { text: "Account Activation", description: "Receive account details and activate online banking." }
      ]
    },
    {
      heading: "Common Banks in UAE",
      list: [
        { text: "Emirates NBD", description: "One of the largest UAE banks offering corporate accounts." },
        { text: "Abu Dhabi Commercial Bank (ADCB)", description: "Popular bank with wide corporate banking services." },
        { text: "Mashreq Bank", description: "Offers specialized SME and corporate banking solutions." }
      ]
    }
  ] as ContentBlock[],
  faqs: [
    {
      question: "How long does bank account opening take?",
      answer: "Typically 2 to 4 weeks, depending on bank and document completeness."
    },
    {
      question: "Can foreigners open bank accounts in the UAE?",
      answer: "Yes, with a valid trade license and residency visa, foreigners can open corporate accounts."
    },
    {
      question: "Are there minimum deposit requirements?",
      answer: "Some banks require a minimum balance or deposit; requirements vary by bank."
    }
  ] as FAQ[]
}

//DOCUMENT AND LEGAL SERVICES
const CertificateAttestation: SubServiceDetail = {
  slug: "certificate-attestation",
  title: "Certificate Attestation",
  logo: "/services/attestation.webp",
  image: "/services/images/certificate.webp",
  summary: "Authenticate your personal or educational certificates for use in the UAE.",
  heroText: "Ensure valid, stamped, and accepted documents through Ministry, MOFA, embassy and UAE attestation.",
  description: "Certificate Attestation ensures that original documents—such as educational degrees, birth certificates, marriage certificates, or commercial papers—are officially recognized in the UAE. We handle country-of-origin attestations, embassy legalization, MOFA processing, and final UAE stamping, saving you time and hassle.",
  serviceTypes: [
    { type: "Personal Documents", description: "Birth, marriage, degree, and identity certificates." },
    { type: "Commercial Documents", description: "Trade licenses, company MOAs, power of attorney, and contracts." }
  ] as ServiceType[],
  content: [
    {
      heading: "Attestation Steps",
      list: [
        { text: "Issuing Country Attestation", description: "Notarization and legalization in origin country." },
        { text: "UAE Embassy Attestation", description: "Recognition by UAE embassy abroad." },
        { text: "MOFA Attestation", description: "Final clearance from the UAE Ministry of Foreign Affairs." }
      ]
    },
    {
      heading: "Required Documents",
      list: [
        { text: "Original Certificate", description: "Clean and current copy." },
        { text: "Passport Copy", description: "Holder’s passport copy." },
        { text: "Translation (if not English/Arabic)", description: "Certified translation if required." }
      ]
    },
    {
      heading: "Processing & Fees",
      list: [
        { text: "Timeline", description: "4–10 business days depending on type and country." },
        { text: "Pricing", description: "From AED 200 per document; embassy/consulate fees additional." }
      ]
    }
  ] as ContentBlock[],
  faqs: [
    { question: "Can I use a copy or do I need originals?", answer: "Originals are strongly preferred; certified copies may be accepted for some services." },
    { question: "Do all countries require embassy attestation?", answer: "Yes, for documents issued outside UAE embassy attestation is mandatory before MOFA." }
  ] as FAQ[]
};

const LegalTranslation: SubServiceDetail = {
  slug: "legal-translation",
  title: "Legal Translation",
  logo: "/services/legal-translation.webp",
  image: "/services/images/translation.webp",
  summary: "Certified translation of your official documents by Ministry‑approved translators.",
  heroText: "Translate documents like contracts, affidavits, and certificates with legal accuracy and certification.",
  description: "Our Legal Translation service provides certified translations of legal, personal, and corporate documents in Arabic and English—done by UAE Ministry of Justice–approved translators. These translations are accepted for government use, court proceedings, visa applications, and attestations.",
  serviceTypes: [
    { type: "Arabic ←→ English", description: "Standard translation in both directions." },
    { type: "Other Languages", description: "French, Russian, Hindi, Urdu, Farsi, etc." }
  ] as ServiceType[],
  content: [
    {
      heading: "Why Legal Translation?",
      paragraph: "Required for any non‑Arabic documents submitted to UAE authorities."
    },
    {
      heading: "Our Process",
      list: [
        { text: "Document Review", description: "Assess format, content, and technical terms." },
        { text: "Certified Translation", description: "Translation by Ministry‑approved experts." },
        { text: "Proofreading", description: "Accuracy and legal consistency ensured." },
        { text: "Stamping & Certification", description: "Includes translator’s stamp for acceptance." }
      ]
    },
    {
      heading: "Timeline & Fees",
      list: [
        { text: "Standard", description: "1–2 business days." },
        { text: "Urgent", description: "Same‑day service available." },
        { text: "Pricing", description: "From AED 100 per page; bulk discounts available." }
      ]
    }
  ] as ContentBlock[],
  faqs: [
    { question: "Are non-certified translations accepted?", answer: "No – only stamped legal translations are accepted by UAE courts and authorities." },
    { question: "Can you handle international languages?", answer: "Yes, we support dozens of languages with certification." }
  ] as FAQ[]
};

const NotaryServices: SubServiceDetail = {
  slug: "notary-services",
  title: "Notary Services",
  logo: "/services/notary.webp",
  image: "/services/images/notary.webp",
  summary: "Official notarization of your documents for legal validity in UAE.",
  heroText: "Get documents legally notarized by UAE Notary Public offices — in‑person or through us.",
  description: "Our Notary Services include witnessing signatures, certifying affidavits, power of attorney, contracts, and other documents at UAE Notary Public offices. We ensure accuracy, registry, and acceptance by authorities or courts.",
  serviceTypes: [
    { type: "Document Notarization", description: "Notary witnessing and stamping." },
    { type: "Proxy Signatory", description: "Represent you at Notary Public if you can’t attend." }
  ] as ServiceType[],
  content: [
    {
      heading: "Commonly Notarized Documents",
      list: [
        { text: "Power of Attorney", description: "Granting authority legal recognition." },
        { text: "Affidavits & Declarations", description: "Sworn statements before notary." },
        { text: "Contracts & Agreements", description: "Ensures authenticity of signatures." }
      ]
    },
    {
      heading: "How It Works",
      list: [
        { text: "Document Preparation", description: "Review and notarization-ready format." },
        { text: "Notary Appointment", description: "Book and attend notary session." },
        { text: "Stamping & Copies", description: "Notary stamp, registry, and certified copies." }
      ]
    },
    {
      heading: "Fees & Timing",
      list: [
        { text: "Standard", description: "1–2 working days." },
        { text: "Fees", description: "From AED 150 per document depending on type." }
      ]
    }
  ] as ContentBlock[],
  faqs: [
    { question: "Do I need to personally attend?", answer: "If you can’t, we can act on your behalf with POA." },
    { question: "Are notary stamps accepted by all UAE authorities?", answer: "Yes, official Notary Public stamps are recognized nationwide." }
  ] as FAQ[]
};

const PowerOfAttorneyDrafting: SubServiceDetail = {
  slug: "power-of-attorney",
  title: "Power of Attorney Drafting",
  logo: "/services/poa-drafting.webp",
  image: "/services/images/power.webp",
  summary: "Custom‑drafted Power of Attorney documents prepared and attested.",
  heroText: "Authorize others to act on your behalf with legally drafted and attested POAs.",
  description: "Our Power of Attorney (POA) drafting service includes preparation of clear, legally binding documents tailored for specific uses—such as property management, bank transactions, or embassy representation. We draft, notarize, and attest these documents to ensure legal validity in UAE and abroad.",
  serviceTypes: [
    { type: "General POA", description: "Broad powers in multiple jurisdictions." },
    { type: "Specific POA", description: "Limited to a particular task or transaction." }
  ] as ServiceType[],
  content: [
    {
      heading: "POA Types",
      list: [
        { text: "General", description: "Wide legal authority across multiple actions." },
        { text: "Specific", description: "Limited to a defined purpose." }
      ]
    },
    {
      heading: "Drafting Process",
      list: [
        { text: "Requirement Analysis", description: "Understand your desired scope of authority." },
        { text: "Draft Document", description: "Prepare a legal POA." },
        { text: "Notarization & Attestation", description: "Notarize and then attest through embassy/MOFA if needed." }
      ]
    },
    {
      heading: "Fees & Time",
      list: [
        { text: "Standard POA", description: "1–2 working days." },
        { text: "Premium", description: "Same‑day option available." },
        { text: "Pricing", description: "From AED 300 per document (notary + attestation extra)." }
      ]
    }
  ] as ContentBlock[],
  faqs: [
    { question: "What’s the difference between general and specific POA?", answer: "General POA grants broad powers; specific POA covers one or few defined purposes." },
    { question: "Does POA work outside the UAE?", answer: "Yes, but must be attested by home‑country embassy and UAE MOFA." }
  ] as FAQ[]
};

const AffidavitIssuance: SubServiceDetail = {
  slug: "affidavit",
  title: "Affidavit Issuance",
  logo: "/services/affidavit.webp",
  image: "/services/images/affidavit.webp",
  summary: "Professional preparation and issuance of sworn affidavits for legal procedures.",
  heroText: "Get legally valid affidavits tailored to your specific declarations, notarized and attested.",
  description: "Our Affidavit Issuance service helps clients draft, notarize, and attest sworn statements (affidavits)—such as declarations of identity, lost items, or statements of fact—for use in the UAE’s legal, immigration, or administrative processes.",
  serviceTypes: [
    { type: "Personal Affidavit", description: "For declarations, lost documents, name change, status confirmation." },
    { type: "Corporate Affidavit", description: "For company statements, director or shareholder declarations." }
  ] as ServiceType[],
  content: [
    {
      heading: "Common Affidavit Use Cases",
      list: [
        { text: "Lost Passport Declaration", description: "Sworn statement for embassy or immigration." },
        { text: "Name Correction", description: "To correct official spelling errors." },
        { text: "Corporate Statements", description: "Used in MOHRE, DED, or bank procedures." }
      ]
    },
    {
      heading: "Issuance Steps",
      list: [
        { text: "Draft Statement", description: "Based on purpose and legal requirements." },
        { text: "Notary Signing", description: "Sworn before notary public." },
        { text: "Attestation", description: "Embassy and MOFA attestation if needed." }
      ]
    },
    {
      heading: "Timeline & Costs",
      list: [
        { text: "Standard", description: "1–2 working days." },
        { text: "Fees", description: "From AED 200 per affidavit; embassy/MOFA fees additional." }
      ]
    }
  ] as ContentBlock[],
  faqs: [
    { question: "What’s the difference between an affidavit and a regular letter?", answer: "An affidavit is sworn and legally binding; a letter is not." },
    { question: "Do I always need MOFA attestation?", answer: "Only if the affidavit is used outside UAE or by other authorities." }
  ] as FAQ[]
};

const MemorandumDrafting: SubServiceDetail = {
  slug: "memorandum",
  title: "Memorandum Drafting",
  logo: "/services/memorandum.webp",
  image: "/services/images/memorandum.webp",
  summary: "Expert drafting of internal memorandums, circulars, or corporate directives.",
  heroText: "Professional drafting and formatting of internal memos, board circulars, and company directives.",
  description: "Our Memorandum Drafting service provides expertly written internal communications—such as memos, board circulars, resolutions, or corporate directives—tailored for professional tone, legal clarity, and compliance with UAE corporate governance standards.",
  serviceTypes: [
    { type: "Internal Memo", description: "Day‑to‑day company announcements or policies." },
    { type: "Board Circular", description: "Formal communications to board members on decisions." }
  ] as ServiceType[],
  content: [
    {
      heading: "Types of Memorandums",
      list: [
        { text: "Internal Memos", description: "Guidelines, announcements, HR or policy updates." },
        { text: "Board Circulars", description: "Legal resolutions, meeting summaries, notices." }
      ]
    },
    {
      heading: "Drafting Process",
      list: [
        { text: "Define Purpose", description: "Identify the target audience and intention." },
        { text: "Write & Format", description: "Professional structure with clarity." },
        { text: "Review & Finalize", description: "Ensure alignment with legal and corporate standards." }
      ]
    },
    {
      heading: "Timeline & Fees",
      list: [
        { text: "Standard Memo", description: "1–2 business days." },
        { text: "Board Circular", description: "2–3 business days depending on complexity." },
        { text: "Pricing", description: "From AED 250 per document." }
      ]
    }
  ] as ContentBlock[],
  faqs: [
    { question: "Can you help with formal board resolutions?", answer: "Yes, we can draft circulars, resolutions, and board notices." },
    { question: "Are memos legally binding?", answer: "Internal memos typically set internal policies; board circulars may have legal implications." }
  ] as FAQ[]
};

//AMER SERVICES
const AmerServices: Service = {
  id: "amer-services",
  slug: "amer-services",
  title: "Amer Services",
  imageUrl: "/services/amer.webp", // Specific hero image for Amer Services page
  imageAlt: "Amer Services logo and documents",
  heroExcerpt: "In the vibrant and ever-growing landscape of the United Arab Emirates, where efficiency, innovation, and progress are hallmarks of development, Amer Services has emerged as a trusted partner for individuals and businesses navigating the country’s government-related procedures. Designed to simplify and enhance access to key services, Amer stands as a bridge between the public and UAE’s vast administrative ecosystem.",
  summary: "Comprehensive government service solutions in Dubai.",
  description: "Amer is a government-licensed service provider that facilitates a wide spectrum of immigration and residency-related procedures in collaboration with the General Directorate of Residency and Foreigners Affairs (GDRFA). It was launched as part of the UAE’s ongoing initiative to transform traditional government services into smart, customer-focused experiences. With the introduction of Amer centers, the days of visiting multiple government departments for document processing are over. Amer streamlines the process by offering integrated solutions in a modern, customer-friendly environment, where applications are processed quickly, accurately, and securely.",
  category: "visa",
  subServices: [
    GoldenVisa, FamilyVisa, EmploymentVisa, TouristVisa, VisitVisa, EmiratedId, MedicalServices, ChangeStatus, DataModification
  ] as SubServiceDetail[],
  faqs: [
    {
      question: "What is Amer Services?",
      answer: "Amer Centers are authorized service centers by the GDRFA (General Directorate of Residency and Foreigners Affairs) in Dubai, providing streamlined government services related to visas, residency, and other official documents."
    },
    {
      question: "Who can use Amer Services?",
      answer: "Amer Services are available to everyone in the UAE, including citizens, residents, and visitors, for their respective government transaction needs."
    },
    {
      question: " Why should I use an Amer Service center instead of going directly to a government department?",
      answer: "Amer centers offer several advantages - Convenience: Multiple services under one roof. Efficiency: Trained staff help ensure correct documentation, minimizing errors and delays. Accessibility: Numerous centers widely located throughout the UAE. Expert Guidance: Staff are up-to-date on regulations and procedures. Comfort: Designed to provide a more comfortable and efficient experience."
    },
    {
      question: "Do I need to make an appointment before visiting an Amer center?",
      answer: "While not always mandatory, it is highly recommended to check if your chosen Amer center offers appointment booking services. Booking an appointment can significantly reduce your waiting time."
    },
    {
      question: "Can I track my application status online?",
      answer: "Yes. Amer offers digital tracking for many services. You will receive a reference number which can be used to check the status of your visa, ID, or application online."
    }
  ] as FAQ[]
}

//TAHSEEL SERVICES
const TasheelServices: Service = {
  id: "tasheel-services",
  slug: "tasheel-services",
  title: "Tasheel Services",
  imageUrl: "/services/tasheel.webp",
  imageAlt: "Tasheel Services logo and UAE labor documents",
  heroExcerpt:
    "Tasheel Services are designed to simplify and streamline all labor-related transactions in the UAE. Whether you're opening a new establishment file, applying for a work permit, or renewing a labor card, Tasheel serves as your authorized digital gateway to the Ministry of Human Resources and Emiratisation (MOHRE).",
  summary: "Trusted labor and employment documentation services in the UAE.",
  description:
    "Tasheel is a government-backed service platform that enables companies, PROs, and individuals to complete labor-related transactions with the Ministry of Human Resources and Emiratisation (MOHRE). The system centralizes processes such as work permit issuance, job offer letters, contract submissions, and labor card renewals. With Tasheel centers operating across the UAE, the aim is to digitize and simplify employment procedures while reducing time, effort, and errors. Our team provides end-to-end support for all Tasheel services, ensuring smooth compliance with UAE labor laws.",
  category: "labour",
  subServices: [ 
    WorkPermit, NewSignatureCardCreation, NewEstablishmentFileOpening, NewJobOfferLetter, MOLInsurance, LabourContractSubmission, PROCardLabour, EmployeesReportsPrinting
  ],
  faqs: [
    {
      question: "What is Tasheel?",
      answer:
        "Tasheel is an online government system developed by the UAE Ministry of Human Resources and Emiratisation (MOHRE) to streamline labor transactions like job offers, work permits, and labor contracts."
    },
    {
      question: "Can individuals use Tasheel services?",
      answer:
        "Yes, individuals including employers, PROs, and sponsored workers can use Tasheel services with proper authorization. We guide both companies and individuals in accessing the right services."
    },
    {
      question: "What documents are needed to open an establishment file?",
      answer:
        "You typically need a valid trade license, passport copy of the owner, tenancy contract, and Emirates ID. We ensure your file is compliant and submitted correctly the first time."
    },
    {
      question: "How long does it take to get a work permit?",
      answer:
        "With complete documents, a new work permit can be issued within 3–5 working days. We handle the paperwork, payment, and follow-ups for quicker turnaround."
    },
    {
      question: "Can I cancel a work permit if the employee hasn’t started yet?",
      answer:
        "Yes, cancellation is possible. It must be done before visa stamping or labor card issuance to avoid fines. We ensure timely and clean processing through Tasheel channels."
    }
  ] as FAQ[]
}

//BUSINESS SETUP SERVICES
const BusinessSetupServices: Service = {
  id: "business-setup-services",
  slug: "business-setup-services",
  title: "Business Setup Services",
  imageUrl: "/services/business.webp",
  imageAlt: "Business Setup Services illustration",
  heroExcerpt: "Comprehensive business setup solutions across UAE mainland, free zones, and offshore jurisdictions, including licenses, PRO, office space, and banking.",
  summary: "Complete support for company formation, licensing, government approvals, office leasing, and banking in the UAE.",
  description: "Our Business Setup Services cover all aspects of establishing and maintaining your company in the UAE. Whether you plan to form a mainland company, free zone entity, or offshore firm, we provide expert guidance and hands-on support through the entire process, including licensing, PRO services, office space procurement, and bank account setup.",
  category: "business-setup",
  subServices: [
    MainlandCompanyFormation,
    FreeZoneCompanySetup,
    LicenseManagementServices,
    MOAIssuance,
    PROServices,
    OfficeSpaceEjari,
    BankAccountSetup
  ] as SubServiceDetail[],
  faqs: [
    {
      question: "What types of companies can I set up in the UAE?",
      answer: "You can form mainland companies, free zone entities, or offshore companies, each offering different benefits and regulatory requirements."
    },
    {
      question: "Do you assist with visa processing for company owners?",
      answer: "Yes, our PRO services include visa applications and processing for shareholders, employees, and dependents."
    },
    {
      question: "Is a physical office mandatory for all company types?",
      answer: "Mainland companies require a physical office and Ejari registration. Free zone and offshore companies have varying requirements."
    },
    {
      question: "How long does the company formation process take?",
      answer: "It varies by jurisdiction but typically ranges from 1 to 4 weeks depending on the company type and completeness of documents."
    },
    {
      question: "Can you help with bank account opening?",
      answer: "Yes, we assist in preparing documents and liaising with banks for smooth corporate account setup."
    }
  ] as FAQ[]
}

//DOCUMENT AND LEGAL SERVICES
const DocumantLegalSerivces: Service = {
  id: "document-legal-services",
  slug: "document-legal-services",
  title: "Document & Legal Services",
  imageUrl: "/services/legal.webp", // Specific hero image for this category
  imageAlt: "Documents, legal papers, and stamps symbolizing verification and translation",
  heroExcerpt: "Navigating the UAE’s official and legal processes requires trusted document handling. Our Document & Legal Services simplify certification, translation, and attestation — ensuring your documents meet all legal and governmental standards in the UAE and abroad.",
  summary: "Certified attestation, legal translation, and document processing services across the UAE.",
  description: "Document & Legal Services offer essential support for individuals and businesses needing official recognition or legal readiness for their documents. From attesting academic and personal records to providing certified legal translations, these services ensure compliance with UAE regulations and international standards. Our experts handle the process end-to-end, including notarization, MOFA attestation, embassy legalization, and legal document preparation, giving you peace of mind with speed, accuracy, and reliability.",
  category: "legal",
  subServices: [
    CertificateAttestation,
    LegalTranslation,
    NotaryServices,
    PowerOfAttorneyDrafting,
    AffidavitIssuance,
    MemorandumDrafting
  ] as SubServiceDetail[],
  faqs: [
    {
      question: "What are Document & Legal Services?",
      answer: "These are professional services that involve the authentication, translation, or drafting of official documents for legal, governmental, or international use — including attestation, notarization, legal translation, and document certification."
    },
    {
      question: "Which documents can be attested?",
      answer: "Common documents include educational certificates, marriage and birth certificates, employment contracts, company documents, and power of attorney papers — for both personal and corporate use."
    },
    {
      question: "What is legal translation?",
      answer: "Legal translation refers to the certified translation of official documents — such as contracts, court rulings, or academic records — done by a UAE Ministry of Justice-approved legal translator to be accepted by UAE courts and government bodies."
    },
    {
      question: "Do I need MOFA attestation for all documents?",
      answer: "MOFA (Ministry of Foreign Affairs) attestation is often required if a document is to be used for official purposes in the UAE. After local embassy attestation (in the country of origin), MOFA attestation completes the legal recognition within the UAE."
    },
    {
      question: "How long does the process take?",
      answer: "Processing times vary depending on document type and origin. Standard UAE-based documents may take 1–3 working days, while international attestations (including embassy and MOFA steps) may take 4–10 working days."
    }
  ] as FAQ[]
};

//RTA SERVICES
const RTAServices:Service = {
  id: "rta-services",
  slug: "rta-services",
  title: "RTA Services",
  imageUrl: "/services/rta.webp",
  imageAlt: "RTA Dubai logo and vehicles",
  heroExcerpt: "RTA Services in Dubai represent the core of smart, seamless transportation and mobility solutions in the city. As part of Dubai’s visionary Smart Government initiative, RTA provides a range of services from licensing and vehicle registration to parking and public transport solutions, ensuring efficient mobility and enhanced quality of life for residents and visitors.",
  summary: "Smart transportation, licensing, and vehicle solutions in Dubai.",
  description: "The Roads and Transport Authority (RTA) is responsible for planning and providing an integrated transport system in the Emirate of Dubai. RTA offers services like issuing and renewing driving licenses, vehicle registration, parking permits, Salik (toll) management, and public transport services. With a focus on sustainability and innovation, RTA aims to streamline procedures and make transportation more accessible, safe, and user-friendly through digital transformation and customer-centric service delivery.",
  category: "transportation",
  subServices: [
    {
      title: "Trade License Update",
      description: "Update your existing trade license information such as activity changes, partner details, or address amendments through hassle-free support."
    },
    {
      title: "Traffic Fine Payment",
      description: "Quickly settle your outstanding traffic fines across all Emirates with accurate record tracking and payment confirmations."
    },
    {
      title: "Driving License Renewal",
      description: "Renew your UAE driving license efficiently with document verification, eye test guidance, and application submission support."
    },
    {
      title: "Mulkiya Renewal",
      description: "Easily renew your vehicle registration (Mulkiya) and avoid fines. We handle paperwork, insurance linkage, and RTA coordination."
    },
    {
      title: "Vehicle Registration",
      description: "Register new or used vehicles under your name with support for insurance, inspection, and official documentation processing."
    },
    {
      title: "Vehicle Transfer",
      description: "Legally transfer vehicle ownership between individuals or companies, ensuring RTA approval and clearance of all dues."
    },
    {
      title: "Vehicle Ownership Certificate",
      description: "Obtain official ownership certificates for your vehicle for export, sale, or insurance purposes through authorized channels."
    },
    {
      title: "Possession Certificate",
      description: "Get a possession certificate for your vehicle to prove lawful custody, especially for temporary or informal transfers."
    },
    {
      title: "NOC for All Transactions",
      description: "Issue No Objection Certificates (NOCs) for services like vehicle export, loan clearance, insurance, and company transfers."
    },
    {
      title: "Extra Load Permits",
      description: "Apply for permits to carry extra loads on commercial vehicles, including approvals for route access and RTA regulations."
    },
    {
      title: "Salik Activation and Recharge",
      description: "Activate new Salik tags and recharge your Salik account for seamless toll gate access across Dubai's major highways."
    }
  ],
  faqs: [
    {
      question: "What is RTA?",
      answer: "The Roads and Transport Authority (RTA) is the government entity in Dubai responsible for managing transportation and road infrastructure, providing a wide range of services related to mobility, licensing, and traffic systems.",
    },
    {
      question: "How can I renew my driving license in Dubai?",
      answer: "You can renew your driving license through the RTA website, RTA app, or by visiting any RTA service center. You’ll need a valid Emirates ID, a recent eye test, and a credit/debit card for the fee.",
    },
    {
      question: "What is Salik and how does it work?",
      answer: "Salik is Dubai’s electronic toll collection system. It uses RFID technology to deduct toll charges automatically when you pass through toll gates. You can manage your Salik account online or via the RTA app.",
    },
    {
      question: "Can I register my vehicle online?",
      answer: "Yes, RTA allows you to register and renew your vehicle registration through their digital channels, provided your vehicle has passed the necessary inspection and you’ve cleared any outstanding fines.",
    },
    {
      question: "How do I apply for a parking permit?",
      answer: "Parking permits can be applied for online through RTA’s official portal or app. You’ll need to provide your Emirates ID, tenancy contract or title deed, and vehicle ownership documents.",
    },
  ] as FAQ[],
} as Service;

//DUBAI POLICE
const DubaiPoliceServices: Service = {
  id: "dubai-police-services",
  slug: "dubai-police-services",
  title: "Dubai Police Services",
  imageUrl: "/services/dubai-police.webp",
  imageAlt: "Dubai Police logo and services visuals",
  heroExcerpt: "Dubai Police Services offer a wide range of security, legal, and documentation support for residents and businesses. From police clearance to e-crime reporting, these services ensure public safety and compliance through digital and in-person channels.",
  summary: "Digital policing, safety reports, and official clearances in Dubai.",
  description: "Dubai Police is one of the most advanced law enforcement agencies in the world, offering residents and businesses convenient access to essential services such as police clearance certificates, e-crime reporting, lost item certificates, and fine payments. With a focus on innovation, Dubai Police combines smart technology with proactive policing to enhance safety, transparency, and public trust across the Emirate.",
  category: "security",
  subServices: [
    {
      title: "Police Clearance Certificate",
      description: "Apply for a Police Clearance Certificate for job applications, visa processing, or immigration purposes. We manage the full process from documentation to submission — saving you time and avoiding errors that may lead to rejection."
    },
    {
      title: "Lost Certificate",
      description: "Lost your Emirates ID, passport, or license? We handle your lost item reporting with Dubai Police and ensure you receive a valid Lost Certificate for reissuance and legal use."
    },
    {
      title: "E-Crime Report",
      description: "Online fraud, hacking, or identity theft? We help you file an official cybercrime report accurately through Dubai Police's secure e-crime portal, increasing the chance of quick resolution."
    },
    {
      title: "Cheque Bounce Report (Personal/Company)",
      description: "Facing a bounced cheque issue? We assist in preparing and submitting your complaint, ensuring all required documents are included for swift legal action."
    },
    {
      title: "Traffic Fine Payments",
      description: "We check and settle your Dubai traffic fines, clear outstanding violations, and provide documentation for vehicle registration or visa clearance. Avoid delays and handle everything with ease."
    }
  ],
  faqs: [
    {
      question: "What is a Police Clearance Certificate?",
      answer: "It’s an official document from Dubai Police showing you have no criminal record. It’s needed for immigration, employment, or residency. While you can apply online, the process can be delayed due to incorrect documentation. We help you apply correctly and quickly — contact us to begin."
    },
    {
      question: "How do I report a lost item in Dubai?",
      answer: "Lost items like Emirates ID, passport, or driving license must be reported online to Dubai Police. However, mistakes in form entries can lead to rejection. We handle the full submission process for fast approval and delivery of your Lost Certificate."
    },
    {
      question: "What is the e-crime service for Dubai residents?",
      answer: "Dubai Police allows you to report cybercrimes like hacking, scams, or blackmail via their e-crime portal. If you're unsure which category your case falls under or how to present evidence, we can assist in submitting a strong, valid report."
    },
    {
      question: "How can I file a bounced cheque complaint?",
      answer: "You’ll need to provide the bounced cheque, bank letter, and ID to file a report. If the complaint isn’t prepared properly, it may be delayed or rejected. We ensure all documents are complete and submitted correctly for personal or business cases."
    },
    {
      question: "Can I pay my Dubai Police traffic fines myself?",
      answer: "Yes, through the website or app. But if you have multiple fines, vehicle registration issues, or pending clearance, we help you review and clear everything accurately — especially before vehicle transfers or visa renewals."
    }
  ] as FAQ[]
} as Service;

//ECONOMICS DEPARTMENT
const EconomicDepartmentServices: Service = {
  id: "economic-department-services",
  slug: "economic-department",
  title: "Economic Department Services",
  imageUrl: "/services/economic.webp",
  imageAlt: "Dubai Economic Department logo and license-related documents",
  heroExcerpt: "Access essential services for starting, managing, and modifying businesses in Dubai with the Economic Department. From trade licenses to amendments, we help you navigate every step with ease.",
  summary: "Business licensing, amendments, and government approvals made simple.",
  description: "The Department of Economic Development (DED) in Dubai is the primary authority for issuing and managing trade licenses, business registrations, and commercial legal documents. Whether you're launching a new company, renewing your license, or updating ownership structures, our service ensures accurate, timely, and compliant handling of all DED procedures. We assist with paperwork, approvals, translations, and government fees so you can focus on running your business.",
  category: "business",
  subServices: [
    {
      title: "New Trade License",
      description: "Start your business in Dubai with expert guidance on selecting license types (commercial, professional, industrial), name reservation, activity classification, and DED application submission. We ensure full documentation and fast approval."
    },
    {
      title: "Renewal of Trade License",
      description: "Avoid penalties and business disruption — we handle your trade license renewal with DED, ensuring tenancy contract (Ejari) validity, document verification, and seamless coordination with the municipality and immigration."
    },
    {
      title: "Cancellation of Trade License",
      description: "Shutting down your business? We guide you through the license cancellation process, including clearance from relevant authorities, ad posting, and legal closure formalities required by the Economic Department."
    },
    {
      title: "Memorandum Issuance (MOA)",
      description: "Issue or amend your company’s Memorandum of Association with legal drafting, notarization, and DED approval. We handle shareholder changes, capital updates, and structural amendments."
    },
    {
      title: "Power of Attorney Issuance",
      description: "Empower someone to act on your behalf legally for DED transactions. We prepare bilingual POAs (Arabic-English), get them notarized, and ensure acceptance for license amendments, banking, and immigration purposes."
    },
    {
      title: "License Amendments",
      description: "Update your trade license details — including activity changes, trade name, partner/shareholder info, manager details, or legal form. We manage document preparation and DED approvals end-to-end."
    },
    {
      title: "E-Trader License",
      description: "Start your online business in Dubai as an individual with an E-Trader license. Ideal for freelancers, influencers, and online sellers. We assist with eligibility checks, document upload, and digital approval through DED."
    }
  ],
  faqs: [
    {
      question: "What is a trade license in Dubai?",
      answer: "A trade license is an official permit issued by the Dubai Economic Department that allows individuals or companies to legally operate a business in Dubai. There are different types such as commercial, professional, and industrial, depending on your activities."
    },
    {
      question: "How can I renew my trade license?",
      answer: "To renew, your tenancy contract (Ejari) must be valid for at least one month, and all outstanding fines must be cleared. We handle the entire renewal process — document review, fee payment, and final issuance."
    },
    {
      question: "What documents are needed to start a new business in Dubai?",
      answer: "You typically need a passport copy, proposed business name, selected activities, tenancy contract (if not a virtual license), and partner/shareholder details. We help compile and submit all required documents."
    },
    {
      question: "Can I make changes to my trade license after issuance?",
      answer: "Yes, you can modify business activities, legal name, ownership, or managers. These are called license amendments, and we ensure DED acceptance by preparing compliant documentation and securing approvals."
    },
    {
      question: "What is an E-Trader License and who is it for?",
      answer: "The E-Trader License is issued by the DED for individuals operating online businesses or selling through social media. It’s ideal for freelancers, influencers, and home-based entrepreneurs who don’t need physical office space."
    }
  ] as FAQ[]
} as Service;

export const allServices: Service[] = [
  AmerServices,
  TasheelServices,
  RTAServices,
  DubaiPoliceServices,
  BusinessSetupServices,
  EconomicDepartmentServices,
  DocumantLegalSerivces
];

// Helper to find a specific service by slug
export const getServiceBySlug = (slug: string): Service | undefined => {
  return allServices.find(service => service.slug === slug);
};

// Helper to find a specific sub-service by main service slug and sub-service slug
export const getSubServiceBySlugs = (serviceSlug: string, subServiceSlug: string): SubServiceDetail | undefined => {
  const service = allServices.find(s => s.slug === serviceSlug);
  if (service) {
    return service.subServices.find((ss: { slug: string; }) => ss.slug === subServiceSlug);
  }
  return undefined;
};

export function getAllServiceSlugsAndSubServiceSlugs(): { serviceSlug: string; subServiceSlug: string }[] {
  const slugs: { serviceSlug: string; subServiceSlug: string }[] = [];
  allServices.forEach(service => {
    service.subServices.forEach(subService => {
      slugs.push({
        serviceSlug: service.slug,      // The slug of the parent service
        subServiceSlug: subService.slug // The slug of the specific sub-service
      });
    });
  });
  return slugs;
}

