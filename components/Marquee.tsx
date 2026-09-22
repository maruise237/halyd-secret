const items = [
  "SOINS DU VISAGE",
  "COIFFURE",
  "MAQUILLAGE",
  "COSMÉTIQUES",
  "SPA & DÉTENTE",
  "MANUCURE",
];

export default function Marquee() {
  const track = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-gold/30 bg-ink py-4">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-lg font-semibold tracking-wide text-gold sm:text-2xl"
          >
            {item}
            <span className="text-gold/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
