import { Helmet } from 'react-helmet';
import PageWrapper from './PageWrapper';
import styled from 'styled-components';
import { useState, useCallback } from 'react';

const addresses = [
  {
    chain: 'Bitcoin',
    value: '14D2Qark9CPgb4sY7rK7qY6nKYGe3jPydR',
  },
  {
    chain: 'Ethereum',
    value: '0xE5B44f6d17ca30F4B5d062dc937CA11660d994d9',
  },
  {
    chain: 'Cardano',
    value:
      'addr1qxthajcwcs4sxd29wtpvhfv3hxmyptqu38scetmxcuwtnkanyel5dahkpf7vf4t7mu8euwwn9h00n7jgv0cqdh62mxss04sja2',
  },
];

const Etc = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyAddress = useCallback((value: string, chain: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(chain);
      setTimeout(() => setCopied(null), 1500);
    });
  }, []);

  return (
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
      <Tip>
        I have a quite active contribution through the latest advancements abreast blockchain projects,
        thriving on leveraging blockchain technology as a catalyst for building a more transparent,
        equitable and decentralized world.
        <br />
        <br />
        These donation addresses help keep that work moving.
      </Tip>
      <Chains>
        {addresses.map((address) => (
          <ChainButton
            key={address.chain}
            onClick={() => copyAddress(address.value, address.chain)}
          >
            <AddressTooltip data-role="address">{address.value}</AddressTooltip>
            {address.chain}
            <CopyHint>{copied === address.chain ? 'Copied!' : 'Copy'}</CopyHint>
          </ChainButton>
        ))}
      </Chains>
    </PageWrapper>
  );
};

const Tip = styled.p`
  font-size: 0.85rem;
  color: hsl(var(--primary-200));
`;

const Chains = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ChainButton = styled.button`
  border: 1px solid hsl(var(--primary-800));
  border-radius: 999px;
  padding: 0.5rem 1.25rem;
  background-color: transparent;
  color: hsl(var(--primary-900));
  font-family: 'Courier New', Courier, monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  position: relative;
  overflow: visible;

  &:hover {
    background-color: hsl(var(--accent-100));
  }

  &:hover span[data-role='address'] {
    opacity: 1;
    transform: translate(-50%, -100%);
  }
`;

const CopyHint = styled.span`
  font-size: 0.65rem;
  margin-left: 0.5rem;
  color: hsl(var(--primary-200));
`;

const AddressTooltip = styled.span`
  position: absolute;
  left: 50%;
  bottom: calc(100% + 10px);
  transform: translate(-50%, -90%);
  background-color: hsl(var(--primary-50));
  color: hsl(var(--primary-900));
  border: 1px solid hsl(var(--primary-800));
  border-radius: 6px;
  padding: 0.35rem 0.75rem;
  font-size: 0.7rem;
  font-family: 'Courier New', Courier, monospace;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export default Etc;
