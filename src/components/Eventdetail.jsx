import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const EventDetail = () => {
  return (
    <div className="px-12 py-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-gray-900">Home</Link>
        <span>/</span>
        <Link to="/events" className="hover:text-gray-900">Events</Link>
        <span>/</span>
        <span className="text-gray-900">Open Source on The School</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <div>
          <div className="w-full h-72 bg-[#343434] rounded-lg mb-6"></div>
          
          {/* Event Info Cards */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              <span>Sunday 21 - Tuesday 24 October 2024</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              <span>08:00 - 12.00</span>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>UDINUS H6</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5" />
              <span>50 Participant</span>
            </div>

            <button className="w-full bg-[#343434] text-white py-3 rounded-lg hover:bg-[#2a2a2a] transition-colors">
              Register
            </button>
          </div>
        </div>

        {/* Right Column - Event Details */}
        <div>
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-[#343434] text-white text-sm rounded-full">
              RKT
            </span>
            <span className="px-3 py-1 bg-[#343434] text-white text-sm rounded-full">
              Programming
            </span>
          </div>

          <h1 className="text-3xl font-bold mb-6">Open Source on The School</h1>

          <div className="space-y-4 text-gray-700">
            <p>Hallo Doscomers!!!</p>

            <p>
              Tahun ini, OOTS hadir lebih spesial karena diselenggarakan bersamaan dengan FIK FAIR! 
              Jangan lewatkan kesempatan seru dan berkesan ini di Universitas Dian Nuswantoro. 
              Dapatkan ilmu dan pengalaman dari pemateri-pemateri keren yang siap menginspirasi kalian. 
              Dijamin, tahun ini lebih seru daripada sebelumnya!
            </p>

            <p>Pemateri dan materi yang akan dibawakan:</p>

            <div className="mt-6">
              <p className="mb-2">Informasi lebih lanjut :</p>
              <p>+62 899-5873-658 (wildan)</p>
              <p>"Tailwind"</p>
              <p className="mt-4">+62 877-0031-3085 (sulthan)</p>
              <p>"Git"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;