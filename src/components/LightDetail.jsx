import { useState } from "react";
import { useWorkingModel } from "../context/WorkingModelContext";
import modelList from "../../public/data";
export default function LightDetail() {

    const { workingModel, setWorkingModel, setBtnClicked } = useWorkingModel();

    const selectedData = modelList.find(selected => selected.id == workingModel.model);
    
    const specs = selectedData?.specification ?? {};
 

    return (<>
        <style>
            {`button{
            border: 1px solid black;
            padding: 10px 20px;
            border-radius: 12px;
            }
        button:hover{
            background-color: black;
            color: white;
            }
        .buttonClicked{
            background-color: black;
            color: white;
            }
        `
            }
        </style>
        <div className="w-full h-[100vh] flex flex-col justify-center items-center p-10">
            <div className=" w-full h-full flex flex-col">
                <div>
                    <h1 className="text-3xl font-bold">Material / Finish</h1>
                </div>
                <div className="flex-1 px-40 text-xl flex flex-col items-start justify-evenly">

                    {
                        Object.entries(specs).map(([specsname, value]) => (
                            <div key={specsname+value} className="">
                                <p>{specsname}: </p>
                                <div className="p-10 flex gap-4">
                                    {value.map(val => {

                                        const isSelected = workingModel[specsname] == val
                                        return(
                                            <button key={val} className={isSelected ? "buttonClicked":null}
                                            
                                            onClick={()=> {
                                                setWorkingModel(prev => ({
                                                    ...prev, [specsname]:val
                                                }))
                                            }}

                                            >{val}</button>
                                        )
                                    }
                                        
                                        )}
                                             </div>
                            </div>
                        ))
                    }

                </div>
                <div className="ml-auto px-40">
                    <button className="bg-black text-white px-8 py-4 rounded-xl" onClick={() => setBtnClicked("composition")}>Done</button>
                </div>
            </div>
        </div>

    </>)
}
