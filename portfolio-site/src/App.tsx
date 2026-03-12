type SkillGroup = {
  title: string
  tone: 'primary' | 'neutral'
  items: string[]
}

type LanguageItem = {
  label: string
  level: string
  percent: number
}

type ProjectItem = {
  name: string
  url: string
}

type ExperienceItem = {
  role: string
  period: string
  company: string
  bullets: string[]
  current?: boolean
}

const profile = {
  name: '游閔暘',
  englishName: 'Min-Yang Yu',
  title: 'Frontend Engineer | Audiologist',
  location: 'Taoyuan, Taiwan',
  locationMobile: '桃園市, 台灣 (Taoyuan, Taiwan)',
  email: 'charlesyou1234567@gmail.com',
  intro:
    '現居桃園，自 2022 年起自學前端開發，通過自學並於同年底錄取前端工程師的職缺，主要負責前端開發，專長於一頁式網站、企業形象官網、電子展板與客戶管理系統 (SPA) 開發與串接。具國家聽力師執照，於2023年底轉換跑道回歸本科專業工作，能轉譯臨床需求為有效介面。持續探索 AI 工具，積極提升開發效率與跨領域整合能力，目前擔任區域主管以及負責部門內的數位轉型。',
  education: {
    degree: '語言治療與聽力學系',
    school: '台北護理健康大學',
    period: '2017 ~ 2021',
    description: '主要修習課程：聽力學、語言障礙評估與治療、聽覺輔具選配。',
  },
}

const navItems = [
  { href: '#profile', label: '簡介' },
  { href: '#expertise', label: '專業技能' },
  { href: '#experience', label: '工作經歷' },
  { href: '#portfolio', label: '作品集' },
  { href: '#education', label: '學歷' },
]

const skillGroups: SkillGroup[] = [
  {
    title: '前端開發',
    tone: 'primary',
    items: ['HTML/CSS/JS', 'REACT.JS', 'Tailwind CSS', 'Next.js', 'codex cli / antigravity', 'mcp server / skills'],
  },
  {
    title: '專業領域',
    tone: 'neutral',
    items: ['聽力學', '聽覺輔具選配', 'Web Accessibility (a11y)', '跨領域整合'],
  },
]

const languages: LanguageItem[] = [
  { label: '中文', level: '母語', percent: 100 },
  { label: '英文 (TOEIC: 820分)', level: '中等', percent: 85 },
]

const projects: ProjectItem[] = [
  { name: '聽力分析與選配回顧系統', url: 'https://hearingreviewdev.vercel.app/dashboard' },
  { name: '森鉅建設官網', url: 'https://shen-gi-construction-company-azz251wnt-yoz0713.vercel.app/' },
  { name: '房地產線上展版', url: 'https://classey-home-29nb.vercel.app/' },
]

const desktopExperiences: ExperienceItem[] = [
  {
    role: '店長',
    period: '2023 - 至今',
    company: '大樹醫藥股份有限公司',
    bullets: [
      '管理桃園、新竹共三家聽力中心',
      '追蹤同仁銷售狀況',
      '開發輔助銷售工具(REACT.JS+supabase全端系統)',
      '規劃聽力中心部門教育平台系統',
    ],
    current: true,
  },
  {
    role: '聽力師',
    period: '2023 - 2025',
    company: '大樹醫藥股份有限公司',
    bullets: ['籌備聽力中心開幕事宜', '聽力檢查與助聽器選配', '擔任CRM系統與外包廠商之窗口', '電子化既有的業務流程'],
  },
  {
    role: '前端工程師',
    period: '2022 - 2023',
    company: '聯創數位工作室',
    bullets: ['在團隊中負責前端的開發', '與設計師合作，開發各式動畫應用於網站中', '為公司帶入新技術，解決開發瓶頸'],
  },
  {
    role: '聽力師',
    period: '2021 - 2022',
    company: '博士助聽器',
    bullets: ['負責第一線聽力檢查業務及助聽器選配', '諮詢及衛教聽力學相關內容'],
  },
]

