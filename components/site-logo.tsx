import Image from "next/image"

interface SiteLogoProps {
  size?: number
  className?: string
}

export function SiteLogo({ size = 32, className }: SiteLogoProps) {
  return (
    <Image
      src="/android-chrome-192x192.png"
      alt=""
      width={size}
      height={size}
      className={className ?? "rounded-lg"}
      priority
    />
  )
}
