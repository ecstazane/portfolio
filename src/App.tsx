import { useMemo, useState } from "react"
import { portfolio } from "@/data/portfolio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { CalendarRange, ExternalLink, Mail, MapPin } from "lucide-react"

const defaultProjectId =
  portfolio.projects.find((project) => project.embedUrl)?.id ?? portfolio.projects[0]?.id ?? ""

function App() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [query, setQuery] = useState("")
  const [activeProjectId, setActiveProjectId] = useState(defaultProjectId)

  const categories = useMemo(() => {
    return ["All", ...new Set(portfolio.projects.map((project) => project.category))]
  }, [])

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return portfolio.projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory
      const searchText = [
        project.title,
        project.category,
        project.summary,
        project.tags.join(" "),
        project.highlights.join(" "),
      ]
        .join(" ")
        .toLowerCase()
      const matchesQuery = !normalizedQuery || searchText.includes(normalizedQuery)
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  const activeProject = visibleProjects.find((project) => project.id === activeProjectId)
  const displayProject = activeProject ?? visibleProjects[0]
  const displayProjectId = displayProject?.id

  return (
    <div className="min-h-screen bg-[radial-gradient(1100px_circle_at_10%_10%,rgba(13,148,136,0.18),transparent_55%),radial-gradient(900px_circle_at_90%_20%,rgba(245,158,11,0.12),transparent_50%),linear-gradient(180deg,#f8fafc_0%,#ffffff_45%,#f1f5f9_100%)] text-foreground">
      <header className="border-b border-border/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{portfolio.eyebrow}</p>
            <h1 className="text-xl font-semibold tracking-tight">{portfolio.name}</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" asChild>
              <a href="#projects">See Work</a>
            </Button>
            <Button asChild>
              <a href={`mailto:${portfolio.email}`}>Contact</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-20">
        <section className="grid gap-8 pb-16 pt-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              {portfolio.roles.map((role) => (
                <Badge key={role} variant="secondary" className="text-xs uppercase tracking-wide">
                  {role}
                </Badge>
              ))}
            </div>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Building reliable backend systems with a product-ready full stack edge.
            </h2>
            <p className="text-lg text-muted-foreground">{portfolio.tagline}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {portfolio.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarRange className="h-4 w-4" />
                {portfolio.availability.ojtWindow}
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="#projects">Explore Projects</a>
              </Button>
              <Button variant="outline" asChild>
                <a href={portfolio.projects.find((project) => project.embedUrl)?.link ?? "#projects"}>
                  View zGarage
                </a>
              </Button>
            </div>
          </div>
          <Card className="border-border/60 bg-white/80">
            <CardHeader>
              <CardTitle>Live Signals</CardTitle>
              <CardDescription>High-level context for recruiters and collaborators.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="rounded-lg border border-border/60 bg-background p-4">
                <p className="text-xs uppercase text-muted-foreground">Status</p>
                <p className="mt-2 text-lg font-semibold">{portfolio.availability.status}</p>
                <p className="text-sm text-muted-foreground">{portfolio.availability.statusDetail}</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-background p-4">
                <p className="text-xs uppercase text-muted-foreground">OJT Window</p>
                <p className="mt-2 text-lg font-semibold">{portfolio.availability.ojtWindow}</p>
                <p className="text-sm text-muted-foreground">{portfolio.availability.ojtDetail}</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-background p-4">
                <p className="text-xs uppercase text-muted-foreground">Graduation Target</p>
                <p className="mt-2 text-lg font-semibold">{portfolio.availability.graduationTarget}</p>
                <p className="text-sm text-muted-foreground">Open to entry-level roles after graduation.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="about" className="grid gap-8 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-border/60 bg-white/90">
            <CardHeader>
              <CardTitle>About</CardTitle>
              <CardDescription>Backend-first thinking with full stack execution.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>{portfolio.about}</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {portfolio.focus.map((item) => (
                  <div key={item} className="rounded-lg border border-border/60 bg-background p-3">
                    <p className="text-sm font-medium text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-white/90">
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>{portfolio.education.detail}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base font-semibold">{portfolio.education.school}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {portfolio.education.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="skills" className="pb-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Skill Stack</h2>
              <p className="text-sm text-muted-foreground">Tap each group to switch what is shown.</p>
            </div>
          </div>
          <Card className="mt-6 border-border/60 bg-white/90">
            <CardContent className="pt-6">
              <Tabs defaultValue={Object.keys(portfolio.stackGroups)[0]}>
                <TabsList className="flex flex-wrap justify-start">
                  {Object.keys(portfolio.stackGroups).map((group) => (
                    <TabsTrigger key={group} value={group}>
                      {group}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {Object.entries(portfolio.stackGroups).map(([group, items]) => (
                  <TabsContent key={group} value={group} className="pt-4">
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <Badge key={item} variant="outline">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="pb-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Projects</h2>
              <p className="text-sm text-muted-foreground">Filter, search, and preview a live embed.</p>
            </div>
            <div className="w-full max-w-sm">
              <Input
                placeholder="Search by title, tag, or keyword"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>

          <Card className="mt-6 border-border/60 bg-white/90">
            <CardContent className="space-y-6 pt-6">
              <Tabs value={activeCategory} onValueChange={setActiveCategory}>
                <TabsList className="flex flex-wrap justify-start">
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category}>
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-4">
                  {visibleProjects.length === 0 && (
                    <div className="rounded-lg border border-dashed border-border p-6 text-sm text-muted-foreground">
                      No projects matched your filter or search.
                    </div>
                  )}
                  {visibleProjects.map((project) => (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => setActiveProjectId(project.id)}
                      className={`w-full rounded-xl border p-4 text-left transition ${
                        project.id === displayProjectId
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-border/60 bg-background hover:border-primary/60"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
                          <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
                        </div>
                        <Badge variant="outline" className="shrink-0">
                          {project.category}
                        </Badge>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="space-y-4">
                  {displayProject ? (
                    <Card className="border-border/60 bg-background">
                      <CardHeader>
                        <CardTitle>{displayProject.title}</CardTitle>
                        <CardDescription>{displayProject.summary}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {displayProject.highlights.map((highlight) => (
                            <li key={highlight}>• {highlight}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {displayProject.link && (
                            <Button asChild size="sm">
                              <a href={displayProject.link} target="_blank" rel="noreferrer">
                                Live Link
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                        {displayProject.embedUrl && (
                          <div className="space-y-2">
                            <div className="overflow-hidden rounded-xl border border-border/60">
                              <iframe
                                title={`${displayProject.title} live preview`}
                                src={displayProject.embedUrl}
                                className="h-[420px] w-full"
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                                allowFullScreen
                              />
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Live interactive preview. Use the controls inside the frame.
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="rounded-lg border border-dashed border-border p-6 text-sm text-muted-foreground">
                      Select a project to see details.
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="case-studies" className="pb-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Case Studies</h2>
              <p className="text-sm text-muted-foreground">NDA-safe breakdowns of work approach and impact.</p>
            </div>
          </div>
          <Card className="mt-6 border-border/60 bg-white/90">
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                {portfolio.caseStudies.map((study) => (
                  <AccordionItem key={study.id} value={study.id}>
                    <AccordionTrigger className="text-left">
                      <div>
                        <p className="text-sm font-semibold text-foreground">{study.title}</p>
                        <p className="text-xs text-muted-foreground">{study.type}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-sm text-muted-foreground">
                        <p>{study.context}</p>
                        <div>
                          <p className="font-semibold text-foreground">Problem</p>
                          <p>{study.problem}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Task</p>
                          <p>{study.task}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Result</p>
                          <p>{study.result}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Implementation Steps</p>
                          <ul className="mt-2 space-y-2">
                            {study.steps.map((step) => (
                              <li key={step.title}>
                                <span className="font-medium text-foreground">{step.title}:</span> {step.detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Screens (NDA-safe)</p>
                          <ul className="mt-2 space-y-2">
                            {study.screens.map((screen) => (
                              <li key={screen}>• {screen}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        <section id="contact" className="grid gap-8 pb-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="text-sm text-muted-foreground">
              I am currently completing my internship and preparing for graduation. If you are hiring for
              entry-level backend or full stack roles, I would love to connect.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href={`mailto:${portfolio.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Email {portfolio.name.split(" ")[0]}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">Recruiter Brief</a>
              </Button>
            </div>
          </div>
          <Card className="border-border/60 bg-white/90">
            <CardHeader>
              <CardTitle>Social Links</CardTitle>
              <CardDescription>Quick access to code and professional profiles.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {portfolio.socialLinks.map((link) => (
                <Tooltip key={link.label}>
                  <TooltipTrigger asChild>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-lg border border-border/60 bg-background px-4 py-3 text-sm font-medium text-foreground transition hover:border-primary/60"
                    >
                      {link.label}
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Open {link.label}</TooltipContent>
                </Tooltip>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

export default App
