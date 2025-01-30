import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing all necessary components
import Header from "./Header";
import HomePage from "./landing";
import DemandeIntervention from "./DemandeIntervention";
import InterventionOrder from "./InterventionOrder";
import InterventionReport from "./InterventionReport";
import PVReceptionForm from "./PvReception";
import Checklist from "./CheckList";
import MenuMedcine from "./MenuMedcine";
import MenuTechnician from "./MenuTechnician";
import MenuEngineer from "./MenuEngineer";
import RapportPage from "./Page-Tech";
import SuccessPageDemande from "./P-S-demande";
import SuccessPageOrder from "./P-S-order";
import SuccessPageRapport from "./P-S-report";
import SuccessPagePVReception from "./P-S-PvReception";
import SuccessPageChecklist from "./P-S-Checklist";
import EngineerTableOrder from "./TableOrder";
import EngineerCheckList from "./TableChecklist";
import PVReceptionTable from "./TablePvReception";
import LoginPage from "./login";
import SignUpPage from "./SignUp";
import ForgotPassword from "./forgotpass";

// Add the new pages
import Partnership from "./Partnership";
import BookAppointment from "./BookAppointment";
import PrivacyPolicy from "./PrivacyPolicy";
import ManageAppointments from "./ManageAppointments";
import ContactUs from "./contactUS.jsx"; // Import ContactUs page
import About from "./about"; // Import About page

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/DemandeIntervention" element={<DemandeIntervention />} />
        <Route path="/InterventionOrder" element={<InterventionOrder />} />
        <Route path="/InterventionReport" element={<InterventionReport />} />
        <Route path="/PVReceptionForm" element={<PVReceptionForm />} />
        <Route path="/Checklist" element={<Checklist />} />
        <Route path="/MenuMedcine" element={<MenuMedcine />} />
        <Route path="/MenuTechnician" element={<MenuTechnician />} />
        <Route path="/MenuEngineer" element={<MenuEngineer />} />
        <Route path="/RapportPage" element={<RapportPage />} />
        <Route path="/SuccessPageDemande" element={<SuccessPageDemande />} />
        <Route path="/SuccessPageOrder" element={<SuccessPageOrder />} />
        <Route path="/SuccessPageRapport" element={<SuccessPageRapport />} />
        <Route path="/SuccessPagePVReception" element={<SuccessPagePVReception />} />
        <Route path="/SuccessPageChecklist" element={<SuccessPageChecklist />} />
        <Route path="/EngineerTableOrder" element={<EngineerTableOrder />} />
        <Route path="/EngineerCheckList" element={<EngineerCheckList />} />
        <Route path="/PVReceptionTable" element={<PVReceptionTable />} />
        
        {/* Authentication Pages */}
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* New Routes */}
        <Route path="/Partnership" element={<Partnership />} />
        <Route path="/BookAppointment" element={<BookAppointment />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/ManageAppointments" element={<ManageAppointments />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/About" element={<About />} /> {/* Added route for About page */}
      </Routes>
    </Router>
  );
}

export default App;
