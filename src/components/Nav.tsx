import { motion, PanInfo } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  GitHubLogo,
  KeyIcon,
  MenuIcon,
  CameraIcon,
  ExternalLinkIcon,
  ChatIcon,
  CompassIcon,
  NavigationIcon,
  TwitterLogo,
  XIcon,
  HeartIcon,
} from './Icons';
import Doing from './Doing';
import useSound from 'use-sound';
import { useAtom } from 'jotai';
import { doingAtom } from '../state/lanyard';
import ContentLoader from 'react-content-loader';

const PROFILE_PHOTO_URL = 'https://github.com/falcucci.png?size=240';

type NavProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

const pathnameOffsets: { [key: string]: number } = {
  '/': 0,
  '/where': 39,
  '/how': 78,
  '/etc': 117,
};

const Nav = ({ theme, onToggleTheme }: NavProps) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const [playSwitchPageSound] = useSound('/p-static/sounds/switch-page.mp3');

  const [dragYOffset, setDragYOffset] = useState(0);
  const [openOnMobile, setOpenOnMobile] = useState(false);
  const [presenceActive, setPresenceActive] = useState(false);

  const [doing] = useAtom(doingAtom);

  const dragConstraintsRef = useRef(null);

  useEffect(() => {
    if (openOnMobile) setOpenOnMobile(false);
    playSwitchPageSound();
  }, [pathname]);

  const pageIndicatorOffset = useMemo(
    () => (pathname ? pathnameOffsets[pathname] ?? -180 : 0),
    [pathname]
  );

  const pageIndicatorOffsetWithDecoration = useMemo(
    () => 71 + 33 + pageIndicatorOffset - dragYOffset,
    [pageIndicatorOffset, dragYOffset]
  );

  const onPageIndicatorDragEnd = useCallback(
    (_event: PointerEvent, info: PanInfo) => {
      const goal = pageIndicatorOffset + info.offset.y;

      const closest = Object.entries(pathnameOffsets).reduce(
        ([prevPath, prevOffset], [curPath, curOffset]) => {
          return Math.abs(curOffset - goal) < Math.abs(prevOffset - goal)
            ? [curPath, curOffset]
            : [prevPath, prevOffset];
        }
      );

      if (closest[0] === pathname) return;

      setDragYOffset(dragYOffset + info.offset.y + info.velocity.y);
      history.push(closest[0]);
    },
    [history, pageIndicatorOffset, dragYOffset, pathname]
  );

  const toggleMobileMenu = useCallback(() => setOpenOnMobile(!openOnMobile), [openOnMobile]);

  return (
    <>
      <MobileHeader>
        <Title>Alexsander Falcucci</Title>
        {openOnMobile ? (
          <XIcon onClick={toggleMobileMenu} />
        ) : (
          <MenuIcon onClick={toggleMobileMenu} />
        )}
      </MobileHeader>
      <Container openOnMobile={openOnMobile}>
        {!openOnMobile ? (
          <PageIndicator
            whileHover={{ width: 3 }}
            drag="y"
            onDragEnd={onPageIndicatorDragEnd}
            dragConstraints={dragConstraintsRef}
            animate={{ top: pageIndicatorOffsetWithDecoration }}
          />
        ) : null}
        <Items>
          {!openOnMobile && (
            <>
              <Row>
                <Title>Alexsander Falcucci</Title>
              </Row>
              <ProfileCard>
                <ProfilePhoto src={PROFILE_PHOTO_URL} alt="Alexsander Falcucci" />
                <ProfileCaption>Protocol Software Engineer</ProfileCaption>
              </ProfileCard>
            </>
          )}
          <Row>
            <Location
              target="_blank"
              href={
                doing
                  ? `https://www.google.com/maps/search/BAM -  Biblioteca degli Alberi Milano`
                  : undefined
              }
              rel="noreferrer"
            >
              <HeartIcon />
              {'Milan, Italy'}
            </Location>
          </Row>
          {!openOnMobile && (
            <ThemeControls>
              <ThemeToggle type="button" onClick={onToggleTheme} aria-pressed={theme === 'dark'}>
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </ThemeToggle>
            </ThemeControls>
          )}
          <div ref={dragConstraintsRef}>
            <Page active={pathname === '/' ? 1 : 0} to="/">
              what I do
            </Page>
            <Page active={pathname === '/where' ? 1 : 0} to="/where">
              where I've done it
            </Page>
            <Page active={pathname === '/how' ? 1 : 0} to="/how">
              how I do it
            </Page>
            <Page active={pathname === '/etc' ? 1 : 0} to="/etc">
              more + contact
            </Page>
          </div>

          <Icons>
            <a href="https://twitter.com/falcuccis">
              <TwitterLogo />
            </a>
            <a href="https://github.com/falcucci">
              <GitHubLogo />
            </a>
            <a href="https://cal.com/falcucci">
              <CameraIcon />
            </a>
          </Icons>
          <Doing
            style={{ display: presenceActive ? 'block' : 'none' }}
            setActive={setPresenceActive}
          />
        </Items>
      </Container>
    </>
  );
};

