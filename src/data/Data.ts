import Icon from "@/components/utils/svg/Icon";
import Icon2 from "@/components/utils/svg/Icon2";
import Icon3 from "@/components/utils/svg/Icon3";
import Icon4 from "@/components/utils/svg/Icon4";
import { slugify } from '../lib/slugify';

const speakersData = [
  {
    id: 1,
    videoSrc: "/assets/img/speaker-1.mp4",
    role: "Lead Speaker",
    name: "Thomas R. Toe",
  },
  {
    id: 2,
    videoSrc: "/assets/img/speaker-2.mp4",
    role: "Developer Expert",
    name: "Brandon Guidelines",
  },
  {
    id: 3,
    videoSrc: "/assets/img/speaker-3.mp4",
    role: "Founder, Marks",
    name: "Spruce Springclean",
  },
  {
    id: 4,
    videoSrc: "/assets/img/speaker-4.mp4",
    role: "Developer Expert",
    name: "Hermann P. Schnitzel",
  },
  {
    id: 5,
    videoSrc: "/assets/img/speaker-1.mp4",
    role: "Lead Speaker",
    name: "Thomas R. Toe",
  },
];

const pricingData = [
  {
    id: 1,
    title: "One Day Ticket",
    price: 284,
    services: [
      "One Day Access",
      "PDF Files Sent To Email",
      "Online Workshop",
      "Discount For Next Events",
    ],
  },
  {
    id: 2,
    title: "Two Days Ticket",
    price: 325,
    services: [
      "One Day Access",
      "PDF Files Sent To Email",
      "Online Workshop",
      "Discount For Next Events",
    ],
  },
  {
    id: 3,
    title: "All Days Ticket",
    price: 396,
    services: [
      "One Day Access",
      "PDF Files Sent To Email",
      "Online Workshop",
      "Discount For Next Events",
    ],
  },
];
const pricingData2 = [
  {
    id: 1,
    plan: "Basic Plan",
    desc: "Denim aliquot abitur poseurs locus..!",
    price: 59,
    benefits: [
      "Check the health of plants",
      "Water properly",
      "Treat your soil",
      "Destroy the weeds",
      "Try raised beds",
    ],
  },
  {
    id: 2,
    plan: "Standard Plan",
    desc: "Denim aliquot abitur poseurs locus..!",
    price: 79,
    benefits: [
      "Free Landscape Design",
      "Destroy the weeds",
      "Water properly",
      "Treat your soil",
      "Try raised beds",
    ],
  },
  {
    id: 3,
    plan: "Ultimate Plan",
    desc: "Denim aliquot abitur poseurs locus..!",
    price: 99,
    benefits: [
      "Treat your soil",
      "Check the health of plants",
      "Water properly",
      "Destroy the weeds",
      "Try raised beds",
    ],
  },
];
const galleryData = [
  {
    id: 1,
    img: "/assets/img/rv-1-gallery-img-1.jpg",
    tag: "Future Business",
    title: "Developer Conference 2023",
  },
  {
    id: 2,
    img: "/assets/img/rv-1-gallery-img-2.jpg",
    tag: "Building Bridges",
    title: "Digital Marketing Conference",
  },
  {
    id: 3,
    img: "/assets/img/rv-1-gallery-img-3.jpg",
    tag: "Opportunities",
    title: "Machine Learning Design",
  },
  {
    id: 4,
    img: "/assets/img/rv-1-gallery-img-2.jpg",
    tag: "Opportunities",
    title: "Digital Marketing Conference",
  },
];

const blogData = [
  {
    id: 1,
    img: "/assets/img/rv-1-blog-1.jpg",
    date: "June 15, 2023",
    commentAmount: 5,
    title: "3 Incentives For Emphasizing Community Building.",
  },
  {
    id: 2,
    img: "/assets/img/rv-1-blog-2.jpg",
    date: "March 24, 2023",
    commentAmount: 7,
    title: "The 5th Global Disability & Rehabilitation Conference 2023",
  },
  {
    id: 3,
    img: "/assets/img/rv-1-blog-3.jpg",
    date: "June 23, 2023",
    commentAmount: 3,
    title: "How Developers are Removing The Speculation.",
  },
  {
    id: 4,
    img: "/assets/img/rv-1-blog-1.jpg",
    date: "June 15, 2023",
    commentAmount: 3,
    title: "3 Incentives For Emphasizing Community Building.",
  },
];

const scheduleData = [
  {
    id: "nav-day-1",
    title: "Day 1",
    subTitle: "24 March 2023",
  },
  {
    id: "nav-day-2",
    title: "Day 2",
    subTitle: "24 March 2023",
  },
  {
    id: "nav-day-3",
    title: "Day 3",
    subTitle: "24 March 2023",
  },
];

const scheduleInfoData = [
  {
    id: 1,
    name: "Alice Johnson",
    label: "Creative Director & Lead",
    img: "/assets/img/rv-1-author-1.jpg",
    title: "Setting Up Your Business Plan",
    location: "Three Arm Zone, Abuja Nigeria ",
    time: "10:30 - 11:30",
  },
  {
    id: 2,
    name: "Douglas Lyphe",
    label: "Marketing Manager",
    img: "/assets/img/rv-1-author-2.jpg",
    title: "Digital Marketing Strategies",
    location: "Los Angeles, United",
    time: "12:00 - 13:00",
  },
  {
    id: 3,
    name: "Emily White",
    label: "Software Engineer",
    img: "/assets/img/rv-1-author-3.jpg",
    title: "Introduction to Web Development",
    location: "San Francisco, United",
    time: "14:30 - 15:30",
  },
  {
    id: 4,
    name: "John Smith",
    label: "Product Designer",
    img: "/assets/img/rv-1-author-4.jpg",
    title: "UI/UX Design Principles",
    location: "Seattle, United",
    time: "16:00 - 17:00",
  },
];

const portfolioData = [
  {
    id: 1,
    img: "/assets/img/rv-2-portfolio-1.jpg",
  },
  {
    id: 2,
    img: "/assets/img/rv-2-portfolio-2.jpg",
  },
  {
    id: 3,
    img: "/assets/img/rv-2-portfolio-3.jpg",
  },
  {
    id: 4,
    img: "/assets/img/rv-2-portfolio-1.jpg",
  },
];
const portfolioData3 = [
  {
    id: 1,
    mainImg: "/assets/img/team/home-6-portfolio-1.png",
    desc: "Rubbish Removal",
    title: "Tree Cleaning",
  },
  {
    id: 2,
    mainImg: "/assets/img/team/home-6-portfolio-2.png",
    desc: "Rubbish Removal",
    title: "Tree Cleaning",
  },
  {
    id: 3,
    mainImg: "/assets/img/team/home-6-portfolio-3.png",
    desc: "Rubbish Removal",
    title: "Tree Cleaning",
  },
  {
    id: 4,
    mainImg: "/assets/img/team/home-6-portfolio-4.png",
    desc: "Rubbish Removal",
    title: "Tree Cleaning",
  },
  {
    id: 5,
    mainImg: "/assets/img/team/home-6-portfolio-3.png",
    desc: "Rubbish Removal",
    title: "Tree Cleaning",
  },
  {
    id: 6,
    mainImg: "/assets/img/team/home-6-portfolio-4.png",
    desc: "Rubbish Removal",
    title: "Tree Cleaning",
  },
  {
    id: 7,
    mainImg: "/assets/img/team/home-6-portfolio-2.png",
    desc: "Rubbish Removal",
    title: "Tree Cleaning",
  },
  {
    id: 8,
    mainImg: "/assets/img/team/home-6-portfolio-1.png",
    desc: "Rubbish Removal",
    title: "Tree Cleaning",
  },
];
const blogData2 = [
  {
    id: 1,
    category: "Football",
    date: "June 15, 2023",
    title: "From The Stands To The Field.",
    slug: "from-the-stands-to-the-field",
  },
  {
    id: 2,
    category: "Football",
    date: "March 24, 2023",
    title: "Strategies The Stars To Shocked.",
    slug: "strategies-the-stars-to-shocked",
  },
  {
    id: 3,
    category: "Football",
    date: "June 23, 2023",
    title: "Inside The Box You Football.",
    slug: "inside-the-box-you-football",
  },
  {
    id: 4,
    category: "Football",
    date: "June 15, 2023",
    title: "From The Stands To The Field.",
    slug: "from-the-stands-to-the-field",
  },
];

