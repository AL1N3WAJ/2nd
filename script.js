const courses = [
  {
    code: "PHYS 201",
    title: "Mathematical Physics and Classical Mechanics-II",
    subtitle: "Tensor analysis, complex variables, PDEs, variational principles, Hamiltonian mechanics, rigid bodies, canonical transformations, Hamilton-Jacobi method, and small oscillations.",
    resources: [
      { label: "MIT 8.01SC", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/" },
      { label: "MIT 18.03SC", url: "https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/" },
      { label: "Khan Complex", url: "https://www.khanacademy.org/math/algebra-home/alg-complex-numbers" }
    ],
    topics: [
      "Tensor analysis",
      "Complex variables",
      "Partial differential equations",
      "Variational principle",
      "Lagrangian formulation",
      "Hamiltonian equations",
      "Two-body central force",
      "Rigid bodies",
      "Canonical transformation",
      "Hamilton-Jacobi method",
      "Small oscillation"
    ]
  },
  {
    code: "PHYS 202",
    title: "Electricity and Magnetism",
    subtitle: "Electrostatics, capacitors, current electricity, DC/AC circuits, magnetic fields, induction, and magnetic properties of matter.",
    resources: [
      { label: "MIT 8.02", url: "https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2007/" },
      { label: "MIT 8.02 YouTube", url: "https://www.youtube.com/playlist?list=PLyQSN7X0ro2314mKyUiOILaOC2hk6Pc3j" }
    ],
    topics: [
      "Electrostatics",
      "Capacitors and dielectrics",
      "Current electricity",
      "DC circuits",
      "AC circuits",
      "Magnetic field",
      "Magnetic forces",
      "Electromagnetic induction",
      "Magnetic properties of matter"
    ]
  },
  {
    code: "PHYS 203",
    title: "Statistical Mechanics and Radiation",
    subtitle: "Ensembles, statistics, partition function, quantum distributions, black-body radiation, and solar radiation.",
    resources: [
      { label: "MIT 8.044", url: "https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/" },
      { label: "Khan DE", url: "https://www.khanacademy.org/math/differential-equations" }
    ],
    topics: [
      "Phase space",
      "Liouville's theorem",
      "Microcanonical ensemble",
      "Canonical ensemble",
      "Grand canonical ensemble",
      "Maxwell-Boltzmann statistics",
      "Bose-Einstein statistics",
      "Fermi-Dirac statistics",
      "Black-body radiation",
      "Solar radiation",
      "Radiation pyrometers"
    ]
  },
  {
    code: "PHYS 204",
    title: "Computer Fundamentals and Programming",
    subtitle: "Digital systems, microprocessor architecture, networking, HTML, C++, and programming paradigms.",
    resources: [
      { label: "MIT C/C++", url: "https://ocw.mit.edu/courses/6-s096-introduction-to-c-and-c-january-iap-2013/" },
      { label: "MIT Programming", url: "https://ocw.mit.edu/courses/6-s096-effective-programming-in-c-and-c-january-iap-2014/" }
    ],
    topics: [
      "Binary arithmetic",
      "Data representation",
      "Logic gates",
      "Boolean algebra",
      "Half adder and full adder",
      "CPU and memory",
      "8085/8086 architecture",
      "Networking and WWW",
      "HTML introduction",
      "C++ basics",
      "Pointers and classes",
      "Files",
      "Programming paradigms"
    ]
  },
  {
    code: "PHYS 205",
    title: "Differential Equations and Applications",
    subtitle: "First-order ODEs, second-order ODEs, series solution, Frobenius method, orthogonal polynomials, and Bessel functions.",
    resources: [
      { label: "MIT 18.03SC", url: "https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/" },
      { label: "Khan DE", url: "https://www.khanacademy.org/math/differential-equations" }
    ],
    topics: [
      "First order equations",
      "Second order equations",
      "Undetermined coefficients",
      "Variation of parameters",
      "Series solution",
      "Frobenius method",
      "Legendre polynomials",
      "Hermite polynomials",
      "Laguerre polynomials",
      "Chebyshev polynomial",
      "Bessel equation"
    ]
  },
  {
    code: "PHYS 206",
    title: "Mathematics-II",
    subtitle: "Differential calculus, integral calculus, and beta-gamma functions.",
    resources: [
      { label: "MIT 18.01SC", url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/" },
      { label: "MIT 18.02SC", url: "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/" }
    ],
    topics: [
      "Limits and continuity",
      "Differentiation",
      "Taylor theorem",
      "Maxima and minima",
      "Indefinite integrals",
      "Definite integrals",
      "Arc length",
      "Area and volume",
      "Beta function",
      "Gamma function"
    ]
  },
  {
    code: "PHYS 207",
    title: "Chemistry-II (Organic)",
    subtitle: "Hybridization, hydrocarbons, aldehydes, ketones, amines, alcohols, and major organic reactions.",
    resources: [
      { label: "MIT OCW Chemistry", url: "https://ocw.mit.edu/" },
      { label: "Organic Chem", url: "https://www.youtube.com/results?search_query=organic+chemistry+lecture+playlist" }
    ],
    topics: [
      "Hybridization",
      "Empirical formula",
      "Molecular formula",
      "Paraffins",
      "Olefins",
      "Acetylene",
      "Aldehydes and ketones",
      "Amines",
      "Alcohols",
      "Wurtz-Fittig reaction",
      "Friedel-Crafts reaction",
      "Perkin's reaction",
      "Aldol condensation",
      "Benzoin condensation",
      "Hofmann degradation"
    ]
  }
];

const storageKey = 'syllabus-progress-v3';
const linksKey = 'syllabus-links-v3';
const plannerKey = 'syllabus-planner-v3';
const themeKey = 'syllabus-theme-v3';

let progress = JSON.parse(localStorage.getItem(storageKey)) || {};
let savedLinks = JSON.parse(localStorage.getItem(linksKey)) || {};
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
const savedLinksCountEl = document.getElementById('savedLinksCount');
const examDateEl = document.getElementById('examDate');
const weeklyHoursEl = document.getElementById('weeklyHours');
const dailyTargetEl = document.getElementById('dailyTarget');
const plannerHint = document.getElementById('plannerHint');

function saveAll() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
  localStorage.setItem(linksKey, JSON.stringify(savedLinks));
  localStorage.setItem(plannerKey, JSON.stringify(planner));
}

function totalTopics() {
  return courses.reduce((s, c) => s + c.topics.length, 0);
}

function doneTopics() {
  return Object.values(progress).filter(Boolean).length;
}

function savedLinksCount() {
  return Object.values(savedLinks).filter(v => (v?.pyq || v?.notes)).length;
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
    b.textContent = code === 'all' ? 'All' : code;
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
    ...(course.resources.map(r => r.label + ' ' + r.url)),
    (savedLinks[course.code]?.pyq || ''),
    (savedLinks[course.code]?.notes || '')
  ].join(' ').toLowerCase();
  return hay.includes(searchTerm);
}

