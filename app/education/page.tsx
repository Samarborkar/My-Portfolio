import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { education } from '@/constants/education';

const educationIntro = `I secured a 99.53 percentile in JEE Mains, which led me to
IIIT Allahabad (2022 – 2026).

But honestly, clearing the exam was just the entry point.

Most of my real learning didn't come from classrooms —
it came from building, breaking, and trying to understand how things actually work.

College gave me the environment.
Curiosity did the rest.`;

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Started with an exam. Continued with curiosity.
        </PageHeaderHeading>
        <PageHeaderDescription className="whitespace-pre-line">
          {educationIntro}
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={education} />

      <Pager
        prevHref="/experience"
        nextHref="/contact"
        prevTitle="Experience"
        nextTitle="Contact"
      />
    </>
  );
};
export default EducationPage;