const historyData = [
  {
    id: 1,
    timeLine: "2007 - 2015",
    title: "Steadfast Excellence",
    description:
      "Setting and regularly revising goals is essential for staying on the path to sustained success. Measuring performance, seeking feedback, & adjustments are crucial to maintaining success.",
  },
  {
    id: 2,
    timeLine: "2015 - 2019",
    title: "Catalan Capital",
    description:
      "Setting and regularly revising goals is essential for staying on the path to sustained success. Measuring performance, seeking feedback, & adjustments are crucial to maintaining success.",
  },
  {
    id: 3,
    timeLine: "2019 - 2023",
    title: "Homegrown success",
    description:
      "Setting and regularly revising goals is essential for staying on the path to sustained success. Measuring performance, seeking feedback, & adjustments are crucial to maintaining success.",
  },
];

const aboutData = [
  {
    id: 1,
    icon: "/assets/img/rv-2-about-icon-1.png",
    title: "Life Storybook",
    desc: " Mauri's molestee errata et solicitude auctor Cras auctors fugit lacinia non aliquot urn.",
  },
  {
    id: 2,
    icon: "/assets/img/rv-2-about-icon-2.png",
    title: "Figures and Facts",
    desc: " Mauri's molestee errata et solicitude auctor Cras auctors fugit lacinia non aliquot urn.",
  },
  {
    id: 3,
    icon: "/assets/img/rv-2-about-icon-3.png",
    title: "Organization",
    desc: " Mauri's molestee errata et solicitude auctor Cras auctors fugit lacinia non aliquot urn.",
  },
];

const skillData = [
  {
    id: 1,
    title: "Blocking",
    value: 95,
  },
  {
    id: 2,
    title: "Passing Accuracy",
    value: 64,
  },
  {
    id: 3,
    title: "Brabbling Skill",
    value: 74,
  },
  {
    id: 4,
    title: "Shooting",
    value: 58,
  },
];

const awardData = [
  {
    id: 1,
    year: 2021,
    logo: "/assets/img/rv-2-honor-logo-1.png",
    title: "Player of The Year",
    desc: "Lorem ipsum dolor sit abet.",
  },
  {
    id: 2,
    year: 2022,
    logo: "/assets/img/rv-2-honor-logo-2.png",
    title: "Man Of The Match",
    desc: "Lorem ipsum dolor sit abet.",
  },
  {
    id: 3,
    year: 2023,
    logo: "/assets/img/rv-2-honor-logo-3.png",
    title: "FIFL The Best Player",
    desc: "Lorem ipsum dolor sit abet.",
  },
];

const bannerData = [
  {
    id: 1,
    img: "/assets/img/rv-5-banner-1.jpg",
    title: "Olivia Jones & Michael Smith",
    desc: "We Are Getting Married June 24,2023",
  },
  {
    id: 2,
    img: "/assets/img/rv-5-banner-2.jpg",
    title: "Emily Rodriguez & Daniel Jackson",
    desc: "Saying 'I Do' on 2026-07-04",
  },
  {
    id: 3,
    img: "/assets/img/rv-5-banner-3.jpg",
    title: "Sarah Lee & William Chen",
    desc: "Tying the Knot on 2024-04-25",
  },
];
const bannerData2 = [
  {
    id: 1,
    subTitle: "Heavenly Signature Tea",
    title: "Locate The Supreme Tailors Studio in Proximity.",
    slideStyle: "rv-12-banner__slide",
  },
  {
    id: 2,
    subTitle: "Heavenly Signature Tea",
    title: "Discover a World of Flavor in Every Teapot.",
    slideStyle: "rv-12-banner__slide rv-12-banner__slide--2",
  },
  {
    id: 3,
    subTitle: "Heavenly Signature Tea",
    title: "Elevate Your Tea Time With Our Exceptional Flavors.",
    slideStyle: "rv-12-banner__slide rv-12-banner__slide--3",
  },
];
const bannerData3 = [
  {
    subTitle: "Your Trust is Valued",
    title: "Safeguard Natural Resources.",
    style: "rv-9-banner-slide",
  },
  {
    subTitle: "Your Trust is Valued",
    title: "Safeguard Natural Resources.",
    style: "rv-9-banner-slide rv-9-banner-slide--2",
  },
  {
    subTitle: "Your Trust is Valued",
    title: "Safeguard Natural Resources.",
    style: "rv-9-banner-slide rv-9-banner-slide--3",
  },
];
const serviceData = [
  {
    id: 1,
    img: "/assets/img/rv-5-service-1.jpg",
    icon: "/assets/img/rv-5-service-i-1.png",
    title: "Wedding Dress",
    desc: "There are many variations karee passages Ut a vehicula sem rhoncus at available.!",
  },
  {
    id: 2,
    img: "/assets/img/rv-5-service-2.jpg",
    icon: "/assets/img/rv-5-service-i-2.png",
    title: "Cake Design",
    desc: "There are many variations karee passages Ut a vehicula sem rhoncus at available.!",
  },
  {
    id: 3,
    img: "/assets/img/rv-5-service-3.jpg",
    icon: "/assets/img/rv-5-service-i-3.png",
    title: "Event Planning",
    desc: "There are many variations karee passages Ut a vehicula sem rhoncus at available.!",
  },
  {
    id: 4,
    img: "/assets/img/rv-5-service-1.jpg",
    icon: "/assets/img/rv-5-service-i-1.png",
    title: "Wedding Dress",
    desc: "There are many variations karee passages Ut a vehicula sem rhoncus at available.!",
  },
];

const teamData = [
  {
    id: 1,
    label: "Lead Assistant",
    name: "Lurch Schpellchek",
    img: "/assets/img/rv-5-member-1.jpg",
  },
  {
    id: 2,
    label: "CEO & Founder",
    name: "Hugh Saturation",
    img: "/assets/img/rv-5-member-3.jpg",
  },
  {
    id: 3,
    label: "Makeup Artist",
    name: "Norman Gordon",
    img: "/assets/img/rv-5-member-2.jpg",
  },
  {
    id: 4,
    label: "Lead Assistant",
    name: "Lurch Schpellchek",
    img: "/assets/img/rv-5-member-1.jpg",
  },
];

const portfolioData2 = [
  {
    id: 1,
    img: "/assets/img/rv-5-portfolio-1.jpg",
    location: "China",
    date: "24 Sep 2018",
    name: "Brian & Montana",
  },
  {
    id: 2,
    img: "/assets/img/rv-5-portfolio-2.jpg",
    location: "London",
    date: "22 June 2020",
    name: "Brandon & Fletch",
  },
  {
    id: 3,
    img: "/assets/img/rv-5-portfolio-3.jpg",
    location: "Singapore",
    date: "26 May 2023",
    name: "Rodney & Nutrisha",
  },
  {
    id: 4,
    img: "/assets/img/rv-5-portfolio-4.jpg",
    location: "Austria",
    date: "28 June 2023",
    name: "Phillip & Douchebag",
  },
];

