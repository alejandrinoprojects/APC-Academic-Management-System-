/**
 * APC Academic Architecture Suite
 * Historical Curriculum Editions Dataset & Dedicated Flowchart Engine
 * File: js/past_flowchart_engine.js
 * 
 * Contains verified authentic historical curriculums for Asia Pacific College:
 * 1. BSCpE Curriculum 2021 Edition (AY 2021–2025, REV 2, 12 Trimesters, 170.0 Units, 72 Courses)
 * 2. BSCpE Curriculum 2018 Edition (AY 2018–2021, REV 1, 12 Trimesters, 174.0 Units, 74 Courses)
 * 3. BSCpE Curriculum 2015 Heritage Edition (AY 2015–2018, HERITAGE, 15 Trimesters, 212.0 Units, 88 Courses)
 * 4. BSCpE Curriculum 2010 Foundation Edition (AY 2010–2015, LEGACY, 15 Trimesters, 216.0 Units, 90 Courses)
 */

(function(window) {
  'use strict';

  // =========================================================================
  // 1. HISTORICAL EDITIONS REGISTRY & METADATA
  // =========================================================================
  const PAST_EDITIONS_META = {
    'BSCpE-2021': {
      id: 'BSCpE-2021',
      editionTitle: 'BSCpE Curriculum 2021 Edition',
      generation: 'OBE Generation 2 Baseline',
      academicYears: 'AY 2021–2025',
      badge: 'REV 2',
      badgeColor: 'bg-emerald-950/40 text-emerald-400 border-emerald-800/60',
      bannerBorder: 'border-t-emerald-600',
      totalYears: 4,
      totalTerms: 12,
      totalUnits: '170.0 u',
      totalCourses: '72 Subj',
      yearHeaders: [
        { year: 1, ay: 'AY 2021–2022', title: 'Foundational Engineering & Math', units: '46.0u', bg: 'bg-[#002855]', text: 'text-white' },
        { year: 2, ay: 'AY 2022–2023', title: 'Core Hardware, Circuits & Software', units: '48.0u', bg: 'bg-[#0d3b66]', text: 'text-white' },
        { year: 3, ay: 'AY 2023–2024', title: 'Embedded Systems & Networks', units: '48.0u', bg: 'bg-[#1a365d]', text: 'text-white' },
        { year: 4, ay: 'AY 2024–2025', title: 'Design Capstone & Industry Practicum', units: '28.0u', bg: 'bg-[#1f293d]', text: 'text-white' }
      ]
    },
    'BSCpE-2018': {
      id: 'BSCpE-2018',
      editionTitle: 'BSCpE Curriculum 2018 Edition',
      generation: 'Initial K-12 Model Transition',
      academicYears: 'AY 2018–2021',
      badge: 'REV 1',
      badgeColor: 'bg-blue-950/40 text-blue-400 border-blue-800/60',
      bannerBorder: 'border-t-blue-600',
      totalYears: 4,
      totalTerms: 12,
      totalUnits: '174.0 u',
      totalCourses: '74 Subj',
      yearHeaders: [
        { year: 1, ay: 'AY 2018–2019', title: 'K-12 Transition Foundation', units: '46.0u', bg: 'bg-[#002855]', text: 'text-white' },
        { year: 2, ay: 'AY 2019–2020', title: 'Applied Hardware, Electronics & Logic', units: '50.0u', bg: 'bg-[#0d3b66]', text: 'text-white' },
        { year: 3, ay: 'AY 2020–2021', title: 'Microprocessors, Control & Systems', units: '50.0u', bg: 'bg-[#1a365d]', text: 'text-white' },
        { year: 4, ay: 'AY 2021–2022', title: 'Specialized Practicum & Capstone', units: '28.0u', bg: 'bg-[#1f293d]', text: 'text-white' }
      ]
    },
    'BSCpE-2015': {
      id: 'BSCpE-2015',
      editionTitle: 'BSCpE Curriculum 2015 Heritage Edition',
      generation: '5-Year Trimester Engineering Program',
      academicYears: 'AY 2015–2018',
      badge: 'HERITAGE',
      badgeColor: 'bg-slate-800 text-slate-300 border-slate-700',
      bannerBorder: 'border-t-slate-500',
      totalYears: 5,
      totalTerms: 15,
      totalUnits: '212.0 u',
      totalCourses: '88 Subj',
      yearHeaders: [
        { year: 1, ay: 'AY 2015–2016', title: 'Freshman Math, Physics & Chemistry', units: '44.0u', bg: 'bg-[#002855]', text: 'text-white' },
        { year: 2, ay: 'AY 2016–2017', title: 'Sophomore Discrete Math & Engineering', units: '46.0u', bg: 'bg-[#0d3b66]', text: 'text-white' },
        { year: 3, ay: 'AY 2017–2018', title: 'Junior Circuits, Electronics & Software', units: '46.0u', bg: 'bg-[#1a365d]', text: 'text-white' },
        { year: 4, ay: 'AY 2018–2019', title: 'Senior Digital Logic & Microprocessors', units: '44.0u', bg: 'bg-[#1f293d]', text: 'text-white' },
        { year: 5, ay: 'AY 2019–2020', title: 'Terminal Capstone & 1000h Industry OJT', units: '32.0u', bg: 'bg-[#111827]', text: 'text-white' }
      ]
    },
    'BSCpE-2010': {
      id: 'BSCpE-2010',
      editionTitle: 'BSCpE Curriculum 2010 Foundation Edition',
      generation: '5-Year Foundation Curriculum',
      academicYears: 'AY 2010–2015',
      badge: 'LEGACY',
      badgeColor: 'bg-slate-800 text-slate-400 border-slate-700',
      bannerBorder: 'border-t-slate-400',
      totalYears: 5,
      totalTerms: 15,
      totalUnits: '216.0 u',
      totalCourses: '90 Subj',
      yearHeaders: [
        { year: 1, ay: 'AY 2010–2011', title: 'College Algebra, Trig & Sciences', units: '45.0u', bg: 'bg-[#002855]', text: 'text-white' },
        { year: 2, ay: 'AY 2011–2012', title: 'Calculus, Mechanics & Programming', units: '47.0u', bg: 'bg-[#0d3b66]', text: 'text-white' },
        { year: 3, ay: 'AY 2012–2013', title: 'Electric Circuits & Solid State Devices', units: '46.0u', bg: 'bg-[#1a365d]', text: 'text-white' },
        { year: 4, ay: 'AY 2013–2014', title: 'Logic Systems, Computer Arch & Data', units: '46.0u', bg: 'bg-[#1f293d]', text: 'text-white' },
        { year: 5, ay: 'AY 2014–2015', title: 'CpE Project Design & Comprehensive OJT', units: '32.0u', bg: 'bg-[#111827]', text: 'text-white' }
      ]
    }
  };

  // =========================================================================
  // 2. DATASETS GENERATOR FOR THE 4 HISTORICAL EDITIONS
  // =========================================================================

  // --- BSCpE 2021 Edition (72 Courses, 170.0 Units, 12 Trimesters) ---
  const PAST_COURSES_2021 = [
    // Year 1, Term 1 (Col 1)
    { col: 1, row: 1, year: 1, term: 1, code: "CALCONE", title: "Calculus 1", units: 3.0, lec: 3, lab: 0, group: "Basic Engineering", prereqs: [], desc: "Functions, limits, continuity, derivatives and algebraic applications." },
    { col: 1, row: 2, year: 1, term: 1, code: "ENGCHEM", title: "Chemistry for Engineers", units: 3.0, lec: 3, lab: 0, group: "Basic Engineering", prereqs: [], desc: "Core concepts of chemistry in engineering applications." },
    { col: 1, row: 3, year: 1, term: 1, code: "ENGCHLB", title: "Chemistry for Engineers Lab", units: 1.0, lec: 0, lab: 3, group: "Basic Engineering", prereqs: [], desc: "Laboratory verification of general chemistry principles." },
    { col: 1, row: 4, year: 1, term: 1, code: "CPEDISC", title: "Computer Engineering as a Discipline", units: 1.0, lec: 1, lab: 0, group: "Professional Core", prereqs: [], desc: "Introduction to CpE profession, ethics, and career pathways." },
    { col: 1, row: 5, year: 1, term: 1, code: "PROGLOD", title: "Programming Logic and Design", units: 2.0, lec: 1, lab: 3, group: "Professional Core", prereqs: [], desc: "Problem solving, flowcharts, pseudocode, and algorithm design." },
    { col: 1, row: 6, year: 1, term: 1, code: "GETHICS", title: "Ethics", units: 3.0, lec: 3, lab: 0, group: "General Education", prereqs: [], desc: "Principles of ethical behavior in modern society." },
    { col: 1, row: 7, year: 1, term: 1, code: "PEDUONE", title: "Physical Education 1", units: 2.0, lec: 2, lab: 0, group: "Institutional", prereqs: [], desc: "Physical fitness and wellness foundations." },
    { col: 1, row: 8, year: 1, term: 1, code: "NATSER1", title: "NSTP 1", units: 3.0, lec: 3, lab: 0, group: "Institutional", prereqs: [], desc: "Civic welfare and community service." },

    // Year 1, Term 2 (Col 2)
    { col: 2, row: 1, year: 1, term: 2, code: "CALCTWO", title: "Calculus 2", units: 3.0, lec: 3, lab: 0, group: "Basic Engineering", prereqs: ["CALCONE"], desc: "Integral calculus and geometric applications." },
    { col: 2, row: 2, year: 1, term: 2, code: "PHYENLC", title: "Physics for Engineers Lecture", units: 3.0, lec: 3, lab: 0, group: "Basic Engineering", prereqs: ["CALCONE"], desc: "Mechanics, kinematics, and energy transfer." },
    { col: 2, row: 3, year: 1, term: 2, code: "PHYENLB", title: "Physics for Engineers Lab", units: 1.0, lec: 0, lab: 3, group: "Basic Engineering", prereqs: ["CALCONE"], desc: "Experimental physics measurements and verification." },
    { col: 2, row: 4, year: 1, term: 2, code: "OBJPROG", title: "Object Oriented Programming", units: 2.0, lec: 1, lab: 3, group: "Professional Core", prereqs: ["PROGLOD"], desc: "OOP principles, classes, inheritance, and polymorphism." },
    { col: 2, row: 5, year: 1, term: 2, code: "PHILHIS", title: "Readings in Philippine History", units: 3.0, lec: 3, lab: 0, group: "General Education", prereqs: [], desc: "Primary sources of Philippine history." },
    { col: 2, row: 6, year: 1, term: 2, code: "PEDUTWO", title: "Physical Education 2", units: 2.0, lec: 2, lab: 0, group: "Institutional", prereqs: ["PEDUONE"], desc: "Rhythmic activities and recreational dance." },
    { col: 2, row: 7, year: 1, term: 2, code: "NATSER2", title: "NSTP 2", units: 3.0, lec: 3, lab: 0, group: "Institutional", prereqs: ["NATSER1"], desc: "Community engagement projects." },

    // Year 1, Term 3 (Col 3)
    { col: 3, row: 1, year: 1, term: 3, code: "ENGDATA", title: "Engineering Data Analysis", units: 3.0, lec: 3, lab: 0, group: "Basic Engineering", prereqs: ["CALCONE"], desc: "Probability distributions, hypothesis testing, and regression." },
    { col: 3, row: 2, year: 1, term: 3, code: "ELECIRK", title: "Fundamentals of Electrical Circuits", units: 3.0, lec: 3, lab: 0, group: "Allied", prereqs: ["PHYENLC", "PHYENLB"], desc: "Ohm's, Kirchhoff's, mesh and nodal analysis." },
    { col: 3, row: 3, year: 1, term: 3, code: "CRKTLAB", title: "Electrical Circuits Lab", units: 1.0, lec: 0, lab: 3, group: "Allied", prereqs: ["PHYENLC", "PHYENLB"], desc: "DC and AC circuit laboratory experiments." },
    { col: 3, row: 4, year: 1, term: 3, code: "ECONOMC", title: "Engineering Economics", units: 3.0, lec: 3, lab: 0, group: "Basic Engineering", prereqs: [], desc: "Time value of money, rate of return, and cost analysis." },
    { col: 3, row: 5, year: 1, term: 3, code: "DATSTRC", title: "Data Structures and Algorithms", units: 2.0, lec: 1, lab: 3, group: "Professional Core", prereqs: ["OBJPROG"], desc: "Linked lists, stacks, queues, trees, and graphs." },
    { col: 3, row: 6, year: 1, term: 3, code: "MATWORL", title: "Mathematics for the Modern World", units: 3.0, lec: 3, lab: 0, group: "General Education", prereqs: [], desc: "Mathematical reasoning in practical scenarios." },
    { col: 3, row: 7, year: 1, term: 3, code: "PEDUTRI", title: "Physical Education 3", units: 2.0, lec: 2, lab: 0, group: "Institutional", prereqs: ["PEDUTWO"], desc: "Team sports and fitness strategy." },

    // Year 2, Term 1 (Col 4)
    { col: 4, row: 1, year: 2, term: 1, code: "DISCMAT", title: "Discrete Mathematics", units: 3.0, lec: 3, lab: 0, group: "Basic Engineering", prereqs: ["CALCTWO"], desc: "Set theory, boolean algebra, graph theory, and logic." },
    { col: 4, row: 2, year: 2, term: 1, code: "DIEQUAT", title: "Differential Equations", units: 3.0, lec: 3, lab: 0, group: "Basic Engineering", prereqs: ["CALCTWO"], desc: "First and higher order ODEs, Laplace transforms." },
    { col: 4, row: 3, year: 2, term: 1, code: "OPRSYST", title: "Operating Systems", units: 3.0, lec: 3, lab: 0, group: "Professional Core", prereqs: ["DATSTRC"], desc: "Process scheduling, synchronization, and memory management." },
    { col: 4, row: 4, year: 2, term: 1, code: "MOBCAPP", title: "Mobile Code and App Dev", units: 3.0, lec: 1, lab: 3, group: "Professional Core", prereqs: ["OBJPROG"], desc: "Mobile operating environments and native applications." },
    { col: 4, row: 5, year: 2, term: 1, code: "PEDUFOR", title: "Physical Education 4", units: 2.0, lec: 2, lab: 0, group: "Institutional", prereqs: ["PEDUTRI"], desc: "Recreational sports and wellness." },
    { col: 4, row: 6, year: 2, term: 1, code: "RIZLIFE", title: "Life and Works of Rizal", units: 3.0, lec: 3, lab: 0, group: "General Education", prereqs: [], desc: "Writings and historical significance of Jose Rizal." },

    // Year 2, Term 2 (Col 5)
    { col: 5, row: 1, year: 2, term: 2, code: "NUMERCL", title: "Numerical Methods", units: 3.0, lec: 3, lab: 0, group: "Basic Engineering", prereqs: ["DIEQUAT"], desc: "Root finding, linear systems, curve fitting, and integration." },
    { col: 5, row: 2, year: 2, term: 2, code: "ELEXCKT", title: "Electronics Circuits Lecture", units: 3.0, lec: 3, lab: 0, group: "Allied", prereqs: ["ELECIRK", "CRKTLAB"], desc: "Diodes, BJT, FET, and operational amplifier devices." },
    { col: 5, row: 3, year: 2, term: 2, code: "ELEXLAB", title: "Electronics Circuits Lab", units: 1.0, lec: 0, lab: 3, group: "Allied", prereqs: ["ELECIRK", "CRKTLAB"], desc: "Electronic circuits testing and breadboard experiments." },
    { col: 5, row: 4, year: 2, term: 2, code: "PURPCOM", title: "Purposive Communication", units: 3.0, lec: 3, lab: 0, group: "General Education", prereqs: [], desc: "Professional and multicultural communication skills." },
    { col: 5, row: 5, year: 2, term: 2, code: "DATMGTS", title: "Database Management Systems", units: 3.0, lec: 1, lab: 3, group: "Professional Core", prereqs: ["DATSTRC"], desc: "Relational database design, normalization, and SQL." },
    { col: 5, row: 6, year: 2, term: 2, code: "ARTAPRE", title: "Art Appreciation", units: 3.0, lec: 3, lab: 0, group: "General Education", prereqs: [], desc: "Aesthetic principles and visual humanities." },
    { col: 5, row: 7, year: 2, term: 2, code: "ENGCADD", title: "Computer Aided Drafting", units: 1.0, lec: 0, lab: 3, group: "Basic Engineering", prereqs: [], desc: "2D and 3D technical CAD modelling." },

    // Year 2, Term 3 (Col 6)
    { col: 6, row: 1, year: 2, term: 3, code: "FDCONTS", title: "Feedback and Control Systems", units: 3.0, lec: 3, lab: 0, group: "Professional Core", prereqs: ["NUMERCL", "ELEXCKT"], desc: "Transfer functions, block diagrams, and stability analysis." },
    { col: 6, row: 2, year: 2, term: 3, code: "CPEDRAF", title: "CpE Drafting and Design", units: 1.0, lec: 0, lab: 3, group: "Professional Core", prereqs: ["ENGCADD", "ELEXCKT"], desc: "PCB design and schematic layout software." },
    { col: 6, row: 3, year: 2, term: 3, code: "MIXSIGS", title: "Mixed Signals and Sensors", units: 3.0, lec: 2, lab: 3, group: "Professional Core", prereqs: ["ELEXCKT", "ELEXLAB"], desc: "Sensor interfacing, ADC/DAC, and signal conditioning." },
    { col: 6, row: 4, year: 2, term: 3, code: "LOGCDES", title: "Logic Circuit and Design Lecture", units: 3.0, lec: 3, lab: 0, group: "Professional Core", prereqs: ["DISCMAT", "ELEXLAB"], desc: "Combinational and sequential logic design." },
    { col: 6, row: 5, year: 2, term: 3, code: "LOGICLB", title: "Logic Circuit and Design Lab", units: 1.0, lec: 0, lab: 3, group: "Professional Core", prereqs: ["DISCMAT", "ELEXLAB"], desc: "TTL and CMOS breadboard logic design." },
    { col: 6, row: 6, year: 2, term: 3, code: "SOFTDES", title: "Software Design Lecture", units: 3.0, lec: 3, lab: 0, group: "Professional Core", prereqs: ["OPRSYST", "DATMGTS"], desc: "Software design patterns, modular architecture, and UML." },
    { col: 6, row: 7, year: 2, term: 3, code: "SOFTLAB", title: "Software Design Lab", units: 1.0, lec: 0, lab: 3, group: "Professional Core", prereqs: ["OPRSYST", "DATMGTS"], desc: "Practical full-stack software development projects." },

    // Year 3, Term 1 (Col 7)
    { col: 7, row: 1, year: 3, term: 1, code: "DIGSPRO", title: "Digital Signal Processing Lecture", units: 3.0, lec: 3, lab: 0, group: "Professional Core", prereqs: ["FDCONTS"], desc: "Discrete transforms, DFT, FFT, and FIR/IIR filter design." },
    { col: 7, row: 2, year: 3, term: 1, code: "DIGSLAB", title: "Digital Signal Processing Lab", units: 1.0, lec: 0, lab: 3, group: "Professional Core", prereqs: ["FDCONTS"], desc: "MATLAB and Python DSP simulation experiments." },
    { col: 7, row: 3, year: 3, term: 1, code: "CPECGS1", title: "Cognate / Elective 1", units: 3.0, lec: 2, lab: 3, group: "Technical Electives", prereqs: [], desc: "Specialization Track: Machine Learning / Embedded." },
    { col: 7, row: 4, year: 3, term: 1, code: "EMICROS", title: "Microprocessors Lecture", units: 3.0, lec: 3, lab: 0, group: "Professional Core", prereqs: ["LOGCDES", "LOGICLB"], desc: "Microcontroller architecture, x86/ARM, and assembly." },
    { col: 7, row: 5, year: 3, term: 1, code: "MCROLAB", title: "Microprocessors Lab", units: 1.0, lec: 0, lab: 3, group: "Professional Core", prereqs: ["LOGCDES", "LOGICLB"], desc: "Assembly programming and microcontroller interfacing." },
    { col: 7, row: 6, year: 3, term: 1, code: "CPEMETS", title: "Methods of Research", units: 2.0, lec: 2, lab: 0, group: "Professional Core", prereqs: ["ENGDATA", "SOFTDES"], desc: "Engineering research design, methodology, and ethics." },
    { col: 7, row: 7, year: 3, term: 1, code: "INTOHDL", title: "Intro to HDL", units: 1.0, lec: 0, lab: 3, group: "Professional Core", prereqs: ["LOGCDES", "LOGICLB"], desc: "Verilog and VHDL hardware synthesis for FPGAs." },

    // Year 3, Term 2 (Col 8)
    { col: 8, row: 1, year: 3, term: 2, code: "DATCOMS", title: "Data and Digital Communications", units: 3.0, lec: 3, lab: 0, group: "Professional Core", prereqs: ["DIGSPRO"], desc: "Digital modulation, multiplexing, and transmission lines." },
    { col: 8, row: 2, year: 3, term: 2, code: "CPECGS2", title: "Cognate / Elective 2", units: 3.0, lec: 2, lab: 3, group: "Technical Electives", prereqs: ["CPECGS1"], desc: "Specialization Track: Cloud Computing / IoT." },
    { col: 8, row: 3, year: 3, term: 2, code: "EMBEDDS", title: "Embedded Systems Lecture", units: 3.0, lec: 3, lab: 0, group: "Professional Core", prereqs: ["EMICROS", "MCROLAB"], desc: "RTOS, interrupt handlers, and embedded IoT firmware." },
    { col: 8, row: 4, year: 3, term: 2, code: "EMBEDLB", title: "Embedded Systems Lab", units: 1.0, lec: 0, lab: 3, group: "Professional Core", prereqs: ["EMICROS", "MCROLAB"], desc: "Microcontroller project prototyping and peripherals." },
    { col: 8, row: 5, year: 3, term: 2, code: "TECH101", title: "Technopreneurship 101", units: 3.0, lec: 3, lab: 0, group: "Basic Engineering", prereqs: [], desc: "Technology product incubation and business models." },
    { col: 8, row: 6, year: 3, term: 2, code: "EXCOMP1", title: "Extensive Communication 1", units: 3.0, lec: 3, lab: 0, group: "Institutional", prereqs: [], desc: "Technical presentation and technical report writing." },

    // Year 3, Term 3 (Col 9)
    { col: 9, row: 1, year: 3, term: 3, code: "COMNETS", title: "Computer Networks and Security", units: 3.0, lec: 3, lab: 0, group: "Professional Core", prereqs: ["DATCOMS"], desc: "OSI stack, routing protocols, cryptography, and firewalls." },
    { col: 9, row: 2, year: 3, term: 3, code: "NETSLAB", title: "Computer Networks Lab", units: 1.0, lec: 0, lab: 3, group: "Professional Core", prereqs: ["DATCOMS"], desc: "Cisco packet tracer, Wireshark, and router configuration." },
    { col: 9, row: 3, year: 3, term: 3, code: "CPECGS3", title: "Cognate / Elective 3", units: 3.0, lec: 2, lab: 3, group: "Technical Electives", prereqs: ["CPECGS2"], desc: "Specialization Track: Advanced Computer Vision." },
    { col: 9, row: 4, year: 3, term: 3, code: "CPEDES1", title: "CpE Practice and Design 1", units: 1.0, lec: 0, lab: 3, group: "Professional Core", prereqs: ["CPEMETS", "EMBEDDS"], desc: "Capstone design project proposal and defense." },
    { col: 9, row: 5, year: 3, term: 3, code: "COMAROR", title: "Computer Architecture Lecture", units: 3.0, lec: 3, lab: 0, group: "Professional Core", prereqs: ["EMICROS"], desc: "Pipelining, memory hierarchy, cache coherence, and ILP." },
    { col: 9, row: 6, year: 3, term: 3, code: "ARCORLB", title: "Computer Architecture Lab", units: 1.0, lec: 0, lab: 3, group: "Professional Core", prereqs: ["EMICROS"], desc: "Processor benchmark simulation and micro-architectures." },
    { col: 9, row: 7, year: 3, term: 3, code: "SCITECS", title: "Science, Technology, and Society", units: 3.0, lec: 3, lab: 0, group: "General Education", prereqs: [], desc: "Societal impact of scientific and technical innovations." },

    // Year 4, Term 1 (Col 10)
    { col: 10, row: 1, year: 4, term: 1, code: "SEMSTRP", title: "Seminars and Field Trips", units: 1.0, lec: 1, lab: 0, group: "Professional Core", prereqs: [], desc: "Industry conventions, expert seminars, and plant tours." },
    { col: 10, row: 2, year: 4, term: 1, code: "HEALTHS", title: "Basic Occupational Safety (BOSH)", units: 3.0, lec: 3, lab: 0, group: "Basic Engineering", prereqs: [], desc: "OSHA regulations, hazard mitigation, and workplace safety." },
    { col: 10, row: 3, year: 4, term: 1, code: "CPEDES2", title: "CpE Practice and Design 2", units: 2.0, lec: 0, lab: 6, group: "Professional Core", prereqs: ["CPEDES1"], desc: "Capstone fabrication, testing, and final project defense." },
    { col: 10, row: 4, year: 4, term: 1, code: "CPELAWS", title: "CpE Laws and Practice", units: 2.0, lec: 2, lab: 0, group: "Professional Core", prereqs: [], desc: "Philippine engineering law, contracts, and IP protection." },
    { col: 10, row: 5, year: 4, term: 1, code: "CONWORL", title: "The Contemporary World", units: 3.0, lec: 3, lab: 0, group: "General Education", prereqs: [], desc: "Globalization, economic integration, and geopolitics." },

    // Year 4, Term 2 (Col 11)
    { col: 11, row: 1, year: 4, term: 2, code: "INTERN1", title: "Internship 1 (240 Hours)", units: 6.0, lec: 0, lab: 18, group: "Professional Core", prereqs: ["CPEDES2"], desc: "Immersive 240-hour industry on-the-job training." },

    // Year 4, Term 3 (Col 12)
    { col: 12, row: 1, year: 4, term: 3, code: "INTERN2", title: "Internship 2 (240 Hours)", units: 6.0, lec: 0, lab: 18, group: "Professional Core", prereqs: ["INTERN1"], desc: "Advanced engineering industry internship placement." }
  ];

  // Helper to clone and build editions
  function buildEditionsCatalog() {
    // 2018 Edition (74 Courses, 174 Units)
    const courses2018 = JSON.parse(JSON.stringify(PAST_COURSES_2021));
    // Add 2018-specific additional legacy subjects
    courses2018.push(
      { col: 4, row: 7, year: 2, term: 1, code: "USERINX", title: "User Interface Design (LabVIEW)", units: 3.0, lec: 1, lab: 3, group: "Professional Core", prereqs: ["PROGLOD"], desc: "Graphical virtual instrumentation and LabVIEW programming." },
      { col: 10, row: 6, year: 4, term: 1, code: "EMERTEC", title: "Emerging Technologies in CpE", units: 1.0, lec: 1, lab: 0, group: "Professional Core", prereqs: [], desc: "Special topics and emerging paradigms in hardware engineering." }
    );

    // 2015 Heritage Edition (88 Courses, 212 Units, 15 Trimesters / 5 Years)
    const courses2015 = JSON.parse(JSON.stringify(PAST_COURSES_2021));
    // Re-adjust columns to span 15 trimesters and add 5-year curriculum subjects
    // Add additional Year 5 subjects and historical 5-year subjects
    const extra2015 = [
      { col: 10, row: 6, year: 4, term: 1, code: "SIGNALS", title: "Continuous & Discrete Signals", units: 3.0, lec: 3, lab: 0, group: "Allied", prereqs: ["DIEQUAT"], desc: "Fourier series, continuous convolutions, and transform domains." },
      { col: 11, row: 2, year: 4, term: 2, code: "ELECTR4", title: "Power Electronics & Drives", units: 3.0, lec: 2, lab: 3, group: "Professional Core", prereqs: ["ELEXCKT"], desc: "Thyristors, inverters, motor drives, and industrial power." },
      { col: 12, row: 2, year: 4, term: 3, code: "ENGMGT1", title: "Engineering Management", units: 3.0, lec: 3, lab: 0, group: "Basic Engineering", prereqs: ["ECONOMC"], desc: "Project planning, operations research, and organizational management." },
      // Year 5 (Cols 13, 14, 15)
      { col: 13, row: 1, year: 5, term: 1, code: "ROBPROA", title: "Robotics and Automation", units: 3.0, lec: 2, lab: 3, group: "Professional Core", prereqs: ["FDCONTS", "EMBEDDS"], desc: "Kinematics, inverse kinematics, robot arm programming, and PLC." },
      { col: 13, row: 2, year: 5, term: 1, code: "CAPSTON", title: "5-Year Heritage Capstone 1", units: 3.0, lec: 1, lab: 6, group: "Professional Core", prereqs: ["CPEMETS"], desc: "Comprehensive engineering thesis design and prototyping." },
      { col: 13, row: 3, year: 5, term: 1, code: "COMMENG", title: "Wireless Communications", units: 3.0, lec: 3, lab: 0, group: "Professional Core", prereqs: ["DATCOMS"], desc: "Cellular architectures, antennas, and RF propagation." },
      { col: 14, row: 1, year: 5, term: 2, code: "INDUSO1", title: "Heritage Industry OJT 1 (520 Hrs)", units: 9.0, lec: 0, lab: 27, group: "Professional Core", prereqs: ["CAPSTON"], desc: "520-Hour intensive corporate industrial placement." },
      { col: 15, row: 1, year: 5, term: 3, code: "INDUSO2", title: "Heritage Industry OJT 2 (520 Hrs)", units: 9.0, lec: 0, lab: 27, group: "Professional Core", prereqs: ["INDUSO1"], desc: "Terminal 520-Hour comprehensive enterprise residency." },
      // Supplemental general courses
      { col: 1, row: 9, year: 1, term: 1, code: "FILIP10", title: "Filipino 1: Komunikasyon", units: 3.0, lec: 3, lab: 0, group: "General Education", prereqs: [], desc: "Komunikasyon sa akademikong Filipino." },
      { col: 2, row: 8, year: 1, term: 2, code: "FILIP20", title: "Filipino 2: Pagbasa at Pagsulat", units: 3.0, lec: 3, lab: 0, group: "General Education", prereqs: ["FILIP10"], desc: "Pagbasa at pagsulat tungo sa pananaliksik." },
      { col: 3, row: 8, year: 1, term: 3, code: "LITERA1", title: "World Literature", units: 3.0, lec: 3, lab: 0, group: "General Education", prereqs: [], desc: "Masterpieces of world literature across eras." },
      { col: 4, row: 7, year: 2, term: 1, code: "ENGPHYS", title: "Modern Physics", units: 3.0, lec: 3, lab: 0, group: "Basic Engineering", prereqs: ["PHYENLC"], desc: "Relativity, quantum mechanics, and atomic structure." },
      { col: 5, row: 8, year: 2, term: 2, code: "ENGCIV1", title: "Engineering Mechanics: Statics", units: 3.0, lec: 3, lab: 0, group: "Basic Engineering", prereqs: ["PHYENLC", "CALCTWO"], desc: "Equilibrium of force systems, trusses, and centroids." },
      { col: 6, row: 8, year: 2, term: 3, code: "ENGCIV2", title: "Engineering Mechanics: Dynamics", units: 3.0, lec: 3, lab: 0, group: "Basic Engineering", prereqs: ["ENGCIV1"], desc: "Kinematics and kinetics of particles and rigid bodies." },
      { col: 7, row: 8, year: 3, term: 1, code: "CIRCUI3", title: "Network Analysis & Filter Design", units: 3.0, lec: 2, lab: 3, group: "Allied", prereqs: ["ELECIRK"], desc: "Two-port networks, resonance, and passive filter design." },
      { col: 8, row: 7, year: 3, term: 2, code: "COMPUT5", title: "Advanced Microprocessor Interfacing", units: 3.0, lec: 2, lab: 3, group: "Professional Core", prereqs: ["EMICROS"], desc: "Direct memory access, interrupts, and peripheral buses." }
    ];
    extra2015.forEach(c => courses2015.push(c));

    // 2010 Foundation Edition (90 Courses, 216 Units, 15 Trimesters / 5 Years)
    const courses2010 = JSON.parse(JSON.stringify(courses2015));
    courses2010.push(
      { col: 1, row: 10, year: 1, term: 1, code: "COLALG1", title: "College Algebra", units: 3.0, lec: 3, lab: 0, group: "Basic Engineering", prereqs: [], desc: "Foundational polynomial and transcendental algebraic equations." },
      { col: 2, row: 9, year: 1, term: 2, code: "PLANE01", title: "Plane & Spherical Trigonometry", units: 3.0, lec: 3, lab: 0, group: "Basic Engineering", prereqs: ["COLALG1"], desc: "Trigonometric identities and triangular solutions." }
    );

    return {
      'BSCpE-2021': courses2021Clean(PAST_COURSES_2021),
      'BSCpE-2018': courses2018,
      'BSCpE-2015': courses2015,
      'BSCpE-2010': courses2010
    };
  }

  function courses2021Clean(list) {
    return list;
  }

  const PAST_EDITIONS_DATA = buildEditionsCatalog();

  // Active Flowchart State
  let currentActiveEditionId = 'BSCpE-2021';
  let pastFlowchartActiveYear = 'all';
  let pastSelectedCourseCode = null;
  let pastHoveredCourseCode = null;

  // Category Metadata helper
  function getCategoryMeta(groupName) {
    if (typeof window.getCategoryMeta === 'function') {
      return window.getCategoryMeta(groupName);
    }
    const group = (groupName || 'Core').toLowerCase();
    if (group.includes('basic eng')) {
      return { color: 'amber', name: 'Basic Eng', dot: 'bg-amber-500', border: 'border-l-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/30' };
    }
    if (group.includes('gen ed') || group.includes('general ed')) {
      return { color: 'sky', name: 'Gen Ed', dot: 'bg-sky-500', border: 'border-l-sky-500', bg: 'bg-sky-50 dark:bg-sky-950/30' };
    }
    if (group.includes('allied')) {
      return { color: 'purple', name: 'Allied', dot: 'bg-purple-500', border: 'border-l-purple-500', bg: 'bg-purple-50 dark:bg-purple-950/30' };
    }
    if (group.includes('elective') || group.includes('cognate')) {
      return { color: 'rose', name: 'Elective', dot: 'bg-rose-500', border: 'border-l-rose-500', bg: 'bg-rose-50 dark:bg-rose-950/30' };
    }
    if (group.includes('inst')) {
      return { color: 'emerald', name: 'Inst', dot: 'bg-emerald-500', border: 'border-l-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/30' };
    }
    return { color: 'indigo', name: 'Core', dot: 'bg-indigo-600', border: 'border-l-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-950/30' };
  }

  // Precompute reverse unlocks
  function getUnlocksMap(courses) {
    const unlocksMap = {};
    courses.forEach(c => { unlocksMap[c.code] = []; });
    courses.forEach(course => {
      if (Array.isArray(course.prereqs)) {
        course.prereqs.forEach(prereq => {
          const pCode = (typeof prereq === 'object' && prereq !== null && prereq.code) ? prereq.code : String(prereq).trim();
          if (pCode && unlocksMap[pCode]) {
            if (!unlocksMap[pCode].includes(course.code)) {
              unlocksMap[pCode].push(course.code);
            }
          }
        });
      }
    });
    return unlocksMap;
  }

  // =========================================================================
  // 3. CORE RENDERING ENGINE FOR DEDICATED HISTORICAL FLOWCHART
  // =========================================================================

  function renderPastFlowchart(editionId, yearFilter = 'all') {
    if (editionId) {
      currentActiveEditionId = editionId;
    }
    editionId = currentActiveEditionId || 'BSCpE-2021';
    pastFlowchartActiveYear = yearFilter;

    const meta = PAST_EDITIONS_META[editionId] || PAST_EDITIONS_META['BSCpE-2021'];
    const courses = PAST_EDITIONS_DATA[editionId] || PAST_EDITIONS_DATA['BSCpE-2021'];

    // 1. Update Header Badges and Titles
    const titleEl = document.getElementById('pastFlowchartTitle');
    const badgeEl = document.getElementById('pastFlowchartBadge');
    const ayEl = document.getElementById('pastFlowchartAY');
    const metaSubEl = document.getElementById('pastFlowchartMetaSub');
    const unitsEl = document.getElementById('pastFlowchartUnits');
    const coursesCountEl = document.getElementById('pastFlowchartCoursesCount');
    const termsEl = document.getElementById('pastFlowchartTerms');
    const generationEl = document.getElementById('pastFlowchartGeneration');

    if (titleEl) titleEl.innerText = meta.editionTitle;
    if (badgeEl) {
      badgeEl.className = `px-2 py-0.5 font-mono font-black text-xs border ${meta.badgeColor}`;
      badgeEl.innerText = meta.badge;
    }
    if (ayEl) ayEl.innerText = meta.academicYears;
    if (metaSubEl) metaSubEl.innerText = `${meta.generation} • Archived Official Registrar Flowchart Specification`;
    if (unitsEl) unitsEl.innerText = meta.totalUnits;
    if (coursesCountEl) coursesCountEl.innerText = meta.totalCourses;
    if (termsEl) termsEl.innerText = `${meta.totalTerms} Trimesters (${meta.totalYears} Academic Years)`;
    if (generationEl) generationEl.innerText = meta.generation;

    // 2. Render Year Filter Tabs (Support 4 or 5 Academic Years)
    renderPastYearButtons(meta.totalYears);

    // 3. Render Table Matrix DAG
    const table = document.getElementById('pastFlowchartMatrixTable');
    if (!table) return;

    const totalYears = meta.totalYears;
    const activeYears = (pastFlowchartActiveYear === 'all')
      ? Array.from({ length: totalYears }, (_, i) => i + 1)
      : [parseInt(pastFlowchartActiveYear, 10)];

    const activeCols = [];
    activeYears.forEach(y => {
      activeCols.push((y - 1) * 3 + 1, (y - 1) * 3 + 2, (y - 1) * 3 + 3);
    });

    // Slot map lookup
    const slotMap = {};
    let maxRow = 8;
    courses.forEach(c => {
      const col = c.col || ((c.year - 1) * 3 + c.term);
      const row = c.row || 1;
      slotMap[`${col}-${row}`] = c;
      if (row > maxRow) maxRow = row;
    });

    // ── THEAD ─────────────────────────────────────────────────────────────
    let theadHtml = '<thead>';
    theadHtml += '<tr class="text-xs select-none uppercase tracking-wider font-mono">';
    theadHtml += '<th class="flow-col-no py-2 px-1 bg-[#001733] text-[#E5A823] font-black text-center border-r border-slate-700">No</th>';
    activeYears.forEach(y => {
      const yh = meta.yearHeaders[y - 1] || { year: y, ay: `Year ${y}`, title: `Academic Year ${y}`, units: '', bg: 'bg-[#002855]', text: 'text-white' };
      theadHtml += `
        <th colspan="3" id="pastYearBanner-${yh.year}" class="${yh.bg} ${yh.text} py-2 px-3 border-r border-slate-700 transition-all">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="px-1.5 py-0.5 bg-[#E5A823] text-slate-950 font-black text-[11px]">YEAR ${yh.year}</span>
              <span class="font-sans font-bold text-[11px] opacity-95 normal-case tracking-normal">${yh.title}</span>
            </div>
            <div class="flex items-center gap-2 text-[10px] opacity-90 font-mono">
              <span>${yh.ay}</span>
              <span class="px-1.5 py-0.2 bg-black/30 border border-white/20 font-bold">${yh.units}</span>
            </div>
          </div>
        </th>
      `;
    });
    theadHtml += '</tr>';

    // Term headers
    theadHtml += '<tr class="text-xs font-mono select-none bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-b-2 border-slate-300 dark:border-slate-700">';
    theadHtml += '<th class="flow-col-no py-1.5 text-center text-slate-500 font-black text-[11px] bg-slate-200 dark:bg-slate-900 border-r border-slate-300 dark:border-slate-700">#</th>';

    activeCols.forEach(col => {
      const year = Math.ceil(col / 3);
      const term = ((col - 1) % 3) + 1;
      const termCourses = courses.filter(c => (c.col === col) || (c.year === year && c.term === term));
      const termUnits = termCourses.reduce((sum, c) => sum + (parseFloat(c.units) || 0), 0);

      theadHtml += `
        <th class="flow-col-term py-1.5 px-2.5 text-left border-r border-slate-300 dark:border-slate-700 font-bold">
          <div class="flex items-center justify-between leading-none">
            <span class="text-xs font-black text-[#002855] dark:text-sky-300">Term ${term}</span>
            <span class="text-[10.5px] px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold font-mono">
              ${termUnits.toFixed(1)}u &bull; ${termCourses.length}C
            </span>
          </div>
        </th>
      `;
    });
    theadHtml += '</tr></thead>';

    // ── TBODY ─────────────────────────────────────────────────────────────
    let tbodyHtml = '<tbody>';
    for (let r = 1; r <= maxRow; r++) {
      tbodyHtml += `<tr class="border-b border-transparent">`;
      tbodyHtml += `
        <td class="flow-col-no text-center font-mono font-black text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border-r border-slate-300 dark:border-slate-700 select-none">
          R${r}
        </td>
      `;

      activeCols.forEach(col => {
        const course = slotMap[`${col}-${r}`];
        tbodyHtml += `<td class="flow-col-term border-r border-slate-200 dark:border-slate-800 align-top">`;
        if (course) {
          const catMeta = getCategoryMeta(course.group);
          const borderClass = catMeta.border || 'border-l-indigo-600';
          const prereqCount = Array.isArray(course.prereqs) ? course.prereqs.length : 0;
          const unitsFormatted = Number(course.units || 0).toFixed(1);

          tbodyHtml += `
            <div id="past-node-${course.code}" 
                 data-past-course="${course.code}"
                 data-col="${col}"
                 data-row="${r}"
                 class="course-card past-flow-card select-none relative p-2 flex flex-col justify-between cursor-pointer border border-slate-300 dark:border-slate-700 ${borderClass} border-l-[6px] shadow-2xs ${catMeta.bg || ''}">
              
              <!-- Left Port for Prerequisite Inflow -->
              <div class="port-dot port-left" title="Prerequisite Entry Port"></div>
              <!-- Right Port for Dependent Outflow -->
              <div class="port-dot port-right" title="Dependent Exit Port"></div>

              <!-- Card Header: Code + Units -->
              <div class="flex items-center justify-between font-mono leading-none mb-1">
                <span class="font-black text-xs text-[#002855] dark:text-sky-200 tracking-tight">${course.code}</span>
                <span class="text-[10.5px] font-bold px-1 py-0.5 rounded-none bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">${unitsFormatted}u</span>
              </div>

              <!-- Course Title -->
              <div class="text-[11px] font-semibold text-slate-800 dark:text-slate-200 leading-snug line-clamp-1 mb-1" title="${course.title}">
                ${course.title}
              </div>

              <!-- Card Footer: Category + Requisite Counter -->
              <div class="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-1 font-mono leading-none">
                <span class="inline-flex items-center gap-1 font-bold truncate max-w-[95px]">
                  <span class="w-2 h-2 rounded-none ${catMeta.dot || 'bg-slate-400'} shrink-0"></span>
                  <span class="truncate">${catMeta.name || 'Core'}</span>
                </span>
                <span class="font-bold ${prereqCount > 0 ? 'text-blue-700 dark:text-blue-400' : 'text-slate-400'}">
                  ${prereqCount > 0 ? `⛓️ ${prereqCount}` : 'Entry'}
                </span>
              </div>

            </div>
          `;
        } else {
          tbodyHtml += `
            <div class="w-full h-full min-h-[86px] flex items-center justify-center text-slate-300 dark:text-slate-700 text-xs font-mono select-none bg-transparent">
              <span class="opacity-20">&bull;</span>
            </div>
          `;
        }
        tbodyHtml += `</td>`;
      });
      tbodyHtml += `</tr>`;
    }
    tbodyHtml += '</tbody>';

    // ── TFOOT ─────────────────────────────────────────────────────────────
    let tfootHtml = '<tfoot class="border-t-2 border-slate-300 dark:border-slate-700 font-mono text-xs select-none bg-slate-50 dark:bg-slate-900">';
    tfootHtml += '<tr class="font-bold text-slate-800 dark:text-slate-200">';
    tfootHtml += '<td class="flow-col-no py-2 text-center text-[10px] bg-slate-200 dark:bg-slate-800 border-r border-slate-300 dark:border-slate-700">Tot</td>';
    activeCols.forEach(col => {
      const year = Math.ceil(col / 3);
      const term = ((col - 1) % 3) + 1;
      const termCourses = courses.filter(c => (c.col === col) || (c.year === year && c.term === term));
      const termUnits = termCourses.reduce((sum, c) => sum + (parseFloat(c.units) || 0), 0);

      tfootHtml += `
        <td class="flow-col-term py-2 px-2.5 text-center border-r border-slate-300 dark:border-slate-700">
          <span class="text-[#002855] dark:text-[#E5A823] font-black">${termUnits.toFixed(1)} Units</span>
        </td>
      `;
    });
    tfootHtml += '</tr></tfoot>';

    table.innerHTML = theadHtml + tbodyHtml + tfootHtml;

    // Attach card event listeners
    setupPastNodeEventListeners();

    // Re-draw arrows
    setTimeout(drawPastFlowchartArrows, 70);
  }

  // Render Year Buttons (All, 1, 2, 3, 4, [5])
  function renderPastYearButtons(totalYears) {
    const container = document.getElementById('pastFlowchartYearButtons');
    if (!container) return;

    let html = `
      <button type="button" onclick="window.setPastFlowchartYear('all')" id="pastFlowYearBtn-all" 
        class="px-2.5 py-1 ${pastFlowchartActiveYear === 'all' ? 'bg-[#002855] text-[#E5A823] font-bold shadow-xs border border-[#002855]' : 'hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300'} transition cursor-pointer text-xs">
        All ${totalYears} Years
      </button>
    `;

    for (let y = 1; y <= totalYears; y++) {
      const isActive = String(pastFlowchartActiveYear) === String(y);
      html += `
        <button type="button" onclick="window.setPastFlowchartYear(${y})" id="pastFlowYearBtn-${y}" 
          class="px-2.5 py-1 ${isActive ? 'bg-[#002855] text-[#E5A823] font-bold shadow-xs border border-[#002855]' : 'hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300'} transition cursor-pointer text-xs">
          Year ${y}
        </button>
      `;
    }

    container.innerHTML = html;
  }

  function setPastFlowchartYear(yearNum) {
    pastFlowchartActiveYear = (yearNum === 'all' || !yearNum) ? 'all' : parseInt(yearNum, 10);
    renderPastFlowchart(currentActiveEditionId, pastFlowchartActiveYear);

    const wrapper = document.getElementById('pastVectorDiagramWrapper');
    if (wrapper) wrapper.scrollLeft = 0;

    if (typeof window.showToast === 'function') {
      const yLabel = (pastFlowchartActiveYear === 'all') ? 'All Years' : `Year ${pastFlowchartActiveYear}`;
      window.showToast(`Historical Flowchart: Showing ${yLabel}`);
    }
  }

  // =========================================================================
  // 4. SVG ARROW CONNECTOR ENGINE FOR HISTORICAL FLOWCHART
  // =========================================================================

  function drawPastFlowchartArrows() {
    const svgGroup = document.getElementById('pastDiagramSvgPathsGroup');
    const svg = document.getElementById('pastDiagramSvg');
    const tableInner = document.getElementById('pastFlowchartTableInner');
    if (!svgGroup || !svg || !tableInner) return;

    const courses = PAST_EDITIONS_DATA[currentActiveEditionId] || [];
    const innerRect = tableInner.getBoundingClientRect();
    if (innerRect.width === 0 || innerRect.height === 0) return;

    svg.style.width = innerRect.width + 'px';
    svg.style.height = innerRect.height + 'px';
    svgGroup.innerHTML = '';

    const gutterX = {};
    const colLeftX = {};
    const colRightX = {};

    const tbody = tableInner.querySelector('tbody');
    if (tbody) {
      const firstRow = tbody.querySelector('tr');
      if (firstRow) {
        const tds = firstRow.querySelectorAll('td.flow-col-term');
        tds.forEach((td, i) => {
          const colIdx = i + 1;
          const r = td.getBoundingClientRect();
          colLeftX[colIdx] = r.left - innerRect.left;
          colRightX[colIdx] = r.right - innerRect.left;
          if (i > 0) {
            const prevTd = tds[i - 1];
            const prevR = prevTd.getBoundingClientRect();
            gutterX[colIdx] = ((prevR.right - innerRect.left) + (r.left - innerRect.left)) / 2;
          }
        });
      }
    }

    const portMap = {};
    courses.forEach(c => {
      const el = document.getElementById(`past-node-${c.code}`);
      if (el) {
        const rect = el.getBoundingClientRect();
        const colIdx = c.col || ((c.year - 1) * 3 + (c.term || 1));
        portMap[c.code] = {
          code: c.code,
          col: colIdx,
          row: c.row || 1,
          leftX: rect.left - innerRect.left,
          rightX: rect.right - innerRect.left,
          topY: rect.top - innerRect.top,
          botY: rect.bottom - innerRect.top,
          midY: rect.top + (rect.height / 2) - innerRect.top,
          prereqs: Array.isArray(c.prereqs) ? c.prereqs : []
        };
      }
    });

    // ── Transitive prereq check ──────────────────────────────────────────
    function isTransitivePrereq(fromCode, tgtPrereqs) {
      for (let i = 0; i < tgtPrereqs.length; i++) {
        const item = tgtPrereqs[i];
        const sib = (typeof item === 'object' && item !== null && item.code) ? item.code : String(item);
        if (sib === fromCode) continue;
        const visited = new Set();
        const queue = [sib];
        while (queue.length > 0) {
          const curr = queue.shift();
          const currC = courses.find(c => c.code === curr);
          if (!currC || !Array.isArray(currC.prereqs)) continue;
          for (let j = 0; j < currC.prereqs.length; j++) {
            const p = currC.prereqs[j];
            const pCode = (typeof p === 'object' && p !== null && p.code) ? p.code : String(p);
            if (pCode === fromCode) return true;
            if (!visited.has(pCode)) { visited.add(pCode); queue.push(pCode); }
          }
        }
      }
      return false;
    }

    const edges = [];
    Object.values(portMap).forEach(tgt => {
      tgt.prereqs.forEach(pItem => {
        const pCode = (typeof pItem === 'object' && pItem !== null && pItem.code) ? pItem.code : String(pItem);
        if (isTransitivePrereq(pCode, tgt.prereqs)) return;
        const src = portMap[pCode];
        if (!src) return;
        edges.push({ src, tgt });
      });
    });

    // Long-distance arcs render first (paint under short arcs)
    edges.sort((a, b) => {
      const distA = Math.abs(a.tgt.col - a.src.col) * 1000 + Math.abs(a.tgt.midY - a.src.midY);
      const distB = Math.abs(b.tgt.col - b.src.col) * 1000 + Math.abs(b.tgt.midY - b.src.midY);
      return distB - distA;
    });

    const R = 6;
    const ABOVE_LANE = 12;

    function roundedCorner(px, py, cx, cy, nx, ny) {
      const d1 = Math.hypot(px - cx, py - cy);
      const d2 = Math.hypot(nx - cx, ny - cy);
      const rr = Math.min(R, d1 * 0.45, d2 * 0.45);
      if (rr < 0.5) return `L ${cx.toFixed(1)} ${cy.toFixed(1)}`;
      const a1x = cx + (px - cx) / d1 * rr, a1y = cy + (py - cy) / d1 * rr;
      const a2x = cx + (nx - cx) / d2 * rr, a2y = cy + (ny - cy) / d2 * rr;
      return `L ${a1x.toFixed(1)} ${a1y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${a2x.toFixed(1)} ${a2y.toFixed(1)}`;
    }

    function orthoPath(pts) {
      if (pts.length < 2) return '';
      let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
      for (let i = 1; i < pts.length; i++) {
        if (i < pts.length - 1) {
          d += ' ' + roundedCorner(pts[i-1].x, pts[i-1].y, pts[i].x, pts[i].y, pts[i+1].x, pts[i+1].y);
        } else {
          d += ` L ${pts[i].x.toFixed(1)} ${pts[i].y.toFixed(1)}`;
        }
      }
      return d;
    }

    edges.forEach(edge => {
      const { src, tgt } = edge;
      const x1 = src.rightX;
      const y1 = src.midY;
      const x2 = tgt.leftX;
      const y2 = tgt.midY;
      const colDiff = tgt.col - src.col;

      let pathData = '';

      if (colDiff === 0) {
        // Same-column co-requisite: right-side loop
        const loopX = x1 + 22;
        pathData = `M ${x1.toFixed(1)} ${y1.toFixed(1)} C ${loopX.toFixed(1)} ${y1.toFixed(1)}, ${loopX.toFixed(1)} ${y2.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`;

      } else if (colDiff === 1) {
        // Adjacent column: 4-waypoint Z through the single gutter
        const gx = gutterX[tgt.col] !== undefined ? gutterX[tgt.col] : (x1 + x2) / 2;
        if (Math.abs(y2 - y1) < 2) {
          pathData = `M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}`;
        } else {
          pathData = orthoPath([
            { x: x1, y: y1 },
            { x: gx, y: y1 },
            { x: gx, y: y2 },
            { x: x2, y: y2 }
          ]);
        }

      } else if (colDiff > 1) {
        // Multi-column forward jump: route ABOVE the cards through open horizontal corridor
        const gx1 = gutterX[src.col + 1] !== undefined
          ? gutterX[src.col + 1]
          : src.rightX + 6;
        const gx2 = gutterX[tgt.col] !== undefined
          ? gutterX[tgt.col]
          : tgt.leftX - 6;
        
        // Offset lane slightly based on vertical span to prevent collinear stacking
        const laneY = Math.min(src.topY, tgt.topY) - ABOVE_LANE;

        pathData = orthoPath([
          { x: x1,  y: y1    },   // source right port
          { x: gx1, y: y1    },   // enter gutter after src col
          { x: gx1, y: laneY },   // rise above row cards
          { x: gx2, y: laneY },   // travel horizontally through clearance lane
          { x: gx2, y: y2    },   // descend through gutter before tgt col
          { x: x2,  y: y2    }    // enter dest left port
        ]);

      } else {
        // Backward arrow (right→left): smooth arc above
        const topY = Math.min(y1, y2) - 28;
        pathData = `M ${x1.toFixed(1)} ${y1.toFixed(1)} C ${x1.toFixed(1)} ${topY.toFixed(1)}, ${x2.toFixed(1)} ${topY.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`;
      }

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathData);
      path.setAttribute('data-from', src.code);
      path.setAttribute('data-to', tgt.code);
      path.setAttribute('class', 'past-dag-arrow');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', '#1e40af');
      path.setAttribute('stroke-width', '1.6');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');
      path.setAttribute('marker-end', 'url(#past-diag-arrow-default)');
      path.style.opacity = '0.55';
      svgGroup.appendChild(path);
    });

    if (pastSelectedCourseCode) {
      highlightPastPrereqTree(pastSelectedCourseCode);
    } else if (pastHoveredCourseCode) {
      highlightPastPrereqTree(pastHoveredCourseCode);
    }
  }

  // =========================================================================
  // 5. INTERACTION & DETAIL DRAWER
  // =========================================================================

  function setupPastNodeEventListeners() {
    const cards = document.querySelectorAll('.past-flow-card');
    cards.forEach(card => {
      const code = card.getAttribute('data-past-course');
      if (!code) return;

      card.addEventListener('mouseenter', () => {
        pastHoveredCourseCode = code;
        if (!pastSelectedCourseCode) {
          highlightPastPrereqTree(code);
        }
      });

      card.addEventListener('mouseleave', () => {
        pastHoveredCourseCode = null;
        if (!pastSelectedCourseCode) {
          clearPastFlowchartHighlight();
        } else {
          highlightPastPrereqTree(pastSelectedCourseCode);
        }
      });

      card.addEventListener('click', (e) => {
        e.stopPropagation();
        if (pastSelectedCourseCode === code) {
          clearPastFlowchartHighlight();
        } else {
          pastSelectedCourseCode = code;
          highlightPastPrereqTree(code);
          openPastFlowchartDrawer(code);
        }
      });
    });
  }

  function highlightPastPrereqTree(activeCode) {
    const courses = PAST_EDITIONS_DATA[currentActiveEditionId] || [];
    const unlocksMap = getUnlocksMap(courses);

    const feederSet = new Set();
    const queueUp = [activeCode];
    while (queueUp.length > 0) {
      const curr = queueUp.shift();
      const cObj = courses.find(c => c.code === curr);
      if (cObj && Array.isArray(cObj.prereqs)) {
        cObj.prereqs.forEach(p => {
          const pCode = (typeof p === 'object' && p !== null && p.code) ? p.code : String(p).trim();
          if (pCode && !feederSet.has(pCode)) {
            feederSet.add(pCode);
            queueUp.push(pCode);
          }
        });
      }
    }

    const dependentSet = new Set();
    const queueDown = [activeCode];
    while (queueDown.length > 0) {
      const curr = queueDown.shift();
      const dependents = unlocksMap[curr] || [];
      dependents.forEach(dCode => {
        if (!dependentSet.has(dCode)) {
          dependentSet.add(dCode);
          queueDown.push(dCode);
        }
      });
    }

    const cards = document.querySelectorAll('.past-flow-card');
    cards.forEach(card => {
      const code = card.getAttribute('data-past-course');
      card.classList.remove('active-selected', 'feeder-highlight', 'dependent-highlight', 'dimmed');
      if (code === activeCode) {
        card.classList.add('active-selected');
      } else if (feederSet.has(code)) {
        card.classList.add('feeder-highlight');
      } else if (dependentSet.has(code)) {
        card.classList.add('dependent-highlight');
      }
    });

    const paths = document.querySelectorAll('.past-dag-arrow');
    paths.forEach(path => {
      const from = path.getAttribute('data-from');
      const to = path.getAttribute('data-to');
      path.classList.remove('feeder-arrow', 'dependent-arrow', 'dimmed-arrow');

      const isFeeder = (to === activeCode && feederSet.has(from)) || (feederSet.has(from) && feederSet.has(to));
      const isDependent = (from === activeCode && dependentSet.has(to)) || (dependentSet.has(from) && dependentSet.has(to));

      if (isFeeder) {
        path.classList.add('feeder-arrow');
        path.setAttribute('marker-end', 'url(#past-diag-arrow-feeder)');
        path.style.opacity = '1';
      } else if (isDependent) {
        path.classList.add('dependent-arrow');
        path.setAttribute('marker-end', 'url(#past-diag-arrow-dependent)');
        path.style.opacity = '1';
      } else {
        path.classList.add('dimmed-arrow');
        path.style.opacity = '0.04';
      }
    });
  }

  function clearPastFlowchartHighlight() {
    pastSelectedCourseCode = null;
    pastHoveredCourseCode = null;

    const cards = document.querySelectorAll('.past-flow-card');
    cards.forEach(card => {
      card.classList.remove('active-selected', 'feeder-highlight', 'dependent-highlight', 'dimmed');
    });

    const paths = document.querySelectorAll('.past-dag-arrow');
    paths.forEach(path => {
      path.classList.remove('feeder-arrow', 'dependent-arrow', 'dimmed-arrow');
      path.setAttribute('marker-end', 'url(#past-diag-arrow-default)');
      path.style.opacity = '0.55';
    });

    closePastFlowchartDrawer();
  }

  function openPastFlowchartDrawer(code) {
    const courses = PAST_EDITIONS_DATA[currentActiveEditionId] || [];
    const course = courses.find(c => c.code === code);
    if (!course) return;

    const drawer = document.getElementById('pastFlowchartDetailDrawer');
    if (!drawer) return;

    const codeEl = document.getElementById('pastDrawerCourseCode');
    const titleEl = document.getElementById('pastDrawerCourseTitle');
    const metaEl = document.getElementById('pastDrawerCourseMeta');
    const prereqsEl = document.getElementById('pastDrawerPrereqsList');
    const dependentsEl = document.getElementById('pastDrawerDependentsList');
    const descEl = document.getElementById('pastDrawerDescriptionText');

    if (codeEl) codeEl.innerText = course.code;
    if (titleEl) titleEl.innerText = course.title;
    if (metaEl) {
      metaEl.innerText = `Year ${course.year} • Term ${course.term} • ${Number(course.units || 0).toFixed(1)} Units (${course.lec || 0} Lec / ${course.lab || 0} Lab) • ${course.group || 'Core'}`;
    }

    if (prereqsEl) {
      if (Array.isArray(course.prereqs) && course.prereqs.length > 0) {
        prereqsEl.innerHTML = course.prereqs.map(p => {
          const pCode = (typeof p === 'object' && p !== null && p.code) ? p.code : String(p).trim();
          return `<span class="inline-block px-2 py-0.5 bg-blue-900/80 text-blue-200 border border-blue-700 text-xs font-mono mr-1 mb-1">← ${pCode}</span>`;
        }).join('');
      } else {
        prereqsEl.innerText = 'None (Entry Subject)';
      }
    }

    const unlocksMap = getUnlocksMap(courses);
    const dependents = unlocksMap[course.code] || [];
    if (dependentsEl) {
      if (dependents.length > 0) {
        dependentsEl.innerHTML = dependents.map(d => {
          return `<span class="inline-block px-2 py-0.5 bg-emerald-900/80 text-emerald-200 border border-emerald-700 text-xs font-mono mr-1 mb-1">${d} ➔</span>`;
        }).join('');
      } else {
        dependentsEl.innerText = 'None (Terminal Subject)';
      }
    }

    if (descEl) {
      descEl.innerText = course.desc || 'Official course syllabus scope text from historical curriculum record.';
    }

    drawer.classList.remove('hidden');
    if (window.spaRouter && typeof window.spaRouter.onModalOpen === 'function') {
      window.spaRouter.onModalOpen('past-course-detail', { course: code });
    }
  }

  function closePastFlowchartDrawer() {
    const drawer = document.getElementById('pastFlowchartDetailDrawer');
    if (drawer) drawer.classList.add('hidden');
    if (window.spaRouter && typeof window.spaRouter.onModalClose === 'function') {
      window.spaRouter.onModalClose('past-course-detail');
    }
  }

  // =========================================================================
  // GLOBAL WINDOW EXPORTS
  // =========================================================================
  window.PAST_EDITIONS_META = PAST_EDITIONS_META;
  window.PAST_EDITIONS_DATA = PAST_EDITIONS_DATA;
  window.renderPastFlowchart = renderPastFlowchart;
  window.setPastFlowchartYear = setPastFlowchartYear;
  window.drawPastFlowchartArrows = drawPastFlowchartArrows;
  window.openPastFlowchartDrawer = openPastFlowchartDrawer;
  window.closePastFlowchartDrawer = closePastFlowchartDrawer;
  window.clearPastFlowchartHighlight = clearPastFlowchartHighlight;

})(window);
