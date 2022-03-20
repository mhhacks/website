import axios from 'axios'
import Button from 'components/Button'
import Dots from 'components/Effects/Dots'
import Input from 'components/Forms/Input'
import Meta from 'components/Meta'
import Navbar from 'components/Navbar'
import { NextPage } from 'next'
import { useRef, useState } from 'react'
import { RiLoader4Fill } from 'react-icons/ri'

const Register: NextPage = ({}) => {
  const emailRef = useRef<HTMLInputElement>(null)

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const submit = async (e: any) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    try {
      if (!emailRef.current?.value) {alert('Please enter an email address.'); return}

      const res = await axios.post('/api/preregister', {
        email: emailRef.current?.value,
      })
      if (!res.data.ok) throw 'Email not sent'
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className='h-screen w-full'>
      <Meta title='Register' />
      <Dots numDots={10} maxSize={150} />
      <Navbar />

      <div className='absolute flex w-full h-full justify-center items-center'>
        <form className='p-6 bg-co-yellow rounded-md flex flex-col gap-8 items-center w-96'>
          {!submitted && <>{/* <h1 className='text-3xl font-medium leading-none'>Mile High Hacks</h1> */}
          <p className='text-xl max-w-sm text-center font-light'><strong>Mile High Hacks registration will open in August.</strong> Please leave your email so we can let you know when it does.</p>
          <Input ref={emailRef} placeholder='Your Email' type='email' />
          {error && <p className='text-red-700 font-medium'>Something went wrong. Please try again or email team@milehighhacks.com</p>}
          <Button type='submit' onClick={submit}>{submitting ? (
                <span className="flex justify-center">
                  <RiLoader4Fill size={24} className="animate-spin" />
                </span>
              ) : (
                'Submit'
              )}</Button></>}
          
          {submitted && <>
            <h2 className='text-3xl leading-none'>Thanks!</h2>
            <p className='text-center'>{`We'll let you know when registration opens.`}</p>
          </>}
        </form>
      </div>
    </div>
  )
}

export default Register