const testimonialData = [
  {
    id: 1,
    img: "/assets/img/rv-5-testimony-reviewer-1.png",
    name: "Douglas Lyphe",
    service: "Wedding",
    date: "24.08.2023",
  },
  {
    id: 2,
    img: "/assets/img/rv-5-testimony-reviewer-2.jpg",
    name: "Kesri Devgan",
    service: "Event Planning",
    date: "15.09.2023",
  },
];
const testimonialData2 = [
  {
    id: 1,
    mainImg: "/assets/img/testimonial/home-6-1.png",
    testimony:
      "Morbi consectetur elementum purus mattis cursus purus metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia Quisque amet velit amet dui hendrerit ultricies id ipsum Mauris sit amet Suspends potent vestibulu lacinia est”",
    name: "Douglas Lyphe",
    designation: "Director, Client Experience",
  },
  {
    id: 2,
    mainImg: "/assets/img/testimonial/home-6-1.png",
    testimony:
      "Morbi consectetur elementum purus mattis cursus purus metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia Quisque amet velit amet dui hendrerit ultricies id ipsum Mauris sit amet Suspends potent vestibulu lacinia est”",
    name: "Douglas Lyphe",
    designation: "Director, Client Experience",
  },
  {
    id: 3,
    mainImg: "/assets/img/testimonial/home-6-1.png",
    testimony:
      "Morbi consectetur elementum purus mattis cursus purus metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia Quisque amet velit amet dui hendrerit ultricies id ipsum Mauris sit amet Suspends potent vestibulu lacinia est”",
    name: "Douglas Lyphe",
    designation: "Director, Client Experience",
  },
];
const testimonialData3 = [
  {
    desc: "“Suspendisse in consectetur justo. Suspends molestee lorem accusant mattis rutrum. Nunc facilisis ultricies mi, et porta diam lobortis non. In hac habitasse platea dictumst”",
    thumbImg: "/assets/img/rv-3-testimony-1.png",
  },
  {
    desc: "“Suspendisse in consectetur justo. Suspends molestee lorem accusant mattis rutrum. Nunc facilisis ultricies mi, et porta diam lobortis non. In hac habitasse platea dictumst”",
    thumbImg: "/assets/img/rv-3-testimony-2.png",
  },
  {
    desc: "“Suspendisse in consectetur justo. Suspends molestee lorem accusant mattis rutrum. Nunc facilisis ultricies mi, et porta diam lobortis non. In hac habitasse platea dictumst”",
    thumbImg: "/assets/img/rv-3-testimony-3.png",
  },
];
const partnerImages = [
  "/assets/img/rv-5-partnaer-1.png",
  "/assets/img/rv-5-partnaer-2.png",
  "/assets/img/rv-5-partnaer-3.png",
  "/assets/img/rv-5-partnaer-4.png",
  "/assets/img/rv-5-partnaer-5.png",
  "/assets/img/rv-5-partnaer-6.png",
  "/assets/img/rv-5-partnaer-1.png",
];

const blogData3 = [
  {
    id: 1,
    img: "/assets/img/rv-5-blog-1.jpg",
    day: 24,
    month: "March",
    title: "Please grace us with your presence our wedding.",
    category: "Wedding",
  },
  {
    id: 2,
    img: "/assets/img/rv-5-blog-2.jpg",
    date: "June 15, 2023",
    title: "These can be referred to as overhead blossoming canopies.",
    category: "Sweet",
  },
  {
    id: 3,
    img: "/assets/img/rv-5-blog-3.jpg",
    date: "May 28, 2023",
    title: "Please grace us with your presence our wedding.",
    category: "Ceremony",
  },
  {
    id: 4,
    img: "/assets/img/rv-5-blog-4.jpg",
    date: "July 22, 2023",
    title: "The highest point of thoughtful presents for the couple.",
    category: "Passion",
  },
];
const blogData5 = [
  {
    id: 1,
    img: "/assets/img/org-blog-1.jpg",
    date: "June 15, 2023",
    comments: 5,
    title: "Stronger Communities Through Organic Engagement",
    slug: "stronger-communities-organic-engagement",
  },
  {
    id: 2,
    img: "/assets/img/org-blog-2.jpg",
    date: "July 20, 2023",
    comments: 12,
    title: "Mastering SEO: The Organic Approach",
    slug: "mastering-seo-organic-approach",
    big: true,
  },
  {
    id: 3,
    img: "/assets/img/org-blog-3.jpg",
    date: "August 1, 2023",
    comments: 8,
    title: "Attract & Retain with Organic Content Marketing",
    slug: "attract-retain-organic-content",
    small: true,
  },
];
const galleryData2 = [
  {
    id: 1,
    icon: "fa-brands fa-instagram",
    label: "instagram",
    img: "/assets/img/rv-5-gallery-1.jpg",
  },
  {
    id: 2,
    icon: "fa-brands fa-instagram",
    label: "instagram",
    img: "/assets/img/rv-5-gallery-2.jpg",
  },
  {
    id: 3,
    icon: "fa-brands fa-instagram",
    label: "instagram",
    img: "/assets/img/rv-5-gallery-3.jpg",
  },
  {
    id: 4,
    icon: "fa-brands fa-instagram",
    label: "instagram",
    img: "/assets/img/rv-5-gallery-4.jpg",
  },
  {
    id: 5,
    icon: "fa-brands fa-instagram",
    label: "instagram",
    img: "/assets/img/rv-5-gallery-5.jpg",
  },
];

