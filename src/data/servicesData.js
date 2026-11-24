export const SERVICES_DATA = [
  {
    id: 'diagnostics',
    title: 'Computer Diagnostics & Check Engine Light',
    shortDesc: 'Dealership-level bi-directional scanning directly in your driveway.',
    fullDesc: 'We connect cutting-edge Autel and Snap-on diagnostic tablets to read live ECU sensor data, misfire counters, fuel trims, CAN bus faults, and emissions readiness. No guessing—exact root-cause detection.',
    icon: 'Cpu',
    tag: '100% Fee Credited to Repair',
    price: '$99 Flat Diagnostic',
    features: [
      'Full OEM Bi-directional scanning',
      'Live sensor data stream recording',
      'Electronic modules & CAN-bus testing',
      'Clear fault codes & readiness check',
      'Digital health report emailed with photos'
    ]
  },
  {
    id: 'brakes',
    title: 'Brake Pad, Rotor & Sensor Service',
    shortDesc: 'Quiet, premium stopping power installed at your home or office.',
    fullDesc: 'Complete mobile brake replacement utilizing Akebono, Brembo, and OEM ceramic pads with coated anti-corrosion rotors, hardware kits, sensor replacements, and fluid moisture testing.',
    icon: 'Disc',
    tag: '12-Month / 12,000-Mile Warranty',
    price: 'From $189 / axle',
    features: [
      'Ultra-quiet ceramic brake pads',
      'Coated premium rotors (anti-rust)',
      'Brake wear sensor replacement',
      'Caliper pin lubrication & hardware kit',
      'Brake fluid boiling point test'
    ]
  },
  {
    id: 'battery-starter',
    title: 'Battery, Starter & Alternator',
    shortDesc: 'On-site charging & starting system testing and replacement.',
    fullDesc: 'When your car clicks or won’t start, we test cranking amps, alternator ripple voltage, and starter draw. We install high-capacity Interstate and AGM batteries right on site with digital battery registration.',
    icon: 'Zap',
    tag: 'Free System Diagnostic Included',
    price: 'From $149',
    features: [
      'High-amperage conductance battery test',
      'Alternator load & diode testing',
      'Starter solenoid draw verification',
      'BMW / Audi / Porsche battery ECU registration',
      'Eco-friendly core battery recycling'
    ]
  },
  {
    id: 'emergency-roadside',
    title: 'Emergency Roadside Dispatch',
    shortDesc: 'Rapid response roadside assistance across Cary & the Triangle.',
    fullDesc: 'Stuck in a parking garage in Morrisville, on Highway 64, or stranded in your neighborhood? Our equipped mobile repair van dispatches rapidly to solve jump-starts, battery fails, lockouts, and flat tires.',
    icon: 'AlertTriangle',
    tag: 'Priority Dispatch',
    price: 'From $129 dispatch',
    features: [
      'Rapid arrival window across Cary/Morrisville',
      'Commercial heavy-duty jump start unit',
      'Spare tire mounting & pressure check',
      'Mobile fuel delivery (93 Octane / Regular)',
      'On-the-spot no-start electrical triage'
    ]
  },
  {
    id: 'cooling-system',
    title: 'Cooling System & Overheating Repairs',
    shortDesc: 'Radiators, water pumps, thermostats, and pressure testing.',
    fullDesc: 'Engine running hot? We perform vacuum cooling system pressure testing, diagnose thermostat failures, replace electric and mechanical water pumps, and vacuum bleed coolant with zero trapped air bubbles.',
    icon: 'Thermometer',
    tag: 'OEM Spec Coolant',
    price: 'From $199',
    features: [
      'Cooling system pressure decay test',
      'Electric & mechanical water pump replacement',
      'Thermostat & housing refresh',
      'Vacuum-fill coolant air evacuation',
      'Radiator hose & expansion tank inspection'
    ]
  },
  {
    id: 'tune-up',
    title: 'Scheduled Maintenance & Spark Plugs',
    shortDesc: 'Factory-specified 30k, 60k, 90k maintenance done in your driveway.',
    fullDesc: 'Keep your warranty intact without taking a day off or sitting in a dealership lounge. We install Iridium spark plugs, OEM ignition coils, serpentine drive belts, and cabin/engine filters.',
    icon: 'Wrench',
    tag: 'Preserves Factory Warranty',
    price: 'From $159',
    features: [
      'Laser-welded Iridium / Platinum spark plugs',
      'Ignition coil pack testing & replacement',
      'Serpentine belt & tensioner replacement',
      'High-flow engine & HEPA cabin filters',
      'Comprehensive 40-point safety inspection'
    ]
  },
  {
    id: 'pre-purchase',
    title: 'Pre-Purchase Vehicle Inspection (PPI)',
    shortDesc: 'Know before you buy. 150-point mobile inspection with digital report.',
    fullDesc: 'Buying a used car from a private seller or dealership in Raleigh or Cary? We inspect on-site with paint depth meters, full OBD-II computer scans, mechanical check, and 50+ photos sent to your phone.',
    icon: 'ShieldCheck',
    tag: 'Buyer Protection',
    price: '$149 Flat Rate',
    features: [
      '150-Point mechanical & body check',
      'Paint thickness meter test for prior accidents',
      'Full ECU scan for hidden cleared trouble codes',
      'Undercarriage leak & suspension inspection',
      'Color PDF report & itemized repair estimate'
    ]
  },
  {
    id: 'suspension',
    title: 'Suspension, Shocks & Steering',
    shortDesc: 'Eliminate clunks, squeaks, and uneven tire wear at home.',
    fullDesc: 'We replace worn control arms, ball joints, sway bar end links, tie rods, and strut assemblies to restore that smooth, tight German or domestic ride feel.',
    icon: 'Activity',
    tag: 'Precision Ride Quality',
    price: 'From $219',
    features: [
      'Control arm & bushing replacement',
      'Heavy-duty sway bar links & bushings',
      'Inner and outer tie rod replacements',
      'Strut and shock absorber mounting',
      'Pre-alignment geometric road check'
    ]
  }
];

export const SERVICE_AREAS = [
  {
    name: 'Cary',
    zip: '27511, 27513, 27518, 27519',
    description: 'Our primary headquarters hub. Fast 15-30 min response time across Preston, Lochmere, Amberly, and Cary Park.',
    highlight: 'Fastest Response Hub'
  },
  {
    name: 'Morrisville',
    zip: '27560',
    description: 'Serving Perimeter Park, Park West Village, Davis Drive tech corridors, and residential neighborhoods.',
    highlight: 'Office & Tech Park Service'
  },
  {
    name: 'Apex',
    zip: '27502, 27523, 27539',
    description: 'Peak of good living! Providing on-site repairs across Beaver Creek, Bella Casa, and Sweetwater.',
    highlight: 'Full Driveway Service'
  },
  {
    name: 'Raleigh & West Raleigh',
    zip: '27606, 27607, 27612, 27613',
    description: 'Serving West Raleigh, PNC Arena area, Brier Creek, North Hills, and Glenwood corridor.',
    highlight: 'Metropolitan Coverage'
  },
  {
    name: 'Research Triangle Park (RTP)',
    zip: '27709',
    description: 'Get your car serviced in your corporate parking deck while you attend meetings. Zero downtime.',
    highlight: 'Workplace Servicing'
  },
  {
    name: 'Holly Springs & Fuquay-Varina',
    zip: '27540, 27526',
    description: 'Prompt mobile dispatch for growing Triangle families and luxury commuters.',
    highlight: 'South Triangle Coverage'
  }
];
