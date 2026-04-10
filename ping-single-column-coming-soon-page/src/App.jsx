
import logo from './assets/images/logo.svg'
import dashboard from './assets/images/illustration-dashboard.png'
import { useState } from 'react'

export default function App() {
  const [isError,setIsError] = useState(false)
  const [email,setEmail] = useState()
  function handleForm(formData) {
    const aemail = formData.get('email')
    setEmail(aemail)
  }
  function handleChange(e) {
    const input = e.target.value
    if (!input.includes('@') || !input.includes('.')) {
      setIsError(true)
    }
    else {setIsError(false)}
  }
  return (
    <>
      <header>
        <img src={logo} alt="ping logo"
        className='w-[53.58px] mb-10
        md:w-[85.73px] md:mb-12' />
      </header>
      <main>
        <h1 className='text-gray-400
        t2l mb-2
        md:t1l md:mb-4'>We are launching <span className='text-gray-950 t2b
        md:t1b'>soon!</span></h1>
        <p className='t4l text-gray-950 mb-10
        md:t2l'>Subscribe and get notified</p>
        <form action={handleForm}
        className='mx-[10px] mb-[72px]
        md:flex md:mx-[37.5px] md:gap-4 md:mb-[96px]'>
          <label htmlFor="email" className='w-full'>
            <input type="email" onChange={handleChange}
             name="email" id='email' aria-invalid={isError}
             aria-describedby={isError?'email-error' : undefined}
            className={`border py-[11.5px] rounded-[28px] w-full
            border-blue-200 px-6 text-blue-200 t4l mb-2
            shadow-top
            md:px-8 md:py-[18px] md:h-fit md:t3l
            outline-none ${isError && 'border-red-400 text-gray-950' }`}
            placeholder='Your email address...' />
            {isError&& <p id='email-error' role='alert' className='
            text-red-400 t5 mb-6 
            md:t4i md:text-left md:ml-8'>Please provide a valid email address</p>}
          </label>
          <button type="submit"
           aria-label="submit
           " name="submit"
           className='py-[12.5px] rounded-[28px] w-full bg-blue-500
           t4se text-white
           shadow-bottom h-fit cursor-pointer
           hover:opacity-75 transition
           md:w-[200px] md:py-[18px]
           md:t3se'>
            Notify Me
           </button>
        </form>
        <img src={dashboard} alt="" 
        className='mb-[120px]
        md:mx-[36px] md:w-[639.88px] md:mb-[72px]'/>
      </main>
      <footer className='flex flex-col items-center gap-6'>
        <div className='flex gap-4
        md:gap-6'>
          <a
          className='cursor-pointer w-[31.22px] h-[31px]
          border rounded-full grid place-items-center border-blue-200
          hover:bg-blue-500 hover:border-blue-500 group transition
          ' href="https://www.facebook.com">
            <svg
            className='h-[18.5px] group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path className='group-hover:fill-white transition' fill="#4c7bf3" d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"/></svg>
            </a>
          <a
          className='cursor-pointer w-[31.22px] h-[31px]
          border rounded-full grid place-items-center border-blue-200
          hover:bg-blue-500 hover:border-blue-500 group transition
          ' href="https://www.x.com">
            <svg
            className='h-[18.5px] group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path className='group-hover:fill-white transition' fill="#4c7bf3" d="M523.4 215.7C523.7 220.2 523.7 224.8 523.7 229.3C523.7 368 418.1 527.9 225.1 527.9C165.6 527.9 110.4 510.7 64 480.8C72.4 481.8 80.6 482.1 89.3 482.1C138.4 482.1 183.5 465.5 219.6 437.3C173.5 436.3 134.8 406.1 121.5 364.5C128 365.5 134.5 366.1 141.3 366.1C150.7 366.1 160.1 364.8 168.9 362.5C120.8 352.8 84.8 310.5 84.8 259.5L84.8 258.2C98.8 266 115 270.9 132.2 271.5C103.9 252.7 85.4 220.5 85.4 184.1C85.4 164.6 90.6 146.7 99.7 131.1C151.4 194.8 229 236.4 316.1 240.9C314.5 233.1 313.5 225 313.5 216.9C313.5 159.1 360.3 112 418.4 112C448.6 112 475.9 124.7 495.1 145.1C518.8 140.6 541.6 131.8 561.7 119.8C553.9 144.2 537.3 164.6 515.6 177.6C536.7 175.3 557.2 169.5 576 161.4C561.7 182.2 543.8 200.7 523.4 215.7z"/></svg>
            </a>
          <a
          className='cursor-pointer w-[31.22px] h-[31px]
          border rounded-full grid place-items-center border-blue-200
          hover:bg-blue-500 hover:border-blue-500 group transition
          ' href="https://www.instagram.com">
            <svg
            className='h-[20px] group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path className='group-hover:fill-white transition' fill="#4c7bf3" d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>
            </a>
        </div>
        <p
        className='t4l text-gray-400'>&copy; Copyright Ping. All rights reserved.</p>
      </footer>
    </>
  )
}