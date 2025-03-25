

export const Container = ({ children, className }) => {
  return (
    <section className={`${className} px-10 md:px-20`}>
        {children}
    </section>
  )
}
