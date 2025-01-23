'use client'

import { EyeClosedIcon, EyeIcon } from 'lucide-react'
import { useState } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const GenInput = ({ id, label, children, formik }) => {
    const error = formik.errors[id];
    const touched = formik.touched[id];
    
    return (
        <div>
            <Label htmlFor={id}>{label} <span className='text-red-500'>*</span></Label>
            {children}
            {touched && error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
        </div>
    )
}

GenInput.Default = (props) => {
    return (
        <Input {...props} />
    )
}

GenInput.PassInput = (props) => {
    const [type, setType] = useState('password')

    return (
        <div className='flex items-center relative justify-between'>
            <Input type={type} {...props} />
            {type === "password" ?
                <EyeClosedIcon size={16} onClick={() => setType("text")} className='absolute right-3 cursor-pointer' />
                :
                <EyeIcon size={16} onClick={() => setType("password")} className='absolute right-3 cursor-pointer' />}
        </div>
    )
}


export default GenInput