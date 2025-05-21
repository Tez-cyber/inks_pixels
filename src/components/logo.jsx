

export const Logo = ({ isAtTop }) => {
    return (
        <section>
            <h3 className={`${isAtTop ? "text-darkBlue" : "text-white"} flex font-semibold flex-col rounded-xl leading-tight px-5 text-lg`}>
                Logo
            </h3>
        </section>
    )
}
