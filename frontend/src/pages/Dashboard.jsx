import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [projectsRes, messagesRes] = await Promise.all([
        api.get('/projects'),
        api.get('/contact')
      ]);
      setProjects(projectsRes.data.data);
      setMessages(messagesRes.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (messageId) => {
    try {
      await api.put(`/contact/${messageId}/read`);
      setMessages(messages.map(msg => 
        msg._id === messageId ? { ...msg, read: true } : msg
      ));
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  const unreadCount = messages.filter(msg => !msg.read).length;

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Welcome back, {user?.name}!
          </p>

          {/* Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'projects'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                Projects ({projects.length})
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'messages'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                Messages ({unreadCount > 0 && `${unreadCount} new`})
              </button>
            </nav>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Total Projects</h3>
                <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">{projects.length}</p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Total Messages</h3>
                <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">{messages.length}</p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Unread Messages</h3>
                <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">{unreadCount}</p>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              {projects.length === 0 ? (
                <div className="card text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400">No projects yet.</p>
                </div>
              ) : (
                projects.map((project) => (
                  <div key={project._id} className="card">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-100 dark:bg-gray-700 text-primary-700 dark:text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div className="space-y-4">
              {messages.length === 0 ? (
                <div className="card text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400">No messages yet.</p>
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message._id}
                    className={`card ${!message.read ? 'border-l-4 border-primary-600 dark:border-primary-400' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {message.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{message.email}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(message.createdAt).toLocaleDateString()}
                        </p>
                        {!message.read && (
                          <button
                            onClick={() => markAsRead(message._id)}
                            className="mt-2 text-xs text-primary-600 dark:text-primary-400 hover:underline"
                          >
                            Mark as read
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mt-4">{message.message}</p>
                  </div>
                ))
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;

