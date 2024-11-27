import React, { useState } from 'react';

const SvciLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    clanCode: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle SVCI clan login
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
      <div className="bg-black/80 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">SVCI Clan Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-white mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-neutral-700 text-white border border-neutral-600 focus:border-yellow-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-white mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-neutral-700 text-white border border-neutral-600 focus:border-yellow-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded transition-colors"
          >
            Login to SVCI
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-neutral-400">
            Only for SVCI clan members. If you're not a member, please use the regular login.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SvciLogin;