function updateDashboard() {
  const p = pct();
  doneTopicsEl.textContent = doneTopics();
  totalTopicsEl.textContent = totalTopics();
  percentDoneEl.textContent = `${p}%`;
  progressText.textContent = `${p}% completed`;
  progressFill.style.width = `${p}%`;
  savedLinksCountEl.textContent = savedLinksCount();
}

function render() {
  renderFilters();
  coursesEl.innerHTML = '';
  courses
    .filter(c => (activeFilter === 'all' || c.code === activeFilter) && matchesSearch(c))
    .forEach(course => {
      const clone = template.content.cloneNode(true);
      const key = course.code;

      clone.querySelector('.course-code').textContent = course.code;
      clone.querySelector('.course-title').textContent = course.title;
      clone.querySelector('.course-subtitle').textContent = course.subtitle;
      clone.querySelector('.topics-badge').textContent = `${course.topics.length} topics`;

      const done = course.topics.filter(t => progress[`${course.code}::${t}`]).length;
      clone.querySelector('.status-badge').textContent = `${done}/${course.topics.length} done`;

      const resources = clone.querySelector('.resource-links');
      course.resources.forEach(r => {
        const a = document.createElement('a');
        a.href = r.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = r.label;
        resources.appendChild(a);
      });

      const pyq = clone.querySelector('.pyq-link');
      const notes = clone.querySelector('.notes-link');
      pyq.value = savedLinks[key]?.pyq || '';
      notes.value = savedLinks[key]?.notes || '';

      const savedBox = clone.querySelector('.saved-links');
      const renderSaved = () => {
        const pyqLink = savedLinks[key]?.pyq || '';
        const notesLink = savedLinks[key]?.notes || '';
        savedBox.innerHTML =
          `<div><strong>PYQ:</strong> ${pyqLink ? `<a href="${pyqLink}" target="_blank" rel="noopener noreferrer">Open Google Drive</a>` : 'Not added'}</div>` +
          `<div><strong>Notes:</strong> ${notesLink ? `<a href="${notesLink}" target="_blank" rel="noopener noreferrer">Open Google Drive</a>` : 'Not added'}</div>`;
      };

      clone.querySelector('.save-links-btn').addEventListener('click', () => {
        savedLinks[key] = { pyq: pyq.value.trim(), notes: notes.value.trim() };
        saveAll();
        render();
        updateDashboard();
      });

      clone.querySelector('.clear-links-btn').addEventListener('click', () => {
        delete savedLinks[key];
        saveAll();
        render();
        updateDashboard();
      });

      clone.querySelector('.toggle-resources-btn').addEventListener('click', (e) => {
        const block = e.target.closest('.course-card').querySelector('.resource-links').parentElement;
        const hidden = block.style.display === 'none';
        block.style.display = hidden ? '' : 'none';
        e.target.textContent = hidden ? 'Hide' : 'Show';
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

      clone.querySelector('.topic-count').textContent = `${course.topics.length} topics`;
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

      renderSaved();
      coursesEl.appendChild(clone);
    });
  updateDashboard();
}

searchInput.addEventListener('input', e => {
  searchTerm = e.target.value.trim().toLowerCase();
  render();
});

document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('Reset all progress, links, and planner?')) {
    localStorage.removeItem(storageKey);
    localStorage.removeItem(linksKey);
    localStorage.removeItem(plannerKey);
    progress = {};
    savedLinks = {};
    planner = { examDate: '', weeklyHours: 12, dailyTarget: 3 };
    examDateEl.value = '';
    weeklyHoursEl.value = 12;
    dailyTargetEl.value = 3;
    render();
    updateDashboard();
  }
});

document.getElementById('exportBtn').addEventListener('click', () => {
  const data = { progress, savedLinks, planner, exportedAt: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'syllabus-backup.json';
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
  plannerHint.textContent = 'Planner saved.';
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