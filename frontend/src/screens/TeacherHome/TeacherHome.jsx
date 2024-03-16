import React from "react";

const exams = [
    {
        "name" : "Exam1", 
        "teacher_id" : "1234", 
        "students" : [
            {
                "name" : "Pranav Kale", 
                "email" : "pranav.kale22@pccoepune.org", 
                "hash": "abcd"
            },
            {
                "name" : "Pranav Kale", 
                "email" : "pranav.kale22@pccoepune.org", 
                "hash": "abcd"
            },
        ], 
        "questions" : [
            {
                "type" : "mcq",
                "question" : "What is the powerhouse of the cell called", 
                "answer" : "mitochondria"
            },
            {
                "type" : "mcq",
                "question" : "What is the powerhouse of the cell called", 
                "answer" : "mitochondria"
            },
            {
                "type" : "mcq",
                "question" : "What is the powerhouse of the cell called", 
                "answer" : "mitochondria"
            },
            {
                "type" : "mcq",
                "question" : "What is the powerhouse of the cell called", 
                "answer" : "mitochondria"
            },
        ]
    },
    {
        "name" : "Exam1", 
        "teacher_id" : "1234", 
        "students" : [
            {
                "name" : "Pranav Kale", 
                "email" : "pranav.kale22@pccoepune.org", 
                "hash": "abcd"
            },
            {
                "name" : "Pranav Kale", 
                "email" : "pranav.kale22@pccoepune.org", 
                "hash": "abcd"
            },
        ], 
        "questions" : [
            {
                "type" : "mcq",
                "question" : "What is the powerhouse of the cell called", 
                "answer" : "mitochondria"
            },
            {
                "type" : "mcq",
                "question" : "What is the powerhouse of the cell called", 
                "answer" : "mitochondria"
            },
            {
                "type" : "mcq",
                "question" : "What is the powerhouse of the cell called", 
                "answer" : "mitochondria"
            },
            {
                "type" : "mcq",
                "question" : "What is the powerhouse of the cell called", 
                "answer" : "mitochondria"
            },
        ]
    },
    {
        "name" : "Exam1", 
        "teacher_id" : "1234", 
        "students" : [
            {
                "name" : "Pranav Kale", 
                "email" : "pranav.kale22@pccoepune.org", 
                "hash": "abcd"
            },
            {
                "name" : "Pranav Kale", 
                "email" : "pranav.kale22@pccoepune.org", 
                "hash": "abcd"
            },
        ], 
        "questions" : [
            {
                "type" : "mcq",
                "question" : "What is the powerhouse of the cell called", 
                "answer" : "mitochondria"
            },
            {
                "type" : "mcq",
                "question" : "What is the powerhouse of the cell called", 
                "answer" : "mitochondria"
            },
            {
                "type" : "mcq",
                "question" : "What is the powerhouse of the cell called", 
                "answer" : "mitochondria"
            },
            {
                "type" : "mcq",
                "question" : "What is the powerhouse of the cell called", 
                "answer" : "mitochondria"
            },
        ]
    }, 
];

const TeacherHome = () => {
    return (
        <>  
            <div className="main-container flex flex-col mt-[4%] ml-[4%]">
                <h1 className="font-bold text-[2.5vw]"> Welcome, {"<Teacher Name>"} </h1>
            
                <h1 className="font-bold text-[1.5vw] mt-[5%]"> 
                Your Exams</h1>


                { exams.map( (exam) => { 
                    return (
                        <div className="exam-container border-slate-400 shadow-md rounded-xl h-[300px] w-[400px] flex flex-row flex-wrap">

                        </div>
                    );
                })}
            
            </div>


        </>
    );
}

export default TeacherHome;