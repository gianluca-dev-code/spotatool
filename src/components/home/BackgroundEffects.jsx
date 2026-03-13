export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Top left glow */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-brand/20 rounded-full blur-3xl opacity-20 animate-pulse" />

      {/* Bottom right glow */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl opacity-20 animate-pulse" />

      {/* Center orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/10 rounded-full blur-3xl opacity-10" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/0 via-dark-950/0 to-dark-950" />
    </div>
  )
}