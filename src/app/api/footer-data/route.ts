import { NextResponse } from "next/server";
export const dynamic = "force-static";
export const revalidate = false;


const footerData = {
  brand: {
    name: "Pratham Kadam",
    tagline:
      "Empowering businesses with innovative solutions. Let's create something amazing together.",
    socialLinks: [
      {
        icon: "/images/home/footerSocialIcon/linkedin.svg",
        dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
        link: "https://www.linkedin.com/in/pratham-kadam-6aa34233b/",
      },
      {
        icon: "/images/home/footerSocialIcon/instagram.svg",
        dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
        link: "https://www.instagram.com/pratham__kadam1705",
      },
    ],
  },
  sitemap: {
    name: "Sitemap",
    links: [
      { name: "About us", url: "/#aboutus" },
      { name: "Work", url: "/#work" },
      { name: "Services", url: "/#services" },
      { name: "Contact us", url: "/contact" },
    ],
  },
  otherPages: {
    name: "Other Pages",
    links: [
      { name: "Error 404", url: "/not-found" },
      { name: "Terms & Conditions", url: "/terms-and-conditions" },
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Documentation", url: "/documentation" },
    ],
  },
  contactDetails: {
    name: "Contact Details",
    address: "Ahmedabad, Gujarat, India",
    email: "prathamkadam0001@gmail.com",
    phone: "+91 8128293873",
  },
  copyright: "©2025 Pratham kadam. All Rights Reserved",
};

export const GET = async () => {
  return NextResponse.json({
    footerData,
  });
};
