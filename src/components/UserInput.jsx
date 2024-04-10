import React from 'react'
import eye from '../assets/svg/hide-password.svg';
import editFile from '../assets/svg/edit.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
export default function UserInput(props) {
    const fileRef = useRef(null);
    const [type, setType] = useState('text');
    const [file, setFile] = useState(undefined);

    useEffect(()=>{setType(props.type);},[])
  return (
    <div className='flex flex-col gap-[8px] w-full'>
        <label className='text-[1rem] font-[600] leading-[1.25rem]'>{props.label}</label>
        <div className={`w-full flex justify-between px-[0.5rem] py-[0.625rem] rounded-md border border-[#D5D5D5]`}>
            <input  className="w-full outline-none text-[0.75rem] text-[#656565] font-[400] leading-[1.5rem] bg-transparent" type={type && type !== 'file' ? type : 'text'} placeholder={props.type==='file' && file ? file:props.placeholder} disabled={props.type === 'file'}/>
            <input ref={fileRef} className='hidden' type='file' onChange={(e)=>setFile(e.target.value)} />
            {props.type === "file" && <img className="cursor-pointer w-[1.5rem]" src={editFile} alt="file" onClick={()=>{fileRef.current.click()}}/>}
            {props.type === "password" && <img className="cursor-pointer w-[1.5rem]" src={eye} alt="eye" onClick={()=>setType(prev => prev==='password' ? 'text':'password')}/>}
        </div>
    </div>
  )
}
