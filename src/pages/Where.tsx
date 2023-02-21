import PageWrapper from './PageWrapper';
import Co from '../components/Co';
import styled from 'styled-components';
import DefenceLabsIcon from '../assets/images/bd-logo.png';
import MagaluIcon from '../assets/images/magalu.jpg';
import AnchorLoansIcon from '../assets/images/anchor.jpg';
import MagaluPay from '../assets/images/magalupay.jpg';
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
          iconReference={DefenceLabsIcon}
          tagline="Private Data"
          role={'Senior Software Engineer & Core Developer'}
          pretext={'Currently'}
          what={`
 Rebuilding the IT department from scratch drived by creating fast and innovative projects  using the most up-to-date technologies in a serverless environment, releasing new products and integrations, making them also accessible through developer tools.`}
        />
        <Co
          url="https://www.magazineluiza.com.br"
          name="Magazine Luiza"
          iconReference={MagaluIcon}
          tagline="Retail Company"
          role={'Senior Software Engineer & Core Developer'}
          pretext={'2022-2018'}
          what={`- Responsibilities include product development from the software development perspective, addressing performance or security concerns, as well as acting as architect.
- High scalable, high impact products through the use of technology, team work and best software engineering practices in high collaborative and challenging environments.
- At times my role included helping devops or using my previous data-engineering experience to help with developing analytics systems. Though the title suggests more programming-oriented work, much of my time is spent with architectural changes, or advising other developers or staff on possible ways to proceed toward a goal.`}
        />
        <Co
          role={'Senior Software Engineer'}
          url="https://fintechmagalu.com.br"
          name="MagaluPay"
          iconReference={MagaluPay}
          tagline="Financial Services"
          pretext={'2021'}
          what={
            '- Development of the core features that a digital bank would have to be succeed such as payment ransactions, payments by QRcode, external links, wallet account services and even cashback rules. Also responsible to create Integrations with third-parties partners and internal-company apps.'
          }
        />
        <Co
          url="https://www.anchorloans.com"
          name="Anchor Loans"
          iconReference={AnchorLoansIcon}
          tagline="Financial Services"
          role={'Senior Software Engineer & Core Developer'}
          pretext={'2018-2015'}
          what={`- Development of systems controlling the buying and selling processes of properties owned by the company. 
- Developed a subsystem for neighbor property comparison.
- Developed web scrapers and internal ETL tools.
- Developed a system for property construction process management.
- Experimented with different data structures to maintain a large database efficiently.`}
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
