import React, { useEffect, useMemo, useState } from 'react';
import './App.css';

const ASSETS = {
  logo: '/assets/logo.svg',
  globe: '/assets/network-globe.svg',
  appIcon: '/assets/app-icon-template.svg',
};

const ROUTES = {
  home: '/',
  apps: '/apps',
  projects: '/projects',
  about: '/about',
  contact: '/contact',
  policy: '/policy',
};

const TEXT = {
  brandName: 'Muscode',
  brandSummary:
    'A Lusaka-based software studio building Android apps, web platforms, desktop tools, and enterprise systems.',
  navCta: 'Get In Touch',
  footerRights: '© 2026 Muscode. All rights reserved.',
  homeEyebrow: 'Software studio portfolio',
  homeTitle: 'Muscode',
  homeHighlight: 'code',
  homeSlogan: 'Imagination meets manifestation.',
  homeSubtitle:
    'We develop Android applications, desktop information system applications and web applications.',
  viewProjects: 'View Projects',
  getInTouch: 'Get In Touch',
  featuredApps: 'Featured Apps',
  featuredAppsSubtitle:
    'Android products built for training and productivity.',
  latestProjects: 'Latest Projects',
  latestProjectsSubtitle:
    'Selected systems and integrations shaped across mobile, web, and enterprise environments.',
  ctaTitle: 'Have a project in mind?',
  ctaBody: "Let's work together to bring your ideas to life.",
  ctaButton: 'Start a Project',
  appsTitle: 'Apps',
  appsSubtitle: 'Android tools and products built by Muscode.',
  projectsTitle: 'Projects',
  projectsSubtitle:
    'Systems, integrations and platforms built across mobile, web and enterprise.',
  aboutTitle: 'About Muscode',
  aboutSubtitle:
    'Clean user experiences, reliable engineering, and products that solve real problems.',
  contactTitle: "Let's build something useful.",
  contactSubtitle:
    'Tell us what you are building and we will help shape the right product path.',
  policyTitle: 'Privacy Policy',
  policySubtitle:
    'A clear overview of how Muscode apps handle user data, generated content, and third party services.',
  searchPlaceholder: 'Search apps',
  filterAll: 'All',
  viewApp: 'View App',
  viewProject: 'View Project',
  comingSoon: 'Coming Soon',
  playStore: 'View on Play Store',
  relatedProjects: 'Related Projects',
  projectTypePlaceholder: 'Select project type',
  formSuccess: 'Thanks. Your project details are ready to send.',
  formError: 'Please complete every field before submitting.',
};

const NAV_LINKS = [
  { label: 'Home', path: ROUTES.home },
  { label: 'Projects', path: ROUTES.projects },
  { label: 'Apps', path: ROUTES.apps },
  { label: 'About', path: ROUTES.about },
  { label: 'Contact', path: ROUTES.contact },
];

const TECH_STACK = ['Android', 'Web', 'Kotlin', 'Flutter', 'React', 'Node.js', 'PHP'];

const STATS = [
  { value: '10+', label: 'Apps Developed' },
  { value: '6+', label: 'Years Experience' },
  { value: '5K+', label: 'Users Worldwide' },
  { value: '20+', label: 'Projects Completed' },
];

const APPS = [
  {
    slug: 'random-reaction-timer',
    initials: 'RRT',
    title: 'Random Reaction Timer',
    description: 'Improve your reflexes with randomized reaction training.',
    hero:
      'A focused Android training app for randomized reaction sessions, timing drills, and controlled workout playlists.',
    tags: ['Android', 'Fitness'],
    features: [
      'Randomized reaction sessions',
      'Timer and stopwatch modes',
      'Playlists',
      'Foreground session controls',
      'Android 15 support',
    ],
    tech: ['Kotlin', 'Android', 'Foreground Services', 'Material UI'],
    action: TEXT.playStore,
  },
  {
    slug: 'strike-relax-trainer',
    initials: 'SRT',
    title: 'StrikeRelaxTrainer',
    description: 'Combat reaction trainer inspired by BlazePod.',
    hero:
      'A combat drill companion for touch and no-touch reaction modes, designed for focused training sessions.',
    tags: ['Android', 'Training'],
    features: [
      'Touch reaction mode',
      'No touch training mode',
      'Combat drill presets',
      'Results tracking',
    ],
    tech: ['Kotlin', 'Android', 'Training UX', 'Data Tracking'],
    action: TEXT.comingSoon,
  },
  {
    slug: 'nexus-file-manager',
    initials: 'NFM',
    title: 'Nexus File Manager',
    description: 'Powerful file manager with modern UI and features.',
    hero:
      'A modern Android file manager built for clear navigation, storage permissions, and everyday productivity.',
    tags: ['Android', 'Productivity'],
    features: [
      'Copy, move and delete files',
      'Folder management',
      'Storage permission flow',
      'Light and dark themes',
    ],
    tech: ['Kotlin', 'Android', 'Storage APIs', 'Material UI'],
    action: TEXT.comingSoon,
  },
];

