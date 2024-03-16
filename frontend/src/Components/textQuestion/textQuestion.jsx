import React from "react";

const TextQuestion = (props) => {
  const details = props.props;

  const [editable, setEditable] = React.useState(false);
  const [questionState, setQuestionState] = React.useState(false);
  const [question, setQuestion] = React.useState(details.question);

  return (
    <div className="shadow-md rounded-xl w-full h-fit p-8">
      <div className="flex flex-row">
        <h1 className="font-bold text-2xl grow">Question {props.index}</h1>

        {editable ? (
          <div className=""> </div>
        ) : (
          <button
            type="button"
            onClick={() => setEditable(true)}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <i class="bx bxs-edit-alt text-white"></i>
          </button>
        )}
      </div>

      {questionState === true && editable ? (
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onBlur={() => setQuestionState(false)}
        />
      ) : (
        <p className="pt-4 text-xl" onClick={() => setQuestionState(true)}>
          {" "}
          {question}{" "}
        </p>
      )}

      {editable ? (
        <div className=""></div>
      ) : (
        <textarea
          id="message"
          rows="4"
          class="block mt-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."></textarea>
      )}

      {!editable ? (
        <div className=" "></div>
      ) : (
        <div className="button-container w-full flex flex-row items-end">
          <button
            type="button"
            onClick={() => setEditable(false)}
            class="text-white bg-blue-700 mt-4 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default TextQuestion;
