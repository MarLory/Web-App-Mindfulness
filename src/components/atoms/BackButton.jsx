import { useNavigate } from "react-router-dom";

export default function BackButton () {
    const navigate = useNavigate ();

        function Back (){

            navigate (-1)
        }
   
    
    return (

        <>
           <button onClick={Back} className="flex justify-between p-4 mb-7">
                    <i className="fa-regular fa-circle-left text-3xl mt-5 text-blue-900 backdark"></i>

                </button>
        </>
    ) }
