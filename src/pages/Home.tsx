import { useMemo } from 'react';
import { Tooltip } from 'react-tippy';
import PageWrapper from './PageWrapper';

const BIRTH = new Date('1993-04-30T05:30:00Z');
const YEAR_MILLIS = 31556952000;

const Home = () => {
  const age = useMemo(() => Math.floor((Date.now() - BIRTH.getTime()) / YEAR_MILLIS), []);

  return (
    <PageWrapper forceReadableWidth>
      <h1>What I Do</h1>
      <p>
        Falcucci. {/* @ts-ignore */}
        <Tooltip arrow title={'30th December 1993'}>
          {age}
        </Tooltip>{' '}
        y/o software engineer, innovator and open-source enthusiast.
      </p>
      <p>
        I design, build and publish products of quality and reliability - currently on{' '}
        <a href="https://github.com/defence-labs?type=source" target="norel noopen">
          Defence Labs
        </a>{' '}
        as core Software Engineer.
      </p>
      <p>
        I have had a wealth of growing opportunities over several industries and one thing never
        changes: a business is rarely just the technology that drives it forward.
      </p>
      <p>
        I have worked from several perspectives within companies including devops and application
        engineering. Each role I held, the most important aspect was communicating with other staff
        to understand their problem from their point of view to help develop processes that were
        more efficient and scalable, even if it meant using less technology.
      </p>
      <p>
        <b>The goal is growth of the business, not just growth of the technology that drives it.</b>
      </p>
      <p>
        In my free time, I invest in and create a bunch of new open-source ideas which usually
        should be useful for myself first or someone close to me. Got a big descision to make? I'm
        always down to chat and help to put it in practice.
      </p>

      <h3>IKIGAI</h3>
      <p>
        Dreaming up ideas and making them come true is where my passion lies. I have a special
        interest in modern programming languages and green computing.
      </p>
      <p>
        I believe that the software industry should make more significant contributions towards
        environmental protection. Great advances have been made to decrease energy consumption and
        emissions of hardware. However, those are often canceled out by poorly optimized software
        and resource-intensive runtime environments.
      </p>
      <p>
        This is why I'm especially interested in the <b>Rust programming language</b> which allows
        writing performant and memory-safe applications without the need for a garbage collector or
        a virtual runtime environment, making use of modern syntax abstractions at the same time.
      </p>
    </PageWrapper>
  );
};

export default Home;
