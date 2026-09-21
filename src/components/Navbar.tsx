import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImage from "/logo.png";

type NavItem =
  | {
      href: string;
      label: string;
      external?: boolean;
      submenu?: never;
    }
  | {
      href?: string;
      label: string;
      submenu: { label: string; href: string }[];
      external?: never;
    };

const WHATSAPP_NUMBER = "6285373293935";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20ingin%20konsultasi%20sewa%20mobil%20di%20Surabaya`;

const navItems: NavItem[] = [
  { href: "/", label: "Beranda" },
  {
    label: "Sewa Mobil",
    submenu: [
      { label: "Sewa Mobil Surabaya", href: "/sewa-mobil-surabaya" },
      { label: "Dengan Driver", href: "/layanan#sopir" },
      { label: "Lepas Kunci", href: "/armada" },
    ],
  },
  {
    label: "Sewa Hiace",
    submenu: [
      { label: "Sewa Hiace Surabaya", href: "/sewa-hiace-surabaya" },
      { label: "Hiace Bromo", href: "/hiace/bromo" },
      { label: "Hiace Malang", href: "/hiace/malang" },
      { label: "Hiace Batu", href: "/hiace/batu" },
    ],
  },
  { href: "/armada", label: "Armada" },
  { href: "/tour-surabaya#paket-wisata", label: "Paket Wisata" },
  { href: "/kenapa-kami", label: "Tentang Kami" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const location = useLocation();

  const linkClassName = (href?: string) =>
    `rounded-full px-3 py-2 text-[13px] font-semibold transition-colors hover:bg-secondary ${
      href && location.pathname === href
        ? "bg-accent text-accent-foreground"
        : "text-muted-foreground hover:text-foreground"
    }`;

  const mobileLinkClassName = (href?: string) =>
    `rounded-lg px-4 py-3 text-base font-medium transition-colors ${
      href && location.pathname === href
        ? "bg-accent text-accent-foreground"
        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/75">
      <div className="container flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logoImage}
            alt="Sewa Mobil Surabaya"
            className="h-11 w-auto object-contain max-w-none sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((link) => {
            if ("submenu" in link) {
              return (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground`}
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64">
                    {link.submenu.map((item) => (
                      <DropdownMenuItem key={item.label} asChild className="p-0">
                        <Link
                          to={item.href}
                          className="flex w-full items-center justify-between rounded-sm px-2 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            if (link.external) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName()}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link key={link.href} to={link.href} className={linkClassName(link.href)}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span>+62 853-7329-3935</span>
          </a>
          <Button variant="cta" size="default" className="rounded-full px-5" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Konsultasi Gratis
            </a>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary xl:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="container flex max-h-[calc(100vh-73px)] flex-col gap-2 overflow-y-auto overscroll-contain py-4">
            {navItems.map((link) => {
              if ("submenu" in link) {
                const isOpenMenu = openMobileMenu === link.label;

                return (
                  <div key={link.label} className="rounded-lg border border-border/60 bg-secondary/20">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileMenu(isOpenMenu ? null : link.label)
                      }
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium text-foreground"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isOpenMenu ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpenMenu && (
                      <div className="border-t border-border/60 px-3 py-3">
                        <div className="space-y-1">
                          {link.submenu.map((item) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              onClick={() => {
                                setIsOpen(false);
                                setOpenMobileMenu(null);
                              }}
                              className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                            >
                              <span>{item.label}</span>
                              <ChevronRight className="h-4 w-4" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className={mobileLinkClassName()}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={mobileLinkClassName(link.href)}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-4 border-t border-border pt-4">
              <Button variant="cta" size="lg" className="w-full" asChild>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konsultasi Gratis via WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