const PROJECTS = [
  {
    slug: 'muscode-website',
    initials: 'MW',
    title: 'Muscode Website',
    description: 'Modern portfolio website built with latest tech.',
    tags: ['Web', 'Portfolio'],
    status: 'Live redesign',
    role: 'Frontend design',
    problem:
      'The Muscode brand needed a sharper portfolio presence that reflects modern software delivery.',
    solution:
      'A responsive dark blue website with reusable sections, product cards, project pages, and clear calls to action.',
    features: ['Responsive layout', 'Reusable cards', 'Portfolio routing', 'Premium visual system'],
    tech: ['React', 'CSS', 'SVG Assets', 'Responsive Design'],
    outcome: 'A more polished public face for Muscode apps, projects, and contact flows.',
  },
];

const ABOUT_SECTIONS = [
  {
    title: 'Mission',
    body:
      'Muscode turns practical ideas into reliable software products that people can use every day.',
  },
  {
    title: 'What We Build',
    body:
      'Android applications, web platforms, desktop information systems, UI/UX concepts, and enterprise integrations.',
  },
  {
    title: 'Why Muscode',
    body:
      'Every project is shaped with clear product thinking, maintainable engineering, and a strong focus on useful outcomes.',
  },
];

const TIMELINE = [
  'Started coding',
  'Launched Android apps',
  'Built enterprise systems',
  'Current portfolio',
];

const POLICY_SECTIONS = [
  {
    title: 'Overview',
    body:
      'Muscode does not transfer personal information to Muscode or third parties unless it is required for app functionality or explicitly initiated by the user.',
  },
  {
    title: 'Information Collection',
    body:
      'Some apps may use platform services required for core features, diagnostics, payments, ads, or analytics depending on the product.',
  },
  {
    title: 'User Generated Content',
    body:
      'Some apps may allow users to record sounds, take photos, save files, or share content through third party apps. Recording, saving and sharing only happens after deliberate user action.',
  },
  {
    title: 'Third Party Services',
    body:
      'Some apps may integrate with services such as Google Play Games, Google Play Services, Firebase, AdMob, or analytics tools. When users choose to use those services, data may be processed according to the privacy policy of the relevant provider.',
  },
  {
    title: 'Data Sharing',
    body:
      'If users transfer records, app data, screenshots, recordings or game progress outside Muscode apps, the privacy policy of the receiving service becomes effective.',
  },
  {
    title: 'Contact',
    body:
      'For privacy questions about Muscode apps or services, use the contact page to reach the studio.',
  },
];

const CONTACT_TYPES = ['Android App', 'Web Platform', 'Desktop Tool', 'Enterprise System', 'UI/UX Consulting'];

