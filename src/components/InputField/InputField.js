import React from 'react';
import styles from './styles.module.css';
import {useSelector} from "react-redux";

function InputField({type, placeholder, handleChange}) {
    const companyNameOptionsList = useSelector(state => state.map(company => {
        return <option>{company.name}</option>
    }));
    let className = `${styles.field} `;
    switch (type) {
        case 'select':
            className += `${styles.selectField}`;
            return <select className={className}
                           placeholder={placeholder}
                           onChange={handleChange}>
                {[...companyNameOptionsList]}
            </select>
        case 'textarea':
            className += `${styles.multiRowField}`;
            return <textarea className={className} placeholder={placeholder} onChange={handleChange}/>
        default:
            className += `${styles.singleRowField}`;
            return <input className={className} placeholder={placeholder} onChange={handleChange}/>
    }
}

export default InputField;
