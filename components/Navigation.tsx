import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="#bio" className="text-lg font-medium hover:text-[#a67c52] transition-colors">
              Bio
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-lg font-medium hover:text-[#a67c52] transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#experience" className="text-lg font-medium hover:text-[#a67c52] transition-colors">
              Experience
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

