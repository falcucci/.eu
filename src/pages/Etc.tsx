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
      I'm most responsive through Twitter DMs, you can{' '}
      <a href={'https://twitter.com/messages/compose?recipient_id=102583719'}>click here</a> to DM
      me on Twitter.
    </p>
    <p>
      If your inquiry is related to a network I manage or control (e.g. AS952 or AS399531), please
      send an email to my email listed on the respective WHOIS contact. If it's an emergency, you
      can email <a href="mailto:ops@sakuraji.ma">ops@sakuraji.ma</a>.
    </p>
    <h2>Other</h2>
    <ul>
      <li>
        BTC: <code>14D2Qark9CPgb4sY7rK7qY6nKYGe3jPydR</code>
      </li>
    </ul>
  </PageWrapper>
);

export default Etc;
