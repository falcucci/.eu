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
        I design, build and publish open-source projects - currently on{' '}
        <a href="https://github.com/txpipe" target="norel noopen">
          TxPipe
        </a>{' '}
        as a core Rust Software Engineer.
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
        should be useful for myself first or someone else close to me. Got a big descision to make?
        I'm always down to chat and help to put it in practice.
      </p>

      <h3>The Ikigai</h3>
      <p>
        Dreaming up ideas and making them come true is where my passion lies. I have a special
        interest in modern programming languages, green computing and anything to improve the
        human-being daily basis activities.
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

      <p>
        For those of you interested in how Rust and related technology can accomplish the goal of
        more eco-friendly software, I strongly recommend you to read the following{' '}
        <a
          href="https://www.semanticscholar.org/paper/Energyware-engineering%3A-techniques-and-tools-for-Pereira/c0c935db208abb92133c422bf710b53ded2faf84"
          target="norel noopen"
        >
          dissertation.
        </a>
        .
      </p>
    </PageWrapper>
  );
};

export default Home;
