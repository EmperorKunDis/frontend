import React, { useState } from 'react';

const SvciLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SVCI Login:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(/backgrounds/SvciLogin.png)` }}>
      <div className="absolute top-[48%] left-[35%] w-[35%] h-[45%] p-6 text-white text-center">
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block md:text-6xl font-unifraktur text-black mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-neutral-700 md:text-4xl text-white font-unifraktur border border-neutral-600 focus:border-yellow-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block md:text-6xl font-unifraktur text-black mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-neutral-700 md:text-4xl text-white font-unifraktur border border-neutral-600 focus:border-yellow-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-600 md:text-4xl hover:bg-yellow-700 text-white font-unifraktur rounded transition-colors"
          >
            Login to SVCI
          </button>
        </form>
      </div>
    </section>
  );
};

export default SvciLogin;
