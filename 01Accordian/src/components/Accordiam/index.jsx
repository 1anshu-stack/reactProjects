import { useState } from "react"
import data from "./data"
import './style.css'

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([])

    function handleSingleSection(getCurrentId){
        setSelected(getCurrentId===selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId){
        let cpyMultiple = [...multiple];
        const findIndeOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        if(findIndeOfCurrentId===-1){
            cpyMultiple.push(getCurrentId);
        }
        else cpyMultiple.splice(findIndeOfCurrentId, 1);

        setMultiple(cpyMultiple);
    }

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            <div className="accodian">
                { data && data.length > 0 ? (
                    data.map((dataitem) => (
                        <div className="item">
                            <div 
                               className="title" 
                               onClick={
                                enableMultiSelection 
                                ? () => handleMultiSelection(dataitem.id) 
                                : () => handleSingleSection(dataitem.id)}>
                                <h3>{dataitem.question}</h3>
                                <span>+</span>
                            </div>
                            {enableMultiSelection
                               ? multiple.indexOf(dataitem.id) !== -1 && (
                                  <div className="content">{dataitem.answer}</div>
                               )
                               : selected === dataitem.id && ( 
                               <div>{dataitem.answer}</div> 
                            )}
                            {/* {
                                selected === dataitem.id ? 
                                <div>{dataitem.answer}</div>
                                : null
                            } */}
                        </div>
                    ))
                ) : (
                    <div>No data found!</div>
                )}
            </div>
        </div>
    )
}