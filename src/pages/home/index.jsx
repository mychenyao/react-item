import React, { useState, useEffect } from 'react';
import styles from './style.module.less'
import { connect } from 'react-redux'
import axios from "axios";
import { Button } from 'antd-mobile';
import {getLocalStorage, setLocalStorage} from "../../utils";
const Index = (props) => {
    const [animation, setAnimation] = useState(false)
    const [dataList] = useState([
        1, 2, 4, 5, 3, 6, 7
    ])
    useEffect(() => {
    }, [])
    const addCard = () => {
        setAnimation(true)
    }
    return (
        <div className={styles.home}>
            <div className={styles.list}>
                {
                  dataList.map(v => <div className={styles.item} key={v}>
                      <button className={`${styles.button}`} onClick={addCard}>primary</button>
                  </div>)
                }
            </div>
            <div className={`${styles.ball}  ${animation && styles.animation}`}></div>
            <div className={styles.card}></div>
        </div>
    )
}
export default connect((user) => user)(Index)