const Container = styled.aside<{ openOnMobile: boolean }>`
  display: inline-block;
  box-sizing: border-box;
  flex-direction: column;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 15rem;
  border-right: 1px solid hsl(var(--primary-800));
  background-color: hsl(var(--primary-50));
  color: hsl(var(--primary-900));
  height: 100vh;

  @media (max-width: 850px) {
    display: ${({ openOnMobile }) => (openOnMobile ? 'block' : 'none')};
    background-color: hsl(var(--primary-50));
    z-index: 1;
    top: 65px;
    width: 100%;
    height: calc(100% - 65px);
  }
`;

const MobileHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
  display: flex;
  padding: 2rem;
  box-sizing: border-box;
  width: 100%;
  height: 65px;
  background-color: hsl(var(--primary-50));
  border-bottom: 1px solid hsl(var(--primary-800));
  flex-shrink: 0;
  z-index: 1;

  svg {
    margin-left: auto;
    cursor: pointer;
    color: hsl(var(--primary-900));
  }

  @media (min-width: 850px) {
    display: none;
  }
`;

const PageIndicator = styled(motion.div)`
  width: 1px;
  height: 39px;
  background-color: hsl(var(--primary-900));
  position: absolute;
  right: -1px;
  cursor: pointer;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 600;
  padding: 10px 0px;
  width: 100%;

  @media (min-width: 850px) {
    text-align: center;
  }
`;

const Location = styled.a`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-weight: 500;
  height: auto;
  font-size: 14px;
  margin-bottom: 15px;
  user-select: none;
  text-align: center;
  color: hsl(var(--primary-900));
  border-bottom: none;

  @media (min-width: 850px) {
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 850px) {
    text-align: left;
  }

  &:hover {
    color: hsl(var(--primary-800));
  }

  svg:first-child {
    height: 20px;
    width: 20px;
    margin-right: 8px;
    margin-bottom: 0;
    color: hsl(var(--solar-high));
  }
`;

const Page = styled(Link)<{ active: number }>`
  color: ${({ active }) =>
    active ? 'hsl(var(--primary-900))' : 'hsl(var(--primary-200))'};
  padding: 10px 0px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  text-align: left;
  border-bottom: none;

  &:hover {
    color: hsl(var(--primary-900));
  }

  @media (min-width: 850px) {
    justify-content: center;
    text-align: center;
  }
`;

const Icons = styled.div`
  margin-top: auto;
  color: hsl(var(--primary-200));
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem 0;

  a {
    border-bottom: none;
  }

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: inherit;

    &:hover {
      color: hsl(var(--primary-900));
    }
  }
`;

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1rem 0;
`;

const ProfilePhoto = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 3px solid hsl(var(--primary-50));
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  object-fit: cover;
  background-color: hsl(var(--primary-50));
`;

const ProfileCaption = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.8rem;
  color: hsl(var(--primary-900));
`;

const ThemeControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 0 1rem;
  flex-wrap: wrap;
`;

const ThemeToggle = styled.button`
  padding: 0.35rem 1rem;
  border: 1px solid hsl(var(--primary-800));
  border-radius: 999px;
  font-family: 'Courier New', Courier, monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.65rem;
  background-color: transparent;
  color: hsl(var(--primary-900));
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: hsl(var(--accent-100));
  }
`;

export default Nav;
