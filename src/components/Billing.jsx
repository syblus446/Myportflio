import {  bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       Technologies <br className="sm:block hidden" /> That i use
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        1: Html5<br></br>
        2: Css & Css3 <br></br>
        3: Javascript<br></br>
        4: Reactjs<br></br>
        5: Nodejs<br></br>
        6: React Native<br></br>
      </p>
    </div>
  </section>
);

export default Billing;
