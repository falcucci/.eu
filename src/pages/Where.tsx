import PageWrapper from './PageWrapper';
import Co from '../components/Co';
import styled from 'styled-components';
import HopIcon from '../assets/images/hop-social-icon.png';
import HivenAppIcon from '../assets/images/hiven-app-icon.png';
import GigglAppIcon from '../assets/images/giggl-app-icon.jpg';
import HonkAppIcon from '../assets/images/honk-app-icon.jpg';
import Repo from '../components/Repo';
import { Helmet } from 'react-helmet';

const Where = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Where</title>
      </Helmet>
      <h1>Where I've Done It</h1>
      <h3>Companies</h3>
      <CoWrapper>
        <Co
          url="https://hop.io"
          name="Defence Labs"
          iconReference={HopIcon}
          tagline="Private Data"
          role={'Senior Software Engineer & Core Developer'}
          what={
            `I was tired of the friction and overhead that came with backend deployment. Hop streamlines the deployment experience, with delight included. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            `
          }
        />
        <Co
          url="https://hiven.io"
          name="Magazine Luiza"
          iconReference={HivenAppIcon}
          tagline="Retail Company"
          role={'Senior Software Engineer & Core Developer'}
          what={`- Responsibilities include product development from the software development perspective, addressing performance or security concerns, as well as acting as architect.
- High scalable, high impact products through the use of technology, team work and best software engineering practices in high collaborative and challenging environments.
- At times my role included helping devops or using my previous data-engineering experience to help with developing analytics systems. Though the title suggests more programming-oriented work, much of my time is spent with architectural changes, or advising other developers or staff on possible ways to proceed toward a goal.`}
          acquired
        />
        <Co
          url="https://giggl.app"
          name="Anchor Loans"
          iconReference={GigglAppIcon}
          tagline="Financial Services"
          role={'Senior Software Engineer & Core Developer'}
          pretext={'2020-2022'}
          what={
            `- Development of systems controlling the buying and selling processes of properties owned by the company. 
- Developed a subsystem for neighbor property comparison.
- Developed web scrapers and internal ETL tools.
- Developed a system for property construction process management.
- Experimented with different data structures to maintain a large database efficiently.`
          }
        />
        <Co
          role={'Backend Engineer'}
          url="https://honk.me"
          name="Honk"
          iconReference={HonkAppIcon}
          tagline="Consumer social"
          pretext={'2020'}
          what={'- data mining, big data, machine learning, high availability web rest api, web scraping and more.'}
        />
      </CoWrapper>

      <h3>Open-source Projects</h3>
      <Repo
        name={'lanyard'}
        url={'https://github.com/falcucci/lanyard'}
        primaryLanguage={'Elixir'}
        description="Expose your Discord presence to an API in <10 seconds (used on this site)"
      />
      <Repo
        name={'domain-lookup-tree'}
        url={'https://github.com/falcucci/domain-lookup-tree'}
        primaryLanguage={'Rust'}
        description="A tree structure in Rust optimized for looking up domain names, with wildcard support"
      />
      <Repo
        name={'node_compass'}
        url={'https://github.com/falcucci/node_compass'}
        primaryLanguage={'Elixir'}
        description="Automatic hash ring management for Elixir nodes"
      />
      <Repo
        name={'falcucci.eu'}
        url={'https://github.com/falcucci/falcucci.eu'}
        primaryLanguage={'TypeScript'}
        description="This very website"
      />
    </PageWrapper>
  );
};

const CoWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 1800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default Where;