const serviceData2 = [
  {
    id: 1,
    title: "Digital Marketing",
    description:
      "Suspendisse fermentu Suspendisse herderite est lectors valuate tempus null ullamcorper quis.",
    slug: "digital-marketing",
    icon: Icon,
    img: "/assets/img/service-details-1.jpg",
  },
  {
    id: 2,
    title: "Web Solution",
    description:
      "Suspendisse fermentu Suspendisse herderite est lectors valuate tempus null ullamcorper quis.",
    slug: "web-solution",
    icon: Icon2,
    img: "/assets/img/service-details-2.jpg",
  },
  {
    id: 3,
    title: "Market Research",
    description:
      "Suspendisse fermentu Suspendisse herderite est lectors valuate tempus null ullamcorper quis.",
    slug: "market-research",
    icon: Icon3,
    img: "/assets/img/service-details-3.jpg",
  },
  {
    id: 4,
    title: "Creative Process",
    description:
      "Suspendisse fermentu Suspendisse herderite est lectors valuate tempus null ullamcorper quis.",
    slug: "creative-process",
    icon: Icon4,
    img: "/assets/img/service-details-4.jpg",
  },
  {
    id: 5,
    title: "SEO Services",
    description:
      "Suspendisse fermentu Suspendisse herderite est lectors valuate tempus null ullamcorper quis.",
    slug: "seo-services",
    icon: Icon,
    img: "/assets/img/service-details-5.jpg",
  },
  {
    id: 6,
    title: "E-commerce Solutions",
    description:
      "Suspendisse fermentu Suspendisse herderite est lectors valuate tempus null ullamcorper quis.",
    slug: "ecommerce-solutions",
    icon: Icon2,
    img: "/assets/img/service-details-6.jpg",
  },
  {
    id: 7,
    title: "Media Analytics",
    description:
      "Suspendisse fermentu Suspendisse herderite est lectors valuate tempus null ullamcorper quis.",
    slug: "media-analytics",
    icon: Icon3,
    img: "/assets/img/service-details-7.jpg",
  },
  {
    id: 8,
    title: "Graphic Design",
    description:
      "Suspendisse fermentu Suspendisse herderite est lectors valuate tempus null ullamcorper quis.",
    slug: "graphic-design",
    icon: Icon4,
    img: "/assets/img/service-details-8.jpg",
  },
  {
    id: 9,
    title: "Email Marketing",
    description:
      "Suspendisse fermentu Suspendisse herderite est lectors valuate tempus null ullamcorper quis.",
    slug: "email-marketing",
    icon: Icon,
    img: "/assets/img/service-details-9.jpg",
  },
];
const serviceData3 = [
  {
    id: 1,
    title: "Sprinkling and Discharge",
    slug: "sprinkling-and-discharge",
    img: "/assets/img/service-details-10.jpg",
    imgMain: "/assets/img/services/home-6-service-1.png",
    imgIcon: "/assets/img/services/home-6-service-icon-1.png",
    dropText: "plant care",
  },
  {
    id: 2,
    title: "Commercial Grounds keeping",
    slug: "commercial-grounds-keeping",
    img: "/assets/img/service-details-11.jpg",
    imgMain: "/assets/img/services/home-6-service-2.png",
    imgIcon: "/assets/img/services/home-6-service-icon-2.png",
    dropText: "Garden Care",
  },
  {
    id: 3,
    title: "Garden Reawakening",
    slug: "garden-reawakening",
    img: "/assets/img/service-details-12.jpg",
    imgMain: "/assets/img/services/home-6-service-3.png",
    imgIcon: "/assets/img/services/home-6-service-icon-3.png",
    dropText: "Beauty full",
  },
];
const serviceData4 = [
  {
    id: 1,
    img: "/assets/img/service-details-13.jpg",
    iconImg: "/assets/img/rv-9-service-1.png",
    title: "Lawn Renovation",
    slug: "lawn-renovation",
    desc: "Suspendisse fermentu Suspendisse hendrerit est lectus vulputate tempus nulla ullamcorper quis.",
  },
  {
    id: 2,
    img: "/assets/img/service-details-14.jpg",
    iconImg: "/assets/img/rv-9-service-2.png",
    title: "ECO Friendly",
    slug: "eco-friendly",
    desc: "Suspendisse fermentu Suspendisse hendrerit est lectus vulputate tempus nulla ullamcorper quis.",
  },
  {
    id: 3,
    img: "/assets/img/service-details-15.jpg",
    iconImg: "/assets/img/rv-9-service-3.png",
    title: "Free Pick Up",
    slug: "free-pick-up",
    desc: "Suspendisse fermentu Suspendisse hendrerit est lectus vulputate tempus nulla ullamcorper quis.",
  },
];
const projectData = [
  {
    id: 1,
    img: "/assets/img/rv-6-services-img.jpg",
    subTitle: "Protecting Nature",
    title: "Green Oasis Initiative",
    slug: "green-oasis-initiative",
  },
  {
    id: 2,
    img: "/assets/img/rv-6-about-img-1.jpg",
    subTitle: "Lawn Renovation",
    title: "Sustainable Planting Drive",
    slug: "sustainable-planting-drive",
  },
  {
    id: 3,
    img: "/assets/img/rv-6-about-img-2.jpg",
    subTitle: "Environment",
    title: "Ecological Harmony Project",
    slug: "ecological-harmony-project",
  },
  {
    id: 4,
    img: "/assets/img/rv-8-project-2.jpg",
    subTitle: "Wild Animals",
    title: "Aquatic Life Preservation",
    slug: "aquatic-life-preservation",
  },
  {
    id: 5,
    img: "/assets/img/rv-8-project-1.jpg",
    subTitle: "Protecting Nature",
    title: "Biodiversity Conservation",
    slug: "biodiversity-conservation",
  },
  {
    id: 6,
    img: "/assets/img/rv-8-project-3.jpg",
    subTitle: "Protecting Nature",
    title: "Eco-Forest Regeneration",
    slug: "eco-forest-regeneration",
  },
];
const projectData2 = [
  "https://i.ibb.co/D9LJPF3/rv-12-project-1.gif",
  "https://i.ibb.co/2nLGdRs/rv-12-project-2.gif",
  "https://i.ibb.co/DR4cHM6/rv-12-project-3.gif",
  "https://i.ibb.co/D9LJPF3/rv-12-project-1.gif",
  "https://i.ibb.co/2nLGdRs/rv-12-project-2.gif",
];
const teamData2 = [
  {
    id: 1,
    img: "/assets/img/rv-9-member-1.jpg",
    subTitle: "Team Leader",
    title: "Desmond Eagle",
    slug: "",
  },
  {
    id: 2,
    img: "/assets/img/rv-9-member-2.jpg",
    subTitle: "Project Manager",
    title: "Sophia Griffin",
    slug: "",
  },
  {
    id: 3,
    img: "/assets/img/rv-9-member-3.jpg",
    subTitle: "Design Specialist",
    title: "Liam Parker",
    slug: "",
  },
  {
    id: 4,
    img: "/assets/img/rv-3-member-1.jpg",
    subTitle: "Marketing Coordinator",
    title: "Olivia Fisher",
    slug: "",
  },
  {
    id: 5,
    img: "/assets/img/rv-3-member-2.jpg",
    subTitle: "Development Expert",
    title: "Ethan Turner",
    slug: "",
  },
  {
    id: 6,
    img: "/assets/img/rv-3-member-3.jpg",
    subTitle: "Communications Officer",
    title: "Ava Hayes",
    slug: "",
  },
];
const teamData3 = [
  {
    id: 1,
    mainImg: "/assets/img/team/home-6-teem-1.png",
    socials: [
      {
        icon: "fab fa-facebook-f",
        url: "#",
      },
      {
        icon: "fab fa-twitter",
        url: "#",
      },
      {
        icon: "fab fa-linkedin-in",
        url: "#",
      },
    ],
    designation: "Garden Experts",
    name: "Alexander Bennett",
    dropText: "LANDSCAPER",
  },
  {
    id: 2,
    mainImg: "/assets/img/team/home-6-teem-2.png",
    socials: [
      {
        icon: "fab fa-facebook-f",
        url: "#",
      },
      {
        icon: "fab fa-twitter",
        url: "#",
      },
      {
        icon: "fab fa-linkedin-in",
        url: "#",
      },
    ],
    designation: "Garden Experts",
    name: "Sophia Rodriguez",
    dropText: "LANDSCAPER",
  },
  {
    id: 3,
    mainImg: "/assets/img/team/home-6-teem-3.png",
    socials: [
      {
        icon: "fab fa-facebook-f",
        url: "#",
      },
      {
        icon: "fab fa-twitter",
        url: "#",
      },
      {
        icon: "fab fa-linkedin-in",
        url: "#",
      },
    ],
    designation: "Garden Experts",
    name: "Emily Nguyen",
    dropText: "LANDSCAPER",
  },
];
const teamData4 = [
  {
    id: 1,
    mainImg: "/assets/img/rv-9-member-1.jpg",
    socials: [
      {
        url: "#",
        icon: "fa-brands fa-facebook-f",
      },
      {
        url: "#",
        icon: "fa-brands fa-twitter",
      },
      {
        url: "#",
        icon: "fa-brands fa-linkedin-in",
      },
    ],
    designation: "Team Leader",
    name: "Sophia Johnson",
  },
  {
    id: 2,
    mainImg: "/assets/img/rv-9-member-2.jpg",
    socials: [
      {
        url: "#",
        icon: "fa-brands fa-facebook-f",
      },
      {
        url: "#",
        icon: "fa-brands fa-twitter",
      },
      {
        url: "#",
        icon: "fa-brands fa-linkedin-in",
      },
    ],
    designation: "Team Leader",
    name: "Alexander Smith",
  },
  {
    id: 3,
    mainImg: "/assets/img/rv-9-member-3.jpg",
    socials: [
      {
        url: "#",
        icon: "fa-brands fa-facebook-f",
      },
      {
        url: "#",
        icon: "fa-brands fa-twitter",
      },
      {
        url: "#",
        icon: "fa-brands fa-linkedin-in",
      },
    ],
    designation: "Team Leader",
    name: "Olivia Martinez",
  },
  {
    id: 4,
    mainImg: "/assets/img/rv-9-member-1.jpg",
    socials: [
      {
        url: "#",
        icon: "fa-brands fa-facebook-f",
      },
      {
        url: "#",
        icon: "fa-brands fa-twitter",
      },
      {
        url: "#",
        icon: "fa-brands fa-linkedin-in",
      },
    ],
    designation: "Team Leader",
    name: "Sophia Johnson",
  },
];
const accordionData = [
  {
    id: 1,
    title: "WHAT IS NATIONAL JUDICIAL COUNCIL?",
    desc: "The National Judicial Council is one of the Federal Executive Bodies created by virtue of Section 153 of the 1999 Constitution of the Federal Republic of Nigeria. In order to insulate the Judiciary from the whims and caprices of the Executive; hence guarantee the independence of this Arm of Government, which is a sine qua non for any Democratic Government, the National Judicial Council was created and vested with enormous powers and functions of the erstwhile Advisory Judicial Committee (AJC) which it replaced.",
  },
  {
    id: 2,
    title: "WHAT IS JUDICIAL EDUCATION AND TRAINING POLICY",
    desc: "The main objective of the Judicial Education and Training Policy is capacity building and improvement of Judicial Officers for better performance of Administration of Justice, The National Judicial Policy proceeds on certain basic propositions Continuing Judicial Education and Training is indispensable to efficient and qualitative justice delivery Judicial Education must be holistic, practical and supported by essential tools, such as library and use of the latest Information Technology.",
  },
];

const blogData4 = [
  {
    id: 1,
    img: "/assets/img/njcNewLogo.jpg",
    date: "Wed, 29th May, 2024",
    comments: 5,
    title: "CONFLICTING ORDERS 1",
    slug: slugify('CONFLICTING ORDERS 1')
  },
  {
    id: 2,
    img: "/assets/img/njcNewLogo.jpg",
    date: "Wed, 29th May, 2024",
    comments: 5,
    title: "CONFLICTING ORDERS 2",
    slug: "CONFLICTING ORDERS 2"
  },
  {
    id: 3,
    img: "/assets/img/njcNewLogo.jpg",
    date: "Wed, 29th May, 2024",
    comments: 5,
    title: "CONFLICTING ORDERS 3",
    slug: "CONFLICTING ORDERS 3"
  },
  {
    id: 4,
    img: "/assets/img/njcNewLogo.jpg",
    date: "Wed, 29th May, 2024",
    comments: 5,
    title: "CONFLICTING ORDERS 4",
    slug: "CONFLICTING ORDERS 4"
  },
  {
    id: 5,
    img: "/assets/img/njcNewLogo.jpg",
    date: "Wed, 29th May, 2024",
    comments: 5,
    title: "CONFLICTING ORDERS 5 ",
    slug: "CONFLICTING ORDERS 5"
  },
  {
    id: 6,
    img: "/assets/img/njcNewLogo.jpg",
    date: "Wed, 29th May, 2024",
    comments: 5,
    title: "CONFLICTING ORDERS 6",
    slug: "CONFLICTING ORDERS 6"
  },
 


 
];

