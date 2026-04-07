import type { Metadata } from "next";
import Script from "next/script";
import { Clock, Mail, Map, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Contact NBES | Get a Quote",
  description:
    "Get in touch with NBES for a quote on electrical works, earthing solutions, security systems, or technical manpower. Respond within 24 hours.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "NBES",
  "@id": "https://nbes.in",
  url: "https://nbes.in",
  telephone: "+91-XXXXXXXXXX",
  email: "info@nbes.in",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 09:00-19:00",
  areaServed: "India",
};

const coveredStates = [
  "[State 1]",
  "[State 2]",
  "[State 3]",
  "[State 4]",
  "[State 5]",
];

export default function ContactPage() {
  return (
    <>
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
                <h3 className="mb-8 font-display text-[28px] font-bold uppercase text-black">
                  Direct Contact
                </h3>

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
                        +91 XXXX XXXXXX
                      </p>
                      <p className="mt-1 font-body text-[13px] text-mid-grey">
                        Mon-Sat, 9am-7pm IST
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
                        +91 XXXX XXXXXX{" "}
                        <a
                          href="https://wa.me/910000000000"
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
                        info@nbes.in
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
                        [Address placeholder]
                      </p>
                      <p className="mt-1 font-body text-[13px] text-mid-grey">
                        [City], [State], India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-8 border-t border-border" />

                <p className="eyebrow-label">States We Cover</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {coveredStates.map((state) => (
                    <span
                      key={state}
                      className="rounded-[4px] border border-border bg-off-white px-3 py-[6px] font-body text-[13px] text-charcoal"
                    >
                      {state}
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
          <div className="container-width flex h-full flex-col items-center justify-center gap-3">
            <Map className="h-10 w-10 text-mid-grey" aria-hidden="true" />
            <p className="font-body text-[14px] text-mid-grey">
              Map placeholder
            </p>
          </div>
        </section>
      </ScrollRevealBlock>
    </>
  );
}
