export type LogoProps = {
  logo: {
    alternativeText: string
    url: string
  }
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    url: string
    alternativeText: string
  }
}

type techIcon = {
  id: string
  title: string
  icon: {
    name: string
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: techIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{ title: string }>
}

type Module = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Module[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
}
