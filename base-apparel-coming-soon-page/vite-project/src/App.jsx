import Header from './components/Header'
import Footer from './components/Footer'
import desk from './images/hero-desktop.jpg'

export default function App(crops) {
  console.log(crops)
  return (
    <>
      <Header {...crops.logo}/>
      <picture className='lg:row-span-2
      '>
        <source media="(min-width:1440px )" srcSet={`${desk}`}/>
        <img {...crops.img} className='w-full max-h-100 object-cover object-top-left
        lg:max-h-none lg:h-full'/>
      </picture>
      <Footer {...crops}/>
    </>
  )
}