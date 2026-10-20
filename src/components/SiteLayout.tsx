import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Starfield from './Starfield'

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return (
    <>
      <Starfield />
      <header className="glass sticky top-0 z-20 border-b border-white/10">
        <nav className="content-wrap flex min-h-16 items-center justify-between" aria-label="主导航">
          <Link to="/" className="focus-ring font-semibold tracking-wide" onClick={closeMenu}>你的名字<span className="text-cyan-300">.</span></Link>
          <button className="focus-ring rounded-lg border border-white/15 px-3 py-2 text-sm md:hidden" type="button" aria-expanded={menuOpen} aria-controls="main-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '关闭' : '菜单'}</button>
          <div id="main-menu" className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-1 border-b border-white/10 bg-[#0b0f1a] p-4 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}>
            <a className="focus-ring rounded px-3 py-2 text-sm text-slate-300 hover:text-white" href="/#about" onClick={closeMenu}>关于</a>
            <a className="focus-ring rounded px-3 py-2 text-sm text-slate-300 hover:text-white" href="/#projects" onClick={closeMenu}>项目</a>
            <a className="focus-ring rounded px-3 py-2 text-sm text-slate-300 hover:text-white" href="/#contact" onClick={closeMenu}>联系</a>
            <NavLink className="focus-ring rounded px-3 py-2 text-sm text-slate-300 hover:text-white" to="/admin" onClick={closeMenu}>后台</NavLink>
          </div>
        </nav>
      </header>
      <Outlet />
      <footer className="content-wrap border-t border-white/10 py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} 你的名字 · 用心制作</footer>
    </>
  )
}
