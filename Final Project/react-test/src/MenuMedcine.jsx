import React from 'react';
import { useNavigate } from 'react-router-dom';
import doctorIcon from './doctor.png';

function MenuMedcine() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#6BFFC4] text-[#333] flex flex-col justify-center items-center">
            <div className="menu-container text-center">
                <img 
                    src={doctorIcon} 
                    alt="Doctor Icon" 
                    className="doctor-icon w-48 h-48 rounded-full bg-[#132e97] p-4 mx-auto -mt-10" 
                />
                <h2 className="text-white text-5xl font-bold mt-8 text-stroke-2">Menu du Médecin</h2>
                <p className="text-[#555] italic mt-10">"Press here to create your request"</p>
                
                <button
                    className="request-button bg-[#22D94A] text-white text-xl py-4 px-8 rounded-full font-bold mt-5 hover:bg-[#218838] transition-colors duration-300"
                    onClick={() => navigate('/DemandeIntervention')}
                >
                    Formulaire de demande d'intervention
                </button>
            </div>
        </div>
    );
}

export default MenuMedcine;
