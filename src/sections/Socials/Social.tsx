import { ButtonLink } from "../../components/buttonLink/ButtonLink";
import styles from "./Socials.module.scss";

export const Social = (props: any) => {
    const { platform } = props;

    return (
        <div className={`${styles["social"]} px-7 pb-7 md:px-10 md:pb-10 lg:pt-96`}>
            <div className="relative">
                <h3 className={`${styles["medium-name"]} font-bold lg:text-3xl mb-3"`}>
                    {platform.name}
                </h3>
                <div className={styles["hidden-items"]}>
                    <p className="mb-3">{platform.header}</p>
                    <ButtonLink
                        href={platform.url}
                        target={platform.url !== "#" ? "_blank" : "_top"}
                    >
                        {platform.cta}
                    </ButtonLink>
                </div>
            </div>
        </div>
    );
};
