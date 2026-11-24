import React, { useState } from 'react';
import { Calendar, Clock, Car, Phone, Mail, User, CheckCircle2, MessageSquare, AlertCircle, Sparkles, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

const POPULAR_MAKES = [
  'BMW', 'Mercedes-Benz', 'Audi', 'Porsche', 'Lexus', 
  'Tesla', 'Land Rover', 'Volvo', 'Toyota', 'Honda', 'Ford', 'Chevrolet'
];

const SYMPTOMS = [
  { value: 'check-engine', label: '🚨 Check Engine Light is on' },
  { value: 'brakes', label: '🛑 Brakes squealing / grinding / soft pedal' },
  { value: 'no-start', label: '⚡ Car will not start (click sound or dead)' },
  { value: 'battery-alternator', label: '🔋 Battery dead / alternator charging light' },
  { value: 'overheating', label: '🌡️ Engine running hot / coolant leak' },
  { value: 'noise-vibration', label: '🔊 Strange knocking, vibration or clunk' },
  { value: 'ac-heater', label: '❄️ AC blowing warm / heater not working' },
  { value: 'maintenance', label: '🔧 Scheduled factory maintenance / tune-up' },
  { value: 'ppi', label: '🔍 Pre-Purchase Inspection (Used car purchase)' },
  { value: 'other', label: '📝 Other custom mechanical symptom' }
];

const TIME_WINDOWS = [
  'Morning (8:00 AM – 11:00 AM)',
  'Mid-Day (11:00 AM – 2:00 PM)',
  'Afternoon (2:00 PM – 5:00 PM)',
  '🚨 Emergency Roadside ASAP (Next Available)'
];

const SERVICE_TOWNS = [
  'Cary, NC', 'Morrisville, NC', 'Apex, NC', 'Raleigh, NC', 
  'Research Triangle Park (RTP)', 'Holly Springs, NC'
];

export default function BookingWidget({ initialService = '', id = "booking-widget" }) {
  const [vehicleInputType, setVehicleInputType] = useState('lookup'); // 'lookup' or 'vin'
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    town: 'Cary, NC',
    vin: '',
    year: '2021',
    make: 'BMW',
    model: 'X5',
    symptom: initialService || 'check-engine',
    symptomDetails: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeWindow: 'Morning (8:00 AM – 11:00 AM)'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // fallback
      }
    }, 800);
  };

  return (
    <div id={id} className="relative bg-[#111827] border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden scroll-mt-28">
      {/* Glow decorative gradients */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Blueprint Header */}
      <div className="relative text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive Intake &amp; Instant Booking Widget
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Schedule Your Mobile Inspection <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Instantly</span>
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base">
          Skip dealership lines. Flat $99 diagnostic is <strong className="text-emerald-400">100% credited</strong> toward your final repair.
        </p>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="relative space-y-6">
          {/* Section 1: Customer Info */}
          <div className="bg-[#0B0F17]/80 rounded-2xl p-5 border border-slate-800">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
              <User className="w-4 h-4 text-orange-400" />
              1. Contact &amp; Driveway Location
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Marcus Vance"
                    className="w-full bg-[#161F30] border border-slate-700 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Mobile Phone Number (For SMS updates) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(919) 555-0199"
                    className="w-full bg-[#161F30] border border-slate-700 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="marcus@example.com"
                    className="w-full bg-[#161F30] border border-slate-700 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Service Town & Street */}
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Driveway / Service Location Address *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Street address (or business parking lot)"
                    className="w-full bg-[#161F30] border border-slate-700 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  City / Triangle Zone
                </label>
                <select
                  name="town"
                  value={formData.town}
                  onChange={handleChange}
                  className="w-full bg-[#161F30] border border-slate-700 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                >
                  {SERVICE_TOWNS.map(town => (
                    <option key={town} value={town}>{town}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Vehicle Details */}
          <div className="bg-[#0B0F17]/80 rounded-2xl p-5 border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                <Car className="w-4 h-4 text-orange-400" />
                2. Vehicle VIN or [Year / Make / Model]
              </h3>
              
              {/* Toggle VIN vs Lookup */}
              <div className="inline-flex p-1 bg-slate-900 border border-slate-700 rounded-xl text-xs">
                <button
                  type="button"
                  onClick={() => setVehicleInputType('lookup')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                    vehicleInputType === 'lookup'
                      ? 'bg-orange-500 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Year / Make / Model
                </button>
                <button
                  type="button"
                  onClick={() => setVehicleInputType('vin')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                    vehicleInputType === 'vin'
                      ? 'bg-orange-500 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  17-Digit VIN
                </button>
              </div>
            </div>

            {vehicleInputType === 'lookup' ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Year</label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full bg-[#161F30] border border-slate-700 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-orange-500"
                  >
                    {Array.from({ length: 30 }, (_, i) => 2026 - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Make</label>
                  <input
                    type="text"
                    name="make"
                    required
                    list="makes-list"
                    value={formData.make}
                    onChange={handleChange}
                    placeholder="e.g. BMW, Porsche, Audi, Lexus"
                    className="w-full bg-[#161F30] border border-slate-700 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                  <datalist id="makes-list">
                    {POPULAR_MAKES.map(m => <option key={m} value={m} />)}
                  </datalist>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Model / Trim</label>
                  <input
                    type="text"
                    name="model"
                    required
                    value={formData.model}
                    onChange={handleChange}
                    placeholder="e.g. X5 xDrive40i, Macan, E350"
                    className="w-full bg-[#161F30] border border-slate-700 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  17-Digit Vehicle Identification Number (VIN)
                </label>
                <input
                  type="text"
                  name="vin"
                  maxLength={17}
                  value={formData.vin}
                  onChange={handleChange}
                  placeholder="e.g. WBA33AY08M..."
                  className="w-full bg-[#161F30] border border-slate-700 rounded-xl py-2.5 px-3 text-sm font-mono tracking-widest uppercase text-white focus:outline-none focus:border-orange-500"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  Found on your driver's door jam, vehicle registration card, or lower driver windshield corner.
                </p>
              </div>
            )}
          </div>

          {/* Section 3: Symptoms & Scheduling */}
          <div className="bg-[#0B0F17]/80 rounded-2xl p-5 border border-slate-800">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-orange-400" />
              3. Primary Symptoms &amp; Preferred Time Window
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Primary Symptom (Drop-down) *
                </label>
                <select
                  name="symptom"
                  value={formData.symptom}
                  onChange={handleChange}
                  className="w-full bg-[#161F30] border border-slate-700 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-orange-500"
                >
                  {SYMPTOMS.map(s => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Preferred Time Window *
                </label>
                <select
                  name="timeWindow"
                  value={formData.timeWindow}
                  onChange={handleChange}
                  className="w-full bg-[#161F30] border border-slate-700 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-orange-500"
                >
                  {TIME_WINDOWS.map(w => (
                    <option key={w} value={w}>{w}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-[#161F30] border border-slate-700 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Additional Symptom Notes (Open text field)
                </label>
                <input
                  type="text"
                  name="symptomDetails"
                  value={formData.symptomDetails}
                  onChange={handleChange}
                  placeholder="e.g. Occurs when braking from 45mph, or started after rain"
                  className="w-full bg-[#161F30] border border-slate-700 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
          </div>

          {/* Form CTA Button (Blueprint Exact Label) */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-base sm:text-lg py-4 px-8 rounded-2xl shadow-glow-orange hover:shadow-glow-amber transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Alerting Mobile Mechanic on Dispatch Radio...</span>
                </>
              ) : (
                <>
                  <Calendar className="w-5 h-5" />
                  <span>[ Confirm My Booking Request ]</span>
                </>
              )}
            </button>
          </div>

          {/* Blueprint Note Below Form */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 flex items-start gap-3">
            <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-white">Note:</strong> Once submitted, our mechanic receives an instant text message alert under the car and will confirm your time slot within minutes via SMS.
            </p>
          </div>
        </form>
      ) : (
        /* Instant SMS Dispatch Simulation Screen */
        <div className="bg-[#0B0F17] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 animate-in fade-in duration-300">
          <div className="text-center max-w-xl mx-auto mb-6">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              Dispatch Request Transmitted!
            </h3>
            <p className="text-sm text-slate-300">
              Mechanic alert sent to technician on duty for <strong className="text-orange-400">{formData.town}</strong>.
            </p>
          </div>

          {/* Simulated Mobile SMS Notification Bubble */}
          <div className="max-w-md mx-auto bg-[#1A2333] border border-slate-700 rounded-2xl p-4 shadow-xl mb-6">
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-2 mb-3 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>919 Mobile Mechanic Automated SMS System</span>
              </div>
              <span>Just now</span>
            </div>

            <div className="bg-[#0F172A] p-3.5 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-200 space-y-2">
              <p>
                👋 <strong>Hello {formData.fullName || 'Neighbor'}!</strong>
              </p>
              <p>
                Our mobile tech received your alert while under the car. We have reserved your window for:
              </p>
              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-700/60 font-mono text-xs space-y-1">
                <div>📅 <strong>Date:</strong> {formData.date}</div>
                <div>⏰ <strong>Window:</strong> {formData.timeWindow}</div>
                <div>🚗 <strong>Vehicle:</strong> {vehicleInputType === 'vin' ? `VIN: ${formData.vin || 'Provided'}` : `${formData.year} ${formData.make} ${formData.model}`}</div>
                <div>📍 <strong>Address:</strong> {formData.address || 'Your Driveway'}, {formData.town}</div>
                <div>💳 <strong>Diagnostic:</strong> $99 (100% Credited to Final Repair)</div>
              </div>
              <p className="text-[11px] text-slate-400">
                A live technician will send you an ETA tracking SMS 30 minutes prior to arrival. Need immediate assistance? Call <a href="tel:9198880919" className="text-orange-400 underline">(919) 888-0919</a>.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-semibold text-slate-400 hover:text-white underline"
            >
              &larr; Book another inspection or edit information
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
