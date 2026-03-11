type Experience = {
  period: string
  role: string
  company: string
  summary: string
  bullets?: string[]
}

type Project = {
  name: string
  url: string
  description: string
  stack: string
}

const profile = {
  name: '游閔暘',
  title: 'Frontend Engineer',
  domain: 'Audiologist',
  heroTitle: '讓臨床經驗、數位流程與前端介面',
  heroTitleSub: '在同一個產品語境裡協調運作。',
  mobileHeroTitle: '能在臨床需求與數位產品之間，',
  mobileHeroTitleSub: '建立清楚的翻譯層。',
  intro:
    '具備前端開發與臨床聽力雙重背景，擅長把使用者需求、商業目標與實際流程轉譯成清楚、可維護且能落地的介面。熟悉一頁式網站、企業官網、數位展板與 CRM 類型系統，也能在產品規劃與現場執行之間建立有效共識。',
  mobileIntro:
    '具備前端開發與臨床聽力雙重背景，擅長把需求、流程與介面整合成有效的產品體驗。',
  about:
    '現居桃園，自 2022 年起經由自學轉職，透過學生時期的耳科檢查助理與第一線門市、診所服務背景，逐步建立前端開發與臨床現場之間的轉譯能力。專長涵蓋一頁式網站、企業形象官網、數位展板與 CRM 類型系統，也在聽力產業長期處理流程優化與跨部門協作。',
  location: 'Taoyuan, Taiwan',
  phone: '0975-855-853',
  email: 'charlesyou1234567@gmail.com',
  education: ['國立臺北護理健康大學', '語言治療與聽力學系', '2017 - 2021'],
  certifications: ['國考聽力師合格', 'TOEIC 820'],
  capabilities: [
    'React.js',
    'Tailwind CSS',
    'Supabase',
    '企業官網切版',
    'CRM 流程數位化',
    '聽力學與助聽器選配',
    '跨部門溝通',
    'AI 工具導入',
  ],
}

const experiences: Experience[] = [
  {
    period: '2025 - Present',
    role: '店長 / 區域管理',
    company: '大樹醫藥股份有限公司',
    summary: '管理桃園、新竹共三家聽力中心營運，並主導部門內的數位轉型與教育平台規劃。',
    bullets: [
      '開發輔助銷售工具，使用 React.js + Supabase 建立內部流程系統。',
      '從第一線營運痛點出發，改善跨店資訊流與追蹤效率。',
    ],
  },
  {
    period: '2023 - 2025',
    role: '聽力師',
    company: '大樹醫藥股份有限公司',
    summary:
      '執行聽力檢查與助聽器選配，並擔任 CRM 系統與外包廠商之間的溝通窗口。',
  },
  {
    period: '2022 - 2023',
    role: '前端工程師',
    company: '聯創數位工作室',
    summary:
      '負責品牌網站與互動式視覺專案前端開發，製作企業官網、一頁式網站與數位展板。',
  },
]

