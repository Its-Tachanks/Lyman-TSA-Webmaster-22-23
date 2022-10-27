import FlightStep from "../components/FlightStep"
import Image from "next/image"
import styles from "../styles/pages/Flight.module.css"

export default function flight() {
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.title}>Flight Plan</h1>
            <div className={styles.banner}>
                <Image src={`/img/stars.gif`} alt="Image" layout="fill" />
            </div>
            <div className={styles.stepsContainer}>
                <FlightStep title={`Step 1`} description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae error tempore cum voluptatibus maxime, quis alias, inventore, neque culpa minima dolorem. Asperiores, odio. Odio, repellendus voluptatibus, fugit reprehenderit ducimus debitis pariatur nulla vitae numquam itaque illo magnam harum obcaecati deleniti nemo corrupti consectetur sequi doloremque ipsa tenetur unde consequuntur.`} image={`/img/a.gif`} reversed={false}/>

                <FlightStep title={`Step 2`} description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae error tempore cum voluptatibus maxime, quis alias, inventore, neque culpa minima dolorem. Asperiores, odio. Odio, repellendus voluptatibus, fugit reprehenderit ducimus debitis pariatur nulla vitae numquam itaque illo magnam harum obcaecati deleniti nemo corrupti consectetur sequi doloremque ipsa tenetur unde consequuntur.`} image={`/img/a.gif`} reversed={true}/>

                <FlightStep title={`Step 3`} description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae error tempore cum voluptatibus maxime, quis alias, inventore, neque culpa minima dolorem. Asperiores, odio. Odio, repellendus voluptatibus, fugit reprehenderit ducimus debitis pariatur nulla vitae numquam itaque illo magnam harum obcaecati deleniti nemo corrupti consectetur sequi doloremque ipsa tenetur unde consequuntur.`} image={`/img/a.gif`} reversed={false}/>

                <FlightStep title={`Step 4`} description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae error tempore cum voluptatibus maxime, quis alias, inventore, neque culpa minima dolorem. RHODE ISLAND SHOULD BURN Asperiores, odio. Odio, repellendus voluptatibus, fugit reprehenderit ducimus debitis pariatur nulla vitae numquam itaque illo magnam harum obcaecati deleniti nemo corrupti consectetur sequi doloremque ipsa tenetur unde consequuntur.`} image={`/img/a.gif`} reversed={true}/>

                <FlightStep title={`Step 5`} description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae error tempore cum voluptatibus maxime, quis alias, inventore, neque culpa minima dolorem. Asperiores, odio. Odio, repellendus voluptatibus, fugit reprehenderit ducimus debitis pariatur nulla vitae numquam itaque illo magnam harum obcaecati deleniti nemo corrupti consectetur sequi doloremque ipsa tenetur unde consequuntur.`} image={`/img/a.gif`} reversed={false}/>
            </div>            
        </div>
    )
}
