import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AdminPage from './pages/AdminPage'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<main className="content-wrap py-24"><h1 className="text-3xl font-semibold">页面不存在</h1><a className="text-cyan-300 underline" href="/">返回首页</a></main>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
