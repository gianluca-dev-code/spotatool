export function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#6366f1"/>
      <circle cx="16" cy="8" r="2" fill="#818cf8"/>
      <path d="M12 16H20M16 12V20" stroke="#818cf8" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function LogoFull({ size = 24 }) {
  return (
    <div className="flex items-center gap-2">
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#6366f1"/>
        <circle cx="16" cy="8" r="2" fill="#818cf8"/>
        <path d="M12 16H20M16 12V20" stroke="#818cf8" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <span className="text-xl font-black tracking-tight">
        Spot<span className="text-brand">A</span>Tool
      </span>
    </div>
  )
}