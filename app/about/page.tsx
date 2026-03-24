import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const aboutBody = `I've always been someone who gets stuck on questions most people would ignore.

Not because I have to…
but because I genuinely want to understand why things work the way they do.

Sometimes these questions show up randomly —
in the middle of work, while using a product, or even during some times when they should not 😂.

And once they do, I can't just move on.

I start breaking things down.
Then breaking them down again… recursively…

Until the complexity disappears
and the system starts making sense.

This habit has shaped how I learn and build.

Instead of just using tools,
I try to understand the decisions behind them —
especially how real-world systems are designed and scaled.

I enjoy connecting small pieces of understanding
into something larger —
systems that are not just functional,
but well thought out.

Lately, I've also been closely observing the rapid shift happening in AI.

It's moving fast — almost unreal at times.
But instead of feeling left behind, I find it exciting.

It feels like we're living in a time
where ideas turn into reality faster than ever.

And honestly, I'm just glad I get to experience
and build in this phase of technology.

Outside of tech, I like staying active —
especially playing cricket and outdoor sports. Recently took a goal to build out a great physique.

I come from Hingoli, Maharashtra —
a place far from typical tech hubs,
which makes this journey even more meaningful for me.`;

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About me</PageHeaderHeading>
        <PageHeaderDescription className="whitespace-pre-line">
          {aboutBody}
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
