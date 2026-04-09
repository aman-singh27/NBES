import type { Metadata } from "next";
import Script from "next/script";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Contact New Bharat Engineering Services - Delhi-NCR Facility Services",
  description:
    "Contact NBES for electrical, plumbing, CCTV, earthing or facility service requirements in Delhi, Gurgaon and Noida. Call +91 99990 60083 or email contact@nbesindia.com.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "New Bharat Engineering Services",
  "@id": SITE_URL,
  url: SITE_URL,
  telephone: "+91-9999060083",
  email: "contact@nbesindia.com",
  foundingDate: "2003",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "366, Saraswati Vihar, Mehrauli Road",
      addressLocality: "Gurgaon",
      postalCode: "122001",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress:
        "Shop No. 1, Khasra No. 38, Bhartha Complex, Part-II, Nithari, Sector-31",
      addressLocality: "Noida",
      postalCode: "201301",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  ],
  openingHours: "Mo-Sa 09:00-18:00",
  areaServed: "Delhi-NCR",
};

const contactFaqs = [
  {
    question: "How quickly does NBES respond to enquiries?",
    answer:
      "NBES responds to project enquiries within 24 working hours for Delhi-NCR service requests.",
  },
  {
    question: "Which areas does NBES cover?",
    answer:
      "NBES serves Gurgaon, Noida, Delhi, Faridabad, Greater Noida, and surrounding NCR locations.",
  },
];

const coveredAreas = [
  "Gurgaon",
  "Noida",
  "Delhi",
  "Faridabad",
  "Greater Noida",
  "NCR Region",
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Contact", url: `${SITE_URL}/contact` },
        ]}
      />
      <FAQSchema faqs={contactFaqs} />
      <Script id="local-business-jsonld" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>

      <ScrollRevealBlock>
        <section className="bg-black py-20 text-center">
          <div className="container-width">
            <SectionLabel centered>Get In Touch</SectionLabel>
            <h1 className="heading-uppercase mt-4 text-display-lg text-white">
              LET&apos;S DISCUSS
              <br />
              YOUR PROJECT
            </h1>
            <p className="body-light mx-auto mt-4 max-w-md text-white/65">
              We respond to all project enquiries within 24 working hours.
            </p>
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-[55fr_45fr] items-start gap-20 md:grid-cols-1">
              <ContactForm />

              <aside>
                <h2 className="mb-8 font-display text-[28px] font-bold uppercase text-black">
                  Direct Contact
                </h2>

                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[8px] bg-accent-light">
                      <Phone
                        className="h-5 w-5 text-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="mb-1 font-body text-[11px] font-medium uppercase tracking-[0.1em] text-mid-grey">
                        Phone
                      </p>
                      <p className="font-body text-[15px] font-medium text-black">
                        0124-4283894
                      </p>
                      <p className="font-body text-[15px] font-medium text-black">
                        +91 99990 60083
                      </p>
                      <p className="mt-1 font-body text-[13px] text-mid-grey">
                        Mon-Sat, 9am-6pm IST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[8px] bg-accent-light">
                      <MessageCircle
                        className="h-5 w-5 text-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="mb-1 font-body text-[11px] font-medium uppercase tracking-[0.1em] text-mid-grey">
                        WhatsApp
                      </p>
                      <p className="font-body text-[15px] font-medium text-black">
                        +91 99990 60083{" "}
                        <a
                          href="https://wa.me/919999060083"
                          className="text-accent transition-colors hover:text-accent-dark"
                        >
                          Open WhatsApp -&gt;
                        </a>
                      </p>
                      <p className="mt-1 font-body text-[13px] text-mid-grey">
                        Quick responses
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[8px] bg-accent-light">
                      <Mail
                        className="h-5 w-5 text-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="mb-1 font-body text-[11px] font-medium uppercase tracking-[0.1em] text-mid-grey">
                        Email
                      </p>
                      <p className="font-body text-[15px] font-medium text-black">
                        contact@nbesindia.com
                      </p>
                      <p className="mt-1 font-body text-[13px] text-mid-grey">
                        nbesindia@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[8px] bg-accent-light">
                      <MapPin
                        className="h-5 w-5 text-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="mb-1 font-body text-[11px] font-medium uppercase tracking-[0.1em] text-mid-grey">
                        Location
                      </p>
                      <p className="font-body text-[15px] font-medium text-black">
                        366, Saraswati Vihar, Mehrauli Road
                      </p>
                      <p className="mt-1 font-body text-[13px] text-mid-grey">
                        Gurgaon, Haryana - 122001
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-8 border-t border-border" />

                <p className="eyebrow-label">Areas We Serve</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {coveredAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-[4px] border border-border bg-off-white px-3 py-[6px] font-body text-[13px] text-charcoal"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3 rounded-[8px] border border-accent/20 bg-accent-light p-5">
                  <Clock className="h-5 w-5 text-accent" aria-hidden="true" />
                  <p className="font-body text-[14px] text-charcoal">
                    We reply to all project enquiries within 24 working hours.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="h-[400px] w-full bg-[#e8e7e0]">
          <iframe
            title="NBES Gurgaon Office Map"
            src="https://www.google.com/maps?q=366%20Saraswati%20Vihar%20Mehrauli%20Road%20Gurgaon%20122001&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </section>
      </ScrollRevealBlock>
    </>
  );
}
