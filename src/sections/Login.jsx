import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login:', { email: formData.email, password: formData.password });
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log('Register:', formData);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center" 
      style={{ backgroundImage: `url(/backgrounds/RegisterLogin.png)` }}>
      <div className="absolute top-[40%] left-[63%] w-[25%] h-[45%] p-6 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-unifraktur text-black mb-6">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-unifraktur md:text-2xl text-black mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-neutral-700 text-white border border-neutral-600 focus:border-yellow-500 focus:outline-none"
              required
            />
          </div>

          
          <div>
            <label htmlFor="password" className="block font-unifraktur md:text-2xl text-black mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-neutral-700 text-black border border-neutral-600 focus:border-yellow-500 focus:outline-none"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block font-unifraktur md:text-2xl text-black mb-2">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-neutral-700 text-white border border-neutral-600 focus:border-yellow-500 focus:outline-none"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-600 hover:bg-yellow-700 text-white font-unifraktur rounded transition-colors"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>

          <p className="text-white text-center mt-4 font-unifraktur">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-yellow-500 hover:text-yellow-400 font-unifraktur"
            >
              {isLogin ? 'Register here' : 'Login here'}
            </button>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
