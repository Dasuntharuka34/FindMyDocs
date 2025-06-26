import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProgressTracker from './components/ProgressTracker';
import RecentLetters from './components/RecentLetters';
import Notifications from './components/Notifications';
import NewLetterModal from './components/NewLetterModal';
import Footer from './components/Footer';
import './styles/Dashboard.css';

const stages = [
  "Submitted",
  "Checked by Staff",
  "Lecturer Approval",
  "HOD",
  "Dean",
  "VC"
];

const dummyLetters = [
  { id: 1, type: 'Medical Certificate', status: 'Pending', lastUpdated: '2025-06-24' },
  { id: 2, type: 'Leave Request', status: 'Approved', lastUpdated: '2025-06-23' },
  { id: 3, type: 'Transcript Request', status: 'In Review', lastUpdated: '2025-06-22' },
  { id: 4, type: 'Internship Letter', status: 'Rejected', lastUpdated: '2025-06-20' }
];

const dummyNotifications = [
  { id: 1, message: 'Letter Approved by Dean', type: 'success' },
  { id: 2, message: 'Letter Rejected with Comments', type: 'error' },
  { id: 3, message: 'New Letter Submitted by Student', type: 'info' }
];

function App() {
  const [currentStage] = useState(2); // index of current stage
  const [letters, setLetters] = useState(dummyLetters);
  const [notifications, setNotifications] = useState(dummyNotifications);
  const [modalOpen, setModalOpen] = useState(false);

  // Simulate logged-in user info
  const user = {
    name: "Hasitha Wijesekara",
    role: "Student"
  };

  // Handle new letter submit
  const addLetter = (newLetter) => {
    setLetters([newLetter, ...letters]);
    setModalOpen(false);
    setNotifications([{id: Date.now(), message: `New letter request submitted: ${newLetter.type}`, type: 'info'}, ...notifications]);
  };

  return (
    <div className="dashboard-container">
      <Header user={user} />
      <Sidebar />
      <main className="main-content">
        <section className="top-widgets">
          <ProgressTracker stages={stages} currentStage={currentStage} />
          <Notifications notifications={notifications} />
        </section>

        <section className="bottom-widgets">
          <RecentLetters letters={letters} />
          <div className="new-letter-button-container">
            <button
              className="new-letter-btn"
              onClick={() => setModalOpen(true)}
              aria-label="Submit a New Letter"
            >
              + Submit a New Letter
            </button>
          </div>
        </section>
      </main>
      {modalOpen && <NewLetterModal onClose={() => setModalOpen(false)} onSubmit={addLetter} />}
      <Footer />
    </div>
  );
}

export default App;
