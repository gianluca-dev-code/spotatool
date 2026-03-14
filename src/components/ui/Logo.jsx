export function LogoFull({ size = 32 }) {
  const scale = size / 32
  const width = 140 * scale
  const height = 32 * scale

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="toolGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="aGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      {/* Spot */}
      <text
        x="0"
        y="24"
        fontFamily="Outfit, sans-serif"
        fontWeight="900"
        fontSize="24"
        fill="#f1f5f9"
        letterSpacing="-0.5"
      >
        Spot
      </text>

      {/* A — con outline indigo e fill scuro */}
      <text
        x="52"
        y="24"
        fontFamily="Outfit, sans-serif"
        fontWeight="900"
        fontSize="24"
        fill="none"
        stroke="url(#aGrad)"
        strokeWidth="1.5"
        letterSpacing="-0.5"
      >
        A
      </text>

      {/* Tool — gradiente viola */}
      <text
        x="68"
        y="24"
        fontFamily="Outfit, sans-serif"
        fontWeight="900"
        fontSize="24"
        fill="url(#toolGrad)"
        letterSpacing="-0.5"
      >
        Tool
      </text>
    </svg>
  )
}

export function LogoMark({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="markGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      {/* A mark solo outline */}
      <text
        x="4"
        y="26"
        fontFamily="Outfit, sans-serif"
        fontWeight="900"
        fontSize="28"
        fill="none"
        stroke="url(#markGrad)"
        strokeWidth="1.5"
      >
        A
      </text>
    </svg>
  )
}