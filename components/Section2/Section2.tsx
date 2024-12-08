import styles from "./Section2.module.css";
import Image from "next/image";

const Section2 = () => {
  return (
    <div className={styles._main_containar}>
      <div className={styles._containar}>
        <div className={styles._main_heading_div}>
          <h1 className={styles._main_heading1}>Featured Products</h1>
        </div>

        <div className={styles._grid}>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/file-two/ComfortHandlyCraft.png"
                alt="Comfort Handly Craft"
                width={180}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Comfort Handly Craft</h1>
              <p className={styles._card_dec_price}>
                $42.00 <span className={styles.line_throd}>$160</span>
              </p>
            </div>
          </div>

          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/file-two/ComfortHandlyCraft2.png"
                alt="ComfortHandlyCraft"
                width={180}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Comfort Handly Craft</h1>
              <p className={styles._card_dec_price}>
                $42.00 <span className={styles.line_throd}>$160</span>
              </p>
            </div>
          </div>

          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/file-two/ComfortHandlyCraft3.png"
                alt="ComfortHandlyCraft"
                width={180}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Comfort Handly Craft</h1>
              <p className={styles._card_dec_price}>
                $42.00 <span className={styles.line_throd}>$160</span>
              </p>
            </div>
          </div>

          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/file-two/ComfortHandlyCraft4.png"
                alt="ComfortHandlyCraft"
                width={180}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Comfort Handly Craft</h1>
              <p className={styles._card_dec_price}>
                $42.00 <span className={styles.line_throd}>$160</span>
              </p>
            </div>
          </div>

          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/file-two/ComfortHandlyCraft5.png"
                alt="ComfortHandlyCraft"
                width={220}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Comfort Handly Craft</h1>
              <p className={styles._card_dec_price}>
                $42.00 <span className={styles.line_throd}>$160</span>
              </p>
            </div>
          </div>

          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/file-two/ComfortHandlyCraft6.png"
                alt="ComfortHandlyCraft"
                width={230}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Comfort Handly Craft</h1>
              <p className={styles._card_dec_price}>
                $42.00 <span className={styles.line_throd}>$160</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
