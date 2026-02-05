import QuestionData from "../data/QuestionData";
import { useEffect, useState } from "react";

const Quiz = () => {
    //console.log(QuestionData);
    const [current,setCursor] = useState(0);
    const [selectChoice,setSelectChoice] = useState("");

    useEffect(()=>{
        checkAnswer()
    },[selectChoice])

    const checkAnswer = () => {
        if(selectChoice !== ""){
            if(selectChoice === QuestionData[current].answer){
                console.log("ตอบถูกและได้คะแนน");
            }else{
                console.log("ตอบผิดไม่ได้คะแนน T+T");
        }
    }
}

    return(
        <div className="quiz" >
            <h1>{QuestionData[current].question}</h1>
            <div className="choices">
                <button onClick={()=>setSelectChoice("A")}>{QuestionData[current].A}</button>
                <button onClick={()=>setSelectChoice("B")}>{QuestionData[current].B}</button>
                <button onClick={()=>setSelectChoice("C")}>{QuestionData[current].C}</button>
                <button onClick={()=>setSelectChoice("D")}>{QuestionData[current].D}</button>
            </div>
            <p>{'{current+1} / {QuestionData.length}'}</p>
        </div>
        
    )
}
export default Quiz;