import React from "react";
import DashCard from "../components/DashCard"; 

import {
  FileText,
  MessageCircle,
  Users,
  Mail,
  Hotel,
  Layers,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex  min-h-screen">
      


      <div className="flex-1">
        

        <div className="p-6">
          
          {/* Title */}
          <h1 className="text-xl font-semibold text-gray-800 mb-1">
            Dashboard
          </h1>
          <p className="text-gray-500 mb-6">
            Bienvenue sur RED Product
            <br />
            <span className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur
            </span>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <DashCard
              icon={<FileText size={18} />}
              value="125"
              label="Formulaires"
              description="Je ne sais pas quoi mettre"
              color="bg-purple-500"
            />

            <DashCard
              icon={<MessageCircle size={18} />}
              value="40"
              label="Messages"
              description="Je ne sais pas quoi mettre"
              color="bg-teal-500"
            />

            <DashCard
              icon={<Users size={18} />}
              value="600"
              label="Utilisateurs"
              description="Je ne sais pas quoi mettre"
              color="bg-yellow-500"
            />

            <DashCard
              icon={<Mail size={18} />}
              value="25"
              label="E-mails"
              description="Je ne sais pas quoi mettre"
              color="bg-red-500"
            />

            <DashCard
              icon={<Hotel size={18} />}
              value="40"
              label="Hôtels"
              description="Je ne sais pas quoi mettre"
              color="bg-fuchsia-500"
            />

            <DashCard
              icon={<Layers size={18} />}
              value="02"
              label="Entités"
              description="Je ne sais pas quoi mettre"
              color="bg-blue-600"
            />

          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
