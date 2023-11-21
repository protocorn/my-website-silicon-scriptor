import React from 'react';

interface SkillCardProps {
  icon: string;
  name: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, description }) => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-500 rounded-lg p-4 shadow-md flex flex-col md:flex-row items-center">
      {/* Skill Icon */}
      <img src={icon} alt={name} className="w-12 h-12 mb-4 md:mb-0 md:mr-4" />

      {/* Skill Name and Description */}
      <div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
