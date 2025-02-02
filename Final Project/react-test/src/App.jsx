import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing all necessary components
import Header from "./layout/Header";
import HomePage from "./pages/landing";
import DemandeIntervention from "./components/Forms/DemandeIntervention";
import InterventionOrder from "./components/Forms/InterventionOrder";
import InterventionReport from "./components/Forms/InterventionReport";
import PVReceptionForm from "./components/Forms/PvReception";
import Checklist from "./components/Forms/CheckList";
import MenuMedcine from "./layout/MenuMedcine";
import MenuTechnician from "./layout/MenuTechnician";
import MenuEngineer from "./layout/MenuEngineer";
import RapportPage from "./Tables/Page-Tech";
import SuccessPageDemande from "./components/SuccessPages/P-S-demande";
import SuccessPageOrder from "./components/SuccessPages/P-S-order";
import SuccessPageRapport from "./components/SuccessPages/P-S-report";
import SuccessPagePVReception from "./components/SuccessPages/P-S-PvReception";
import SuccessPageChecklist from "./components/SuccessPages/P-S-Checklist";
import EngineerTableOrder from "./Tables/TableOrder";
import EngineerCheckList from "./Tables/TableChecklist";
import PVReceptionTable from "./Tables/TablePvReception";
import LoginPage from "./pages/login";
import SignUpPage from "./components/Forms/SignUp";
import ForgotPassword from "./pages/forgotpass";
import Partnership from "./Partnership";
import BookAppointment from "./BookAppointment";
import PrivacyPolicy from "./PrivacyPolicy";
import ManageAppointments from "./ManageAppointments";
import ContactUs from "./contactUS.jsx"; 
import About from "./about"; 

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
