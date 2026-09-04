import { Award, Mail } from 'lucide-react'
import Link from 'next/link'

function Footer() {
  return (
    <footer id="contact" className="bg-[#071d33] text-white pt-16">
      <div className="max-w-295 mx-auto px-5 grid md:grid-cols-[1.3fr_.7fr] gap-14">
        <div>
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 grid place-items-center border border-[#f4df9c]/80 rounded-full text-[#f4df9c]">
              <Award className="w-5 h-5" />
            </span>
            <h2 className="font-serif text-xl font-bold">World Class Quality Award</h2>
          </div>
          <p className="text-white/70 leading-7 mt-6 max-w-lg">
            Fostering excellence, sustainable standards, and industry innovation across regional and global markets.
          </p>
          <div className="mt-7 text-white/80 leading-7">
            <p>Alemnesh plaza
              Bole, Addis Ababa, Ethiopia</p>
            <p className="mt-2">Phone:+251 911242388 / +251 911525998</p>
            <p className="mt-2">Email: worldclassqualityaward@gmail.com</p>
          </div>
        </div>
        <div>
          <h3 className="text-[#f4df9c] font-bold uppercase tracking-[0.15em]">Quick Links</h3>
          <nav className="mt-5" aria-label="Footer navigation">
            <ul className="space-y-3 text-white/75">
              {[{link:"#",title:"About the Award"}, {link:"#",title:"How the Award Works"}, {link:"/#categories",title:"Award Categories"}, {link:"/awards",title:"Award Gallery"}].map(
                (item) => (
                  <li key={item.title}>
                    <Link href={item.link} className="hover:text-[#f4df9c] transition-colors">
                      {item.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div className="flex gap-3 mt-8">
            <Link
              href="https://web.facebook.com/GrandAfricanAwardorg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 border border-white/20 grid place-items-center hover:bg-white hover:text-[#071d33] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.23 0-1.62.77-1.62 1.56V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </Link>
            <Link 
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 border border-white/20 grid place-items-center hover:bg-white hover:text-[#071d33] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.551v-5.569c0-1.328-.027-3.097-1.858-3.097-1.853 0-2.134 1.447-2.134 2.939v5.667H9.351V9h3.414v1.331h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.358 4.268 5.42v6.435z" />
              </svg>
            </Link>
            <Link
              href="mailto:worldclassqualityaward@gmail.com"
              aria-label="Email the award team"
              className="w-10 h-10 border border-white/20 grid place-items-center hover:bg-white hover:text-[#071d33] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-295 mx-auto px-5 border-t border-white/10 mt-14 py-6">
        <p className="text-white/45 text-sm">
          © 2026 World Class Quality Award Secretariat. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer