import { ArrowRight, Gift, Snowflake, Sparkles, Star, TreePine } from "lucide-react";
import { isNataruSeason } from "@/lib/nataru";

const NataruExperience = () => {
  if (!isNataruSeason()) return null;

  const whatsappUrl = `https://wa.me/6285373293935?text=${encodeURIComponent(
    "Halo, saya ingin booking rental mobil untuk libur Natal dan Tahun Baru di Surabaya."
  )}`;

  return (
    <>
      <div className="nataru-page-snow" aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => (
          <Snowflake
            key={index}
            className={`nataru-page-snowflake nataru-page-snowflake-${index + 1}`}
          />
        ))}
      </div>

      <section
        aria-labelledby="nataru-heading"
        className="bg-[#f8f6f3] px-4 py-10 sm:px-6 lg:py-12"
      >
        <div className="container">
          <div className="nataru-banner relative overflow-hidden rounded-3xl border border-[#f2c14e]/50 p-7 pt-12 text-white shadow-xl sm:p-10 sm:pt-14 lg:p-12 lg:pt-16">
            <div className="nataru-banner-lights" aria-hidden="true" />
            <div className="nataru-banner-snow" aria-hidden="true">
              {Array.from({ length: 8 }, (_, index) => (
                <Snowflake
                  key={index}
                  className={`nataru-banner-flake nataru-banner-flake-${index + 1}`}
                />
              ))}
            </div>
            <div className="nataru-tree" aria-hidden="true">
              <Star className="nataru-tree-star" />
              <TreePine className="nataru-tree-icon" />
              <span className="nataru-ornament nataru-ornament-1" />
              <span className="nataru-ornament nataru-ornament-2" />
              <span className="nataru-ornament nataru-ornament-3" />
              <span className="nataru-ornament nataru-ornament-4" />
              <Gift className="nataru-gift nataru-gift-1" />
              <Gift className="nataru-gift nataru-gift-2" />
            </div>

            <div className="relative z-10 flex flex-col gap-7 md:flex-row md:items-center md:justify-between md:pr-44">
              <div className="max-w-2xl">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-sm">
                  <Sparkles aria-hidden="true" className="h-4 w-4 text-[#ffe082]" />
                  Spesial Libur Natal &amp; Tahun Baru
                </p>
                <h2
                  id="nataru-heading"
                  className="text-2xl font-bold leading-tight drop-shadow sm:text-3xl lg:text-4xl"
                >
                  Rayakan Nataru, Jelajahi Surabaya &amp; Jawa Timur!
                </h2>
                <p className="mt-3 text-lg font-extrabold tracking-wide text-[#ffe082] drop-shadow-sm">
                  Merry Christmas &amp; Happy New Year!
                </p>
                <p className="mt-3 max-w-xl leading-relaxed text-white/90">
                  Nikmati liburan akhir tahun bersama keluarga tanpa repot mengatur perjalanan.
                  Armada kami siap menemani perjalanan Natal dan Tahun Baru Anda.
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nataru-cta inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#ffe082] px-6 py-3.5 font-bold text-[#102a4c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe082]"
              >
                <Gift aria-hidden="true" className="h-5 w-5" />
                Booking Liburan
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NataruExperience;
