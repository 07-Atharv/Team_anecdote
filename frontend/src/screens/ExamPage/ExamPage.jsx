import React, { useState, useEffect } from "react";
import {
  QUE_TYPE,
  ANS_TYPE,
  OPTION_TYPE,
  BASEURL,
  TOKEN,
} from "../../constants";
import QuestionBase from "../../Components/baseQuestion/QuestionBase";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import LoggedNav from "../../Components/LoggedNAv/LoggedNav";

const initQuestions = [
  {
    qtype: QUE_TYPE.QUE_TYPE_TEXT,
    qtext: "",
    qimg: "",
    qcode: "",
    anstype: ANS_TYPE.ANS_TYPE_TEXT,
    options: [{ otype: OPTION_TYPE.TYPE_TEXT, text: "", isCorrect: false }],
  },
];

const ExamPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let examid = "";
  try {
    examid = location.state["examid"];
  } catch (error) { }
  const [title, setTitle] = useState("Exam0");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState(initQuestions);
  const [nameEditabe, setNameEditable] = useState(false);
  const [descriptionEditable, setDescriptionEditable] = useState(false);

  useEffect(() => {
    if (examid) {
      getExam();
    }
  }, [examid]);



  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleDateChange = (e) => {

    if (e.target.name === 'start') {
      setStart(e.target.value);
    }
    else {
      setEnd(e.target.value);
    }
    console.log(start, " ", end)



  };
  const getExam = async () => {
    let res = await fetch(BASEURL + "/api/exam/getone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: examid }),
    });

    res = await res.json();

    console.log(res);

    setTitle(res.exam.title);
    setDescription(res.exam.description);
    setQuestions(res.exam.questions);
    setStart(res.exam.start);
    setEnd(res.exam.end);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        qtype: QUE_TYPE.QUE_TYPE_TEXT,
        qtext: "",
        qimg: "",
        qcode: "",
        anstype: ANS_TYPE.ANS_TYPE_TEXT,
        options: [{ otype: OPTION_TYPE.TYPE_TEXT, text: "", isCorrect: false }],
      },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleChangeQuestion = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    if (field === "anstype") {
      updatedQuestions[index].options = [
        { otype: OPTION_TYPE.TYPE_TEXT, text: "", isCorrect: false },
      ];
    }
    setQuestions(updatedQuestions);
    console.log(updatedQuestions[index]);
  };

  const handleAddOption = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index]["options"].push({
      otype: OPTION_TYPE.TYPE_TEXT,
      text: "",
      isCorrect: false,
    });
    setQuestions(updatedQuestions);
  };

  const handleChangeOption = (questionIndex, optionIndex, field, value) => {
    let updateQuestions = [...questions];
    updateQuestions[questionIndex].options[optionIndex][field] = value;
    setQuestions(updateQuestions);
    console.log(questions[questionIndex]);
  };

  const handleChangeRadioOption = (
    questionIndex,
    optionIndex,
    field,
    value
  ) => {
    let updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.forEach((option, index) => {
      option[field] = index === optionIndex ? value : false;
    });
    setQuestions(updatedQuestions);
    console.log(questions[questionIndex].options);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic to submit the form data
    // console.log({ title, description, questions });
    console.log()
    
    if (new Date(end) < new Date(start)) {
      alert('End date must be greater than start date');
      return;
    }

    console.log("Token: ", localStorage.getItem(TOKEN));
    let response = await fetch(BASEURL + "/api/exam/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem(TOKEN),
      },
      body: JSON.stringify({ examid,start,end, title, description, questions }),
    });
    response = await response.json();
    console.log(response);
    if (response.success === 1) {
      setTitle("");
      setDescription("");
      setQuestions([
        {
          qtype: QUE_TYPE.QUE_TYPE_TEXT,
          qtext: "",
          qimg: "",
          qcode: "",
          anstype: ANS_TYPE.ANS_TYPE_TEXT,
          options: [
            { otype: OPTION_TYPE.TYPE_TEXT, text: "", isCorrect: false },
          ],
        },
      ]);

      navigate("/TeacherHome");
    }
  };

  const handleDeleteOption = (questionIndex, optionIndex) => {
    let updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };

  console.log(questions);

  return (
    <form onSubmit={handleSubmit} className="main-container h-[100vh] overflow-hidden">
      <LoggedNav show={false} />
      <div className="flex flex-row">
        <div className="h-[100vh] w-[17%] ">
          <div className="fixed h-[100vh] -translate-y-[7vh]  w-[17%] border border-slate-100 rounded-md">
            <div className="flex flex-col mt-[7vh] h-[100vh] p-6">
              <h1 className="font-bold text-2xl">Tools</h1>

              <button
                onClick={handleAddQuestion}
                className="flex flex-row items-center justify-center w-full border border-2 border-blue-700 text-black font-bold p-5 text-md hover:bg-blue-700 hover:text-white transition duration-300 hover:scale-[102%] rounded-xl my-4">
                <i class="bx bx-plus pr-1"></i>
                <p>Add Question</p>
              </button>
              <div>
                      <div class="relative mt-4">
                        <input type="datetime-local" value={start} onChange={handleDateChange} id="start" required name="start" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" style={{ paddingTop: '2.5rem' }} />
                        <label for="datetime" class="absolute top-0 left-0 px-3 py-2 text-gray-500 bg-white">Start Date and Time</label>
                      </div>
                      <div class="relative mt-4">
                        <input type="datetime-local" value={end} onChange={handleDateChange} id="start" required name="end" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" style={{ paddingTop: '2.5rem' }} />
                        <label for="datetime" class="absolute top-0 left-0 px-3 py-2 text-gray-500 bg-white">End Date and Time</label>
                      </div>

                    </div>
              <div className="flex flex-col grow justify-end mb-[7vh]">
                <button
                  onClick={() => {
                    navigate("/studentTest", {
                      state: { data: { examId: examid, studentName: "Dummy", studentEmail: "Dummy" }, questions: questions },
                    });
                  }}
                  className="flex flex-row items-center justify-center w-full border border-2 border-blue-700 text-black font-bold p-5 text-md hover:bg-blue-700 hover:text-white transition duration-300 hover:scale-[102%] rounded-xl my-2">
                  <p>Preview Test </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grow overflow-scroll h-[100vh] ">
          <div >
            <div className="w-[90%] mx-auto  my-10 ">
              <div className="exam-container p-8 grow">
                <div>
                  <div className="flex items-center rounded-xl  name-container">
                    <div className="w-5/6">
                      {nameEditabe ? (
                        <input
                          className="text-3xl font-bold w-fit rounded-md border border-slate-300"
                          type="text"
                          placeholder="Exam Title"
                          value={title}
                          onBlur={() => {
                            setNameEditable(false);
                          }}
                          required
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      ) : (
                        <div className="flex flex-row items-baseline">
                          <p className="text-3xl font-bold"> {title} </p>
                          <i
                            class="bx bxs-pencil text-grey-300 p-2 cursor-pointer"
                            onClick={() => setNameEditable(true)}></i>
                        </div>
                      )}

                      <div className="h-2"></div>

                      {descriptionEditable ? (
                        <textarea
                          className="text-xl my-5  w-full"
                          type="text"
                          placeholder="Description"
                          value={description} onBlur={setDescriptionEditable(false)}
                          onChange={(e) => setDescription(e.target.value)}
                          style={{
                            width: "100%",
                            padding: "8px",
                            borderBottom: "1px solid",
                            borderRadius: "4px",
                          }}></textarea>
                      ) : (
                        <div className="flex flex-row items-baseline">
                          <p className="text-xl text-gray-500"> {description} </p>
                          <i
                            class="bx bxs-pencil text-grey-300 p-2 cursor-pointer"
                            onClick={() => setDescriptionEditable(true)}></i>
                        </div>
                      )}
                    </div>
                   
                  </div>
                </div>

                <div className="questions-container w-full mt-12">
                  {questions.map((question, idx) => {
                    return (
                      <QuestionBase
                        props={{
                          len: questions.length,
                          handleChangeOption,
                          handleDeleteOption,
                          handleChangeRadioOption,
                          handleAddOption,
                          question,
                          idx,
                          handleRemoveQuestion,
                          handleChangeQuestion,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row mx-4 justify-end">
                <button
                  style={{
                    backgroundColor:
                      questions && questions.length > 0 ? "" : "#cccccc",
                    cursor:
                      questions && questions.length > 0
                        ? "pointer"
                        : "not-allowed",
                  }}
                  type="submit"
                  className="bg-green-600 px-10 py-3 text-xl font-bold text-white rounded shadow m-5"
                  disabled={!questions || questions.length === 0}>
                  Save
                </button>
              </div>

              <div className="h-32"></div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ExamPage;
