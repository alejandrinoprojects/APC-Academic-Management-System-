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
    // Archived Schools & Programs Backup (Preserved for future unarchiving)
    const ARCHIVED_SCHOOLS_BACKUP = [
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
        archived: true,
        programs: [
          { code: 'BSCS', name: 'Bachelor of Science in Computer Science', archived: true },
          { code: 'BSIT', name: 'Bachelor of Science in Information Technology', archived: true }
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
        archived: true,
        programs: [
          { code: 'BMMA', name: 'Bachelor of Multimedia Arts', archived: true },
          { code: 'BSPsych', name: 'Bachelor of Science in Psychology', archived: true }
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
        archived: true,
        programs: [
          { code: 'BSBA', name: 'Bachelor of Science in Business Management', archived: true },
          { code: 'BSA', name: 'Bachelor of Science in Accountancy', archived: true }
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
        archived: true,
        programs: [
          { code: 'BSArch', name: 'Bachelor of Science in Architecture', archived: true }
        ]
      }
    ];
    window.ARCHIVED_SCHOOLS_BACKUP = ARCHIVED_SCHOOLS_BACKUP;

    const ARCHIVED_SOE_PROGRAMS_BACKUP = [
      { code: 'BSCE', name: 'Bachelor of Science in Civil Engineering', archived: true },
      { code: 'BSECE', name: 'Bachelor of Science in Electronics Engineering', archived: true }
    ];
    window.ARCHIVED_SOE_PROGRAMS_BACKUP = ARCHIVED_SOE_PROGRAMS_BACKUP;

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
        archived: false,
        programs: [
          { code: 'BSCpE', name: 'Bachelor of Science in Computer Engineering', archived: false }
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
        let activeHtml = '';
        for (let pi = 0; pi < programs.length; pi++) {
          const item = programs[pi];
          const prog = typeof item === 'object' ? item : getProgramInfo(item);
          if (prog.code === 'BSCpE') {
            activeHtml += '<a href="javascript:void(0)" onclick="event.stopPropagation(); selectProgram(\'' + prog.code + '\', \'homePdProgramView\')" class="text-slate-200 hover:text-[#E5A823] hover:underline transition flex items-center justify-between group cursor-pointer" title="Go to ' + prog.name + ' (' + prog.code + ')">' +
              '<span class="flex items-center gap-1.5 truncate">' +
                '<span class="text-amber-400 font-bold group-hover:translate-x-0.5 transition-transform">&bull;</span> ' +
                '<span class="truncate font-bold text-white">' + prog.name + '</span>' +
              '</span>' +
              '<span class="text-[9px] font-mono px-1.5 py-0.2 bg-emerald-950 text-emerald-300 border border-emerald-800 shrink-0">Active</span>' +
            '</a>';
          }
        }
        return activeHtml;
      }

      function renderSingleSchoolCard(s, idx, isArchived) {
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
      }

      const activeSchools = visibleSchools.filter(s => !s.archived && s.id === 'soe');
      const activeHtml = activeSchools.map((s, idx) => renderSingleSchoolCard(s, idx, false)).join('');

      container.innerHTML = activeHtml + addSchoolCardHtml;
    }

    function toggleArchivedSchoolsGrid() {
      const wrapper = document.getElementById('archivedSchoolsGridWrapper');
      const chev = document.getElementById('archivedSchoolsGridChev');
      if (wrapper) {
        const isHidden = wrapper.classList.toggle('hidden');
        if (chev) chev.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(90deg)';
      }
    }
    window.toggleArchivedSchoolsGrid = toggleArchivedSchoolsGrid;

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

      const confirmed = window.confirm(`Are you sure you want to delete ${school.bannerTitle || 'SCHOOL OF'} ${school.name} and all its associated degree programs? This action cannot be undone.`);
      if (!confirmed) return;

      const idx = ACADEMIC_SCHOOLS_DATA.findIndex(s => s.id === schoolId);
      if (idx !== -1) {
        const deletedName = `${school.bannerTitle || 'SCHOOL OF'} ${school.name}`;
        ACADEMIC_SCHOOLS_DATA.splice(idx, 1);

        try {
          localStorage.setItem('academic_schools_data_custom', JSON.stringify(ACADEMIC_SCHOOLS_DATA));
        } catch (err) {
          console.warn('LocalStorage save failed:', err);
        }

        closeEditSchoolModal();
        renderSchoolCards();
        renderSidebarSchools();

        if (typeof currentSelectedSchool !== 'undefined' && currentSelectedSchool === schoolId) {
          if (typeof navigateView === 'function') navigateView('home');
          const adminView = document.getElementById('homeAdminInstitutionalView');
          const exdView = document.getElementById('homeExdProgramsView');
          if (adminView) adminView.classList.remove('hidden');
          if (exdView) exdView.classList.add('hidden');
        }

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
          const code = parts[0].trim().toUpperCase();
          const name = parts.slice(1).join(':').trim();
          return { code: code || 'PROG', name: name || code };
        }
        const match = line.match(/\(([A-Za-z0-9]+)\)/);
        const code = match ? match[1].toUpperCase() : (line.length <= 6 ? line.toUpperCase() : line.split(' ').map(w => w[0]).join('').substring(0, 5).toUpperCase());
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
      renderSidebarSchools();

      if (typeof renderSchoolOverview === 'function' && typeof currentSelectedSchool !== 'undefined' && currentSelectedSchool === schoolId) {
        renderSchoolOverview(schoolId);
      }

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
      if (e && e.preventDefault) e.preventDefault();
      const name = document.getElementById('newSchoolName').value.trim();
      const director = document.getElementById('newSchoolDirector').value.trim();
      const progStr = document.getElementById('newSchoolPrograms').value.trim();
      const rawPrograms = progStr.split(',').map(s => s.trim()).filter(Boolean);

      if (!name || !director) return;

      const cleanSchoolName = name.replace(/^SCHOOL\s+OF\s+/i, '').toUpperCase();
      const newSchoolId = 'school_' + cleanSchoolName.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/^_+|_+$/g, '');

      // Parse programs into { code, name }
      const parsedPrograms = rawPrograms.map(p => {
        if (p.includes(':')) {
          const parts = p.split(':');
          const code = parts[0].trim().toUpperCase();
          const pName = parts.slice(1).join(':').trim();
          return { code: code || 'PROG', name: pName || code };
        }
        const match = p.match(/\(([A-Za-z0-9]+)\)/);
        const code = match ? match[1].toUpperCase() : (p.length <= 6 ? p.toUpperCase() : p.split(' ').map(w => w[0]).join('').substring(0, 5).toUpperCase());
        return { code: code, name: p };
      });

      const colors = ['#10B981', '#6366F1', '#EC4899', '#8B5CF6', '#14B8A6', '#F97316'];
      const assignedColor = colors[ACADEMIC_SCHOOLS_DATA.length % colors.length];

      const newSchool = {
        id: newSchoolId,
        name: cleanSchoolName,
        bannerTitle: 'SCHOOL OF',
        bannerImage: null,
        logoImage: 'assets/apc_badge_circle.png',
        director: director,
        color: assignedColor,
        badgeBorder: `border-[${assignedColor}]`,
        badgeBg: `from-[${assignedColor}] to-[#1E2430]`,
        bannerGrad: 'from-[#10151E] via-[#1a2332] to-[#0d121a]',
        bannerIcon: '🏛️',
        programs: parsedPrograms.length ? parsedPrograms : [{ code: 'PROG', name: 'Provisioned Degree Program' }],
        primaryAction: `showToast('${name} Programs provisioned under Institutional Governance.')`,
        primaryActionText: `Inspect ${cleanSchoolName} →`,
        secondaryAction: `showToast('${name} Executive Overview active.')`,
        secondaryActionText: 'Executive Overview'
      };

      ACADEMIC_SCHOOLS_DATA.push(newSchool);

      try {
        localStorage.setItem('academic_schools_data_custom', JSON.stringify(ACADEMIC_SCHOOLS_DATA));
      } catch (err) {
        console.warn('LocalStorage save failed:', err);
      }

      closeAddSchoolModal();
      renderSchoolCards();
      renderSidebarSchools();

      if (typeof showToast === 'function') {
        showToast(`Academic School "${cleanSchoolName}" successfully provisioned with Executive Director ${director}!`);
      }
    }

    // =========================================================================
    // PROGRAM MANAGEMENT (ADD & DELETE DEGREE PROGRAMS)
    // =========================================================================
    function openAddProgramModal(schoolId = null) {
      const modal = document.getElementById('modalAddProgram');
      const select = document.getElementById('newProgSchool');
      if (!modal) return;

      if (select) {
        select.innerHTML = '';
        ACADEMIC_SCHOOLS_DATA.forEach(s => {
          const opt = document.createElement('option');
          opt.value = s.id;
          opt.innerText = `${s.bannerTitle || 'SCHOOL OF'} ${s.name}`;
          if (schoolId && (s.id.toLowerCase() === String(schoolId).toLowerCase())) {
            opt.selected = true;
          }
          select.appendChild(opt);
        });
      }

      const codeInput = document.getElementById('newProgCode');
      const nameInput = document.getElementById('newProgName');
      if (codeInput) codeInput.value = '';
      if (nameInput) nameInput.value = '';

      modal.classList.remove('hidden');
    }

    function closeAddProgramModal() {
      const modal = document.getElementById('modalAddProgram');
      if (modal) modal.classList.add('hidden');
    }

    function submitAddProgram(e) {
      if (e && e.preventDefault) e.preventDefault();
      const schoolId = document.getElementById('newProgSchool')?.value;
      const code = document.getElementById('newProgCode')?.value.trim().toUpperCase();
      const name = document.getElementById('newProgName')?.value.trim();

      if (!schoolId || !code || !name) return;

      const school = ACADEMIC_SCHOOLS_DATA.find(s => s.id === schoolId);
      if (!school) return;

      if (!Array.isArray(school.programs)) {
        school.programs = [];
      }

      const exists = school.programs.some(p => {
        const c = typeof p === 'object' ? p.code : p;
        return c.toUpperCase() === code;
      });
      if (exists) {
        alert(`Program code "${code}" already exists in ${school.name}.`);
        return;
      }

      school.programs.push({ code, name });

      if (typeof PROGRAM_TO_SCHOOL_MAP !== 'undefined') {
        PROGRAM_TO_SCHOOL_MAP[code] = {
          schoolId: school.id,
          schoolName: `${school.bannerTitle || 'SCHOOL OF'} ${school.name}`,
          schoolShort: school.name,
          name: name
        };
      }

      try {
        localStorage.setItem('academic_schools_data_custom', JSON.stringify(ACADEMIC_SCHOOLS_DATA));
      } catch (err) {
        console.warn('LocalStorage save failed:', err);
      }

      closeAddProgramModal();
      renderSidebarSchools();
      renderSchoolCards();

      if (typeof renderSchoolOverview === 'function') {
        renderSchoolOverview(school.id);
      }

      if (typeof showToast === 'function') {
        showToast(`Added ${code}: ${name} to ${school.name} successfully!`);
      }
    }

    // Program Director management helpers
    function getProgramDirector(progCode) {
      if (!progCode) return 'Program Director';
      try {
        const customMap = JSON.parse(localStorage.getItem('program_directors_custom') || '{}');
        if (customMap && customMap[progCode]) return customMap[progCode];
      } catch (e) {}

      for (const s of ACADEMIC_SCHOOLS_DATA) {
        if (Array.isArray(s.programs)) {
          const p = s.programs.find(item => (typeof item === 'object' ? item.code : item) === progCode);
          if (p && typeof p === 'object' && p.director) {
            return p.director;
          }
        }
      }

      const defaultDirectors = {
        'BSCpE': 'Engr. Sergio R. Peruda Jr.',
        'BSCE': 'Engr. Ronald V. Santos',
        'BSECE': 'Engr. Melissa C. David',
        'BSCS': 'Dr. Alan Turing',
        'BSIT': 'Prof. Tim Berners-Lee',
        'BMMA': 'Prof. Paul Rand',
        'BSPsych': 'Dr. Carl Rogers',
        'BSBA': 'Prof. Peter Drucker',
        'BSA': 'Prof. Luca Pacioli',
        'BSArch': 'Ar. Zaha Hadid'
      };
      return defaultDirectors[progCode] || `${progCode} Program Director`;
    }

    function openEditProgramModal(progCode) {
      if (!progCode) return;
      let foundProg = null;
      let foundSchool = null;

      for (const s of ACADEMIC_SCHOOLS_DATA) {
        if (Array.isArray(s.programs)) {
          const p = s.programs.find(item => (typeof item === 'object' ? item.code : item) === progCode);
          if (p) {
            foundProg = p;
            foundSchool = s;
            break;
          }
        }
      }

      const codeVal = progCode;
      const nameVal = typeof foundProg === 'object' && foundProg ? foundProg.name : (typeof PROGRAM_TO_SCHOOL_MAP !== 'undefined' && PROGRAM_TO_SCHOOL_MAP[progCode] ? PROGRAM_TO_SCHOOL_MAP[progCode].name : progCode);
      const dirVal = getProgramDirector(progCode);

      const titleEl = document.getElementById('editProgramModalTitle');
      const origCodeEl = document.getElementById('editProgOriginalCode');
      const codeEl = document.getElementById('editProgCode');
      const nameEl = document.getElementById('editProgName');
      const dirEl = document.getElementById('editProgDirector');

      if (titleEl) titleEl.innerText = `Edit ${progCode} Program & Director`;
      if (origCodeEl) origCodeEl.value = codeVal;
      if (codeEl) codeEl.value = codeVal;
      if (nameEl) nameEl.value = nameVal;
      if (dirEl) dirEl.value = dirVal;

      const modal = document.getElementById('modalEditProgram');
      if (modal) modal.classList.remove('hidden');
    }

    function closeEditProgramModal() {
      const modal = document.getElementById('modalEditProgram');
      if (modal) modal.classList.add('hidden');
    }

    function submitEditProgram(e) {
      if (e && e.preventDefault) e.preventDefault();
      const origCode = document.getElementById('editProgOriginalCode')?.value.trim();
      const newName = document.getElementById('editProgName')?.value.trim();
      const newDirector = document.getElementById('editProgDirector')?.value.trim();

      if (!origCode || !newName || !newDirector) return;

      // Update in ACADEMIC_SCHOOLS_DATA
      let targetSchool = null;
      for (const s of ACADEMIC_SCHOOLS_DATA) {
        if (Array.isArray(s.programs)) {
          const idx = s.programs.findIndex(item => (typeof item === 'object' ? item.code : item) === origCode);
          if (idx !== -1) {
            s.programs[idx] = { code: origCode, name: newName, director: newDirector };
            targetSchool = s;
            break;
          }
        }
      }

      // Save custom directors map in localStorage
      try {
        const customMap = JSON.parse(localStorage.getItem('program_directors_custom') || '{}');
        customMap[origCode] = newDirector;
        localStorage.setItem('program_directors_custom', JSON.stringify(customMap));
        localStorage.setItem('academic_schools_data_custom', JSON.stringify(ACADEMIC_SCHOOLS_DATA));
      } catch (err) {
        console.warn('LocalStorage save failed:', err);
      }

      // Update PROGRAM_TO_SCHOOL_MAP if present
      if (typeof PROGRAM_TO_SCHOOL_MAP !== 'undefined' && PROGRAM_TO_SCHOOL_MAP[origCode]) {
        PROGRAM_TO_SCHOOL_MAP[origCode].name = newName;
      }

      // Update static fallback card DOM elements if present
      const staticDirEl = document.getElementById(`exdProgDirector_${origCode}`);
      if (staticDirEl) staticDirEl.innerText = newDirector;

      // Update active PD workbench headers if this program is currently selected
      const pdDirName = document.getElementById('pdHeaderDirectorName');
      if (pdDirName && (typeof currentSelectedProgram === 'undefined' || currentSelectedProgram === origCode)) {
        pdDirName.innerText = newDirector;
      }
      const curricDirName = document.getElementById('curricHomeDirectorName');
      if (curricDirName && (typeof currentSelectedProgram === 'undefined' || currentSelectedProgram === origCode)) {
        curricDirName.innerText = newDirector;
      }

      closeEditProgramModal();

      // Refresh school overview dynamic cards if active
      if (targetSchool && typeof renderSchoolOverview === 'function') {
        renderSchoolOverview(targetSchool.id);
      } else if (typeof renderSchoolCards === 'function') {
        renderSchoolCards();
      }

      if (typeof showToast === 'function') {
        showToast(`Updated ${origCode} Program Director to ${newDirector}!`);
      }
    }

    function deleteProgram(progCode) {
      let targetSchool = null;
      let progObj = null;

      for (const school of ACADEMIC_SCHOOLS_DATA) {
        if (Array.isArray(school.programs)) {
          const p = school.programs.find(prog => {
            const code = typeof prog === 'object' ? prog.code : prog;
            return code === progCode;
          });
          if (p) {
            targetSchool = school;
            progObj = p;
            break;
          }
        }
      }

      if (!targetSchool) {
        alert(`Program "${progCode}" not found.`);
        return;
      }

      const progName = typeof progObj === 'object' ? (progObj.name || progObj.code) : progObj;
      const confirmed = window.confirm(`Are you sure you want to delete degree program "${progCode}: ${progName}" from ${targetSchool.bannerTitle || 'SCHOOL OF'} ${targetSchool.name}? This will remove it from the curriculum system.`);
      if (!confirmed) return;

      targetSchool.programs = targetSchool.programs.filter(prog => {
        const code = typeof prog === 'object' ? prog.code : prog;
        return code !== progCode;
      });

      if (typeof PROGRAM_TO_SCHOOL_MAP !== 'undefined') {
        delete PROGRAM_TO_SCHOOL_MAP[progCode];
      }

      try {
        localStorage.setItem('academic_schools_data_custom', JSON.stringify(ACADEMIC_SCHOOLS_DATA));
      } catch (err) {
        console.warn('LocalStorage save failed:', err);
      }

      renderSidebarSchools();
      renderSchoolCards();

      if (typeof renderSchoolOverview === 'function') {
        renderSchoolOverview(targetSchool.id);
      }

      if (typeof showToast === 'function') {
        showToast(`Deleted degree program ${progCode} successfully.`);
      }
    }

    // =========================================================================
    // DYNAMIC LEFT PANEL (SIDEBAR) SYNCHRONIZER
    // =========================================================================
    function renderBscpeSubtree(school) {
      return `
        <!-- Computer Engineering (BSCpE) -->
        <div id="node-prog-cpe">
          <button type="button" onclick="goToProgramPd('BSCpE')"
            class="w-full flex items-center justify-between px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left group">
            <span class="flex items-center space-x-2 truncate">
              <svg id="cpeFolderChev" onclick="event.stopPropagation(); toggleFolderAccordion('cpeFolderCont', 'cpeFolderChev')" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
              </svg>
              <svg class="w-3.5 h-3.5 text-amber-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
              </svg>
              <span class="truncate text-xs font-semibold text-slate-200 group-hover:text-white">Computer Engineering</span>
            </span>
            <span class="text-[9px] font-mono px-1 py-0.2 bg-amber-400/10 text-amber-400 border border-amber-400/30">BSCpE</span>
          </button>

          <!-- BSCpE Subfolder Structure -->
          <div id="cpeFolderCont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-3">
            <!-- 1. Curriculum Management (System Folder) -->
            <div id="node-cpe-curriculums">
              <button type="button" onclick="toggleFolderAccordion('cpeCurricCont', 'cpeCurricChev'); navigateView('curriculum-home')"
                class="w-full flex items-center justify-between px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left group">
                <span class="flex items-center space-x-2 truncate">
                  <svg id="cpeCurricChev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                  </svg>
                  <svg class="w-3.5 h-3.5 text-amber-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                  </svg>
                  <span class="truncate text-[11px] font-semibold text-slate-200 group-hover:text-white">Curriculum Management</span>
                </span>
              </button>

              <!-- Curriculum Management Contents -->
              <div id="cpeCurricCont" class="mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-3">
                <button type="button" onclick="navigateView('curriculum-home')"
                  class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px] group">
                  <span class="text-amber-400">🏠</span>
                  <span class="font-semibold text-slate-300 group-hover:text-amber-300">Management Homepage</span>
                </button>

                <!-- By Year Section Header -->
                <div class="px-2 pt-1 pb-0.5 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  By Year
                </div>

                <!-- 1st Year -->
                <div>
                  <button type="button" onclick="setSidebarYear(1); toggleFolderAccordion('cpeY1Cont', 'cpeY1Chev')"
                    class="w-full flex items-center justify-between px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left group">
                    <span class="flex items-center space-x-2 truncate">
                      <svg id="cpeY1Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                      </svg>
                      <svg class="w-3 h-3 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span class="truncate text-[11px] font-semibold text-slate-200">1st Year</span>
                    </span>
                  </button>
                  <div id="cpeY1Cont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-3">
                    <button type="button" onclick="openFlowchartForYear(1)"
                      class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px] group">
                      <span class="text-sky-400">📊</span>
                      <span class="truncate">Curriculum Flowchart (Year 1)</span>
                    </button>
                    <button type="button" onclick="openSpreadsheetForYear(1)"
                      class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px] group">
                      <span class="text-emerald-400">📑</span>
                      <span class="truncate">Curriculum Spreadsheet (Year 1)</span>
                    </button>

                    <div class="px-2 pt-1 pb-0.5 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                      Curriculum Revisions
                    </div>

                    <!-- Revision 2026–2030 (Active Baseline) -->
                    <div id="node-cpe-rev2026">
                      <button type="button" onclick="toggleFolderAccordion('cpeRev2026Cont', 'cpeRev2026Chev')"
                        class="w-full flex items-center justify-between px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left group">
                        <span class="flex items-center space-x-1.5 truncate">
                          <svg id="cpeRev2026Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                          </svg>
                          <svg class="w-3 h-3 text-amber-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                          </svg>
                          <span class="truncate text-[11px] font-bold text-amber-300">2026–2030</span>
                        </span>
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" title="Active Baseline"></span>
                      </button>
                      <div id="cpeRev2026Cont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-2.5">
                        <div>
                          <button type="button" onclick="toggleFolderAccordion('cpeOffDocs2026Cont', 'cpeOffDocs2026Chev')"
                            class="w-full flex items-center justify-between px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/60 transition cursor-pointer text-left group">
                            <span class="flex items-center space-x-1.5 truncate">
                              <svg id="cpeOffDocs2026Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                              </svg>
                              <svg class="w-3 h-3 text-amber-400/80 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/>
                              </svg>
                              <span class="truncate text-[11px]">Official Documents</span>
                            </span>
                          </button>
                          <div id="cpeOffDocs2026Cont" class="hidden mt-0.5 space-y-0.5 pl-2 border-l border-slate-700/60 ml-2">
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 1)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Official Flowchart</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 2)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Prospectus</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 3)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Course Catalog</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 4)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Program of Study</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 5)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>OBE Map</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 6)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Comparative Summary</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 7)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Summary of Units</span></button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Revision 2025–2029 -->
                    <div id="node-cpe-rev2025">
                      <button type="button" onclick="toggleFolderAccordion('cpeRev2025Cont', 'cpeRev2025Chev')"
                        class="w-full flex items-center justify-between px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left group">
                        <span class="flex items-center space-x-1.5 truncate">
                          <svg id="cpeRev2025Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                          </svg>
                          <svg class="w-3 h-3 text-amber-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                          </svg>
                          <span class="truncate text-[11px] font-bold text-slate-300">2025–2029</span>
                        </span>
                      </button>
                      <div id="cpeRev2025Cont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-2.5">
                        <div>
                          <button type="button" onclick="toggleFolderAccordion('cpeOffDocs2025Cont', 'cpeOffDocs2025Chev')"
                            class="w-full flex items-center justify-between px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/60 transition cursor-pointer text-left group">
                            <span class="flex items-center space-x-1.5 truncate">
                              <svg id="cpeOffDocs2025Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                              </svg>
                              <svg class="w-3 h-3 text-amber-400/80 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/>
                              </svg>
                              <span class="truncate text-[11px]">Official Documents</span>
                            </span>
                          </button>
                          <div id="cpeOffDocs2025Cont" class="hidden mt-0.5 space-y-0.5 pl-2 border-l border-slate-700/60 ml-2">
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 1)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Official Flowchart</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 2)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Prospectus</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 3)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Course Catalog</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 4)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Program of Study</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 5)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>OBE Map</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 6)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Comparative Summary</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 7)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Summary of Units</span></button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Revision 2024–2028 -->
                    <div id="node-cpe-rev2024">
                      <button type="button" onclick="toggleFolderAccordion('cpeRev2024Cont', 'cpeRev2024Chev')"
                        class="w-full flex items-center justify-between px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left group">
                        <span class="flex items-center space-x-1.5 truncate">
                          <svg id="cpeRev2024Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                          </svg>
                          <svg class="w-3 h-3 text-amber-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                          </svg>
                          <span class="truncate text-[11px] font-bold text-slate-300">2024–2028</span>
                        </span>
                      </button>
                      <div id="cpeRev2024Cont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-2.5">
                        <div>
                          <button type="button" onclick="toggleFolderAccordion('cpeOffDocs2024Cont', 'cpeOffDocs2024Chev')"
                            class="w-full flex items-center justify-between px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/60 transition cursor-pointer text-left group">
                            <span class="flex items-center space-x-1.5 truncate">
                              <svg id="cpeOffDocs2024Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                              </svg>
                              <svg class="w-3 h-3 text-amber-400/80 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/>
                              </svg>
                              <span class="truncate text-[11px]">Official Documents</span>
                            </span>
                          </button>
                          <div id="cpeOffDocs2024Cont" class="hidden mt-0.5 space-y-0.5 pl-2 border-l border-slate-700/60 ml-2">
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 1)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Official Flowchart</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 2)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Prospectus</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 3)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Course Catalog</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 4)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Program of Study</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 5)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>OBE Map</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 6)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Comparative Summary</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 7)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Summary of Units</span></button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Revision 2023–2027 -->
                    <div id="node-cpe-rev2023">
                      <button type="button" onclick="toggleFolderAccordion('cpeRev2023Cont', 'cpeRev2023Chev')"
                        class="w-full flex items-center justify-between px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left group">
                        <span class="flex items-center space-x-1.5 truncate">
                          <svg id="cpeRev2023Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                          </svg>
                          <svg class="w-3 h-3 text-amber-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                          </svg>
                          <span class="truncate text-[11px] font-bold text-slate-300">2023–2027</span>
                        </span>
                      </button>
                      <div id="cpeRev2023Cont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-2.5">
                        <div>
                          <button type="button" onclick="toggleFolderAccordion('cpeOffDocs2023Cont', 'cpeOffDocs2023Chev')"
                            class="w-full flex items-center justify-between px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/60 transition cursor-pointer text-left group">
                            <span class="flex items-center space-x-1.5 truncate">
                              <svg id="cpeOffDocs2023Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                              </svg>
                              <svg class="w-3 h-3 text-amber-400/80 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/>
                              </svg>
                              <span class="truncate text-[11px]">Official Documents</span>
                            </span>
                          </button>
                          <div id="cpeOffDocs2023Cont" class="hidden mt-0.5 space-y-0.5 pl-2 border-l border-slate-700/60 ml-2">
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 1)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Official Flowchart</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 2)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Prospectus</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 3)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Course Catalog</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 4)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Program of Study</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 5)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>OBE Map</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 6)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Comparative Summary</span></button>
                            <button type="button" onclick="selectProgram('BSCpE', 'registrar', 7)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Summary of Units</span></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 2nd Year -->
                <div>
                  <button type="button" onclick="setSidebarYear(2); toggleFolderAccordion('cpeY2Cont', 'cpeY2Chev')"
                    class="w-full flex items-center justify-between px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left group">
                    <span class="flex items-center space-x-2 truncate">
                      <svg id="cpeY2Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                      </svg>
                      <svg class="w-3 h-3 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span class="truncate text-[11px] font-semibold text-slate-200">2nd Year</span>
                    </span>
                  </button>
                  <div id="cpeY2Cont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-3">
                    <button type="button" onclick="openFlowchartForYear(2)"
                      class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px] group">
                      <span class="text-sky-400">📊</span>
                      <span class="truncate">Curriculum Flowchart (Year 2)</span>
                    </button>
                    <button type="button" onclick="openSpreadsheetForYear(2)"
                      class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px] group">
                      <span class="text-emerald-400">📑</span>
                      <span class="truncate">Curriculum Spreadsheet (Year 2)</span>
                    </button>
                  </div>
                </div>

                <!-- 3rd Year -->
                <div>
                  <button type="button" onclick="setSidebarYear(3); toggleFolderAccordion('cpeY3Cont', 'cpeY3Chev')"
                    class="w-full flex items-center justify-between px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left group">
                    <span class="flex items-center space-x-2 truncate">
                      <svg id="cpeY3Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                      </svg>
                      <svg class="w-3 h-3 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span class="truncate text-[11px] font-semibold text-slate-200">3rd Year</span>
                    </span>
                  </button>
                  <div id="cpeY3Cont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-3">
                    <button type="button" onclick="openFlowchartForYear(3)"
                      class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px] group">
                      <span class="text-sky-400">📊</span>
                      <span class="truncate">Curriculum Flowchart (Year 3)</span>
                    </button>
                    <button type="button" onclick="openSpreadsheetForYear(3)"
                      class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px] group">
                      <span class="text-emerald-400">📑</span>
                      <span class="truncate">Curriculum Spreadsheet (Year 3)</span>
                    </button>
                  </div>
                </div>

                <!-- 4th Year -->
                <div>
                  <button type="button" onclick="setSidebarYear(4); toggleFolderAccordion('cpeY4Cont', 'cpeY4Chev')"
                    class="w-full flex items-center justify-between px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left group">
                    <span class="flex items-center space-x-2 truncate">
                      <svg id="cpeY4Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                      </svg>
                      <svg class="w-3 h-3 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span class="truncate text-[11px] font-semibold text-slate-200">4th Year</span>
                    </span>
                  </button>
                  <div id="cpeY4Cont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-3">
                    <button type="button" onclick="openFlowchartForYear(4)"
                      class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px] group">
                      <span class="text-sky-400">📊</span>
                      <span class="truncate">Curriculum Flowchart (Year 4)</span>
                    </button>
                    <button type="button" onclick="openSpreadsheetForYear(4)"
                      class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px] group">
                      <span class="text-emerald-400">📑</span>
                      <span class="truncate">Curriculum Spreadsheet (Year 4)</span>
                    </button>
                  </div>
                </div>

                <!-- Curriculum Tools & Reports Section -->
                <div class="mt-2 pt-1.5 border-t border-slate-700/60 space-y-0.5">
                  <div class="px-2 py-0.5 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                    Curriculum Tools &amp; Reports
                  </div>
                  <button type="button" id="nav-cpe-flowchart" onclick="selectProgram('BSCpE', 'flowchart')"
                    class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition cursor-pointer text-left group">
                    <svg class="w-3.5 h-3.5 text-sky-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                    </svg>
                    <span class="truncate text-[11px]">Curriculum Flowchart</span>
                  </button>
                  <button type="button" id="nav-cpe-spreadsheet" onclick="selectProgram('BSCpE', 'spreadsheet')"
                    class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition cursor-pointer text-left group">
                    <svg class="w-3.5 h-3.5 text-emerald-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                    <span class="truncate text-[11px]">Curriculum Spreadsheet</span>
                  </button>
                  <button type="button" id="nav-cpe-dashboard" onclick="selectProgram('BSCpE', 'dashboard')"
                    class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition cursor-pointer text-left group">
                    <svg class="w-3.5 h-3.5 text-blue-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    <span class="truncate text-[11px]">Curriculum Dashboard</span>
                  </button>
                  <button type="button" id="nav-cpe-obe" onclick="selectProgram('BSCpE', 'obe')"
                    class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition cursor-pointer text-left group">
                    <svg class="w-3.5 h-3.5 text-indigo-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span class="truncate text-[11px]">OBE Matrix (SO a–m)</span>
                  </button>
                  <button type="button" id="nav-cpe-delegation" onclick="selectProgram('BSCpE', 'delegation')"
                    class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition cursor-pointer text-left group">
                    <svg class="w-3.5 h-3.5 text-purple-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    <span class="truncate text-[11px]">Delegations (D-RBAC)</span>
                  </button>
                  <button type="button" id="nav-cpe-audit" onclick="selectProgram('BSCpE', 'audit')"
                    class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition cursor-pointer text-left group">
                    <svg class="w-3.5 h-3.5 text-rose-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clip-rule="evenodd" />
                    </svg>
                    <span class="truncate text-[11px]">Audit Trail (SHA-256)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    }

    function renderGenericProgramSubtree(prog, school) {
      const code = prog.code;
      const name = prog.name || prog.code;
      const progCodeToId = {
        'BSCpE': 'cpe', 'BSCE': 'ce', 'BSECE': 'ece',
        'BSCS': 'cs', 'BSIT': 'it',
        'BMMA': 'mma', 'BSPsych': 'psych',
        'BSBA': 'ba', 'BSA': 'acc',
        'BSArch': 'arch'
      };
      const progId = progCodeToId[code] || code.toLowerCase().replace(/[^a-z0-9]/g, '');

      return `
        <!-- ${name} (${code}) -->
        <div id="node-prog-${progId}">
          <button type="button" onclick="goToProgramPd('${code}')"
            class="w-full flex items-center justify-between px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left group">
            <span class="flex items-center space-x-2 truncate">
              <svg id="${progId}FolderChev" onclick="event.stopPropagation(); toggleFolderAccordion('${progId}FolderCont', '${progId}FolderChev')" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
              </svg>
              <svg class="w-3.5 h-3.5 text-amber-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
              </svg>
              <span class="truncate text-xs font-semibold text-slate-200 group-hover:text-white">${name}</span>
            </span>
            <span class="text-[9px] font-mono px-1 py-0.2 bg-amber-400/10 text-amber-400 border border-amber-400/30">${code}</span>
          </button>

          <!-- ${code} Subfolder Structure -->
          <div id="${progId}FolderCont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-3">
            <!-- Curriculums Management -->
            <div id="node-${progId}-curriculums">
              <button type="button" onclick="toggleFolderAccordion('${progId}CurricCont', '${progId}CurricChev')"
                class="w-full flex items-center justify-between px-2 py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition cursor-pointer text-left group">
                <span class="flex items-center space-x-2 truncate">
                  <svg id="${progId}CurricChev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                  </svg>
                  <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                  </svg>
                  <span class="truncate text-[11px]">Curriculum Management</span>
                </span>
              </button>

              <!-- Revisions List -->
              <div id="${progId}CurricCont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-3">
                <div id="node-${progId}-rev2026">
                  <button type="button" onclick="toggleFolderAccordion('${progId}Rev2026Cont', '${progId}Rev2026Chev')"
                    class="w-full flex items-center justify-between px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left group">
                    <span class="flex items-center space-x-1.5 truncate">
                      <svg id="${progId}Rev2026Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                      </svg>
                      <svg class="w-3 h-3 text-amber-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                      </svg>
                      <span class="truncate text-[11px] font-bold text-amber-300">2026–2030</span>
                    </span>
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" title="Active Baseline"></span>
                  </button>

                  <div id="${progId}Rev2026Cont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-2.5">
                    <div>
                      <button type="button" onclick="toggleFolderAccordion('${progId}OffDocs2026Cont', '${progId}OffDocs2026Chev')"
                        class="w-full flex items-center justify-between px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/60 transition cursor-pointer text-left group">
                        <span class="flex items-center space-x-1.5 truncate">
                          <svg id="${progId}OffDocs2026Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                          </svg>
                          <svg class="w-3 h-3 text-amber-400/80 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/>
                          </svg>
                          <span class="truncate text-[11px]">Official Documents</span>
                        </span>
                      </button>
                      <div id="${progId}OffDocs2026Cont" class="hidden mt-0.5 space-y-0.5 pl-2 border-l border-slate-700/60 ml-2">
                        <button type="button" onclick="selectProgram('${code}', 'registrar', 1)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Official Flowchart</span></button>
                        <button type="button" onclick="selectProgram('${code}', 'registrar', 2)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Prospectus</span></button>
                        <button type="button" onclick="selectProgram('${code}', 'registrar', 3)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Course Catalog</span></button>
                        <button type="button" onclick="selectProgram('${code}', 'registrar', 4)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Program of Study</span></button>
                        <button type="button" onclick="selectProgram('${code}', 'registrar', 5)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>OBE Map</span></button>
                        <button type="button" onclick="selectProgram('${code}', 'registrar', 6)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Comparative Summary</span></button>
                        <button type="button" onclick="selectProgram('${code}', 'registrar', 7)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Summary of Units</span></button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Program Direct Year Shortcuts -->
                <div class="px-2 pt-1 pb-0.5 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  By Year
                </div>
                <button type="button" onclick="selectProgram('${code}', 'flowchart')" class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px]">
                  <span class="text-sky-400">1️⃣</span>
                  <span class="truncate">1st Year</span>
                </button>
                <button type="button" onclick="selectProgram('${code}', 'flowchart')" class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px]">
                  <span class="text-sky-400">2️⃣</span>
                  <span class="truncate">2nd Year</span>
                </button>
                <button type="button" onclick="selectProgram('${code}', 'flowchart')" class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px]">
                  <span class="text-sky-400">3️⃣</span>
                  <span class="truncate">3rd Year</span>
                </button>
                <button type="button" onclick="selectProgram('${code}', 'flowchart')" class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px]">
                  <span class="text-sky-400">4️⃣</span>
                  <span class="truncate">4th Year</span>
                </button>

                <!-- Tools & Reports -->
                <div class="mt-2 pt-1.5 border-t border-slate-700/60 space-y-0.5">
                  <div class="px-2 py-0.5 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                    Tools &amp; Reports
                  </div>
                  <button type="button" onclick="selectProgram('${code}', 'flowchart')" class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px]">
                    <span class="text-sky-400">📊</span>
                    <span class="truncate">Curriculum Flowchart</span>
                  </button>
                  <button type="button" onclick="selectProgram('${code}', 'table')" class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px]">
                    <span class="text-emerald-400">📑</span>
                    <span class="truncate">Curriculum Spreadsheet</span>
                  </button>
                  <button type="button" onclick="selectProgram('${code}', 'dashboard')" class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px]">
                    <span class="text-blue-400">📈</span>
                    <span class="truncate">Curriculum Dashboard</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    }

    function renderSidebarSchools() {
      const schoolsCont = document.getElementById('schoolsFolderCont');
      if (!schoolsCont) return;

      // Update count badge
      const badge = document.getElementById('schoolsCountBadge');
      if (badge) {
        badge.innerText = '1 School';
      }

      // Preserve set of open containers
      const openContIds = new Set();
      document.querySelectorAll('#schoolsFolderCont [id$="Cont"]').forEach(el => {
        if (!el.classList.contains('hidden')) {
          openContIds.add(el.id);
        }
      });

      let html = '';
      ACADEMIC_SCHOOLS_DATA.forEach(school => {
        const schoolId = school.id;
        const schoolColor = school.color || '#E5A823';
        const schoolTitle = `${school.bannerTitle ? school.bannerTitle + ' ' : ''}${school.name}`;

        html += `
        <!-- ─── ${schoolTitle.toUpperCase()} ─── -->
        <div id="node-school-${schoolId}">
          <button type="button" onclick="goToSchoolExd('${schoolId}')"
            class="w-full flex items-center justify-between px-2 py-1.5 text-slate-300 hover:text-white hover:bg-slate-800/60 transition cursor-pointer text-left border-l-2 group" style="border-left-color: ${schoolColor};">
            <span class="flex items-center space-x-2 truncate">
              <svg id="${schoolId}FolderChev" onclick="event.stopPropagation(); toggleFolderAccordion('${schoolId}FolderCont', '${schoolId}FolderChev')" class="w-2.5 h-2.5 text-slate-400 group-hover:text-white transition-transform duration-150 shrink-0 p-0.5 hover:bg-slate-700 rounded" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
              </svg>
              <svg class="w-3.5 h-3.5 shrink-0" style="color: ${schoolColor};" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h6a2 2 0 012 2v1H8a3 3 0 00-3 3v6H4a2 2 0 01-2-2V6zm5 7a1 1 0 011-1h8a1 1 0 011 1v4a1 1 0 01-1 1H8a1 1 0 01-1-1v-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-bold text-slate-100 truncate text-xs">${schoolTitle}</span>
            </span>
            <span class="w-2 h-2 rounded-full shrink-0" style="background-color: ${schoolColor};"></span>
          </button>

          <!-- ${schoolId} Subfolder -->
          <div id="${schoolId}FolderCont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-3">`;

        if (Array.isArray(school.programs) && school.programs.length > 0) {
          school.programs.forEach(p => {
            const prog = typeof p === 'object' ? p : { code: p, name: p };
            if (prog.code === 'BSCpE') {
              html += renderBscpeSubtree(school);
            } else {
              html += renderGenericProgramSubtree(prog, school);
            }
          });
        }

        html += `
          </div>
        </div>`;
      });

      schoolsCont.innerHTML = html;

      // Restore open containers
      openContIds.forEach(contId => {
        const c = document.getElementById(contId);
        if (c) {
          c.classList.remove('hidden');
          const chevId = contId.replace(/Cont$/, 'Chev');
          const chev = document.getElementById(chevId);
          if (chev) {
            chev.classList.add('rotate-90');
          }
        }
      });
    }

    // Expose helpers globally
    window.renderSidebarSchools = renderSidebarSchools;
    window.openAddProgramModal = openAddProgramModal;
    window.closeAddProgramModal = closeAddProgramModal;
    window.submitAddProgram = submitAddProgram;
    window.deleteProgram = deleteProgram;
    window.openAddSchoolModal = openAddSchoolModal;
    window.closeAddSchoolModal = closeAddSchoolModal;
    window.submitAddSchool = submitAddSchool;
    window.deleteCurrentSchool = deleteCurrentSchool;
    window.submitEditSchool = submitEditSchool;
    window.getProgramDirector = getProgramDirector;
    window.openEditProgramModal = openEditProgramModal;
    window.closeEditProgramModal = closeEditProgramModal;
    window.submitEditProgram = submitEditProgram;

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
        if (version === 'v4_dev_soe_cpe_only') {
          const savedCustom = localStorage.getItem('academic_schools_data_custom');
          if (savedCustom) {
            const parsed = JSON.parse(savedCustom);
            if (Array.isArray(parsed) && parsed.length) {
              ACADEMIC_SCHOOLS_DATA.splice(0, ACADEMIC_SCHOOLS_DATA.length, ...parsed);
            }
          }
        } else {
          // Initialize fresh version with only active development school (SoE BSCpE)
          localStorage.setItem('schools_data_version', 'v4_dev_soe_cpe_only');
          localStorage.setItem('academic_schools_data_custom', JSON.stringify(ACADEMIC_SCHOOLS_DATA));
        }
      } catch (err) {
        console.warn('Failed to parse saved custom schools:', err);
      }

      renderSchoolCards();
      renderSidebarSchools();
    });
