import StarIcon from '@mui/icons-material/Star';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import GroupsIcon from '@mui/icons-material/Groups';

export const ChooseUsSection = () => {
    const gridDetails = [
        {
            icon: <StarIcon />,
            title: 'Creative Excellence',
            text: `Our team of talented designers and craftsmen deliver innovative
                    and visually stunning solutions that capture your brand's
                    essence.
                `
        },
        {
            icon: <SettingsSuggestIcon />,
            title: 'End-to-End Solutions',
            text: `From concept to execution, we handle every aspect of your
                    project with meticulous attention to detail and professional
                    expertise.
                `
        },
        {
            icon: <GroupsIcon />,
            title: 'Client-Focused Approach',
            text: `We prioritize understanding your unique needs and goals,
                    ensuring our solutions align perfectly with your vision and
                    objectives.
                `
        },
    ]
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000028] mb-4">
                        Why Choose Us
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        At Ink and Pixels Nigeria Limited, we're committed to delivering
                        exceptional quality and service.
                    </p>
                    <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {
                        gridDetails.map((item, i) => (
                            <div key={i} className="bg-gray-50 rounded-lg p-8 text-center transition-transform duration-500 group hover:bg-darkBlue hover:-translate-y-2">
                                <div className="w-16 h-16 bg-darkBlue text-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-darkBlue">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#000028] mb-4 group-hover:text-white">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 group-hover:text-gray-300">
                                    {item.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
