import React from 'react';
import { useNavigate } from 'react-router-dom';
import TechnicianIcon from './technician.png';

function MenuTechnician() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#6ef8c7] flex justify-center items-center">
            <div className="text-center">
                <div className="mb-8">
                    <img
                        src={TechnicianIcon}
                        alt="Technicien Icone"
                        className="w-48 h-48 rounded-full bg-[#042eff] p-4 mx-auto -mt-1"
                    />
                </div>
                <h2 className="text-white text-5xl font-bold mt-8 text-stroke-2">Menu du Technicien</h2>
                <p className="text-[#666] text-sm italic my-4">Press here to create your request</p>

                <div className="flex flex-col items-center gap-4 mb-4">
                    <button
                        className="bg-[#22D94A] text-white py-4 px-8 rounded-full font-semibold text-lg w-4/5 max-w-xs transition-colors duration-300 hover:bg-[#218838]"
                        onClick={() => navigate('/InterventionReport')}>
                        Rapport d'intervention
                    </button>
                    <button
                        className="bg-[#22D94A] text-white py-4 px-8 rounded-full font-semibold text-lg w-4/5 max-w-xs transition-colors duration-300 hover:bg-[#218838]"
                        onClick={() => navigate('/InterventionOrder')}>
                        Ordre d'intervention
                    </button>
                    <button
                        className="bg-[#22D94A] text-white py-4 px-8 rounded-full font-semibold text-lg w-4/5 max-w-xs transition-colors duration-300 hover:bg-[#218838]"
                        onClick={() => navigate('/Checklist')}>
                        Check List
                    </button>
                    <button
                        className="bg-[#22D94A] text-white py-4 px-8 rounded-full font-semibold text-lg w-4/5 max-w-xs transition-colors duration-300 hover:bg-[#218838]"
                        onClick={() => navigate('/RapportPage')}>
                        Table de Technicien
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MenuTechnician;
