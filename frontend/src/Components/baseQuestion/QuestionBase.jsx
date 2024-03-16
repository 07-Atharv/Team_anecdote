'use client';

import { FloatingLabel, Dropdown, Textarea } from 'flowbite-react'
import React, { useRef, useState } from 'react'
import { ANS_TYPE, CODE_SNIPPETS, QUE_TYPE } from '../../constants';

import LanguageSelector from '../LanuageSelector/LanguageSelector';
import { Editor } from '@monaco-editor/react';
import UploadWidget from '../ImageAnswer/UploadWidget';

function QuestionBase(props) {

    const { len,handleDeleteOption,handleChangeOption,handleChangeRadioOption, question, idx, handleAddOption, handleRemoveQuestion, handleChangeQuestion } = props.props

    const editorRef = useRef(null)

    const [language, setLanguage] = useState("javascript")
    const onSelect = (lang) => {
        setLanguage(lang);
        handleChangeQuestion(idx, 'qcode', CODE_SNIPPETS[lang])
    }
    const onMount = (editor) => {
        editorRef.current = editor
        editor.focus()
    }
 

    const displayLabel = {
        'text': "Text",
        'image': "Image",
        'code': "Code"
    }
    const displayAnsLabel = {
        'text': "Text",
        'mcq': "MCQ",
        'check': "Checkboxes",
        'code': "Code"
    }
    // console.log(question)  
     console.log(len)
    return (
        <div className='mt-5 p-5 border rounded-xl'>
            <div className='flex  justify-between items-center'>
                <h1 className='font-bold'>Question {idx + 1}</h1>
                <button  onClick={() => { handleRemoveQuestion(idx) }} className='bg-red-500 px-5 py-2 rounded-xl text-white'><i class='bx bxs-trash-alt'></i></button>
            </div>
            <div className='w-full mt-2 flex justify-between items-center'>
                <div className='w-5/6 mr-2 '>
                    <FloatingLabel required name="qtext" value={question.qtext} onChange={(e) => { handleChangeQuestion(idx, e.target.name, e.target.value) }} variant="outlined" label="Enter Question" />
                </div> <div className='w-1/6  '>
                    <Dropdown label={displayLabel[question.qtype]} inline>
                        <Dropdown.Item onClick={() => { handleChangeQuestion(idx, 'qtype', QUE_TYPE.QUE_TYPE_TEXT) }}>Text</Dropdown.Item>
                        <Dropdown.Item onClick={() => { handleChangeQuestion(idx, 'qtype', QUE_TYPE.QUE_TYPE_IMAGE) }}>Image</Dropdown.Item>
                        <Dropdown.Item onClick={() => { handleChangeQuestion(idx, 'qtype', QUE_TYPE.QUE_TYPE_CODE) }}>Code</Dropdown.Item>
                    </Dropdown>
                </div>
            </div>

            <div>
                {question.qtype === QUE_TYPE.QUE_TYPE_IMAGE ? (
                    <div>
                        <UploadWidget props={{ handleChangeQuestion, idx, field: 'qimg' }} />
                        <img src={question.qimg} alt=''></img>
                    </div>

                ) : question.qtype === QUE_TYPE.QUE_TYPE_CODE ? (
                    <div>

                        <LanguageSelector props={{ language, onSelect }} />
                        <Editor theme='vs-dark' height="30vh" language={language} onMount={onMount} defaultLanguage="javascript" defaultValue={CODE_SNIPPETS["javascript"]} value={question.qcode} onChange={(code) => { handleChangeQuestion(idx, 'qcode', code) }} />
                    </div>
                ) : null}

            </div>
            <div className='flex  mt-5'>
                <p className='font-bold mr-5'>Answer Type</p>
                <Dropdown label={displayAnsLabel[question.anstype]} inline>
                    <Dropdown.Item onClick={() => { handleChangeQuestion(idx, 'anstype', ANS_TYPE.ANS_TYPE_TEXT) }}>Text</Dropdown.Item>
                    <Dropdown.Item onClick={() => { handleChangeQuestion(idx, 'anstype', ANS_TYPE.ANS_TYPE_MCQ) }}>MCQ</Dropdown.Item>
                    <Dropdown.Item onClick={() => { handleChangeQuestion(idx, 'anstype', ANS_TYPE.ANS_TYPE_CHECK) }}>Checkboxes</Dropdown.Item>
                    <Dropdown.Item onClick={() => { handleChangeQuestion(idx, 'anstype', ANS_TYPE.ANS_TYPE_CODE) }}>Code</Dropdown.Item>
                </Dropdown>
            </div>
            {
                question.anstype === "text" && (
                    <Textarea required fullWidth multiline variant='outlined' rows={4} type="text" placeholder="Expected Answer" value={question.options[0].text} onChange={(e) => { handleChangeOption(idx, 0, 'text', e.target.value) }} />
                )
            }{
                question.anstype === "code" && (
                    <Textarea required fullWidth multiline variant='outlined' rows={10} type="text" placeholder="Expected Output" value={question.options[0].text} onChange={(e) => { handleChangeOption(idx, 0, 'text', e.target.value) }} />
                )
            }
            {question.anstype === "mcq" && (
                <><div className='grid grid-cols-2 gap-4'>
                    {question.options.map((option, optionIdx) => (
                        <div key={optionIdx}>
                            <label className=''>
                                <FloatingLabel required variant='outlined' className='w-full'
                                    type="text" placeholder={`option ${optionIdx + 1}`}
                                    value={option.text}
                                    onChange={(e) =>
                                        handleChangeOption(idx, optionIdx, 'text', e.target.value)
                                    }
                                />
                                <button className='bg-red-600 p-2 mx-5 text-white rounded-xl' type="button" onClick={() => handleDeleteOption(idx, optionIdx)}>
                    <i class='bx bxs-trash-alt'></i>
                </button>
                            </label>
                            <label>
                                Correct:
                                <input  required
                                    type="radio"
                                    name={`correct-option-${idx}`}
                                    checked={option.isCorrect}
                                    onChange={(e) => { handleChangeRadioOption(idx, optionIdx, 'isCorrect', e.target.checked) }
                                    }
                                />
                            </label>
                        </div>
                    ))}

                </div>
                    <div>
                        <button className='bg-green-600 p-2 text-white rounded-xl mt-2' type="button" onClick={() => handleAddOption(idx)}>
                            Add Option
                        </button>
                    </div>
                </>

            )}

            {question.anstype === "check" && (
                <>
                    <div className='grid grid-cols-2 gap-4'>
                        {question.options.map((option, optionIdx) => (
                            <div key={optionIdx} className=''>
                                <label>
                                    <FloatingLabel required variant='outlined'
                                        type="text" placeholder={`option ${optionIdx + 1}`}
                                        value={option.text}
                                        onChange={(e) => { handleChangeOption(idx, optionIdx, 'text', e.target.value) }

                                        }
                                    />
                                    <button type="button" onClick={() => handleDeleteOption(idx, optionIdx)}>
                                    <i class='bx bxs-trash-alt'></i>
                </button>
                                </label>
                                <label>
                                    Correct:
                                    <input 
                                        type="checkbox"
                                        checked={option.isCorrect}
                                        onChange={(e) => { handleChangeOption(idx, optionIdx, 'isCorrect', e.target.checked) }

                                        }
                                    />
                                </label>
                            </div>
                        ))}

                    </div>
                    <button className='bg-green-600 p-2 text-white rounded-xl mt-2' type=" button" onClick={() => handleAddOption(idx)}>
                        Add Option
                    </button>
                </>

            )}
        </div>
    )
}

export default QuestionBase
