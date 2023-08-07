import { MdError } from "react-icons/md"

export const InputForm = ({
   pladeHolder,
   Value,
   className,
   textArea,
   ...props
}) => {
  return (
   <div className="flex flex-col gap-2"> 
      <label className="text-sx text-gray-400">{props.label}</label>
      {!textArea ?
         <input type={props.text} value={Value} className={` ${className} border-none outline-none p-2 ${props.error ? 'bg-red-100' : 'bg-gray-100'}`} {...props}/>
      : 
         <textarea className={` ${className} border-none outline-none p-2 ${props.error ? 'bg-red-100' : 'bg-gray-100'}`} {...props}></textarea> }
      {props.error &&
         <span className="flex gap-2 items-center text-red-600">
            <MdError color="red" />
            <p className="text-red-600 text-sm">{props.error && 'Required'}</p>
         </span>
      }
   </div>
  )
}