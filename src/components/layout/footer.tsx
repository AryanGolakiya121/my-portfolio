import Container from './container';
import { siteConfig } from '@/config/site';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className='border-t border-(--border)'>
        <Container>
            <div className="flex flex-col items-center justify-between gap-5 py-8 md:flex-row">
                <div className="text-center md:text-left">
                    <p className="font-semibold">Aryan Golakiya</p>
                    <p>Backend Developer | Node.js | MERN Stack</p>
                </div>

            <div className="flex items-center gap-5">
                {siteConfig.links.github && (
                    <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                         <FaGithub className="size-6 text-blue-500" />
                    </a>
                )}

                {siteConfig.links.linkedin && (
                    <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                        <FaLinkedinIn className="size-6 text-blue-500" />
                    </a>
                )}
            
                 <a href={`mailto:${siteConfig.email}`} aria-label="Send email">
                    <Mail className="size-6 text-blue-500" />
                </a>
            </div>

                <p className="text-sm text-(--muted-foreground)">© {new Date().getFullYear()} Aryan Golakiya</p>
            </div>
        </Container>

    </footer>
  )
}

export default Footer
