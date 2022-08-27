import { card } from "../assets";
import styles, { layout } from "../style";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        My Projects<br className="sm:block hidden" /> of popular websites
        
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        1: Amazon<br></br>
        2: Facebook <br></br>
        3: Spotify<br></br>
        4: Twitter<br></br>
        5: Netflix<br></br>
        6: Survival Game<br></br>
      </p>

    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
