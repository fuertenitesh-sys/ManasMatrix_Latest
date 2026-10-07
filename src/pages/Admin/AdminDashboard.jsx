import React, { useState, useEffect, useCallback } from 'react';
import adminApiFetch from '../../utils/adminApi';
import './Admin.css';

const REQUEST_REFRESH_INTERVAL = 5000;

const AdminDashboard = ({ onLogout, adminUser }) => {
  const [requests, setRequests] = useState([]);
  const [leadCounts, setLeadCounts] = useState({
    totalLeads: 0,
    bookingLeads: 0,
    contactLeads: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sourceFilter, setSourceFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const fetchRequests = useCallback(async () => {
    try {
      const response = await adminApiFetch('/api/admin/requests');
      if (!response.ok) {
        if (response.status === 401) {
          onLogout();
          return;
        }
        throw new Error('Failed to fetch requests');
      }
      const data = await response.json();
      if (!Array.isArray(data.data) || !data.summary) {
        throw new Error('Invalid response while fetching requests');
      }
      setRequests(data.data);
      setLeadCounts(data.summary);
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [onLogout]);

  useEffect(() => {
    let isFetching = false;
    const refreshRequests = async () => {
      if (isFetching || document.visibilityState === 'hidden') return;

      isFetching = true;
      try {
        await fetchRequests();
      } finally {
        isFetching = false;
      }
    };

    refreshRequests();
    const intervalId = window.setInterval(refreshRequests, REQUEST_REFRESH_INTERVAL);
    document.addEventListener('visibilitychange', refreshRequests);
    window.addEventListener('focus', refreshRequests);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener('visibilitychange', refreshRequests);
      window.removeEventListener('focus', refreshRequests);
    };
  }, [fetchRequests]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await adminApiFetch(`/api/bookings/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        const updatedBooking = await response.json();
        setRequests(currentRequests => currentRequests.map(
          request => request.source === 'Booking' && request._id === id
            ? { ...updatedBooking, source: 'Booking' }
            : request
        ));
      } else {
        throw new Error('Failed to update booking status');
      }
    } catch (err) {
      console.error('Failed to update status', err);
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await adminApiFetch('/api/auth/logout', { method: 'POST' });
      onLogout();
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredRequests = requests
    .filter(request => {
      const searchableFields = [
        request.fullName,
        request.phone,
        request.email,
        request.bookingId,
        request.service,
        request.program,
        request.message,
        request.companyName
      ];
      const matchesSearch = searchableFields.some(value =>
        String(value || '').toLowerCase().includes(normalizedSearch)
      );
      const matchesSource = sourceFilter === 'All' || request.source === sourceFilter;
      const matchesStatus = statusFilter === 'All' ||
        (request.source === 'Booking' && request.status === statusFilter);
      const submittedDate = new Date(request.submittedAt);
      const start = startDate ? new Date(`${startDate}T00:00:00`) : null;
      const end = endDate ? new Date(`${endDate}T23:59:59.999`) : null;
      const matchesDate = (!start || submittedDate >= start) && (!end || submittedDate <= end);

      return matchesSearch && matchesSource && matchesStatus && matchesDate;
    })
    .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));

  // Summary stats
  const bookings = requests.filter(request => request.source === 'Booking');
  const newBookings = bookings.filter(b => b.status === 'New').length;
  const confirmedBookings = bookings.filter(b => b.status === 'Confirmed').length;
  const completedBookings = bookings.filter(b => b.status === 'Completed').length;
  const cancelledBookings = bookings.filter(b => b.status === 'Cancelled').length;

  if (isLoading) return <div className="admin-loading">Loading dashboard...</div>;

  return (
    <main className="admin-dashboard">
      <div className="admin-dashboard__container">
        
        {/* Header */}
        <div className="admin-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div className="admin-header__brand">
            <img src="/logo_brain_icon.webp" alt="" className="admin-header__logo" />
            <div>
              <span className="admin-header__eyebrow">MANAS MATRIX</span>
              <h1>Admin Dashboard</h1>
              {adminUser?.username && <span className="admin-header__welcome">Welcome, {adminUser.username}</span>}
            </div>
          </div>
          <button type="button" className="admin-button" onClick={handleLogout}>Log Out</button>
        </div>

        {error && <div className="admin-alert" role="alert">{error}</div>}

        {/* Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          {[
            { title: 'Total Leads', count: leadCounts.totalLeads, color: '#3B82F6' },
            { title: 'Booking Leads', count: leadCounts.bookingLeads, color: '#10B981' },
            { title: 'Contact Us Leads', count: leadCounts.contactLeads, color: '#8B5CF6' },
            { title: 'New Requests', count: newBookings, color: '#F59E0B' },
            { title: 'Confirmed', count: confirmedBookings, color: '#10B981' },
            { title: 'Completed', count: completedBookings, color: '#6366F1' },
            { title: 'Cancelled', count: cancelledBookings, color: '#EF4444' }
          ].map(stat => (
            <div key={stat.title} className={`admin-stat-card admin-stat-card--${stat.title.toLowerCase().replaceAll(' ', '-')}`} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#6B7280' }}>{stat.title}</h3>
              <p style={{ margin: 0, fontSize: '28px', fontWeight: 'bold', color: stat.color }}>{stat.count}</p>
            </div>
          ))}
        </div>

        {/* Filters and Table */}
        <h2 className="admin-section-title">All Requests</h2>
        <p role="status" style={{ margin: '-12px 0 16px', color: '#6B7280', fontSize: '13px' }}>
          Requests update automatically every 5 seconds.
        </p>
        <div className="admin-panel" style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          
          <div className="admin-filters" style={{ padding: '16px', borderBottom: '1px solid #E5E7EB', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <input 
              type="text" 
              placeholder="Search by name, phone, email, or service..."
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
              aria-label="Filter by request type"
              value={sourceFilter}
              onChange={(e) => setSourceFilter(e.target.value)}
              style={{ padding: '8px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', backgroundColor: 'white', cursor: 'pointer' }}
            >
              <option value="All">All Request Types</option>
              <option value="Booking">Booking</option>
              <option value="Contact Us">Contact Us</option>
            </select>

            <select 
              aria-label="Filter by booking status"
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

          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Submitted</th>
                  <th>Type</th>
                  <th>Booking ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Service</th>
                  <th>Details</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.length === 0 ? (
                  <tr>
                    <td className="admin-empty" colSpan="9">No requests match your filters.</td>
                  </tr>
                ) : (
                  filteredRequests.map(request => (
                    <tr key={`${request.source}-${request._id}`}>
                      <td className="admin-nowrap">{new Date(request.submittedAt).toLocaleString()}</td>
                      <td><span className="admin-service-tag">{request.source}</span></td>
                      <td className="admin-nowrap">{request.bookingId || '—'}</td>
                      <td className="admin-table__strong">{request.fullName}</td>
                      <td className="admin-nowrap"><a href={`tel:${request.phone}`}>{request.phone}</a></td>
                      <td>{request.email ? <a href={`mailto:${request.email}`}>{request.email}</a> : '—'}</td>
                      <td>{request.service || request.program || '—'}</td>
                      <td className="admin-message">
                        {request.source === 'Booking' ? (
                          <>
                            <div>Preferred: {request.preferredDate || '—'}</div>
                            <div>{request.preferredTime || ''}</div>
                          </>
                        ) : (
                          <>
                            {request.companyName && <div>Company: {request.companyName}</div>}
                            {request.teamSize && <div>Team size: {request.teamSize}</div>}
                            <div>{request.message || '—'}</div>
                          </>
                        )}
                      </td>
                      <td>
                        {request.source === 'Booking' ? (
                          <select
                            className={`admin-status admin-status--${request.status.toLowerCase()}`}
                            aria-label={`Status for booking ${request.bookingId}`}
                            value={request.status}
                            onChange={(e) => handleStatusChange(request._id, e.target.value)}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        ) : '—'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
};

export default AdminDashboard;
