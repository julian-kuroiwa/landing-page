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

type techIconsProps = {
  id: string
  title: string
  icon: {
    name: string
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: techIconsProps[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
}