const mobileExperiences: ExperienceItem[] = [
  {
    role: '店長',
    period: '2023 - 至今',
    company: '大樹醫藥股份有限公司',
    bullets: ['管理桃園、新竹共三家聽力中心', '追蹤同仁銷售狀況', '開發輔助銷售工具', '規劃部門教育平台系統'],
    current: true,
  },
  {
    role: '聽力師',
    period: '2023 - 2025',
    company: '大樹醫藥股份有限公司',
    bullets: ['籌備聽力中心開幕事宜', '聽力檢查與助聽器選配', '擔任與外包廠商之窗口', '電子化既有的業務流程'],
  },
  {
    role: '前端工程師',
    period: '2022 - 2023',
    company: '聯創數位工作室',
    bullets: ['在團隊中負責前端的開發', '開發各式動畫應用於網站中', '解決開發瓶頸'],
  },
  {
    role: '聽力師',
    period: '2021 - 2022',
    company: '博士助聽器',
    bullets: ['負責第一線聽力檢查及選配', '諮詢及衛教聽力學相關內容'],
  },
]

function App() {
  return (
    <div className="bg-[var(--color-page)] text-slate-900 font-display">
      <DesktopLayout />
      <MobileLayout />
    </div>
  )
}

function DesktopLayout() {
  return (
    <div className="hidden min-h-screen flex-col lg:flex">
      <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="text-[var(--color-primary-desktop)]">
              <span className="material-symbols-outlined text-3xl font-bold">terminal</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              {profile.name} <span className="text-[var(--color-primary-desktop)]">{profile.englishName}</span>
            </h1>
          </div>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="text-sm font-medium text-slate-900 transition-colors hover:text-[var(--color-primary-desktop)]"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-grow px-6 py-8">
        <div className="flex w-full flex-col gap-8 lg:flex-row">
          <aside className="lg:w-1/3 xl:w-1/4">
            <div className="sticky top-8 flex flex-col gap-6">
              <section className="rounded-xl border border-[var(--color-border)] bg-white p-6 text-center shadow-sm lg:text-left">
                <div className="relative mb-6 h-32 w-32 mx-auto lg:mx-0">
                  <img
                    alt="Professional headshot of a frontend engineer smiling"
                    className="h-full w-full rounded-full border-4 border-[rgba(0,119,181,0.1)] object-cover"
                    height="512"
                    loading="eager"
                    src="/profile-photo.png"
                    width="512"
                  />
                  <div className="absolute bottom-1 right-1 h-6 w-6 rounded-full border-4 border-white bg-green-500" />
                </div>
                <h2 className="mb-1 text-2xl font-black text-slate-900">{profile.name}</h2>
                <p className="mb-4 text-sm font-semibold text-[var(--color-primary-desktop)]">{profile.title}</p>
                <div className="flex flex-col gap-3 text-sm text-slate-600">
                  <DesktopContact icon="mail">{profile.email}</DesktopContact>
                  <DesktopContact icon="location_on">{profile.location}</DesktopContact>
                </div>
                <hr className="my-6 border-[var(--color-border)]" />
              </section>

              <SidebarLanguageCard />
              <SidebarProjectsCard />
            </div>
          </aside>

          <div className="flex flex-col gap-8 lg:w-2/3 xl:w-3/4">
            <DesktopSection id="profile" icon="person" title="個人簡介">
              <p className="text-lg leading-relaxed text-slate-600">{profile.intro}</p>
            </DesktopSection>

            <DesktopSection id="education" icon="school" title="學歷背景">
              <div className="flex flex-col items-start gap-6 md:flex-row">
                <div className="rounded-xl bg-[rgba(0,119,181,0.1)] p-4">
                  <span className="material-symbols-outlined text-4xl text-[var(--color-primary-desktop)]">
                    history_edu
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{profile.education.degree}</h4>
                  <p className="font-medium text-slate-500">
                    {profile.education.school} | {profile.education.period}
                  </p>
                  <p className="mt-2 text-base text-slate-600">{profile.education.description}</p>
                </div>
              </div>
            </DesktopSection>

            <DesktopSection id="expertise" icon="auto_awesome" title="專業技能">
              <div className="grid gap-8 md:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                      {group.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className={`rounded-lg border px-3 py-1.5 text-sm font-semibold ${group.tone === 'primary'
                              ? 'border-[rgba(0,119,181,0.2)] bg-[rgba(0,119,181,0.1)] text-[var(--color-primary-desktop)]'
                              : 'bg-slate-100 text-slate-700'
                            }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </DesktopSection>

            <DesktopSection id="experience" icon="work" title="工作經歷">
              <div className="space-y-10">
                {desktopExperiences.map((item) => (
                  <DesktopTimelineItem key={`${item.role}-${item.period}`} item={item} />
                ))}
              </div>
            </DesktopSection>
          </div>
        </div>
      </main>

      <footer className="border-t border-[var(--color-border)] bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm text-slate-500">© 2026 游閔暘 Min-Yang Yu. 保留所有權利。</p>
          <p className="mt-2 text-xs uppercase tracking-tighter text-slate-400">前端工程師 &amp; 聽力師</p>
        </div>
      </footer>
    </div>
  )
}

