import Background from "../../assets/images/header-background-3.jpg";

export const Banner = (props: { spacingTop: number }) => {
    const { spacingTop } = props;

    return (
        <section className="py-36" style={{ marginTop: `${spacingTop}px` }}>
            <div className="container">
                <div className="flex flex-col justify-center items-center">
                    <div className="d-flex flex-column">
                        <h1
                            className="font-bold lg:text-9xl animated-background"
                            style={{ backgroundImage: `url(${Background})` }}
                        >
                            K|M|N|E
                        </h1>
                        <span>music by</span>{" "}
                        <h2 className="font-bold lg:text-2xl dash-left">Koldmane</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};
