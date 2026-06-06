export const projects = [
  {
    id: "stirling-engine",
    title: "Stirling Engine",
    category: "Machine Design & Manufacturing",
    semester: "Fall 2025",
    shortDesc: "Designed, modeled, and machined a fully functional Stirling engine.",
    longDesc: "During the Fall 2025 semester, I designed and manufactured a Stirling engine inspired by a carnival theme, with the rotating assembly modeled after a Ferris wheel. I created a full 3D assembly of the engine in SolidWorks, integrating both mechanical function and aesthetic design. I machined all major components, excluding fasteners and bearings, in UPenn’s precision manufacturing lab using the lathe, mill, and CNC programs in Mastercam and Prototrak. The two-piece bedplate silhouette was laser-cut by OshCut, and I laser-cut colorful acrylic inserts for the Ferris wheel and carriages to enhance the visual design. When heated with a blowtorch applied to the air chamber, the engine operates smoothly, with the flywheel reaching speeds above 1200 RPM on test day.",
    tags: ["SolidWorks", "Mastercam", "CNC", "GD&T", "Tolerance Analysis"],
    color: "#c84b2f",
    images: [
      "/images/projects/stirling/stirling-engine-actual-01.jpg",
      "/images/projects/stirling/stirling-engine-actual-02.jpg",
      "/images/projects/stirling/stirling-engine-actual-03.jpg",
      "/images/projects/stirling/stirling-engine-render-01.jpg",
      "/images/projects/stirling/stirling-engine-render-02.jpg",
      "/images/projects/stirling/stirling-engine-render-03.jpg",
    ],
  },
  {
    id: "bldc-balancing",
    title: "BLDC Motor Balancing System",
    category: "Controls & Mechatronics",
    semester: "Fall 2025",
    shortDesc: "Derived a nonlinear state-space model for a motor-actuated rotating rod, designed a PID controller in MATLAB, and validated it on physical hardware.",
    longDesc: "The system: a brushless DC motor driving a rotating rod that had to hold a target angle against perturbations. I derived the full nonlinear equations of motion, then linearized around the operating point to produce a state-space model suitable for classical control design. Designed and tuned a PID controller in MATLAB — not just tuned by feel, but swept gain combinations systematically and analyzed transient response, overshoot, and steady-state error across perturbation magnitudes and noise levels. Then deployed the controller to physical hardware: commanded real motor throttle via IMU feedback over serial, and verified that the closed-loop experimental response matched simulation predictions across multiple gain sets. The match was tight enough that the simulation was actually useful.",
    tags: ["MATLAB", "PID Control", "State-Space", "IMU", "Embedded Systems"],
    color: "#2a6496",
    images: [],
  },
  {
    id: "supercapacitor",
    title: "Supercapacitor Assembly & Characterization",
    category: "Electrochemical Energy",
    semester: "Spring 2026",
    shortDesc: "Hand-assembled and characterized a symmetric supercapacitor at ETH Zürich's Electrochemical Energy Systems Laboratory.",
    longDesc: "At ETH Zürich's Electrochemical Energy Systems Laboratory, I assembled a symmetric supercapacitor from scratch using activated carbon electrodes in a Swagelok cell configuration — a format that demands careful attention to electrode loading, electrolyte filling, and cell sealing to avoid contamination or parasitic resistance. Characterized the device using cyclic voltammetry across multiple scan rates and galvanostatic charge-discharge cycling to extract gravimetric capacitance, coulombic efficiency, and electrolyte degradation onset. Analyzed all data in MATLAB. The project required understanding not just what the measurements show, but what physical mechanisms drive them — double-layer capacitance, ESR, and electrolyte breakdown.",
    tags: ["Electrochemistry", "Cyclic Voltammetry", "MATLAB", "Energy Storage"],
    color: "#2a7a4b",
    images: [],
  },
  {
    id: "bottle-rocket",
    title: "Bottle Rocket & Propulsion Simulation",
    category: "Propulsion & Simulation",
    semester: "Spring 2025",
    shortDesc: "Built and iterated on a butane-propelled water rocket, then developed a calibrated propulsion simulation in Python to predict flight trajectories.",
    longDesc: "Designed and built a butane-propelled water bottle rocket with modifications informed by aerodynamic intuition — nose cone geometry, fin sizing, water fill fraction. The interesting part was the simulation: built a propulsion model in Python that integrated thrust curves derived from pressure measurements with a 6-DOF flight dynamics model, then iterated the model parameters to match empirical flight data from instrumented launches. Once the simulation was calibrated, it was actually predictive — adjusting launch angle or water fraction in the model gave accurate trajectory estimates before committing to a physical test. That feedback loop between experiment and simulation is the part that mattered.",
    tags: ["Python", "SolidWorks", "Aerodynamics", "Propulsion", "Simulation"],
    color: "#6b3fa0",
    images: [],
  },
];

export const experience = [
  {
    company: "Enfra Solutions",
    role: "Mechanical Engineer Intern",
    period: "Summer 2025",
    location: "Dallas, TX",
    bullets: [
      "Delivered finalized AutoCAD models of complete HVAC ductwork and piping systems for construction plans within the Novant Health hospital network, contributing to the largest Energy-as-a-Service transaction in U.S. healthcare history.",
      "Created comprehensive 3D models of existing ductwork and piping layouts in Revit, coordinating with mechanical teams and point cloud data in ReCap to ensure spatial accuracy and support future renovation planning.",
      "Drafted detailed reports quantifying energy and monetary savings by integrating metered energy consumption data with utility bills, verifying that facility performance met guaranteed energy efficiency targets.",
    ],
    tags: ["AutoCAD", "Revit", "Energy Systems", "HVAC"],
  },
  {
    company: "ETH Zürich",
    role: "Exchange Student — Electrochemical Energy Systems Lab",
    period: "Spring 2026",
    location: "Zürich, Switzerland",
    bullets: [
      "Fabricated and characterized electrochemical energy storage devices at the laboratory level as part of the Electrochemical Energy Systems course.",
      "Conducted cyclic voltammetry and galvanostatic cycling experiments; analyzed results in MATLAB to extract device performance metrics.",
    ],
    tags: ["Research", "Electrochemistry", "MATLAB"],
  },
  {
    company: "Engineers Without Borders at Penn",
    role: "Project Team Member",
    period: "Sept 2023 – May 2025",
    location: "Philadelphia, PA",
    bullets: [
      "Produced AutoCAD construction drawings for an ADA-compliant accessibility ramp, coordinating with professional advisors and local stakeholders to meet safety and accessibility standards.",
    ],
    tags: ["AutoCAD", "Community Engineering"],
  },
];

export const skills = {
  "CAD & Modeling": ["SolidWorks", "AutoCAD", "Revit", "COMSOL"],
  "Programming": ["Python", "MATLAB", "Java", "Arduino"],
  "Manufacturing": ["CNC / Mastercam", "Lathe & Mill", "GD&T", "Tolerance Stack-up"],
  "Controls": ["PID Design", "State-Space Modeling", "IMU Integration", "Mechatronics"],
  "Tools": ["ReCap", "DraftSight", "Git", "LaTeX"],
};
