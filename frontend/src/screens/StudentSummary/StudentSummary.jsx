import React, { useEffect, useState } from 'react';
import scoreCraftLogo from "../../assets/scorecraftlogo.png"
import { BASEURL } from '../../constants';
import { useLocation } from 'react-router-dom';

function StudentSummary() {

    const { state } = useLocation();

    console.log()
    const [exams, setExams] = useState([])


    const fetchData = async () => {
        // This code runs after the component renders
        // You can perform side effects here, like fetching data
        let res = await fetch(BASEURL + "/api/exam/getres", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: state.email })
        })

        res = await res.json()
        console.log(res)
        if (res.success === 1) {
            setExams(exams)
        }

    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="bg-blue-100 min-h-screen p-8">

            <div className="absolute top-4 left-4 mt-8 ml-8">
                <img src={scoreCraftLogo} alt="ScoreCraft Logo" className="h-20" />
            </div>

            <h1 className="text-6xl my-4 font-serif	text-center mt-20">Subject Scores</h1>

            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-3 gap-4">
                    {/* Score Cards */}
                    {/* Upper Row */}
                    {
                        exams.map((exam, i) => {
                            return (<div key={i} className="bg-white rounded-lg shadow-md p-8 mx-auto my-10 w-5/6">
                                <h2 className="text-xl font-semibold mb-4">Mathematics</h2>
                                <p className="text-gray-700">Score: 85%</p>
                            </div>)
                        })
                    }



                </div>
            </div>
        </div>
    );
}

export default StudentSummary;