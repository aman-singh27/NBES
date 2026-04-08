import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const companyLinks = ["About", "Projects", "Services", "Contact"];
const serviceLinks = [
  "Electrical Services",
  "Plumbing Solutions",
  "CCTV Installation",
  "Earthing Services",
  "Civil & Carpentry",
  "Interior Works",
];
const industryLinks = [
  "Corporate Offices",
  "Commercial Buildings",
  "IT Parks",
  "Financial Services",
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-width py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-[4px] bg-white"
              >
                <span className="h-3.5 w-3.5 rounded-[2px] border border-black/70" />
              </span>
              <span className="font-display text-[22px] font-extrabold tracking-[0.06em] text-white">
                NBES
              </span>
            </Link>

            <p className="mt-5 max-w-[420px] font-body text-[14px] font-light leading-[1.75] text-white/45">
              New Bharat Engineering Services delivers electrical, plumbing,
              civil, CCTV, earthing, carpentry, and interior facility solutions
              for corporate and commercial offices across Delhi-NCR.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:+919999060083"
                className="inline-flex items-center gap-2 font-body text-sm text-white/45 transition-colors hover:text-white"
              >
                <Phone size={15} />
                +91 99990 60083
              </a>
              <a
                href="mailto:contact@nbesindia.com"
                className="inline-flex items-center gap-2 font-body text-sm text-white/45 transition-colors hover:text-white"
              >
                <Mail size={15} />
                contact@nbesindia.com
              </a>
              <p className="inline-flex items-start gap-2 font-body text-sm text-white/45 transition-colors hover:text-white">
                <MapPin size={15} />
                <span>
                  366, Saraswati Vihar, Mehrauli Road, Gurgaon - 122001
                  <br />
                  Shop No. 1, Khasra No. 38, Bhartha Complex, Part-II, Nithari,
                  Sector-31, Noida - 201301
                </span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white">
              Company
            </h3>
            <div className="flex flex-col gap-3">
              {companyLinks.map((item) => (
                <Link
                  key={item}
                  href={
                    item === "About"
                      ? "/about"
                      : item === "Projects"
                        ? "/projects"
                        : item === "Services"
                          ? "/services"
                          : "/contact"
                  }
                  className="font-body text-sm text-white/45 transition-all hover:pl-1 hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white">
              Services
            </h3>
            <div className="flex flex-col gap-3">
              {serviceLinks.map((item) => (
                <Link
                  key={item}
                  href={
                    item === "Electrical Services"
                      ? "/services/electrical-works"
                      : item === "Plumbing Solutions"
                        ? "/services/plumbing-solutions"
                        : item === "CCTV Installation"
                          ? "/services/security-systems"
                          : item === "Earthing Services"
                            ? "/services/earthing-solutions"
                            : item === "Civil & Carpentry"
                              ? "/services/civil-carpentry-works"
                              : "/services/interior-works"
                  }
                  className="font-body text-sm text-white/45 transition-all hover:pl-1 hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white">
              Industries
            </h3>
            <div className="flex flex-col gap-3">
              {industryLinks.map((item) => (
                <span
                  key={item}
                  className="font-body text-sm text-white/45 transition-all hover:pl-1 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-5 font-body text-[12px] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} NBES. All rights reserved.</p>
          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
