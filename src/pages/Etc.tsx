import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const Etc = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>/etc</title>
    </Helmet>
    <h1>/etc</h1>
    <h2>Contact</h2>
    <p>
      I'm most responsive through Telegram, you can <a href={'https://t.me/falcucci'}>click here</a>{' '}
      to reach me out.
    </p>
    <p>
      If your inquiry is related to a tool I manage or control, please send an email to my email
      listed on the respective WHOIS contact. If it's an emergency, you can email{' '}
      <a href="mailto:alex.falcucci@gmail.com">alex.falcucci@gmail.com</a>.
    </p>
    <h2>Other</h2>
    <ul>
      <li>
        BTC: <code>14D2Qark9CPgb4sY7rK7qY6nKYGe3jPydR</code>
      </li>
    </ul>
    <ul>
      <li>
        <code>
          addr1qxthajcwcs4sxd29wtpvhfv3hxmyptqu38scetmxcuwtnkanyel5dahkpf7vf4t7mu8euwwn9h00n7jgv0cqdh62mxss04sja2
        </code>
      </li>
    </ul>
  </PageWrapper>
);

export default Etc;
