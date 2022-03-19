import axios from 'axios'
import Button from 'components/Button'
import Dots from 'components/Effects/Dots'
import Input from 'components/Forms/Input'
import Meta from 'components/Meta'
import Navbar from 'components/Navbar'
import { NextPage } from 'next'
import { useRef, useState } from 'react'

const Register: NextPage = ({}) => {
  const emailRef = useRef<HTMLInputElement>(null)

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const submit = async () => {
    setSubmitting(true)
    setError(false)

    try {
      if (!emailRef.current?.value) {alert('Please enter an email address.'); return}

      const res = await axios.post('/api/preregister', {
        email: emailRef.current?.value,
        name: nameRef.current?.value,
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
    <div className='h-screen absolute w-full'>
      <Meta title='Register' />
      <Dots numDots={10} maxSize={150} />
      <Navbar />

      <div className='flex w-full h-full justify-center items-center'>
        <div className='p-6 bg-co-yellow rounded-md flex flex-col gap-8 items-center'>
          <h1 className='text-3xl font-medium leading-none'>Mile High Hacks Interest Form</h1>
          <p className='text-lg max-w-sm text-center font-light'><strong>Mile High Hacks registration will open in August.</strong> Please leave your email so we can let you know when.</p>
          <Input ref={emailRef} placeholder='Your Email' type='email' />
          <Button onClick={submit}>Register</Button>
        </div>
      </div>
    </div>
  )
}

export default Register
