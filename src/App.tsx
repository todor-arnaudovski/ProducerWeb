import { useEffect, useRef, useState } from "react";
import { ScrollToTop } from "./components/scrollToTop/ScrollToTop";
import { AudioProvider } from "./contexts/audioContext";
import { MiniPlayer } from "./features/miniPlayer/MiniPlayer";
import { Preloader } from "./features/preloader/Preloader";
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

    useEffect(() => {
        if (isHeaderLoaded && headerRef?.current) {
            setHeaderHeight(headerRef.current.clientHeight + 5);
        }
    }, [isHeaderLoaded]);

    return (
        <div className="App">
            <Preloader />
            <AudioProvider>
                <Header ref={headerRef} setIsLoadedHandler={setIsHeaderLoaded} />
                <Banner spacingTop={headerHeight} />
                <Player />
                <NewRelease />
                <MyMusic />
                <About />
                <Video />
                <Socials />
                <Footer />
                <ScrollToTop />
                <MiniPlayer />
            </AudioProvider>
        </div>
    );
}

export default App;
