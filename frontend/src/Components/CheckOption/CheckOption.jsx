"use client";

import { Checkbox, Label, Radio } from "flowbite-react";
import React, { useState } from "react";

const CheckOption = (props) => {
  const [label, setLabel] = React.useState("Enter Option");
  const [editQuestion, setEditQuestion] = React.useState(false);
  const isStudent = props.student;
  const {selected,handleSelection, answers} = props


  return (
    <div>
      <fieldset className="flex max-w-md flex-col gap-4">
        <div className="flex items-center gap-2 px-2 py-2 rounded-xl border border-slate-200 my-2">
          {isStudent ? (
            <>
              <Checkbox id={props.option._id} name="options" onChange={() => handleSelection(props.option.text)} checked={selected.includes(props.option.text)} value={props.option.text} />
              <Label
                onClick={() => setEditQuestion(true)}
                htmlFor={props.option._id}
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

export default CheckOption;
