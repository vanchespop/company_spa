import React, {useState} from 'react';
import styles from './styles.module.css';
import InputField from "../InputField/InputField.js";
import Button from '../Button/Button.js'

function ControlsPanel() {
    const [company, setCompany] = useState({name: '', info: '', parent: null, children: []});
    const updateCompanyData = (prop, value) => {
        const clonedCompany = {...company};
        clonedCompany[prop] = value;
        setCompany(clonedCompany)
    }

    return (
        <div className={styles.controlsPanel}>
            <InputField placeholder={'Название компании'}
                        handleChange={(event) => updateCompanyData('name', event.target.value)}/>
            <InputField type={'select'}
                        placeholder={'Родительская компания'}
                        handleChange={(event) => updateCompanyData('parent', event.target.value)}/>
            <InputField type={'textarea'}
                        placeholder={'Описание компании'}
                        handleChange={(event) => updateCompanyData('info', event.target.value)}
            />
            <Button buttonText={'Добавить'}
                    companyData={company}
            />
        </div>
    );
}

export default ControlsPanel;
