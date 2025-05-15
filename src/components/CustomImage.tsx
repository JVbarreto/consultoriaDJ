import Image from 'next/image'

interface CustomImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export default function CustomImage({ src, alt, width = 300, height = 400, className = '' }: CustomImageProps) {
  return (
    <div className="relative" style={{ width, height }}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className}`}
      />
    </div>
  )
} 