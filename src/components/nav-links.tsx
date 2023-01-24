import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { name: 'Contato', to: '/contact' },
  { name: 'Sobre', to: '/build' },
  { name: "FAQ's", to: '/build' },
  { name: 'Suporte', to: '/support' },
]

export function NavLinks({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {NAV_LINKS.map((link) => (
        <li key={link.name} className="ml-4">
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive ? 'border-b text-black' : 'text-[#565656] hover:border-b'
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
