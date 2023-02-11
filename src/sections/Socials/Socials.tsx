export const Socials = () => {
    return (
        <section className="section py-section-2 pb-0 text-break">
            <div className="container">
                <div className="section-heading-1 section-heading-special-1 text-center">
                    <span className="d-block">Get Connected</span>
                    <h2 className="h2">SOCIALS</h2>
                </div>
            </div>
            <div
                className="text-light bg-dark-overlay bg-fixed"
                style={{ backgroundImage: `url(${"lol"})` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 px-4 px-md-5 pb-md-5 pt-custom-1 border-left-gray sm-hover">
                            <div className="sm-wrapper">
                                <h3 className="h4 sm-name">YouTube</h3>
                                <div className="sm-opacity">
                                    <p className="sm-description">
                                        Subscribe to my YouTube channel.
                                    </p>
                                    <a className="btn btn-outline-primary sm-button" href="#">
                                        Subscribe
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 px-4 px-md-5 pb-md-5 pt-custom-1 border-left-gray sm-hover">
                            <div className="sm-wrapper">
                                <h3 className="h4 sm-name">Soundcloud</h3>
                                <div className="sm-opacity">
                                    <p className="sm-description">Follow me on Soundcloud.</p>
                                    <a className="btn btn-outline-primary sm-button" href="#">
                                        Follow
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 px-4 px-md-5 pb-5 pt-custom-1 border-left-gray sm-hover">
                            <div className="sm-wrapper">
                                <h3 className="h4 sm-name">Instagram</h3>
                                <div className="sm-opacity">
                                    <p className="sm-description">Follow me on instagram.</p>
                                    <a className="btn btn-outline-primary sm-button" href="#">
                                        Follow
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
