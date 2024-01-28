import PageWrapper from './PageWrapper';
import Co from '../components/Co';
import styled from 'styled-components';
import TxPipeIcon from '../assets/images/txpipe-logo.png';
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
          url="https://txpipe.io"
          name="TxPipe"
          iconReference={TxPipeIcon}
          tagline="Blockchain Open Source Tools"
          role={'Software Engineer'}
          what={`
          Active contribution to the Cardano community through the latest advancements abreast blockchain open-source projects, thriving on leveraging blockchain technology as a catalyst for building a more transparent, equitable and decentralized world.`}
        />
        <Co
          url="https://www.businessdefence.it/en"
          name="Defence Labs"
          iconReference={DefenceLabsIcon}
          tagline="Computer & Network Security"
          role={'Senior Software Engineer & Core Developer'}
          pretext={'2023'}
          what={`
 Rebuilding the IT department from scratch drived by creating fast and innovative projects using the most up-to-date technologies in a serverless environment, releasing new products and integrations, making them also accessible through developer tools.`}
        />
        <Co
          url="https://www.magazineluiza.com.br"
          name="Magazine Luiza"
          iconReference={MagaluIcon}
          tagline="Retail Company"
          role={'Senior Software Engineer & Core Developer'}
          pretext={'2018-2022'}
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
        name={'release-me'}
        url={'https://github.com/falcucci/release-me'}
        primaryLanguage={'Shell'}
        description="A bunch of scripts that helps developers manage their software releases. It provides a ready-to-use process to track tasks, organize releases, and automate deployment processes."
      />
      <Repo
        name={'github-board-refined'}
        url={'https://github.com/falcucci/github-board-refined'}
        primaryLanguage={'Javascript'}
        description="A browser extension project management tool that helps you keep track of your projects and collaborate with your team. It helps you organize and manage your tasks and resources efficiently."
      />
      <Repo
        name={'dicomcrop'}
        url={'https://github.com/falcucci/dicomcrop '}
        primaryLanguage={'Python'}
        description="Prepare bedside medical images for machine learning and image interpretation, encrypting informations consumed from specified sources afterwards. "
      />
      <Repo
        name={'f1-world-championship-api'}
        url={'https://github.com/falcucci/f1-world-championship-api'}
        primaryLanguage={'Javascript'}
        description="A comprehensive API for Formula 1 World Championship data. It allows developers to quickly access data from the world's premier motor racing competition. "
      />
      <Repo
        name={'hedera-payments'}
        url={'https://github.com/falcucci/hedera-payments'}
        primaryLanguage={'Golang'}
        description="A secure, flexible, and reliable open source payment system built on top of the Hedera Hashgraph distributed ledger providing a way to securely manage payments. "
      />
      <Repo
        name={'hedera-coin'}
        url={'https://github.com/falcucci/hedera-coin'}
        primaryLanguage={'Golang'}
        description="A decentralized cryptocurrency platform that can be used to make payments, store value, and provide a secure way to transfer digital assets. "
      />
      <Repo
        name={'react-native-activity-result'}
        url={'https://github.com/falcucci/react-native-activity-result'}
        primaryLanguage={'Java'}
        description="A simple React Native native module for invoking `Activity.startActivityForResults`, `Activity.setResults`, and `Activity.finish` to help with implementing app-to-app communication."
      />
      <Repo
        name={'italy-today'}
        url={'https://github.com/falcucci/italy-today'}
        primaryLanguage={'Javascript'}
        description="Summarize the latest or specific news from Italy extracting the most important informations using AI and presenting them in a concise and easy-to-understand format."
      />
      <Repo
        name={'falcucci.eu'}
        url={'https://github.com/falcucci/.eu'}
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
