import React from "react";
import styles from './signin.module.css';
// import image from "./images/diller.png";
import Header from "../components/Header/Header";
import Link from "next/link";

function SignIn() {
  return (
    <div>
    <Header text="Sign In" />
    <div className={styles.language}>Welcome!</div>
    <div className={styles.container}>
      <img src="../images/diller.png" alt="" className={styles.icon} />
      <div>

<span>+91</span> <input type='number' placeholder="Enter your Phone Number" className={styles.number}/>
      </div>
<Link href="/otp">
<button className={styles.btn}>Sign Up</button>
</Link>
    </div>
  </div>
  );
}

export default SignIn;
