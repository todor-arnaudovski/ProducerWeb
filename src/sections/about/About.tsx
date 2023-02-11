import Logo from "../../assets/logos/trillo-logo-1.png";
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
                        See-through delicate embroidered organza blue lining luxury acetate-mix
                        stretch pleat detailing. Leather detail shoulder contraFstic colour contour
                        stunning silhouette working peplum. Statement buttons cover-up tweaks patch
                        pockets perennial.
                    </p>
                    <img
                        className="self-center invert"
                        style={{ maxWidth: "100px" }}
                        src={Logo}
                        alt="Trillo Logo"
                    />
                </div>
            </div>
        </section>
    );
};
