import { AnimatePresence, motion } from 'framer-motion';
import { KeyboardEvent, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SuccessiveType from './components/SuccessiveType';
import Nav from './components/Nav';
import What from './pages/What';
import Where from './pages/Where';
import How from './pages/How';
import Etc from './pages/Etc';
import Presence from './pages/Presence';
import Sakurajima from './pages/Sakurajima';
import { ChevronsRight } from './components/Icons';

const shouldPlayIntro = false;
const THEME_COLORS: Record<'light' | 'dark', string> = {
  light: '#fff5d1',
  dark: '#12131f',
};

const getPreferredTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function App() {
  const [introEnded, setIntroEnded] = useState(!shouldPlayIntro);
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(() => getPreferredTheme());
  const [themePreference, setThemePreference] = useState<'system' | 'light' | 'dark'>('system');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => systemTheme);

  const onKeyDown = (e: KeyboardEvent<HTMLDocument> & any) => {
    if ((e.keyCode === 9 || e.which === 9) && !introEnded) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-theme', theme);
    let themeMeta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
    if (!themeMeta) {
      themeMeta = document.createElement('meta');
      themeMeta.setAttribute('name', 'theme-color');
      document.head.appendChild(themeMeta);
    }
    themeMeta.setAttribute('content', THEME_COLORS[theme]);
  }, [theme]);

  useEffect(() => {
    setTheme(themePreference === 'system' ? systemTheme : themePreference);
  }, [themePreference, systemTheme]);

  useEffect(() => {
    if (!shouldPlayIntro) return;

    const script = document.createElement('script');

    script.src = '/p-static/js/stars.js';
    script.async = true;

    document.body.appendChild(script);

    document.addEventListener('keydown', onKeyDown);
  }, []);

  const onIntroEnd = useCallback(() => {
    localStorage.setItem('v1:intro-completed', 'true');
    setIntroEnded(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
      setThemePreference('system');
    };
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const toggleThemePreference = useCallback(() => {
    setThemePreference((prev) => {
      if (prev === 'system') {
        return systemTheme === 'dark' ? 'light' : 'dark';
      }
      return prev === 'dark' ? 'light' : 'dark';
    });
  }, [systemTheme]);

  return (
    <Wrapper>
      <Helmet titleTemplate={'%s • Falcucci'}>
        <title>Alexsander Falcucci</title>
      </Helmet>
      {shouldPlayIntro ? (
        <SuccessiveTypeContainer
          transition={{ duration: 0 }}
          animate={{ y: introEnded ? -window.innerHeight : 0 }}
        >
          <ProgressContainer onClick={onIntroEnd}>
            <h4>
              Skip intro <ChevronsRight />
            </h4>
          </ProgressContainer>
          <SuccessiveType
            onEnd={onIntroEnd}
            words={
              "Software was meant to be light and feel effortless to use. As we're all developing new products so rapidly, bloat in our code is catching up with us. I design simple but effective, highly-scalable and realtime products for the future."
            }
            userSkipped={introEnded}
          />
        </SuccessiveTypeContainer>
      ) : null}

      <motion.canvas
        transition={{ duration: 0.85 }}
        animate={{ opacity: introEnded ? 0 : 0.25 }}
        id="stars"
      />

      <MainContent
        transition={{ duration: 0.85 }}
        initial={false}
        animate={{ y: !introEnded ? window.innerHeight : 0 }}
      >
        <Router>
          <Nav theme={theme} onToggleTheme={toggleThemePreference} />

          <ContentWrapper>
            <AnimatePresence>
              <Switch>
                <Route exact path="/" component={What} />
                <Route exact path="/where" component={Where} />
                <Route exact path="/how" component={How} />
                <Route exact path="/etc" component={Etc} />
                <Route exact path="/presence" component={Presence} />
                <Route exact path="/sakuraji.ma" component={Sakurajima} />
              </Switch>
            </AnimatePresence>
          </ContentWrapper>
        </Router>
      </MainContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 0;
  }
`;

const SuccessiveTypeContainer = styled(motion.div)`
  width: 80vw;
  height: 350px;
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

const ProgressContainer = styled.div`
  vertical-align: middle;
  cursor: pointer;
  transition: color 0.2s ease;

  svg {
    vertical-align: middle;
    height: 19px;
  }

  &:hover {
    color: hsl(var(--solar-high));
  }
`;

const MainContent = styled(motion.div)`
  height: 100vh;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  overflow-y: auto;

  @media (max-width: 850px) {
    flex-direction: column;
    /* padding-top: 65px; */
  }
`;

const ContentWrapper = styled.div`
  margin-left: 15rem;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;

  a {
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 850px) {
    margin-left: 0px;
    padding-top: 65px;
  }
`;

export default App;
