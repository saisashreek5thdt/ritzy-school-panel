import React from 'react'

const Login = () => {
  return (
    <div className='login__BG'>
      <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='bg-white shadow-xl rounded-xl w-96 h-auto'>
          <form className='m-8'>
            <div className='flex flex-col justify-between items-center'>
              <h1 className='text-gray-400 font-semibold text-2xl text-center py-4'>Logo</h1>
              <h1 className='text-cyan-400 font-semibold text-lg text-center py-4'>Email</h1>
              <input type="text" className='bg-slate-50 w-80 h-14 rounded-md shadow-xl text-start font-medium px-5 outline-none focus:outline-none text-xl' placeholder='Enter User Email ID' />
              <h1 className='text-cyan-400 font-semibold text-lg text-center py-4'>Password</h1>
              <input type="Password" className='bg-slate-50 w-80 h-14 rounded-md shadow-xl text-start font-medium px-5 outline-none focus:outline-none text-xl' placeholder='Enter User Password' />
              <h1 className='text-teal-600 font-semibold text-lg text-center py-4'>Login</h1>
              <button type='submit' className='rounded-xl login__Btn--BG uppercase w-24 h-8 font-semibold text-sm hover:drop-shadow-xl hover:text-base outline-none focus:outline-none'>SAVE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login