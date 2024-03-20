import React from "react";
import CheckOption from "../CheckOption";

const StudentCheckAnswer = (props) => {
  const options = props.options;
  const {index,answers} = props
  const {handleAnswerChange} = props
  console.log("Checkbox options : ",options);

  const [selected,setSelected] = React.useState(answers[index].answer)

  const handleSelection =  (value) =>{
    console.log("Chose : ",value)
     setSelected(prevSelected => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter(item => item !== value);
      } else {
        return [...prevSelected, value];
      }
    });

    // console.log("Chose : ",selected)
    handleAnswerChange(index,selected)
  }

  return (
    <div>
      {options.map((option,i) => {
        return <CheckOption index={i} key={option._id} handleSelection={handleSelection} selected={selected} answers={answers} handleAnswerChange={handleAnswerChange} student={true} option={option}></CheckOption>;
      })}
    </div>
  );
};

export default StudentCheckAnswer;
