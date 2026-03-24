import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ExternalLink, Mail } from 'lucide-react';
import Link from 'next/link';

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Hey, I&apos;m Samar 👋</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Curiosity fuels me. Engineering shapes me.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Software Development Engineer Intern at Vyapar (Bangalore)
        </PageHeaderDescription>
        <PageHeaderDescription>
          Final-year student at IIIT Allahabad
        </PageHeaderDescription>
        <PageHeaderDescription>
          I enjoy breaking down complex problems and building systems that are
          simple, reliable, and make sense.
        </PageHeaderDescription>
        <PageHeaderDescription>
          Currently exploring system design, scalable architectures, and
          real-world engineering practices.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href={siteConfig.links.resume} target="_blank">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href={siteConfig.links.email}>
              <Mail className="size-4" />
              Send Mail
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;