const galleryData3 = [
  "/assets/img/rv-inner-gallery-1.jpg",
  "/assets/img/rv-inner-gallery-2.jpg",
  "/assets/img/rv-inner-gallery-3.jpg",
  "/assets/img/rv-inner-gallery-4.jpg",
  "/assets/img/rv-inner-gallery-5.jpg",
];

const shopData = [
  {
    id: 1,
    img: "/assets/img/rv-inner-product-1.png",
    hoverImg: "/assets/img/rv-inner-pro-hover-img-1.jpg",
    name: "Lipstick Set",
    slug: "lipstick-set",
    price: 140,
    prevPrice: 160,
    discount: true,
    popularity: 10,
    rating: 4,
    quantity: 1,
    category: "MAKEUP",
    color: "DEEP LILAC",
  },
  {
    id: 2,
    img: "/assets/img/rv-inner-product-2.png",
    hoverImg: "/assets/img/rv-inner-pro-hover-img-2.jpg",
    name: "Eyeshadow Palette",
    slug: "eyeshadow-palette",
    price: 235,
    prevPrice: 260,
    popularity: 25,
    rating: 3.5,
    quantity: 1,
    category: "POWDER",
    color: "CORAL RED",
  },
  {
    id: 3,
    img: "/assets/img/rv-inner-product-3.png",
    hoverImg: "/assets/img/rv-inner-pro-hover-img-3.jpg",
    name: "Blush Kit",
    slug: "blush-kit",
    price: 350,
    prevPrice: 360,
    discount: true,
    popularity: 18,
    rating: 5,
    quantity: 1,
    category: "COMPLEXION",
    color: "DEEP MULBERRY",
  },
  {
    id: 4,
    img: "/assets/img/rv-inner-product-4.png",
    hoverImg: "/assets/img/rv-inner-pro-hover-img-4.jpg",
    name: "Mascara",
    slug: "mascara",
    price: 400,
    prevPrice: 420,
    discount: true,
    popularity: 9,
    rating: 4,
    quantity: 1,
    category: "BEAUTY",
    color: "GRAPHITE BROWN",
  },
  {
    id: 5,
    img: "/assets/img/rv-inner-product-5.png",
    hoverImg: "/assets/img/rv-inner-pro-hover-img-5.jpg",
    name: "Foundation",
    slug: "foundation",
    price: 300,
    prevPrice: 315,
    popularity: 14,
    rating: 3,
    quantity: 1,
    category: "LIPSTICK",
    color: "TANGERINE",
  },
  {
    id: 6,
    img: "/assets/img/rv-inner-product-6.png",
    hoverImg: "/assets/img/rv-inner-pro-hover-img-6.jpg",
    name: "Makeup Brushes Set",
    slug: "makeup-brushes-set",
    price: 540,
    prevPrice: 550,
    popularity: 10,
    rating: 4,
    quantity: 1,
    category: "LUMINOUS",
    color: "PORCELAIN",
  },
  {
    id: 7,
    img: "/assets/img/rv-inner-product-7.png",
    hoverImg: "/assets/img/rv-inner-pro-hover-img-7.jpg",
    name: "Setting Spray",
    slug: "setting-spray",
    price: 180,
    prevPrice: 220,
    discount: true,
    popularity: 18,
    rating: 3,
    quantity: 1,
    category: "MUST HAVE",
    color: "DEEP MULBERRY",
  },
  {
    id: 8,
    img: "/assets/img/rv-inner-product-8.png",
    hoverImg: "/assets/img/rv-inner-pro-hover-img-8.jpg",
    name: "Concealer Stick",
    slug: "concealer-stick",
    price: 220,
    prevPrice: 230,
    discount: true,
    popularity: 15,
    rating: 5,
    quantity: 1,
    category: "VAMP",
    color: "GRAPHITE BROWN",
  },
  {
    id: 9,
    img: "/assets/img/rv-inner-product-9.png",
    hoverImg: "/assets/img/rv-inner-pro-hover-img-1.jpg",
    name: "Compact Powder",
    slug: "compact-powder",
    price: 250,
    prevPrice: 320,
    discount: true,
    popularity: 11,
    rating: 4.5,
    quantity: 1,
    category: "VARIABLE",
    color: "CORAL RED",
  },
  {
    id: 10,
    img: "/assets/img/rv-inner-product-10.png",
    hoverImg: "/assets/img/rv-inner-pro-hover-img-2.jpg",
    name: "Lip Gloss",
    slug: "lip-gloss",
    price: 450,
    prevPrice: 480,
    popularity: 5,
    rating: 2,
    quantity: 1,
    category: "VAMP",
    color: "GRAPHITE BROWN",
  },
  {
    id: 11,
    img: "/assets/img/rv-inner-product-11.png",
    hoverImg: "/assets/img/rv-inner-pro-hover-img-3.jpg",
    name: "Makeup Remover",
    slug: "makeup-remover",
    price: 350,
    prevPrice: 370,
    discount: true,
    popularity: 21,
    rating: 4,
    quantity: 1,
    category: "MUST HAVE",
    color: "DEEP MULBERRY",
  },
  {
    id: 12,
    img: "/assets/img/rv-inner-product-12.png",
    hoverImg: "/assets/img/rv-inner-pro-hover-img-4.jpg",
    name: "Highlighter Stick",
    slug: "highlighter-stick",
    price: 220,
    prevPrice: 250,
    popularity: 14,
    rating: 4,
    quantity: 1,
    category: "LUMINOUS",
    color: "PORCELAIN",
  },
  {
    id: 13,
    img: "/assets/img/rv-inner-product-13.png",
    hoverImg: "/assets/img/rv-inner-pro-hover-img-5.jpg",
    name: "Lipstick Set",
    slug: "lipstick-set",
    price: 180,
    prevPrice: 185,
    discount: true,
    popularity: 14,
    rating: 3,
    quantity: 1,
    category: "MAKEUP",
    color: "DEEP LILAC",
  },
  {
    id: 14,
    img: "/assets/img/rv-inner-product-14.png",
    hoverImg: "/assets/img/rv-inner-pro-hover-img-6.jpg",
    name: "Eyeshadow Palette",
    slug: "eyeshadow-palette",
    price: 350,
    prevPrice: 360,
    popularity: 25,
    rating: 3.5,
    quantity: 1,
    category: "MUST HAVE",
    color: "DEEP LILAC",
  },
  {
    id: 15,
    img: "/assets/img/rv-inner-product-15.png",
    hoverImg: "/assets/img/rv-inner-pro-hover-img-7.jpg",
    name: "Blush Kit",
    slug: "blush-kit",
    price: 450,
    prevPrice: 460,
    discount: true,
    popularity: 18,
    rating: 5,
    quantity: 1,
    category: "VARIABLE",
    color: "CORAL RED",
  },
  {
    id: 16,
    img: "/assets/img/rv-inner-product-16.png",
    hoverImg: "/assets/img/rv-inner-pro-hover-img-8.jpg",
    name: "Mascara",
    slug: "mascara",
    price: 150,
    prevPrice: 180,
    discount: true,
    popularity: 9,
    rating: 4,
    quantity: 1,
    category: "LUMINOUS",
    color: "CORAL RED",
  },
  {
    id: 17,
    img: "/assets/img/rv-inner-product-17.png",
    hoverImg: "/assets/img/rv-inner-pro-hover-img-1.jpg",
    name: "Foundation",
    slug: "foundation",
    price: 300,
    prevPrice: 320,
    popularity: 14,
    rating: 3,
    quantity: 1,
    category: "LIPSTICK",
    color: "TANGERINE",
  },
  {
    id: 18,
    img: "/assets/img/rv-inner-product-18.png",
    hoverImg: "/assets/img/rv-inner-pro-hover-img-2.jpg",
    name: "Makeup Brushes Set",
    slug: "makeup-brushes-set",
    price: 400,
    prevPrice: 455,
    popularity: 10,
    rating: 4,
    quantity: 1,
    category: "VAMP",
    color: "GRAPHITE BROWN",
  },
  {
    id: 19,
    img: "/assets/img/rv-12-pro-1.jpg",
    name: "Cruelty-Free Soap",
    slug: "cruelty-free-soap",
    price: 140,
    prevPrice: 160,
    discount: true,
    popularity: 10,
    rating: 4,
    quantity: 1,
    category: "MAKEUP",
    color: "DEEP LILAC",
  },
  {
    id: 20,
    img: "/assets/img/rv-12-pro-5.png",
    name: "Vegan Hand Cream",
    slug: "vegan-hand-cream",
    price: 235,
    prevPrice: 260,
    popularity: 25,
    rating: 3.5,
    quantity: 1,
    category: "POWDER",
    color: "CORAL RED",
  },
  {
    id: 21,
    img: "/assets/img/rv-12-pro-6.png",
    name: "Plant-Based Deodorant",
    slug: "plant-based-deodorant",
    price: 350,
    prevPrice: 360,
    discount: true,
    popularity: 18,
    rating: 5,
    quantity: 1,
    category: "COMPLEXION",
    color: "DEEP MULBERRY",
  },
  {
    id: 22,
    img: "/assets/img/rv-12-pro-8.png",
    name: "Biodegradable Sunscreen",
    slug: "biodegradable-sunscreen",
    price: 400,
    prevPrice: 420,
    discount: true,
    popularity: 9,
    rating: 4,
    quantity: 1,
    category: "BEAUTY",
    color: "GRAPHITE BROWN",
  },
  {
    id: 23,
    img: "/assets/img/rv-12-pro-7.png",
    name: "Organic Toothpaste",
    slug: "organic-toothpaste",
    price: 300,
    prevPrice: 315,
    popularity: 14,
    rating: 3,
    quantity: 1,
    category: "LIPSTICK",
    color: "TANGERINE",
  },
  {
    id: 24,
    img: "/assets/img/rv-12-pro-8.png",
    name: "Sustainable Body Lotion",
    slug: "sustainable-body-lotion",
    price: 540,
    prevPrice: 550,
    popularity: 10,
    rating: 4,
    quantity: 1,
    category: "LUMINOUS",
    color: "PORCELAIN",
  },
];

