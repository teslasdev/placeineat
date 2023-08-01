import { MdError } from "react-icons/md"

export const InputForm = ({
   pladeHolder,
   Value,
   className,
   ...props
}) => {
  return (
   <div className="flex flex-col gap-2"> 
      <label className="text-sx text-gray-400">{props.label}</label>
      <input type={props.text} className={` ${className} border-none outline-none p-2 ${props.error ? 'bg-red-100' : 'bg-gray-100'}`} {...props}/>
      {props.error &&
         <span className="flex gap-2 items-center text-red-600">
            <MdError color="red" />
            <p className="text-red-600 text-sm">{props.error}</p>
         </span>
      }
   </div>
  )
}