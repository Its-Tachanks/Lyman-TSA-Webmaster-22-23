import styles from "../styles/pages/Flight.module.css"
import Image from "next/image"

export default function FlightStep({title, description, image, reversed}) {
    return (
        <div className={`${styles.stepContainer} ${reversed ? `${styles.reverse} swipeFromRight` : "swipeFromLeft"} fadeIn`}>
            <div className={styles.stepText}>
                <h3>{title}</h3>
                <p>
                    {description}
                </p>
            </div>
            <div className={styles.stepImg}>
                <Image src={image} alt="Image" layout="fill" />
            </div>
        </div>
    )
}
