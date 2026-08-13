import React, { useState, useEffect } from 'react';

const AdminDashboard = ({ onLogout }) => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/bookings');
      if (!response.ok) {
        if (response.status === 401) {
          onLogout();
          return;
        }
        throw new Error('Failed to fetch bookings');
      }
      const data = await response.json();
      setBookings(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(`/api/bookings/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        const updatedBooking = await response.json();
        setBookings(bookings.map(b => b._id === id ? updatedBooking : b));
      }
    } catch (err) {
      console.error('Failed to update status', err);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      onLogout();
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  // Filter and search logic
  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = 
      booking.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.phone.includes(searchTerm) ||
      booking.bookingId.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = statusFilter === 'All' || booking.status === statusFilter;

    let matchesDate = true;
    if (startDate || endDate) {
      const bDate = new Date(booking.submittedAt);
      bDate.setHours(0,0,0,0);
      
      if (startDate) {
        const sDate = new Date(startDate);
        sDate.setHours(0,0,0,0);
        if (bDate < sDate) matchesDate = false;
      }
      if (endDate) {
        const eDate = new Date(endDate);
        eDate.setHours(0,0,0,0);
        if (bDate > eDate) matchesDate = false;
      }
    }

    return matchesSearch && matchesStatus && matchesDate;
  });

  // Summary stats
  const totalBookings = bookings.length;
  const newBookings = bookings.filter(b => b.status === 'New').length;
  const confirmedBookings = bookings.filter(b => b.status === 'Confirmed').length;
  const completedBookings = bookings.filter(b => b.status === 'Completed').length;
  const cancelledBookings = bookings.filter(b => b.status === 'Cancelled').length;

  if (isLoading) return <div style={{ backgroundColor: '#F3F4F6', minHeight: '100vh', padding: '120px 24px 40px', textAlign: 'center', color: '#111827' }}>Loading data...</div>;

  return (
    <div style={{ backgroundColor: '#F3F4F6', minHeight: '100vh', padding: '24px', paddingTop: '100px', color: '#111827' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h1 style={{ fontSize: '24px', color: '#111827', margin: 0 }}>Manas Matrix Admin Dashboard</h1>
        </div>

        {error && <div style={{ color: 'red', marginBottom: '16px' }}>{error}</div>}

        {/* Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          {[
            { title: 'Total Bookings', count: totalBookings, color: '#3B82F6' },
            { title: 'New Requests', count: newBookings, color: '#F59E0B' },
            { title: 'Confirmed', count: confirmedBookings, color: '#10B981' },
            { title: 'Completed', count: completedBookings, color: '#6366F1' },
            { title: 'Cancelled', count: cancelledBookings, color: '#EF4444' }
          ].map(stat => (
            <div key={stat.title} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#6B7280' }}>{stat.title}</h3>
              <p style={{ margin: 0, fontSize: '28px', fontWeight: 'bold', color: stat.color }}>{stat.count}</p>
            </div>
          ))}
        </div>

        {/* Filters and Table */}
        <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          
          <div style={{ padding: '16px', borderBottom: '1px solid #E5E7EB', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <input 
              type="text" 
              placeholder="Search by Name, Phone, or ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: '8px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', flex: '1', minWidth: '250px' }}
            />
            
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', color: '#374151' }}>From:</span>
              <input 
                type="date" 
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                style={{ padding: '8px', border: '1px solid #D1D5DB', borderRadius: '4px' }}
              />
              <span style={{ fontSize: '14px', color: '#374151' }}>To:</span>
              <input 
                type="date" 
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                style={{ padding: '8px', border: '1px solid #D1D5DB', borderRadius: '4px' }}
              />
            </div>

            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{ padding: '8px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', backgroundColor: 'white', cursor: 'pointer' }}
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead style={{ backgroundColor: '#F9FAFB' }}>
                <tr>
                  <th style={{ padding: '12px 16px', borderBottom: '1px solid #E5E7EB', color: '#374151', fontSize: '14px', fontWeight: '600' }}>Booking ID</th>
                  <th style={{ padding: '12px 16px', borderBottom: '1px solid #E5E7EB', color: '#374151', fontSize: '14px', fontWeight: '600' }}>Name</th>
                  <th style={{ padding: '12px 16px', borderBottom: '1px solid #E5E7EB', color: '#374151', fontSize: '14px', fontWeight: '600' }}>Phone</th>
                  <th style={{ padding: '12px 16px', borderBottom: '1px solid #E5E7EB', color: '#374151', fontSize: '14px', fontWeight: '600' }}>Service</th>
                  <th style={{ padding: '12px 16px', borderBottom: '1px solid #E5E7EB', color: '#374151', fontSize: '14px', fontWeight: '600' }}>Date & Time</th>
                  <th style={{ padding: '12px 16px', borderBottom: '1px solid #E5E7EB', color: '#374151', fontSize: '14px', fontWeight: '600' }}>Submitted</th>
                  <th style={{ padding: '12px 16px', borderBottom: '1px solid #E5E7EB', color: '#374151', fontSize: '14px', fontWeight: '600' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.length === 0 ? (
                  <tr>
                    <td colSpan="7" style={{ padding: '24px', textAlign: 'center', color: '#6B7280' }}>No bookings found.</td>
                  </tr>
                ) : (
                  filteredBookings.map(booking => (
                    <tr key={booking._id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ padding: '12px 16px', fontSize: '14px' }}>{booking.bookingId}</td>
                      <td style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '500' }}>{booking.fullName}</td>
                      <td style={{ padding: '12px 16px', fontSize: '14px' }}>{booking.phone}</td>
                      <td style={{ padding: '12px 16px', fontSize: '14px' }}>
                        <span style={{ backgroundColor: '#E0E7FF', color: '#4338CA', padding: '2px 8px', borderRadius: '9999px', fontSize: '12px' }}>
                          {booking.service}
                        </span>
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '14px' }}>
                        <div>{new Date(booking.preferredDate).toLocaleDateString()}</div>
                        <div style={{ color: '#6B7280', fontSize: '12px' }}>{booking.preferredTime}</div>
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '14px', color: '#6B7280' }}>
                        {new Date(booking.submittedAt).toLocaleString()}
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '14px' }}>
                        <select 
                          value={booking.status}
                          onChange={(e) => handleStatusChange(booking._id, e.target.value)}
                          style={{ 
                            padding: '4px 8px', 
                            borderRadius: '4px', 
                            border: '1px solid #D1D5DB',
                            cursor: 'pointer',
                            backgroundColor: booking.status === 'New' ? '#FEF3C7' : 
                                             booking.status === 'Contacted' ? '#DBEAFE' : 
                                             booking.status === 'Confirmed' ? '#D1FAE5' : 
                                             booking.status === 'Completed' ? '#E0E7FF' : 
                                             booking.status === 'Cancelled' ? '#FEE2E2' : '#F3F4F6'
                          }}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
