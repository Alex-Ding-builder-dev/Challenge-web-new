import { useForm } from 'react-hook-form';
import errorIcon from './assets/images/icon-error.svg'

export default function Form() {
    const {
        register ,
        handleSubmit,
        formState: {errors}
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-[10px] p-6
        grid gap-4 shadow-button
        md:px-10 md:py-8 md:gap-6"
        >
            <label htmlFor="firstName">
                <div className='relative'>
                    <input type="text"
                    id="firstName" name="firstName"
                    placeholder="First Name"
                    {...register('firstName',{
                        required: 'First Name cannot be empty'
                    })}
                    className={`border border-gray-200
                    w-full rounded-[5px] py-4 px-6 t4r placeholder:text-gray-900
                    md:px-8 ${errors.firstName && 'outline-none border-2 py-[15px] border-red-400'}`} />
                    {errors.firstName &&
                    <img src={errorIcon} alt="input error"
                    className='absolute right-8 top-1/2 -translate-y-1/2' />
                    }
                </div>
                {errors.firstName && 
                <p className='t5mi text-right mt-2 text-red-400'>{errors.firstName.message}</p>
                }
            </label>
            <label htmlFor="lastName">
                <div className='relative'>
                    <input type="text"
                    id="lastName" name="lastName"
                    placeholder="Last Name"
                    {...register('lastName',{
                        required: 'Last Name cannot be empty'
                    })}
                    className={`border border-gray-200
                    w-full rounded-[5px] py-4 px-6 t4r placeholder:text-gray-900
                    md:px-8 ${errors.lastName && 'outline-none border-2 py-[15px] border-red-400'}`} />
                    {errors.lastName &&
                    <img src={errorIcon} alt="input error"
                    className='absolute right-8 top-1/2 -translate-y-1/2' />
                    }
                </div>
                {errors.lastName && 
                <p className='t5mi text-right mt-2 text-red-400'>{errors.lastName.message}</p>
                }
            </label>
            <label htmlFor="email">
                <div className='relative'>
                    <input type="email"
                    id="email" name="email"
                    placeholder="Email Address"
                    {...register('email',{
                        required: 'Looks like this is not an email',
                        validate: (value)=>{return (value.includes('@') && value.includes('.'))}
                    })}
                    className={`border border-gray-200
                    w-full rounded-[5px] py-4 px-6 t4r placeholder:text-gray-900
                    md:px-8 ${errors.email && 'outline-none border-2 py-[15px] border-red-400'}`} />
                    {errors.email &&
                    <img src={errorIcon} alt="input error"
                    className='absolute right-8 top-1/2 -translate-y-1/2' />
                    }
                </div>
                {errors.email && 
                <p className='t5mi text-right mt-2 text-red-400'>{errors.email.message}</p>
                }
            </label>
            <label htmlFor="password">
                <div className='relative'>
                    <input type="password"
                    id="password" name="password"
                    placeholder="Password"
                    {...register('password',{
                        required: 'password cannot be empty'
                    })}
                    className={`border border-gray-200
                    w-full rounded-[5px] py-4 px-6 t4r placeholder:text-gray-900
                    md:px-8 ${errors.password && 'outline-none border-2 py-[15px] border-red-400'}`} />
                    {errors.password &&
                    <img src={errorIcon} alt="input error"
                    className='absolute right-8 top-1/2 -translate-y-1/2' />
                    }
                </div>
                {errors.password && 
                <p className='t5mi text-right mt-2 text-red-400'>{errors.password.message}</p>
                }
            </label>
            <label htmlFor="submit"
            className="text-center"
            >
                <button
                type="submit"
                id="submit" name="submit"
                className="bg-green-400 text-white rounded-[5px] t4se
                py-[15px] px-[33px] inset-shadow-button2 mb-2 w-full
                cursor-pointer hover:bg-green-300 transition"
                >CLAIM YOUR FREE TRIAL</button>
                <p
                className="t5m text-purple-350
                md:inline"
                >By clicking the button, you are agreeing to our 
                </p>
                <span
                className="t5b text-red-400"
                > Terms and Services</span>
            </label>
        </form>
    )
}