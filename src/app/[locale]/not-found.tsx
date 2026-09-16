import { Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// Next.js doesn't reliably pass route params to not-found.tsx, so this
// always renders in the default locale — an acceptable trade-off for a 404
// page that's rarely the visitor's main entry point.
export default function NotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <Section variant="light" className="!py-32 text-center">
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold-600">404</span>
      <h1 className="mt-3 text-3xl font-extrabold text-navy-900 sm:text-4xl">{dict.notFound.title}</h1>
      <p className="mx-auto mt-4 max-w-md text-sm text-navy-600">{dict.notFound.description}</p>
      <div className="mt-8 flex justify-center">
        <Button href={`/${defaultLocale}`}>
          <Home className="h-4 w-4" />
          {dict.notFound.cta}
        </Button>
      </div>
    </Section>
  );
}
