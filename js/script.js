const allProjects = [
  {
    title: "Wellness App Redesign",
    about:
      "A comprehensive redesign of a wellness tracking application focused on improving user engagement and daily habit formation.",
    challenge:
      "Users were signing up but not staying. Early feedback showed that the interface felt cluttered, and the process of tracking everyday habits required too many steps, causing users to abandon the app shortly after onboarding.",
    process:
      "To understand the real pain points, I conducted 15 user interviews, created personas, mapped user journeys, and tested three different prototype variations with target users. Each iteration helped clarify what truly mattered for building consistent daily habits.",
    solution:
      "The final direction introduced a clean, minimal interface with one-tap tracking, simple navigation, and streak-based visual motivation. The design language was intentionally calming to reduce cognitive load and encourage consistent daily use.",
    result: [
      "Increased daily active users by 58%",
      "Reduced onboarding drop-off by 42%",
      "Improved 7-day retention from 23% to 61%",
    ],
    impact:
      "The client reported a significant increase in premium subscriptions, and positive app store reviews jumped from 3.2 to 4.7 stars.",
    images: [
      "./images/wellness.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
  {
    title: "Beauty Salon Booking Platform",
    about:
      "An intuitive booking system designed for luxury beauty salons, offering real-time availability and accurate stylist matching.",
    challenge:
      "Customers struggled with a complicated booking flow and had no clear visibility into stylist availability, which led to frequent drop-offs and frustration.",
    process:
      "Analyzed competitor platforms to understand industry standards, ran A/B tests on multiple booking flow variations, and incorporated feedback directly from real salon customers to refine the experience.",
    solution:
      "Designed a clean visual calendar with simple drag-and-drop booking, added stylist profiles featuring portfolios and specialties, and enabled instant confirmation for a seamless experience.",
    result: [
      "Booking completion rate increased by 67%",
      "Customer support calls reduced by 45%",
      "Average booking time dropped from 8 minutes to 2 minutes",
    ],
    impact:
      "Partner salons experienced a 35% increase in total bookings, and users rated the new experience 4.8/5 for clarity and ease of use.",
    images: [
      "./images/sallon.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
  {
    title: "Creative Agency",
    about:
      "A bold and interactive website redesigned for an abroad study consultancy, helping them present their services and student success stories with clarity and impact.",
    challenge:
      "The consultancy needed a website that looked professional, built trust quickly, and showcased their guidance process and student achievements in an engaging way.",
    process:
      "Developed mood boards to define the visual direction, explored subtle animation options for a modern feel, and created multiple interactive prototypes to test how students navigated information.",
    solution:
      "Designed a full-screen, experience-focused layout with smooth transitions, structured case study storytelling, and dynamic filtering for programs, destinations, and success stories.",
    result: [
      "Website engagement time increased by 156%",
      "Lead generation improved by 73%",
      "Recognized for design quality in two industry showcases",
    ],
    impact:
      "The consultancy onboarded 12 new students within the first 3 months of launch, directly crediting the updated website for improved trust and clarity in their services.",
    images: [
      "./images/agency.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
  {
    title: "IT Services Platform",
    about:
      "A streamlined IT services platform designed to help businesses easily connect with trusted IT service providers for managed solutions.",
    challenge:
      "Businesses found it difficult to understand the wide range of IT service offerings, and the traditional RFP process was slow and manual.",
    process:
      "Interviewed 25 key decision-makers to understand their pain points, restructured the information architecture for clarity, and designed a guided flow to help users discover the right IT services.",
    solution:
      "Built a step-by-step service builder, introduced clear comparison tools, and added a transparent pricing calculator to reduce confusion and speed up decision-making.",
    result: [
      "Service inquiries increased by 89%",
      "Time to quote reduced by 60%",
      "Customer satisfaction score: 4.6/5",
    ],
    impact:
      "The platform facilitated over $2M in IT service contracts within the first quarter of launch.",
    images: [
      "./images/itservice.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
  {
    title: "Dating App Experience",
    about:
      "A modern dating platform designed to help people build meaningful connections through personality-driven matching.",
    challenge:
      "Users were overwhelmed by the typical swipe-heavy experience and wanted more authentic ways to connect beyond looks alone.",
    process:
      "Studied dating psychology, explored different matching logic patterns, and tested multiple profile presentation styles to understand what led to deeper interactions.",
    solution:
      "Added thoughtful icebreaker prompts, implemented voice message options, and introduced a slow-reveal profile approach that encourages users to engage more intentionally.",
    result: [
      "Message response rate increased by 72%",
      "Users reported 45% more meaningful conversations",
      "Premium subscription conversions increased by 38%",
    ],
    impact:
      "The platform reached 500K downloads within 6 months, maintained a 4.5-star rating, and received recognition from several major tech publications.",
    images: [
      "./images/dating.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
  {
    title: "Real Estate Marketplace",
    about:
      "A comprehensive property search and listing platform built to connect buyers, sellers, and real estate agents in one seamless experience.",
    challenge:
      "Users struggled to find relevant properties due to limited filters and cluttered listing pages, making the search process slow and frustrating.",
    process:
      "Studied real user search behavior, refined the information architecture, and designed intelligent filtering systems to simplify property discovery.",
    solution:
      "Introduced a map-based search experience, added saved searches with instant alerts, integrated virtual tours, and implemented agent matching for personalized guidance.",
    result: [
      "Property inquiries increased by 94%",
      "Average time to sale reduced by 23 days",
      "Agent adoption rate reached 87%",
    ],
    impact:
      "The platform facilitated over $5M in property transactions during its first year and expanded operations to five additional cities.",
    images: [
      "./images/realstate.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
  {
    title: "Dating App 2.0",
    about:
      "A next-generation dating platform offering AI-powered compatibility insights and a video-first experience to build authentic connections.",
    challenge:
      "The biggest challenge was standing out in an already crowded dating market while ensuring users felt safe, verified, and connected with real people.",
    process:
      "Conducted in-depth market research to identify gaps, crafted a clear value proposition, and designed progressive safety features that users could trust.",
    solution:
      "Introduced secure video profile verification, AI-generated conversation starters, compatibility scoring, and built-in features for safer offline meetups.",
    result: [
      "User verification rate reached 93%",
      "Fake profile reports reduced by 50%",
      "Match success rate improved by 65%",
    ],
    impact:
      "The platform became a top-10 app in its category within four months, driven by strong organic growth and positive user testimonials.",
    images: [
      "./images/dating2.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
  {
    title: "Footwear E-commerce",
    about:
      "A premium sneaker and footwear shopping experience enhanced with AR try-on and personalized style recommendations.",
    challenge:
      "Customers struggled with sizing accuracy and had difficulty visualizing products on themselves, which led to high return rates.",
    process:
      "Integrated AR-based try-on technology, developed a size recommendation engine, and improved product photography for clearer visual understanding.",
    solution:
      "Introduced AR virtual try-on, an AI-powered size advisor, 360° product views, and a simple style quiz to generate personalized footwear recommendations.",
    result: [
      "Return rate decreased by 41%",
      "Average order value increased by 33%",
      "Customer satisfaction reached 4.7/5",
    ],
    impact:
      "Year-over-year sales grew by 127%, with the AR try-on experience contributing to over 60% of total conversions.",
    images: [
      "./images/shoes.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
  {
    title: "SaaS Analytics Dashboard",
    about:
      "Enterprise analytics platform designed to deliver clear, actionable insights for fast-growing SaaS businesses and early-stage startups.",

    challenge:
      "Users were overwhelmed by large volumes of data and struggled to quickly extract meaningful insights to support decision-making.",

    process:
      "Conducted in-depth research with data analysts and startup teams, followed by iterative dashboard design and usability testing across 30+ SaaS companies.",

    solution:
      "Introduced customizable dashboards, AI-powered insights, predictive analytics, and collaborative annotation tools to simplify complex data into clear actions.",

    result: [
      "User engagement increased by 145%",
      "Time to insight reduced by 73%",
      "Customer churn decreased by 28%",
    ],

    impact: `We also collaborate closely with early-stage startups on end-to-end SaaS product design. One of our recent partners, <a href='https://www.workonward.com' target='_blank'>WorkOnward</a>, successfully raised $240K after launching its redesigned experience.`,

    images: [
      "./images/saas.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
  {
    title: "Mobile App",
    about:
      "Next-generation mobile app designed for Apple and Android users, combining intuitive UI/UX with features that enhance engagement and user experience.",

    challenge:
      "Many apps feel outdated and fail to guide users effectively, especially across both iOS and Android platforms.",

    process:
      "We studied user behavior, applied principles of behavioral design, implemented gamification systems, and ensured security and usability in the UX for both platforms.",

    solution:
      "Implemented features like automated actions, progress tracking, insights, and instant notifications, all optimized for seamless Apple and Play Store experiences.",

    result: [
      "App downloads increased by 213%",
      "User engagement rose 156%",
      "App store rating reached 4.8/5",
    ],

    impact:
      "Our work helped grow the client’s digital user base by 340% and contributed to winning awards. We specialize in crafting UI/UX for all types of apps that support Apple and Play Store platforms, ensuring high engagement and usability.",

    images: [
      "./images/mob.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
  {
    title: "eCommerce UI/UX",
    about:
      "User-centric eCommerce interface designed to enhance shopping experiences across Shopify, custom WordPress, and other platforms, combining intuitive design with seamless functionality.",

    challenge:
      "Many online stores struggle with poor user experience, making it hard for customers to navigate, find products, and complete purchases efficiently.",

    process:
      "We studied shopper behavior, designed intuitive navigation flows, optimized layouts for conversions, and ensured smooth checkout experiences across multiple platforms.",

    solution:
      "Implemented responsive designs, personalized product displays, clear CTAs, and easy-to-use checkout flows, all tailored for Shopify, custom WordPress, and other eCommerce platforms.",

    result: [
      "Customer satisfaction improved by 52%",
      "Support ticket volume reduced by 67%",
      "Average resolution time: 3 minutes",
    ],

    impact:
      "Our eCommerce UI/UX solutions help businesses boost sales, reduce friction, and improve customer loyalty. We specialize in crafting interfaces that are **easy to develop on Shopify, WordPress, or custom platforms**, delivering both beauty and functionality.",

    images: [
      "./images/Ecomerse.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
  {
    title: "Education Learning Platform",
    about:
      "Interactive EdTech platform designed for web and mobile apps, creating engaging learning experiences for K-12 students with adaptive learning paths.",

    challenge:
      "Students often disengage with traditional online learning, while teachers lack effective tools to track progress and support learners.",

    process:
      "We collaborated closely with educators, conducted student focus group testing, and designed interfaces optimized for accessibility across web and mobile platforms.",

    solution:
      "Implemented gamified lessons, adaptive difficulty levels, progress dashboards for teachers, and peer collaboration features to make learning interactive and measurable.",

    result: [
      "Student engagement increased by 178%",
      "Course completion rate reached 87%",
      "Teacher satisfaction scored 4.6/5",
    ],

    impact:
      "Our EdTech UI/UX solutions have been adopted by 500+ schools, serving 50,000+ students. We specialize in designing platforms for web and mobile apps that improve learning outcomes and student engagement.",

    images: [
      "./images/ed.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
  {
    title: "Graphic Design Portfolio",
    about:
      "Comprehensive graphic design services covering personal branding, posters, banners, brochures, web and app content, logos, and other creative projects.",

    challenge:
      "Clients needed design solutions that reflected their brand identity while engaging audiences across multiple mediums and platforms.",

    process:
      "Developed brand strategies, visual identities, and organized systems to showcase diverse design projects for print, web, apps, and marketing materials.",

    solution:
      "Bold typography, immersive project presentations, filterable galleries, integrated client testimonials, and creative visuals for posters, banners, brochures, logos, and digital content.",

    result: [
      "Client inquiries increased by 215%",
      "Average project value rose 85%",
      "Featured in 3 design publications",
    ],

    impact:
      "Clients have successfully elevated their brand presence, booked high-value projects ahead, and expanded their reach. We specialize in creating graphic design solutions for web, apps, print, marketing, and branding projects.",

    images: [
      "./images/grafic.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },

 {
  "title": "FinTech & Banking App",
  "about": "Investment and banking platform designed to simplify stock trading and financial management, making it accessible for beginner investors and bank users alike.",

  "challenge": "Financial apps often overwhelm new users with complex jargon, data-heavy interfaces, and confusing workflows, reducing engagement.",

  "process": "We conducted financial education research, simplified terminology, and designed progressive disclosure flows to guide users smoothly through banking and investment features.",

  "solution": "Implemented educational tooltips, paper trading mode, portfolio recommendations, social investing features, and intuitive banking interfaces for seamless user experience.",

  "result": [
    "New investor sign-ups increased by 167%",
    "Average portfolio value reached $4,200",
    "User retention rate improved to 74%"
  ],

  "impact": "Our FinTech and banking app solutions helped the platform reach 100K users and manage $420M in assets in the first year. We specialize in designing user-friendly interfaces for investment platforms and banking apps.",

  "images": [
    "./images/fin.webp",
    "./images/wireframe.webp",
    "./images/maping.webp",
    "./images/styleguide.webp"
  ]
}
,
 {
  "title": "Framer Web Development",
  "about": "Custom web platform built on Framer, designed to deliver seamless UI/UX, responsive layouts, and intuitive user experiences for any business or project.",

  "challenge": "Many websites struggle with outdated layouts, poor responsiveness, and complicated workflows, reducing user engagement and satisfaction.",

  "process": "Collaborated with clients to understand workflows, mapped user journeys, and designed interactive dashboards and pages, all implemented in Framer for modern web performance.",

  "solution": "Developed real-time data dashboards, interactive components, smooth navigation, and visually appealing layouts, optimized for speed and usability on all devices.",

  "result": [
    "User engagement improved significantly",
    "Workflow efficiency increased by 30%",
    "Website performance optimized for all devices"
  ],

  "impact": "Our Framer web solutions help clients achieve better engagement, usability, and business insights. Recently, we built this live on <a href='https://tough-experiment-620509.framer.app/' target='_blank'>Framer</a>, showcasing modern, interactive web design.",

  "images": [
    "./images/fra.webp",
    "./images/wireframe.webp",
    "./images/maping.webp",
    "./images/styleguide.webp"
  ]
}
,
 {
  "title": "Healthcare Platform UI/UX",
  "about": "Comprehensive healthcare platform design for telemedicine, hospital management, laboratory systems, and other medical applications, focusing on seamless patient and provider experiences.",

  "challenge": "Patients were hesitant about virtual care quality, and healthcare providers needed efficient tools to manage appointments, records, and workflows.",

  "process": "Conducted HIPAA compliance research, mapped patient and staff journeys, and incorporated feedback from doctors and lab technicians to optimize usability across systems.",

  "solution": "Designed video consultations, EHR integration, prescription management, appointment scheduling, and interactive dashboards for hospitals and labs, ensuring smooth workflows and user-friendly interfaces.",

  "result": [
    "Patient satisfaction reached 4.7/5",
    "Doctor efficiency improved by 45%",
    "Consultation completion rate: 92%"
  ],

  "impact": "Our healthcare UI/UX solutions have supported 50K+ consultations and improved access to care. We specialize in designing telemedicine apps, hospital management systems, laboratory platforms, and other medical applications to enhance healthcare delivery.",

  "images": [
    "./images/helth.webp",
    "./images/wireframe.webp",
    "./images/maping.webp",
    "./images/styleguide.webp"
  ]
}
,
 {
  "title": "IT Company Web Presence",
  "about": "Modern web platform and landing page design for IT service companies, enhancing online presence, lead generation, and user engagement.",

  "challenge": "IT companies often struggled with showcasing services effectively online, resulting in low engagement and missed business opportunities.",

  "process": "Analyzed target audience and company services, mapped user journeys, and designed clean, responsive landing pages optimized for conversions and user experience.",

  "solution": "Created engaging landing pages, interactive service sections, clear CTAs, and analytics integration, helping IT companies communicate their offerings and capture leads efficiently.",

  "result": [
    "Average resolution time reduced by 58% for online inquiries",
    "42% increase in lead submissions through landing pages",
    "Client engagement and satisfaction improved by 67%"
  ],

  "impact": "Our IT company web solutions helped clients increase their online presence and achieve higher conversions. Enterprises reported an average annual benefit of $500K in operational efficiency and new business opportunities.",

  "images": [
    "./images/itservice2.webp",
    "./images/wireframe.webp",
    "./images/maping.webp",
    "./images/styleguide.webp"
  ]
}
,
  {
    title: "Natural Vitamin Supplements Store",
    about:
      "A natural vitamin and supplement marketplace designed to help customers find the right health products with curated selections and personalized guidance.",
    challenge:
      "Customers were overwhelmed by too many product options and unsure which supplements matched their specific health goals, leading to hesitation and drop-offs.",
    process:
      "Studied user preferences, designed a personalized recommendation system, and optimized the purchasing flow for clarity and trust.",
    solution:
      "Introduced AI-powered supplement recommendations, a virtual health goal planner, mix-and-match product suggestions, and an express checkout for faster purchasing.",
    result: [
      "Cart abandonment reduced by 52%",
      "Average order value increased by 41%",
      "Repeat purchase rate reached 68%",
    ],
    impact:
      "Revenue grew 185% year-over-year, with the personalized supplement guidance feature becoming a key differentiator.",
    images: [
      "./images/ecome.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
  {
    title: "Coffee Beans E-commerce",
    about:
      "A specialty coffee marketplace offering premium beans with clear tasting notes, origin details, and easy product comparisons.",
    challenge:
      "Customers struggled to understand roast levels, flavor profiles, and differences between similar coffee beans, making it hard to choose the right product.",
    process:
      "Created a structured comparison framework, simplified product detail sheets, and designed tools to support confident, quick decision-making.",
    solution:
      "Introduced side-by-side bean comparisons, expert roast reviews, a flavor compatibility checker, and simple buying guides for beginners and enthusiasts.",
    result: [
      "Product page engagement increased by 134%",
      "Informed purchase rate reached 89%",
      "Return rate decreased by 37%",
    ],
    impact:
      "The platform became a top regional coffee retailer with over $50k in monthly revenue.",
    images: [
      "./images/ecome2.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
  {
    title: "Women Supplement E-commerce",
    about:
      "Curated home decor and furniture marketplace with AR room visualization.",
    challenge:
      "Customers uncertain about how furniture would look in their space leading to returns.",
    process:
      "AR technology integration, room planning tools design, and style quiz development.",
    solution:
      "AR furniture placement, room planner, style recommendations, and virtual showroom tours.",
    result: [
      "Return rate decreased by 48%",
      "Average order value up 55%",
      "Customer confidence score: 4.6/5",
    ],
    impact:
      "AR feature drove 70% of conversions and became major competitive advantage.",
    images: [
      "./images/ecome3.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
  {
    title: "Laboratory Website",
    about:
      "Scientific laboratory workflow management with sample tracking and reporting.",
    challenge:
      "Manual processes error-prone; lack of real-time visibility into sample status.",
    process:
      "Workflow analysis with lab technicians, compliance requirement mapping, and iterative testing.",
    solution:
      "Barcode sample tracking, automated reporting, quality control workflows, and audit trails.",
    result: [
      "Error rate reduced by 76%",
      "Report generation time: 5 minutes (from 2 hours)",
      "Compliance audit pass rate: 100%",
    ],
    impact:
      "Labs increased throughput by 45% while maintaining higher quality standards.",
    images: [
      "./images/lab.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
  {
    title: "Marketing Automation Platform",
    about:
      "All-in-one marketing platform for email campaigns, social media, and analytics.",
    challenge:
      "Small businesses overwhelmed by complex marketing tools requiring technical expertise.",
    process:
      "Simplified user flows, created templates library, and designed guided campaign builders.",
    solution:
      "Drag-and-drop campaign builder, AI content suggestions, automated scheduling, and unified analytics.",
    result: [
      "Campaign creation time reduced by 68%",
      "User adoption rate: 83%",
      "Average ROI per campaign: 350%",
    ],
    impact:
      "Platform helped 5,000+ small businesses grow their revenue by average of 42%.",
    images: [
      "./images/marketintg.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
  {
    title: "Fitness & Gym Management",
    about:
      "Comprehensive gym management system with member tracking and class scheduling.",
    challenge:
      "Gyms losing members due to poor communication and scheduling conflicts.",
    process:
      "Member experience research, competitor analysis, and fitness studio feedback loops.",
    solution:
      "Mobile app for members, class booking, trainer scheduling, progress tracking, and community features.",
    result: [
      "Member retention increased by 54%",
      "Class attendance up 67%",
      "Admin time saved: 15 hours/week",
    ],
    impact:
      "Gym chains using platform saw 38% revenue growth and expanded to new locations.",
    images: [
      "./images/gym.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
  {
    title: "Footwear E-commerce",
    about:
      "A premium sneaker and footwear shopping experience enhanced with AR try-on and personalized style recommendations.",
    challenge:
      "Customers struggled with sizing accuracy and had difficulty visualizing products on themselves, which led to high return rates.",
    process:
      "Integrated AR-based try-on technology, developed a size recommendation engine, and improved product photography for clearer visual understanding.",
    solution:
      "Introduced AR virtual try-on, an AI-powered size advisor, 360° product views, and a simple style quiz to generate personalized footwear recommendations.",
    result: [
      "Return rate decreased by 41%",
      "Average order value increased by 33%",
      "Customer satisfaction reached 4.7/5",
    ],
    impact:
      "Year-over-year sales grew by 127%, with the AR try-on experience contributing to over 60% of total conversions.",
    images: [
      "./images/shoes.webp",
      "./images/wireframe.webp",
      "./images/maping.webp",
      "./images/styleguide.webp",
    ],
  },
];

// Portfolio images for scrolling rows
const row1Images = [
  "./images/wellness.webp",
  "./images/sallon.webp",
  "./images/agency.webp",
  "./images/itservice.webp",
  "./images/dating.webp",
  "./images/realstate.webp",
  "./images/dating2.webp",
  "./images/shoes.webp",
];

const row2Images = [
  "./images/saas.webp",
  "./images/mob.webp",
  "./images/Ecomerse.webp",
  "./images/ed.webp",
  "./images/grafic.webp",
  "./images/fin.webp",
  "./images/fra.webp",
  "./images/helth.webp",
];

const row3Images = [
  "./images/itservice2.webp",
  "./images/ecome.webp",
  "./images/ecome2.webp",
  "./images/ecome3.webp",
  "./images/lab.webp",
  "./images/marketintg.webp",
  "./images/gym.webp",
  "./images/shoes.webp",
];

// Function to create infinite scrolling row
function createInfiniteRow(container, images, direction, speed) {
  // Create items
  images.forEach((img, index) => {
    const item = document.createElement("div");
    item.className = "portfolio-item";
    item.innerHTML = `<img src="${img}" alt="Project ${index + 1}">`;

    // Determine project index based on which row
    let projectIndex = index;
    if (container.id === "row2") projectIndex = index + 8;
    if (container.id === "row3") projectIndex = index + 16;

    item.onclick = () => openProjectDetail(projectIndex);
    container.appendChild(item);
  });

  let scrollPosition = direction === "left" ? 0 : -container.scrollWidth / 2;
  let isPaused = false;

  // Pause on hover
  container.addEventListener("mouseenter", () => (isPaused = true));
  container.addEventListener("mouseleave", () => (isPaused = false));

  function animate() {
    if (!isPaused) {
      if (direction === "left") {
        scrollPosition -= speed;

        // When first item fully scrolls out, move it to end
        const firstItem = container.firstElementChild;
        if (
          firstItem &&
          Math.abs(scrollPosition) >= firstItem.offsetWidth + 20
        ) {
          container.appendChild(firstItem);
          scrollPosition = 0;
        }
      } else {
        scrollPosition += speed;

        // When scrolling right, move last item to start
        const lastItem = container.lastElementChild;
        if (scrollPosition >= 0) {
          container.insertBefore(lastItem, container.firstElementChild);
          scrollPosition = -(lastItem.offsetWidth + 20);
        }
      }

      container.style.transform = `translateX(${scrollPosition}px)`;
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// Initialize rows
const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const row3 = document.getElementById("row3");

createInfiniteRow(row1, row1Images, "left", 0.9);
createInfiniteRow(row2, row2Images, "right", 0.9);
createInfiniteRow(row3, row3Images, "left", 0.9);

// Project Detail Functions
function openProjectDetail(projectIndex) {
  const selectedProject = allProjects[projectIndex];

  if (!selectedProject) {
    console.error("Project not found");
    return;
  }

  localStorage.setItem("selectedProject", JSON.stringify(selectedProject));
  window.location.href = "projectDetail.html";
}

// Testimonials with same circular logic
const testimonials = [
  {
    name: "Sarah Johnson",
    stars: 5,
    text: "Working with this designer was fantastic! The UI/UX work transformed our product and significantly improved user engagement.",
  },
  {
    name: "Michael Chen",
    stars: 5,
    text: "Exceptional design work! Our app conversion rate increased by 40% after the redesign. Highly professional and creative.",
  },
  {
    name: "Emily Rodriguez",
    stars: 5,
    text: "The attention to detail and user research was impressive. Delivered a beautiful, functional design that our users love.",
  },
  {
    name: "David Park",
    stars: 5,
    text: "Outstanding UI/UX expertise! The designer understood our vision and created an intuitive experience that exceeded expectations.",
  },
  {
    name: "Lisa Thompson",
    stars: 5,
    text: "Best designer I have worked with. Professional, responsive, and delivered pixel-perfect designs on time.",
  },
  {
    name: "James Wilson",
    stars: 5,
    text: "The design thinking approach was brilliant. Solved complex user problems with elegant, simple solutions.",
  },
  {
    name: "Anna Martinez",
    stars: 5,
    text: "Incredible work! Our customer satisfaction scores improved dramatically after implementing the new design.",
  },
];

// Create infinite testimonials
const testimonialsTrack = document.getElementById("testimonialsTrack");

testimonials.forEach((testimonial) => {
  const card = document.createElement("div");
  card.className = "testimonial-card";
  card.innerHTML = `
    <div class="stars">${"⭐".repeat(testimonial.stars)}</div>
    <p class="testimonial-text">${testimonial.text}</p>
    <div class="testimonial-author">${testimonial.name}</div>
  `;
  testimonialsTrack.appendChild(card);
});

// Infinite testimonials scroll
let testimonialPosition = 0;
let testimonialPaused = false;

testimonialsTrack.addEventListener(
  "mouseenter",
  () => (testimonialPaused = true)
);
testimonialsTrack.addEventListener(
  "mouseleave",
  () => (testimonialPaused = false)
);

function animateTestimonials() {
  if (!testimonialPaused) {
    testimonialPosition -= 0.5;

    const firstCard = testimonialsTrack.firstElementChild;
    if (
      firstCard &&
      Math.abs(testimonialPosition) >= firstCard.offsetWidth + 20
    ) {
      testimonialsTrack.appendChild(firstCard);
      testimonialPosition = 0;
    }

    testimonialsTrack.style.transform = `translateX(${testimonialPosition}px)`;
  }

  requestAnimationFrame(animateTestimonials);
}

animateTestimonials();

// Smooth scroll for navigation links
// Smooth scroll and active link update
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove 'active' class from all links
    navLinks.forEach((l) => l.classList.remove("active"));

    // Add 'active' class to clicked link
    this.classList.add("active");

    // Smooth scroll to target section
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// FAQ
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});



// loder 

  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.classList.add("hide");
  });