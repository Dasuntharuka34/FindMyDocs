import React from 'react';
import '../styles/RecentLetters.css';

const statusColors = {
  Pending: '#f0ad4e',
  "In Review": '#5bc0de',
  Approved: '#5cb85c',
  Rejected: '#d9534f'
};

function RecentLetters({ letters }) {
  return (
    <div className="recent-letters">
      <h2>Recent Letter Requests</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Status</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {letters.map(({ id, type, status, lastUpdated }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{type}</td>
              <td>
                <span
                  className="status-badge"
                  style={{ backgroundColor: statusColors[status] || '#777' }}
                >
                  {status}
                </span>
              </td>
              <td>{lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentLetters;