function normalizePath(pathname) {
  if (!pathname || pathname === '') {
    return ROUTES.home;
  }

  return pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

function navigateTo(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new Event('muscode:navigate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getCurrentPath() {
  return normalizePath(window.location.pathname);
}

function useCurrentPath() {
  const [path, setPath] = useState(getCurrentPath);

  useEffect(() => {
    const updatePath = () => setPath(getCurrentPath());

    window.addEventListener('popstate', updatePath);
    window.addEventListener('muscode:navigate', updatePath);

    return () => {
      window.removeEventListener('popstate', updatePath);
      window.removeEventListener('muscode:navigate', updatePath);
    };
  }, []);

  return path;
}

function LinkButton({ path, children, className }) {
  return (
    <a
      className={className}
      href={path}
      onClick={(event) => {
        event.preventDefault();
        navigateTo(path);
      }}
    >
      {children}
    </a>
  );
}

function GlowBackground() {
  return (
    <div className="glow-background" aria-hidden="true">
      <span className="glow glow-one" />
      <span className="glow glow-two" />
      <span className="grid-overlay" />
    </div>
  );
}

function Navbar({ path }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar-shell">
      <nav className="navbar">
        <LinkButton path={ROUTES.home} className="brand-link">
          <img src={ASSETS.logo} alt={TEXT.brandName} />
        </LinkButton>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.path}
              className={path === link.path ? 'active' : ''}
              href={link.path}
              onClick={(event) => {
                event.preventDefault();
                closeMenu();
                navigateTo(link.path);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <LinkButton path={ROUTES.contact} className="nav-cta">
          {TEXT.navCta}
          <span aria-hidden="true">-&gt;</span>
        </LinkButton>
      </nav>
    </header>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-title">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function PageHeader({ title, subtitle }) {
  return (
    <section className="page-header">
      <p className="eyebrow">{TEXT.brandName}</p>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}

function TechStackRow() {
  return (
    <div className="tech-row">
      {TECH_STACK.map((tech) => (
        <span key={tech}>{tech}</span>
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">{TEXT.homeEyebrow}</p>
        <h1>
          Mus<span>{TEXT.homeHighlight}</span>
        </h1>
        <h2>{TEXT.homeSlogan}</h2>
        <p>{TEXT.homeSubtitle}</p>
        <div className="hero-actions">
          <LinkButton path={ROUTES.projects} className="button button-primary">
            {TEXT.viewProjects}
          </LinkButton>
          <LinkButton path={ROUTES.contact} className="button button-secondary">
            {TEXT.getInTouch}
          </LinkButton>
        </div>
        <TechStackRow />
      </div>

      <div className="hero-visual">
        <img src={ASSETS.globe} alt="" aria-hidden="true" />
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="stats-strip">
      {STATS.map((stat) => (
        <article key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </article>
      ))}
    </section>
  );
}

function TagList({ tags }) {
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

function IconBadge({ initials }) {
  return (
    <div className="icon-badge">
      <img src={ASSETS.appIcon} alt="" aria-hidden="true" />
      <span>{initials}</span>
    </div>
  );
}

function AppCard({ app }) {
  return (
    <article className="card app-card">
      <IconBadge initials={app.initials} />
      <h3>{app.title}</h3>
      <p>{app.description}</p>
      <TagList tags={app.tags} />
      <LinkButton path={`/apps/${app.slug}`} className="card-link">
        {TEXT.viewApp}
        <span aria-hidden="true">-&gt;</span>
      </LinkButton>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <IconBadge initials={project.initials} />
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <TagList tags={project.tags} />
      <LinkButton path={`/projects/${project.slug}`} className="card-link">
        {TEXT.viewProject}
        <span aria-hidden="true">-&gt;</span>
      </LinkButton>
    </article>
  );
}

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-icon" aria-hidden="true">
        &lt;/&gt;
      </div>
      <div>
        <h2>{TEXT.ctaTitle}</h2>
        <p>{TEXT.ctaBody}</p>
      </div>
      <LinkButton path={ROUTES.contact} className="button button-primary">
        {TEXT.ctaButton}
      </LinkButton>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <section className="content-section">
        <SectionTitle title={TEXT.featuredApps} subtitle={TEXT.featuredAppsSubtitle} />
        <div className="card-grid app-grid featured-grid">
          {APPS.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </section>
      <section className="content-section">
        <SectionTitle title={TEXT.latestProjects} subtitle={TEXT.latestProjectsSubtitle} />
        <div className="card-grid project-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}

function FilterPills({ options, activeFilter, onChange }) {
  return (
    <div className="filter-pills">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={activeFilter === option ? 'active' : ''}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function AppsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState(TEXT.filterAll);
  const filters = [TEXT.filterAll, 'Fitness', 'Training', 'Productivity'];

  const visibleApps = useMemo(
    () =>
      APPS.filter((app) => {
        const matchesFilter = activeFilter === TEXT.filterAll || app.tags.includes(activeFilter);
        const normalizedSearch = searchTerm.trim().toLowerCase();
        const matchesSearch =
          normalizedSearch.length === 0 ||
          app.title.toLowerCase().includes(normalizedSearch) ||
          app.description.toLowerCase().includes(normalizedSearch);

        return matchesFilter && matchesSearch;
      }),
    [activeFilter, searchTerm],
  );

  return (
    <>
      <PageHeader title={TEXT.appsTitle} subtitle={TEXT.appsSubtitle} />
      <section className="content-section">
        <div className="toolbar">
          <input
            type="search"
            value={searchTerm}
            placeholder={TEXT.searchPlaceholder}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <FilterPills
            options={filters}
            activeFilter={activeFilter}
            onChange={setActiveFilter}
          />
        </div>
        <div className="card-grid app-grid">
          {visibleApps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </section>
    </>
  );
}

function DetailLayout({ item, kind }) {
  const isApp = kind === 'app';

  return (
    <>
      <section className="detail-hero">
        <IconBadge initials={item.initials} />
        <div>
          <TagList tags={item.tags} />
          <h1>{item.title}</h1>
          <p>{isApp ? item.hero : item.description}</p>
          {isApp ? (
            <button type="button" className="button button-primary">
              {item.action}
            </button>
          ) : (
            <div className="detail-chips">
              <span>{item.status}</span>
              <span>{item.role}</span>
            </div>
          )}
        </div>
      </section>

      {isApp ? <AppDetailContent app={item} /> : <ProjectDetailContent project={item} />}
    </>
  );
}

function AppDetailContent({ app }) {
  return (
    <section className="detail-grid">
      <article className="glass-panel">
        <h2>Features</h2>
        <FeatureList features={app.features} />
      </article>
      <article className="glass-panel">
        <h2>Tech Stack</h2>
        <TagList tags={app.tech} />
      </article>
      <article className="glass-panel screenshots-panel">
        <h2>Screenshots</h2>
        <div className="device-row">
          <span />
          <span />
          <span />
        </div>
      </article>
    </section>
  );
}

function ProjectDetailContent({ project }) {
  return (
    <section className="detail-grid project-detail-grid">
      <article className="glass-panel">
        <h2>Problem</h2>
        <p>{project.problem}</p>
      </article>
      <article className="glass-panel">
        <h2>Solution</h2>
        <p>{project.solution}</p>
      </article>
      <article className="glass-panel">
        <h2>Key Features</h2>
        <FeatureList features={project.features} />
      </article>
      <article className="glass-panel">
        <h2>Tech Stack</h2>
        <TagList tags={project.tech} />
      </article>
      <article className="glass-panel wide-panel">
        <h2>Outcome</h2>
        <p>{project.outcome}</p>
      </article>
      <article className="glass-panel wide-panel">
        <h2>{TEXT.relatedProjects}</h2>
        <div className="mini-card-row">
          {PROJECTS.filter((candidate) => candidate.slug !== project.slug)
            .slice(0, 3)
            .map((candidate) => (
              <LinkButton
                key={candidate.slug}
                path={`/projects/${candidate.slug}`}
                className="mini-card"
              >
                {candidate.title}
              </LinkButton>
            ))}
        </div>
      </article>
    </section>
  );
}

function FeatureList({ features }) {
  return (
    <ul className="feature-list">
      {features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
  );
}

function AppDetailPage({ slug }) {
  const app = APPS.find((candidate) => candidate.slug === slug);

  if (!app) {
    return <NotFoundPage />;
  }

  return <DetailLayout item={app} kind="app" />;
}

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState(TEXT.filterAll);
  const filters = [TEXT.filterAll, 'Web', 'Portfolio'];
  const visibleProjects = PROJECTS.filter(
    (project) => activeFilter === TEXT.filterAll || project.tags.includes(activeFilter),
  );

  return (
    <>
      <PageHeader title={TEXT.projectsTitle} subtitle={TEXT.projectsSubtitle} />
      <section className="content-section">
        <FilterPills options={filters} activeFilter={activeFilter} onChange={setActiveFilter} />
        <div className="card-grid project-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

function ProjectDetailPage({ slug }) {
  const project = PROJECTS.find((candidate) => candidate.slug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  return <DetailLayout item={project} kind="project" />;
}

function AboutPage() {
  return (
    <>
      <PageHeader title={TEXT.aboutTitle} subtitle={TEXT.aboutSubtitle} />
      <section className="about-intro glass-panel">
        <p>
          Muscode is a software studio based in Lusaka, Zambia, focused on building Android
          applications, web platforms, desktop tools and enterprise systems. We care about clean
          user experiences, reliable engineering and products that solve real problems.
        </p>
      </section>
      <section className="about-grid">
        {ABOUT_SECTIONS.map((section) => (
          <article key={section.title} className="glass-panel">
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>
      <section className="timeline glass-panel">
        <h2>Timeline</h2>
        <div>
          {TIMELINE.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="content-section">
        <SectionTitle title="Tech Stack" />
        <TechStackRow />
      </section>
    </>
  );
}

function ContactForm() {
  const emptyForm = {
    name: '',
    email: '',
    projectType: '',
    message: '',
  };
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('');

  const updateField = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isComplete = Object.values(form).every((value) => value.trim().length > 0);
    setStatus(isComplete ? TEXT.formSuccess : TEXT.formError);
  };

  return (
    <form className="contact-form glass-panel" onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          value={form.name}
          onChange={(event) => updateField('name', event.target.value)}
          type="text"
        />
      </label>
      <label>
        <span>Email</span>
        <input
          value={form.email}
          onChange={(event) => updateField('email', event.target.value)}
          type="email"
        />
      </label>
      <label>
        <span>Project Type</span>
        <select
          value={form.projectType}
          onChange={(event) => updateField('projectType', event.target.value)}
        >
          <option value="">{TEXT.projectTypePlaceholder}</option>
          {CONTACT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Message</span>
        <textarea
          value={form.message}
          onChange={(event) => updateField('message', event.target.value)}
          rows="6"
        />
      </label>
      <button type="submit" className="button button-primary">
        {TEXT.ctaButton}
      </button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}

function ContactPage() {
  const cards = [
    { title: 'Email', body: 'hello@muscode.dev' },
    { title: 'Location', body: 'Lusaka, Zambia' },
    { title: 'Services', body: 'Android, Web, Desktop, UI/UX, Consulting' },
  ];

  return (
    <>
      <PageHeader title={TEXT.contactTitle} subtitle={TEXT.contactSubtitle} />
      <section className="contact-layout">
        <ContactForm />
        <aside className="contact-cards">
          {cards.map((card) => (
            <article key={card.title} className="glass-panel">
              <h2>{card.title}</h2>
              <p>{card.body}</p>
            </article>
          ))}
        </aside>
      </section>
    </>
  );
}

function PolicyContent() {
  return (
    <section className="policy-content">
      {POLICY_SECTIONS.map((section) => (
        <article key={section.title} className="glass-panel">
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </article>
      ))}
    </section>
  );
}

function PolicyPage() {
  return (
    <>
      <PageHeader title={TEXT.policyTitle} subtitle={TEXT.policySubtitle} />
      <PolicyContent />
    </>
  );
}

function NotFoundPage() {
  return (
    <section className="page-header">
      <p className="eyebrow">{TEXT.brandName}</p>
      <h1>Page Not Found</h1>
      <p>The page you requested does not exist yet.</p>
      <LinkButton path={ROUTES.home} className="button button-primary">
        Back Home
      </LinkButton>
    </section>
  );
}

function renderPage(path) {
  if (path === ROUTES.home) {
    return <HomePage />;
  }

  if (path === ROUTES.apps) {
    return <AppsPage />;
  }

  if (path.startsWith('/apps/')) {
    return <AppDetailPage slug={path.replace('/apps/', '')} />;
  }

  if (path === ROUTES.projects) {
    return <ProjectsPage />;
  }

  if (path.startsWith('/projects/')) {
    return <ProjectDetailPage slug={path.replace('/projects/', '')} />;
  }

  if (path === ROUTES.about) {
    return <AboutPage />;
  }

  if (path === ROUTES.contact) {
    return <ContactPage />;
  }

  if (path === ROUTES.policy) {
    return <PolicyPage />;
  }

  return <NotFoundPage />;
}

function Footer() {
  const footerColumns = [
    {
      title: 'Quick Links',
      links: NAV_LINKS,
    },
    {
      title: 'Services',
      links: [
        { label: 'Android Apps', path: ROUTES.apps },
        { label: 'Web Platforms', path: ROUTES.projects },
        { label: 'Desktop Tools', path: ROUTES.projects },
        { label: 'Consulting', path: ROUTES.contact },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Contact', path: ROUTES.contact },
        { label: 'Policy', path: ROUTES.policy },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-brand">
        <img src={ASSETS.logo} alt={TEXT.brandName} />
        <p>{TEXT.brandSummary}</p>
      </div>
      {footerColumns.map((column) => (
        <div key={column.title} className="footer-column">
          <h3>{column.title}</h3>
          {column.links.map((link) => (
            <a
              key={`${column.title}-${link.label}`}
              href={link.path}
              onClick={(event) => {
                event.preventDefault();
                navigateTo(link.path);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      ))}
      <p className="footer-rights">{TEXT.footerRights}</p>
    </footer>
  );
}

function App() {
  const path = useCurrentPath();

  return (
    <div className="app-shell">
      <GlowBackground />
      <Navbar path={path} />
      <main>{renderPage(path)}</main>
      <Footer />
    </div>
  );
}

export default App;
