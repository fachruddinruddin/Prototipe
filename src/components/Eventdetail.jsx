import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const EventDetail = () => {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState("");

  const handleRegisterClick = () => {
    setShowEmailInput(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email submitted:", email);
    setShowEmailInput(false); 
  };

  return (
    <div className="px-12 py-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-gray-900">
          Home
        </Link>
        <span>/</span>
        <Link to="/events" className="hover:text-gray-900">
          Events
        </Link>
        <span>/</span>
        <span className="font-bold text-[#343434]">
          Open Source on The School
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Image */}
        <div className="col-span-1 space-y-6 border-r-2 border-gray-400 pr-8">
          <div className="w-full h-56 bg-[#343434] rounded-lg mb-7"></div>

          {/* Event Info Cards */}
          <div className="space-y-6 mx-12 text-[#343434]">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              <span>
                <span className="font-semibold">Sunday 21 - Tuesday 24</span>{" "}
                October 2024
              </span>
            </div>

            <div className="flex items-center gap-3 font-semibold">
              <Clock className="w-5 h-5" />
              <span>08:00 - 12.00</span>
            </div>

            <div className="flex items-center gap-3 font-semibold">
              <MapPin className="w-5 h-5" />
              <span>UDINUS H6</span>
            </div>

            <div className="flex items-center gap-3">
              <Users className="w-5 h-5" />
              <span>
                <span className="font-semibold">50</span> Participant
              </span>
            </div>
          </div>

          {/* Email Input (Muncul di atas tombol Register) */}
          {showEmailInput && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-[#343434] text-white py-3 rounded-lg hover:bg-[#2a2a2a] transition-colors font-semibold"
              >
                Notify Me!
              </button>

              <div className="text-center">
                <span className="text-[#343434] font-bold">
                  <span className="text-gray-500 font-semibold">
                    Registration Opens in
                  </span>{" "}
                  5 days!
                </span>
              </div>

            </form>
          )}

          {/* Tombol Register (Muncul jika input email tidak ditampilkan) */}
          {!showEmailInput && (
            <button
              className="w-full bg-[#343434] text-white py-3 rounded-lg hover:bg-[#2a2a2a] transition-colors"
              onClick={handleRegisterClick}
            >
              Register
            </button>
          )}
        </div>

        {/* Right Column - Event Details */}
        <div className="col-span-2 space-y-6">
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-[#343434] text-white text-sm font-semibold rounded-lg">
              RKT
            </span>
            <span className="px-3 py-1 bg-[#343434] text-white text-sm font-semibold rounded-lg">
              Programming
            </span>
          </div>

          <h1 className="text-2xl text-[#343434] font-bold mb-6">
            Open Source on The School
          </h1>

          <div className="space-y-4 text-[#343434]">
            <p>Hallo Doscomers!!!</p>

            <p>
              Tahun ini, OOTS hadir lebih spesial karena diselenggarakan
              bersamaan dengan FIK FAIR! Jangan lewatkan kesempatan seru dan
              berkesan ini di Universitas Dian Nuswantoro. Dapatkan ilmu dan
              pengalaman dari pemateri-pemateri keren yang siap menginspirasi
              kalian. Dijamin, tahun ini lebih seru daripada sebelumnya!
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
