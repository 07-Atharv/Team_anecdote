import React, { useState } from "react";
import { QUE_TYPE, ANS_TYPE, OPTION_TYPE } from "../../constants";
import QuestionBase from "../../Components/baseQuestion/QuestionBase";


const ExamPage = () => {

  const [title, setTitle] = useState('Exam0');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([{ qtype: QUE_TYPE.QUE_TYPE_TEXT, qtext: '', qimg: '', qcode: '', anstype: ANS_TYPE.ANS_TYPE_TEXT, options: [{ otype: OPTION_TYPE.TYPE_TEXT, text: '', isCorrect: false }] }]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { qtype: QUE_TYPE.QUE_TYPE_TEXT, qtext: '', qimg: '', qcode: '', anstype: ANS_TYPE.ANS_TYPE_TEXT, options: [{ otype: OPTION_TYPE.TYPE_TEXT, text: '', isCorrect: false }] }]);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleChangeQuestion = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    if (field === 'anstype') {
      updatedQuestions[index].options = [{ otype: OPTION_TYPE.TYPE_TEXT, text: '', isCorrect: false }];
    }
    setQuestions(updatedQuestions);
    console.log(updatedQuestions[index])
  };

  const handleAddOption = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index]['options'].push({ otype: OPTION_TYPE.TYPE_TEXT, text: '', isCorrect: false })
    setQuestions(updatedQuestions)

  }

  const handleChangeOption = (questionIndex, optionIndex, field, value) => {

    let updateQuestions = [...questions]
    updateQuestions[questionIndex].options[optionIndex][field] = value;
    setQuestions(updateQuestions)
    console.log(questions[questionIndex])

  };

  const handleChangeRadioOption = (questionIndex, optionIndex, field, value) => {
    let updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.forEach((option, index) => {
      option[field] = index === optionIndex ? value : false;
    });
    setQuestions(updatedQuestions);
    console.log(questions[questionIndex].options)
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to submit the form data
    console.log({ title, description, questions });
  };

  const [isTitleFocused, setTitleFocused] = useState(false)
  const handleTitleFocus = () => {
    setTitleFocused(true);
  };

  const handleTitleBlur = () => {
    setTitleFocused(false);
  };

  const handleDeleteOption = (questionIndex, optionIndex) => {
    let updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-5/6 mx-auto border rounded-xl my-10 shadow-xl">



          <div className="exam-container p-8 grow">
            <div>
              <div className="name-container">
                <input className="text-2xl font-bold w-full"
                  type="text" placeholder="Exam Title"
                  value={title} onFocus={handleTitleFocus}
                  onBlur={handleTitleBlur} required
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderBottom: '1px solid',
                    borderRadius: '4px',
                    ...(isTitleFocused && { borderColor: '#007bff', outline: 'none' }),
                  }}
                />
                <textarea className="text-sm my-5  w-full"
                  type="text" placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderBottom: '1px solid',
                    borderRadius: '4px',

                  }}
                ></textarea>
              </div>
              <button onClick={handleAddQuestion} className="bg-green-700 text-white p-5 rounded-xl">Add Question</button>
            </div>

            <div className="questions-container w-[100%] mt-3">
              {
                questions.map((question, idx) => {
                  return (
                    <QuestionBase props={{ len:questions.length ,handleChangeOption, handleDeleteOption, handleChangeRadioOption, handleAddOption, question, idx, handleRemoveQuestion, handleChangeQuestion }} />
                  );
                })
              }


            </div>
          </div>

          <button style={{ backgroundColor: questions.length > 0 ? "" : "#cccccc", cursor: questions.length > 0 ? "pointer" : "not-allowed" }}
   type="submit" className="bg-green-600 px-5 py-2 font-bold text-white rounded shadow m-5" disabled={questions.length ===0} >Submit</button>
        </div>

      </form>
    </>
  );
};

export default ExamPage;
