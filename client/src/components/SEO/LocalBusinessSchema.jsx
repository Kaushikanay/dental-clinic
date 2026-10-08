const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",

    "@id": "https://thesmilemax.vercel.app/#dentist",

    name: "The SmileMax Dental Clinic",

    url: "https://thesmilemax.vercel.app/",

    logo: "https://thesmilemax.vercel.app/images/The%20SmileMax%20Dental%20Clinic%20Logo.png",

    image: [
      "https://thesmilemax.vercel.app/images/hero-dental.jpg"
    ],

    description:
      "The SmileMax Dental Clinic provides professional dental care and modern dental treatments in Muzaffarpur, Bihar.",

    telephone: "+91 99050 30591",

    email: "dsmilemax@gmail.com",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Juran Chhapra Main Road, Above Satyanarayan Nursing Home",
      addressLocality: "Muzaffarpur",
      addressRegion: "Bihar",
      postalCode: "842001",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.1277688,
      longitude: 85.3752041,
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "14:00",
      },
    ],

    sameAs: [
      "https://www.facebook.com/smilemax2019",
      "https://www.instagram.com/smilemax2019",
      "https://www.youtube.com/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
};

export default LocalBusinessSchema;