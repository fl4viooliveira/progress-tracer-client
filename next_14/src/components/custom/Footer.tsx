import Link from "next/link";
import { Logo } from "@/components/custom/Logo";
import { FaYoutube, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"

interface SocialLink {
  id: number;
  text: string;
  url: string;
}

interface FooterProps {
  data: {
    logoText: {
      id: number,
      text: string,
      url: string,
    },
    text: string,
    socialLink: SocialLink[],
  };
}

function selectSocialIcon(url: string | null) {
  if (!url) return null
  if (url.includes("youtube")) return <FaYoutube className="h-6 w-6" />;
  if (url.includes("x.com")) return <FaTwitter className="h-6 w-6" />;
  if (url.includes("linkedin")) return <FaLinkedin className="h-6 w-6" />;
  if (url.includes("github")) return <FaGithub className="h-6 w-6" />;
  return null;
}

export function Footer({ data }: Readonly<FooterProps>) {
  const { logoText, socialLink, text } = data;
  return (
    <div className="dark bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <Logo dark text={logoText.text} />
        <p className="mt-4 md:mt-0 text-sm text-gray-300">{text}</p>
        <div className="flex items-center space-x-4">
          {socialLink.map((link) => {
            return (
              <Link
                className="text-white hover:text-gray-300"
                href={link.url || "#"}
                key={link.id}
              >
                {selectSocialIcon(link.url)}
                <span className="sr-only">Visit us at {link.text}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

