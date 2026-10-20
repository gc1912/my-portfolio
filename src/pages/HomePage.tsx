import { profile, projects } from '../data/portfolio'

export default function HomePage() {
  return (
    <main>
      <section className="content-wrap flex min-h-[72vh] flex-col justify-center py-20">
        <p className="section-kicker mb-5">个人作品集 · 2026</p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">你好，我是<span className="text-cyan-300">{profile.name}</span></h1>
        <p className="mt-5 text-xl text-slate-300 sm:text-2xl">{profile.role}</p>
        <p className="mt-5 max-w-2xl leading-8 text-slate-400">{profile.intro}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a className="focus-ring rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200" href="#projects">浏览项目 <span aria-hidden="true">↓</span></a>
          <a className="focus-ring rounded-xl border border-white/20 px-5 py-3 font-medium text-slate-200 transition hover:border-cyan-300/70" href={`mailto:${profile.email}`}>联系我</a>
        </div>
        <div className="mt-14 flex items-center gap-3 text-sm text-slate-500"><span className="h-px w-10 bg-cyan-300/60" />向下探索</div>
      </section>

      <section id="about" className="content-wrap scroll-mt-24 py-16 sm:py-24">
        <p className="section-kicker">关于我</p>
        <div className="mt-5 grid gap-8 md:grid-cols-[1.2fr_.8fr]">
          <h2 className="text-3xl font-semibold leading-snug sm:text-4xl">让复杂的东西变简单，<br className="hidden sm:block" />让每个细节都有意义。</h2>
          <div className="panel p-6 text-slate-300"><p className="leading-7">我是一名热爱设计与工程的前端开发者，关注产品体验、界面细节和可维护的代码。这里展示的内容目前使用本地 Mock 数据。</p><p className="mt-4 text-sm text-slate-500">经历与教育背景可在后续阶段补充。</p></div>
        </div>
      </section>

      <section id="projects" className="content-wrap scroll-mt-24 py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="section-kicker">精选作品</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">近期项目</h2></div><p className="max-w-sm text-sm leading-6 text-slate-400">从想法到落地，用合适的技术解决实际问题。</p></div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => <article className="panel group flex min-h-64 flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35" key={project.title}>
            <div className="mb-8 flex h-28 items-end rounded-xl border border-white/5 bg-gradient-to-br from-cyan-400/10 via-indigo-400/10 to-transparent p-4"><span className="font-mono text-sm text-cyan-200/80">0{index + 1} / PROJECT</span></div>
            <h3 className="text-xl font-semibold">{project.title}</h3><p className="mt-2 flex-1 text-sm leading-6 text-slate-400">{project.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="使用技术">{project.tags.map((tag) => <li className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300" key={tag}>{tag}</li>)}</ul>
          </article>)}
        </div>
      </section>

      <section id="contact" className="content-wrap scroll-mt-24 py-16 sm:py-24">
        <div className="panel flex flex-col items-start justify-between gap-6 p-7 sm:flex-row sm:items-center sm:p-10"><div><p className="section-kicker">保持联系</p><h2 className="mt-3 text-3xl font-semibold">有想法？一起聊聊。</h2><p className="mt-3 text-slate-400">欢迎交流项目、合作或有趣的点子。</p></div><a className="focus-ring rounded-xl border border-cyan-300/50 px-5 py-3 text-cyan-200 hover:bg-cyan-300/10" href={`mailto:${profile.email}`}>{profile.email} ↗</a></div>
      </section>
    </main>
  )
}
