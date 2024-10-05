import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import UserLayout from "@/layout/UserLayout";

const inter=Inter({subsets:["latin"]});

export default function Home(){
  const router=useRouter();
  return (
    <>
    <UserLayout>
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <div className={styles.mainContainer_left}>
          <p>Connect with Friends without Exaggeration</p>
          <p>A True social media platform,with no blufs. !</p>

          <div onClick={()=>{
            router.push("/login")
          }}
           className={styles.buttonJoin}>
            <p>Join Now</p>
          </div>
          </div>
          <div className={styles.mainContainer_right}>
            <img src="images/message.jpg"></img>
          </div>
        </div>
      </div>
      </UserLayout>
    </>
  )
}
