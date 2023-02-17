import { useEffect, useRef, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ScrollToSection } from "./components/scrollToSection/ScrollToSection";
import { ScrollToTop } from "./components/scrollToTop/ScrollToTop";
import { AudioProvider } from "./contexts/audioContext";
import { MiniPlayer } from "./features/miniPlayer/MiniPlayer";
import { Preloader } from "./features/preloader/Preloader";
import { useIsMobile } from "./hooks/useIsMobile";
import { Footer } from "./layout/footer";
import { Header } from "./layout/header";
import { About } from "./sections/about/About";
import { Banner } from "./sections/banner/Banner";
import { MyMusic } from "./sections/myMusic/MyMusic";
import { NewRelease } from "./sections/newRelease/NewRelease";
import { Player } from "./sections/player/Player";
import { Socials } from "./sections/Socials/Socials";
import { Video } from "./sections/video/Video";

function App() {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();
    const playerSectionRef = useRef<HTMLDivElement>(null);
    const newReleaseSectionRef = useRef<HTMLDivElement>(null);
    const myMusicSectionRef = useRef<HTMLDivElement>(null);
    const aboutMeSectionRef = useRef<HTMLDivElement>(null);
    const socialsSectionRef = useRef<HTMLDivElement>(null);
    const sectionRefs = [
        playerSectionRef,
        newReleaseSectionRef,
        myMusicSectionRef,
        aboutMeSectionRef,
        socialsSectionRef,
    ];

    useEffect(() => {
        if (isHeaderLoaded && headerRef?.current) {
            setHeaderHeight(headerRef.current.clientHeight);
        }
    }, [isHeaderLoaded, isMobile]);

    return (
        <ParallaxProvider>
            <div className="App overflow-x-hidden">
                <Preloader />
                <ScrollToSection sectionRef={playerSectionRef} />
                <ScrollToTop />
                <AudioProvider>
                    <Header
                        ref={headerRef}
                        setIsLoadedHandler={setIsHeaderLoaded}
                        headerHeight={headerHeight}
                        sectionRefs={sectionRefs}
                    />
                    <Banner headerHeight={headerHeight} />
                    <Player ref={playerSectionRef} />
                    <NewRelease ref={newReleaseSectionRef} />
                    <MyMusic ref={myMusicSectionRef} />
                    <About ref={aboutMeSectionRef} />
                    <Video />
                    <Socials ref={socialsSectionRef} />
                    <Footer sectionRefs={sectionRefs} />
                    <MiniPlayer />
                </AudioProvider>
            </div>
        </ParallaxProvider>
    );
}

export default App;
