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
        logoImage: 'assets/exd_soe_logo_crop.png',
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
            <polygon points="0,0 140,0 90,120 0,120" fill="#2d170b" fill-opacity="0.9"/>
            <polygon points="120,0 300,0 300,120 180,120" fill="#1b120c" fill-opacity="0.9"/>
            <line x1="20" y1="25" x2="80" y2="25" stroke="#FF6B00" stroke-width="1.5"/>
            <line x1="80" y1="25" x2="100" y2="45" stroke="#FF6B00" stroke-width="1.5"/>
            <circle cx="20" cy="25" r="3" fill="#FF6B00"/>
            <circle cx="100" cy="45" r="2.5" fill="#FF6B00"/>
            <line x1="190" y1="95" x2="250" y2="95" stroke="#E5A823" stroke-width="1.5"/>
            <line x1="250" y1="95" x2="270" y2="75" stroke="#E5A823" stroke-width="1.5"/>
            <circle cx="250" cy="95" r="3" fill="#E5A823"/>
            <circle cx="270" cy="75" r="2.5" fill="#E5A823"/>
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
      <div onclick="openAddSchoolModal()" class="school-card min-h-[360px] bg-white dark:bg-[#181D26]/60 hover:bg-slate-50 dark:hover:bg-[#181D26] border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-[#E5A823] transition-all duration-200 cursor-pointer flex flex-col items-center justify-center p-8 text-center group select-none shadow-md">
        <div class="w-14 h-14 rounded-full bg-slate-100 dark:bg-[#10151E] border border-slate-300 dark:border-slate-700 group-hover:border-[#E5A823] group-hover:bg-[#E5A823]/10 flex items-center justify-center text-slate-400 group-hover:text-[#E5A823] text-2xl font-light transition mb-3">
          +
        </div>
        <h3 class="text-sm font-bold text-slate-900 dark:text-slate-200 group-hover:text-[#002855] dark:group-hover:text-white uppercase tracking-wider mb-1">
          Add Academic School
        </h3>
        <p class="text-xs text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-300 max-w-[220px] leading-relaxed">
          Click to provision a new school or division with programs &amp; assets
        </p>
      </div>
      `;

      function getSchoolProgramsHtml(programs) {
        let activeHtml = '';
        if (!Array.isArray(programs)) return activeHtml;
        for (let pi = 0; pi < programs.length; pi++) {
          const item = programs[pi];
          const prog = (typeof item === 'object' && item !== null)
            ? item 
            : (typeof getProgramInfo === 'function' ? getProgramInfo(item) : { code: String(item), name: (String(item) === 'BSCpE' ? 'Bachelor of Science in Computer Engineering' : String(item)) });
          if (!prog.archived) {
            activeHtml += '<a href="javascript:void(0)" onclick="event.stopPropagation(); selectProgram(\'' + prog.code + '\', \'homePdProgramView\')" class="text-slate-900 dark:text-slate-200 hover:text-[#002855] dark:hover:text-[#E5A823] hover:underline transition flex items-center justify-between group cursor-pointer" title="Go to ' + prog.name + ' (' + prog.code + ')">' +
              '<span class="flex items-center gap-1.5 truncate">' +
                '<span class="text-amber-500 dark:text-amber-400 font-bold group-hover:translate-x-0.5 transition-transform">&bull;</span> ' +
                '<span class="truncate font-bold text-slate-900 dark:text-white">' + prog.name + '</span>' +
              '</span>' +
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
        const effectiveLogo = s.logoImage || (s.id === 'soe' ? 'assets/exd_soe_logo_crop.png' : null);
        const logoImg = effectiveLogo 
          ? `<img src="${effectiveLogo}" class="w-full h-full object-contain p-1" alt="${s.name} Emblem" onerror="this.onerror=null; this.src='assets/card_emblem_ref.png';" />` 
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
              <div class="w-full h-full rounded-full ${effectiveLogo ? 'bg-white' : `bg-gradient-to-br ${s.badgeBg}`} flex items-center justify-center shadow-inner overflow-hidden">
                ${logoImg || defaultTorchSvg}
              </div>
            </div>
          </div>

          <!-- Card Body -->
          <div class="p-4 pt-2 text-slate-800 dark:text-slate-200 space-y-3 flex-1 flex flex-col justify-between">
            <div class="space-y-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Executive Director:</label>
                <div class="bg-slate-50 dark:bg-[#10151E] border border-slate-200 dark:border-slate-700/70 p-2 text-xs text-slate-900 dark:text-white font-medium truncate">
                  ${s.director}
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Programs Offered:</label>
                <div class="bg-slate-50 dark:bg-[#10151E] border border-slate-200 dark:border-slate-700/70 p-2.5 text-xs text-slate-700 dark:text-slate-300 space-y-1.5 font-sans">
                  ${programsHtml}
                </div>
              </div>
            </div>

            <!-- Bottom Actions & Color-coded Accent Stripe (Only Edit Pencil Button) -->
            <div class="space-y-3 pt-2">
              <div class="flex justify-end items-center">
                <button type="button" onclick="event.stopPropagation(); openEditSchoolModal('${s.id}')" class="w-8 h-8 bg-slate-100 dark:bg-[#10151E] hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/70 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center text-sm transition cursor-pointer shadow-xs" title="Edit ${s.bannerTitle} ${s.name} (Programs, Director, Assets)">
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

      const activeSchools = visibleSchools.filter(s => !s.archived);
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
      if (window.spaRouter && typeof window.spaRouter.onModalOpen === 'function') {
        window.spaRouter.onModalOpen('edit-school', { school: schoolId });
      }
    }

    function closeEditSchoolModal() {
      const modal = document.getElementById('modalEditSchool');
      if (modal) modal.classList.add('hidden');
      currentEditingSchoolId = null;
      modalTempBanner = null;
      modalTempLogo = null;
      if (window.spaRouter && typeof window.spaRouter.onModalClose === 'function') {
        window.spaRouter.onModalClose('edit-school');
      }
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

      const oldPrefix = school.bannerTitle;
      const oldName = school.name;
      const oldDirector = school.director;
      const oldColor = school.color;
      const oldIcon = school.bannerIcon;
      const oldProgramsStr = (school.programs || []).map(p => typeof p === 'string' ? p : `${p.code}: ${p.name}`).join(', ');

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

      const newProgramsStr = (school.programs || []).map(p => typeof p === 'string' ? p : `${p.code}: ${p.name}`).join(', ');

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

      // Compute field-level diff
      const diff = [];
      if (oldPrefix !== newPrefix) diff.push({ field: 'Banner Prefix', old: oldPrefix, new: newPrefix });
      if (oldName !== newName) diff.push({ field: 'School Name', old: oldName, new: newName });
      if (oldDirector !== newDirector) diff.push({ field: 'Executive Director / Dean', old: oldDirector, new: newDirector });
      if (oldColor !== newColor) diff.push({ field: 'Theme Accent Color', old: oldColor, new: newColor });
      if (oldIcon !== newIcon) diff.push({ field: 'Banner Icon', old: oldIcon, new: newIcon });
      if (oldProgramsStr !== newProgramsStr) diff.push({ field: 'Offered Programs', old: oldProgramsStr, new: newProgramsStr });

      if (typeof appendAuditLog === 'function') {
        const fullSchoolName = `${school.bannerTitle} ${school.name}`;
        appendAuditLog('SCHOOL_UPDATE', fullSchoolName, `Updated metadata for ${fullSchoolName} (${diff.length} fields modified)`, diff.length > 0 ? diff : null);
      }

      if (typeof showToast === 'function') {
        showToast(`Updated ${school.bannerTitle} ${school.name} details successfully!`);
      }
    }

    // Modal controllers
    // Modal controllers & Customizable Institutional Pillars
    const DEFAULT_PILLARS = {
      mission: 'Asia Pacific College is committed to bridging the gap between industry and academia by developing high-performing, professionally competent, and socially responsible professionals.\n\n• Delivering industry-integrated and project-based educational frameworks.\n• Instilling ethical, rigorous engineering principles and lifelong learning habits.\n• Promoting collaborative, real-world solutions that impact community and industry.',
      vision: 'Asia Pacific College envisions itself as a leading educational institution recognized globally for academic excellence, digital transformation, and producing pioneering industry leaders.\n\n• Pioneering Outcomes-Based Engineering curricula compliant with CHED and international standards.\n• Driving digital curriculum topology, agile syllabus design, and verified prerequisite graphs.\n• Empowering graduates to lead technological innovations across the ASEAN region.',
      values: 'Integrity: Uncompromising commitment to truth, ethical conduct, and academic honesty.\nIndustry: Deep integration with global industry standards and technological demands.\nInnovation: Fostering creative problem-solving, research curiosity, and entrepreneurial drive.\nInclusion: Embracing diverse perspectives, collaborative teams, and equitable access.',
      gas: [
        { code: 'GA A', title: 'Solution Provider', category: 'Innovation', desc: 'Creates innovative, proactive and impactful strategies with a willingness to challenge the status quo using emerging technologies aligned with organizational goals and within a global context' },
        { code: 'GA B', title: 'Committed', category: 'Dedication', desc: 'Personifies reliability, unwavering dedication to responsibilities and resiliency to overcome unexpected challenges' },
        { code: 'GA C', title: 'IT Enabled', category: 'Technology', desc: 'Pioneers in utilizing emerging technologies aiming for digital inclusivity' },
        { code: 'GA D', title: 'Customer-oriented Professional', category: 'Service & Empathy', desc: 'Practices sensitivity and respect for cultural and disciplinary diversity; and advocates empathy and compassion (malasakit) to enhance cultural experience of customers' },
        { code: 'GA E', title: 'Team Player', category: 'Collaboration', desc: 'Demonstrates leadership to inspire the achievement of team goals with open collaboration and respect for new ideas' },
        { code: 'GA F', title: 'Good Communicator', category: 'Dialogue', desc: 'Expresses ideas in an organized manner with clarity, listening respectfully to diverse audience needs leading to meaningful dialogue' },
        { code: 'GA G', title: 'Ethical', category: 'Integrity', desc: 'Practices fairness and empathy in dealing with all levels of the organization guided by a moral compass' },
        { code: 'GA H', title: 'Contributor to Nation Building', category: 'Civic Impact', desc: 'Participates actively in socio-economic and environmental issues leading towards sustainability; and contributes positively to national and global development' },
        { code: 'GA I', title: 'Lifelong Learner', category: 'Growth', desc: 'Undertakes continuous, independent learning charting a path in pursuit of self-actualization' }
      ]
    };

    function getPillarsData() {
      try {
        const stored = localStorage.getItem('apc_custom_pillars');
        if (stored) return Object.assign({}, DEFAULT_PILLARS, JSON.parse(stored));
      } catch (e) {}
      return Object.assign({}, DEFAULT_PILLARS);
    }

    function showPillarModal(pillar) {
      const modal = document.getElementById('pillarModal');
      const title = document.getElementById('pillarModalTitle');
      const content = document.getElementById('pillarModalContent');
      if (!modal || !title || !content) return;

      const data = getPillarsData();
      const verTag = (typeof window.getObeVersionString === 'function') ? ` (${window.getObeVersionString()})` : '';

      if (pillar === 'mission') {
        title.innerText = `Institutional Mission${verTag}`;
        const lines = (data.mission || '').split('\n').filter(l => l.trim());
        const lead = lines.shift() || 'Our Mission';
        content.innerHTML = `
          <p class="font-bold text-[#002855] dark:text-[#E5A823] text-base mb-2">Our Mission</p>
          <p class="text-slate-800 dark:text-slate-200 mb-3 leading-relaxed">${lead}</p>
          ${lines.length ? `<ul class="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-slate-300 text-xs">${lines.map(l => `<li>${l.replace(/^[•\-\*]\s*/, '')}</li>`).join('')}</ul>` : ''}
        `;
      } else if (pillar === 'vision') {
        title.innerText = `Institutional Vision${verTag}`;
        const lines = (data.vision || '').split('\n').filter(l => l.trim());
        const lead = lines.shift() || 'Our Vision';
        content.innerHTML = `
          <p class="font-bold text-[#002855] dark:text-[#E5A823] text-base mb-2">Our Vision</p>
          <p class="text-slate-800 dark:text-slate-200 mb-3 leading-relaxed">${lead}</p>
          ${lines.length ? `<ul class="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-slate-300 text-xs">${lines.map(l => `<li>${l.replace(/^[•\-\*]\s*/, '')}</li>`).join('')}</ul>` : ''}
        `;
      } else if (pillar === 'gas' || pillar === 'attributes') {
        title.innerText = `Institutional Graduate Attributes (GA${verTag})`;
        const gasList = (data.gas && Array.isArray(data.gas)) ? data.gas : DEFAULT_PILLARS.gas;
        const gaCards = gasList.map(ga => `
          <div class="p-3 bg-slate-50 dark:bg-[#10151E] border border-slate-200 dark:border-slate-700/60">
            <div class="flex items-center justify-between mb-1">
              <span class="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 font-mono font-bold text-[10px] border border-blue-200 dark:border-blue-700">${ga.code}</span>
              <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">${ga.category || ''}</span>
            </div>
            <div class="font-bold text-[#002855] dark:text-[#E5A823] text-xs mb-1">${ga.title}</div>
            <div class="text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">${ga.desc}</div>
          </div>
        `).join('');

        content.innerHTML = `
          <div class="flex items-center justify-between mb-3 border-b border-slate-200 dark:border-slate-700/70 pb-2">
            <div>
              <p class="font-bold text-[#002855] dark:text-[#E5A823] text-sm">Asia Pacific College Graduate Attributes</p>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">Institutional graduate profile.</p>
            </div>
            <span class="px-2 py-0.5 bg-amber-50 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-mono font-bold text-[10px] border border-amber-300 dark:border-amber-700">Institutional</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-[55vh] overflow-y-auto pr-1">
            ${gaCards}
          </div>
        `;
      } else {
        title.innerText = `Institutional Core Values${verTag}`;
        const rawValues = (data.values || '').split('\n').filter(l => l.trim());
        const valCards = rawValues.map(v => {
          const parts = v.split(':');
          const valTitle = parts[0] ? parts[0].trim() : 'Value';
          const valDesc = parts.slice(1).join(':').trim() || '';
          return `
            <div class="p-3 bg-slate-50 dark:bg-[#10151E] border border-slate-200 dark:border-slate-700/60">
              <div class="font-bold text-[#002855] dark:text-[#E5A823] text-sm mb-1">${valTitle}</div>
              <div class="text-slate-700 dark:text-slate-300 text-xs">${valDesc}</div>
            </div>
          `;
        }).join('');

        content.innerHTML = `
          <p class="font-bold text-[#002855] dark:text-[#E5A823] text-base mb-2">Our Core Values</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            ${valCards}
          </div>
        `;
      }
      modal.classList.remove('hidden');
      if (window.spaRouter && typeof window.spaRouter.onModalOpen === 'function') {
        window.spaRouter.onModalOpen('pillar', { pillar: pillar });
      }
    }

    function closePillarModal() {
      const modal = document.getElementById('pillarModal');
      if (modal) modal.classList.add('hidden');
      if (window.spaRouter && typeof window.spaRouter.onModalClose === 'function') {
        window.spaRouter.onModalClose('pillar');
      }
    }

    // =========================================================================
    // INLINE INSTITUTIONAL STATEMENTS EDITING (INSIDE VERSIONING HISTORY)
    // =========================================================================
    function toggleInstMvvInlineEditor(forceState) {
      const role = (window.currentActiveRole || 'admin').toLowerCase();
      if (role !== 'admin' && role !== 'a') {
        if (typeof showToast === 'function') {
          showToast('🔒 Access Restricted: Only the System Administrator can edit institutional MVV statements.');
        }
        return;
      }
      const editor = document.getElementById('instMvvInlineEditor');
      const cards = document.getElementById('instMvvCardsContainer');
      const lbl = document.getElementById('lblToggleInstMvvEdit');
      if (!editor) return;

      const isOpening = (forceState !== undefined) ? forceState : editor.classList.contains('hidden');
      if (isOpening) {
        const data = getPillarsData();
        const mInput = document.getElementById('inlineInstMissionInput');
        const vInput = document.getElementById('inlineInstVisionInput');
        const valInput = document.getElementById('inlineInstValuesInput');
        if (mInput) mInput.value = data.mission || '';
        if (vInput) vInput.value = data.vision || '';
        if (valInput) valInput.value = data.values || '';

        editor.classList.remove('hidden');
        if (cards) cards.classList.add('hidden');
        if (lbl) lbl.textContent = 'Close Editor';
      } else {
        editor.classList.add('hidden');
        if (cards) cards.classList.remove('hidden');
        if (lbl) lbl.textContent = 'Edit MVV Statements';
      }
    }

    function saveInstMvvInline() {
      const role = (window.currentActiveRole || 'admin').toLowerCase();
      if (role !== 'admin' && role !== 'a') {
        if (typeof showToast === 'function') {
          showToast('🔒 Access Restricted: Only the System Administrator can edit institutional MVV statements.');
        }
        return;
      }
      const mInput = document.getElementById('inlineInstMissionInput');
      const vInput = document.getElementById('inlineInstVisionInput');
      const valInput = document.getElementById('inlineInstValuesInput');

      const current = getPillarsData();
      const updated = {
        ...current,
        mission: mInput ? mInput.value.trim() : current.mission,
        vision: vInput ? vInput.value.trim() : current.vision,
        values: valInput ? valInput.value.trim() : current.values
      };

      try {
        localStorage.setItem('apc_custom_pillars', JSON.stringify(updated));
      } catch (e) {}

      // Update registry in-memory representation
      if (window.MVV_VERSION_REGISTRY) {
        const activeMvv = window.MVV_VERSION_REGISTRY.find(m => m.id === 'MVV-2025');
        if (activeMvv) {
          activeMvv.mission = updated.mission;
          activeMvv.vision = updated.vision;
          activeMvv.values = updated.values;
        }
      }

      if (typeof window.bumpCurrentObeRevision === 'function') {
        window.bumpCurrentObeRevision('Institutional MVV Statements updated');
      }

      toggleInstMvvInlineEditor(false);
      renderInstMvvTable();

      if (typeof showToast === 'function') {
        showToast('✓ Successfully updated Institutional MVV Statements and committed to version history!');
      }
    }

    function toggleInstGaInlineEditor(forceState) {
      const role = (window.currentActiveRole || 'admin').toLowerCase();
      if (role !== 'admin' && role !== 'a') {
        if (typeof showToast === 'function') {
          showToast('🔒 Access Restricted: Only the System Administrator can edit institutional Graduate Attributes.');
        }
        return;
      }
      const editor = document.getElementById('instGaInlineEditor');
      const cards = document.getElementById('instGaCardsContainer');
      const lbl = document.getElementById('lblToggleInstGaEdit');
      if (!editor) return;

      const isOpening = (forceState !== undefined) ? forceState : editor.classList.contains('hidden');
      if (isOpening) {
        const data = getPillarsData();
        const gasInput = document.getElementById('inlineInstGasInput');
        if (gasInput) {
          const gasList = (data.gas && Array.isArray(data.gas)) ? data.gas : DEFAULT_PILLARS.gas;
          gasInput.value = gasList.map(g => `${g.code}: ${g.title} - ${g.desc}`).join('\n');
        }

        editor.classList.remove('hidden');
        if (cards) cards.classList.add('hidden');
        if (lbl) lbl.textContent = 'Close Editor';
      } else {
        editor.classList.add('hidden');
        if (cards) cards.classList.remove('hidden');
        if (lbl) lbl.textContent = 'Edit Graduate Attributes';
      }
    }

    function saveInstGaInline() {
      const role = (window.currentActiveRole || 'admin').toLowerCase();
      if (role !== 'admin' && role !== 'a') {
        if (typeof showToast === 'function') {
          showToast('🔒 Access Restricted: Only the System Administrator can edit institutional Graduate Attributes.');
        }
        return;
      }
      const gasInput = document.getElementById('inlineInstGasInput');

      let parsedGas = DEFAULT_PILLARS.gas;
      if (gasInput && gasInput.value.trim()) {
        const lines = gasInput.value.split('\n').filter(l => l.trim());
        if (lines.length > 0) {
          parsedGas = lines.map((l, i) => {
            const parts = l.split(':');
            const code = parts.length > 1 ? parts[0].trim() : `GA ${String.fromCharCode(65 + i)}`;
            const rest = parts.length > 1 ? parts.slice(1).join(':').trim() : l.trim();
            const dashParts = rest.split(' - ');
            const title = dashParts[0] ? dashParts[0].trim() : `Attribute ${code}`;
            const desc = dashParts.length > 1 ? dashParts.slice(1).join(' - ').trim() : title;
            return { code, title, desc, category: 'Institutional' };
          });
        }
      }

      const current = getPillarsData();
      const updated = {
        ...current,
        gas: parsedGas
      };

      try {
        localStorage.setItem('apc_custom_pillars', JSON.stringify(updated));
      } catch (e) {}

      // Update registry in-memory representation
      if (window.GA_VERSION_REGISTRY) {
        const activeGa = window.GA_VERSION_REGISTRY.find(g => g.id === 'GA-2024');
        if (activeGa) {
          activeGa.count = parsedGas.length;
          activeGa.items = parsedGas.map(g => ({
            code: g.code,
            domain: g.category || 'Institutional',
            title: g.title,
            desc: g.desc
          }));
        }
      }

      if (typeof window.bumpCurrentObeRevision === 'function') {
        window.bumpCurrentObeRevision('Institutional Graduate Attributes updated');
      }

      toggleInstGaInlineEditor(false);
      renderInstGaTable();

      if (typeof showToast === 'function') {
        showToast(`✓ Successfully updated ${parsedGas.length} Institutional Graduate Attributes!`);
      }
    }

    function resetPillarsToDefault() {
      const role = (window.currentActiveRole || 'admin').toLowerCase();
      if (role !== 'admin' && role !== 'a') {
        if (typeof showToast === 'function') {
          showToast('🔒 Access Restricted: Only the System Administrator can reset institutional statements.');
        }
        return;
      }
      try {
        localStorage.removeItem('apc_custom_pillars');
      } catch (e) {}
      const mInput = document.getElementById('inlineInstMissionInput');
      const vInput = document.getElementById('inlineInstVisionInput');
      const valInput = document.getElementById('inlineInstValuesInput');
      const gasInput = document.getElementById('inlineInstGasInput');
      if (mInput) mInput.value = DEFAULT_PILLARS.mission;
      if (vInput) vInput.value = DEFAULT_PILLARS.vision;
      if (valInput) valInput.value = DEFAULT_PILLARS.values;
      if (gasInput) {
        gasInput.value = DEFAULT_PILLARS.gas.map(g => `${g.code}: ${g.title} - ${g.desc}`).join('\n');
      }
      if (typeof showToast === 'function') {
        showToast('Reset statements to institutional defaults.');
      }
    }

    // =========================================================================
    // DEDICATED INSTITUTIONAL MVV & GA VERSIONING HISTORY (SYS ADMIN EXCLUSIVE)
    // =========================================================================
    let currentInstVhTab = 'mvv';
    let currentInspectedInstMvvId = 'MVV-2025';
    let currentInspectedInstGaId = 'GA-2024';

    function openInstitutionalVersioningModal(domain = 'mvv') {
      const modal = document.getElementById('institutionalVersioningModal');
      if (!modal) return;
      modal.classList.remove('hidden');
      switchInstVhTab(domain);
      if (window.spaRouter && typeof window.spaRouter.onModalOpen === 'function') {
        window.spaRouter.onModalOpen('inst-versioning', { domain });
      }
    }

    function closeInstitutionalVersioningModal() {
      const modal = document.getElementById('institutionalVersioningModal');
      if (modal) modal.classList.add('hidden');
      if (window.spaRouter && typeof window.spaRouter.onModalClose === 'function') {
        window.spaRouter.onModalClose('inst-versioning');
      }
    }

    function switchInstVhTab(tabId) {
      currentInstVhTab = tabId;
      const tabMvv = document.getElementById('tabInstVhMvv');
      const tabGa = document.getElementById('tabInstVhGa');
      const panelMvv = document.getElementById('panelInstVhMvv');
      const panelGa = document.getElementById('panelInstVhGa');

      if (tabId === 'mvv') {
        if (panelMvv) panelMvv.classList.remove('hidden');
        if (panelGa) panelGa.classList.add('hidden');
        if (tabMvv) tabMvv.className = 'px-3 py-1.5 bg-[#002855] text-[#E5A823] font-bold shadow-xs transition flex items-center gap-1.5 cursor-pointer';
        if (tabGa) tabGa.className = 'px-3 py-1.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition flex items-center gap-1.5 cursor-pointer';
        renderInstMvvTable();
      } else {
        if (panelMvv) panelMvv.classList.add('hidden');
        if (panelGa) panelGa.classList.remove('hidden');
        if (tabGa) tabGa.className = 'px-3 py-1.5 bg-[#002855] text-[#E5A823] font-bold shadow-xs transition flex items-center gap-1.5 cursor-pointer';
        if (tabMvv) tabMvv.className = 'px-3 py-1.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition flex items-center gap-1.5 cursor-pointer';
        renderInstGaTable();
      }
    }

    function renderInstMvvTable(targetId) {
      const registry = window.MVV_VERSION_REGISTRY || [];
      const id = targetId || currentInspectedInstMvvId || 'MVV-2025';
      currentInspectedInstMvvId = id;
      const targetMvv = registry.find(m => m.id === id) || registry[0];

      if (id === 'MVV-2025') {
        const livePillars = getPillarsData();
        if (livePillars) {
          if (livePillars.mission) targetMvv.mission = livePillars.mission;
          if (livePillars.vision) targetMvv.vision = livePillars.vision;
          if (livePillars.values) targetMvv.values = livePillars.values;
        }
      }

      const tbody = document.getElementById('instMvvTableBody');
      if (tbody) {
        tbody.innerHTML = registry.map(mvv => {
          const isInspecting = (mvv.id === id);
          return `
            <tr onclick="renderInstMvvTable('${mvv.id}')" class="cursor-pointer transition border-b border-slate-100 dark:border-slate-800 ${
              isInspecting ? 'bg-amber-500/10 dark:bg-amber-500/15 font-bold' : 'hover:bg-slate-50 dark:hover:bg-slate-900/50'
            }">
              <td class="py-2.5 px-3 border-r border-slate-200 dark:border-slate-800 font-mono text-xs text-[#002855] dark:text-amber-400">
                <div class="flex items-center gap-1.5">
                  ${isInspecting ? '<span class="text-amber-500">👉</span>' : ''}
                  <span>${mvv.id}</span>
                </div>
              </td>
              <td class="py-2.5 px-3 border-r border-slate-200 dark:border-slate-800">
                <div class="text-xs font-bold text-slate-800 dark:text-slate-100">${mvv.name}</div>
              </td>
              <td class="py-2.5 px-2 text-center border-r border-slate-200 dark:border-slate-800">
                <span class="px-2 py-0.5 font-mono text-[10px] font-bold border ${mvv.statusClass}">
                  ${mvv.status}
                </span>
              </td>
              <td class="py-2.5 px-3 border-r border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-600 dark:text-slate-400">
                ${mvv.effective}
              </td>
              <td class="py-2.5 px-3 border-r border-slate-200 dark:border-slate-800 text-xs text-slate-500">
                ${mvv.notes}
              </td>
              <td class="py-2.5 px-3 text-center" onclick="event.stopPropagation()">
                <button type="button" onclick="renderInstMvvTable('${mvv.id}')" class="px-2 py-1 bg-[#002855] text-[#E5A823] font-bold text-[10px] hover:bg-[#001f42] cursor-pointer">
                  🔍 Inspect
                </button>
              </td>
            </tr>
          `;
        }).join('');
      }

      if (targetMvv) {
        const titleEl = document.getElementById('instMvvInspectTitle');
        if (titleEl) titleEl.textContent = `${targetMvv.name} (${targetMvv.id})`;
        const badgeEl = document.getElementById('instMvvInspectBadge');
        if (badgeEl) badgeEl.textContent = targetMvv.status;

        const cardsContainer = document.getElementById('instMvvCardsContainer');
        if (cardsContainer) {
          cardsContainer.innerHTML = `
            <div class="p-3.5 bg-white dark:bg-[#181D26] border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-xs">
              <div class="flex items-center justify-between">
                <span class="font-bold text-xs text-[#002855] dark:text-[#E5A823] uppercase">🏛️ Vision Statement</span>
                <span class="text-[10px] font-mono px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 font-bold">${targetMvv.id}</span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">${targetMvv.vision}</p>
            </div>
            <div class="p-3.5 bg-white dark:bg-[#181D26] border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-xs">
              <div class="flex items-center justify-between">
                <span class="font-bold text-xs text-[#002855] dark:text-[#E5A823] uppercase">🚀 Mission Statement</span>
                <span class="text-[10px] font-mono px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 font-bold">${targetMvv.id}</span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">${targetMvv.mission}</p>
            </div>
            <div class="p-3.5 bg-white dark:bg-[#181D26] border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-xs">
              <div class="flex items-center justify-between">
                <span class="font-bold text-xs text-[#002855] dark:text-[#E5A823] uppercase">🎯 Core Values &amp; Goal</span>
                <span class="text-[10px] font-mono px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 font-bold">${targetMvv.id}</span>
              </div>
              <p class="text-xs font-bold text-amber-600 dark:text-amber-400">${targetMvv.values}</p>
              <p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed pt-1 border-t border-slate-100 dark:border-slate-800">${targetMvv.soeGoal}</p>
            </div>
          `;
        }
      }
    }

    function renderInstGaTable(targetId) {
      const registry = window.GA_VERSION_REGISTRY || [];
      const id = targetId || currentInspectedInstGaId || 'GA-2024';
      currentInspectedInstGaId = id;
      const targetGa = registry.find(g => g.id === id) || registry[0];

      if (id === 'GA-2024') {
        const livePillars = getPillarsData();
        if (livePillars && Array.isArray(livePillars.gas)) {
          targetGa.count = livePillars.gas.length;
          targetGa.items = livePillars.gas.map(g => ({
            code: g.code,
            domain: g.category || 'Institutional',
            title: g.title,
            desc: g.desc
          }));
        }
      }

      const tbody = document.getElementById('instGaTableBody');
      if (tbody) {
        tbody.innerHTML = registry.map(ga => {
          const isInspecting = (ga.id === id);
          return `
            <tr onclick="renderInstGaTable('${ga.id}')" class="cursor-pointer transition border-b border-slate-100 dark:border-slate-800 ${
              isInspecting ? 'bg-blue-500/10 dark:bg-blue-500/15 font-bold' : 'hover:bg-slate-50 dark:hover:bg-slate-900/50'
            }">
              <td class="py-2.5 px-3 border-r border-slate-200 dark:border-slate-800 font-mono text-xs text-blue-700 dark:text-blue-400">
                <div class="flex items-center gap-1.5">
                  ${isInspecting ? '<span class="text-blue-500">👉</span>' : ''}
                  <span>${ga.id}</span>
                </div>
              </td>
              <td class="py-2.5 px-3 border-r border-slate-200 dark:border-slate-800">
                <div class="text-xs font-bold text-slate-800 dark:text-slate-100">${ga.name}</div>
              </td>
              <td class="py-2.5 px-2 text-center border-r border-slate-200 dark:border-slate-800 font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                ${ga.count} Attributes
              </td>
              <td class="py-2.5 px-2 text-center border-r border-slate-200 dark:border-slate-800">
                <span class="px-2 py-0.5 font-mono text-[10px] font-bold border ${ga.statusClass}">
                  ${ga.status}
                </span>
              </td>
              <td class="py-2.5 px-3 border-r border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-600 dark:text-slate-400">
                ${ga.effective}
              </td>
              <td class="py-2.5 px-3 border-r border-slate-200 dark:border-slate-800 text-xs text-slate-500">
                ${ga.notes}
              </td>
              <td class="py-2.5 px-3 text-center" onclick="event.stopPropagation()">
                <button type="button" onclick="renderInstGaTable('${ga.id}')" class="px-2 py-1 bg-blue-600 text-white font-bold text-[10px] hover:bg-blue-700 cursor-pointer">
                  🔍 Inspect
                </button>
              </td>
            </tr>
          `;
        }).join('');
      }

      if (targetGa) {
        const titleEl = document.getElementById('instGaInspectTitle');
        if (titleEl) titleEl.textContent = `${targetGa.name} (${targetGa.id})`;
        const badgeEl = document.getElementById('instGaInspectBadge');
        if (badgeEl) badgeEl.textContent = `${targetGa.count} Attributes • ${targetGa.status}`;

        const cardsContainer = document.getElementById('instGaCardsContainer');
        if (cardsContainer) {
          cardsContainer.innerHTML = (targetGa.items || []).map(item => `
            <div class="p-3 bg-white dark:bg-[#181D26] border border-slate-200 dark:border-slate-800 space-y-1 shadow-2xs">
              <div class="flex items-center justify-between gap-1.5">
                <span class="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 font-mono font-bold text-xs border border-blue-200 dark:border-blue-700">${item.code}</span>
                <span class="text-[10px] font-mono px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600">${item.domain}</span>
              </div>
              <div class="font-bold text-slate-800 dark:text-slate-100 text-xs">${item.title}</div>
              <p class="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mt-1">${item.desc}</p>
            </div>
          `).join('');
        }
      }
    }

    window.toggleInstMvvInlineEditor = toggleInstMvvInlineEditor;
    window.saveInstMvvInline = saveInstMvvInline;
    window.toggleInstGaInlineEditor = toggleInstGaInlineEditor;
    window.saveInstGaInline = saveInstGaInline;
    window.resetPillarsToDefault = resetPillarsToDefault;
    window.openInstitutionalVersioningModal = openInstitutionalVersioningModal;
    window.closeInstitutionalVersioningModal = closeInstitutionalVersioningModal;
    window.switchInstVhTab = switchInstVhTab;
    window.renderInstMvvTable = renderInstMvvTable;
    window.renderInstGaTable = renderInstGaTable;

    let addModalTempBanner = null;
    let addModalTempLogo = null;

    function openAddSchoolModal() {
      const modal = document.getElementById('modalAddSchool');
      addModalTempBanner = null;
      addModalTempLogo = null;

      const prefixEl = document.getElementById('newSchoolBannerTitle');
      const nameEl = document.getElementById('newSchoolName');
      const dirEl = document.getElementById('newSchoolDirector');
      const colEl = document.getElementById('newSchoolColor');
      const pickEl = document.getElementById('newSchoolColorPicker');
      const iconEl = document.getElementById('newSchoolIcon');
      const progsEl = document.getElementById('newSchoolPrograms');
      const previewBanner = document.getElementById('newSchoolBannerPreview');
      const previewLogo = document.getElementById('newSchoolLogoPreview');
      const bannerFile = document.getElementById('newSchoolBannerFile');
      const logoFile = document.getElementById('newSchoolLogoFile');

      const defaultColors = ['#00A4EF', '#10B981', '#F59E0B', '#A855F7', '#EF4444', '#6366F1'];
      const nextColor = defaultColors[ACADEMIC_SCHOOLS_DATA.length % defaultColors.length];

      if (prefixEl) prefixEl.value = 'SCHOOL OF';
      if (nameEl) nameEl.value = '';
      if (dirEl) dirEl.value = '';
      if (colEl) colEl.value = nextColor;
      if (pickEl) pickEl.value = nextColor;
      if (iconEl) iconEl.value = '🏛️';
      if (progsEl) progsEl.value = '';
      if (previewBanner) previewBanner.innerText = 'Geometric vector pattern';
      if (previewLogo) previewLogo.innerText = 'APC circular vector seal';
      if (bannerFile) bannerFile.value = '';
      if (logoFile) logoFile.value = '';

      if (modal) modal.classList.remove('hidden');
      if (window.spaRouter && typeof window.spaRouter.onModalOpen === 'function') {
        window.spaRouter.onModalOpen('add-school');
      }
    }

    function closeAddSchoolModal() {
      const modal = document.getElementById('modalAddSchool');
      if (modal) modal.classList.add('hidden');
      addModalTempBanner = null;
      addModalTempLogo = null;
      if (window.spaRouter && typeof window.spaRouter.onModalClose === 'function') {
        window.spaRouter.onModalClose('add-school');
      }
    }

    function handleAddSchoolImageUpload(event, type) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        const dataUrl = e.target.result;
        if (type === 'banner') {
          addModalTempBanner = dataUrl;
          const preview = document.getElementById('newSchoolBannerPreview');
          if (preview) preview.innerText = file.name + ' (Loaded)';
        } else if (type === 'logo') {
          addModalTempLogo = dataUrl;
          const preview = document.getElementById('newSchoolLogoPreview');
          if (preview) preview.innerText = file.name + ' (Loaded)';
        }
        if (typeof showToast === 'function') {
          showToast(`Photo for ${type} loaded! Click 'Provision School' to apply.`);
        }
      };
      reader.readAsDataURL(file);
    }

    function clearAddSchoolImage(type) {
      if (type === 'banner') {
        addModalTempBanner = null;
        const preview = document.getElementById('newSchoolBannerPreview');
        if (preview) preview.innerText = 'Geometric vector pattern';
        const fileInput = document.getElementById('newSchoolBannerFile');
        if (fileInput) fileInput.value = '';
      } else if (type === 'logo') {
        addModalTempLogo = null;
        const preview = document.getElementById('newSchoolLogoPreview');
        if (preview) preview.innerText = 'APC circular vector seal';
        const fileInput = document.getElementById('newSchoolLogoFile');
        if (fileInput) fileInput.value = '';
      }
    }

    function submitAddSchool(e) {
      if (e && e.preventDefault) e.preventDefault();
      const bannerTitle = (document.getElementById('newSchoolBannerTitle')?.value || 'SCHOOL OF').trim().toUpperCase();
      const name = (document.getElementById('newSchoolName')?.value || '').trim();
      const director = (document.getElementById('newSchoolDirector')?.value || '').trim();
      const customColor = (document.getElementById('newSchoolColor')?.value || '').trim();
      const customIcon = (document.getElementById('newSchoolIcon')?.value || '🏛️').trim();
      const progStr = (document.getElementById('newSchoolPrograms')?.value || '').trim();
      const rawPrograms = progStr.split(/[\n,]+/).map(s => s.trim()).filter(Boolean);

      if (!name || !director) return;

      const cleanSchoolName = name.replace(/^SCHOOL\s+OF\s+/i, '').toUpperCase();
      const newSchoolId = 'school_' + cleanSchoolName.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/^_+|_+$/g, '');

      // Parse programs into { code, name, archived: false }
      const parsedPrograms = rawPrograms.map(p => {
        if (p.includes(':')) {
          const parts = p.split(':');
          const code = parts[0].trim().toUpperCase();
          const pName = parts.slice(1).join(':').trim();
          return { code: code || 'PROG', name: pName || code, archived: false };
        }
        const match = p.match(/\(([A-Za-z0-9]+)\)/);
        const code = match ? match[1].toUpperCase() : (p.length <= 6 ? p.toUpperCase() : p.split(' ').map(w => w[0]).join('').substring(0, 5).toUpperCase());
        return { code: code, name: p, archived: false };
      });

      const colors = ['#00A4EF', '#10B981', '#6366F1', '#EC4899', '#8B5CF6', '#14B8A6', '#F97316'];
      const assignedColor = customColor || colors[ACADEMIC_SCHOOLS_DATA.length % colors.length];

      const newSchool = {
        id: newSchoolId,
        name: cleanSchoolName,
        bannerTitle: bannerTitle || 'SCHOOL OF',
        bannerImage: addModalTempBanner || null,
        logoImage: addModalTempLogo || null,
        director: director,
        color: assignedColor,
        badgeBorder: `border-[${assignedColor}]`,
        badgeBg: `from-[${assignedColor}] to-[#1E2430]`,
        bannerGrad: 'from-[#10151E] via-[#1a2332] to-[#0d121a]',
        bannerIcon: customIcon || '🏛️',
        archived: false,
        programs: parsedPrograms.length ? parsedPrograms : [{ code: 'PROG', name: 'Provisioned Degree Program', archived: false }],
        primaryAction: `showToast('${cleanSchoolName} Programs provisioned under Institutional Governance.')`,
        primaryActionText: `Inspect ${cleanSchoolName} →`,
        secondaryAction: `showToast('${cleanSchoolName} Executive Overview active.')`,
        secondaryActionText: 'Executive Overview'
      };

      ACADEMIC_SCHOOLS_DATA.push(newSchool);

      try {
        localStorage.setItem('academic_schools_data_custom', JSON.stringify(ACADEMIC_SCHOOLS_DATA));
      } catch (err) {
        console.warn('LocalStorage save failed:', err);
      }

      if (typeof appendAuditLog === 'function') {
        const fullSchoolName = `${newSchool.bannerTitle} ${newSchool.name}`;
        appendAuditLog('SCHOOL_PROVISION', fullSchoolName, `Provisioned ${fullSchoolName} under Executive Director ${director}`);
      }

      closeAddSchoolModal();
      renderSchoolCards();
      renderSidebarSchools();

      if (typeof showToast === 'function') {
        showToast(`Academic School "${cleanSchoolName}" successfully provisioned with Executive Director ${director}!`);
      }
    }

    // =========================================================================
    // PROGRAM MANAGEMENT (ADD, EDIT & DELETE DEGREE PROGRAMS + EXCEL INGESTION)
    // =========================================================================
    let addProgTempBanner = null;
    let addProgTempExcelCourses = null;
    let addProgTempExcelFilename = null;

    function handleAddProgramBannerUpload(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(e) {
        addProgTempBanner = e.target.result;
        const preview = document.getElementById('addProgBannerPreview');
        if (preview) preview.innerText = file.name + ' (Loaded)';
        if (typeof showToast === 'function') {
          showToast('Program banner image loaded!');
        }
      };
      reader.readAsDataURL(file);
    }

    function clearAddProgramBanner() {
      addProgTempBanner = null;
      const preview = document.getElementById('addProgBannerPreview');
      if (preview) preview.innerText = 'Default: Geometric vector circuit theme';
      const input = document.getElementById('addProgBannerFile');
      if (input) input.value = '';
    }

    function parseExcelFileToCurriculumCourses(file, callback) {
      const reader = new FileReader();
      reader.onload = function(e) {
        try {
          let rows = [];
          let hasMergedCells = false;
          let mergeRanges = [];
          let mergeCount = 0;

          if (typeof XLSX !== 'undefined') {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];

            // 1. Transactional check for prohibited merged cells (Engr. Peruda Tabular Import Policy)
            if (worksheet && worksheet['!merges'] && worksheet['!merges'].length > 0) {
              hasMergedCells = true;
              mergeCount = worksheet['!merges'].length;
              mergeRanges = worksheet['!merges'].slice(0, 5).map(m => XLSX.utils.encode_range(m));
            }

            rows = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });
          } else {
            const text = new TextDecoder().decode(e.target.result);
            rows = text.split(/\r\n|\n|\r/).filter(l => l.trim().length > 0).map(l => l.split('\t').length > 1 ? l.split('\t') : l.split(','));
          }

          if (!rows || rows.length < 2) {
            const emptyList = [];
            emptyList.hasMergedCells = hasMergedCells;
            emptyList.mergeRanges = mergeRanges;
            emptyList.mergeCount = mergeCount;
            emptyList.missingColumns = ['Course Code', 'Course Title'];
            emptyList.excessColumns = [];
            emptyList.totalErrors = 1;
            emptyList.filename = file.name;
            if (typeof callback === 'function') callback(emptyList, file.name);
            return;
          }

          // Locate header row containing CODE and TITLE
          let headerIdx = 0;
          for (let r = 0; r < Math.min(rows.length, 15); r++) {
            const candidate = (rows[r] || []).map(c => String(c || '').trim().toUpperCase());
            if (candidate.includes('CODE') || candidate.includes('COURSE CODE') || candidate.includes('SUBJECT CODE')) {
              headerIdx = r;
              break;
            }
          }

          const headerRow = (rows[headerIdx] || []).map(h => String(h || '').trim().toUpperCase());
          const findCol = (names) => headerRow.findIndex(h => names.includes(h));

          const codeCol = findCol(['CODE', 'COURSE CODE', 'SUBJECT CODE']);
          const titleCol = findCol(['TITLE', 'COURSE TITLE', 'DESCRIPTIVE TITLE', 'COURSE NAME']);
          const unitsCol = findCol(['UNITS', 'CREDIT UNITS', 'CREDITS']);
          const lecCol = findCol(['LEC', 'LECTURE', 'LEC HRS']);
          const labCol = findCol(['LAB', 'LABORATORY', 'LAB HRS']);
          const yearCol = findCol(['YEAR', 'YEAR LEVEL', 'YR']);
          const termCol = findCol(['TERM', 'TRIMESTER', 'SEMESTER']);
          const groupCol = findCol(['GROUP', 'CATEGORY', 'CLASSIFICATION']);
          const prereqCol = findCol(['PREREQUISITES', 'PREREQUISITE', 'PRE-REQUISITE']);
          const descCol = findCol(['DESCRIPTION', 'COURSE DESCRIPTION']);

          // Check column coverage
          const missingColumns = [];
          if (codeCol === -1) missingColumns.push('Course Code (CODE)');
          if (titleCol === -1) missingColumns.push('Descriptive Title (TITLE)');

          const standardHeaderNames = ['CODE', 'COURSE CODE', 'SUBJECT CODE', 'TITLE', 'COURSE TITLE', 'DESCRIPTIVE TITLE', 'COURSE NAME', 'UNITS', 'CREDIT UNITS', 'CREDITS', 'LEC', 'LECTURE', 'LEC HRS', 'LAB', 'LABORATORY', 'LAB HRS', 'YEAR', 'YEAR LEVEL', 'YR', 'TERM', 'TRIMESTER', 'SEMESTER', 'GROUP', 'CATEGORY', 'CLASSIFICATION', 'PREREQUISITES', 'PREREQUISITE', 'PRE-REQUISITE', 'DESCRIPTION', 'COURSE DESCRIPTION', 'NO', 'ITEM'];
          const excessColumns = headerRow.filter(h => h && !standardHeaderNames.includes(h) && !h.startsWith('SO_'));

          const importedCourses = [];
          const seenCodes = {};
          let totalErrors = hasMergedCells ? 1 : 0;

          for (let i = headerIdx + 1; i < rows.length; i++) {
            const cols = rows[i] || [];
            const rawCode = String(cols[codeCol !== -1 ? codeCol : 0] || '').trim().toUpperCase();
            const rawTitle = String(cols[titleCol !== -1 ? titleCol : 1] || '').trim();
            
            // Skip pure empty rows or sum rows
            if (!rawCode && !rawTitle) continue;
            if (rawCode === 'TOTAL' || rawCode === 'GRAND TOTAL' || rawCode === 'CODE') continue;

            const rowErrors = [];

            // Duplicate course code check
            if (!rawCode) {
              rowErrors.push('Missing course code');
            } else if (seenCodes[rawCode]) {
              rowErrors.push(`Duplicate course code "${rawCode}" (already defined at Row ${seenCodes[rawCode]})`);
            } else {
              seenCodes[rawCode] = i + 1;
            }

            // Title check
            if (!rawTitle) {
              rowErrors.push('Missing course title');
            }

            // Units check
            const rawUnits = parseFloat(cols[unitsCol]);
            let units = isNaN(rawUnits) ? 3.0 : rawUnits;
            if (isNaN(rawUnits) || units <= 0) {
              rowErrors.push(`Invalid credit units (${cols[unitsCol] || 'empty'})`);
            }

            // Year and term checks
            const rawYear = parseInt(cols[yearCol], 10);
            let year = isNaN(rawYear) ? 1 : rawYear;
            if (year < 1 || year > 5) {
              rowErrors.push(`Year level ${year} out of range (1–5)`);
            }

            const rawTerm = parseInt(cols[termCol], 10);
            let term = isNaN(rawTerm) ? 1 : rawTerm;
            if (term < 1 || term > 3) {
              rowErrors.push(`Term ${term} out of range (1–3)`);
            }

            const lec = parseInt(cols[lecCol], 10) || (units >= 1 ? Math.min(units, 3) : 1);
            const lab = parseInt(cols[labCol], 10) || 0;
            const group = String(cols[groupCol] || 'Professional Core').trim() || 'Professional Core';
            const rawPrereq = String(cols[prereqCol] || '');
            const prereqs = rawPrereq.split(/[,;]/).map(s => s.trim().toUpperCase()).filter(s => s && s !== 'NONE' && s !== '-');
            const desc = String(cols[descCol] || '').trim();

            const sos = [];
            const soLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
            soLetters.forEach(l => {
              const colIdx = headerRow.indexOf(`SO_${l}`);
              if (colIdx !== -1 && cols[colIdx]) {
                const v = String(cols[colIdx]).trim().toUpperCase();
                sos.push(['I','E','D'].includes(v) ? v : '-');
              } else {
                sos.push('-');
              }
            });

            if (rowErrors.length > 0) {
              totalErrors += rowErrors.length;
            }

            importedCourses.push({
              stgId: 'stg_' + (i + 1) + '_' + Math.random().toString(36).substring(2, 6),
              rowNumber: i + 1,
              row: importedCourses.length + 1,
              year,
              term,
              col: (year - 1) * 3 + term,
              code: rawCode,
              title: rawTitle,
              units,
              lec,
              lab,
              group,
              prereqs,
              sos,
              desc,
              errors: rowErrors
            });
          }

          // Attach transactional staging metadata
          importedCourses.hasMergedCells = hasMergedCells;
          importedCourses.mergeRanges = mergeRanges;
          importedCourses.mergeCount = mergeCount;
          importedCourses.missingColumns = missingColumns;
          importedCourses.excessColumns = excessColumns;
          importedCourses.totalErrors = totalErrors;
          importedCourses.filename = file.name;

          callback(importedCourses, file.name);
        } catch (err) {
          alert('Failed to read Excel (.xlsx) file: ' + err.message);
        }
      };
      reader.readAsArrayBuffer(file);
    }
    window.parseExcelFileToCurriculumCourses = parseExcelFileToCurriculumCourses;

    function handleAddProgramExcelUpload(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      parseExcelFileToCurriculumCourses(file, (courses, filename) => {
        addProgTempExcelCourses = courses;
        addProgTempExcelFilename = filename;
        const preview = document.getElementById('addProgExcelPreview');
        if (preview) {
          preview.innerText = courses.length > 0
            ? `✓ ${filename} (${courses.length} courses parsed from Excel)`
            : `✓ ${filename} (Excel workbook attached)`;
          preview.className = 'text-[10px] text-emerald-600 dark:text-emerald-400 font-bold truncate';
        }
        if (typeof showToast === 'function') {
          showToast(`Excel workbook "${filename}" loaded (${courses.length || 74} courses ready).`);
        }
      });
    }

    function clearAddProgramExcel() {
      addProgTempExcelCourses = null;
      addProgTempExcelFilename = null;
      const preview = document.getElementById('addProgExcelPreview');
      if (preview) {
        preview.innerText = 'Default: Initialize with standard APC CPE2026 Curriculum Excel baseline';
        preview.className = 'text-[10px] text-slate-500 dark:text-slate-400 truncate';
      }
      const input = document.getElementById('newProgExcelFile');
      if (input) input.value = '';
    }

    function handleEditProgramExcelUpload(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      const progCode = document.getElementById('editProgOriginalCode')?.value || 'BSCpE';
      parseExcelFileToCurriculumCourses(file, (courses, filename) => {
        const preview = document.getElementById('editProgExcelPreview');
        if (preview) {
          preview.innerText = `✓ ${filename} (${courses.length || 74} courses loaded)`;
          preview.className = 'text-[10px] text-emerald-600 dark:text-emerald-400 font-bold truncate';
        }
        if (courses.length > 0) {
          try {
            localStorage.setItem(`program_curriculum_excel_${progCode}`, JSON.stringify(courses));
          } catch (e) {}
          if (typeof ALL_COURSES !== 'undefined' && Array.isArray(ALL_COURSES)) {
            ALL_COURSES.splice(0, ALL_COURSES.length, ...courses);
            if (typeof sheetSaveAllChanges === 'function') sheetSaveAllChanges();
          }
        }
        if (typeof showToast === 'function') {
          showToast(`Imported Excel workbook "${filename}" for ${progCode}!`);
        }
      });
    }

    function openAddProgramModal(schoolId = null) {
      const modal = document.getElementById('modalAddProgram');
      const select = document.getElementById('newProgSchool');
      if (!modal) return;

      addProgTempBanner = null;
      addProgTempExcelCourses = null;
      addProgTempExcelFilename = null;

      let selectedSchoolObj = null;
      if (select) {
        select.innerHTML = '';
        ACADEMIC_SCHOOLS_DATA.forEach(s => {
          const opt = document.createElement('option');
          opt.value = s.id;
          opt.innerText = `${s.bannerTitle || 'SCHOOL OF'} ${s.name}`;
          if (schoolId && (s.id.toLowerCase() === String(schoolId).toLowerCase())) {
            opt.selected = true;
            selectedSchoolObj = s;
          }
          select.appendChild(opt);
        });
        if (!selectedSchoolObj && ACADEMIC_SCHOOLS_DATA.length > 0) {
          selectedSchoolObj = ACADEMIC_SCHOOLS_DATA[0];
        }
      }

      const defaultColor = (selectedSchoolObj && selectedSchoolObj.color) ? selectedSchoolObj.color : '#FF6B00';
      const codeInput = document.getElementById('newProgCode');
      const prefixInput = document.getElementById('newProgPrefix');
      const nameInput = document.getElementById('newProgName');
      const dirInput = document.getElementById('newProgDirector');
      const colInput = document.getElementById('newProgColor');
      const pickInput = document.getElementById('newProgColorPicker');
      const iconInput = document.getElementById('newProgIcon');
      const startYrInput = document.getElementById('newProgStartYear');
      const endYrInput = document.getElementById('newProgEndYear');

      if (codeInput) codeInput.value = '';
      if (prefixInput) prefixInput.value = 'Bachelor of Science in';
      if (nameInput) nameInput.value = '';
      if (dirInput) dirInput.value = 'Program Director';
      if (colInput) colInput.value = defaultColor;
      if (pickInput) pickInput.value = defaultColor;
      if (iconInput) iconInput.value = '💻';
      if (startYrInput) startYrInput.value = '2026';
      if (endYrInput) endYrInput.value = '2030';

      clearAddProgramBanner();
      clearAddProgramExcel();

      modal.classList.remove('hidden');
      if (window.spaRouter && typeof window.spaRouter.onModalOpen === 'function') {
        window.spaRouter.onModalOpen('add-program', { school: schoolId });
      }
    }

    function closeAddProgramModal() {
      const modal = document.getElementById('modalAddProgram');
      if (modal) modal.classList.add('hidden');
      addProgTempBanner = null;
      addProgTempExcelCourses = null;
      addProgTempExcelFilename = null;
      if (window.spaRouter && typeof window.spaRouter.onModalClose === 'function') {
        window.spaRouter.onModalClose('add-program');
      }
    }

    function submitAddProgram(e) {
      if (e && e.preventDefault) e.preventDefault();
      const schoolId = document.getElementById('newProgSchool')?.value;
      const code = document.getElementById('newProgCode')?.value.trim().toUpperCase();
      const prefix = (document.getElementById('newProgPrefix')?.value || '').trim();
      let name = document.getElementById('newProgName')?.value.trim();
      const director = (document.getElementById('newProgDirector')?.value || 'Program Director').trim() || 'Program Director';
      const color = (document.getElementById('newProgColor')?.value || '#FF6B00').trim();
      const icon = (document.getElementById('newProgIcon')?.value || '💻').trim();
      const startYear = document.getElementById('newProgStartYear')?.value || '2026';
      const endYear = document.getElementById('newProgEndYear')?.value || '2030';

      if (!schoolId || !code || !name) return;

      if (prefix && !name.toLowerCase().startsWith(prefix.toLowerCase()) && !name.toLowerCase().startsWith('bachelor') && !name.toLowerCase().startsWith('master')) {
        name = `${prefix} ${name}`;
      }

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

      const newProgObj = {
        code,
        name,
        director,
        color,
        icon,
        bannerImage: addProgTempBanner || null,
        cohort: `${startYear}-${endYear}`,
        excelFile: addProgTempExcelFilename || 'APC_Curriculum_Template_2026.xlsx',
        archived: false
      };

      school.programs.push(newProgObj);

      if (addProgTempExcelCourses && addProgTempExcelCourses.length > 0) {
        try {
          localStorage.setItem(`program_curriculum_excel_${code}`, JSON.stringify(addProgTempExcelCourses));
        } catch (err) {}
      }

      try {
        const customMap = JSON.parse(localStorage.getItem('program_directors_custom') || '{}');
        customMap[code] = director;
        localStorage.setItem('program_directors_custom', JSON.stringify(customMap));
      } catch (e) {}

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
        showToast(`Added ${code}: ${name} (${startYear}–${endYear} Excel curriculum) to ${school.name}!`);
      }
    }

    // Program Director management helpers
    function getProgramDirector(progCode) {
      if (!progCode) return 'Program Director';
      try {
        const customMap = JSON.parse(localStorage.getItem('program_directors_custom') || '{}');
        if (customMap && customMap[progCode]) {
          const val = String(customMap[progCode]).trim();
          if (!val.toLowerCase().includes('peruda') && !val.toLowerCase().includes('sergio') && val !== '') {
            return val;
          }
        }
      } catch (e) {}

      for (const s of ACADEMIC_SCHOOLS_DATA) {
        if (Array.isArray(s.programs)) {
          const p = s.programs.find(item => (typeof item === 'object' ? item.code : item) === progCode);
          if (p && typeof p === 'object' && p.director) {
            const dir = String(p.director).trim();
            if (!dir.toLowerCase().includes('peruda') && !dir.toLowerCase().includes('sergio') && dir !== '') {
              return dir;
            }
          }
        }
      }

      const defaultDirectors = {
        'BSCpE': 'Program Director',
        'BSCE': 'Program Director',
        'BSECE': 'Program Director',
        'BSCS': 'Program Director',
        'BSIT': 'Program Director',
        'BMMA': 'Program Director',
        'BSPsych': 'Program Director',
        'BSBA': 'Program Director',
        'BSA': 'Program Director',
        'BSArch': 'Program Director'
      };
      return defaultDirectors[progCode] || 'Program Director';
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
      const colVal = (typeof foundProg === 'object' && foundProg && foundProg.color) ? foundProg.color : (foundSchool?.color || '#FF6B00');
      const iconVal = (typeof foundProg === 'object' && foundProg && foundProg.icon) ? foundProg.icon : '💻';

      const titleEl = document.getElementById('editProgramModalTitle');
      const origCodeEl = document.getElementById('editProgOriginalCode');
      const codeEl = document.getElementById('editProgCode');
      const nameEl = document.getElementById('editProgName');
      const dirEl = document.getElementById('editProgDirector');
      const colEl = document.getElementById('editProgColor');
      const pickEl = document.getElementById('editProgColorPicker');
      const iconEl = document.getElementById('editProgIcon');
      const excelPrev = document.getElementById('editProgExcelPreview');

      if (titleEl) titleEl.innerText = `Edit ${progCode} Program & Director`;
      if (origCodeEl) origCodeEl.value = codeVal;
      if (codeEl) codeEl.value = codeVal;
      if (nameEl) nameEl.value = nameVal;
      if (dirEl) dirEl.value = dirVal;
      if (colEl) colEl.value = colVal;
      if (pickEl) pickEl.value = colVal;
      if (iconEl) iconEl.value = iconVal;
      if (excelPrev) {
        excelPrev.innerText = 'Upload a Microsoft Excel (.xlsx, .xls) file to update program courses';
        excelPrev.className = 'text-[10px] text-slate-500 dark:text-slate-400 truncate';
      }

      const modal = document.getElementById('modalEditProgram');
      if (modal) modal.classList.remove('hidden');
      if (window.spaRouter && typeof window.spaRouter.onModalOpen === 'function') {
        window.spaRouter.onModalOpen('edit-program', { prog: progCode });
      }
    }

    function closeEditProgramModal() {
      const modal = document.getElementById('modalEditProgram');
      if (modal) modal.classList.add('hidden');
      if (window.spaRouter && typeof window.spaRouter.onModalClose === 'function') {
        window.spaRouter.onModalClose('edit-program');
      }
    }

    function submitEditProgram(e) {
      if (e && e.preventDefault) e.preventDefault();
      const origCode = document.getElementById('editProgOriginalCode')?.value.trim();
      const newName = document.getElementById('editProgName')?.value.trim();
      const newDirector = document.getElementById('editProgDirector')?.value.trim();
      const newColor = (document.getElementById('editProgColor')?.value || '#FF6B00').trim();
      const newIcon = (document.getElementById('editProgIcon')?.value || '💻').trim();

      if (!origCode || !newName || !newDirector) return;

      // Update in ACADEMIC_SCHOOLS_DATA
      let targetSchool = null;
      for (const s of ACADEMIC_SCHOOLS_DATA) {
        if (Array.isArray(s.programs)) {
          const idx = s.programs.findIndex(item => (typeof item === 'object' ? item.code : item) === origCode);
          if (idx !== -1) {
            const existing = typeof s.programs[idx] === 'object' ? s.programs[idx] : {};
            s.programs[idx] = {
              ...existing,
              code: origCode,
              name: newName,
              director: newDirector,
              color: newColor,
              icon: newIcon,
              archived: false
            };
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
        showToast(`Updated ${origCode}: ${newName} (${newDirector})!`);
      }
    }

    window.handleAddProgramBannerUpload = handleAddProgramBannerUpload;
    window.clearAddProgramBanner = clearAddProgramBanner;
    window.handleAddProgramExcelUpload = handleAddProgramExcelUpload;
    window.clearAddProgramExcel = clearAddProgramExcel;
    window.handleEditProgramExcelUpload = handleEditProgramExcelUpload;

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

                <!-- Versioning History Button (Under Management Homepage) -->
                <button type="button" id="nav-versioning-history" onclick="navigateView('versioning-history')"
                  class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px] group">
                  <span class="text-amber-400">📜</span>
                  <span class="font-semibold text-slate-300 group-hover:text-amber-300">Versioning History</span>
                </button>

                <!-- By Year Section Header -->
                <div class="px-2 pt-1 pb-0.5 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  By Academic Year
                </div>

                <!-- CPE2027 Curriculum (Draft / Unlocked) -->
                <div>
                  <button type="button" onclick="setSidebarYear('2027'); toggleFolderAccordion('cpeY2027Cont', 'cpeY2027Chev')"
                    class="w-full flex items-center justify-between px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left group">
                    <span class="flex items-center space-x-2 truncate">
                      <svg id="cpeY2027Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                      </svg>
                      <svg class="w-3 h-3 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span class="truncate text-[11px] font-semibold text-slate-200">CPE2027 Curriculum</span>
                    </span>
                  </button>
                  <div id="cpeY2027Cont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-3">
                    <button type="button" onclick="setSidebarYear('2027'); navigateView('obe')"
                      class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px] group">
                      <span class="text-amber-400">🗺️</span>
                      <span class="truncate">OBE Map (2027 Unlocked)</span>
                    </button>
                    <button type="button" onclick="setSidebarYear('2027'); openFlowchartForYear(1)"
                      class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px] group">
                      <span class="text-sky-400">📊</span>
                      <span class="truncate">Flowchart (2027 Draft)</span>
                    </button>
                    <button type="button" onclick="setSidebarYear('2027'); openSpreadsheetForYear(1)"
                      class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left text-[11px] group">
                      <span class="text-emerald-400">📑</span>
                      <span class="truncate">Spreadsheet (2027 Draft)</span>
                    </button>
                  </div>
                </div>

                <!-- CPE2026 Curriculum -->
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
                      <span class="truncate text-[11px] font-semibold text-slate-200">CPE2026 Curriculum</span>
                    </span>
                  </button>
                  <div id="cpeY1Cont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-3">
                    <!-- 1st Year Direct Tools -->
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

                    <!-- 1st Year Official Documents Accordion -->
                    <div>
                      <button type="button" onclick="toggleFolderAccordion('cpeOffDocsY1Cont', 'cpeOffDocsY1Chev')"
                        class="w-full flex items-center justify-between px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/60 transition cursor-pointer text-left group">
                        <span class="flex items-center space-x-1.5 truncate">
                          <svg id="cpeOffDocsY1Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                          </svg>
                          <svg class="w-3 h-3 text-amber-400/80 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/>
                          </svg>
                          <span class="truncate text-[11px]">Official Documents</span>
                        </span>
                      </button>
                      <div id="cpeOffDocsY1Cont" class="hidden mt-0.5 space-y-0.5 pl-2 border-l border-slate-700/60 ml-2">
                        <button type="button" onclick="setSidebarYear(1); selectProgram('BSCpE', 'registrar', 1)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Official Flowchart</span></button>
                        <button type="button" onclick="setSidebarYear(1); selectProgram('BSCpE', 'registrar', 2)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Prospectus</span></button>
                        <button type="button" onclick="setSidebarYear(1); selectProgram('BSCpE', 'registrar', 3)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Course Catalog</span></button>
                        <button type="button" onclick="setSidebarYear(1); selectProgram('BSCpE', 'registrar', 4)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Program of Study</span></button>
                        <button type="button" onclick="setSidebarYear(1); selectProgram('BSCpE', 'registrar', 5)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>OBE Map</span></button>
                        <button type="button" onclick="setSidebarYear(1); selectProgram('BSCpE', 'registrar', 6)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Comparative Summary</span></button>
                        <button type="button" onclick="setSidebarYear(1); selectProgram('BSCpE', 'registrar', 7)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Summary of Units</span></button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- CPE2025 Curriculum -->
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
                      <span class="truncate text-[11px] font-semibold text-slate-200">CPE2025 Curriculum</span>
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

                    <!-- 2nd Year Official Documents Accordion -->
                    <div>
                      <button type="button" onclick="toggleFolderAccordion('cpeOffDocsY2Cont', 'cpeOffDocsY2Chev')"
                        class="w-full flex items-center justify-between px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/60 transition cursor-pointer text-left group">
                        <span class="flex items-center space-x-1.5 truncate">
                          <svg id="cpeOffDocsY2Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                          </svg>
                          <svg class="w-3 h-3 text-amber-400/80 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/>
                          </svg>
                          <span class="truncate text-[11px]">Official Documents</span>
                        </span>
                      </button>
                      <div id="cpeOffDocsY2Cont" class="hidden mt-0.5 space-y-0.5 pl-2 border-l border-slate-700/60 ml-2">
                        <button type="button" onclick="setSidebarYear(2); selectProgram('BSCpE', 'registrar', 1)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Official Flowchart</span></button>
                        <button type="button" onclick="setSidebarYear(2); selectProgram('BSCpE', 'registrar', 2)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Prospectus</span></button>
                        <button type="button" onclick="setSidebarYear(2); selectProgram('BSCpE', 'registrar', 3)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Course Catalog</span></button>
                        <button type="button" onclick="setSidebarYear(2); selectProgram('BSCpE', 'registrar', 4)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Program of Study</span></button>
                        <button type="button" onclick="setSidebarYear(2); selectProgram('BSCpE', 'registrar', 5)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>OBE Map</span></button>
                        <button type="button" onclick="setSidebarYear(2); selectProgram('BSCpE', 'registrar', 6)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Comparative Summary</span></button>
                        <button type="button" onclick="setSidebarYear(2); selectProgram('BSCpE', 'registrar', 7)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Summary of Units</span></button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- CPE2024 Curriculum -->
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
                      <span class="truncate text-[11px] font-semibold text-slate-200">CPE2024 Curriculum</span>
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

                    <!-- 3rd Year Official Documents Accordion -->
                    <div>
                      <button type="button" onclick="toggleFolderAccordion('cpeOffDocsY3Cont', 'cpeOffDocsY3Chev')"
                        class="w-full flex items-center justify-between px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/60 transition cursor-pointer text-left group">
                        <span class="flex items-center space-x-1.5 truncate">
                          <svg id="cpeOffDocsY3Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                          </svg>
                          <svg class="w-3 h-3 text-amber-400/80 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/>
                          </svg>
                          <span class="truncate text-[11px]">Official Documents</span>
                        </span>
                      </button>
                      <div id="cpeOffDocsY3Cont" class="hidden mt-0.5 space-y-0.5 pl-2 border-l border-slate-700/60 ml-2">
                        <button type="button" onclick="setSidebarYear(3); selectProgram('BSCpE', 'registrar', 1)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Official Flowchart</span></button>
                        <button type="button" onclick="setSidebarYear(3); selectProgram('BSCpE', 'registrar', 2)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Prospectus</span></button>
                        <button type="button" onclick="setSidebarYear(3); selectProgram('BSCpE', 'registrar', 3)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Course Catalog</span></button>
                        <button type="button" onclick="setSidebarYear(3); selectProgram('BSCpE', 'registrar', 4)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Program of Study</span></button>
                        <button type="button" onclick="setSidebarYear(3); selectProgram('BSCpE', 'registrar', 5)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>OBE Map</span></button>
                        <button type="button" onclick="setSidebarYear(3); selectProgram('BSCpE', 'registrar', 6)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Comparative Summary</span></button>
                        <button type="button" onclick="setSidebarYear(3); selectProgram('BSCpE', 'registrar', 7)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Summary of Units</span></button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- CPE2023 Curriculum -->
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
                      <span class="truncate text-[11px] font-semibold text-slate-200">CPE2023 Curriculum</span>
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

                    <!-- 4th Year Official Documents Accordion -->
                    <div>
                      <button type="button" onclick="toggleFolderAccordion('cpeOffDocsY4Cont', 'cpeOffDocsY4Chev')"
                        class="w-full flex items-center justify-between px-2 py-1 text-slate-400 hover:text-white hover:bg-slate-800/60 transition cursor-pointer text-left group">
                        <span class="flex items-center space-x-1.5 truncate">
                          <svg id="cpeOffDocsY4Chev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                          </svg>
                          <svg class="w-3 h-3 text-amber-400/80 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/>
                          </svg>
                          <span class="truncate text-[11px]">Official Documents</span>
                        </span>
                      </button>
                      <div id="cpeOffDocsY4Cont" class="hidden mt-0.5 space-y-0.5 pl-2 border-l border-slate-700/60 ml-2">
                        <button type="button" onclick="setSidebarYear(4); selectProgram('BSCpE', 'registrar', 1)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Official Flowchart</span></button>
                        <button type="button" onclick="setSidebarYear(4); selectProgram('BSCpE', 'registrar', 2)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Prospectus</span></button>
                        <button type="button" onclick="setSidebarYear(4); selectProgram('BSCpE', 'registrar', 3)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Course Catalog</span></button>
                        <button type="button" onclick="setSidebarYear(4); selectProgram('BSCpE', 'registrar', 4)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Program of Study</span></button>
                        <button type="button" onclick="setSidebarYear(4); selectProgram('BSCpE', 'registrar', 5)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>OBE Map</span></button>
                        <button type="button" onclick="setSidebarYear(4); selectProgram('BSCpE', 'registrar', 6)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Comparative Summary</span></button>
                        <button type="button" onclick="setSidebarYear(4); selectProgram('BSCpE', 'registrar', 7)" class="w-full flex items-center space-x-1.5 px-1.5 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800/60 text-left truncate text-[10px]"><span>Summary of Units</span></button>
                      </div>
                    </div>
                  </div>
                </div>



                <!-- Curriculum Tools & Reports Section -->
                <div class="mt-2 pt-1.5 border-t border-slate-700/60 space-y-0.5">
                  <div class="px-2 py-0.5 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                    Curriculum Tools &amp; Reports
                  </div>

                  <!-- 5. Delegations -->
                  <button type="button" id="nav-cpe-delegation" onclick="selectProgram('BSCpE', 'delegation')"
                    class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition cursor-pointer text-left group">
                    <svg class="w-3.5 h-3.5 text-purple-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    <span class="truncate text-[11px]">Delegations</span>
                  </button>

                  <!-- 6. System Audit Trail -->
                  <button type="button" id="nav-cpe-audit" onclick="selectProgram('BSCpE', 'audit')"
                    class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition cursor-pointer text-left group">
                    <svg class="w-3.5 h-3.5 text-rose-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clip-rule="evenodd" />
                    </svg>
                    <span class="truncate text-[11px]">Audit Trail</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- 2. Syllabus Management Folder (Empty) -->
            <div id="node-cpe-syllabus">
              <button type="button" onclick="toggleFolderAccordion('cpeSyllabusCont', 'cpeSyllabusChev'); navigateView('syllabus')"
                class="w-full flex items-center justify-between px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left group">
                <span class="flex items-center space-x-2 truncate">
                  <svg id="cpeSyllabusChev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                  </svg>
                  <svg class="w-3.5 h-3.5 text-amber-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                  </svg>
                  <span class="truncate text-[11px] font-semibold text-slate-200 group-hover:text-white">Syllabus Management</span>
                </span>
              </button>
              <div id="cpeSyllabusCont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-3"></div>
            </div>

            <!-- 3. Course Management Folder (Empty) -->
            <div id="node-cpe-course">
              <button type="button" onclick="toggleFolderAccordion('cpeCourseCont', 'cpeCourseChev'); navigateView('course')"
                class="w-full flex items-center justify-between px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800/40 transition cursor-pointer text-left group">
                <span class="flex items-center space-x-2 truncate">
                  <svg id="cpeCourseChev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                  </svg>
                  <svg class="w-3.5 h-3.5 text-amber-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                  </svg>
                  <span class="truncate text-[11px] font-semibold text-slate-200 group-hover:text-white">Course Management</span>
                </span>
              </button>
              <div id="cpeCourseCont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-3"></div>
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
                      <span class="truncate text-[11px] font-bold text-amber-300">CPE2026</span>
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

            <!-- Syllabus Management Folder (Empty) -->
            <div id="node-${progId}-syllabus">
              <button type="button" onclick="toggleFolderAccordion('${progId}SyllabusCont', '${progId}SyllabusChev'); navigateView('syllabus')"
                class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition cursor-pointer text-left group">
                <svg id="${progId}SyllabusChev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                </svg>
                <svg class="w-3.5 h-3.5 text-amber-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                </svg>
                <span class="truncate text-[11px] font-semibold text-slate-200 group-hover:text-white">Syllabus Management</span>
              </button>
              <div id="${progId}SyllabusCont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-3"></div>
            </div>

            <!-- Course Management Folder (Empty) -->
            <div id="node-${progId}-course">
              <button type="button" onclick="toggleFolderAccordion('${progId}CourseCont', '${progId}CourseChev'); navigateView('course')"
                class="w-full flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition cursor-pointer text-left group">
                <svg id="${progId}CourseChev" class="w-2.5 h-2.5 text-slate-500 group-hover:text-slate-300 transition-transform duration-150 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                </svg>
                <svg class="w-3.5 h-3.5 text-amber-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                </svg>
                <span class="truncate text-[11px] font-semibold text-slate-200 group-hover:text-white">Course Management</span>
              </button>
              <div id="${progId}CourseCont" class="hidden mt-0.5 space-y-0.5 pl-2.5 border-l border-slate-700/60 ml-3"></div>
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
    window.handleAddSchoolImageUpload = handleAddSchoolImageUpload;
    window.clearAddSchoolImage = clearAddSchoolImage;
    window.submitAddSchool = submitAddSchool;
    window.openEditSchoolModal = openEditSchoolModal;
    window.closeEditSchoolModal = closeEditSchoolModal;
    window.showPillarModal = showPillarModal;
    window.closePillarModal = closePillarModal;
    window.openEditPillarsModal = openEditPillarsModal;
    window.closeEditPillarsModal = closeEditPillarsModal;
    window.saveCustomPillars = saveCustomPillars;
    window.resetPillarsToDefault = resetPillarsToDefault;
    window.openInstitutionalVersioningModal = openInstitutionalVersioningModal;
    window.closeInstitutionalVersioningModal = closeInstitutionalVersioningModal;
    window.switchInstVhTab = switchInstVhTab;
    window.renderInstMvvTable = renderInstMvvTable;
    window.renderInstGaTable = renderInstGaTable;
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
        if (version === 'v7_restore_cpe_card') {
          const savedCustom = localStorage.getItem('academic_schools_data_custom');
          if (savedCustom) {
            const parsed = JSON.parse(savedCustom);
            if (Array.isArray(parsed) && parsed.length) {
              ACADEMIC_SCHOOLS_DATA.splice(0, ACADEMIC_SCHOOLS_DATA.length, ...parsed);
            }
          }
        } else {
          // Initialize fresh version with only active development school (SoE BSCpE) and purge legacy personal names
          localStorage.setItem('schools_data_version', 'v7_restore_cpe_card');
          try {
            const customMap = JSON.parse(localStorage.getItem('program_directors_custom') || '{}');
            for (const k in customMap) {
              if (customMap[k] && (customMap[k].toLowerCase().includes('peruda') || customMap[k].toLowerCase().includes('sergio'))) {
                delete customMap[k];
              }
            }
            localStorage.setItem('program_directors_custom', JSON.stringify(customMap));
          } catch (e) {}
          localStorage.setItem('academic_schools_data_custom', JSON.stringify(ACADEMIC_SCHOOLS_DATA));
        }
      } catch (err) {
        console.warn('Failed to parse saved custom schools:', err);
      }

      // Safeguard: Ensure School of Engineering always has BSCpE active and official SOE logo
      const soeSchool = ACADEMIC_SCHOOLS_DATA.find(s => s.id === 'soe');
      if (soeSchool) {
        if (!soeSchool.logoImage || soeSchool.logoImage.includes('card_emblem_ref')) {
          soeSchool.logoImage = 'assets/exd_soe_logo_crop.png';
        }
        if (!Array.isArray(soeSchool.programs) || !soeSchool.programs.length || !soeSchool.programs.some(p => (typeof p === 'object' ? p.code : p) === 'BSCpE')) {
          soeSchool.programs = [{ code: 'BSCpE', name: 'Bachelor of Science in Computer Engineering', archived: false }];
        }
      } else {
        ACADEMIC_SCHOOLS_DATA.unshift({
          id: 'soe',
          name: 'ENGINEERING',
          bannerTitle: 'SCHOOL OF',
          color: '#FF6B00',
          badgeBorder: 'border-[#FF6B00]',
          badgeBg: 'from-[#FF6B00] to-[#E55A00]',
          bannerGrad: 'from-[#16120e] via-[#2a1a12] to-[#0f0b08]',
          bannerIcon: '⚙️',
          logoImage: 'assets/exd_soe_logo_crop.png',
          director: 'SOE Executive Director',
          archived: false,
          programs: [
            { code: 'BSCpE', name: 'Bachelor of Science in Computer Engineering', archived: false }
          ]
        });
      }

      renderSchoolCards();
      renderSidebarSchools();
    });

    // Global ESC key listener to dismiss open dialogs and modals
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' || e.key === 'Esc') {
        if (typeof closePillarModal === 'function') closePillarModal();
        if (typeof closeInstitutionalVersioningModal === 'function') closeInstitutionalVersioningModal();
        if (typeof closeCategoryManagerModal === 'function') closeCategoryManagerModal();
        if (typeof closeCourseEditModal === 'function') closeCourseEditModal();
        if (typeof closeBatchModal === 'function') closeBatchModal();
        if (typeof closeCycleSimulatorModal === 'function') closeCycleSimulatorModal();
        if (typeof closeCreateCurriculumModal === 'function') closeCreateCurriculumModal();
        if (typeof closeAssignTaskModal === 'function') closeAssignTaskModal();
        if (typeof closeAddFacultyModal === 'function') closeAddFacultyModal();
        if (typeof closeAddProgramModal === 'function') closeAddProgramModal();
        if (typeof closeEditProgramModal === 'function') closeEditProgramModal();
        if (typeof closeAddSchoolModal === 'function') closeAddSchoolModal();
        if (typeof closeEditSchoolModal === 'function') closeEditSchoolModal();
        if (typeof closeDiffModal === 'function') closeDiffModal();
        if (typeof closeRevisionNotesModal === 'function') closeRevisionNotesModal();
      }
    });
