import React, { useState } from 'react'
import AccordionData from "./AccordionData"
export default function Accordion() {
    const [showAns, setShowAns] = useState(AccordionData[0].id)
    return (
        <div>
            <div className="Accordion_wrapper">
                <h1>Accordion Assessment</h1>
                {AccordionData.length == 0 ? <h3>No Data Found</h3> : AccordionData.map(({ id, question, ans }) => (
                    <div div className="question_answer" key={id} >
                        <div className="question">
                            {console.log(id)}
                            <div className="question_wrapper" onClick={() => setShowAns(AccordionData[id].id)}>
                                <h2>{question}</h2>
                                <span className={showAns == id && 'rotate'}>⮞</span>
                            </div>
                        </div>
                        <div className={`answer ${showAns == id && "showAnswer"}`}>
                            <p>
                                {showAns == id && ans}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}
