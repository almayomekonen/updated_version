export function TypographyH1({ children, className = "" }) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight text-black lg:text-5xl ${className}`}
    >
      {children}
    </h1>
  )
}

export function TypographyP({ children, className = "" }) {
  return (
    <p className={`leading-7 text-black ${className}`}>
      {children}
    </p>
  )
}