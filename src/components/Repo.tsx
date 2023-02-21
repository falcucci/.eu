import styled from 'styled-components';

const Repo = ({
  url,
  name,
  primaryLanguage,
  description,
}: {
  url: string;
  name: string;
  primaryLanguage: string;
  description: string;
}) => {
  return (
    <A href={url} target="_blank" rel="noopener">
      <Container>
        <Column forceWidth={150}>
          <h5>name</h5>
          <p>{name}</p>
        </Column>
        <Column forceWidth={150}>
          <h5>language</h5>
          <p>
            {primaryLanguage}{' '}
            <LanguageColorBlip
              color={
                primaryLanguage === 'Elixir'
                  ? '#9c1fa5'
                  : primaryLanguage === 'Shell'
                  ? '#89e051'
                  : primaryLanguage === 'Python'
                  ? '#3572a5'
                  : primaryLanguage === 'Golang'
                  ? '#00add8'
                  : primaryLanguage === 'Javascript'
                  ? '#f1e05a'
                  : primaryLanguage === 'TypeScript'
                  ? '#007acc'
                  : primaryLanguage === 'Rust'
                  ? '#dea584'
                  : 'hsl(var(--primary-900))'
 
              }
            />
          </p>
        </Column>
        <Column noBorder>
          <h5>description</h5>
          <p>{description}</p>
        </Column>
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
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  border: 1px solid hsl(var(--primary-800));
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;

  @media (max-width: 850px) {
    flex-direction: column;
    height: auto;
  }

  &:hover {
    background-color: hsl(var(--primary-800));
  }
`;

const Column = styled.div<{ forceWidth?: number; noBorder?: boolean }>`
  display: block;
  height: 100%;
  width: ${({ forceWidth }) => (forceWidth ? forceWidth + 'px' : 'fit-content')};
  min-width: ${({ forceWidth }) => (forceWidth ? forceWidth + 'px' : undefined)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid
    ${({ noBorder }) => (noBorder ? 'transparent' : 'hsl(var(--primary-800))')};
  padding: 1rem;
  box-sizing: border-box;
  flex-shrink: ${({ noBorder }) => (noBorder ? undefined : 0)};

  @media (max-width: 850px) {
    height: 50px;
    width: 100%;
    border-bottom: 1px solid
      ${({ noBorder }) => (noBorder ? 'transparent' : 'hsl(var(--primary-800))')};
    padding: 1rem;
    flex-shrink: 0;
    box-sizing: content-box;
  }

  h5 {
    font-family: 'Courier New';
    margin: 0;
    color: #fff;
  }

  p {
    margin: 0;
    white-space: normal;
  }
`;

const LanguageColorBlip = styled.span<{ color: string }>`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-left: 5px;
`;

export default Repo;
