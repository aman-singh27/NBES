"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
	{ label: "Home", href: "/" },
	{ label: "Services", href: "/services" },
	{ label: "Projects", href: "/projects" },
	{ label: "About", href: "/about" },
	{ label: "Contact", href: "/contact" },
];

function useScrollPosition(threshold = 60): boolean {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > threshold);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });

		return () => window.removeEventListener("scroll", onScroll);
	}, [threshold]);

	return scrolled;
}

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const scrolled = useScrollPosition(60);
	const pathname = usePathname();

	useEffect(() => {
		setMobileOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (!mobileOpen) {
			document.body.classList.remove("overflow-hidden");
			return;
		}

		document.body.classList.add("overflow-hidden");
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setMobileOpen(false);
			}
		};

		window.addEventListener("keydown", onKeyDown);

		return () => {
			document.body.classList.remove("overflow-hidden");
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [mobileOpen]);

	return (
		<header
			className={`fixed left-0 right-0 top-0 z-40 h-18 border-b border-border bg-white transition-shadow duration-300 ${
				scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.07)]" : "shadow-none"
			}`}
		>
			<nav aria-label="Main navigation" className="container-width flex h-full items-center justify-between gap-6">
				<Link href="/" className="inline-flex items-center gap-3">
					<span className="flex h-[38px] w-[38px] items-center justify-center rounded-[4px] bg-accent font-display text-[20px] font-extrabold text-white">
						N
					</span>
					<span className="font-display text-[22px] font-extrabold tracking-[0.06em] text-black">NBES</span>
				</Link>

				<div className="hidden items-center gap-8 md:flex">
					{navLinks.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`relative font-body text-sm font-medium after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-accent after:transition-transform after:duration-300 after:content-[''] ${
								pathname === item.href
									? "text-accent after:scale-x-100"
									: "text-charcoal after:scale-x-0 hover:after:scale-x-100"
							}`}
						>
							{item.label}
						</Link>
					))}
				</div>

				<div className="hidden items-center gap-5 md:flex">
					<a href="tel:+910000000000" className="font-body text-sm font-medium text-charcoal">
						+91 00000 00000
					</a>
					<Link
						href="/contact"
						className="rounded-btn bg-accent px-5 py-[10px] font-display text-[13px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-accent-dark"
					>
						Get a Quote
					</Link>
				</div>

				<button
					type="button"
					aria-label="Open navigation menu"
					onClick={() => setMobileOpen(true)}
					className="inline-flex h-11 w-11 items-center justify-center text-charcoal md:hidden"
				>
					<Menu size={24} />
				</button>
			</nav>

			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 bg-black md:hidden"
					>
						<div className="container-width flex h-full flex-col py-8">
							<div className="mb-12 flex justify-end">
								<button
									type="button"
									aria-label="Close navigation menu"
									onClick={() => setMobileOpen(false)}
									className="inline-flex h-11 w-11 items-center justify-center text-white"
								>
									<X size={24} />
								</button>
							</div>

							<motion.div
								className="flex flex-1 flex-col justify-center gap-6"
								initial="hidden"
								animate="show"
								variants={{
									hidden: {},
									show: { transition: { staggerChildren: 0.05 } },
								}}
							>
								{navLinks.map((item) => (
									<motion.div
										key={item.href}
										variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
									>
										<Link
											href={item.href}
											onClick={() => setMobileOpen(false)}
											className={`font-display text-[32px] font-bold uppercase leading-none ${
												pathname === item.href ? "text-accent" : "text-white"
											}`}
										>
											{item.label}
										</Link>
									</motion.div>
								))}
							</motion.div>

							<div className="border-t border-white/10 pt-6">
								<a href="tel:+910000000000" className="block font-body text-sm font-medium text-white/70">
									+91 00000 00000
								</a>
								<a
									href="https://wa.me/910000000000"
									className="mt-2 inline-flex font-display text-[14px] font-bold uppercase tracking-[0.06em] text-white"
								>
									WhatsApp Us
								</a>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
