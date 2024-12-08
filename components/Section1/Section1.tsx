import styles from "./Section1.module.css";
import Image from "next/image";

const Section1 = () => {
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
                src="/images/file-one/CantileverChair.png"
                alt="CantileverChair"
                width={180}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>CantileverChair</h1>
              <p className={styles._card_dec_city}>Code - Y523201</p>
              <p className={styles._card_dec_price}>$42.00</p>
            </div>
          </div>

          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/file-one/CantileverChair2.png"
                alt="CantileverChair"
                width={160}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>CantileverChair</h1>
              <p className={styles._card_dec_city}>Code - Y523201</p>
              <p className={styles._card_dec_price}>$42.00</p>
            </div>
          </div>

          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/file-one/CantileverChair3.png"
                alt="CantileverChair"
                width={180}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>CantileverChair</h1>
              <p className={styles._card_dec_city}>Code - Y523201</p>
              <p className={styles._card_dec_price}>$42.00</p>
            </div>
          </div>

          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/file-one/CantileverChair4.png"
                alt="CantileverChair"
                width={180}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>CantileverChair</h1>
              <p className={styles._card_dec_city}>Code - Y523201</p>
              <p className={styles._card_dec_price}>$42.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
