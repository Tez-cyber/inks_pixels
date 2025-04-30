

export const Container = ({ children, className }) => {
  return (
    <section className={`${className} px-3 md:px-20`}>
        {children}
    </section>
  )
}
