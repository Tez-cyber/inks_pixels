
export const HeroSection = () => {
    return (
        <section
            id="about"
            className="relative pt-28 flex items-center md:pt-0"
        >
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="https://readdy.ai/api/search-image?query=modern%20creative%20agency%20workspace%20with%20design%20elements%2C%20printing%20equipment%2C%20and%20branding%20materials%2C%20professional%20atmosphere%20with%20navy%20blue%20and%20gold%20accents%2C%20dynamic%20composition%20with%20soft%20lighting%2C%20premium%20quality%20photography&width=1920&height=1080&seq=hero-bg-1&orientation=landscape"
                    alt="Creative workspace"
                    className="w-full h-full object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#000028]/90 to-[#000028]/60"></div>
            </div>

            <div className="mx-auto px-6 py-12 z-9">
                <div className="">
                    <div className="text-white">
                        <h1 className="text-4xl font-bold mb-6 leading-tight md:text-5xl">
                            Crafting{" "}
                            <span className="text-[#FFD700]">Visual Excellence</span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>

    )
}
