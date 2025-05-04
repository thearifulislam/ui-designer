
import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { getUsers, getProjects } from "../lib/api";

const DashboardHome: React.FC = () => {
  const [userCount, setUserCount] = useState<number>(0);
  const [projectCount, setProjectCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        const [users, projects] = await Promise.all([
          getUsers(),
          getProjects()
        ]);
        setUserCount(users.length);
        setProjectCount(projects.length);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-gray-500">Loading dashboard data...</p>
        </div>
      ) : (
        <>
          {/* Stats widgets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded shadow p-5 transition-all hover:shadow-md">
              <h2 className="font-semibold text-lg mb-2">Users</h2>
              <p className="text-3xl font-bold">{userCount}</p>
            </div>
            <div className="bg-white rounded shadow p-5 transition-all hover:shadow-md">
              <h2 className="font-semibold text-lg mb-2">Projects</h2>
              <p className="text-3xl font-bold">{projectCount}</p>
            </div>
          </div>
          {/* You can add more widgets or recent activity here later */}
        </>
      )}
    </DashboardLayout>
  );
};

export default DashboardHome;
