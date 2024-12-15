import React from 'react';
import SideImg from '../assets/Side Image.png';
import Container from '../components/Container';

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Container className="flex flex-col md:flex-row items-center justify-between p-8 bg-white rounded-lg">
        <div className="hidden md:block w-1/2 pr-8">
          <img src={SideImg} alt="Side Image" className="w-full h-auto object-cover rounded-lg" />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-center text-[#DB4444] mb-6">Sign Up</h1>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-[#DB4444]"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-[#DB4444]"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-[#DB4444]"
            />
            <button 
              type="submit" 
              className="w-full py-3 bg-[#DB4444] text-white font-semibold rounded-md hover:bg-[#b63f3f] transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account? <a href="#" className="text-[#DB4444] font-semibold">Login</a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
