import styles from './Section4.module.css'
import Image from 'next/image'

const Section4 = () => {
  return (
    <div className={styles.main_containar}>
    <div className={styles.containar}>
    <div className={styles.div_left}><Image src={'/images/file-sex/right-img.png'} alt='img' height={100} width={600}/></div>

      <div className={styles.div_right}>
        <div className={styles.details_containar}>
          <h1 className={styles.tital_heading}>Unique Features Of leatest &  <br /> Trending Poducts</h1>
          {/* <p className={styles.tital_pera}>Eams Sofa Compact</p> */}

          
          <div className={styles._div2}>
            <div className={styles.info_div}>
              <span>🔴 All frames constructed with hardwood solids and laminates.</span>                        
              <span>🔵 Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails.</span>                        
              <span>🟢 Arms, backs and seats are structurally rainforced</span>
            </div>
            {/* <div  className={styles.info_div}>
              <span>✔ Clear lines and geomatric figures.</span>
              <span>✔ Material expose likem metals.</span> 

            </div> */}
          </div>
          <div className={styles.btn_div}>
              <button className={styles.btn1} type="button">Add to Cart</button>
              <span className='text-sm font-semibold'>B & B Italian Sofa <br /> $32.00</span>

          </div>
         </div> 
      </div>

     
      
    </div>
</div>
  )
}

export default Section4