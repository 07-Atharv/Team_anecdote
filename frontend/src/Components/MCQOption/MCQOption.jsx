"use client";

import { Label, Radio } from "flowbite-react";
import React from "react";

const MCQOption = (props) => {
  const [label, setLabel] = React.useState("Enter Option");
  const [editQuestion, setEditQuestion] = React.useState(false);
  const isStudent = props.student;

  return (
    <div>
      <fieldset className="flex max-w-md flex-col gap-4">
        <div className="flex items-center gap-2 px-2 py-2 rounded-xl border border-slate-200 my-2">
          {isStudent ? (
            <>
              <Radio id={props.option.text} name="options" value={props.option.text} />
              <Label
                onClick={() => setEditQuestion(true)}
                htmlFor={props.option.text}
                className="text-lg text-slate-500">
                {props.option.text}
              </Label>
            </>
          ) : (
            <>
              <Radio id={label} value={label} disabled />
              {!editQuestion ? (
                <Label
                  onClick={() => setEditQuestion(true)}
                  htmlFor={label}
                  className="text-lg text-slate-500">
                  {label}
                </Label>
              ) : (
                <input
                  type="text"
                  onChange={(e) => setLabel(e.target.value)}
                  onBlur={() => setEditQuestion(false)}
                />
              )}
            </>
          )}
        </div>
      </fieldset>
    </div>
  );
};

export default MCQOption;
