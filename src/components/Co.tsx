import styled from 'styled-components';
import { ExternalLinkIcon } from './Icons';

const Co = ({
  url,
  name,
  iconReference,
  tagline,
  role,
  what,
  acquired,
  pretext,
}: {
  url: string;
  name: string;
  iconReference: string;
  tagline: string;
  role: string;
  what: string;
  acquired?: boolean;
  pretext?: string;
}) => {
  return (
    <A href={url} target="_blank" rel="noopener">
      <Container>
        <Header>
          <img alt={`${name} Logo`} draggable={false} src={iconReference} />
          <div>
            {acquired ? <sub>acquired</sub> : pretext ? <sub>{pretext}</sub> : null}
            <h3>
              {name} <ExternalLinkIcon />
            </h3>
            <span>{tagline}</span>
          </div>
        </Header>
        <Content>
          <h3>Role</h3>
          <p>{role}</p>
          <h3>What I {pretext ? 'Did' : 'Do'}</h3>
          <p>{what}</p>
        </Content>
      </Container>
    </A>
  );
};

const A = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none !important;
  }
`;

const Container = styled.div`
  border: 1px solid hsl(var(--primary-800));
  border-radius: 10px;
  cursor: pointer;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid hsl(var(--primary-800));
  padding: 1rem;
  /* box-sizing: border-box; */

  img {
    width: 70px;
    height: 70px;
    border-radius: 25%;
    margin-right: 1rem;
  }

  div {
    sub {
      text-transform: uppercase;
      color: hsl(var(--solar-high));
      letter-spacing: 2px;
    }

    h3 {
      margin: 0;
    }

    svg {
      width: 15px;
      height: 15px;
      color: hsl(var(--primary-200));
    }

    span {
      color: hsl(var(--primary-200));
    }
  }
`;

const Content = styled.div`
  padding: 1rem;
  box-sizing: border-box;
`;

export default Co;
