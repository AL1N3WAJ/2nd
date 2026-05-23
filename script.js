const courses = [
  {
    code: "PHYS 201",
    title: "Mathematical Physics-II and Classical Mechanics",
    subtitle: "Advanced tensor analysis, contour integrations, Lagrangian/Hamiltonian formulation, canonical transformations, and small oscillations.",
    driveFolder: "https://drive.google.com/drive/u/0/folders/1-1pu6sfr6tjWJbaVy3DmmNcUB33XyTxT",
    resources: [
      { label: "MIT 8.01SC Classical Mechanics", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/" },
      { label: "Stanford Advanced Classical Mechanics", url: "https://see.stanford.edu/Course/PHYS61" },
      { label: "NPTEL Mathematical Physics Lectures", url: "https://nptel.ac.in/courses/115105097" },
      { label: "Goldstein Textbook Guide", url: "https://www.google.com/search?q=Goldstein+Classical+Mechanics+pdf" }
    ],
    topics: [
      "Tensor: Contravariant, Covariant, Mixed & Kronecker Delta",
      "Tensor: Symmetric, Skew-symmetric & Metric Tensors",
      "Complex Variable: Analyticity & Cauchy-Riemann conditions",
      "Complex Variable: Cauchy Integral, Taylor & Laurent series",
      "Complex Variable: Residue theorem & Contour integration",
      "Fourier Series & Integrals: Square and Triangular waves",
      "Fourier Transform: Integral theorems, Sine & Cosine transforms",
      "Mechanics: Constraints, Degrees of freedom & Generalized coordinates",
      "Mechanics: D' Alembert principle & Lagrange's equations",
      "Mechanics: Hamilton's Canonical equations & Least action principle",
      "Central Force: Scattering in central field & Kepler's problems",
      "Rigid Bodies: Eulerian angles & Heavy symmetrical top motion",
      "Canonical Transformation: Poisson & Lagrange brackets, Liouville's theorem",
      "Hamilton-Jacobi Method: Harmonic oscillator & Action-angle variables",
      "Small Oscillation: Normal coordinates & Coupled oscillators"
    ]
  },
  {
    code: "PHYS 202",
    title: "Electricity and Magnetism",
    subtitle: "Advanced conceptual and rigorous mathematical treatment of electrostatics, dielectrics, network theorems, AC circuits, and magnetic properties.",
    driveFolder: "https://drive.google.com/drive/u/0/folders/1-1pu6sfr6tjWJbaVy3DmmNcUB33XyTxT",
    resources: [
      { label: "MIT 8.02 Electricity and Magnetism", url: "https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2007/" },
      { label: "Yale Fundamentals of Physics II", url: "https://openlearninginitiative.cmu.edu/courses/unfiltered-yale-physics-ii/" },
      { label: "NPTEL Electromagnetic Theory", url: "https://nptel.ac.in/courses/115101005" },
      { label: "Purcell & Morin Textbook Guide", url: "https://www.google.com/search?q=Purcell+Morin+Electricity+and+Magnetism+pdf" }
    ],
    topics: [
      "Electrostatics: Discrete & Continuous charge distribution fields",
      "Electrostatics: Gauss's Law (differential form), Poisson & Laplace equations",
      "Capacitors: Dielectric polarization, Displacement, 3 Electric Vectors",
      "Current Electricity: Ohm's law atomic view & Kirchhoff's laws",
      "Network Theorems: Superposition, Reciprocity, Thevenin, Norton, Max Power",
      "DC Circuits: LR, RC, LC and LCR circuit response analysis",
      "AC Circuits: Rms values, Power factor, Impedance & Admittance",
      "AC Resonance: Series/Parallel LCR resonance, Q-factor & Sharpness",
      "Magnetic Field: Magnetic flux, Forces on current loops & Dipole energy",
      "Magnetic Interaction: Motion of charged particles, Ampere & Biot-Savart",
      "Galvanometers: Dead-beat and Ballistic galvanometer mechanics",
      "Induction: Faraday's/Lenz's laws, Self/Mutual inductance energy storage",
      "Magnetic Properties: Permeability, Susceptibility & Scalar/Vector potentials",
      "Magnetic Domain: Hysteresis loops, Para, Dia, and Ferromagnetism"
    ]
  },
  {
    code: "PHYS 203",
    title: "Statistical Mechanics and Radiation",
    subtitle: "Vigorous mathematical treatment of classical/quantum ensembles, distribution laws, black-body dynamics, solar parameters, and pyrometers.",
    driveFolder: "https://drive.google.com/drive/u/0/folders/1-1pu6sfr6tjWJbaVy3DmmNcUB33XyTxT",
    resources: [
      { label: "MIT 8.044 Statistical Physics I", url: "https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/" },
      { label: "Stanford Statistical Mechanics (Susskind)", url: "https://theoreticalminimum.com/courses/statistical-mechanics/2013/spring" },
      { label: "Oxford Statistical Mechanics Course", url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/unbi.pdf" },
      { label: "Kerson Huang Textbook Guide", url: "https://www.google.com/search?q=Kerson+Huang+Statistical+Mechanics+pdf" }
    ],
    topics: [
      "Introduction: Phase space density distribution & Liouville's theorem",
      "Ensembles: Microcanonical, Canonical and Grand canonical equations",
      "Systems: Microstates, Macrostates, Thermodynamic probability & Equilibrium",
      "Classical: Entropy, Maxwell-Boltzmann statistics & Partition functions",
      "Equipartition Principle: Gas specific heat capacities & Paramagnetism theory",
      "Quantum Statistics: Cells, Quantum states, Bose-Einstein & Fermi-Dirac laws",
      "Bose-Einstein: Photon gas statistics, Gas degeneracy & BE Condensation",
      "Liquid Helium: Thermal properties and superfluid dynamics",
      "Fermi-Dirac: Low temperature limits, Fermi energy & White Dwarf Star theory",
      "Thermal Radiation: Emissive, Absorptive, Reflecting & Transmitting powers",
      "Radiation Laws: Kirchhoff, Stefan-Boltzmann, Wien, Rayleigh-Jeans & Planck",
      "Solar Radiation: Structure/Spectrum of Sun, Solar Constant measurements",
      "Pyrometers: Radiation pyrometer working principles & operation"
    ]
  },
  {
    code: "PHYS 204",
    title: "Computer Fundamentals and Programming",
    subtitle: "Digital computing architecture, logic gate structures, assembly programming for Intel 8085/8086, and advanced object-oriented C++ architectures.",
    driveFolder: "https://drive.google.com/drive/u/0/folders/1-1pu6sfr6tjWJbaVy3DmmNcUB33XyTxT",
    resources: [
      { label: "Harvard CS50 Intro to Computer Science", url: "https://pll.harvard.edu/course/cs50-introduction-computer-science" },
      { label: "Stanford Programming Abstractions (C++)", url: "https://see.stanford.edu/Course/CS106B" },
      { label: "MIT C++ Programming Guide", url: "https://ocw.mit.edu/courses/6-s096-introduction-to-c-and-c-january-iap-2013/" },
      { label: "Intel 8085 Microprocessor Assembly", url: "https://nptel.ac.in/courses/108107158" }
    ],
    topics: [
      "Digital Basics: Binary arithmetic with 2's complement, BCD, Gray, ASCII codes",
      "Logic Design: Boolean algebra, Logic gates, Half adder and Full adder circuits",
      "Architecture: CPU organization, Control units, ALU, and Memory tracking",
      "Microprocessor: 8085/8086 architecture models & internal registries",
      "Assembly Language: Instruction sets and low-level code routines for 8085/8086",
      "Web Architecture: Networking protocols, World Wide Web development & HTML",
      "C++ Architecture: Logic flows, variables, explicit data types, operations",
      "C++ Arrays: Data structures, string adjustments, and multi-dimensional matrices",
      "C++ Pointers: Memory management allocation, addressing references & structures",
      "OOP Paradigms: Object structures, class inheritance, file stream interfaces",
      "Data Analysis: Plotting and curve fitting structures via Python/MATLAB"
    ]
  },
  {
    code: "PHYS 205",
    title: "Differential Equations and Applications",
    subtitle: "Ordinary first/second order equations, series expansions via Frobenius, PDEs, and mathematical definitions of orthogonal polynomials.",
    driveFolder: "https://drive.google.com/drive/u/0/folders/1-1pu6sfr6tjWJbaVy3DmmNcUB33XyTxT",
    resources: [
      { label: "MIT 18.03 Differential Equations", url: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/" },
      { label: "Harvard Applied Math Differential Equations", url: "https://www.extension.harvard.edu/" },
      { label: "NPTEL Advanced Differential Equations", url: "https://nptel.ac.in/courses/111105153" },
      { label: "Schaum's Outline Reference Guide", url: "https://www.google.com/search?q=Schaum+Outline+Differential+Equations+pdf" }
    ],
    topics: [
      "First Order ODEs: Separable, Homogeneous, Exact, and Linear solutions",
      "ODEs Application: Growth models, atomic decay tracking, chemical combinations",
      "Linear Second Order: Constant coefficients, Undetermined coefficients methods",
      "Parameters Variation: Variable equations scaling and solution processing",
      "Series Solution: Variable coefficient steps across ordinary point fields",
      "Frobenius Method: Regular singular points parsing & infinite series limits",
      "PDEs: Wave equations, separation of variables, constant coefficients",
      "Transport PDEs: Heat conduction equations, diffusion matrices, Laplace systems",
      "Legendre Polynomials: Solutions, Rodrigue's formula, Generating functions",
      "Legendre Functions: Orthogonality proofs, recurrence relations for P_n(x)",
      "Orthogonal Systems: Associated Legendre, Hermite, Laguerre, Chebyshev sets",
      "Bessel Equations: Series solutions, J_n(x) functions, modified Bessel terms"
    ]
  },
  {
    code: "PHYS 206",
    title: "Mathematics-II",
    subtitle: "Real variable tracking matrices, advanced calculus parameters, expansions, plane curves, and special functions.",
    driveFolder: "https://drive.google.com/drive/u/0/folders/1-1pu6sfr6tjWJbaVy3DmmNcUB33XyTxT",
    resources: [
      { label: "Harvard Calculus Course Frameworks", url: "https://pll.harvard.edu/subject/calculus" },
      { label: "MIT 18.01 single Variable Calculus", url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/" },
      { label: "MIT 18.02 Multivariable Calculus", url: "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/" },
      { label: "Lebedev Special Functions Guide", url: "https://www.google.com/search?q=Lebedev+Special+Functions+and+Their+Applications+pdf" }
    ],
    topics: [
      "Calculus Limits: Domain structures, range mapping, function continuity",
      "Differentiation: Successive derivatives, partial differentiation paths",
      "Theorems Matrix: Rolle's theorem, Mean Value theorem statements & structures",
      "Expansions: Infinite series formulas, Taylor's theorem parsing, Indeterminates",
      "Plane Curves: Maxima/Minima optimization, Tangents, Normals, Pedal equations",
      "Curve Curvature: Geometric structures, asymptotes tracking, curve analysis",
      "Definite Integrals: Sum limit models, properties, reduction parameters",
      "Calculus Geometry: Length of plane curves, plane area bounding calculations",
      "Solids Bounding: Volumes and surface areas of solids of revolution",
      "Beta Functions: Explicit mathematical definition and properties transformation",
      "Gamma Functions: Integrals evaluations, variable conversion mapping"
    ]
  },
  {
    code: "PHYS 207",
    title: "Chemistry-II (Organic Chemistry)",
    subtitle: "Orbital interactions, functional grouping classifications, structural mechanisms, and named synthetic chemical reaction formulations.",
    driveFolder: "https://drive.google.com/drive/u/0/folders/1-1pu6sfr6tjWJbaVy3DmmNcUB33XyTxT",
    resources: [
      { label: "Harvard Principles of Organic Chemistry", url: "https://pll.harvard.edu/course/principles-organic-chemistry" },
      { label: "MIT 5.12 Organic Chemistry I", url: "https://ocw.mit.edu/courses/5-12-organic-chemistry-i-spring-2006/" },
      { label: "Yale Freshman Organic Chemistry", url: "https://openlearninginitiative.cmu.edu/courses/unfiltered-yale-organic-chemistry/" },
      { label: "Morrison & Boyd Textbook Guide", url: "https://www.google.com/search?q=Morrison+Boyd+Organic+Chemistry+pdf" }
    ],
    topics: [
      "Orbital Bonding: Hybridization techniques, empirical and molecular formulas",
      "Hydrocarbons: Paraffins, olefins, and acetylene structural properties",
      "Functional Derivatives: Aldehydes, ketones, amines chemistry and properties",
      "Halides & Alcohols: Alkalihalides, alcohol functional groupings properties",
      "Named Action: Wurtz-Fittig reaction path mechanisms and applications",
      "Acid Synthesis: Malonic and acetoacetic synthesis steps and formulations",
      "Aromatic Action: Friedel-Crafts alkylation and acylation steps",
      "Condensations: Perkin's reactions, Aldol condensation transformations",
      "Rearrangements: Benzoin condensation, Hofmann degradation mechanisms"
    ]
  }
];

const storageKey = 'cu-physics-progress-v4';
const plannerKey = 'cu-physics-planner-v4';
const themeKey = 'cu-physics-theme-v4';

let progress = JSON.parse(localStorage.getItem(storageKey)) || {};
let planner = JSON.parse(localStorage.getItem(plannerKey)) || { examDate: '', weeklyHours: 12, dailyTarget: 3 };
let activeFilter = 'all';
let searchTerm = '';

const coursesEl = document.getElementById('courses');
const template = document.getElementById('courseTemplate');
const filterRow = document.getElementById('filterRow');
const searchInput = document.getElementById('searchInput');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const doneTopicsEl = document.getElementById('doneTopics');
const totalTopicsEl = document.getElementById('totalTopics');
const percentDoneEl = document.getElementById('percentDone');
const examDateEl = document.getElementById('examDate');
const weeklyHoursEl = document.getElementById('weeklyHours');
const dailyTargetEl = document.getElementById('dailyTarget');
const plannerHint = document.getElementById('plannerHint');

function saveAll() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
  localStorage.setItem(plannerKey, JSON.stringify(planner));
}

function totalTopics() {
  return courses.reduce((s, c) => s + c.topics.length, 0);
}

function doneTopics() {
  return Object.values(progress).filter(Boolean).length;
}

function pct() {
  const t = totalTopics();
  return t ? Math.round((doneTopics() / t) * 100) : 0;
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(themeKey, theme);
}

function renderFilters() {
  const all = ['all', ...courses.map(c => c.code)];
  filterRow.innerHTML = '';
  all.forEach(code => {
    const b = document.createElement('button');
    b.className = 'filter-btn' + (code === activeFilter ? ' active' : '');
    b.textContent = code === 'all' ? 'All Core Modules' : code;
    b.addEventListener('click', () => {
      activeFilter = code;
      render();
    });
    filterRow.appendChild(b);
  });
}

function matchesSearch(course) {
  if (!searchTerm) return true;
  const hay = [
    course.code,
    course.title,
    course.subtitle,
    ...course.topics,
    ...(course.resources.map(r => r.label))
  ].join(' ').toLowerCase();
  return hay.includes(searchTerm);
}

function updateDashboard() {
  const p = pct();
  doneTopicsEl.textContent = doneTopics();
  totalTopicsEl.textContent = totalTopics();
  percentDoneEl.textContent = `${p}%`;
  progressText.textContent = `${p}% Mastery achieved`;
  progressFill.style.width = `${p}%`;
}

function render() {
  renderFilters();
  coursesEl.innerHTML = '';
  let matchCount = 0;

  courses
    .filter(c => (activeFilter === 'all' || c.code === activeFilter) && matchesSearch(c))
    .forEach((course) => {
      const clone = template.content.cloneNode(true);
      const key = course.code;

      const cardContainer = clone.querySelector('.course-card');
      if (cardContainer) {
        cardContainer.style.animationDelay = `${matchCount * 0.05}s`;
      }
      matchCount++;

      clone.querySelector('.course-code').textContent = course.code;
      clone.querySelector('.course-title').textContent = course.title;
      clone.querySelector('.course-subtitle').textContent = course.subtitle;
      clone.querySelector('.topics-badge').textContent = `${course.topics.length} Sections`;

      const done = course.topics.filter(t => progress[`${course.code}::${t}`]).length;
      const statusBadge = clone.querySelector('.status-badge');
      statusBadge.textContent = `${done}/${course.topics.length} Cleared`;
      
      if (done === course.topics.length && course.topics.length > 0) {
        statusBadge.classList.add('complete-badge');
        statusBadge.textContent = '⚛️ 100% Mastered';
      }

      const driveLink = clone.querySelector('.drive-folder-link');
      if(course.driveFolder) {
        driveLink.href = course.driveFolder;
      }

      const resources = clone.querySelector('.resource-links');
      course.resources.forEach(r => {
        const a = document.createElement('a');
        a.href = r.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = r.label;
        resources.appendChild(a);
      });

      clone.querySelector('.toggle-resources-btn').addEventListener('click', (e) => {
        const block = e.target.closest('.course-card').querySelector('.resource-links').parentElement;
        const hidden = block.style.display === 'none';
        block.style.display = hidden ? '' : 'none';
        e.target.textContent = hidden ? 'Collapse Reference Panels' : 'Expand Resources';
      });

      const topicList = clone.querySelector('.topic-list');
      course.topics.forEach(topic => {
        const li = document.createElement('li');
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.checked = !!progress[`${course.code}::${topic}`];
        cb.addEventListener('change', e => {
          const t = `${course.code}::${topic}`;
          if (e.target.checked) progress[t] = true;
          else delete progress[t];
          saveAll();
          updateDashboard();
          render();
        });
        const span = document.createElement('span');
        span.textContent = topic;
        li.appendChild(cb);
        li.appendChild(span);
        topicList.appendChild(li);
      });

      clone.querySelector('.topic-count').textContent = `${course.topics.length} Core Derivations`;
      clone.querySelector('.mark-all-btn').addEventListener('click', () => {
        course.topics.forEach(topic => progress[`${course.code}::${topic}`] = true);
        saveAll();
        updateDashboard();
        render();
      });
      clone.querySelector('.clear-all-btn').addEventListener('click', () => {
        course.topics.forEach(topic => delete progress[`${course.code}::${topic}`]);
        saveAll();
        updateDashboard();
        render();
      });

      coursesEl.appendChild(clone);
    });
  updateDashboard();
}

searchInput.addEventListener('input', e => {
  searchTerm = e.target.value.trim().toLowerCase();
  render();
});

document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('Clear entire year local checkbox matrices? This will lose current progress.')) {
    localStorage.removeItem(storageKey);
    localStorage.removeItem(plannerKey);
    progress = {};
    planner = { examDate: '', weeklyHours: 12, dailyTarget: 3 };
    examDateEl.value = '';
    weeklyHoursEl.value = 12;
    dailyTargetEl.value = 3;
    render();
    updateDashboard();
  }
});

document.getElementById('exportBtn').addEventListener('click', () => {
  const data = { progress, planner, exportedAt: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'cu-physics-tracker-backup.json';
  a.click();
  URL.revokeObjectURL(a.href);
});

document.getElementById('savePlanner').addEventListener('click', () => {
  planner = {
    examDate: examDateEl.value,
    weeklyHours: Number(weeklyHoursEl.value || 0),
    dailyTarget: Number(dailyTargetEl.value || 0)
  };
  saveAll();
  plannerHint.textContent = 'Exam strategy metrics saved!';
  setTimeout(() => { plannerHint.textContent = 'Auto-saved in browser cache storage.'; }, 3000);
});

document.querySelectorAll('[data-jump]').forEach(btn =>
  btn.addEventListener('click', () =>
    document.getElementById(btn.dataset.jump).scrollIntoView({ behavior: 'smooth', block: 'start' })
  )
);

document.getElementById('themeToggle').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  setTheme(next);
});

const savedTheme = localStorage.getItem(themeKey) || 'dark';
setTheme(savedTheme);
examDateEl.value = planner.examDate || '';
weeklyHoursEl.value = planner.weeklyHours || 12;
dailyTargetEl.value = planner.dailyTarget || 3;
render();
updateDashboard();
