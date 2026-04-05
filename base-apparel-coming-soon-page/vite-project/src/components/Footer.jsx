import { useState } from "react";

export default function Footer(crops) {
    const [isError, setIsError] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const emailValue = e.target.email.value; 
        if (!emailValue || !emailValue.includes('@')) {
            setIsError(true); 
        } else {
            setIsError(false); 
        }
    };
    return (
        <footer className="mt-16 mx-8 mb-[92px] text-center
        md:mx-[161.5px] md:mb-[62.5px]
        lg:text-left lg:ml-[165px] lg:mr-[220px]">
            <h1 className="t2s text-gray-900 mb-4
            md:t1s md:mb-8">
                <p className="t2l text-pink-400
                md:t1l">{crops.span.toUpperCase()}</p>
                {crops.h1.toUpperCase()}
            </h1>
            <p className="t4 text-pink-400 mb-8
            md:t3">{crops.p}</p>
            <form className="relative" onSubmit={handleSubmit} noValidate>
                <div>
                    <input type="email"
                    name="email"
                    
                    aria-label="Email"
                     placeholder={crops.placeHolder}
                     required
                     aria-invalid={isError}
                     aria-describedby={isError ? "email-error" : undefined}
                     id="email" 
                     className={`w-full
                     rounded-[28px] pt-[7px] pb-[5px] pl-6 t3
                     md:pt-[11px] md:pb-[9px] outline-none
                     ${isError 
                                ? 'ring-2 ring-red-400 ring-inset text-gray-900' 
                                : 'ring-1 ring-pink-400 ring-inset  text-pink-400'}
                     `}/>
                </div>
                <div>
                    <label htmlFor="button"></label>
                    <button type="submit"
                    id="button"
                    className="bg-g1 rounded-[28px] w-16 h-[48px]
                    absolute right-0 top-0 flex items-center justify-center shadow-button
                    md:h-[56px] md:w-[100px]">

                    {isError && (
                    <img src="/src/assets/images/icon-error.svg" alt="error" 
                    className="-ml-26 absolute"/>)}
                        <img src="/src/assets/images/icon-arrow.svg" alt="" />
                    </button>
                </div>
                {isError && (
                    <p id="email-error" className="text-red-400 t5 text-left ml-6 mt-2">please provide a valid email</p>
                )}
                
            </form>
        </footer>
    )
}