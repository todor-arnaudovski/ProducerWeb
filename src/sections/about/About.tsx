import Logo from "../../assets/logos/logo.png";
import Background from "../../assets/images/section-2.jpg";

export const About = () => {
    return (
        <section className="py-20 text-white" style={{ backgroundImage: `url(${Background})` }}>
            <div className="container">
                <div className="line-y-white text-center">
                    <span className="block mb-2">The Beginning</span>
                    <h2 className="font-bold lg:text-7xl">ABOUT ME</h2>
                </div>
                <div className="lg:px-36 flex flex-col py-4">
                    <h3 className="font-bold lg:text-3xl mb-3">
                        He heard something that he knew to be music
                    </h3>
                    <p className="mb-10">
                        Discover the magic behind the music. With a unique sound and innovative
                        production style, he brings a fresh and exciting energy to every track.
                        Experience the magic for yourself.
                    </p>
                    <img
                        className="self-center"
                        style={{ maxWidth: "100px" }}
                        src={Logo}
                        alt="Trillo Logo"
                    />
                </div>
            </div>
        </section>
    );
};
