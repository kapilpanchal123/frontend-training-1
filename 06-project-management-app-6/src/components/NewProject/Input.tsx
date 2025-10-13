import React, { forwardRef } from 'react';

type Props = {
  label: string;
  isTextArea: boolean;
  type?: string
} & React.PropsWithChildren;

const Input = forwardRef(({ label, isTextArea, type, ...props }: Props, ref) => {
  const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">{ label }</label>
        { isTextArea ? 
          <textarea ref={ref as React.Ref<HTMLTextAreaElement>} className={classes} { ...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>) }/> : 
          <input type={type} ref={ref as React.Ref<HTMLInputElement>} className={classes} { ...(props as React.InputHTMLAttributes<HTMLInputElement>) }/> }
      </p>
    </>
  )
});

export default Input;