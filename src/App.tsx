import { AudioProvider } from "./contexts/audioContext";
import { Header } from "./layout/header";
import { About } from "./sections/about/About";
import { Banner } from "./sections/banner/Banner";
import { MyMusic } from "./sections/myMusic/MyMusic";
import { NewRelease } from "./sections/newRelease/NewRelease";
import { Player } from "./sections/player/Player";
import { Socials } from "./sections/Socials/Socials";
import { Video } from "./sections/video/Video";

function App() {
    return (
        <div className="App">
            <AudioProvider>
                <Header />
                <Banner />
                <Player />
                <NewRelease />
                <MyMusic />
                <About />
                <Video />
                <Socials />
            </AudioProvider>
        </div>
    );
}

export default App;
