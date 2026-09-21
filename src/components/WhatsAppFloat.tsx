const WHATSAPP_NUMBER = "6285373293935";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20ingin%20konsultasi%20sewa%20mobil%20di%20Surabaya`;

type WindowWithConversionTracking = Window & {
  gtag_report_conversion?: () => void;
};

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        const reportConversion = (window as WindowWithConversionTracking)
          .gtag_report_conversion;

        if (typeof reportConversion === "function") {
          reportConversion();
        }
      }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,49%)] text-primary-foreground"
      aria-label="Chat via WhatsApp"
    >
      <img
        src="/icon-wa.png"
        alt="WhatsApp"
        className="h-100 w-100 md:h-100 md:w-100 object-cover"
      />
    </a>
  );
}
