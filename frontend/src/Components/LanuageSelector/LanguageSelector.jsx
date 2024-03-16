'use client';
import React from 'react'
import { Dropdown } from 'flowbite-react';
import { LANGUAGES_SUPPORTED } from '../../constants';


const languages = Object.entries(LANGUAGES_SUPPORTED);


function LanguageSelector(props) {

    const {language,onSelect} = props.props
    // onClick={() => alert('Dashboard!')}
  return (
    <div>
  <Dropdown label={language}  inline dismissOnClick={true}>


 {languages.map(([lang, version]) => (
    <Dropdown.Item
      key={lang}
      
      onClick={() => onSelect(lang)}
    >
      {lang}
      &nbsp;
      <span className='font-sm'>
        ({version})
      </span>
    </Dropdown.Item>
  ))}
    </Dropdown>
    </div>
  )
}

export default LanguageSelector
