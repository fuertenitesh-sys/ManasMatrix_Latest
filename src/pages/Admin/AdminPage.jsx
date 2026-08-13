import React, { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import AdminSuccessAnimation from './AdminSuccessAnimation';

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAdmin') === 'true');
  const [adminUser, setAdminUser] = useState(null);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Check if session exists on load
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const data = await response.json();
          setAdminUser(data);
          setIsAuthenticated(true);
          localStorage.setItem('isAdmin', 'true');
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem('isAdmin');
        }
      } catch (error) {
        console.error('Auth check failed', error);
        setIsAuthenticated(false);
        localStorage.removeItem('isAdmin');
      }
    };

    checkAuth();
  }, []);

  const handleLoginSuccess = (user) => {
    setAdminUser(user);
    setShowAnimation(true);
  };

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setAdminUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('isAdmin');
  };

  if (showAnimation) {
    return <AdminSuccessAnimation onComplete={handleAnimationComplete} />;
  }

  return (
    <>
      {!isAuthenticated ? (
        <AdminLogin onLoginSuccess={handleLoginSuccess} />
      ) : (
        <AdminDashboard onLogout={handleLogout} adminUser={adminUser} />
      )}
    </>
  );
};

export default AdminPage;
