import styles from "./styles.module.css";
import closeImg from "../../assets/images/close.png";
import { useImage } from "react-awesome-image";

const productName = "20";

const ProductDetail = () => {
  const [opened, setOpened] = useState(true);

  const handleOpenCloseProductDetails = () => setOpened(!opened);

  return (
    <div
      className={
        `${styles.fluidContainer}` +
        `${opened ? styles.openedFluidContainer : ''}`
      }
    >
      <div className={styles.closeButton} onClick={handleOpenCloseProductDetails}>
        <img src={closeImg} alt="Close" className="sidemodal" />
      </div>
