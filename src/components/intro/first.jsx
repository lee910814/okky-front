import React from "react";
import styles from './intro.module.css';



const First = (props) => {
    return(
        <>
        <section className={styles.section}>
            <header>
                <h1>여기모아</h1>
            </header>
            <div className={styles.content}>다양한 리뷰들을 체험하세요</div>
        </section>
        <section className={styles.second}>
            <div className={styles.second_left}>
                <div className={styles.second_text}>
                    <p>지도에서 가게를 검색하여<br/>
                        리뷰를 구경하세요.</p>
                </div>
            </div>
            <div className={styles.second_rigth}></div>
        </section>
        <section className={styles.third}>
            <div></div>
            <div></div>
        </section>
        <section className={styles.four}>

        </section>
        </>
    )
}

export default First;