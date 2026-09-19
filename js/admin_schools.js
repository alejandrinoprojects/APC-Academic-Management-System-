    // =========================================================================
    // IMAGE UPLOAD & AUTO-SCALING ENGINE (Photos, Banners, and Circular Logos)
    // =========================================================================
    function triggerImageUpload(inputId) {
      const input = document.getElementById(inputId);
      if (input) input.click();
    }

    function handleImageUpload(event, targetElementId, isBackground = false, storageKey = null) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        const dataUrl = e.target.result;
        const target = document.getElementById(targetElementId);
        if (target) {
          if (isBackground) {
            target.style.backgroundImage = `url("${dataUrl}")`;
            target.style.backgroundSize = 'cover';
            target.style.backgroundPosition = 'center';
          } else {
            target.src = dataUrl;
          }
        }
        if (storageKey) {
          try {
            localStorage.setItem(storageKey, dataUrl);
          } catch (err) {
            console.warn('Storage quota exceeded, displayed in memory.');
          }
        }
        if (typeof showToast === 'function') {
          showToast('Image uploaded and auto-scaled successfully!');
        }
      };
      reader.readAsDataURL(file);
    }

    function handleHeroBannerUpload(event) {
      handleImageUpload(event, 'heroBannerContainer', true, 'apc_hero_bg');
    }

    function handleSchoolBannerUpload(event, schoolId) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        const dataUrl = e.target.result;
        const school = ACADEMIC_SCHOOLS_DATA.find(s => s.id === schoolId);
        if (school) {
          school.bannerImage = dataUrl;
          try {
            localStorage.setItem('school_banner_' + schoolId, dataUrl);
          } catch (err) {}
          renderSchoolCards();
          if (typeof showToast === 'function') {
            showToast(`Banner photo for ${school.name} updated and auto-scaled!`);
          }
        }
      };
      reader.readAsDataURL(file);
    }

    function handleSchoolLogoUpload(event, schoolId) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        const dataUrl = e.target.result;
        const school = ACADEMIC_SCHOOLS_DATA.find(s => s.id === schoolId);
        if (school) {
          school.logoImage = dataUrl;
          try {
            localStorage.setItem('school_logo_' + schoolId, dataUrl);
          } catch (err) {}
          renderSchoolCards();
          if (typeof showToast === 'function') {
            showToast(`Logo emblem for ${school.name} updated and auto-scaled!`);
          }
        }
      };
      reader.readAsDataURL(file);
    }

    // =========================================================================
    // ACADEMIC SCHOOLS DATA & CAROUSEL CONTROLLER
    // =========================================================================
    const ACADEMIC_SCHOOLS_DATA = [
      {
        id: 'soe',
        name: 'ENGINEERING',
        bannerTitle: 'SCHOOL OF',
        color: '#FF6B00',
        badgeBorder: 'border-[#FF6B00]',
        badgeBg: 'from-[#FF6B00] to-[#E55A00]',
        bannerGrad: 'from-[#16120e] via-[#2a1a12] to-[#0f0b08]',
        bannerIcon: '⚙️',
        director: 'SOE Executive Director',
        programs: [
          { code: 'BSCpE', name: 'Bachelor of Science in Computer Engineering' },
          { code: 'BSCE', name: 'Bachelor of Science in Civil Engineering' },
          { code: 'BSECE', name: 'Bachelor of Science in Electronics Engineering' }
        ]
      },
      {
        id: 'socit',
        name: 'COMPUTING & IT',
        bannerTitle: 'SCHOOL OF',
        color: '#00A4EF',
        badgeBorder: 'border-[#00A4EF]',
        badgeBg: 'from-[#00A4EF] to-[#0072C6]',
        bannerGrad: 'from-[#071324] via-[#0d2242] to-[#050d1a]',
        bannerIcon: '💻',
        director: 'SoCIT Executive Director',
        programs: [
          { code: 'BSCS', name: 'Bachelor of Science in Computer Science' },
          { code: 'BSIT', name: 'Bachelor of Science in Information Technology' }
        ]
      },
      {
        id: 'soma',
        name: 'MULTIMEDIA ARTS',
        bannerTitle: 'SCHOOL OF',
        color: '#EF4444',
        badgeBorder: 'border-[#EF4444]',
        badgeBg: 'from-[#EF4444] to-[#B91C1C]',
        bannerGrad: 'from-[#1f0a0d] via-[#331117] to-[#140608]',
        bannerIcon: '🎨',
        director: 'SoMA Executive Director',
        programs: [
          { code: 'BMMA', name: 'Bachelor of Multimedia Arts' },
          { code: 'BSPsych', name: 'Bachelor of Science in Psychology' }
        ]
      },
      {
        id: 'som',
        name: 'MANAGEMENT',
        bannerTitle: 'SCHOOL OF',
        color: '#F59E0B',
        badgeBorder: 'border-[#F59E0B]',
        badgeBg: 'from-[#F59E0B] to-[#D97706]',
        bannerGrad: 'from-[#1c1809] via-[#2e260e] to-[#120f06]',
        bannerIcon: '📊',
        director: 'SoM Executive Director',
        programs: [
          { code: 'BSBA', name: 'Bachelor of Science in Business Management' },
          { code: 'BSA', name: 'Bachelor of Science in Accountancy' }
        ]
      },
      {
        id: 'soa',
        name: 'ARCHITECTURE',
        bannerTitle: 'SCHOOL OF',
        color: '#A855F7',
        badgeBorder: 'border-[#A855F7]',
        badgeBg: 'from-[#A855F7] to-[#7E22CE]',
        bannerGrad: 'from-[#150d22] via-[#241538] to-[#0d0816]',
        bannerIcon: '📐',
        director: 'SoA Executive Director',
        programs: [
          { code: 'BSArch', name: 'Bachelor of Science in Architecture' }
        ]
      }
    ];

    let currentSchoolSlide = 0;

    function renderSchoolCards() {
      const container = document.getElementById('schoolsGridContainer');
      if (!container) return;

      const schoolThemes = {
        soe: {
          svgShapes: `<svg class="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40" preserveAspectRatio="none" viewBox="0 0 300 120" fill="none">
            <polygon points="0,0 140,0 90,120 0,120" fill="#381e10"/>
            <polygon points="120,0 300,0 300,120 180,120" fill="#25140b"/>
            <circle cx="70" cy="35" r="22" stroke="#FF6B00" stroke-width="1.5" stroke-dasharray="4 2"/>
            <circle cx="70" cy="35" r="10" stroke="#FF6B00" stroke-width="1.5"/>
            <line x1="70" y1="13" x2="70" y2="57" stroke="#FF6B00" stroke-width="1.5"/>
            <line x1="48" y1="35" x2="92" y2="35" stroke="#FF6B00" stroke-width="1.5"/>
          </svg>`
        },
        socit: {
          svgShapes: `<svg class="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40" preserveAspectRatio="none" viewBox="0 0 300 120" fill="none">
            <polygon points="0,0 130,0 80,120 0,120" fill="#0f2f57"/>
            <polygon points="110,0 300,0 300,120 170,120" fill="#0b223f"/>
            <line x1="40" y1="20" x2="120" y2="20" stroke="#00A4EF" stroke-width="1.5"/>
            <line x1="120" y1="20" x2="150" y2="60" stroke="#00A4EF" stroke-width="1.5"/>
            <circle cx="40" cy="20" r="3" fill="#00A4EF"/>
            <circle cx="150" cy="60" r="3" fill="#00A4EF"/>
            <line x1="180" y1="90" x2="260" y2="90" stroke="#38BDF8" stroke-width="1.5"/>
            <circle cx="260" cy="90" r="3" fill="#38BDF8"/>
          </svg>`
        },
        soma: {
          svgShapes: `<svg class="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40" preserveAspectRatio="none" viewBox="0 0 300 120" fill="none">
            <polygon points="0,0 150,0 90,120 0,120" fill="#450a11"/>
            <polygon points="130,0 300,0 300,120 190,120" fill="#2d060b"/>
            <path d="M40 30 C70 10, 100 10, 130 30" stroke="#EF4444" stroke-width="2" fill="none"/>
            <circle cx="50" cy="65" r="14" stroke="#EF4444" stroke-width="1.5"/>
            <polygon points="46,57 58,65 46,73" fill="#EF4444"/>
            <circle cx="240" cy="40" r="18" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="3 2"/>
          </svg>`
        },
        som: {
          svgShapes: `<svg class="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40" preserveAspectRatio="none" viewBox="0 0 300 120" fill="none">
            <polygon points="0,0 150,0 90,120 0,120" fill="#382e0b"/>
            <polygon points="130,0 300,0 300,120 190,120" fill="#241e07"/>
            <rect x="50" y="60" width="14" height="45" fill="#F59E0B" fill-opacity="0.6"/>
            <rect x="70" y="45" width="14" height="60" fill="#F59E0B" fill-opacity="0.8"/>
            <rect x="90" y="25" width="14" height="80" fill="#F59E0B" fill-opacity="0.9"/>
            <line x1="45" y1="70" x2="115" y2="20" stroke="#FDE047" stroke-width="2"/>
          </svg>`
        },
        soa: {
          svgShapes: `<svg class="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40" preserveAspectRatio="none" viewBox="0 0 300 120" fill="none">
            <polygon points="0,0 140,0 80,120 0,120" fill="#2f1747"/>
            <polygon points="120,0 300,0 300,120 180,120" fill="#1d0e2e"/>
            <polygon points="60,25 110,95 30,95" stroke="#A855F7" stroke-width="1.5" fill="none"/>
            <polygon points="140,25 210,25 230,95 160,95" stroke="#C084FC" stroke-width="1.5" fill="none"/>
          </svg>`
        }
      };

      // Render all specific schools all in one scrollable page
      const visibleSchools = ACADEMIC_SCHOOLS_DATA;

      // Empty Card for Adding Schools (at the end of the grid)
      const addSchoolCardHtml = `
      <div onclick="openAddSchoolModal()" class="school-card min-h-[360px] bg-[#181D26]/60 hover:bg-[#181D26] border-2 border-dashed border-slate-700 hover:border-[#E5A823] transition-all duration-200 cursor-pointer flex flex-col items-center justify-center p-8 text-center group select-none shadow-md">
        <div class="w-14 h-14 rounded-full bg-[#10151E] border border-slate-700 group-hover:border-[#E5A823] group-hover:bg-[#E5A823]/10 flex items-center justify-center text-slate-400 group-hover:text-[#E5A823] text-2xl font-light transition mb-3">
          +
        </div>
        <h3 class="text-sm font-bold text-slate-200 group-hover:text-white uppercase tracking-wider mb-1">
          Add Academic School
        </h3>
        <p class="text-xs text-slate-400 group-hover:text-slate-300 max-w-[220px] leading-relaxed">
          Click to provision a new school or division with programs &amp; assets
        </p>
      </div>
      `;

      function getSchoolProgramsHtml(programs) {
        let html = '';
        for (let pi = 0; pi < programs.length; pi++) {
          const item = programs[pi];
          const prog = typeof item === 'object' ? item : getProgramInfo(item);
          html += '<a href="javascript:void(0)" onclick="event.stopPropagation(); selectProgram(\'' + prog.code + '\', \'homePdProgramView\')" class="text-slate-300 hover:text-[#E5A823] hover:underline transition flex items-center gap-1.5 group cursor-pointer truncate" title="Go to ' + prog.name + ' (' + prog.code + ')">' +
            '<span class="text-amber-400 font-bold group-hover:translate-x-0.5 transition-transform">&bull;</span> ' +
            '<span class="truncate underline decoration-slate-600 underline-offset-2 hover:decoration-amber-400">' + prog.name + '</span>' +
          '</a>';
        }
        return html;
      }

      container.innerHTML = visibleSchools.map((s, idx) => {
        const theme = schoolThemes[s.id] || schoolThemes.soe;
        const bannerStyle = s.bannerImage 
          ? `style="background-image: url('${s.bannerImage}'); background-size: cover; background-position: center;"` 
          : '';
        const logoImg = s.logoImage 
          ? `<img src="${s.logoImage}" class="w-full h-full object-cover" alt="${s.name} Emblem" />` 
          : null;
        const defaultTorchSvg = `<svg class="w-8 h-8 text-white" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- Vector APC Torch & Signal Waves -->
                  <circle cx="18" cy="18" r="15" stroke="white" stroke-width="1.2" stroke-dasharray="3 1.5"/>
                  <path d="M12 14C14 11 18 10 24 12" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M10 18C13 14 19 13 26 16" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M14 26C14 22 17 20 22 20" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  <circle cx="18" cy="18" r="2.5" fill="#FFFFFF"/>
                </svg>`;
        const programsHtml = getSchoolProgramsHtml(s.programs);

        return `
        <div id="schoolCard_${idx}" data-school="${s.id}" onclick="goToSchoolExd('${s.id}')" class="school-card bg-[#181D26] border border-slate-700/80 shadow-xl flex flex-col justify-between overflow-hidden relative group cursor-pointer hover:border-[#E5A823]/80 hover:shadow-2xl transition-all duration-200">
          <!-- Top Colored Shapes & Vector Banner (School Color: ${s.color}) -->
          <div class="relative h-28 bg-gradient-to-br ${s.bannerGrad} overflow-hidden flex flex-col items-center justify-center text-center p-2" ${bannerStyle}>
            ${!s.bannerImage ? theme.svgShapes : ''}
            
            <div class="relative z-10 flex flex-col items-center justify-center text-center">
              <span class="text-base sm:text-lg font-black text-white tracking-widest uppercase drop-shadow-md">${s.bannerTitle}</span>
              <span class="text-lg sm:text-xl font-black tracking-wider uppercase drop-shadow-md -mt-1 truncate max-w-full" style="color: ${s.color};">${s.name}</span>
            </div>
          </div>

          <!-- Color-coded Horizontal Separator -->
          <div class="h-0.5 w-full" style="background-color: ${s.color};"></div>

          <!-- Overlapping Circular Vector Emblem with School Color Disc -->
          <div class="flex justify-center -mt-7 relative z-10">
            <div class="apc-circle-badge w-14 h-14 rounded-full bg-white p-1 shadow-lg border-2 ${s.badgeBorder} flex items-center justify-center overflow-hidden">
              <div class="w-full h-full rounded-full bg-gradient-to-br ${s.badgeBg} flex items-center justify-center shadow-inner overflow-hidden">
                ${logoImg || defaultTorchSvg}
              </div>
            </div>
          </div>

          <!-- Card Body -->
          <div class="p-4 pt-2 text-slate-200 space-y-3 flex-1 flex flex-col justify-between">
            <div class="space-y-3">
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1">Executive Director:</label>
                <div class="bg-[#10151E] border border-slate-700/70 p-2 text-xs text-white font-medium truncate">
                  ${s.director}
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1">Programs Offered:</label>
                <div class="bg-[#10151E] border border-slate-700/70 p-2.5 text-xs text-slate-300 space-y-1.5 font-sans">
                  ${programsHtml}
                </div>
              </div>
            </div>

            <!-- Bottom Actions & Color-coded Accent Stripe (Only Edit Pencil Button) -->
            <div class="space-y-3 pt-2">
              <div class="flex justify-end items-center">
                <button type="button" onclick="event.stopPropagation(); openEditSchoolModal('${s.id}')" class="w-8 h-8 bg-[#10151E] hover:bg-slate-800 border border-slate-700/70 text-slate-300 hover:text-white flex items-center justify-center text-sm transition cursor-pointer shadow-xs" title="Edit ${s.bannerTitle} ${s.name} (Programs, Director, Assets)">
                  ✎
                </button>
              </div>
              <!-- Solid Color-coded Bottom Stripe -->
              <div class="h-1.5 w-full -mb-4 -mx-4" style="background-color: ${s.color};"></div>
            </div>
          </div>
        </div>
        `;
      }).join('') + addSchoolCardHtml;

// All schools rendered in one view
    }

    function nextSchoolSlide() {
      currentSchoolSlide = (currentSchoolSlide + 1) % ACADEMIC_SCHOOLS_DATA.length;
      renderSchoolCards();
    }

    function prevSchoolSlide() {
      currentSchoolSlide = (currentSchoolSlide - 1 + ACADEMIC_SCHOOLS_DATA.length) % ACADEMIC_SCHOOLS_DATA.length;
      renderSchoolCards();
    }

    function goToSchoolSlide(idx) {
      currentSchoolSlide = idx % ACADEMIC_SCHOOLS_DATA.length;
      renderSchoolCards();
    }

    // =========================================================================
    // EDIT SCHOOL MODAL CONTROLLERS & ASSET UPLOAD
    // =========================================================================
    let currentEditingSchoolId = null;
    let modalTempBanner = null;
    let modalTempLogo = null;

    function openEditSchoolModal(schoolId) {
      const school = ACADEMIC_SCHOOLS_DATA.find(s => s.id === schoolId);
      if (!school) return;

      currentEditingSchoolId = schoolId;
      modalTempBanner = school.bannerImage || null;
      modalTempLogo = school.logoImage || null;

      const idEl = document.getElementById('editSchoolId');
      const prefixEl = document.getElementById('editSchoolBannerTitle');
      const nameEl = document.getElementById('editSchoolName');
      const dirEl = document.getElementById('editSchoolDirector');
      const colEl = document.getElementById('editSchoolColor');
      const pickEl = document.getElementById('editSchoolColorPicker');
      const iconEl = document.getElementById('editSchoolIcon');
      const progsEl = document.getElementById('editSchoolPrograms');
      const titleEl = document.getElementById('editSchoolModalTitle');
      const previewBanner = document.getElementById('editSchoolBannerPreview');
      const previewLogo = document.getElementById('editSchoolLogoPreview');

      if (idEl) idEl.value = school.id;
      if (prefixEl) prefixEl.value = school.bannerTitle || 'SCHOOL OF';
      if (nameEl) nameEl.value = school.name;
      if (dirEl) dirEl.value = school.director;
      if (colEl) colEl.value = school.color || '#FF6B00';
      if (pickEl) pickEl.value = school.color || '#FF6B00';
      if (iconEl) iconEl.value = school.bannerIcon || '⚙️';
      if (titleEl) titleEl.innerText = `Edit ${school.bannerTitle} ${school.name}`;

      if (previewBanner) {
        previewBanner.innerText = school.bannerImage ? 'Custom banner image active' : 'Geometric vector pattern';
      }
      if (previewLogo) {
        previewLogo.innerText = school.logoImage ? 'Custom emblem active' : 'APC circular vector seal';
      }

      // Convert programs array to readable lines
      if (progsEl) {
        progsEl.value = school.programs.map(p => {
          if (typeof p === 'object' && p !== null) {
            return `${p.code}: ${p.name}`;
          }
          const match = String(p).match(/\(([A-Za-z0-9]+)\)/);
          if (match) {
            return `${match[1]}: ${p}`;
          }
          return p;
        }).join('\n');
      }

      const modal = document.getElementById('modalEditSchool');
      if (modal) modal.classList.remove('hidden');
    }

    function closeEditSchoolModal() {
      const modal = document.getElementById('modalEditSchool');
      if (modal) modal.classList.add('hidden');
      currentEditingSchoolId = null;
      modalTempBanner = null;
      modalTempLogo = null;
    }

    function handleModalImageUpload(event, type) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        const dataUrl = e.target.result;
        if (type === 'banner') {
          modalTempBanner = dataUrl;
          const preview = document.getElementById('editSchoolBannerPreview');
          if (preview) preview.innerText = file.name + ' (Loaded)';
        } else if (type === 'logo') {
          modalTempLogo = dataUrl;
          const preview = document.getElementById('editSchoolLogoPreview');
          if (preview) preview.innerText = file.name + ' (Loaded)';
        }
        if (typeof showToast === 'function') {
          showToast(`Photo for ${type} loaded! Click 'Save Changes' to apply.`);
        }
      };
      reader.readAsDataURL(file);
    }

    function clearModalImage(type) {
      if (type === 'banner') {
        modalTempBanner = null;
        const preview = document.getElementById('editSchoolBannerPreview');
        if (preview) preview.innerText = 'Geometric vector pattern';
        const fileInput = document.getElementById('editSchoolBannerFile');
        if (fileInput) fileInput.value = '';
      } else if (type === 'logo') {
        modalTempLogo = null;
        const preview = document.getElementById('editSchoolLogoPreview');
        if (preview) preview.innerText = 'APC circular vector seal';
        const fileInput = document.getElementById('editSchoolLogoFile');
        if (fileInput) fileInput.value = '';
      }
    }

    function deleteCurrentSchool() {
      const schoolId = document.getElementById('editSchoolId').value || currentEditingSchoolId;
      const school = ACADEMIC_SCHOOLS_DATA.find(s => s.id === schoolId);
      if (!school) return;

      const confirmed = window.confirm(`Are you sure you want to delete ${school.bannerTitle} ${school.name} and all its associated degree programs? This action cannot be undone.`);
      if (!confirmed) return;

      const idx = ACADEMIC_SCHOOLS_DATA.findIndex(s => s.id === schoolId);
      if (idx !== -1) {
        const deletedName = `${school.bannerTitle} ${school.name}`;
        ACADEMIC_SCHOOLS_DATA.splice(idx, 1);

        try {
          localStorage.setItem('academic_schools_data_custom', JSON.stringify(ACADEMIC_SCHOOLS_DATA));
        } catch (err) {
          console.warn('LocalStorage save failed:', err);
        }

        closeEditSchoolModal();
        renderSchoolCards();

        if (typeof showToast === 'function') {
          showToast(`Deleted ${deletedName} successfully.`);
        }
      }
    }

    function submitEditSchool(event) {
      event.preventDefault();
      const schoolId = document.getElementById('editSchoolId').value || currentEditingSchoolId;
      const school = ACADEMIC_SCHOOLS_DATA.find(s => s.id === schoolId);
      if (!school) return;

      const newPrefix = document.getElementById('editSchoolBannerTitle').value.trim() || 'SCHOOL OF';
      const newName = document.getElementById('editSchoolName').value.trim().toUpperCase();
      const newDirector = document.getElementById('editSchoolDirector').value.trim();
      const newColor = document.getElementById('editSchoolColor').value.trim() || school.color;
      const newIcon = document.getElementById('editSchoolIcon').value.trim() || school.bannerIcon;

      school.bannerTitle = newPrefix;
      school.name = newName;
      school.director = newDirector;
      school.color = newColor;
      school.badgeBorder = `border-[${newColor}]`;
      school.bannerIcon = newIcon;
      if (modalTempBanner !== null) school.bannerImage = modalTempBanner;
      if (modalTempLogo !== null) school.logoImage = modalTempLogo;

      // Parse programs from textarea
      const rawText = document.getElementById('editSchoolPrograms').value;
      const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      
      school.programs = lines.map(line => {
        if (line.includes(':')) {
          const parts = line.split(':');
          const code = parts[0].trim();
          const name = parts.slice(1).join(':').trim();
          return { code: code || 'PROG', name: name || code };
        }
        const match = line.match(/\(([A-Za-z0-9]+)\)/);
        const code = match ? match[1] : (line.length <= 6 ? line : line.split(' ').map(w => w[0]).join('').substring(0, 5).toUpperCase());
        return { code: code, name: line };
      });

      // Save custom state to localStorage
      try {
        localStorage.setItem('academic_schools_data_custom', JSON.stringify(ACADEMIC_SCHOOLS_DATA));
      } catch (err) {
        console.warn('LocalStorage save failed:', err);
      }

      closeEditSchoolModal();
      renderSchoolCards();

      if (typeof showToast === 'function') {
        showToast(`Updated ${school.bannerTitle} ${school.name} details successfully!`);
      }
    }

    // Modal controllers
    function showPillarModal(pillar) {
      const modal = document.getElementById('pillarModal');
      const title = document.getElementById('pillarModalTitle');
      const content = document.getElementById('pillarModalContent');
      if (!modal || !title || !content) return;

      if (pillar === 'mission') {
        title.innerText = 'Institutional Mission';
        content.innerHTML = `
          <p class="font-bold text-white text-base mb-2">Our Mission</p>
          <p class="text-slate-300 mb-3">Asia Pacific College is committed to bridging the gap between industry and academia by developing high-performing, professionally competent, and socially responsible professionals.</p>
          <ul class="list-disc pl-5 space-y-1.5 text-slate-400 text-xs">
            <li>Delivering industry-integrated and project-based educational frameworks.</li>
            <li>Instilling ethical, rigorous engineering principles and lifelong learning habits.</li>
            <li>Promoting collaborative, real-world solutions that impact community and industry.</li>
          </ul>
        `;
      } else if (pillar === 'vision') {
        title.innerText = 'Institutional Vision';
        content.innerHTML = `
          <p class="font-bold text-white text-base mb-2">Our Vision</p>
          <p class="text-slate-300 mb-3">Asia Pacific College envisions itself as a leading educational institution recognized globally for academic excellence, digital transformation, and producing pioneering industry leaders.</p>
          <ul class="list-disc pl-5 space-y-1.5 text-slate-400 text-xs">
            <li>Pioneering Outcomes-Based Engineering curricula compliant with CHED and international standards.</li>
            <li>Driving digital curriculum topology, agile syllabus design, and verified prerequisite graphs.</li>
            <li>Empowering graduates to lead technological innovations across the ASEAN region.</li>
          </ul>
        `;
      } else {
        title.innerText = 'Institutional Core Values';
        content.innerHTML = `
          <p class="font-bold text-white text-base mb-2">Our Core Values</p>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-2.5 bg-[#10151E] border border-slate-700/60">
              <div class="font-bold text-[#E5A823] text-sm mb-1">Integrity</div>
              <div class="text-slate-300">Uncompromising commitment to truth, ethical conduct, and academic honesty.</div>
            </div>
            <div class="p-2.5 bg-[#10151E] border border-slate-700/60">
              <div class="font-bold text-[#E5A823] text-sm mb-1">Industry</div>
              <div class="text-slate-300">Deep integration with global industry standards and technological demands.</div>
            </div>
            <div class="p-2.5 bg-[#10151E] border border-slate-700/60">
              <div class="font-bold text-[#E5A823] text-sm mb-1">Innovation</div>
              <div class="text-slate-300">Fostering creative problem-solving, research curiosity, and entrepreneurial drive.</div>
            </div>
            <div class="p-2.5 bg-[#10151E] border border-slate-700/60">
              <div class="font-bold text-[#E5A823] text-sm mb-1">Inclusion</div>
              <div class="text-slate-300">Embracing diverse perspectives, collaborative teams, and equitable access.</div>
            </div>
          </div>
        `;
      }
      modal.classList.remove('hidden');
    }

    function closePillarModal() {
      const modal = document.getElementById('pillarModal');
      if (modal) modal.classList.add('hidden');
    }

    function openAddSchoolModal() {
      const modal = document.getElementById('modalAddSchool');
      if (modal) modal.classList.remove('hidden');
    }

    function closeAddSchoolModal() {
      const modal = document.getElementById('modalAddSchool');
      if (modal) modal.classList.add('hidden');
    }

    function submitAddSchool(e) {
      e.preventDefault();
      const name = document.getElementById('newSchoolName').value.trim();
      const director = document.getElementById('newSchoolDirector').value.trim();
      const progStr = document.getElementById('newSchoolPrograms').value.trim();
      const programs = progStr.split(',').map(s => s.trim()).filter(Boolean);

      if (!name || !director) return;

      const cleanSchoolName = name.replace(/^SCHOOL\s+OF\s+/i, '').toUpperCase();
      const newSchoolId = 'school_' + Date.now();

      ACADEMIC_SCHOOLS_DATA.push({
        id: newSchoolId,
        name: cleanSchoolName,
        bannerTitle: 'SCHOOL OF',
        bannerImage: null,
        logoImage: 'assets/apc_badge_circle.png',
        director: director,
        programs: programs.length ? programs : ['Provisioned Degree Programs'],
        badgeBorder: 'border-[#E5A823]',
        primaryAction: `showToast('${name} Programs provisioned under Institutional Governance.')`,
        primaryActionText: `Inspect ${cleanSchoolName} →`,
        secondaryAction: `showToast('${name} Executive Overview active.')`,
        secondaryActionText: 'Executive Overview'
      });

      closeAddSchoolModal();
      renderSchoolCards();
      if (typeof showToast === 'function') {
        showToast(`Academic School "${name}" successfully provisioned with Executive Director ${director}!`);
      }
    }

    // Initialize carousel and saved custom images on load
    document.addEventListener('DOMContentLoaded', function() {
      // Check saved hero background
      const savedHero = localStorage.getItem('apc_hero_bg');
      if (savedHero) {
        const heroEl = document.getElementById('heroBannerContainer');
        if (heroEl) {
          heroEl.style.backgroundImage = `url("${savedHero}")`;
          heroEl.style.backgroundSize = 'cover';
          heroEl.style.backgroundPosition = 'center';
        }
      }
      
      // Check saved sidebar seal
      const savedSeal = localStorage.getItem('sidebar_apc_seal');
      if (savedSeal) {
        const sealEl = document.getElementById('sidebarApcSeal');
        if (sealEl) sealEl.src = savedSeal;
      }

      // Check saved academic schools data with version gate
      try {
        const version = localStorage.getItem('schools_data_version');
        if (version === 'v3_specific_programs_only') {
          const savedCustom = localStorage.getItem('academic_schools_data_custom');
          if (savedCustom) {
            const parsed = JSON.parse(savedCustom);
            if (Array.isArray(parsed) && parsed.length) {
              ACADEMIC_SCHOOLS_DATA.splice(0, ACADEMIC_SCHOOLS_DATA.length, ...parsed);
            }
          }
        } else {
          // Initialize fresh version with exact user-requested programs
          localStorage.setItem('schools_data_version', 'v3_specific_programs_only');
          localStorage.setItem('academic_schools_data_custom', JSON.stringify(ACADEMIC_SCHOOLS_DATA));
        }
      } catch (err) {
        console.warn('Failed to parse saved custom schools:', err);
      }

      renderSchoolCards();
    });
