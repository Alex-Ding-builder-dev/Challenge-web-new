import Form from './Form'

export default function App() {
  return (
    <>
      <header
      className='text-center text-white mb-16
      md:mx-[7.5px]
      lg:mx-0 lg:text-left lg:mb-0'
      >
        <h1
        className='t2 mb-4
        md:t1'
        >Learn to code by watching others</h1>
        <p
        className='t3'
        >See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </header>
      <main>
        <h2
        className='text-white t4r py-[18px] bg-purple-700 px-[67px]
        rounded-[10px] shadow-button mb-6 text-center'
        ><span
        className='t4b'
        >Try it free 7 days</span> then $20/mo. thereafter</h2>
        <Form/>
      </main>
    </>
  )
}