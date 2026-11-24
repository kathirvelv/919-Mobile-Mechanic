export const PRICING_TIERS = [
  {
    title: "Flat-Rate Mobile Diagnostic",
    price: "$99",
    period: "credited 100% to repair",
    badge: "Most Popular",
    highlight: true,
    description: "The gold standard diagnosis. If we complete the suggested repair, this $99 is completely wiped from your invoice.",
    features: [
      "Dealership-level bi-directional scanner hookup",
      "Live data stream & sensor validation",
      "Full mechanical physical inspection",
      "Itemized upfront estimate before touching a bolt",
      "100% credited toward repair labor/parts",
      "Performed right in your driveway or office lot"
    ],
    ctaText: "Book Diagnostic Inspection",
    link: "/book"
  },
  {
    title: "Emergency Roadside Dispatch",
    price: "$129",
    period: "priority rapid dispatch",
    badge: "Emergency 24/7",
    highlight: false,
    description: "Stuck on the road or stranded with a car that won't crank? Our fully-tooled mobile van responds with urgency.",
    features: [
      "Rapid dispatch across Cary & Triangle area",
      "High-power commercial jump-starts",
      "Flat tire changes & rim inspection",
      "Emergency battery replacement on the spot",
      "Emergency coolant & fuel top-up",
      "Direct mobile phone SMS updates from mechanic"
    ],
    ctaText: "Emergency Roadside Help",
    link: "/emergency"
  },
  {
    title: "Pre-Purchase Used Car Inspection",
    price: "$149",
    period: "comprehensive mobile PPI",
    badge: "Buyer Protection",
    highlight: false,
    description: "Never buy a lemon. We travel to the seller's driveway or dealership lot to inspect before you hand over cash.",
    features: [
      "150-Point mechanical & structural inspection",
      "Digital paint thickness gauge for body repair detection",
      "Full OBD-II ECU scan for hidden cleared codes",
      "Undercarriage, suspension, and leak assessment",
      "Road test evaluation & brake wear check",
      "Comprehensive digital photo report sent via email"
    ],
    ctaText: "Schedule PPI Inspection",
    link: "/book"
  }
];

export const PRICING_CALCULATOR_SERVICES = [
  {
    id: "check-engine",
    name: "Check Engine Light / Electrical Diagnostic",
    estRange: "$99 - $240",
    diagCredited: true,
    typicalParts: "Sensors, Solenoid, Spark Plugs, or Harness",
    note: "100% of $99 diagnostic fee credited when repaired with us."
  },
  {
    id: "brakes-pads-rotors",
    name: "Brake Pad & Rotor Replacement (Per Axle)",
    estRange: "$240 - $380",
    diagCredited: true,
    typicalParts: "Akebono Ceramic Pads + Coated Rotors + Sensors",
    note: "Includes fluid check, hardware clips, and hub cleaning."
  },
  {
    id: "battery-replacement",
    name: "Battery Test & On-Site Replacement",
    estRange: "$165 - $295",
    diagCredited: false,
    typicalParts: "Interstate AGM / Flooded Battery with 3-Yr Warranty",
    note: "Includes battery registration for BMW, Audi, Mercedes."
  },
  {
    id: "starter-alternator",
    name: "Starter Motor or Alternator Replacement",
    estRange: "$320 - $550",
    diagCredited: true,
    typicalParts: "Denso / Bosch OEM Alternator or Starter",
    note: "Includes belt tension check and charging circuit test."
  },
  {
    id: "cooling-waterpump",
    name: "Water Pump, Thermostat & Coolant Flush",
    estRange: "$350 - $650",
    diagCredited: true,
    typicalParts: "OEM Water Pump, Thermostat, Genuine Coolant",
    note: "Vacuum fill eliminates hot air pockets in the cooling block."
  },
  {
    id: "no-start-triage",
    name: "Vehicle No-Start Diagnostic & Repair",
    estRange: "$99 - $350",
    diagCredited: true,
    typicalParts: "Fuel Pump, Relay, Crank Sensor or Starter",
    note: "Full $99 diagnostic credited to final repair bill."
  }
];

export const COMPARISON_DATA = [
  {
    feature: "Diagnostic Fee Credit",
    triangleMobile: "100% Credited to your repair",
    dealership: "Rarely ($180 - $250 non-refundable)",
    indyShop: "Sometimes ($120 - $160)"
  },
  {
    feature: "Service Location",
    triangleMobile: "Your Driveway or Office Parking Lot",
    dealership: "You tow or drive to their facility",
    indyShop: "You drive to shop and arrange ride"
  },
  {
    feature: "Wait Time / Turnaround",
    triangleMobile: "Same-Day / Next-Day in 1-2 hours",
    dealership: "3 to 7 days sitting on the back lot",
    indyShop: "1 to 3 days backlog"
  },
  {
    feature: "Warranty",
    triangleMobile: "12-Month / 12,000-Mile Nationwide",
    dealership: "12-Month (Dealer-only terms)",
    indyShop: "6 to 12 months"
  },
  {
    feature: "Direct Mechanic Contact",
    triangleMobile: "Direct SMS & face-to-face with your tech",
    dealership: "Commissioned Service Advisors only",
    indyShop: "Front desk clerk only"
  },
  {
    feature: "Towing Needed?",
    triangleMobile: "ZERO towing costs ($0)",
    dealership: "$120 - $250 flatbed tow charge",
    indyShop: "$100 - $180 flatbed tow charge"
  },
  {
    feature: "Driveway Cleanliness",
    triangleMobile: "Guaranteed spotless (absorbent mats used)",
    dealership: "N/A (At facility)",
    indyShop: "N/A (At facility)"
  }
];
