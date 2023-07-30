import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [adminCredentials, setAdminCredentials] = useState({
    adminId: '',
    password: '',
  });

  const handleLogin = () => {
    // Implement login logic here and handle authentication
    // Redirect to AdminDashboard if authenticated
    navigate('/admin/dashboard');
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Admin ID"
        value={adminCredentials.adminId}
        onChange={(e) => setAdminCredentials({ ...adminCredentials, adminId: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={adminCredentials.password}
        onChange={(e) => setAdminCredentials({ ...adminCredentials, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
