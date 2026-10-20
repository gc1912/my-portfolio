import { Link } from 'react-router-dom'

export default function AdminPage() {
  return (
    <main className="content-wrap flex min-h-[72vh] items-center justify-center py-16">
      <section className="panel w-full max-w-xl p-7 sm:p-10" aria-labelledby="admin-title">
        <p className="section-kicker">管理入口</p>
        <h1 id="admin-title" className="mt-3 text-3xl font-semibold">后台登录 / 管理</h1>
        <p className="mt-4 leading-7 text-slate-300">这是后台占位页面。当前项目没有后端与账号系统，数据来自本地 Mock 文件。</p>
        <div className="mt-6 rounded-xl border border-amber-300/20 bg-amber-200/5 p-4 text-sm leading-6 text-amber-100/80">后续可在此添加登录表单和个人信息编辑界面，并使用 localStorage 保存本地修改。</div>
        <Link className="focus-ring mt-7 inline-flex rounded-lg border border-white/20 px-4 py-2.5 text-sm text-slate-200 hover:border-cyan-300/60" to="/">← 返回首页</Link>
      </section>
    </main>
  )
}
