
import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import {
  getProjects,
  createProject,
  deleteProject,
  updateProject,
} from "../lib/api";

// --- Project Type ---
interface Project {
  _id: string;
  name: string;
  description: string;
  tags?: string[];
}

// --- Modal Helpers ---
const emptyForm: Partial<Project> = {
  name: "",
  description: "",
  tags: [],
};

type ModalMode = "add" | "edit" | null;

const DashboardProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalMode, setModalMode] = useState<ModalMode>(null);
  const [form, setForm] = useState<Partial<Project>>(emptyForm);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Fetch projects from API
  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (err) {
      alert("Failed to load projects");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Modal open/close handlers
  const openAddModal = () => {
    setForm(emptyForm);
    setModalMode("add");
    setModalOpen(true);
    setSelectedId(null);
  };

  const openEditModal = (project: Project) => {
    setForm({ ...project, tags: project.tags ? [...project.tags] : [] });
    setModalMode("edit");
    setModalOpen(true);
    setSelectedId(project._id);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalMode(null);
    setForm(emptyForm);
    setSelectedId(null);
  };

  // Handle form field change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Tag management
  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value.trim()) {
      if (!form.tags) form.tags = [];
      setForm({
        ...form,
        tags: [...(form.tags || []), e.currentTarget.value.trim()],
      });
      e.currentTarget.value = "";
      e.preventDefault();
    }
  };

  const removeTag = (index: number) => {
    if (!form.tags) return;
    setForm({
      ...form,
      tags: form.tags.filter((_, i) => i !== index),
    });
  };

  // Add/Edit submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.description) {
      alert("Project name and description are required.");
      return;
    }

    const payload = {
      name: form.name,
      description: form.description,
      tags: Array.isArray(form.tags) ? form.tags : [],
    };

    try {
      if (modalMode === "add") {
        const res = await createProject(payload);
        if (!res || !res._id) {
          alert("Failed to add project. Please try again.");
          return;
        }
      }
      if (modalMode === "edit" && selectedId) {
        await updateProject(selectedId, payload);
      }
      await fetchProjects();
      closeModal();
    } catch (err) {
      alert("Failed to save project. Please check your connection and try again.");
    }
  };

  // Delete
  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure to delete this project?")) {
      try {
        await deleteProject(id);
        await fetchProjects();
      } catch (err) {
        alert("Delete failed. Try again.");
      }
    }
  };

  // --- Render ---
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Project Management</h1>
      <button
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={openAddModal}
      >
        + Add Project
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p._id}
            className="bg-white rounded p-5 shadow flex flex-col gap-2"
          >
            <h2 className="font-semibold text-lg">{p.name}</h2>
            <p className="text-gray-600">{p.description}</p>
            {p.tags && p.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {p.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 rounded px-2 py-1 text-xs font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            <div className="flex gap-2 mt-3">
              <button
                className="bg-green-500 text-white px-3 py-1 rounded"
                onClick={() => openEditModal(p)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => handleDelete(p._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded shadow-lg p-8 min-w-[300px]">
            <h2 className="text-lg font-bold mb-4">
              {modalMode === "add" ? "Add Project" : "Edit Project"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  className="border rounded p-2 w-full"
                  placeholder="Project Title"
                  name="name"
                  value={form.name || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <textarea
                  className="border rounded p-2 w-full"
                  placeholder="Project Description"
                  name="description"
                  value={form.description || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Tag input */}
              <div>
                <label className="block mb-1 font-semibold">Tags</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {(form.tags || []).map((tag, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-200 rounded px-2 py-1 text-xs font-semibold flex items-center"
                    >
                      #{tag}
                      <button
                        type="button"
                        className="ml-2 text-red-600 font-bold hover:opacity-60"
                        onClick={() => removeTag(idx)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <input
                  className="border rounded p-2 w-full"
                  placeholder="Type tag and press Enter"
                  onKeyDown={handleTagInput}
                  type="text"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  {modalMode === "add" ? "Add" : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default DashboardProjects;
