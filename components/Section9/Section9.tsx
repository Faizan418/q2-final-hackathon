import styles from './Section9.module.css'
import Image from 'next/image'
const Section9 = () => {
  return (
    <div className={styles.main_containar}>
      <div className={styles.containar}>
        <div className={styles.title}>
          <h2 className="text-4xl font-semibold flex justify-center p-8 mb-9 text-indigo-700">Leatest Blog</h2>
        </div>
        <div className={styles.box}>

          <div className={styles.card}>
            <Image
              className={styles.main_img}
              src={"/images/file-nine/img-1.png"}
              alt="item"
              height={100}
              width={350}
            />
            {/* <h3 className="font-semibold text-lg">24/7 Support</h3>
            <p className="text-xs flex text-center">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Rerum, labore sed!</p> */}
          </div>
          <div className={styles.card}>
            <Image
              className={styles.main_img}
              src={"/images/file-nine/img-2.png"}
              alt="item"
              height={100}
              width={350}
            />
            {/* <h3 className="font-semibold text-lg">24/7 Support</h3>
            <p className="text-xs flex text-center">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Rerum, labore sed!</p> */}
          </div>
          <div className={styles.card}>
            <Image
              className={styles.main_img}
              src={"/images/file-nine/img-3.png"}
              alt="item"
              height={100}
              width={350}
            />
            {/* <h3 className="font-semibold text-lg">24/7 Support</h3>
            <p className="text-xs flex text-center">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Rerum, labore sed!</p> */}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Section9
