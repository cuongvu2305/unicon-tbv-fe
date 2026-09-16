export interface Dictionary {
  htmlLang: string;

  meta: {
    keywords: string[];
    home: { title: string; description: string };
    about: { title: string; description: string };
    projects: { title: string; description: string };
    contact: { title: string; description: string };
  };

  header: {
    openMenu: string;
    closeMenu: string;
  };

  nav: {
    home: string;
    about: string;
    services: string;
    capabilities: string;
    projects: string;
    contact: string;
    contactCta: string;
  };

  footer: {
    tagline: string;
    quickLinks: string;
    contactInfo: string;
    taxCodeLabel: string;
    allRightsReserved: string;
  };

  hero: {
    badge: string;
    motto: string;
    subtitle: string;
    ctaContact: string;
    ctaProjects: string;
  };

  aboutTeaser: {
    eyebrow: string;
    title: string;
    cta: string;
  };

  about: {
    pageEyebrow: string;
    pageTitle: string;
    coverLetter: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
      closing: string;
    };
    visionTitle: string;
    vision: string[];
    missionTitle: string;
    mission: string[];
    coreValuesHeading: string;
    coreValues: { letter: "T" | "B" | "V"; titleLocal: string; titleEn: string; description: string }[];
    orgChartHeading: string;
    orgChartDirector: string;
    orgChartDepartments: string[];
    partnersHeading: string;
  };

  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { id: string; title: string; description: string }[];
  };

  capabilities: {
    eyebrow: string;
    title: string;
    subtitle: string;
    team: {
      heading: string;
      /** Contains a "{count}" placeholder, substituted at render time. */
      subheadingTemplate: string;
      items: { discipline: string; qualification: string; headcount: number }[];
    };
    equipment: {
      heading: string;
      subheading: string;
      nameColumn: string;
      quantityColumn: string;
      items: { id: string; name: string; quantity: number | string }[];
    };
  };

  projects: {
    teaser: { eyebrow: string; title: string; subtitle: string; viewAll: string };
    page: { eyebrow: string; title: string; subtitle: string };
    scopeLabel: string;
    items: { id: string; name: string; scopeOfWork: string }[];
  };

  partners: {
    eyebrow: string;
    homeTitle: string;
    aboutHeading: string;
    items: { id: string; name: string }[];
  };

  contact: {
    teaser: { title: string; subtitle: string; ctaSend: string };
    page: { eyebrow: string; title: string; subtitle: string };
    info: {
      addressLabel: string;
      phoneLabel: string;
      emailLabel: string;
      legalRepLabel: string;
      legalRepTitle: string;
      taxCodeLabel: string;
    };
    form: {
      nameLabel: string;
      namePlaceholder: string;
      nameError: string;
      phoneLabel: string;
      phonePlaceholder: string;
      phoneError: string;
      emailLabel: string;
      emailPlaceholder: string;
      emailError: string;
      messageLabel: string;
      messagePlaceholder: string;
      messageError: string;
      contactMethodError: string;
      submitIdle: string;
      submitLoading: string;
      successTitle: string;
      sendAnother: string;
    };
  };

  notFound: {
    title: string;
    description: string;
    cta: string;
  };

  messageCodes: Record<string, string>;
}
