import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./blog.module.css";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.abcd}>
        <div className={styles.efgh}>
          <h1 className="text-4xl font-semibold">Blog</h1>
          <p className="font-semibold">
            Home . page <span className="text-rose-600 font-bold">. blog</span>
          </p>
        </div>
      </div>
      <div className={styles.main_container}></div>
      <Footer />
    </div>
  );
};

export default page;