const projects: Project[] = [
  {
    name: '森鉅建設官網',
    url: 'https://shen-gi-construction-company-azz251wnt-yoz0713.vercel.app/',
    description: '企業形象官網，強化品牌信任感與閱讀節奏。',
    stack: 'React / Frontend',
  },
  {
    name: '聽力分析與選配回顧系統',
    url: 'https://hearingreviewdev.vercel.app/dashboard',
    description: '串連聽力分析、選配回顧與內部判讀流程的儀表板介面。',
    stack: 'React / Dashboard',
  },
  {
    name: 'Classey Home 線上展版',
    url: 'https://classey-home-29nb.vercel.app/',
    description: '房地產數位展版，著重大尺寸瀏覽體驗與視覺敘事。',
    stack: 'Frontend / Exhibition',
  },
]

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)]">
      <main className="mx-auto max-w-[1528px] px-5 py-4 sm:px-8 sm:py-7 lg:px-11 lg:py-4">
        <div className="rounded-[34px] border border-[rgba(34,48,73,0.08)] bg-[rgba(255,253,250,0.88)] p-4 shadow-[var(--shadow-soft)] backdrop-blur-[10px] sm:p-6 lg:rounded-[36px] lg:p-[28px]">
          <article className="rounded-[30px] border border-[rgba(34,48,73,0.08)] bg-[var(--color-paper)] px-4 py-5 sm:px-6 sm:py-6 lg:px-[34px] lg:py-[34px]">
            <header className="flex items-end justify-between gap-6 pb-5 lg:pb-[34px]">
            <div className="grid gap-[6px]">
              <p className="font-latin text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Personal Resume
              </p>
              <p className="text-sm font-semibold tracking-[-0.02em] text-[var(--color-strong)]">
                {profile.name}
              </p>
            </div>

            <nav aria-label="Primary" className="hidden items-center gap-[22px] md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="font-latin text-[13px] leading-[15px] text-[var(--color-muted)] transition hover:text-[var(--color-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <p className="font-latin text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)] md:hidden">
              D01
            </p>
          </header>

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_330px] lg:gap-7">
              <div className="rounded-[30px] border border-[rgba(34,48,73,0.08)] bg-[linear-gradient(180deg,rgba(31,99,255,0.06)_0%,rgba(0,0,0,0)_46%),#f7f4ee] px-5 py-5 sm:px-7 sm:py-7 lg:min-h-[420px] lg:px-[34px] lg:py-[34px]">
              <p className="font-latin text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] sm:text-[12px] sm:leading-[15px]">
                {profile.title} / {profile.domain}
              </p>
              <h1 className="mt-4 max-w-[6ch] text-[56px] font-medium leading-[0.88] tracking-[-0.09em] text-[var(--color-strong)] sm:text-[92px] sm:leading-[0.9]">
                {profile.name}
              </h1>
              <p className="mt-5 max-w-[13ch] text-[1.2rem] font-medium leading-[1.18] tracking-[-0.05em] text-[var(--color-strong)] sm:hidden">
                {profile.mobileHeroTitle}
                <br />
                {profile.mobileHeroTitleSub}
              </p>
              <p className="mt-[22px] hidden max-w-[16ch] text-[28px] leading-[1.15] tracking-[-0.05em] text-[var(--color-strong)] sm:block">
                {profile.heroTitle}
                <br />
                {profile.heroTitleSub}
              </p>
              <p className="mt-5 max-w-[34ch] text-[0.82rem] leading-7 text-[var(--color-muted)] sm:hidden">
                {profile.mobileIntro}
              </p>
              <p className="mt-[18px] hidden max-w-[58ch] text-[15px] leading-[1.9] text-[var(--color-muted)] sm:block">
                {profile.intro}
              </p>

              <div className="mt-8 hidden flex-wrap gap-[14px] sm:flex lg:mt-[28px]">
                <a
                  className="inline-flex min-h-[46px] w-full items-center justify-center rounded-full bg-[var(--color-strong)] px-[22px] font-latin text-[14px] font-bold text-white shadow-[0_18px_34px_rgba(34,48,73,0.18)] transition hover:bg-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 sm:w-auto lg:min-w-[172px]"
                  href="/port.pdf"
                  download
                  style={{ color: '#ffffff' }}
                >
                  Download Resume
                </a>
                <a
                  className="hidden min-h-[46px] items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-[22px] font-latin text-[14px] font-bold text-[var(--color-strong)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 sm:inline-flex lg:min-w-[145px]"
                  href="#projects"
                >
                  Selected Work
                </a>
              </div>
            </div>

            <aside className="grid content-start gap-[18px]">
              <div className="overflow-hidden rounded-[30px] bg-white">
                <img
                  alt="游閔暘個人照片"
                  className="aspect-[0.88] h-full w-full object-cover"
                  height="1200"
                  loading="eager"
                  src="/profile-photo.png"
                  width="960"
                />
              </div>

              <InfoCard id="contact" title="Profile" bodyClassName="grid gap-3">
                <Detail term="Base" value={profile.location} />
                <Detail term="Phone" value={profile.phone} />
                <Detail term="Email" value={profile.email} />
              </InfoCard>
            </aside>
          </div>

          <div className="mt-5 grid gap-5 lg:mt-[26px] lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-6">
            <div className="space-y-6 lg:space-y-0">
              <section id="about" className="hidden border-t border-[var(--color-line)] pt-4 sm:block lg:pt-6">
                <SectionLabel>About</SectionLabel>
                <h2 className="mt-[10px] max-w-[640px] text-[29px] font-semibold leading-[1.05] tracking-[-0.055em] text-[var(--color-strong)]">
                  臨床理解力，是我做產品介面的核心差異。
                </h2>
                <p className="mt-[14px] max-w-[58ch] text-[15px] leading-[1.9] text-[var(--color-muted)]">
                  {profile.about}
                </p>
              </section>

              <section
                id="experience"
                className="hidden border-t border-[var(--color-line)] pt-4 sm:block lg:mt-[24px] lg:pt-6"
              >
                <SectionLabel>Experience</SectionLabel>
                <div className="mt-4 grid gap-4 lg:mt-6">
                  {experiences.map((item) => (
                    <article
                      key={`${item.period}-${item.role}`}
                      className={`${item.period !== '2025 - Present' ? 'hidden sm:block' : 'block'} rounded-[24px] border border-[var(--color-line)] bg-white px-5 py-5`}
                    >
                      <div className="grid gap-4 sm:grid-cols-[118px_minmax(0,1fr)] sm:gap-[18px]">
                        <p className="font-latin text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                          {item.period}
                        </p>
                        <div>
                          <h3 className="text-[20px] font-semibold tracking-[-0.04em] text-[var(--color-strong)]">
                            {item.role}
                          </h3>
                          <p className="mt-[6px] text-[14px] leading-[17px] text-[var(--color-muted)]">
                            {item.company}
                          </p>
                          <p className="mt-3 text-[14px] leading-[1.8] text-[var(--color-muted)]">
                            {item.summary}
                          </p>
                          {item.bullets && (
                            <ul className="mt-[14px] grid gap-2 text-[14px] leading-[1.7] text-[var(--color-muted)]">
                              {item.bullets.map((bullet) => (
                                <li key={bullet} className="flex gap-3">
                                  <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section
                id="projects"
                className="hidden border-t border-[var(--color-line)] pt-4 sm:block lg:mt-[24px] lg:pt-6"
              >
                <SectionLabel>Selected Work</SectionLabel>
                <div className="mt-4 grid gap-4 xl:grid-cols-3 lg:mt-[26px]">
                  {projects.map((project) => (
                    <article
                      key={project.name}
                      className="flex min-h-[220px] flex-col justify-between rounded-[24px] border border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff_0%,#f8f5ee_100%)] p-[22px]"
                    >
                      <div>
                        <p className="font-latin text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                          {project.stack}
                        </p>
                        <h3 className="mt-[14px] text-[22px] font-semibold leading-[1.12] tracking-[-0.05em] text-[var(--color-strong)]">
                          {project.name}
                        </h3>
                        <p className="mt-3 max-w-[238px] text-[14px] leading-[1.8] text-[var(--color-muted)]">
                          {project.description}
                        </p>
                      </div>

                      <a
                        className="mt-6 inline-flex min-h-[46px] w-full items-center justify-between rounded-full bg-[var(--color-slate-button)] px-5 font-latin text-[14px] font-bold text-white shadow-[0_18px_30px_rgba(34,48,73,0.16)] transition hover:bg-[var(--color-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4"
                        href={project.url}
                        rel="noreferrer"
                        target="_blank"
                        style={{ color: '#ffffff' }}
                      >
                        <span>Open project</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className="hidden content-start gap-4 sm:grid">
              <InfoCard title="Education">
                <StackedText lines={profile.education} />
              </InfoCard>

              <InfoCard title="Capabilities">
                <div className="flex flex-wrap gap-[10px]">
                  {profile.capabilities.map((capability) => (
                    <span
                      key={capability}
                      className="rounded-full border border-[var(--color-line)] bg-white px-[14px] py-[10px] text-[13px] leading-4 text-[var(--color-muted)]"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </InfoCard>

              <InfoCard title="Licenses">
                <StackedText lines={profile.certifications} />
              </InfoCard>
            </aside>
          </div>

          <div className="mt-5 grid gap-4 sm:hidden">
            <InfoCard title="Experience">
              <h3 className="text-[1.15rem] font-semibold tracking-[-0.04em] text-[var(--color-strong)]">
                {experiences[0].role}
              </h3>
              <p className="mt-1 text-[0.82rem] text-[var(--color-muted)]">
                {experiences[0].company} / {experiences[0].period}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{experiences[0].summary}</p>
            </InfoCard>

            <InfoCard title="Capabilities">
              <div className="flex flex-wrap gap-2">
                {profile.capabilities.slice(0, 4).map((capability) => (
                  <span
                    key={capability}
                    className="rounded-full border border-[var(--color-line)] bg-white px-3 py-2 text-[0.74rem] text-[var(--color-muted)]"
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </InfoCard>
          </div>
          </article>
        </div>
      </main>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-latin text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-accent)]">
      {children}
    </p>
  )
}

function InfoCard({
  bodyClassName,
  children,
  id,
  title,
}: {
  bodyClassName?: string
  children: React.ReactNode
  id?: string
  title: string
}) {
  return (
    <section
      id={id}
      className="rounded-[26px] border border-[var(--color-line)] bg-white px-5 py-5 lg:px-[22px] lg:py-[22px]"
    >
      <p className="font-latin text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
        {title}
      </p>
      <div className={bodyClassName ? `mt-[14px] ${bodyClassName}` : 'mt-[14px]'}>{children}</div>
    </section>
  )
}

function Detail({ term, value }: { term: string; value: string }) {
  return (
    <dl className="grid grid-cols-[72px_minmax(0,1fr)] gap-3">
      <dt className="font-latin text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
        {term}
      </dt>
      <dd className="min-w-0 break-words text-[14px] leading-[1.7] text-[var(--color-strong)]">
        {value}
      </dd>
    </dl>
  )
}

function StackedText({ lines }: { lines: string[] }) {
  return (
    <div className="grid gap-1 text-[14px] leading-[1.9] text-[var(--color-muted)]">
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  )
}

export default App
