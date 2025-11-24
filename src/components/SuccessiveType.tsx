import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ISuccessiveTypeProps {
  words: string;
  userSkipped?: boolean;
  onEnd?: () => void;
}

const SuccessiveType = ({ words, userSkipped, onEnd }: ISuccessiveTypeProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (userSkipped) return;

    setVisible(true);

    const fadeOutTimer = setTimeout(() => setVisible(false), 12200);
    const endTimer = setTimeout(() => {
      onEnd?.();
    }, 13000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(endTimer);
    };
  }, [userSkipped, onEnd]);

  return (
    <Container>
      <IntroText visible={visible}>{words}</IntroText>
    </Container>
  );
};

const Container = styled.div`
  text-align: left;
  color: hsl(var(--primary-900));
  font-size: 20pt;
  max-width: 100ch;
  line-height: 1.4;
`;

const IntroText = styled.p<{ visible: boolean }>`
  margin: 0;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 1s ease;
`;

export default SuccessiveType;
