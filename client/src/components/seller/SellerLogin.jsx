import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContex'

function SellerLogin() {
    const { isSeller, setIsSeller, navigate } = useAppContext()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        // You can add actual login logic here
        setIsSeller(true)
    }

    useEffect(() => {
        if (isSeller) {
            navigate("/seller")
        }
    }, [isSeller, navigate])

    return !isSeller && (
        <form
            onSubmit={onSubmitHandler}
            className='min-h-screen flex items-center justify-center text-sm text-gray-600 py-12 px-4'
        >
            <div className='min-w-80 sm:min-w-88 p-6 rounded-lg shadow-xl border border-gray-200 w-full max-w-md'>
                <p className='text-2xl font-medium mb-6'>
                    <span className='text-primary'>Seller</span> Login
                </p>

                <div className='mb-4'>
                    <p>Email</p>
                    <input
                        
                        type="email"
                        placeholder='Enter your email'
                        className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-6'>
                    <p>Password</p>
                    <input
                        type="password"
                        placeholder='Enter your password'
                        className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className='bg-primary text-white w-full py-2 rounded-md cursor-pointer'
                >
                    Login
                </button>
            </div>
        </form>
    )
}

export default SellerLogin