function MobileLayout() {
  return (
    <div className="min-h-screen lg:hidden">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="rounded bg-[var(--color-primary-mobile)] p-1 text-white">
            <span className="material-symbols-outlined text-xl">person</span>
          </div>
          <h1 className="text-lg font-bold tracking-tight text-slate-900">{profile.englishName}</h1>
        </div>
      </header>

      <main className="mx-auto max-w-md pb-20">
        <section className="mb-2 bg-white shadow-sm">
          <div className="h-24 bg-gradient-to-r from-[var(--color-primary-mobile)] to-blue-400" />
          <div className="-mt-12 px-4 pb-6">
            <div className="relative inline-block">
              <img
                alt="游閔暘 Min-Yang Yu"
                className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-md"
                height="512"
                loading="eager"
                src="/profile-photo.png"
                width="512"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-slate-900">
                {profile.name} {profile.englishName}
              </h2>
              <p className="mt-1 font-medium text-slate-600">
                前端工程師 | 聽力師 (Frontend Engineer | Audiologist)
              </p>
              <div className="mt-4 space-y-2 text-sm text-slate-500">
                <MobileContact icon="location_on">{profile.locationMobile}</MobileContact>
                <MobileContact icon="mail">
                  <a className="text-[var(--color-primary-mobile)] hover:underline" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </MobileContact>
              </div>
            </div>
          </div>
        </section>

        <MobileSection title="個人簡介">
          <p className="text-sm leading-relaxed text-slate-700">{profile.intro}</p>
        </MobileSection>

        <MobileSection title="學歷背景">
          <div className="flex gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-[rgba(10,102,194,0.1)]">
              <span className="material-symbols-outlined text-[var(--color-primary-mobile)]">history_edu</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{profile.education.degree}</h4>
              <p className="text-xs text-slate-600">
                {profile.education.school} | {profile.education.period}
              </p>
              <p className="mt-1 text-xs text-slate-500">{profile.education.description}</p>
            </div>
          </div>
        </MobileSection>

        <MobileSection title="專業技能">
          <div className="flex flex-wrap gap-2">
            {skillGroups.map((group) => (
              <div key={group.title} className={group.title === '前端開發' ? 'mb-4' : ''}>
                <h4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded px-2.5 py-1 text-[10px] font-semibold ${group.tone === 'primary'
                          ? 'bg-[rgba(10,102,194,0.1)] text-[var(--color-primary-mobile)]'
                          : 'bg-slate-100 text-slate-600'
                        }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </MobileSection>

        <MobileSection title="語言能力" icon="verified">
          <div className="space-y-4">
            {languages.map((item) => (
              <div key={item.label}>
                <div className="mb-1 flex justify-between text-[10px] font-bold text-slate-900">
                  <span>{item.label}</span>
                  <span>{item.level}</span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full bg-[var(--color-primary-mobile)]"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </MobileSection>

        <MobileSection id="portfolio" title="精選作品">
          <div className="space-y-4">
            {projects.map((project) => (
              <a
                key={project.name}
                className="block rounded-lg border border-slate-100 bg-slate-50 p-3"
                href={project.url}
                rel="noreferrer"
                target="_blank"
              >
                <h4 className="text-sm font-bold text-slate-900">{project.name}</h4>
                <div className="mt-1 flex items-center gap-1 text-[10px] text-slate-500">
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  <span>點擊查看</span>
                </div>
              </a>
            ))}
          </div>
        </MobileSection>

        <MobileSection title="工作經歷">
          <div className="relative ml-3 border-l-2 border-slate-200 pb-2">
            {mobileExperiences.map((item) => (
              <MobileTimelineItem key={`${item.role}-${item.period}`} item={item} />
            ))}
          </div>
        </MobileSection>

        <footer className="p-6 text-center">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-xs text-slate-500">© 2026 游閔暘 Min-Yang Yu. 保留所有權利。</p>
            <p className="mt-1 text-[10px] uppercase tracking-tighter text-slate-400">前端工程師 &amp; 聽力師</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

function DesktopSection({
  children,
  icon,
  id,
  title,
}: {
  children: React.ReactNode
  icon: string
  id?: string
  title: string
}) {
  return (
    <section id={id} className="rounded-xl border border-[var(--color-border)] bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <span className="material-symbols-outlined text-3xl text-[var(--color-primary-desktop)]">{icon}</span>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      </div>
      {children}
    </section>
  )
}

function SidebarLanguageCard() {
  return (
    <section className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
      <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
        <span className="material-symbols-outlined text-[var(--color-primary-desktop)]">verified</span>
        語言能力
      </h3>
      <div className="space-y-3">
        {languages.map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex justify-between text-xs font-bold text-slate-900">
              <span>{item.label}</span>
              <span>{item.level}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full bg-[var(--color-primary-desktop)]"
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function SidebarProjectsCard() {
  return (
    <section id="portfolio" className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
      <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
        <span className="material-symbols-outlined text-[var(--color-primary-desktop)]">folder_shared</span>
        精選作品
      </h3>
      <div className="space-y-4">
        {projects.map((project) => (
          <a
            key={project.name}
            className="group block rounded-lg border border-transparent bg-slate-50 p-4 transition-all hover:border-[rgba(0,119,181,0.3)]"
            href={project.url}
            rel="noreferrer"
            target="_blank"
          >
            <h4 className="mb-1 text-sm font-bold text-slate-900 transition-colors group-hover:text-[var(--color-primary-desktop)]">
              {project.name}
            </h4>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              <span>點擊查看</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function DesktopTimelineItem({ item }: { item: ExperienceItem }) {
  return (
    <div className="relative border-l-2 border-slate-100 pl-8">
      <div
        className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full ${item.current ? 'bg-[var(--color-primary-desktop)] ring-4 ring-[rgba(0,119,181,0.2)]' : 'bg-slate-300'
          }`}
      />
      <div className="mb-2 flex flex-col md:flex-row md:items-start md:justify-between">
        <h4 className="text-xl font-bold text-slate-900">{item.role}</h4>
        <span className="text-sm font-medium text-slate-500">{item.period}</span>
      </div>
      <p className="mb-3 font-medium text-[var(--color-primary-desktop)]">{item.company}</p>
      <ul className="list-disc list-inside space-y-2 text-slate-600">
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}

function MobileSection({
  children,
  icon,
  id,
  title,
}: {
  children: React.ReactNode
  icon?: string
  id?: string
  title: string
}) {
  return (
    <section id={id} className="mb-2 bg-white p-4 shadow-sm">
      <h3 className={icon ? 'mb-4 flex items-center gap-2 text-lg font-bold text-slate-900' : 'mb-3 flex items-center gap-2 text-lg font-bold text-slate-900'}>
        {icon ? <span className="material-symbols-outlined text-xl text-[var(--color-primary-mobile)]">{icon}</span> : null}
        {title}
      </h3>
      {children}
    </section>
  )
}

function MobileTimelineItem({ item }: { item: ExperienceItem }) {
  return (
    <div className={`${item.period === '2021 - 2022' ? 'mb-4' : 'mb-8'} relative ml-6`}>
      <div
        className={`absolute -left-[33px] top-0 h-4 w-4 rounded-full ${item.current ? 'bg-[var(--color-primary-mobile)] ring-4 ring-[rgba(10,102,194,0.1)]' : 'bg-slate-300'
          }`}
      />
      <div className="mb-1 flex items-start justify-between">
        <h4 className="text-sm font-bold text-slate-900">{item.role}</h4>
        <span className="text-[10px] text-slate-500">{item.period}</span>
      </div>
      <p className="mb-2 text-[11px] font-bold text-[var(--color-primary-mobile)]">{item.company}</p>
      <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}

function DesktopContact({
  children,
  icon,
}: {
  children: React.ReactNode
  icon: string
}) {
  return (
    <div className="flex items-center justify-center gap-3 lg:justify-start">
      <span className="material-symbols-outlined text-xl text-[var(--color-primary-desktop)]">{icon}</span>
      <span>{children}</span>
    </div>
  )
}

function MobileContact({
  children,
  icon,
}: {
  children: React.ReactNode
  icon: string
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-base">{icon}</span>
      <span>{children}</span>
    </div>
  )
}

export default App
