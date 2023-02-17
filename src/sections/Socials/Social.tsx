import { motion } from "framer-motion";
import { ButtonLink } from "../../components/buttonLink/ButtonLink";
import { SocialsPlatform } from "../../data/siteData";
import styles from "./Socials.module.scss";

interface SocialPropss {
    index: number;
    platform: SocialsPlatform;
}

export const Social = (props: SocialPropss) => {
    const { index, platform } = props;

    return (
        <div className={`${styles["social"]} px-7 pb-7 pt-16 md:px-10 md:pb-10 md:pt-96`}>
            <div className="relative">
                <motion.div
                    key={platform.name}
                    className="self-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index / 3 }}
                    viewport={{ once: true }}
                >
                    <h3 className={`${styles["medium-name"]} font-bold lg:text-3xl mb-3"`}>
                        {platform.name}
                    </h3>
                    <div className={styles["hidden-items"]}>
                        <p className="mb-3 lg:text-sm xl:text-base">{platform.header}</p>
                        <ButtonLink
                            href={platform.url}
                            target={platform.url !== "#" ? "_blank" : "_top"}
                        >
                            {platform.cta}
                        </ButtonLink>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
