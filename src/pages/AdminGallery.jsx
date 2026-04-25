import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useNavigate } from 'react-router-dom';
import { Trash2, Edit2, LogOut } from 'lucide-react';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

export default function AdminGallery() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState('');
  const [type, setType] = useState('image');
  const [category, setCategory] = useState('gallery');
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const checkAuth = async () => {
      const me = await base44.auth.me();
      if (!me || me.role !== 'admin') {
        navigate('/');
        return;
      }
      setUser(me);
      const galleryItems = await base44.entities.GalleryItem.list('-created_date', 100);
      setItems(galleryItems);
      setLoading(false);
    };
    checkAuth();
  }, [navigate]);

  const handleUpload = async () => {
    if (files.length === 0 || !title) {
      alert('Please fill all fields and select at least one file');
      return;
    }
    setUploading(true);
    const newItems = [];
    try {
      for (let i = 0; i < files.length; i++) {
        setUploadProgress(`Uploading ${i + 1} of ${files.length}...`);
        const uploadResult = await base44.integrations.Core.UploadFile({ file: files[i] });
        const itemTitle = files.length === 1 ? title : `${title} ${i + 1}`;
        const galleryItem = await base44.entities.GalleryItem.create({
          title: itemTitle,
          mediaUrl: uploadResult.file_url,
          type,
          category,
          showTitle: true
        });
        newItems.push(galleryItem);
      }
      setItems([...newItems, ...items]);
      setTitle('');
      setFiles([]);
      setType('image');
      setCategory('gallery');
      setUploadProgress('');
    } catch (error) {
      alert('Upload failed: ' + error.message);
      setUploadProgress('');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Delete this item?')) {
      await base44.entities.GalleryItem.delete(id);
      setItems(items.filter(item => item.id !== id));
    }
  };

  const handleToggleTitle = async (id, currentShowTitle) => {
    const newVal = currentShowTitle === false ? true : false;
    await base44.entities.GalleryItem.update(id, { showTitle: newVal });
    setItems(items.map(item => item.id === id ? { ...item, showTitle: newVal } : item));
  };

  const handleEdit = async (id, currentTitle) => {
    if (editingId === id) {
      if (editTitle.trim()) {
        await base44.entities.GalleryItem.update(id, { title: editTitle });
        setItems(items.map(item => item.id === id ? { ...item, title: editTitle } : item));
      }
      setEditingId(null);
      setEditTitle('');
    } else {
      setEditingId(id);
      setEditTitle(currentTitle);
    }
  };

  const handleLogout = async () => {
    await base44.auth.logout();
  };

  const handlePasswordChange = async () => {
    if (newPassword.trim()) {
      try {
        await base44.auth.updateMe({ password: newPassword });
        alert('Password updated successfully');
        setShowPasswordModal(false);
        setNewPassword('');
      } catch (error) {
        alert('Failed to update password: ' + error.message);
      }
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen"><div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div></div>;
  }

  const renderItemCard = (item, showTitleToggle = false) => (
    <div key={item.id} className="border border-border rounded-lg overflow-hidden bg-card">
      <div className="aspect-square bg-muted overflow-hidden">
        {item.type === 'video' ? (
          <video src={item.mediaUrl} className="w-full h-full object-cover" />
        ) : (
          <img src={item.mediaUrl} alt={item.title} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="p-4">
        {editingId === item.id ? (
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full border border-border rounded px-2 py-1 mb-3"
            autoFocus
          />
        ) : (
          <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
        )}
        <div className="flex gap-2 mb-2">
          <button
            onClick={() => handleEdit(item.id, item.title)}
            className="flex-1 flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            <Edit2 className="w-4 h-4" /> {editingId === item.id ? 'Save' : 'Edit'}
          </button>
          <button
            onClick={() => handleDelete(item.id)}
            className="flex-1 flex items-center justify-center gap-2 text-red-600 hover:text-red-700 text-sm font-medium"
          >
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        </div>
        {showTitleToggle && (
          <button
            onClick={() => handleToggleTitle(item.id, item.showTitle)}
            className={`w-full text-xs py-1.5 rounded border font-medium transition-colors ${
              item.showTitle === false
                ? 'border-slate-300 text-slate-500 hover:bg-slate-50'
                : 'border-primary/30 text-primary bg-primary/5 hover:bg-primary/10'
            }`}
          >
            {item.showTitle === false ? '👁️ Show Title on Homepage' : '🙈 Hide Title on Homepage'}
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Gallery Manager</h1>
            <p className="text-muted-foreground">Upload video testimonials and hospital gallery images</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowPasswordModal(true)}
              className="px-4 py-2 border border-border rounded font-medium text-sm hover:bg-muted"
            >
              Change Password
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded font-medium text-sm hover:bg-red-700"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>

        {/* Password Change Modal */}
        {showPasswordModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
              <h3 className="text-lg font-bold mb-4">Change Password</h3>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full border border-border rounded px-3 py-2 mb-4"
              />
              <div className="flex gap-3">
                <button
                  onClick={handlePasswordChange}
                  className="flex-1 bg-primary text-white px-4 py-2 rounded font-medium hover:bg-primary/90"
                >
                  Update
                </button>
                <button
                  onClick={() => { setShowPasswordModal(false); setNewPassword(''); }}
                  className="flex-1 border border-border rounded px-4 py-2 font-medium hover:bg-muted"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Upload Form */}
        <div className="bg-card border border-border rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-border rounded px-3 py-2"
                placeholder="e.g., Patient Success Story"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full border border-border rounded px-3 py-2"
              >
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-border rounded px-3 py-2"
              >
                <option value="gallery">Gallery</option>
                <option value="testimonial">Testimonial</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Files <span className="text-muted-foreground font-normal">(select multiple)</span></label>
              <input
                type="file"
                multiple
                onChange={(e) => setFiles(Array.from(e.target.files || []))}
                accept={type === 'video' ? 'video/*' : 'image/*'}
                className="w-full border border-border rounded px-3 py-2"
              />
              {files.length > 1 && (
                <p className="text-xs text-muted-foreground mt-1">{files.length} files selected — titles will be auto-numbered</p>
              )}
            </div>
          </div>
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="bg-primary text-white px-6 py-2 rounded font-medium hover:bg-primary/90 disabled:opacity-50"
          >
            {uploading ? uploadProgress || 'Uploading...' : `Upload${files.length > 1 ? ` (${files.length} files)` : ''}`}
          </button>
        </div>

        {/* Video Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Video Testimonials ({items.filter(i => i.type === 'video' && i.category === 'testimonial').length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.filter(i => i.type === 'video' && i.category === 'testimonial').map((item) => renderItemCard(item, true))}
          </div>
          {items.filter(i => i.type === 'video' && i.category === 'testimonial').length === 0 && (
            <p className="text-muted-foreground text-center py-8">No video testimonials uploaded yet</p>
          )}
        </div>

        {/* Gallery Images */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Gallery Images ({items.filter(i => i.type === 'image' && i.category === 'gallery').length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.filter(i => i.type === 'image' && i.category === 'gallery').map((item) => renderItemCard(item, false))}
          </div>
          {items.filter(i => i.type === 'image' && i.category === 'gallery').length === 0 && (
            <p className="text-muted-foreground text-center py-8">No gallery images uploaded yet</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}