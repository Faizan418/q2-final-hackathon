import styles from "./Section7.module.css";
import Image from "next/image";

const Section7 = () => {
  return (
    <div className={styles.main_containar}>
      <div className={styles.containar}>
        <h2 className="text-2xl font-bold text-center mb-6 text-sky-950">
          Top Catagories
        </h2>
        <div className={styles.box}>
          <div className={styles.card}>
            <div className={styles.img_div}>
              <Image
                className="mb-4"
                src={"/images/file-seven/image1.png"}
                alt="item"
                height={100}
                width={120}
              />
            </div>

            <h3 className="font-semibold text-sm mt-2">Mini LCW Chair</h3>
            <p className="text-xs">$56.00</p>
          </div>
          <div className={styles.card}>
            <div className={styles.img_div}>
              <Image
                className="mb-4"
                src={"/images/file-seven/image2.png"}
                alt="item"
                height={100}
                width={120}
              />
            </div>

            <h3 className="font-semibold text-sm mt-2">Mini LCW Chair</h3>
            <p className="text-xs">$56.00</p>
          </div>
          <div className={styles.card}>
            <div className={styles.img_div}>
              <Image
                className="mb-4"
                src={"/images/file-seven/image3.png"}
                alt="item"
                height={100}
                width={120}
              />
            </div>

            <h3 className="font-semibold text-sm mt-2">Mini LCW Chair</h3>
            <p className="text-xs">$56.00</p>
          </div>

          <div className={styles.card}>
            <div className={styles.img_div}>
              <Image
                className="mb-4"
                src={"/images/file-seven/image4.png"}
                alt="item"
                height={100}
                width={120}
              />
            </div>

            <h3 className="font-semibold text-sm mt-2">Mini LCW Chair</h3>
            <p className="text-xs">$56.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
