import React from "react";
import styles from "../price/price.module.css";
// import image from "../../../images/rupeedesign.png";
// import icon from "../../../images/rupee.png";
import Header from "../components/Header/Header";
import Link from "next/link";

function Price() {
  return (
    <div>
      <div className={styles.mainC}>
        <Header text="" />
        <div className={styles.text2}>Price Quotation</div>
        <div className={styles.text3}>
          Please Enter the available quantity of paddy straw
        </div>
        <img src="/images/rupeedesign.png" alt="..." className={styles.image1} />
        <div className={styles.text1}>
          Enter your desired price{" "}
          <span className={styles.perUnit}>(per unit)</span>
        </div>
        <div className={styles.input}>
          <img src="/images/rupee.png" alt="" className={styles.image2} />
          <input
            type="number"
            placeholder="Enter the Amount"
            className={styles.inputNumber}
          />
        </div>
        <Link href="/farmerConfirmation">
        <button className={styles.confirm}>Confirm</button>
        </Link>
      </div>
    </div>
  );
}

export default Price;