const productDetailsImage = [
  {
    thumbs: [
      "/assets/img/rv-product-details-1.png",
      "/assets/img/rv-product-details-2.png",
      "/assets/img/rv-product-details-3.png",
      "/assets/img/rv-product-details-4.png",
    ],
    main: [
      "/assets/img/rv-inner-gallery-1.jpg",
      "/assets/img/rv-inner-gallery-2.jpg",
      "/assets/img/rv-inner-gallery-3.jpg",
      "/assets/img/rv-inner-gallery-4.jpg",
    ],
  },
];
const categoryData = [
  {
    id: 1,
    mainImg: "/assets/img/rv-12-cate-1.jpg",
    category: "Cinnamon Tea",
    desc: "Cinnamon tea is typically made steeping cinnamon bark.",
  },
  {
    id: 2,
    mainImg: "/assets/img/rv-12-cate-2.jpg",
    category: "Black Tea",
    desc: " Black tea is a type of tea that fully oxidized, resulting.",
  },
  {
    id: 3,
    mainImg: "/assets/img/rv-12-cate-3.jpg",
    category: "Lemon Tea",
    desc: " Lemon tea offers a delightful combination of the natural.",
  },
  {
    id: 4,
    mainImg: "/assets/img/rv-12-cate-4.jpg",
    category: "Green Tea",
    desc: "Green tea contains catechins, powerful antioxidants.",
  },
];

const blogData6 = [
  {
    id: 1,
    img: "/assets/img/org-blog-10.jpg",
    date: "December 15, 2023",
    category: "Organic",
    title: "Embrace Rainy Days With a Comforting Tea.",
    slug: "embrace-rainy-days-with-a-comforting-tea",
  },
  {
    id: 2,
    img: "/assets/img/org-blog-11.jpg",
    date: "January 10, 2024",
    category: "China Tea",
    title: "The Nature of Tea Captures Revitalizing Freshness.",
    slug: "the-nature-of-tea-captures-revitalizing-freshness",
  },
  {
    id: 3,
    img: "/assets/img/org-blog-12.jpg",
    date: "February 2, 2024",
    category: "Organic",
    title: "Tea Carries Natural Freshness Akin to The Outdoors.",
    slug: "tea-carries-natural-freshness-akin-to-the-outdoors",
  },
];

const partnerData = [
  "/assets/img/rv-12-partner-1.png",
  "/assets/img/rv-12-partner-2.png",
  "/assets/img/rv-12-partner-3.png",
  "/assets/img/rv-12-partner-4.png",
  "/assets/img/rv-12-partner-5.png",
  "/assets/img/rv-12-partner-1.png",
];
const projectData3 = [
  {
    id: 1,
    img: "/assets/img/rv-9-project-1.jpg",
    subTitle: "Protecting Nature",
    title: "Green Oasis Initiative",
    slug: "green-oasis-initiative",
  },
  {
    id: 2,
    img: "/assets/img/rv-9-project-2.jpg",
    subTitle: "Lawn Renovation",
    title: "Sustainable Planting Drive",
    slug: "sustainable-planting-drive",
  },
  {
    id: 3,
    img: "/assets/img/rv-9-project-3.jpg",
    subTitle: "Environment",
    title: "Ecological Harmony Project",
    slug: "ecological-harmony-project",
  },
  {
    id: 4,
    img: "/assets/img/rv-9-project-4.jpg",
    subTitle: "Wild Animals",
    title: "Aquatic Life Preservation",
    slug: "aquatic-life-preservation",
  },
  {
    id: 5,
    img: "/assets/img/rv-8-project-1.jpg",
    subTitle: "Protecting Nature",
    title: "Biodiversity Conservation",
    slug: "biodiversity-conservation",
  },
  {
    id: 6,
    img: "/assets/img/rv-8-project-3.jpg",
    subTitle: "Protecting Nature",
    title: "Eco-Forest Regeneration",
    slug: "eco-forest-regeneration",
  },
];
const blogData7 = [
  {
    id: 1,
    img: "/assets/img/org-blog-13.jpg",
    mainImg: "/assets/img/rv-9-blog-1.jpg",
    comments: 5,
    date: "December 15, 2023",
    title: "Technology & Solutions For Saving The Environment.",
    slug: "technology-solutions-for-saving-the-environment",
  },
  {
    id: 2,
    img: "/assets/img/org-blog-14.jpg",
    mainImg: "/assets/img/rv-9-blog-2.jpg",
    comments: 5,
    date: "January 10, 2024",
    title: "Techniques to Ensure The Continuity of Wildlife.",
    slug: "techniques-to-ensure-the-continuity-of-wildlife",
  },
  {
    id: 3,
    img: "/assets/img/org-blog-15.jpg",
    mainImg: "/assets/img/rv-6-blog-1.jpg",
    comments: 5,
    date: "February 2, 2024",
    title: "3 Incentives For Emphasizing Community Building.",
    slug: "incentives-for-emphasizing-community-building.",
  },
];
const galleryData4 = [
  "/assets/img/rv-9-gallery-1.jpg",
  "/assets/img/rv-9-gallery-2.jpg",
  "/assets/img/rv-9-gallery-3.jpg",
  "/assets/img/rv-9-gallery-4.jpg",
  "/assets/img/rv-9-gallery-5.jpg",
];

const functionsData = [
  {
    id: 1,
    img: "assets/img/rv-8-function-icon-1.png",
    title: "Bathroom",
    subTitle: "There many lorem variation.",
  },
  {
    id: 2,
    img: "assets/img/rv-8-function-icon-2.png",
    title: "Kitchen",
    subTitle: "There many lorem variation.",
  },
  {
    id: 3,
    img: "assets/img/rv-8-function-icon-3.png",
    title: "Windows",
    subTitle: "There many lorem variation.",
  },
  {
    id: 4,
    img: "assets/img/rv-8-function-icon-4.png",
    title: "Express",
    subTitle: "There many lorem variation.",
  },
  {
    id: 5,
    img: "assets/img/rv-8-function-icon-1.png",
    title: "Bathroom",
    subTitle: "There many lorem variation.",
  },
];

