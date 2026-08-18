import React, { useState } from 'react';
import {
  X,
  Save,
  RotateCcw,
  Plus,
  Trash2,
  User,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  BookOpen
} from 'lucide-react';
import { ResumeData } from '../types';
import { initialResumeData } from '../data/resumeData';

interface EditResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ResumeData;
  onSave: (newData: ResumeData) => void;
}

export const EditResumeModal: React.FC<EditResumeModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave
}) => {
  const [formData, setFormData] = useState<ResumeData>(data);
  const [activeTab, setActiveTab] = useState<'basic' | 'education' | 'skills' | 'projects' | 'achievements'>('basic');

  if (!isOpen) return null;

  const handleTextChange = (field: keyof ResumeData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleEducationChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      education: { ...prev.education, [field]: value }
    }));
  };

  const handleSkillsArrayChange = (category: keyof typeof formData.skills, strValue: string) => {
    const arr = strValue.split(',').map(s => s.trim()).filter(Boolean);
    setFormData(prev => ({
      ...prev,
      skills: { ...prev.skills, [category]: arr }
    }));
  };

  const handleAddProject = () => {
    const newProj = {
      id: `proj-${Date.now()}`,
      name: "New Software Project",
      category: "web" as const,
      description: "Brief project overview and practical implementation goals.",
      bulletPoints: [
        "Architected responsive user interface with modern framework.",
        "Implemented backend API and integrated database storage.",
      ],
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/Farjana02mim",
      liveUrl: "",
      featured: true,
    };
    setFormData(prev => ({ ...prev, projects: [newProj, ...prev.projects] }));
  };

  const handleRemoveProject = (index: number) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  const handleProjectFieldChange = (index: number, field: string, value: any) => {
    setFormData(prev => {
      const updated = [...prev.projects];
      if (field === 'technologies') {
        updated[index] = {
          ...updated[index],
          technologies: typeof value === 'string' ? value.split(',').map(s => s.trim()).filter(Boolean) : value
        };
      } else if (field === 'bulletPoints') {
        updated[index] = {
          ...updated[index],
          bulletPoints: typeof value === 'string' ? value.split('\n').filter(Boolean) : value
        };
      } else {
        updated[index] = { ...updated[index], [field]: value };
      }
      return { ...prev, projects: updated };
    });
  };

  const handleResetToDefault = () => {
    if (confirm('Reset all fields to original Farjana Akter Mim resume details?')) {
      setFormData(initialResumeData);
    }
  };

  const handleSaveAndClose = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-base sm:text-lg text-white flex items-center gap-2">
              <User className="w-5 h-5 text-sky-400" />
              Customize & Edit Resume Content
            </h3>
            <p className="text-xs text-slate-300">
              Update contact info, technical keywords, education, or projects in real time
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleResetToDefault}
              className="text-xs text-slate-300 hover:text-white px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors flex items-center gap-1"
              title="Reset to default data"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('basic')}
            className={`py-3 px-3.5 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'basic'
                ? 'border-sky-600 text-sky-600 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            Personal & Summary
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`py-3 px-3.5 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'education'
                ? 'border-sky-600 text-sky-600 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Education & CGPA
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`py-3 px-3.5 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'skills'
                ? 'border-sky-600 text-sky-600 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            Technical Skills
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`py-3 px-3.5 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'projects'
                ? 'border-sky-600 text-sky-600 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            Projects ({formData.projects.length})
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`py-3 px-3.5 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'achievements'
                ? 'border-sky-600 text-sky-600 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            Achievements & Certs
          </button>
        </div>

        {/* Form Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {/* TAB 1: BASIC INFO */}
          {activeTab === 'basic' && (
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => handleTextChange('name', e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500 font-semibold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Professional Subtitle</label>
                  <input
                    type="text"
                    value={formData.subtitle || ''}
                    onChange={e => handleTextChange('subtitle', e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => handleTextChange('email', e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={e => handleTextChange('phone', e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">LinkedIn URL</label>
                  <input
                    type="text"
                    value={formData.linkedin}
                    onChange={e => handleTextChange('linkedin', e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">GitHub URL</label>
                  <input
                    type="text"
                    value={formData.github}
                    onChange={e => handleTextChange('github', e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={e => handleTextChange('location', e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div className="flex items-center gap-3 pt-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.showPhoto}
                      onChange={e => handleTextChange('showPhoto', e.target.checked)}
                      className="rounded text-sky-600 focus:ring-sky-500 w-4 h-4"
                    />
                    <span className="font-bold text-slate-700">Display Profile Photo Container</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Career Summary (ATS Evaluated)</label>
                <textarea
                  rows={4}
                  value={formData.summary}
                  onChange={e => handleTextChange('summary', e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500 leading-relaxed"
                />
              </div>
            </div>
          )}

          {/* TAB 2: EDUCATION */}
          {activeTab === 'education' && (
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Degree Title</label>
                  <input
                    type="text"
                    value={formData.education.degree}
                    onChange={e => handleEducationChange('degree', e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500 font-semibold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Institution</label>
                  <input
                    type="text"
                    value={formData.education.institution}
                    onChange={e => handleEducationChange('institution', e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Department</label>
                  <input
                    type="text"
                    value={formData.education.department}
                    onChange={e => handleEducationChange('department', e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">CGPA</label>
                  <input
                    type="text"
                    value={formData.education.cgpa}
                    onChange={e => handleEducationChange('cgpa', e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500 font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Period / Graduation Year</label>
                  <input
                    type="text"
                    value={formData.education.period}
                    onChange={e => handleEducationChange('period', e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SKILLS */}
          {activeTab === 'skills' && (
            <div className="space-y-4 text-xs">
              <p className="text-slate-500">
                Separate skills with commas. These match ATS recruiter parsing keywords.
              </p>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Programming Languages</label>
                <input
                  type="text"
                  value={formData.skills.programming.join(', ')}
                  onChange={e => handleSkillsArrayChange('programming', e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Frontend Technologies</label>
                <input
                  type="text"
                  value={formData.skills.frontend.join(', ')}
                  onChange={e => handleSkillsArrayChange('frontend', e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Backend & Databases</label>
                <input
                  type="text"
                  value={formData.skills.backend.join(', ')}
                  onChange={e => handleSkillsArrayChange('backend', e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Machine Learning & Data</label>
                <input
                  type="text"
                  value={formData.skills.machineLearning.join(', ')}
                  onChange={e => handleSkillsArrayChange('machineLearning', e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Developer Tools & Environments</label>
                <input
                  type="text"
                  value={formData.skills.tools.join(', ')}
                  onChange={e => handleSkillsArrayChange('tools', e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500"
                />
              </div>
            </div>
          )}

          {/* TAB 4: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-4 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-700">Project List ({formData.projects.length})</span>
                <button
                  onClick={handleAddProject}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-sky-600 hover:bg-sky-700 text-white rounded-md font-semibold"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Project
                </button>
              </div>

              <div className="space-y-4">
                {formData.projects.map((proj, idx) => (
                  <div key={proj.id || idx} className="p-4 border border-slate-200 rounded-lg bg-slate-50 space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-slate-900 text-sm">#{idx + 1} {proj.name}</span>
                      <button
                        onClick={() => handleRemoveProject(idx)}
                        className="text-rose-600 hover:text-rose-800 p-1"
                        title="Remove project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-0.5">Project Title</label>
                        <input
                          type="text"
                          value={proj.name}
                          onChange={e => handleProjectFieldChange(idx, 'name', e.target.value)}
                          className="w-full p-1.5 border border-slate-300 rounded bg-white"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-0.5">Technologies (comma separated)</label>
                        <input
                          type="text"
                          value={proj.technologies.join(', ')}
                          onChange={e => handleProjectFieldChange(idx, 'technologies', e.target.value)}
                          className="w-full p-1.5 border border-slate-300 rounded bg-white"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-0.5">Live Demo URL (optional)</label>
                        <input
                          type="text"
                          value={proj.liveUrl || ''}
                          onChange={e => handleProjectFieldChange(idx, 'liveUrl', e.target.value)}
                          placeholder="https://..."
                          className="w-full p-1.5 border border-slate-300 rounded bg-white"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-0.5">GitHub URL / Client URL</label>
                        <input
                          type="text"
                          value={proj.githubClientUrl || proj.githubUrl || ''}
                          onChange={e => handleProjectFieldChange(idx, 'githubClientUrl', e.target.value)}
                          placeholder="https://github.com/..."
                          className="w-full p-1.5 border border-slate-300 rounded bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-0.5">
                        Bullet Points (one bullet per line)
                      </label>
                      <textarea
                        rows={3}
                        value={(proj.bulletPoints || []).join('\n')}
                        onChange={e => handleProjectFieldChange(idx, 'bulletPoints', e.target.value)}
                        className="w-full p-2 border border-slate-300 rounded bg-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: ACHIEVEMENTS & CERTS */}
          {activeTab === 'achievements' && (
            <div className="space-y-4 text-xs">
              <h4 className="font-bold text-slate-800">Academic Scholarships</h4>
              <div className="space-y-3">
                {formData.academicAchievements.map((ach, idx) => (
                  <div key={idx} className="p-3 border border-slate-200 rounded-md bg-slate-50">
                    <div className="font-bold text-slate-900">{ach.title}</div>
                    <p className="text-slate-600 mt-1">{ach.description}</p>
                  </div>
                ))}
              </div>

              <h4 className="font-bold text-slate-800 pt-2">Certifications & Memberships</h4>
              <div className="space-y-3">
                {formData.certifications.map((cert, idx) => (
                  <div key={idx} className="p-3 border border-slate-200 rounded-md bg-slate-50 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-slate-900">{cert.name}</span>
                      <span className="text-slate-600 block">{cert.issuer} ({cert.date})</span>
                    </div>
                    {cert.url && (
                      <span className="text-sky-600 font-mono text-[11px] truncate max-w-xs">{cert.url}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveAndClose}
            className="inline-flex items-center gap-1.5 px-5 py-2 bg-sky-600 text-white rounded-lg text-xs font-bold hover:bg-sky-700 transition-colors shadow-xs"
          >
            <Save className="w-3.5 h-3.5" />
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
};
