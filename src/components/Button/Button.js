import React from 'react';
import styles from './styles.module.css'
import {useDispatch} from "react-redux";

function Button({buttonText, companyData}) {
    const dispatch = useDispatch();
    const addCompany = (companyData) => () => {
        dispatch({type: 'ADD_COMPANY', payload: companyData})
    }
    return (
        <button className={styles.btn}
                onClick={addCompany(companyData)}>
            {buttonText}
        </button>
    );
}

export default Button;