const projectData4 = [
  {
    id: 1,
    img: "assets/img/rv-8-project-1.jpg",
    subTitle: "Ceramic Tiles",
    title: "Minimal Guests House",
  },
  {
    id: 2,
    img: "assets/img/rv-8-project-2.jpg",
    subTitle: "Marble Flooring",
    title: "Showroom Featuring Options",
  },
  {
    id: 3,
    img: "assets/img/rv-8-project-3.jpg",
    subTitle: "Ceramic Tiles",
    title: "Laminate Flooring",
  },
  {
    id: 4,
    img: "assets/img/rv-8-project-1.jpg",
    subTitle: "Ceramic Tiles",
    title: "Minimal Guests House",
  },
];
const pricingData3 = [
  {
    id: 1,
    plan: "Basic Plan",
    price: 84,
    packageInfos: [
      "Surfaces Hand Wiped",
      "Bedrooms cleaning",
      "Bedrooms cleaning",
      "Window cleaning",
      "Floor cleaning",
    ],
  },
  {
    id: 2,
    plan: "Standard Plan",
    price: 124,
    packageInfos: [
      "Surfaces Hand Wiped",
      "Bedrooms cleaning",
      "Bedrooms cleaning",
      "Window cleaning",
      "Floor cleaning",
    ],
  },
  {
    id: 3,
    plan: "Ultimate Plan",
    price: 240,
    packageInfos: [
      "Surfaces Hand Wiped",
      "Bedrooms cleaning",
      "Bedrooms cleaning",
      "Window cleaning",
      "Floor cleaning",
    ],
  },
];

const partnerData2 = [
  "assets/img/rv-8-partner-1.png",
  "assets/img/rv-8-partner-2.png",
  "assets/img/rv-8-partner-3.png",
  "assets/img/rv-8-partner-4.png",
  "assets/img/rv-8-partner-5.png",
  "assets/img/rv-8-partner-6.png",
  "assets/img/rv-8-partner-1.png",
];

const teamData5 = [
  {
    id: 1,
    img: "assets/img/rv-8-member-1.jpg",
    socials: [
      {
        url: "#",
        icon: "fa-brands fa-facebook-f",
      },
      {
        url: "#",
        icon: "fa-brands fa-twitter",
      },
      {
        url: "#",
        icon: "fa-brands fa-linkedin-in",
      },
    ],
    designation: "Team Leader",
    name: "Desmond Eagle",
  },
  {
    id: 2,
    img: "assets/img/rv-8-member-2.jpg",
    socials: [
      {
        url: "#",
        icon: "fa-brands fa-facebook-f",
      },
      {
        url: "#",
        icon: "fa-brands fa-twitter",
      },
      {
        url: "#",
        icon: "fa-brands fa-linkedin-in",
      },
    ],
    designation: "Cleaning Specialist",
    name: "Natalya Undergrowth",
  },
  {
    id: 3,
    img: "assets/img/rv-8-member-3.jpg",
    socials: [
      {
        url: "#",
        icon: "fa-brands fa-facebook-f",
      },
      {
        url: "#",
        icon: "fa-brands fa-twitter",
      },
      {
        url: "#",
        icon: "fa-brands fa-linkedin-in",
      },
    ],
    designation: "Team Leader",
    name: "Malcolm Function",
  },
  {
    id: 4,
    img: "assets/img/rv-8-member-4.jpg",
    socials: [
      {
        url: "#",
        icon: "fa-brands fa-facebook-f",
      },
      {
        url: "#",
        icon: "fa-brands fa-twitter",
      },
      {
        url: "#",
        icon: "fa-brands fa-linkedin-in",
      },
    ],
    designation: "Team Leader",
    name: "Thomas R. Toe",
  },
  {
    id: 5,
    img: "assets/img/rv-8-member-1.jpg",
    socials: [
      {
        url: "#",
        icon: "fa-brands fa-facebook-f",
      },
      {
        url: "#",
        icon: "fa-brands fa-twitter",
      },
      {
        url: "#",
        icon: "fa-brands fa-linkedin-in",
      },
    ],
    designation: "Team Leader",
    name: "Desmond Eagle",
  },
];

const blogData8 = [
  {
    id: 1,
    category: "Cleaning",
    date: "June 15, 2023",
    title: "How To Help With Cleaning.",
    desc: "Sed finibus amet dolor maximus sodales egestas ut elit id sollicitudin.",
  },
  {
    id: 2,
    category: "Housekeeper",
    date: "March 24, 2023",
    title: "Preserve Your Time and Effort.",
    desc: "Sed finibus amet dolor maximus sodales egestas ut elit id sollicitudin.",
  },
  {
    id: 3,
    category: "Cleaning",
    date: "June 23, 2023",
    title: "Avoid The Trouble of Washing.",
    desc: "Sed finibus amet dolor maximus sodales egestas ut elit id sollicitudin.",
  },
];

const bannerData4 = [
  {
    id: 1,
    style: "",
    title: "Luxury Vehicle Grooming Solutions.",
    img: "assets/img/slider/home-4-banner-sh.png",
    desc: "Ut a enim aliquam, vehicula sem at, luctus risus. Vestibulum ultrices molestie auctor ornare scelerisque odio rhoncus at.",
    bottomImg: "assets/img/slider/home-4-banner-bg-1.png",
  },
  {
    id: 2,
    style: "car_wash_2",
    title: "Luxury Vehicle Grooming Solutions.",
    img: "assets/img/slider/home-4-banner-sh.png",
    desc: "Ut a enim aliquam, vehicula sem at, luctus risus. Vestibulum ultrices molestie auctor ornare scelerisque odio rhoncus at.",
    bottomImg: "assets/img/slider/home-4-banner-bg-2.png",
  },
  {
    id: 3,
    style: "car_wash_3",
    title: "Luxury Vehicle Grooming Solutions.",
    img: "assets/img/slider/home-4-banner-sh.png",
    desc: "Ut a enim aliquam, vehicula sem at, luctus risus. Vestibulum ultrices molestie auctor ornare scelerisque odio rhoncus at.",
    bottomImg: "assets/img/slider/home-4-banner-bg-3.png",
  },
];

const serviceData5 = [
  {
    id: 1,
    img: "assets/img/services/home-4-service-1.png",
    icon: "assets/img/services/home-4-icon-1.png",
    serviceType: "car wash",
    service: "Contactless Washing",
    serviceList: [
      "Car is not Starting Inspection",
      "Timing Belt Replacement",
      "Change Oil and Filter",
      "Brake Pads Replacement",
    ],
  },
  {
    id: 2,
    img: "assets/img/services/home-4-service-2.png",
    icon: "assets/img/services/home-4-icon-2.png",
    serviceType: "Diagnostics",
    service: "Auto Detailing",
    serviceList: [
      "Car is not Starting Inspection",
      "Timing Belt Replacement",
      "Change Oil and Filter",
      "Brake Pads Replacement",
    ],
  },
  {
    id: 3,
    img: "assets/img/services/home-4-service-3.png",
    icon: "assets/img/services/home-4-icon-3.png",
    serviceType: "ENGINE CARE",
    service: "Radiator Fixed",
    serviceList: [
      "Car is not Starting Inspection",
      "Timing Belt Replacement",
      "Change Oil and Filter",
      "Brake Pads Replacement",
    ],
  },
  {
    id: 4,
    img: "assets/img/services/home-4-service-1.png",
    icon: "assets/img/services/home-4-icon-1.png",
    serviceType: "car wash",
    service: "Contactless Washing",
    serviceList: [
      "Car is not Starting Inspection",
      "Timing Belt Replacement",
      "Change Oil and Filter",
      "Brake Pads Replacement",
    ],
  },
];

