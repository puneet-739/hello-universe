import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import data from "../data/portfolioData.json"

const iconMap = {
    LinkedIn: {
        icon: <FaLinkedin />,
        color: 'hover:text-[#0077b5]', // LinkedIn blue
    },
    GitHub: {
        icon: <FaGithub />,
        color: 'hover:text-gray-800', // GitHub black
    },
    Twitter: {
        icon: <FaTwitter />,
        color: 'hover:text-[#1DA1F2]', // Twitter blue
    },
    Email: {
        icon: <FaEnvelope />,
        color: 'hover:text-red-500', // Email red
    }
};

const SocialLinks = () => {
    const socials = data.social;
    return (
        <div className="flex flex-row items-center justify-center gap-6 py-8">
            {socials.map((profile) => {
                const { icon, color } = iconMap[profile.name] || {};
                if (!icon) return null; // skip unknown platforms

                return (
                    <a
                        key={profile.id}
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={profile.name}
                        className={`group text-4xl text-gray-600 transition-transform transform hover:scale-125 duration-300 ${color} relative`}
                    >
                        {icon}
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap z-10">
                            {profile.name}
                        </span>
                    </a>
                );
            })}
        </div>
    );
};

export default SocialLinks;
