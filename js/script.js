const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-links");
const langToggle = document.getElementById("langToggle");
const langLabel = document.getElementById("langLabel");
const backTop = document.getElementById("backTop");
menuToggle?.addEventListener("click", () => {
  navMenu?.classList.toggle("open");

  if (menuToggle) {
    menuToggle.innerHTML = navMenu?.classList.contains("open")
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  }
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu?.classList.remove("open");

    if (menuToggle) {
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
});
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            "active",
            link.dataset.section === entry.target.id
          );
        });
      }
    });
  }, {
    rootMargin: "-30% 0px -55% 0px",
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08
  });

  document.querySelectorAll(".reveal").forEach(el => {
    revealObserver.observe(el);
  });

} else {
  document.querySelectorAll(".reveal").forEach(el => {
    el.classList.add("visible");
  });
}
window.addEventListener("scroll", () => {
  backTop?.classList.toggle("show", window.scrollY > 500);
});

backTop?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
const translations = {
  id: {
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.portfolio": "Portofolio",
    "nav.certifications": "Sertifikasi",
    "nav.contact": "Kontak",

    "hero.role": "Penggemar Teknologi & Pengembang Web Pemula",

    "hero.description": "Lulusan Teknik Informatika Universitas Malikussaleh dengan IPK 3,65/4,00 yang memiliki minat pada teknologi informasi, pembelajaran mesin, analisis data, pengelolaan basis data, dan pengembangan website melalui proyek akademik. Memiliki pengalaman kerja di bidang dukungan TI dan penyuntingan media, termasuk konfigurasi perangkat, pemeliharaan website, serta publikasi konten digital. Teliti, disiplin, dan bertanggung jawab, serta berkomitmen mengikuti prosedur operasional standar (SOP), mengembangkan keterampilan teknis, dan mendukung kegiatan operasional secara profesional.",

    "hero.view": "Lihat Portofolio",
    "hero.about": "Tentang Saya",

    "about.profile": "Profil",

    "about.p1": "Lulusan Teknik Informatika Universitas Malikussaleh dengan IPK 3,65/4,00. Memiliki pengalaman selama lima bulan sebagai pekerja lepas di bidang manajemen media sosial serta enam bulan di bidang dukungan TI dan penyuntingan media. Pengalaman tersebut mencakup pengelolaan dan pembuatan konten media sosial, pemantauan kinerja website, serta penerapan dan penyempurnaan sistem. Selain pengetahuan teknis, pengalaman ini mengasah kemampuan komunikasi, kerja sama tim, adaptasi, dan pemecahan masalah untuk menghasilkan solusi yang bermanfaat.",

    "about.p2": "Menguasai Microsoft Office, SQL, dan Google Workspace, serta memiliki pengetahuan dasar HTML, PHP, dan Python. Terampil menggunakan CapCut untuk penyuntingan konten.",

    "about.p3": "Memiliki kemampuan analitis yang baik, teliti, dan mampu bekerja secara sistematis, baik secara mandiri maupun dalam tim.",

    "about.experience": "Pengalaman Kerja",
    "about.skills": "Keahlian",

    "portfolio.title": "Proyek Portofolio",
    "portfolio.subtitle": "Beberapa proyek yang pernah saya kerjakan",

    "cert.title": "Sertifikasi dan Pelatihan",
    "cert.subtitle": "Sertifikasi dan pelatihan yang telah saya ikuti",

    "contact.title": "Hubungi Saya",
    "contact.subtitle": "Terbuka untuk peluang kerja dan kolaborasi",

    "about.section": "TENTANG SAYA",

    "fact.location": "LOKASI",
    "fact.education": "PENDIDIKAN",
    "fact.gpa": "IPK",
    "fact.linkedin": "LINKEDIN",

    "job.freelance": "Manajemen Media Sosial Lepas",
    "job.intern": "Magang – Entri Data",
    "job.editor": "Editor Media & Dukungan TI",

    "job.freelance1": "Mengelola akun media sosial untuk mendukung promosi produk, meningkatkan visibilitas merek, dan memperluas jangkauan audiens.",

    "job.freelance2": "Membuat dan menyunting konten promosi, termasuk desain visual dan materi publikasi sesuai kebutuhan pemasaran.",

    "job.freelance3": "Merencanakan dan menerbitkan konten secara terjadwal agar informasi produk dan promosi tersampaikan dengan baik.",

    "job.freelance4": "Menanggapi pertanyaan dan pesan pelanggan untuk mendukung komunikasi serta layanan pelanggan.",

    "job.intern1": "Memasukkan, memperbarui, dan mengelola data kecambah secara sistematis untuk mendukung administrasi dan pelaporan operasional perusahaan.",

    "job.intern2": "Mengoperasikan aplikasi dan sistem internal perusahaan untuk pengelolaan data serta proses pengajuan dan persetujuan sesuai prosedur.",

    "job.intern3": "Menggunakan aplikasi SAP untuk mendukung kegiatan administrasi dan operasional perusahaan.",

    "job.intern4": "Memeriksa kelengkapan dan keakuratan data untuk meminimalkan kesalahan pencatatan.",

    "job.editor1": "Menyunting dan meninjau lebih dari 50 artikel berita setiap hari sebelum dipublikasikan secara daring untuk memastikan keakuratan informasi, tata bahasa, dan kelayakan publikasi.",

    "job.editor2": "Memberikan dukungan teknis untuk perangkat, sistem operasi, dan website, termasuk melakukan pemecahan masalah teknis dasar.",

    "job.editor3": "Mendukung pengelolaan dan pemeliharaan website media agar publikasi konten dan penyebaran informasi berjalan lancar.",

    "skills.technical": "Keahlian Teknis",
    "skills.professional": "Keahlian Profesional",

    "project.complaint": "Sistem Pengaduan Masyarakat Berbasis Web",

    "project.complaint.desc": "Sistem pengelolaan pengaduan masyarakat berbasis web yang dikembangkan menggunakan Python, HTML, CSS, dan MySQL. Sistem ini menyediakan fitur pendaftaran pengguna, pengajuan dan pengelolaan pengaduan, serta panel admin untuk memantau dan mengelola data pengaduan melalui basis data MySQL yang dikelola dengan phpMyAdmin.",

    "project.thesis": "Klasifikasi Kualitas Bibit Kelapa Sawit",

    "project.thesis.desc": "Analisis ini membandingkan kinerja dua algoritma dalam menentukan kategori bibit untuk mendukung pengambilan keputusan dalam evaluasi kualitas bibit kelapa sawit berdasarkan karakteristik pertumbuhan di Kebun PTPN IV Pabatu.",

    "project.news": "Portal Berita Sergap86",

    "project.news.desc": "Website berbasis CMS Blogger dengan tampilan responsif dan desain yang mudah digunakan. Website dikembangkan dengan HTML, CSS, dan JavaScript untuk menyesuaikan tampilan serta meningkatkan fungsionalitasnya.",

    "project.social.desc": "Mencakup perencanaan jadwal dan pembuatan konten media sosial untuk meningkatkan interaksi dan mendukung penjualan.",

    "tag.kknt": "KKNT · Pengembangan Web",
    "tag.thesis": "Skripsi · Pembelajaran Mesin",
    "tag.news": "Situs Berita · Blogger",
    "tag.freelance": "Pekerja Lepas · FnB D'mentai",

    "cert.org": "Sertifikat Apresiasi Organisasi – Keluarga Mahasiswa Tebing Tinggi Bersatu",
    "cert.org.desc": "KATIBER Lhokseumawe–Aceh Utara",

    "cert.ai": "Pelatihan “Logika dan Konsep AI untuk Mahasiswa S1” – Orbit Skills",
    "cert.ai.desc": "Orbit Future Academy",

    "cert.excel": "Bootcamp Analis Data Excel – Harisenin.com",

    "cert.orbit": "Program Artificial Intelligence untuk 4 Pekerjaan – Orbit Academy",
    "cert.orbit.desc": "PT Orbit Ventura Indonesia",

    "cert.toefl.desc": "Pusat Bahasa Universitas Negeri Jakarta",

    "contact.connect": "Mari Terhubung!",
    "contact.open": "Saya terbuka untuk peluang kerja dan proyek lepas",

    "footer.rights": "Hak cipta dilindungi."
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",

    "hero.role": "Tech Enthusiast & Junior Web Developer",

    "hero.description": "Informatics Engineering graduate from Universitas Malikussaleh with a GPA of 3.65/4.00 has an interest in information technology, machine learning, data analysis, database management, and website development gained through academic projects. Has work experience as an IT Support and Media Editing, including hardware configuration, website maintenance, and digital content publishing. Detail-oriented, disciplined, and responsible, with a commitment to following standard operating procedures (SOPs), continuously developing technical skills, and contributing professionally to dynamic operational activities goals.",

    "hero.view": "View Portfolio",
    "hero.about": "About Me",

    "about.profile": "Profile",

    "about.p1": "Informatics Engineering graduate from Universitas Malikussaleh with a GPA of 3.65/4.00. Has five months of freelance experience in social media management and six months of experience in IT support and media editing. This experience includes managing and creating social media content, monitoring website performance, and implementing and improving systems. Beyond technical knowledge, these roles strengthened communication, teamwork, adaptability, and problem-solving skills to deliver useful solutions.",

    "about.p2": "Proficient in Microsoft Office, SQL, and Google Workspace, with basic knowledge of HTML, PHP, and Python. Skilled in using CapCut for content editing.",

    "about.p3": "Has good analytical skills, pays attention to detail, and works systematically both independently and as part of a team.",

    "about.experience": "Work Experience",
    "about.skills": "Skills",

    "portfolio.title": "Portfolio Projects",
    "portfolio.subtitle": "Some projects I have worked on",

    "cert.title": "Certifications and Training",
    "cert.subtitle": "Certifications and training I have completed",

    "contact.title": "Contact Me",
    "contact.subtitle": "Available for job opportunities and collaboration",

    "about.section": "ABOUT ME",

    "fact.location": "LOCATION",
    "fact.education": "EDUCATION",
    "fact.gpa": "GPA",
    "fact.linkedin": "LINKEDIN",

    "job.freelance": "Freelance Social Media Management",
    "job.intern": "Data Entry Intern",
    "job.editor": "Media Editor & IT Support",

    "job.freelance1": "Managed social media accounts to support product promotion, increase brand visibility, and expand audience reach.",

    "job.freelance2": "Created and edited promotional content, including visual designs and publication materials according to marketing needs.",

    "job.freelance3": "Planned and published content on a regular schedule to communicate product information and promotions effectively.",

    "job.freelance4": "Responded to customer inquiries and messages to support communication and customer service.",

    "job.intern1": "Systematically entered, updated, and managed sprout data to support company administration and operational reporting.",

    "job.intern2": "Operated company applications and internal systems for data management and submission and approval processes according to procedures.",

    "job.intern3": "Used SAP to support company administrative and operational activities.",

    "job.intern4": "Checked data completeness and accuracy to minimize recording errors.",

    "job.editor1": "Edited and reviewed more than 50 news articles daily before online publication, ensuring information accuracy, correct grammar, and suitability for publication.",

    "job.editor2": "Provided technical support for devices, operating systems, and websites, including basic technical troubleshooting.",

    "job.editor3": "Supported media website management and maintenance to ensure smooth content publication and information sharing.",

    "skills.technical": "Technical Skills",
    "skills.professional": "Professional Skills",

    "project.complaint": "Web-Based Public Complaint System",

    "project.complaint.desc": "A web-based public complaint management system developed using Python, HTML, CSS, and MySQL. It includes user registration, complaint submission and management, and an admin panel for monitoring and managing complaint data in a MySQL database managed with phpMyAdmin.",

    "project.thesis": "Classification of Oil Palm Seedling Quality",

    "project.thesis.desc": "This analysis compares two algorithms for categorizing seedlings to support decisions when evaluating oil palm seedling quality based on growth characteristics at PTPN IV Pabatu Plantation.",

    "project.news": "Sergap86 News Portal",

    "project.news.desc": "A website built on the Blogger CMS with a responsive layout and user-friendly design, using HTML, CSS, and JavaScript to customize its appearance and improve functionality.",

    "project.social.desc": "Includes social media content planning and creation to increase engagement and support sales.",

    "tag.kknt": "KKNT · Web Development",
    "tag.thesis": "Thesis · Machine Learning",
    "tag.news": "News Site · Blogger",
    "tag.freelance": "Freelance · FnB D'mentai",

    "cert.org": "Organization Appreciation Certificate – Keluarga Mahasiswa Tebing Tinggi Bersatu",
    "cert.org.desc": "KATIBER Lhokseumawe–Aceh Utara",

    "cert.ai": "Training in “AI Logic and Concepts for Undergraduate Students” – Orbit Skills",
    "cert.ai.desc": "Orbit Future Academy",

    "cert.excel": "Excel Data Analyst Bootcamp – Harisenin.com",

    "cert.orbit": "Artificial Intelligence for 4 Jobs Program – Orbit Academy",
    "cert.orbit.desc": "PT Orbit Ventura Indonesia",

    "cert.toefl.desc": "Language Center of Universitas Negeri Jakarta",

    "contact.connect": "Let's Connect!",
    "contact.open": "I'm open to job opportunities and freelance projects",

    "footer.rights": "All rights reserved."
  }
};
const translationTargets = {
  "nav.home": ".nav-link[data-section='home']",
  "nav.about": ".nav-link[data-section='about']",
  "nav.portfolio": ".nav-link[data-section='portfolio']",
  "nav.certifications": ".nav-link[data-section='certifications']",
  "nav.contact": ".nav-link[data-section='contact']",

  "hero.role": ".hero-content h2",
  "hero.description": ".hero-description",
  "hero.view": ".hero-actions a.btn-primary span",
  "hero.about": ".hero-actions a.btn-outline",

  "about.section": ".about-section > .section-label",
  "about.profile": ".profile-card .card-heading h2",
  "about.p1": ".profile-card [data-i18n='about.p1']",
  "about.p2": ".profile-card [data-i18n='about.p2']",
  "about.p3": ".profile-card [data-i18n='about.p3']",
  "about.experience": ".experience-card .card-heading h2",
  "about.skills": ".skills-card .card-heading h2",

  "fact.location": ".fact:nth-child(1) small",
  "fact.education": ".fact:nth-child(2) small",
  "fact.gpa": ".fact:nth-child(3) small",
  "fact.linkedin": ".fact:nth-child(4) small",

  // Selector khusus untuk dua bagian Skills.
  "skills.technical": "#technicalSkills .skill-title h3",
  "skills.professional": "#professionalSkills .skill-title h3",

  "portfolio.title": "#portfolio .section-title h2",
  "portfolio.subtitle": "#portfolio .section-title p",

  "cert.title": "#certifications .section-title h2",
  "cert.subtitle": "#certifications .section-title p",

  "contact.title": "#contact .section-title h2",
  "contact.subtitle": "#contact .section-title p",
  "contact.connect": ".contact-card > h2",
  "contact.open": ".contact-card > p"
};
const repeatedTargets = {
  "job.freelance": [
    ".timeline-item:nth-child(1) .job-top h3"
  ],

  "job.intern": [
    ".timeline-item:nth-child(2) .job-top h3"
  ],

  "job.editor": [
    ".timeline-item:nth-child(3) .job-top h3"
  ],

  "job.freelance1": [
    ".timeline-item:nth-child(1) li:nth-child(1)"
  ],

  "job.freelance2": [
    ".timeline-item:nth-child(1) li:nth-child(2)"
  ],

  "job.freelance3": [
    ".timeline-item:nth-child(1) li:nth-child(3)"
  ],

  "job.freelance4": [
    ".timeline-item:nth-child(1) li:nth-child(4)"
  ],

  "job.intern1": [
    ".timeline-item:nth-child(2) li:nth-child(1)"
  ],

  "job.intern2": [
    ".timeline-item:nth-child(2) li:nth-child(2)"
  ],

  "job.intern3": [
    ".timeline-item:nth-child(2) li:nth-child(3)"
  ],

  "job.intern4": [
    ".timeline-item:nth-child(2) li:nth-child(4)"
  ],

  "job.editor1": [
    ".timeline-item:nth-child(3) li:nth-child(1)"
  ],

  "job.editor2": [
    ".timeline-item:nth-child(3) li:nth-child(2)"
  ],

  "job.editor3": [
    ".timeline-item:nth-child(3) li:nth-child(3)"
  ],

  "project.complaint": [
    ".project-card:nth-child(1) h3"
  ],

  "project.complaint.desc": [
    ".project-card:nth-child(1) .project-body p"
  ],

  "project.thesis": [
    ".project-card:nth-child(2) h3"
  ],

  "project.thesis.desc": [
    ".project-card:nth-child(2) .project-body p"
  ],

  "project.news": [
    ".project-card:nth-child(3) h3"
  ],

  "project.news.desc": [
    ".project-card:nth-child(3) .project-body p"
  ],

  "project.social.desc": [
    ".project-card:nth-child(4) .project-body p"
  ],

  "tag.kknt": [
    ".project-card:nth-child(1) .tag"
  ],

  "tag.thesis": [
    ".project-card:nth-child(2) .tag"
  ],

  "tag.news": [
    ".project-card:nth-child(3) .tag"
  ],

  "tag.freelance": [
    ".project-card:nth-child(4) .tag"
  ],

  "cert.org": [
    ".cert-card:nth-child(1) h3"
  ],

  "cert.org.desc": [
    ".cert-card:nth-child(1) p"
  ],

  "cert.ai": [
    ".cert-card:nth-child(2) h3"
  ],

  "cert.ai.desc": [
    ".cert-card:nth-child(2) p"
  ],

  "cert.excel": [
    ".cert-card:nth-child(3) h3"
  ],

  "cert.orbit": [
    ".cert-card:nth-child(4) h3"
  ],

  "cert.orbit.desc": [
    ".cert-card:nth-child(4) p"
  ],

  "cert.toefl.desc": [
    ".cert-card:nth-child(5) p"
  ]
};
function applyLanguage(lang) {
  const dictionary = translations[lang];

  if (!dictionary) return;

  document.documentElement.lang = lang;

  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      lang === "id"
        ? "Suhaiba Nasyira Hariono — Penggemar Teknologi dan Pengembang Web Pemula."
        : "Suhaiba Nasyira Hariono — Tech Enthusiast & Junior Web Developer."
    );

  // Terjemahkan elemen dengan data-i18n.
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;

    if (dictionary[key]) {
      el.textContent = dictionary[key];
    }
  });

  // Terjemahkan elemen berdasarkan selector.
  Object.entries(translationTargets).forEach(([key, selector]) => {
    const el = document.querySelector(selector);

    if (el && dictionary[key]) {
      el.textContent = dictionary[key];
    }
  });

  // Terjemahkan elemen berulang.
  Object.entries(repeatedTargets).forEach(([key, selectors]) => {
    if (!dictionary[key]) return;

    selectors.forEach(selector => {
      const el = document.querySelector(selector);

      if (el) {
        el.textContent = dictionary[key];
      }
    });
  });
  const technicalSkills = [
    ["Analisis Data", "Data Analysis"],
    ["Microsoft Office", "Microsoft Office"],
    ["SQL & MySQL", "SQL & MySQL"],
    ["Google Workspace", "Google Workspace"],
    ["HTML & PHP Dasar", "Basic HTML & PHP"],
    ["Pemrograman Python Dasar", "Basic Python Programming"],
    ["Pemantauan Performa Website", "Website Performance Monitoring"],
    ["Pengelolaan & Pengolahan Data", "Data Management & Processing"],
    ["Penulisan Blog & Publikasi Konten Digital", "Blog Writing & Digital Content Publishing"]
  ];
  const professionalSkills = [
    ["Entri & Verifikasi Data", "Data Entry & Verification"],
    ["Penyusunan Laporan & Rekapitulasi Data", "Report Preparation & Data Recapitulation"],
    ["Berpikir Analitis", "Analytical Thinking"],
    ["Ketelitian", "Attention to Detail"],
    ["Pemecahan Masalah", "Problem Solving"],
    ["Kerja Sama Tim", "Teamwork & Collaboration"],
    ["Komunikasi", "Communication"],
    ["Manajemen Waktu", "Time Management"],
    ["Adaptasi & Cepat Belajar", "Adaptability & Quick Learning"]
  ];

  // Mengatur teks setiap chip sesuai bahasa.
  const setChips = (selector, pairs) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      if (pairs[index]) {
        el.textContent = pairs[index][lang === "id" ? 0 : 1];
      }
    });
  };

  // Gunakan ID khusus, bukan nth-child().
  setChips(
    "#technicalSkills .chips span",
    technicalSkills
  );

  setChips(
    "#professionalSkills .chips span",
    professionalSkills
  );

  // Pastikan bagian Skills tampil.
  const skillsCard = document.querySelector(".skills-card");

  if (skillsCard) {
    skillsCard.classList.add("visible");
  }

  document
    .querySelectorAll("#technicalSkills, #professionalSkills")
    .forEach(box => {
      box.style.visibility = "visible";
      box.style.opacity = "1";
    });
  const footer = document.querySelector("footer p");

  if (footer) {
    footer.innerHTML =
      `© <span id="year">${new Date().getFullYear()}</span> Suhaiba Nasyira hariono. ${dictionary["footer.rights"]}`;
  }
  if (langLabel) {
    langLabel.textContent = lang === "id" ? "EN" : "ID";
  }

  if (langToggle) {
    langToggle.setAttribute(
      "aria-label",
      lang === "id"
        ? "Switch to English"
        : "Beralih ke Bahasa Indonesia"
    );

    langToggle.setAttribute(
      "title",
      lang === "id"
        ? "Switch to English"
        : "Beralih ke Bahasa Indonesia"
    );
  }

  try {
    localStorage.setItem("portfolioLanguage", lang);
  } catch (_) {
    // Website tetap berjalan jika localStorage tidak tersedia.
  }
}
let currentLang = "id";

try {
  const savedLang = localStorage.getItem("portfolioLanguage");

  if (savedLang === "id" || savedLang === "en") {
    currentLang = savedLang;
  }
} catch (_) {
  // Gunakan bahasa Indonesia jika localStorage tidak tersedia.
}
langToggle?.addEventListener("click", () => {
  currentLang = currentLang === "id" ? "en" : "id";

  applyLanguage(currentLang);
});

// Terapkan bahasa saat halaman dibuka.
applyLanguage(currentLang);