const teamData6 = [
  {
    id: 1,
    img: "assets/img/team/home-4-team-1.png",
    socials: [
      {
        urL: "#",
        icon: "fab fa-facebook-f",
      },
      {
        urL: "#",
        icon: "fab fa-twitter",
      },
      {
        urL: "#",
        icon: "fab fa-instagram-square",
      },
      {
        urL: "#",
        icon: "fab fa-linkedin-in",
      },
    ],
    designation: " Comedy, Music",
    name: "Desmond Eagle",
  },
  {
    id: 2,
    img: "assets/img/team/home-4-team-2.png",
    socials: [
      {
        urL: "#",
        icon: "fab fa-facebook-f",
      },
      {
        urL: "#",
        icon: "fab fa-twitter",
      },
      {
        urL: "#",
        icon: "fab fa-instagram-square",
      },
      {
        urL: "#",
        icon: "fab fa-linkedin-in",
      },
    ],
    designation: "Movie Editor",
    name: "Ruby Von Rails",
  },
  {
    id: 3,
    img: "assets/img/team/home-4-team-3.png",
    socials: [
      {
        urL: "#",
        icon: "fab fa-facebook-f",
      },
      {
        urL: "#",
        icon: "fab fa-twitter",
      },
      {
        urL: "#",
        icon: "fab fa-instagram-square",
      },
      {
        urL: "#",
        icon: "fab fa-linkedin-in",
      },
    ],
    designation: "Producer",
    name: "Dylan Meringue",
  },
  {
    id: 4,
    img: "assets/img/team/home-4-team-4.png",
    socials: [
      {
        urL: "#",
        icon: "fab fa-facebook-f",
      },
      {
        urL: "#",
        icon: "fab fa-twitter",
      },
      {
        urL: "#",
        icon: "fab fa-instagram-square",
      },
      {
        urL: "#",
        icon: "fab fa-linkedin-in",
      },
    ],
    designation: "Founder",
    name: "Hugh Saturation",
  },
  {
    id: 5,
    img: "assets/img/team/home-4-team-1.png",
    socials: [
      {
        urL: "#",
        icon: "fab fa-facebook-f",
      },
      {
        urL: "#",
        icon: "fab fa-twitter",
      },
      {
        urL: "#",
        icon: "fab fa-instagram-square",
      },
      {
        urL: "#",
        icon: "fab fa-linkedin-in",
      },
    ],
    designation: " Comedy, Music",
    name: "Desmond Eagle",
  },
];

const teamData7 = [
  {
    id: 1,
    img: "assets/img/team/home-8-teem-1.png",
    profession: "BARBER",
    name: "Parsley Montana",
    socials: [
      {
        url: "#",
        icon: "fab fa-facebook-f",
      },
      {
        url: "#",
        icon: "fab fa-linkedin-in",
      },
      {
        url: "#",
        icon: "fab fa-twitter",
      },
      {
        url: "#",
        icon: "fab fa-pinterest",
      },
    ],
  },
  {
    id: 2,
    img: "assets/img/team/home-8-teem-2.png",
    profession: "TOP BARBER",
    name: "Parsley Montana",
    socials: [
      {
        url: "#",
        icon: "fab fa-facebook-f",
      },
      {
        url: "#",
        icon: "fab fa-linkedin-in",
      },
      {
        url: "#",
        icon: "fab fa-twitter",
      },
      {
        url: "#",
        icon: "fab fa-pinterest",
      },
    ],
  },
  {
    id: 3,
    img: "assets/img/team/home-8-teem-3.png",
    profession: "STAFF BARBER",
    name: "Parsley Montana",
    socials: [
      {
        url: "#",
        icon: "fab fa-facebook-f",
      },
      {
        url: "#",
        icon: "fab fa-linkedin-in",
      },
      {
        url: "#",
        icon: "fab fa-twitter",
      },
      {
        url: "#",
        icon: "fab fa-pinterest",
      },
    ],
  },
  {
    id: 4,
    img: "assets/img/team/home-8-teem-1.png",
    profession: "BARBER",
    name: "Parsley Montana",
    socials: [
      {
        url: "#",
        icon: "fab fa-facebook-f",
      },
      {
        url: "#",
        icon: "fab fa-linkedin-in",
      },
      {
        url: "#",
        icon: "fab fa-twitter",
      },
      {
        url: "#",
        icon: "fab fa-pinterest",
      },
    ],
  },
];

const logoData = [
  "assets/img/logo/home-8-logo-1.png",
  "assets/img/logo/home-8-logo-2.png",
  "assets/img/logo/home-8-logo-3.png",
  "assets/img/logo/home-8-logo-4.png",
  "assets/img/logo/home-8-logo-5.png",
  "assets/img/logo/home-8-logo-6.png",
  "assets/img/logo/home-8-logo-3.png",
  "assets/img/logo/home-8-logo-5.png",
];

const testimonialData4 = [
  {
    id: 1,
    img: "assets/img/testimonial/home-8-testimonial-1.png",
    name: "Douglas Lyphe",
    testimony: "Came for Haircut",
  },
  {
    id: 2,
    img: "assets/img/testimonial/home-8-testimonial-2.png",
    name: "Douglas Lyphe",
    testimony: "Came for Haircut",
  },
  {
    id: 3,
    img: "assets/img/testimonial/home-4-1.png",
    name: "Douglas Lyphe",
    testimony: "Came for Haircut",
  },
  {
    id: 4,
    img: "assets/img/testimonial/home-8-testimonial-1.png",
    name: "Douglas Lyphe",
    testimony: "Came for Haircut",
  },
];

const testimonialData5 = [
  {
    id: 1,
    testimony: "Total Seat Revival & Cleaning Service.",
    desc: "UPraesent consequat lacus a interdum vehicula. Integer commodo magna, ac vestibulum augue. Donec pretium mauris venenatis amet maximus ipsum. Phasellus gravida lorem.",
  },
  {
    id: 2,
    testimony: "Total Seat Revival & Cleaning Service.",
    desc: "UPraesent consequat lacus a interdum vehicula. Integer commodo magna, ac vestibulum augue. Donec pretium mauris venenatis amet maximus ipsum. Phasellus gravida lorem.",
  },
];

const serviceData6 = [
  {
    id: 1,
    img: "assets/img/services/home-8-service-1.png",
    icon: "assets/img/services/home-8-service-icon-1.png",
    title: "Hair Cutting",
    services: [
      {
        service: "Classic Cut",
        price: 22,
        time: 15,
      },
      {
        service: "Kids Haircut",
        price: 34,
        time: 28,
      },
      {
        service: "Deluxe Cut",
        price: 42,
        time: 35,
      },
    ],
  },
  {
    id: 2,
    img: "assets/img/services/home-8-service-2.png",
    icon: "assets/img/services/home-8-service-icon-2.png",
    title: "Hair Color",
    services: [
      {
        service: "Pure-Diamond",
        price: 26,
        time: 30,
      },
      {
        service: "Hot-Toffee",
        price: 35,
        time: 45,
      },
      {
        service: "French Roast",
        price: 45,
        time: 52,
      },
    ],
  },
  {
    id: 3,
    img: "assets/img/services/home-8-service-3.png",
    icon: "assets/img/services/home-8-service-icon-3.png",
    title: "Shave Style",
    services: [
      {
        service: "Cut & Design",
        price: 26,
        time: 15,
      },
      {
        service: "Shampoo",
        price: 32,
        time: 28,
      },
      {
        service: "Razor Fade",
        price: 44,
        time: 35,
      },
    ],
  },
];


export {
  speakersData,
  pricingData,
  galleryData,
  blogData,
  scheduleData,
  scheduleInfoData,
  portfolioData,
  blogData2,
  historyData,
  aboutData,
  skillData,
  awardData,
  bannerData,
  serviceData,
  teamData,
  portfolioData2,
  testimonialData,
  partnerImages,
  blogData3,
  galleryData2,
  serviceData2,
  projectData,
  teamData2,
  accordionData,
  blogData4,
  galleryData3,
  shopData,
  productDetailsImage,
  serviceData3,
  testimonialData2,
  pricingData2,
  portfolioData3,
  teamData3,
  blogData5,
  bannerData2,
  categoryData,
  projectData2,
  testimonialData3,
  blogData6,
  partnerData,
  bannerData3,
  serviceData4,
  projectData3,
  teamData4,
  blogData7,
  galleryData4,
  functionsData,
  projectData4,
  pricingData3,
  partnerData2,
  teamData5,
  blogData8,
  bannerData4,
  serviceData5,
  teamData6,
  teamData7,
  logoData,
  testimonialData4,
  testimonialData5,
  serviceData6,
};
