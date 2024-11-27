import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SvciRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    clanCode: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/api/auth/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        clanCode: formData.clanCode
      });

      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
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
      style={{ backgroundImage: `url(/backgrounds/SvciLogin.png)` }}>
      <div className="bg-black/80 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">SVCI Clan Registration</h2>
        
        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-500 p-3 rounded mb-4">
            {error}
          </div>
        )}

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
            <label htmlFor="email" className="block text-white mb-2">Email</label>
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

          <div>
            <label htmlFor="confirmPassword" className="block text-white mb-2">Confirm Password</label>
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

          <div>
            <label htmlFor="clanCode" className="block text-white mb-2">Clan Code</label>
            <input
              type="text"
              id="clanCode"
              name="clanCode"
              value={formData.clanCode}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-neutral-700 text-white border border-neutral-600 focus:border-yellow-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-400 transition-colors"
          >
            Register
          </button>

          <p className="text-white text-center mt-4">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="text-yellow-500 hover:text-yellow-400"
            >
              Login here
            </button>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SvciRegister;
