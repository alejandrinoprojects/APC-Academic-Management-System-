/**
 * APC Academic Architecture Suite - Authentic Registrar Documents 1 to 7
 */
window.REGISTRAR_DOCS = {
  1: `
      
      <!-- 1. OFFICIAL TOP HEADER -->
      <div class="flex items-center justify-between pb-1 mb-1 border-b border-black text-slate-900">
        <!-- Left: Crest + Title -->
        <div class="flex items-center space-x-2">
          <img src="assets/apc_seal.png" class="w-7 h-7 rounded-none object-contain bg-white p-0.5 border border-[#E5A823] shadow-xs shrink-0" alt="Asia Pacific College Seal">
          <div class="leading-none">
            <div class="font-black text-[10.5px] uppercase tracking-wider">ASIA PACIFIC COLLEGE</div>
            <div class="font-bold text-[8.5px] mt-0.5">Bachelor of Sience In Computer Engineering</div>
            <div class="text-[7px] font-mono text-slate-600 mt-0.5">Curriculum Flowchart 2026:1 2026-CPE-A (CPE261/262)</div>
          </div>
        </div>

        <!-- Center: Track Info -->
        <div class="text-center leading-tight">
          <div class="italic text-[8px] font-medium text-slate-800">
            Software Development/Machine Learning/Robotics Technology Track
          </div>
          <div class="text-[7px] text-slate-600 font-mono mt-0.5">
            Target Release Date: July 2026
          </div>
        </div>

        <!-- Right: Student Information Boxes -->
        <div class="text-[7px] flex flex-col items-end gap-0.5 leading-none">
          <div class="flex items-center gap-1">
            <span class="text-slate-600">Student Number:</span>
            <div id="printStudentIdDisplay" class="flex gap-0.5 font-mono">
              <span class="w-3.5 h-3.5 border border-black bg-white flex items-center justify-center font-bold text-[7.5px]">2</span>
              <span class="w-3.5 h-3.5 border border-black bg-white flex items-center justify-center font-bold text-[7.5px]">0</span>
              <span class="w-3.5 h-3.5 border border-black bg-white flex items-center justify-center font-bold text-[7.5px]">2</span>
              <span class="w-3.5 h-3.5 border border-black bg-white flex items-center justify-center font-bold text-[7.5px]">6</span>
              <span class="w-1.5 h-3.5 flex items-center justify-center font-bold text-slate-500">-</span>
              <span class="w-3.5 h-3.5 border border-black bg-white flex items-center justify-center font-bold text-[7.5px]">1</span>
              <span class="w-3.5 h-3.5 border border-black bg-white flex items-center justify-center font-bold text-[7.5px]">0</span>
              <span class="w-3.5 h-3.5 border border-black bg-white flex items-center justify-center font-bold text-[7.5px]">0</span>
              <span class="w-3.5 h-3.5 border border-black bg-white flex items-center justify-center font-bold text-[7.5px]">0</span>
              <span class="w-3.5 h-3.5 border border-black bg-white flex items-center justify-center font-bold text-[7.5px]">1</span>
            </div>
          </div>
          <div class="flex items-center gap-2 mt-0.5 text-slate-600">
            <span>Last name: <u id="printLastNameDisp" class="text-black font-bold min-w-[50px] inline-block">____________</u></span>
            <span>First Name: <u id="printFirstNameDisp" class="text-black font-bold min-w-[50px] inline-block">____________</u></span>
            <span>M.I. <u class="text-black font-bold min-w-[15px] inline-block">___</u></span>
          </div>
          <div class="mt-0.5 text-slate-600">
            Student Name: <u id="printStudentNameDisplay" class="text-black font-bold min-w-[140px] inline-block">___________________________________</u>
          </div>
        </div>
      </div>

      <!-- 2. OFFICIAL 12-TERM VECTOR FLOWCHART WITH AUTHENTIC BUS ARROWS & JUNCTION DOTS -->
      <div class="relative overflow-visible my-1 mx-auto" style="max-width: 990px;">
        <svg id="officialRegistrarFlowchartSvg" xmlns="http://www.w3.org/2000/svg" viewBox="48 108 684 156" class="w-full h-auto max-w-[990px] mx-auto select-none overflow-visible" style="display: block; margin: 0 auto; background: white;">
<g id="svgFlowHeaders"><line x1="53.80" y1="110.0" x2="209.86" y2="110.0" stroke="#000000" stroke-width="1.2" /><text x="131.83" y="115.0" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">First Year</text><line x1="226.06" y1="110.0" x2="382.12" y2="110.0" stroke="#000000" stroke-width="1.2" /><text x="304.09" y="115.0" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">Second Year</text><line x1="398.32" y1="110.0" x2="554.38" y2="110.0" stroke="#000000" stroke-width="1.2" /><text x="476.35" y="115.0" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">Third Year</text><line x1="570.58" y1="110.0" x2="726.64" y2="110.0" stroke="#000000" stroke-width="1.2" /><text x="648.61" y="115.0" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">Fourth Year</text><text x="74.41" y="120.5" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="normal" fill="#333333" text-anchor="middle">1st Term</text><text x="131.83" y="120.5" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="normal" fill="#333333" text-anchor="middle">2nd Term</text><text x="189.25" y="120.5" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="normal" fill="#333333" text-anchor="middle">3rd Term</text><text x="246.67" y="120.5" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="normal" fill="#333333" text-anchor="middle">1st Term</text><text x="304.09" y="120.5" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="normal" fill="#333333" text-anchor="middle">2nd Term</text><text x="361.51" y="120.5" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="normal" fill="#333333" text-anchor="middle">3rd Term</text><text x="418.93" y="120.5" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="normal" fill="#333333" text-anchor="middle">1st Term</text><text x="476.35" y="120.5" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="normal" fill="#333333" text-anchor="middle">2nd Term</text><text x="533.77" y="120.5" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="normal" fill="#333333" text-anchor="middle">3rd Term</text><text x="591.19" y="120.5" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="normal" fill="#333333" text-anchor="middle">1st Term</text><text x="648.61" y="120.5" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="normal" fill="#333333" text-anchor="middle">2nd Term</text><text x="706.03" y="120.5" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="normal" fill="#333333" text-anchor="middle">2nd Term</text></g>
<g id="svgFlowCards">
    <g class="flow-card-node cursor-pointer select-none" data-code="CALCONE" onclick="openFlowchartDrawer('CALCONE')">
      <rect x="53.80" y="124.45" width="41.22" height="15.40" fill="#f9be8f" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="74.41" y="129.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">CALCONE</text><text x="56.30" y="138.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="ENGCHEM/ENGCHLB" onclick="openFlowchartDrawer('ENGCHEM/ENGCHLB')">
      <rect x="53.80" y="143.65" width="41.22" height="15.40" fill="#92cddc" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="74.41" y="148.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">ENGCHEM/ENGCHLB</text><text x="56.30" y="154.15" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text><text x="56.30" y="157.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">1</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="CPEDISC" onclick="openFlowchartDrawer('CPEDISC')">
      <rect x="53.80" y="162.85" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="74.41" y="168.15" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">CPEDISC</text><text x="56.30" y="176.45" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">1</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="PROGLOD" onclick="openFlowchartDrawer('PROGLOD')">
      <rect x="53.80" y="182.05" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="74.41" y="187.35" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">PROGLOD</text><text x="56.30" y="195.65" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">4</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="GETHICS" onclick="openFlowchartDrawer('GETHICS')">
      <rect x="53.80" y="201.25" width="41.22" height="15.40" fill="#76923b" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="74.41" y="206.55" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff" text-anchor="middle">GETHICS</text><text x="56.30" y="214.85" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="PEDUONE" onclick="openFlowchartDrawer('PEDUONE')">
      <rect x="53.80" y="220.45" width="41.22" height="15.40" fill="#ff0000" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="74.41" y="225.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff" text-anchor="middle">PEDUONE</text><text x="56.30" y="234.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff">2</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="NATSER 1" onclick="openFlowchartDrawer('NATSER 1')">
      <rect x="53.80" y="239.65" width="41.22" height="15.40" fill="#ffffff" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="74.41" y="244.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">NATSER 1</text><text x="56.30" y="253.25" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="CALCTWO" onclick="openFlowchartDrawer('CALCTWO')">
      <rect x="111.22" y="124.45" width="41.22" height="15.40" fill="#f9be8f" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="131.83" y="129.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">CALCTWO</text><text x="113.72" y="138.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="PHYENLC/PHYENLB" onclick="openFlowchartDrawer('PHYENLC/PHYENLB')">
      <rect x="111.22" y="143.65" width="41.22" height="15.40" fill="#92cddc" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="131.83" y="148.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">PHYENLC/PHYENLB</text><text x="113.72" y="154.15" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text><text x="113.72" y="157.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">1</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="OBJPROG" onclick="openFlowchartDrawer('OBJPROG')">
      <rect x="111.22" y="182.05" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="131.83" y="187.35" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">OBJPROG</text><text x="113.72" y="195.65" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">4</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="PHILHIS" onclick="openFlowchartDrawer('PHILHIS')">
      <rect x="111.22" y="201.25" width="41.22" height="15.40" fill="#76923b" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="131.83" y="206.55" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff" text-anchor="middle">PHILHIS</text><text x="113.72" y="214.85" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="PEDUTWO" onclick="openFlowchartDrawer('PEDUTWO')">
      <rect x="111.22" y="220.45" width="41.22" height="15.40" fill="#ff0000" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="131.83" y="225.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff" text-anchor="middle">PEDUTWO</text><text x="113.72" y="234.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff">2</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="NATSER 2" onclick="openFlowchartDrawer('NATSER 2')">
      <rect x="111.22" y="239.65" width="41.22" height="15.40" fill="#ffffff" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="131.83" y="244.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">NATSER 2</text><text x="113.72" y="253.25" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="ENGDATA" onclick="openFlowchartDrawer('ENGDATA')">
      <rect x="168.64" y="124.45" width="41.22" height="15.40" fill="#f9be8f" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="189.25" y="129.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">ENGDATA</text><text x="171.14" y="138.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="ELECIRK / CRKTLAB" onclick="openFlowchartDrawer('ELECIRK / CRKTLAB')">
      <rect x="168.64" y="143.65" width="41.22" height="15.40" fill="#da9593" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="189.25" y="148.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">ELECIRK / CRKTLAB</text><text x="171.14" y="154.15" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text><text x="171.14" y="157.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">1</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="ECONOMC" onclick="openFlowchartDrawer('ECONOMC')">
      <rect x="168.64" y="162.85" width="41.22" height="15.40" fill="#b09fc6" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="189.25" y="168.15" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">ECONOMC</text><text x="171.14" y="176.45" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="DATSTRC" onclick="openFlowchartDrawer('DATSTRC')">
      <rect x="168.64" y="182.05" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="189.25" y="187.35" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">DATSTRC</text><text x="171.14" y="195.65" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">4</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="PEDUTRI" onclick="openFlowchartDrawer('PEDUTRI')">
      <rect x="168.64" y="220.45" width="41.22" height="15.40" fill="#ff0000" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="189.25" y="225.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff" text-anchor="middle">PEDUTRI</text><text x="171.14" y="234.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff">2</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="DISCMAT" onclick="openFlowchartDrawer('DISCMAT')">
      <rect x="168.64" y="239.65" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="189.25" y="244.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">DISCMAT</text><text x="171.14" y="253.25" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="DIEQUAT" onclick="openFlowchartDrawer('DIEQUAT')">
      <rect x="226.06" y="124.45" width="41.22" height="15.40" fill="#f9be8f" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="246.67" y="129.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">DIEQUAT</text><text x="228.56" y="138.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="ELEXCKT / ELEXLAB" onclick="openFlowchartDrawer('ELEXCKT / ELEXLAB')">
      <rect x="226.06" y="143.65" width="41.22" height="15.40" fill="#da9593" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="246.67" y="148.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">ELEXCKT / ELEXLAB</text><text x="228.56" y="154.15" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text><text x="228.56" y="157.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">1</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="USERINX" onclick="openFlowchartDrawer('USERINX')">
      <rect x="226.06" y="162.85" width="41.22" height="15.40" fill="#ebf0de" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="246.67" y="168.15" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">USERINX</text><text x="228.56" y="176.45" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">2</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="OPRSYST" onclick="openFlowchartDrawer('OPRSYST')">
      <rect x="226.06" y="182.05" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="246.67" y="187.35" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">OPRSYST</text><text x="228.56" y="195.65" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="MOBCAPP" onclick="openFlowchartDrawer('MOBCAPP')">
      <rect x="226.06" y="201.25" width="41.22" height="15.40" fill="#ebf0de" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="246.67" y="206.55" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">MOBCAPP</text><text x="228.56" y="214.85" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="PEDUFOR" onclick="openFlowchartDrawer('PEDUFOR')">
      <rect x="226.06" y="220.45" width="41.22" height="15.40" fill="#ff0000" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="246.67" y="225.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff" text-anchor="middle">PEDUFOR</text><text x="228.56" y="234.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff">2</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="RIZLIFE" onclick="openFlowchartDrawer('RIZLIFE')">
      <rect x="226.06" y="239.65" width="41.22" height="15.40" fill="#205867" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="246.67" y="244.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff" text-anchor="middle">RIZLIFE</text><text x="228.56" y="253.25" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="NUMERCL" onclick="openFlowchartDrawer('NUMERCL')">
      <rect x="283.48" y="124.45" width="41.22" height="15.40" fill="#b7dee8" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="304.09" y="129.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">NUMERCL</text><text x="285.98" y="138.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="LOGCDES / LOGICLB" onclick="openFlowchartDrawer('LOGCDES / LOGICLB')">
      <rect x="283.48" y="143.65" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="304.09" y="148.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">LOGCDES / LOGICLB</text><text x="285.98" y="154.15" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text><text x="285.98" y="157.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">1</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="PURPCOM" onclick="openFlowchartDrawer('PURPCOM')">
      <rect x="283.48" y="162.85" width="41.22" height="15.40" fill="#76923b" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="304.09" y="168.15" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff" text-anchor="middle">PURPCOM</text><text x="285.98" y="176.45" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="MATWORL" onclick="openFlowchartDrawer('MATWORL')">
      <rect x="283.48" y="182.05" width="41.22" height="15.40" fill="#76923b" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="304.09" y="187.35" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff" text-anchor="middle">MATWORL</text><text x="285.98" y="195.65" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="DATMGTS" onclick="openFlowchartDrawer('DATMGTS')">
      <rect x="283.48" y="201.25" width="41.22" height="15.40" fill="#ebf0de" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="304.09" y="206.55" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">DATMGTS</text><text x="285.98" y="214.85" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="SCITECS" onclick="openFlowchartDrawer('SCITECS')">
      <rect x="283.48" y="220.45" width="41.22" height="15.40" fill="#76923b" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="304.09" y="225.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff" text-anchor="middle">SCITECS</text><text x="285.98" y="234.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="ENGCADD" onclick="openFlowchartDrawer('ENGCADD')">
      <rect x="283.48" y="239.65" width="41.22" height="15.40" fill="#b09fc6" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="304.09" y="244.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">ENGCADD</text><text x="285.98" y="253.25" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">1</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="FDCONTS" onclick="openFlowchartDrawer('FDCONTS')">
      <rect x="340.90" y="124.45" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="361.51" y="129.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">FDCONTS</text><text x="343.40" y="138.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="CPEDRAF" onclick="openFlowchartDrawer('CPEDRAF')">
      <rect x="340.90" y="143.65" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="361.51" y="148.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">CPEDRAF</text><text x="343.40" y="157.25" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">2</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="MIXSIGS" onclick="openFlowchartDrawer('MIXSIGS')">
      <rect x="340.90" y="162.85" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="361.51" y="168.15" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">MIXSIGS</text><text x="343.40" y="176.45" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="EMICROS / MCROLAB" onclick="openFlowchartDrawer('EMICROS / MCROLAB')">
      <rect x="340.90" y="182.05" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="361.51" y="187.35" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">EMICROS / MCROLAB</text><text x="343.40" y="192.55" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text><text x="343.40" y="196.15" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">1</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="SOFTDES / SOFTLAB" onclick="openFlowchartDrawer('SOFTDES / SOFTLAB')">
      <rect x="340.90" y="201.25" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="361.51" y="206.55" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">SOFTDES / SOFTLAB</text><text x="343.40" y="211.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text><text x="343.40" y="215.35" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">1</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="UNDSELF" onclick="openFlowchartDrawer('UNDSELF')">
      <rect x="340.90" y="220.45" width="41.22" height="15.40" fill="#76923b" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="361.51" y="225.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff" text-anchor="middle">UNDSELF</text><text x="343.40" y="234.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="ARTAPRE" onclick="openFlowchartDrawer('ARTAPRE')">
      <rect x="340.90" y="239.65" width="41.22" height="15.40" fill="#76923b" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="361.51" y="244.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff" text-anchor="middle">ARTAPRE</text><text x="343.40" y="253.25" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="DIGSPRO / DIGSLAB" onclick="openFlowchartDrawer('DIGSPRO / DIGSLAB')">
      <rect x="398.32" y="124.45" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="418.93" y="129.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">DIGSPRO / DIGSLAB</text><text x="400.82" y="134.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text><text x="400.82" y="138.55" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">1</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="DATCOMS" onclick="openFlowchartDrawer('DATCOMS')">
      <rect x="398.32" y="143.65" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="418.93" y="148.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">DATCOMS</text><text x="400.82" y="157.25" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="EMBEDDS / EMBEDLB" onclick="openFlowchartDrawer('EMBEDDS / EMBEDLB')">
      <rect x="398.32" y="162.85" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="418.93" y="168.15" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">EMBEDDS / EMBEDLB</text><text x="400.82" y="173.35" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text><text x="400.82" y="176.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">1</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="CPEMETS" onclick="openFlowchartDrawer('CPEMETS')">
      <rect x="398.32" y="182.05" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="418.93" y="187.35" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">CPEMETS</text><text x="400.82" y="195.65" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">2</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="INTOHDL" onclick="openFlowchartDrawer('INTOHDL')">
      <rect x="398.32" y="201.25" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="418.93" y="206.55" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">INTOHDL</text><text x="400.82" y="214.85" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">2</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="EXCOMP1" onclick="openFlowchartDrawer('EXCOMP1')">
      <rect x="398.32" y="220.45" width="41.22" height="15.40" fill="#e6b8b7" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="418.93" y="225.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">EXCOMP1</text><text x="400.82" y="234.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="CPECGS1/M1/R1" onclick="openFlowchartDrawer('CPECGS1/M1/R1')">
      <rect x="398.32" y="239.65" width="41.22" height="15.40" fill="#938953" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="418.93" y="244.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff" text-anchor="middle">CPECGS1/M1/R1</text><text x="400.82" y="250.15" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff">3</text><text x="400.82" y="253.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff">1</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="HEALTHS" onclick="openFlowchartDrawer('HEALTHS')">
      <rect x="455.74" y="124.45" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="476.35" y="129.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">HEALTHS</text><text x="458.24" y="138.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="COMNETS / NETSLAB" onclick="openFlowchartDrawer('COMNETS / NETSLAB')">
      <rect x="455.74" y="143.65" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="476.35" y="148.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">COMNETS / NETSLAB</text><text x="458.24" y="154.15" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text><text x="458.24" y="157.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">1</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="COMAROR / ARCORLAB" onclick="openFlowchartDrawer('COMAROR / ARCORLAB')">
      <rect x="455.74" y="162.85" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="476.35" y="168.15" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">COMAROR / ARCORLAB</text><text x="458.24" y="173.35" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text><text x="458.24" y="176.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">1</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="CPEDES1" onclick="openFlowchartDrawer('CPEDES1')">
      <rect x="455.74" y="182.05" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="476.35" y="187.35" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">CPEDES1</text><text x="458.24" y="195.65" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">1</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="TECH101" onclick="openFlowchartDrawer('TECH101')">
      <rect x="455.74" y="201.25" width="41.22" height="15.40" fill="#b09fc6" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="476.35" y="206.55" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">TECH101</text><text x="458.24" y="214.85" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="EXCOMP2" onclick="openFlowchartDrawer('EXCOMP2')">
      <rect x="455.74" y="220.45" width="41.22" height="15.40" fill="#e6b8b7" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="476.35" y="225.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">EXCOMP2</text><text x="458.24" y="234.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="CPECGS2/M2/R2" onclick="openFlowchartDrawer('CPECGS2/M2/R2')">
      <rect x="455.74" y="239.65" width="41.22" height="15.40" fill="#938953" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="476.35" y="244.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff" text-anchor="middle">CPECGS2/M2/R2</text><text x="458.24" y="250.15" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff">3</text><text x="458.24" y="253.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff">1</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="SEMSTRP" onclick="openFlowchartDrawer('SEMSTRP')">
      <rect x="513.16" y="124.45" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="533.77" y="129.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">SEMSTRP</text><text x="515.66" y="138.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">1</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="CPELAWS" onclick="openFlowchartDrawer('CPELAWS')">
      <rect x="513.16" y="143.65" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="533.77" y="148.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">CPELAWS</text><text x="515.66" y="157.25" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">2</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="CPEDES2" onclick="openFlowchartDrawer('CPEDES2')">
      <rect x="513.16" y="162.85" width="41.22" height="15.40" fill="#b8cce3" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="533.77" y="168.15" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">CPEDES2</text><text x="515.66" y="176.45" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">2</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="EMERTEC" onclick="openFlowchartDrawer('EMERTEC')">
      <rect x="513.16" y="182.05" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="533.77" y="187.35" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">EMERTEC</text><text x="515.66" y="195.65" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="CONWORL" onclick="openFlowchartDrawer('CONWORL')">
      <rect x="513.16" y="201.25" width="41.22" height="15.40" fill="#9bba58" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="533.77" y="206.55" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">CONWORL</text><text x="515.66" y="214.85" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="PROFETH" onclick="openFlowchartDrawer('PROFETH')">
      <rect x="513.16" y="220.45" width="41.22" height="15.40" fill="#e6b8b7" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="533.77" y="225.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">PROFETH</text><text x="515.66" y="234.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">3</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="CPECGS3/M3/R3" onclick="openFlowchartDrawer('CPECGS3/M3/R3')">
      <rect x="513.16" y="239.65" width="41.22" height="15.40" fill="#938953" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="533.77" y="244.95" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff" text-anchor="middle">CPECGS3/M3/R3</text><text x="515.66" y="250.15" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff">3</text><text x="515.66" y="253.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#ffffff">1</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="INTERN1" onclick="openFlowchartDrawer('INTERN1')">
      <rect x="570.58" y="124.45" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="591.19" y="129.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">INTERN1</text><text x="573.08" y="138.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">6</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="INTERN1" onclick="openFlowchartDrawer('INTERN1')">
      <rect x="628.00" y="124.45" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="648.61" y="129.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">INTERN1</text><text x="630.50" y="138.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">6</text></g>
    <g class="flow-card-node cursor-pointer select-none" data-code="INTERN2" onclick="openFlowchartDrawer('INTERN2')">
      <rect x="685.42" y="124.45" width="41.22" height="15.40" fill="#c5d9f0" stroke="#000000" stroke-width="0.5" rx="0.5" /><text x="706.03" y="129.75" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000" text-anchor="middle">INTERN2</text><text x="687.92" y="138.05" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-weight="bold" fill="#000000">6</text></g></g>
<g id="svgFlowConnectors"><line x1="95.02" y1="132.15" x2="108.42" y2="132.15" stroke="#000000" stroke-width="0.50" /><path d="M 103.12 132.15 V 151.35 H 108.42" stroke="#000000" stroke-width="0.50" fill="none" /><path d="M 103.12 141.75 H 160.54 V 132.15 H 165.84" stroke="#000000" stroke-width="0.50" fill="none" /><path d="M 152.44 132.15 H 158.54 V 121.95 H 217.96 V 132.15 H 223.26" stroke="#000000" stroke-width="0.50" fill="none" /><path d="M 160.54 141.75 V 247.35 H 165.84" stroke="#000000" stroke-width="0.50" fill="none" /><line x1="267.28" y1="132.15" x2="280.68" y2="132.15" stroke="#000000" stroke-width="0.50" /><line x1="324.70" y1="132.15" x2="338.10" y2="132.15" stroke="#000000" stroke-width="0.50" /><line x1="382.12" y1="132.15" x2="395.52" y2="132.15" stroke="#000000" stroke-width="0.50" /><line x1="418.93" y1="139.85" x2="418.93" y2="140.85" stroke="#000000" stroke-width="0.50" /><line x1="611.80" y1="132.15" x2="625.20" y2="132.15" stroke="#000000" stroke-width="0.50" /><line x1="669.22" y1="132.15" x2="682.62" y2="132.15" stroke="#000000" stroke-width="0.50" /><line x1="152.44" y1="151.35" x2="165.84" y2="151.35" stroke="#000000" stroke-width="0.50" /><line x1="209.86" y1="151.35" x2="223.26" y2="151.35" stroke="#000000" stroke-width="0.50" /><path d="M 217.96 151.35 V 170.55 H 223.26" stroke="#000000" stroke-width="0.50" fill="none" /><line x1="267.28" y1="151.35" x2="280.68" y2="151.35" stroke="#000000" stroke-width="0.50" /><path d="M 275.38 151.35 V 141.75 H 329.80 V 134.65 H 338.10" stroke="#000000" stroke-width="0.50" fill="none" /><path d="M 277.38 151.35 V 160.95 H 329.80 V 170.55 H 338.10" stroke="#000000" stroke-width="0.50" fill="none" /><line x1="324.70" y1="151.35" x2="338.10" y2="151.35" stroke="#000000" stroke-width="0.50" /><path d="M 332.80 151.35 V 189.75 H 338.10" stroke="#000000" stroke-width="0.50" fill="none" /><path d="M 332.80 189.75 V 199.35 H 390.22 V 208.95 H 395.52" stroke="#000000" stroke-width="0.50" fill="none" /><line x1="439.54" y1="151.35" x2="452.94" y2="151.35" stroke="#000000" stroke-width="0.50" /><line x1="439.54" y1="170.55" x2="452.94" y2="170.55" stroke="#000000" stroke-width="0.50" /><path d="M 267.28 170.55 H 273.38 V 207.45 H 280.68" stroke="#000000" stroke-width="0.55" stroke-dasharray="3,2" fill="none" /><line x1="95.02" y1="189.75" x2="108.42" y2="189.75" stroke="#000000" stroke-width="0.50" /><line x1="152.44" y1="189.75" x2="165.84" y2="189.75" stroke="#000000" stroke-width="0.50" /><path d="M 160.54 189.75 V 197.35 H 217.96 V 208.95 H 223.26" stroke="#000000" stroke-width="0.55" stroke-dasharray="3,2" fill="none" /><line x1="209.86" y1="189.75" x2="223.26" y2="189.75" stroke="#000000" stroke-width="0.50" /><path d="M 219.96 189.75 V 200.35 H 277.38 V 210.45 H 280.68" stroke="#000000" stroke-width="0.50" fill="none" /><path d="M 382.12 189.75 H 387.22 V 170.55 H 395.52" stroke="#000000" stroke-width="0.50" fill="none" /><path d="M 382.12 151.35 H 392.22 V 189.75" stroke="#000000" stroke-width="0.50" fill="none" /><path d="M 382.12 208.95 H 392.22 V 189.75" stroke="#000000" stroke-width="0.50" fill="none" /><line x1="392.22" y1="189.75" x2="395.52" y2="189.75" stroke="#000000" stroke-width="0.50" /><line x1="439.54" y1="189.75" x2="452.94" y2="189.75" stroke="#000000" stroke-width="0.50" /><path d="M 496.96 189.75 H 505.06 V 170.55 H 510.36" stroke="#000000" stroke-width="0.50" fill="none" /><path d="M 554.38 170.55 H 562.48 V 132.15 H 567.78" stroke="#000000" stroke-width="0.50" fill="none" /><path d="M 324.70 170.55 H 331.80 V 207.45 H 338.10" stroke="#000000" stroke-width="0.55" stroke-dasharray="3,2" fill="none" /><line x1="324.70" y1="210.45" x2="338.10" y2="210.45" stroke="#000000" stroke-width="0.55" stroke-dasharray="3,2" /><line x1="95.02" y1="228.15" x2="108.42" y2="228.15" stroke="#000000" stroke-width="0.50" /><line x1="152.44" y1="228.15" x2="165.84" y2="228.15" stroke="#000000" stroke-width="0.50" /><line x1="209.86" y1="228.15" x2="223.26" y2="228.15" stroke="#000000" stroke-width="0.50" /><line x1="439.54" y1="228.15" x2="452.94" y2="228.15" stroke="#000000" stroke-width="0.50" /><line x1="95.02" y1="247.35" x2="108.42" y2="247.35" stroke="#000000" stroke-width="0.50" /><path d="M 324.70 247.35 H 333.80 V 151.35 H 338.10" stroke="#000000" stroke-width="0.50" fill="none" /><line x1="439.54" y1="247.35" x2="452.94" y2="247.35" stroke="#000000" stroke-width="0.55" stroke-dasharray="3,2" /><line x1="496.96" y1="247.35" x2="510.36" y2="247.35" stroke="#000000" stroke-width="0.55" stroke-dasharray="3,2" /><polygon points="108.42,130.75 111.22,132.15 108.42,133.55" fill="#000000" /><polygon points="108.42,149.95 111.22,151.35 108.42,152.75" fill="#000000" /><polygon points="165.84,130.75 168.64,132.15 165.84,133.55" fill="#000000" /><polygon points="223.26,130.75 226.06,132.15 223.26,133.55" fill="#000000" /><polygon points="165.84,245.95 168.64,247.35 165.84,248.75" fill="#000000" /><polygon points="280.68,130.75 283.48,132.15 280.68,133.55" fill="#000000" /><polygon points="338.10,130.75 340.90,132.15 338.10,133.55" fill="#000000" /><polygon points="395.52,130.75 398.32,132.15 395.52,133.55" fill="#000000" /><polygon points="417.53,140.85 418.93,143.65 420.33,140.85" fill="#000000" /><polygon points="625.20,130.75 628.00,132.15 625.20,133.55" fill="#000000" /><polygon points="682.62,130.75 685.42,132.15 682.62,133.55" fill="#000000" /><polygon points="165.84,149.95 168.64,151.35 165.84,152.75" fill="#000000" /><polygon points="223.26,149.95 226.06,151.35 223.26,152.75" fill="#000000" /><polygon points="223.26,169.15 226.06,170.55 223.26,171.95" fill="#000000" /><polygon points="280.68,149.95 283.48,151.35 280.68,152.75" fill="#000000" /><polygon points="338.10,133.25 340.90,134.65 338.10,136.05" fill="#000000" /><polygon points="338.10,169.15 340.90,170.55 338.10,171.95" fill="#000000" /><polygon points="338.10,149.95 340.90,151.35 338.10,152.75" fill="#000000" /><polygon points="338.10,188.35 340.90,189.75 338.10,191.15" fill="#000000" /><polygon points="395.52,207.55 398.32,208.95 395.52,210.35" fill="#000000" /><polygon points="452.94,149.95 455.74,151.35 452.94,152.75" fill="#000000" /><polygon points="452.94,169.15 455.74,170.55 452.94,171.95" fill="#000000" /><polygon points="280.68,206.05 283.48,207.45 280.68,208.85" fill="#000000" /><polygon points="108.42,188.35 111.22,189.75 108.42,191.15" fill="#000000" /><polygon points="165.84,188.35 168.64,189.75 165.84,191.15" fill="#000000" /><polygon points="223.26,207.55 226.06,208.95 223.26,210.35" fill="#000000" /><polygon points="223.26,188.35 226.06,189.75 223.26,191.15" fill="#000000" /><polygon points="280.68,209.05 283.48,210.45 280.68,211.85" fill="#000000" /><polygon points="395.52,169.15 398.32,170.55 395.52,171.95" fill="#000000" /><polygon points="395.52,188.35 398.32,189.75 395.52,191.15" fill="#000000" /><polygon points="452.94,188.35 455.74,189.75 452.94,191.15" fill="#000000" /><polygon points="510.36,169.15 513.16,170.55 510.36,171.95" fill="#000000" /><polygon points="567.78,130.75 570.58,132.15 567.78,133.55" fill="#000000" /><polygon points="338.10,206.05 340.90,207.45 338.10,208.85" fill="#000000" /><polygon points="338.10,209.05 340.90,210.45 338.10,211.85" fill="#000000" /><polygon points="108.42,226.75 111.22,228.15 108.42,229.55" fill="#000000" /><polygon points="165.84,226.75 168.64,228.15 165.84,229.55" fill="#000000" /><polygon points="223.26,226.75 226.06,228.15 223.26,229.55" fill="#000000" /><polygon points="452.94,226.75 455.74,228.15 452.94,229.55" fill="#000000" /><polygon points="108.42,245.95 111.22,247.35 108.42,248.75" fill="#000000" /><polygon points="338.10,149.95 340.90,151.35 338.10,152.75" fill="#000000" /><polygon points="452.94,245.95 455.74,247.35 452.94,248.75" fill="#000000" /><polygon points="510.36,245.95 513.16,247.35 510.36,248.75" fill="#000000" /><circle cx="103.12" cy="132.15" r="0.9" fill="#000000" /><circle cx="103.12" cy="141.75" r="0.9" fill="#000000" /><circle cx="160.54" cy="141.75" r="0.9" fill="#000000" /><circle cx="217.96" cy="151.35" r="0.9" fill="#000000" /><circle cx="275.38" cy="151.35" r="0.9" fill="#000000" /><circle cx="277.38" cy="151.35" r="0.9" fill="#000000" /><circle cx="332.80" cy="151.35" r="0.9" fill="#000000" /><circle cx="332.80" cy="189.75" r="0.9" fill="#000000" /><circle cx="160.54" cy="189.75" r="0.9" fill="#000000" /><circle cx="219.96" cy="189.75" r="0.9" fill="#000000" /><circle cx="392.22" cy="189.75" r="0.9" fill="#000000" /></g>
<text x="615" y="262" font-family="Arial, Helvetica, sans-serif" font-size="3.0" font-style="italic" fill="#555555" text-anchor="middle">Note: All academic subjects should be completed to take INTERN1</text>
</svg>
      </div>

      <!-- 3. UNIT TOTALS ROW (12 INDIVIDUAL BOXES) -->
      <div class="my-1 flex items-center justify-between text-[7px] leading-tight" style="width: 980px; margin: 3px auto;">
        <!-- Left Labels -->
        <div class="text-right pr-2 text-[6.5px] font-mono text-slate-700 leading-[12px] shrink-0" style="width: 75px;">
          <div>Lecture Units:</div>
          <div>Labororatory Units:</div>
          <div class="font-bold text-black">Total Units:</div>
        </div>
        <!-- 12 Term Boxes -->
        <div class="flex-1 grid grid-cols-12 gap-1 text-center">
          
    <div class="border border-black bg-white text-[7px] font-mono text-center leading-tight shrink-0" style="width: 54px; margin: 0 auto;">
      <div class="border-b border-black py-0.5">15</div>
      <div class="border-b border-black py-0.5">3</div>
      <div class="font-bold py-0.5">18</div>
    </div>
    <div class="border border-black bg-white text-[7px] font-mono text-center leading-tight shrink-0" style="width: 54px; margin: 0 auto;">
      <div class="border-b border-black py-0.5">14</div>
      <div class="border-b border-black py-0.5">3</div>
      <div class="font-bold py-0.5">17</div>
    </div>
    <div class="border border-black bg-white text-[7px] font-mono text-center leading-tight shrink-0" style="width: 54px; margin: 0 auto;">
      <div class="border-b border-black py-0.5">14</div>
      <div class="border-b border-black py-0.5">3</div>
      <div class="font-bold py-0.5">17</div>
    </div>
    <div class="border border-black bg-white text-[7px] font-mono text-center leading-tight shrink-0" style="width: 54px; margin: 0 auto;">
      <div class="border-b border-black py-0.5">14</div>
      <div class="border-b border-black py-0.5">3</div>
      <div class="font-bold py-0.5">17</div>
    </div>
    <div class="border border-black bg-white text-[7px] font-mono text-center leading-tight shrink-0" style="width: 54px; margin: 0 auto;">
      <div class="border-b border-black py-0.5">15</div>
      <div class="border-b border-black py-0.5">3</div>
      <div class="font-bold py-0.5">18</div>
    </div>
    <div class="border border-black bg-white text-[7px] font-mono text-center leading-tight shrink-0" style="width: 54px; margin: 0 auto;">
      <div class="border-b border-black py-0.5">18</div>
      <div class="border-b border-black py-0.5">3</div>
      <div class="font-bold py-0.5">21</div>
    </div>
    <div class="border border-black bg-white text-[7px] font-mono text-center leading-tight shrink-0" style="width: 54px; margin: 0 auto;">
      <div class="border-b border-black py-0.5">17</div>
      <div class="border-b border-black py-0.5">3</div>
      <div class="font-bold py-0.5">20</div>
    </div>
    <div class="border border-black bg-white text-[7px] font-mono text-center leading-tight shrink-0" style="width: 54px; margin: 0 auto;">
      <div class="border-b border-black py-0.5">13</div>
      <div class="border-b border-black py-0.5">3</div>
      <div class="font-bold py-0.5">16</div>
    </div>
    <div class="border border-black bg-white text-[7px] font-mono text-center leading-tight shrink-0" style="width: 54px; margin: 0 auto;">
      <div class="border-b border-black py-0.5">14</div>
      <div class="border-b border-black py-0.5">0</div>
      <div class="font-bold py-0.5">14</div>
    </div>
    <div class="border border-black bg-white text-[7px] font-mono text-center leading-tight shrink-0" style="width: 54px; margin: 0 auto;">
      <div class="border-b border-black py-0.5">0</div>
      <div class="border-b border-black py-0.5">6</div>
      <div class="font-bold py-0.5">6</div>
    </div>
    <div class="border border-black bg-white text-[7px] font-mono text-center leading-tight shrink-0" style="width: 54px; margin: 0 auto;">
      <div class="border-b border-black py-0.5">0</div>
      <div class="border-b border-black py-0.5">6</div>
      <div class="font-bold py-0.5">6</div>
    </div>
    <div class="border border-black bg-white text-[7px] font-mono text-center leading-tight shrink-0" style="width: 54px; margin: 0 auto;">
      <div class="border-b border-black py-0.5">0</div>
      <div class="border-b border-black py-0.5">6</div>
      <div class="font-bold py-0.5">6</div>
    </div>
        </div>
        <!-- Right Grand Totals -->
        <div class="text-right pl-3 text-[6.5px] font-mono leading-[12px] text-slate-700 shrink-0" style="width: 105px;">
          <div>Total (Lecture): <b class="text-black font-bold">139</b></div>
          <div>Total (Laboratory): <b class="text-black font-bold">45</b></div>
          <div>Total: <b class="text-black font-black">184</b></div>
        </div>
      </div>

      <!-- 4. THREE LOWER DOCUMENT PANELS (Electives, Legend, Unit Audit Table) -->
      <div class="flex items-start justify-between gap-2 pt-1 border-t border-black text-[7px]" style="width: 980px; margin: 0 auto;">
        
        <!-- Panel 1: List of Technical Electives Table -->
        <div class="border border-black p-1 text-[6.5px] bg-white" style="width: 470px;">
          <div class="text-center font-bold text-[7px] border-b border-black pb-0.5 mb-0.5">LIST OF TECHNICAL ELECTIVES:</div>
          <div class="grid grid-cols-3 border-b border-black text-center font-bold bg-slate-50 py-0.5">
            <div class="border-r border-black">Software Development</div>
            <div class="border-r border-black">Machine Learning</div>
            <div>Robotics Technology</div>
          </div>
          <!-- Elective 1 -->
          <div class="grid grid-cols-3 border-b border-slate-200 py-0.5 text-left">
            <div class="border-r border-black pr-0.5 pl-0.5 flex justify-between"><b>CPECGS1</b><span>Web Development</span></div>
            <div class="border-r border-black pr-0.5 pl-0.5 flex justify-between"><b>CPECGM1</b><span>Fundamentals of ML</span></div>
            <div class="pr-0.5 pl-0.5 flex justify-between"><b>CPECGR1</b><span>Principles of Robotics</span></div>
          </div>
          <!-- Elective 2 -->
          <div class="grid grid-cols-3 border-b border-slate-200 py-0.5 text-left">
            <div class="border-r border-black pr-0.5 pl-0.5 flex justify-between"><b>CPECGS2</b><span>C# Programming</span></div>
            <div class="border-r border-black pr-0.5 pl-0.5 flex justify-between"><b>CPECGM2</b><span>Data Analytics Prog</span></div>
            <div class="pr-0.5 pl-0.5 flex justify-between"><b>CPECGR2</b><span>Mobile Robotics App</span></div>
          </div>
          <!-- Elective 3 -->
          <div class="grid grid-cols-3 py-0.5 text-left">
            <div class="border-r border-black pr-0.5 pl-0.5 flex justify-between"><b>CPECGS3</b><span>Online Technology</span></div>
            <div class="border-r border-black pr-0.5 pl-0.5 flex justify-between"><b>CPECGM3</b><span>Artificial Neural Networks</span></div>
            <div class="pr-0.5 pl-0.5 flex justify-between"><b>CPECGR3</b><span>Robot Vision</span></div>
          </div>
        </div>

        <!-- Panel 2: Legend & Standing Notes -->
        <div class="p-1 text-[6.5px] leading-tight flex flex-col justify-between" style="width: 280px;">
          <div>
            <div class="font-bold text-[7px] italic mb-1">Legend:</div>
            <div class="flex items-center gap-2 mb-1">
              <span class="inline-block w-8 border-b-2 border-black"></span>
              <span>Connected</span>
            </div>
            <div class="flex items-center gap-2 mb-1">
              <span class="inline-block w-8 border-b border-dashed border-black"></span>
              <span>Soft-requisite (In case of 'Repeat' requisite, both subjects can be taken simultaneously)</span>
            </div>
          </div>
          <div class="mt-1 text-slate-700 text-[6px]">
            <div>** 4th year Standing</div>
            <div>* Maximum of 18 units remaining</div>
          </div>
        </div>

        <!-- Panel 3: CHED CMO 87 Classification Audit Table -->
        <div class="border border-black text-[6.5px] bg-white shrink-0" style="width: 190px;">
          <div class="bg-black text-white text-center font-bold py-0.5 text-[6.5px]">I. TECHNICAL COURSES</div>
          <div class="divide-y divide-black leading-[10.5px]">
            <div class="flex justify-between px-1" style="background-color: #f9be8f;"><span>A. Mathematics</span><b>12</b></div>
            <div class="flex justify-between px-1" style="background-color: #92cddc;"><span>B. Physical Science</span><b>8</b></div>
            <div class="flex justify-between px-1" style="background-color: #b09fc6;"><span>C. Basic Engineering Sciences</span><b>7</b></div>
            <div class="flex justify-between px-1" style="background-color: #da9593;"><span>D. Allied Subjects</span><b>8</b></div>
            <div class="flex justify-between px-1" style="background-color: #c5d9f0;"><span>E. Core Courses</span><b>90</b></div>
            <div class="flex justify-between px-1" style="background-color: #938953; color: white;"><span>F. Cognates/Electives</span><b>9</b></div>
            <div class="bg-black text-white text-center font-bold py-0.5 text-[6.5px]">II. Non-Technical Courses</div>
            <div class="flex justify-between px-1" style="background-color: #76923b; color: white;"><span>A. Social Science</span><b>24</b></div>
            <div class="flex justify-between px-1" style="background-color: #ebf0de;"><span>B. GEC Electives</span><b>9</b></div>
            <div class="flex justify-between px-1 bg-white"><span>C. Languages</span><b></b></div>
            <div class="flex justify-between px-1" style="background-color: #205867; color: white;"><span>D. Mandated Course</span><b>3</b></div>
            <div class="flex justify-between px-1" style="background-color: #ff0000; color: white;"><span>E. Physical Education</span><b>8</b></div>
            <div class="flex justify-between px-1 bg-white"><span>E. National Service Training Program</span><b>6</b></div>
            <div class="flex justify-between px-1 font-bold text-black border-t-2 border-black" style="background-color: #b7dee8;">
              <span>TOTAL UNITS</span><b>184</b>
            </div>
          </div>
        </div>

      </div>
    `,
  2: `
      <div class="text-center border-b-2 border-slate-900 pb-4 mb-6">
        <img src="assets/apc_seal.png" class="inline-block w-14 h-14 rounded-none object-contain mb-2 shadow-xs bg-white p-0.5 border border-slate-200" alt="Asia Pacific College Official Seal">
        <h1 class="font-black text-xl uppercase tracking-widest text-slate-900">ASIA PACIFIC COLLEGE</h1>
        <h2 class="font-bold text-sm text-slate-700 tracking-wider mt-0.5">SCHOOL OF ENGINEERING</h2>
        <div class="inline-block bg-apc-blue text-white px-4 py-1 rounded-none text-xs font-bold uppercase tracking-widest mt-2">PROSPECTUS · SCHOOL YEAR 2026-2027</div>
        <h3 class="font-extrabold text-base text-apc-navy mt-2">BACHELOR OF SCIENCE IN COMPUTER ENGINEERING (BSCpE)</h3>
        <p class="text-xs text-slate-600 max-w-3xl mx-auto mt-2 italic">
          The Bachelor of Science in Computer Engineering (BSCpE) is a four-year trimestral degree that aims to produce certified computer engineers. It embodies the science and technology of design, development, implementation, maintenance, and integration of software and hardware components in modern computing systems and computer-controlled equipment.
        </p>
      </div>

      <div class="space-y-6 text-xs">
        
        <div class="border border-slate-300 rounded-none overflow-hidden shadow-sm">
          <div class="bg-apc-navy text-white px-4 py-2 font-black text-xs uppercase tracking-wider flex items-center justify-between">
            <span>FIRST YEAR</span>
            <span class="text-[11px] font-mono text-amber-300">Curriculum 2026:1 2026-CPE-A</span>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-300 bg-slate-50">
            
            <div class="p-3 bg-white flex flex-col justify-between">
              <div>
                <div class="font-black text-apc-blue text-xs uppercase border-b border-slate-200 pb-1.5 mb-2 flex justify-between">
                  <span>First Trimester</span>
                  <span class="text-slate-500">18 Units</span>
                </div>
                <table class="w-full text-left text-[11px]">
                  <thead>
                    <tr class="text-slate-400 border-b border-slate-100 text-[11px]">
                      <th class="pb-1 font-bold">Course</th>
                      <th class="pb-1 font-bold">Descriptive Title</th>
                      <th class="pb-1 text-right font-bold">Units</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">FIRST YEAR</td>
                  <td class="py-1 text-slate-700 pr-1"></td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">0</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">CALCONE</td>
                  <td class="py-1 text-slate-700 pr-1">Calculus 1</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">ENGCHEM/ENGCHLB</td>
                  <td class="py-1 text-slate-700 pr-1">Chemistry for Engineers Lecture / 
Chemistry for Engineers Laboratory</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">4</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">CPEDISC</td>
                  <td class="py-1 text-slate-700 pr-1">Computer Engineering as a Discipline</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">1</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">PROGLOD</td>
                  <td class="py-1 text-slate-700 pr-1">Programming Logic and Design</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">2</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">GETHICS</td>
                  <td class="py-1 text-slate-700 pr-1">Ethics</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">PEDUONE</td>
                  <td class="py-1 text-slate-700 pr-1">Physical Education 1</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">2</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">NATSER1</td>
                  <td class="py-1 text-slate-700 pr-1">NSTP 1</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                  </tbody>
                </table>
              </div>
              <div class="border-t border-slate-200 mt-3 pt-1.5 flex justify-between font-black text-slate-900 text-xs">
                <span>Trimester Total:</span>
                <span class="font-mono text-apc-blue">18 Units</span>
              </div>
            </div>
            <div class="p-3 bg-white flex flex-col justify-between">
              <div>
                <div class="font-black text-apc-blue text-xs uppercase border-b border-slate-200 pb-1.5 mb-2 flex justify-between">
                  <span>Second Trimester</span>
                  <span class="text-slate-500">17 Units</span>
                </div>
                <table class="w-full text-left text-[11px]">
                  <thead>
                    <tr class="text-slate-400 border-b border-slate-100 text-[11px]">
                      <th class="pb-1 font-bold">Course</th>
                      <th class="pb-1 font-bold">Descriptive Title</th>
                      <th class="pb-1 text-right font-bold">Units</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">CALCTWO</td>
                  <td class="py-1 text-slate-700 pr-1">Calculus 2</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">PHYENLC/LB</td>
                  <td class="py-1 text-slate-700 pr-1">Physics for Engineers Lecture / 
Physics for Engineers Laboratory</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">4</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">OBJPROG</td>
                  <td class="py-1 text-slate-700 pr-1">Object Oriented Programming</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">2</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">PHILHIS</td>
                  <td class="py-1 text-slate-700 pr-1">Readings in Philippine History</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">PEDUTWO</td>
                  <td class="py-1 text-slate-700 pr-1">Physical Education 2</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">2</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">NATSER2</td>
                  <td class="py-1 text-slate-700 pr-1">NSTP 2</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                  </tbody>
                </table>
              </div>
              <div class="border-t border-slate-200 mt-3 pt-1.5 flex justify-between font-black text-slate-900 text-xs">
                <span>Trimester Total:</span>
                <span class="font-mono text-apc-blue">17 Units</span>
              </div>
            </div>
            <div class="p-3 bg-white flex flex-col justify-between">
              <div>
                <div class="font-black text-apc-blue text-xs uppercase border-b border-slate-200 pb-1.5 mb-2 flex justify-between">
                  <span>Third Trimester</span>
                  <span class="text-slate-500">17 Units</span>
                </div>
                <table class="w-full text-left text-[11px]">
                  <thead>
                    <tr class="text-slate-400 border-b border-slate-100 text-[11px]">
                      <th class="pb-1 font-bold">Course</th>
                      <th class="pb-1 font-bold">Descriptive Title</th>
                      <th class="pb-1 text-right font-bold">Units</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">ENGDATA</td>
                  <td class="py-1 text-slate-700 pr-1">Engineering Data Analysis</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">ELECIRK / CRKTLAB</td>
                  <td class="py-1 text-slate-700 pr-1">Fundamentals of Electrical Circuits Lecture / Fundamentals of Electrical Circuits Laboratory</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">4</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">ECONOMC</td>
                  <td class="py-1 text-slate-700 pr-1">Engineering Economics</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">DATSTRC</td>
                  <td class="py-1 text-slate-700 pr-1">Data Structures and Algorithms</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">2</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">PEDUTRI</td>
                  <td class="py-1 text-slate-700 pr-1">Physical Education 3</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">2</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">DISCMAT</td>
                  <td class="py-1 text-slate-700 pr-1">Discrete Mathematics</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                  </tbody>
                </table>
              </div>
              <div class="border-t border-slate-200 mt-3 pt-1.5 flex justify-between font-black text-slate-900 text-xs">
                <span>Trimester Total:</span>
                <span class="font-mono text-apc-blue">17 Units</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-slate-300 rounded-none overflow-hidden shadow-sm">
          <div class="bg-apc-navy text-white px-4 py-2 font-black text-xs uppercase tracking-wider flex items-center justify-between">
            <span>SECOND YEAR</span>
            <span class="text-[11px] font-mono text-amber-300">Curriculum 2026:1 2026-CPE-A</span>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-300 bg-slate-50">
            
            <div class="p-3 bg-white flex flex-col justify-between">
              <div>
                <div class="font-black text-apc-blue text-xs uppercase border-b border-slate-200 pb-1.5 mb-2 flex justify-between">
                  <span>First Trimester</span>
                  <span class="text-slate-500">17 Units</span>
                </div>
                <table class="w-full text-left text-[11px]">
                  <thead>
                    <tr class="text-slate-400 border-b border-slate-100 text-[11px]">
                      <th class="pb-1 font-bold">Course</th>
                      <th class="pb-1 font-bold">Descriptive Title</th>
                      <th class="pb-1 text-right font-bold">Units</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">SECOND YEAR</td>
                  <td class="py-1 text-slate-700 pr-1"></td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">0</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">DIEQUAT</td>
                  <td class="py-1 text-slate-700 pr-1">Differential Equations</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">ELEXCKT/ ELEXLAB</td>
                  <td class="py-1 text-slate-700 pr-1">Fundamentals of Electronics Circuit Lecture / Fundamentals of Electronics Circuit Laboratory</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">4</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">USERINX</td>
                  <td class="py-1 text-slate-700 pr-1">User Interface and User Experience</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">1</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">OPRSYST</td>
                  <td class="py-1 text-slate-700 pr-1">Operating Systems</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">MOBCAPP</td>
                  <td class="py-1 text-slate-700 pr-1">Mobile Code Technology and Application</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">1</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">RIZLIFE</td>
                  <td class="py-1 text-slate-700 pr-1">Life and Works of Rizal</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">PEDUFOR</td>
                  <td class="py-1 text-slate-700 pr-1">Physical Education 4</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">2</td>
                </tr>
                  </tbody>
                </table>
              </div>
              <div class="border-t border-slate-200 mt-3 pt-1.5 flex justify-between font-black text-slate-900 text-xs">
                <span>Trimester Total:</span>
                <span class="font-mono text-apc-blue">17 Units</span>
              </div>
            </div>
            <div class="p-3 bg-white flex flex-col justify-between">
              <div>
                <div class="font-black text-apc-blue text-xs uppercase border-b border-slate-200 pb-1.5 mb-2 flex justify-between">
                  <span>Second Trimester</span>
                  <span class="text-slate-500">18 Units</span>
                </div>
                <table class="w-full text-left text-[11px]">
                  <thead>
                    <tr class="text-slate-400 border-b border-slate-100 text-[11px]">
                      <th class="pb-1 font-bold">Course</th>
                      <th class="pb-1 font-bold">Descriptive Title</th>
                      <th class="pb-1 text-right font-bold">Units</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">NUMERCL</td>
                  <td class="py-1 text-slate-700 pr-1">Numerical Methods</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">LOGCDES / LOGICLB</td>
                  <td class="py-1 text-slate-700 pr-1">Logic Circuit and Design Lecture / 
Logic Circuit and Design Laboratory</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">4</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">PURPCOM</td>
                  <td class="py-1 text-slate-700 pr-1">Purposive Communicaton</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">DATMGTS</td>
                  <td class="py-1 text-slate-700 pr-1">Database Management System</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">1</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">MATWORL</td>
                  <td class="py-1 text-slate-700 pr-1">Mathematics for the Modern World</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">ENGCADD</td>
                  <td class="py-1 text-slate-700 pr-1">Computer Aided Drafting</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">1</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">SCITECS</td>
                  <td class="py-1 text-slate-700 pr-1">Science, Technology, and Society</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                  </tbody>
                </table>
              </div>
              <div class="border-t border-slate-200 mt-3 pt-1.5 flex justify-between font-black text-slate-900 text-xs">
                <span>Trimester Total:</span>
                <span class="font-mono text-apc-blue">18 Units</span>
              </div>
            </div>
            <div class="p-3 bg-white flex flex-col justify-between">
              <div>
                <div class="font-black text-apc-blue text-xs uppercase border-b border-slate-200 pb-1.5 mb-2 flex justify-between">
                  <span>Third Trimester</span>
                  <span class="text-slate-500">21 Units</span>
                </div>
                <table class="w-full text-left text-[11px]">
                  <thead>
                    <tr class="text-slate-400 border-b border-slate-100 text-[11px]">
                      <th class="pb-1 font-bold">Course</th>
                      <th class="pb-1 font-bold">Descriptive Title</th>
                      <th class="pb-1 text-right font-bold">Units</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">FDCONTS</td>
                  <td class="py-1 text-slate-700 pr-1">Feedback and Control Systems</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">CPEDRAF</td>
                  <td class="py-1 text-slate-700 pr-1">Computer Engineering Drafting and Design</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">1</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">MIXSIGS</td>
                  <td class="py-1 text-slate-700 pr-1">Fundamentals of Mixed Signals and Sensors</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">EMICROS / MCROLAB</td>
                  <td class="py-1 text-slate-700 pr-1">Microprocessors Lecture / 
Microprocessors Laboratory</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">4</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">SOFTDES/ SOFTLAB</td>
                  <td class="py-1 text-slate-700 pr-1">Software Design Lecture / 
Software Design Laboratory</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">4</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">UNDSELF</td>
                  <td class="py-1 text-slate-700 pr-1">Understanding the Self</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">ARTAPRE</td>
                  <td class="py-1 text-slate-700 pr-1">Art Appreciation</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                  </tbody>
                </table>
              </div>
              <div class="border-t border-slate-200 mt-3 pt-1.5 flex justify-between font-black text-slate-900 text-xs">
                <span>Trimester Total:</span>
                <span class="font-mono text-apc-blue">21 Units</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-slate-300 rounded-none overflow-hidden shadow-sm">
          <div class="bg-apc-navy text-white px-4 py-2 font-black text-xs uppercase tracking-wider flex items-center justify-between">
            <span>THIRD YEAR</span>
            <span class="text-[11px] font-mono text-amber-300">Curriculum 2026:1 2026-CPE-A</span>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-300 bg-slate-50">
            
            <div class="p-3 bg-white flex flex-col justify-between">
              <div>
                <div class="font-black text-apc-blue text-xs uppercase border-b border-slate-200 pb-1.5 mb-2 flex justify-between">
                  <span>First Trimester</span>
                  <span class="text-slate-500">0 Units</span>
                </div>
                <table class="w-full text-left text-[11px]">
                  <thead>
                    <tr class="text-slate-400 border-b border-slate-100 text-[11px]">
                      <th class="pb-1 font-bold">Course</th>
                      <th class="pb-1 font-bold">Descriptive Title</th>
                      <th class="pb-1 text-right font-bold">Units</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">THIRD YEAR</td>
                  <td class="py-1 text-slate-700 pr-1"></td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">0</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">DIGSPRO / DIGSLAB</td>
                  <td class="py-1 text-slate-700 pr-1">Digital Signal Processing Lecture / 
Digital Signal Processing Laboratory</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">4</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">DATCOMS</td>
                  <td class="py-1 text-slate-700 pr-1">Data and Digital Communications</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">EMBEDDS / EMBEDLB</td>
                  <td class="py-1 text-slate-700 pr-1">Embedded System Lecture / 
Embedded System Laboratory</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">4</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">CPEMETS</td>
                  <td class="py-1 text-slate-700 pr-1">Methods of Research</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">2</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">INTOHDL</td>
                  <td class="py-1 text-slate-700 pr-1">Intro to HDL</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">1</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">EXCOMP1</td>
                  <td class="py-1 text-slate-700 pr-1">Extensive Communicaion Competency Program 1</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">CPECGS1/ CPECGM1/ CPECGR1</td>
                  <td class="py-1 text-slate-700 pr-1">Cognate 1</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                  </tbody>
                </table>
              </div>
              <div class="border-t border-slate-200 mt-3 pt-1.5 flex justify-between font-black text-slate-900 text-xs">
                <span>Trimester Total:</span>
                <span class="font-mono text-apc-blue">0 Units</span>
              </div>
            </div>
            <div class="p-3 bg-white flex flex-col justify-between">
              <div>
                <div class="font-black text-apc-blue text-xs uppercase border-b border-slate-200 pb-1.5 mb-2 flex justify-between">
                  <span>Second Trimester</span>
                  <span class="text-slate-500">0 Units</span>
                </div>
                <table class="w-full text-left text-[11px]">
                  <thead>
                    <tr class="text-slate-400 border-b border-slate-100 text-[11px]">
                      <th class="pb-1 font-bold">Course</th>
                      <th class="pb-1 font-bold">Descriptive Title</th>
                      <th class="pb-1 text-right font-bold">Units</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">HEALTHS</td>
                  <td class="py-1 text-slate-700 pr-1">Basic Occupational Health and Safety</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">COMNETS / NETSLAB</td>
                  <td class="py-1 text-slate-700 pr-1">Computer Networks and Security Lecture / Computer Networks and Security Laboratory</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">4</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">COMAROR / ARCORLB</td>
                  <td class="py-1 text-slate-700 pr-1">Computer Architecture and Organization Lecture / Computer Architecture and Organization Laboratory</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">4</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">CPEDES1</td>
                  <td class="py-1 text-slate-700 pr-1">CPE Practice and Design 1</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">1</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">TECH101</td>
                  <td class="py-1 text-slate-700 pr-1">Technopreneursip 101</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">EXCOMP2</td>
                  <td class="py-1 text-slate-700 pr-1">Extensive Communicaion Competency Program 2</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">CPECGS2/ CPECGM2/ CPECGR2</td>
                  <td class="py-1 text-slate-700 pr-1">Cognate 2</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                  </tbody>
                </table>
              </div>
              <div class="border-t border-slate-200 mt-3 pt-1.5 flex justify-between font-black text-slate-900 text-xs">
                <span>Trimester Total:</span>
                <span class="font-mono text-apc-blue">0 Units</span>
              </div>
            </div>
            <div class="p-3 bg-white flex flex-col justify-between">
              <div>
                <div class="font-black text-apc-blue text-xs uppercase border-b border-slate-200 pb-1.5 mb-2 flex justify-between">
                  <span>Third Trimester</span>
                  <span class="text-slate-500">0 Units</span>
                </div>
                <table class="w-full text-left text-[11px]">
                  <thead>
                    <tr class="text-slate-400 border-b border-slate-100 text-[11px]">
                      <th class="pb-1 font-bold">Course</th>
                      <th class="pb-1 font-bold">Descriptive Title</th>
                      <th class="pb-1 text-right font-bold">Units</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">SEMSTRP</td>
                  <td class="py-1 text-slate-700 pr-1">Seminars and Field Trips</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">1</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">CPELAWS</td>
                  <td class="py-1 text-slate-700 pr-1">CPE Laws and Practice</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">2</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">CPEDES2</td>
                  <td class="py-1 text-slate-700 pr-1">CPE Practice and Design 2</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">2</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">EMERTEC</td>
                  <td class="py-1 text-slate-700 pr-1">Emerging Technologies in CpE</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">CONWORL</td>
                  <td class="py-1 text-slate-700 pr-1">The Contemporary World</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">PROFETH</td>
                  <td class="py-1 text-slate-700 pr-1">Professional Ethics</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">CPECGS3/ CPECGM3/ CPECGR3</td>
                  <td class="py-1 text-slate-700 pr-1">Cognate 3</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">3</td>
                </tr>
                  </tbody>
                </table>
              </div>
              <div class="border-t border-slate-200 mt-3 pt-1.5 flex justify-between font-black text-slate-900 text-xs">
                <span>Trimester Total:</span>
                <span class="font-mono text-apc-blue">0 Units</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-slate-300 rounded-none overflow-hidden shadow-sm">
          <div class="bg-apc-navy text-white px-4 py-2 font-black text-xs uppercase tracking-wider flex items-center justify-between">
            <span>FOURTH YEAR</span>
            <span class="text-[11px] font-mono text-amber-300">Curriculum 2026:1 2026-CPE-A</span>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-300 bg-slate-50">
            
            <div class="p-3 bg-white flex flex-col justify-between">
              <div>
                <div class="font-black text-apc-blue text-xs uppercase border-b border-slate-200 pb-1.5 mb-2 flex justify-between">
                  <span>First Trimester</span>
                  <span class="text-slate-500">6 Units</span>
                </div>
                <table class="w-full text-left text-[11px]">
                  <thead>
                    <tr class="text-slate-400 border-b border-slate-100 text-[11px]">
                      <th class="pb-1 font-bold">Course</th>
                      <th class="pb-1 font-bold">Descriptive Title</th>
                      <th class="pb-1 text-right font-bold">Units</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">FOURTH YEAR</td>
                  <td class="py-1 text-slate-700 pr-1"></td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">0</td>
                </tr>
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">INTERN1</td>
                  <td class="py-1 text-slate-700 pr-1">Internship 1</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">6</td>
                </tr>
                  </tbody>
                </table>
              </div>
              <div class="border-t border-slate-200 mt-3 pt-1.5 flex justify-between font-black text-slate-900 text-xs">
                <span>Trimester Total:</span>
                <span class="font-mono text-apc-blue">6 Units</span>
              </div>
            </div>
            <div class="p-3 bg-white flex flex-col justify-between">
              <div>
                <div class="font-black text-apc-blue text-xs uppercase border-b border-slate-200 pb-1.5 mb-2 flex justify-between">
                  <span>Second Trimester</span>
                  <span class="text-slate-500">6 Units</span>
                </div>
                <table class="w-full text-left text-[11px]">
                  <thead>
                    <tr class="text-slate-400 border-b border-slate-100 text-[11px]">
                      <th class="pb-1 font-bold">Course</th>
                      <th class="pb-1 font-bold">Descriptive Title</th>
                      <th class="pb-1 text-right font-bold">Units</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">INTERN2</td>
                  <td class="py-1 text-slate-700 pr-1">Internship 2</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">6</td>
                </tr>
                  </tbody>
                </table>
              </div>
              <div class="border-t border-slate-200 mt-3 pt-1.5 flex justify-between font-black text-slate-900 text-xs">
                <span>Trimester Total:</span>
                <span class="font-mono text-apc-blue">6 Units</span>
              </div>
            </div>
            <div class="p-3 bg-white flex flex-col justify-between">
              <div>
                <div class="font-black text-apc-blue text-xs uppercase border-b border-slate-200 pb-1.5 mb-2 flex justify-between">
                  <span>Third Trimester</span>
                  <span class="text-slate-500">6 Units</span>
                </div>
                <table class="w-full text-left text-[11px]">
                  <thead>
                    <tr class="text-slate-400 border-b border-slate-100 text-[11px]">
                      <th class="pb-1 font-bold">Course</th>
                      <th class="pb-1 font-bold">Descriptive Title</th>
                      <th class="pb-1 text-right font-bold">Units</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    
                <tr>
                  <td class="py-1 font-mono font-bold text-slate-900 pr-2">INTERN3</td>
                  <td class="py-1 text-slate-700 pr-1">Internship 3</td>
                  <td class="py-1 font-mono font-bold text-slate-900 text-right">6</td>
                </tr>
                  </tbody>
                </table>
              </div>
              <div class="border-t border-slate-200 mt-3 pt-1.5 flex justify-between font-black text-slate-900 text-xs">
                <span>Trimester Total:</span>
                <span class="font-mono text-apc-blue">6 Units</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-amber-50 border border-amber-200 rounded-none p-4 flex items-center justify-between font-black text-amber-900 text-sm">
          <span>PROGRAM TOTAL CREDIT UNITS:</span>
          <span class="text-base font-mono bg-amber-200/60 px-3 py-1 rounded-none border border-amber-300">184 UNITS</span>
        </div>
      </div>
    `,
  3: `
      <div class="text-center border-b-2 border-slate-900 pb-4 mb-6">
        <img src="assets/apc_seal.png" class="inline-block w-14 h-14 rounded-none object-contain mb-2 shadow-xs bg-white p-0.5 border border-slate-200" alt="Asia Pacific College Official Seal">
        <h1 class="font-black text-xl uppercase tracking-widest text-slate-900">ASIA PACIFIC COLLEGE</h1>
        <h2 class="font-bold text-sm text-slate-700 tracking-wider mt-0.5">SCHOOL OF ENGINEERING</h2>
        <div class="inline-block bg-slate-800 text-white px-4 py-1 rounded-none text-xs font-bold uppercase tracking-widest mt-2">COURSE DESCRIPTION CATALOG · BS CpE 2026</div>
      </div>

      <div class="space-y-6 text-xs">
        
        <div class="border border-slate-300 rounded-none overflow-hidden shadow-sm">
          <div class="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-2 font-black text-xs uppercase tracking-wider flex items-center justify-between">
            <span>MATHEMATICS</span>
            <span class="text-slate-300 text-[11px] font-normal">4 Courses</span>
          </div>
          <div class="divide-y divide-slate-200 p-4 bg-white space-y-3">
            
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CALCONE</span>
                  <span class="font-extrabold text-xs text-slate-900">Calculus 1</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">NONE</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                An introductory course covering the core concepts of limit, continuity and differentiability of functions involving one or more variables. This also includes the application of differential calculations in solving problems on optimization, rates of change, related rates, tangents and normals, and approximations; partial differentiation and transcendental curve tracing.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CALTWO</span>
                  <span class="font-extrabold text-xs text-slate-900">Calculus 2</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">CALCONE</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                The course introduces the concept of integration and its application to some physical problems such as evaluation of areas, volumes of revolution, force, and work. The fundamental formula and various techniques of integration are taken up and applied to both single single variable and multi-variable functions. The course also includes tracing of functions of two variables for a bette appreciation of the interpretation of the double and triple integration as vlume of a three-dimensional region bounded by two or more surfaces.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">ENGDATA</span>
                  <span class="font-extrabold text-xs text-slate-900">Engineering Data Analysis</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">CALCONE</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course is designed for undergraduate engineering students with emphasis on problem solving realted to societal issues that engineers and scientists are called upon to solve. It introduces different method for a given situation. The relationship of probability to statistics is also discussed, providing students with the tools they need to understand how &quot;chance&quot; plays a role in statistical analysis. Probability distributions of random variables and their uses are also considered, along  with a discussion of linear functions of random variables within the context of their application to data analysis and inference. The course also incldes estimation techniques for unknown parameters; hypothesis testing used in making inferences from sample to population; inference for regression parameters and build models for estimating means and predicting future values of key variables under study. Finally, statistically based experiments are discussed with the aid of statistical software.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">DIEQUAT</span>
                  <span class="font-extrabold text-xs text-slate-900">Differential Calculus</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">CALTWO</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course is intended for all engineering students to have a firm foundation on differential equations in preparation for their degree-specific advanced mathematical courses. It covers first order differential equations, nth order linear differential equations and systems of first order linear differential equations. It also introduces the concept of Laplace Transforms in solving differential equations. The students are expected to be able to recognize different kinds of differential equations, determine existence and uniqueness of solution, select the appropriate methods of solution and interpret the obtained solution. Students are also expected to relate differential equations to various practical engineering and scientific problems as well as employ computer technology in solving and verifying solutions.
              </p>
            </div>
          </div>
        </div>
        <div class="border border-slate-300 rounded-none overflow-hidden shadow-sm">
          <div class="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-2 font-black text-xs uppercase tracking-wider flex items-center justify-between">
            <span>PHYSICAL SCIENCES</span>
            <span class="text-slate-300 text-[11px] font-normal">4 Courses</span>
          </div>
          <div class="divide-y divide-slate-200 p-4 bg-white space-y-3">
            
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">ENGCHEM</span>
                  <span class="font-extrabold text-xs text-slate-900">Chemistry for Engineers</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">NONE</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course provides students with core concepts of chemistry that are important in the pratice of engineering profession.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">ENGCHLB</span>
                  <span class="font-extrabold text-xs text-slate-900">Chemistry for Engineers Laboratory</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">NONE</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                A fundamental laboratory course designed to provide opportunity to observe and apply the principles and theories taught in the chemistry for engineers.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">PHYENLC</span>
                  <span class="font-extrabold text-xs text-slate-900">Physics for Engineers</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">CALCONE</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course covers vectors; kinematics; dynamics; work, energy, and power, impluse and momentum; rotation; dynamics of rotations; elasticity; and oscillation. Fluids; thermal expansion, thermal stress; heat transfer; calorimetry; waves; electrostatic; electricity; magnetism; optics; image formation by plane and curved mirrors; and image formation by thin lenses.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">PHYENLB</span>
                  <span class="font-extrabold text-xs text-slate-900">Physics fo Enginees Laboratory</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">CALCONE</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                A fundamental laboratory course designed to provide opportunity to observe and apply the principles and theories taught in the physics  for engineers.
              </p>
            </div>
          </div>
        </div>
        <div class="border border-slate-300 rounded-none overflow-hidden shadow-sm">
          <div class="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-2 font-black text-xs uppercase tracking-wider flex items-center justify-between">
            <span>Basic Engineering and Sciences</span>
            <span class="text-slate-300 text-[11px] font-normal">10 Courses</span>
          </div>
          <div class="divide-y divide-slate-200 p-4 bg-white space-y-3">
            
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">ENGCADD</span>
                  <span class="font-extrabold text-xs text-slate-900">Computer Aided Drafting</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">2nd Year Standing</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                Concepts of computer-aided drafting (CAD); introduction to the CAD environment; terminologies; and the general operating procedures and techniques in entering and executing basic CAD commands.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">ECONOMC</span>
                  <span class="font-extrabold text-xs text-slate-900">Engineering Economics</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">NONE</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course covers concepts of the time value of money and equivalence; basic economy study methods; decisions under certainty; decisions recognizing risk; and decisions admitting uncertainty.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">TECH101</span>
                  <span class="font-extrabold text-xs text-slate-900">Technopreneurship 101</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">NONE</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                The course includes the journey into the world of entrepreneurship with introspection of a business idea into a viable venture. The focus is on unleashing the entrepreneurial spirit in each individual.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">ITCONCE</span>
                  <span class="font-extrabold text-xs text-slate-900">I.T. Concept</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">NONE</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                A course covers basic theory and concept of Information and Communications Technology.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">ALLIED SUBJECTS</span>
                  <span class="font-extrabold text-xs text-slate-900"></span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">ELECIRK</span>
                  <span class="font-extrabold text-xs text-slate-900">Fundamentals of Electrical Circuits</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">PHYENLC &amp; PHYENLB</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course introduces the fundamental concepts, circuit laws, theorems and techniques used in electrical circuit analysis and transient analysis, as well as its application. The course covers circuit topologies and DC excitations, transient response, AC response, and polyphase circuits. The use of computer software for circuit simulation and design are emphasized to expose students to computer-based tools.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CRKTLAB</span>
                  <span class="font-extrabold text-xs text-slate-900">Fundamentals of Electrical Circuits Laboratory</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">PHYENLC &amp; PHYENLB</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course allows the students to verify the laws and theorems discussed in Fundamentals of Electrical Circuits (lecture) through simulation, experimentation and project construction. The course topics include experimental determination of the characteristics of the different circuit configurations (series, parallel, series/parallel, delta, and wye), electrical power, Ohm&#x27;s Law, Kirchhoff&#x27;s Voltage and Current Laws, Superposition Theorem, Thevenin&#x27;s Equivalent circuit, and maximum power transfer. The use of computer software for circuit simulation and design are used as basis in verifying expermental results and to expose students to computer-based tools.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">ELEXCKT</span>
                  <span class="font-extrabold text-xs text-slate-900">Fundamentals of Electronic Circuits</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">ELECIRK &amp; CRKTLAB</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                The course discusses the construction, operation, and characteristics of basic electronics devices sch as junction diodes, bipolar junction transistors, Field Effect Transistors and MOS Field Effect Transistors and oscillators.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">ELEXLAB</span>
                  <span class="font-extrabold text-xs text-slate-900">Fundamentals of Electronic Circuits Laboratory</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">ELECIRK &amp; CRKTLAB</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course os the laboratory component of the course Fundamentals of Electronic Circuits (Lecture) that allows students to verify theoretical concepts pertaining to the operation of electronics devices such as the PN junction diodes, BJT and FET and their sibsequent applications to electronics circuits involving reftification, amplification and switching applications. The use of laboratory equipment and apparatus to verify the characteristics of diodes and transistor devices, and their operation in circuits such as rectifiers, voltage regulators, amplifiers, oscillatos and switches are emphasized. Such equipment includes but not limited to the curve tracers, the oscilloscope, signal generator and multi-meters.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">PROFESSIONAL COURSES</span>
                  <span class="font-extrabold text-xs text-slate-900"></span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                
              </p>
            </div>
          </div>
        </div>
        <div class="border border-slate-300 rounded-none overflow-hidden shadow-sm">
          <div class="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-2 font-black text-xs uppercase tracking-wider flex items-center justify-between">
            <span>CORE COURSES</span>
            <span class="text-slate-300 text-[11px] font-normal">38 Courses</span>
          </div>
          <div class="divide-y divide-slate-200 p-4 bg-white space-y-3">
            
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">DISCMAT</span>
                  <span class="font-extrabold text-xs text-slate-900">Discrete Mathematics</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">CALCONE</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course deals with logic, sets, proofs, growth of functions, theory of numbers, counting techniques, trees and graph theory.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">NUMERCL</span>
                  <span class="font-extrabold text-xs text-slate-900">Numerical Methods</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">DIEQUAT</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course covers the concept of numerical analysis and computer software tools in dealing with engineering problems. It includes techniques in finding the roots of an equation, solving systems of linear and non-linear equations, eigenvalue problems, polynomials approximation and interpolation, ordinary and partial differential equations. The Monte-Carlo method, simulation, error propagation and analysis, the methods of least squares and goodness-of-fit tests are also discussed.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CPEDISC</span>
                  <span class="font-extrabold text-xs text-slate-900">Computer Engineering as a Discipline</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">NONE</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course covers discussion about APC’s engineering degrees and curriculum; introduction to engineering profession: common traits of good engineers, engineering disciplines; preparation for an engineering career; engineering licensures, certifications and organizations; and introduction to engineering code of ethics, This will also prepare students how to prepare students for success through engineering design process, ethical decision-making, teamwork, and communicating to diverse audiences.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">MIXSIGS</span>
                  <span class="font-extrabold text-xs text-slate-900">Fundamentals of Mixed Signals and Sensors</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">ELEXCKT/ ELEXLAB, ELECIRK / CRKTLAB</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course covers operational amplifiers, signal converters, power switching devices and the construction and operation of sensors and transducers for converting physical parameters into electrical signals and vice-versa. The course focuses on the application of these devices in developing signal conversion circuits that allows measurement, processing and control of physical parameters by digital processing systems such as a finite state machine or a digital computer. Topics on actuators are also included.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CPEDRAF</span>
                  <span class="font-extrabold text-xs text-slate-900">Computer Engineering Drafting and Design</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">ELEXCKT/ ELEXLAB, ELECIRK / CRKTLAB</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course focuses on the principles of layout of electrical, electronics, and logic drawings; stressing modern representation used for block diagrams, wiring/assembly, drawings, printed circuit board layouts, and etching.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">PROGLOD</span>
                  <span class="font-extrabold text-xs text-slate-900">Programming Logic and Design</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">NONE</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This is an introductory course in computer programming logic. The student will learn algorithms applicable to all programming languages, including: identifiers, data types, arrays, control structures, modular programming, generating reports, and computer memory concepts. The student will learn to use charts commonly used in business and information processing. Program logic will be developed using flowcharts and pseudo code. Programs will be written using any programming language.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">DATSTRC</span>
                  <span class="font-extrabold text-xs text-slate-900">Data Structures and Algorithms</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">OBJPROG</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                Solving computational problems that involve manipulating collections of data, study a core set of data abstractions, data structures, and algorithms that provide a foundation for writing efficient programs.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">OBJPROG</span>
                  <span class="font-extrabold text-xs text-slate-900">Object Oriented Programming</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">PROGLOD</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                Introduces the fundamental concepts of programming from an object oriented perspective. Topics are drawn from classes and objects, abstraction, encapsulation, data types, calling methods and passing parameters, decisions, loops, arrays and collections, documentation, testing and debugging, exceptions, design issues, inheritance, and polymorphic variables and methods. The course emphasizes modern software engineering and design principles.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">SOFTDES</span>
                  <span class="font-extrabold text-xs text-slate-900">Software Design</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">DATSTRC</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course focuses on programming paradigms and constructs, data structures and use of standard library functions for manipulating them, object-oriented design and the use of modeling languages, testing and software quality concepts, and tradeoffs among different software design methods.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">SOFTLAB</span>
                  <span class="font-extrabold text-xs text-slate-900">Software Design Laboratory</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">DATSTRC</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course focuses on providing hands-on experience in software design.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">EMICROS</span>
                  <span class="font-extrabold text-xs text-slate-900">Microprocessors</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">LOGCDES / LOGICLB</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course provides understanding of architecture of microprocessor-based systems; registers, study of microprocessor operation, assembly language, arithmetic operations, and interfacing.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">MCROLAB</span>
                  <span class="font-extrabold text-xs text-slate-900">Microprocessors Laboratory</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">LOGCDES / LOGICLB</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course provides understanding of architecture of microprocessor-based systems; study of microprocessor operation, assembly language, arithmetic operations, and interfacing
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">LOGCDES</span>
                  <span class="font-extrabold text-xs text-slate-900">Logic Circuits and Design</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">ELEXCKT/ ELEXLAB, ELECIRK / CRKTLAB</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                The course includes design and analysis or digital circuits. This course covers both combinational (synchronous and asynchronous) logic circuits with emphasis on solving digital problems using hardwired structures of the complexity of medium and large-scale integration.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">LOGICLB</span>
                  <span class="font-extrabold text-xs text-slate-900">Logic Circuits and Design Laboratory</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">ELEXCKT/ ELEXLAB, ELECIRK / CRKTLAB</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course focuses on providing hands-on experience in designing digital circuits.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CPEMETS</span>
                  <span class="font-extrabold text-xs text-slate-900">Methods of Research</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">ENGDATA, PURPCOM, LOGCDES / LOGICLB</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course will provide in-depth understanding of research through exploration of different research methodologies and ethics. It includes qualitative and quantitative research, descriptive and other applicable research methodologies, inferential statistics and introduction to data mining.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">OPRSYST</span>
                  <span class="font-extrabold text-xs text-slate-900">Operating Systems</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">DATSTRC</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course includes different policies and strategies used by an operating system. Topics include operating systems structures, process management, storage management, file management and distributed systems.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">COMAROR</span>
                  <span class="font-extrabold text-xs text-slate-900">Computer Architecture and Organization</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">EMICROS / MCROLAB</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course includes the study of the evolution of computer architecture and the factors influencing the design of hardware and software elements of computer systems. The focus is on the understanding of the design issues specifically the instruction set architecture and hardware architecture.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">ARCORLB</span>
                  <span class="font-extrabold text-xs text-slate-900">Computer Architecture and Organization Laboratory</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">EMICROS / MCROLAB</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course will provide hands-on activities designed to focus on the computer hardware issues specifically the instruction set architecture and hardware architecture.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">COMNETS</span>
                  <span class="font-extrabold text-xs text-slate-900">Computer Networks and Security</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">DATCOMS</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                The course includes the basic principles of network architecture, computer network design, services, technologies and network security.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">NETSLAB</span>
                  <span class="font-extrabold text-xs text-slate-900">Computer Networks and Security Laboratory</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">DATCOMS</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course provides hands-on laboratory activities on computer networking. It focuses on the configuration of TCP/IP, routers and switches, network security and wireless fidelity.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">EMBEDDS</span>
                  <span class="font-extrabold text-xs text-slate-900">Embedded Systems</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">EMICROS / MCROLAB</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course provides advanced topics in embedded systems design using contemporary practice; interrupt-driven, reactive, real-time, object- oriented, and distributed client/server embedded systems.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">EMBEDLB</span>
                  <span class="font-extrabold text-xs text-slate-900">Embedded Systems Laboratory</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">EMICROS / MCROLAB</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course will provide hands-on activities designed to advanced topics in embedded systems design using contemporary practice; interrupt-driven, reactive, real-time, object- oriented, and distributed client/server embedded systems.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">DIGSPRO</span>
                  <span class="font-extrabold text-xs text-slate-900">Digital Signal Processing</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">FDCONTS</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                The course includes the need for and tradeoffs made when sampling and quantizing a signal; linear, time-invariant system properties; frequency as an analysis domain complementary to time; and filter design.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">DIGSLAB</span>
                  <span class="font-extrabold text-xs text-slate-900">Digital Signal Processing Laboratory</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">FDCONTS</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course is designed to provide hands-on activities on different applications of digital signals processing.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">FDCONTS</span>
                  <span class="font-extrabold text-xs text-slate-900">Feedback and Control Systems</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">ELEXCKT/ ELEXLAB, ELECIRK / CRKTLAB</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                The course includes the control devices, equations of a systems and block diagram of systems.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">INTOHDL</span>
                  <span class="font-extrabold text-xs text-slate-900">Introduction to HDL</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">PROGLOD, ELEXCKT/ ELEXLAB</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                A laboratory course that introduces hardware description language as a tool for designing and testing combinational and sequential circuits. It covers fundamental of concepts of HDL and the basic building blocks of HDL programming.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">SEMSTRP</span>
                  <span class="font-extrabold text-xs text-slate-900">Seminars and Field Trips</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">4th year Standing</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                The course includes seminars and lecturers on current trends and issues on Computer Engineering developments. Include field trips to different companies and plants dealing with computer system facilities.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">HEALTHS</span>
                  <span class="font-extrabold text-xs text-slate-900">Basic Occupational Health and Safety</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">3rd year Standing</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course tackles key Occupational Health and Safety (OSH) concepts, principles and practices that are foundational knowledge requirements applicable in almost all industries. Specifically, it assists learners in identifying the key elements in the OSH situation both here and abroad; determine existing and potential safety and health hazards; identify the range of control measures; discuss pertinent provisions of Philippine laws that refer to occupational safety and health; explain key principles in effectively communicating OSH; identify components of effective OSH programs and demonstrate some skills in identifying hazards and corresponding control measures at the workplace.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CPELAWS</span>
                  <span class="font-extrabold text-xs text-slate-900">CpE Laws and Professional Practice</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">3rd year Standing</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course provides the importance of the professional and ethical responsibilities of practicing computer engineers and the effects of their work on society; the importance of understanding contemporary issues, lifelong learning strategies; and applicable IT laws in the field of computer engineering.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">EMERTEC</span>
                  <span class="font-extrabold text-xs text-slate-900">Emerging Technologies in CpE</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">4th year Standing</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course is designed to provide flexibility in the curriculum by discussing any emerging technologies applicable to computer engineering.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CPEDES1</span>
                  <span class="font-extrabold text-xs text-slate-900">CpE Practice and Design 1</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">EMICROS / MCROLAB</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course is the first course in a two-semester sequence that constitutes the design experience for undergraduate computer engineers. It provides essential ideas, concepts and principles in engineering design process and emphasizes other design issues including engineering standards and multiple constraints as well as effective communication strategies. Students work in teams to develop project proposals for assigned open-ended problems. Students are required to make oral presentations and submit written proposal for their projects.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CPEDES2</span>
                  <span class="font-extrabold text-xs text-slate-900">CpE Practice and Design 2</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">CPEDES1</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course is the second of the design experience for undergraduate computer engineering students. In this course, students will be expected to build/fabricate their design, test and evaluate the design against their design specifications, and demonstrate a fully functional project to their design review committee. Students make oral presentations and submit final reports documenting their projects.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">INTERN1</span>
                  <span class="font-extrabold text-xs text-slate-900">Internship 1</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">No Academic Subjects Left</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                INTERN 1 (Foundational Professional Practice) is a full-time industry immersion course in the Computer Engineering program that introduces students to real-world engineering environments by developing foundational professional and technical competencies. Students are exposed to the host organization’s structure, workflows, and operational practices while performing supervised entry-level technical tasks that apply fundamental engineering knowledge using industry tools and systems. The course emphasizes adherence to workplace standards, professional ethics, effective communication, teamwork, and accountability, alongside the preparation of technical documentation and reflective reports that link academic learning to industry experience. Through guided supervision and structured activities, students build essential skills and professional awareness necessary for more advanced responsibilities in subsequent internship terms.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">INTERN2</span>
                  <span class="font-extrabold text-xs text-slate-900">Internship 2</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">INTERN1</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                INTERN 2 (Intermediate Responsibility) is a full-time industry immersion course that focuses on the application of technical knowledge and the development of problem-solving skills in real-world engineering settings. Students undertake more complex tasks with reduced supervision, actively contributing to ongoing projects while integrating academic concepts into practical solutions. The course emphasizes analytical thinking, participation in technical discussions, use of industry-standard tools and methodologies, and collaboration within multidisciplinary teams. Students are expected to evaluate workplace practices, address technical challenges, and produce structured reports demonstrating their growing competence and professional development.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">INTERN3</span>
                  <span class="font-extrabold text-xs text-slate-900">Internship 3</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">INTERN2</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                INTERN 3 (Industry Synthesis) is a full-time industry immersion course that emphasizes independent technical contribution, professional integration, and the synthesis of industry experience. Students are expected to perform assigned responsibilities with minimal supervision, contribute to actual company projects or process improvements, and demonstrate sound decision-making in addressing engineering tasks and challenges. The course highlights the integration of technical competence, ethical responsibility, and workplace professionalism, culminating in the preparation of a comprehensive terminal report and formal presentation that articulate technical achievements, insights gained, and overall professional growth.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">USERINX</span>
                  <span class="font-extrabold text-xs text-slate-900">User Interface &amp; User Experience</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">NONE</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course introduces the LabVIEW environment, its features, dataflow programming, and common LabVIEW architectures. This course is the fastest way to become productive with LabVIEW. It prepares the student to develop test and measurement, data acquisition, instrument control, data logging and measurement analysis applications using LabVIEW. The hands-on format of the course enables student to quickly apply skills learned in the course to your application.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">DATMGTS</span>
                  <span class="font-extrabold text-xs text-slate-900">Database Management System</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">DATSTRC</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                The course introduces the concepts and definitions of databases, the database environment, database design, development, database security and implementation as well as data warehouses. Students will have practical and hands-on experience in SQL (structured-query-language), which is generally used in the development of database applications as well as management of databases.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">MOBCAPP</span>
                  <span class="font-extrabold text-xs text-slate-900">Mobile Code Technologies and Application</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">OBJPROG</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                The course will focus on the fundamental concepts and techniques of mobile programming, design and development related to mobile applications. This will includes mobile operating system, device capabilities and coding techniques using android technology.
              </p>
            </div>
          </div>
        </div>
        <div class="border border-slate-300 rounded-none overflow-hidden shadow-sm">
          <div class="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-2 font-black text-xs uppercase tracking-wider flex items-center justify-between">
            <span>TECHNICAL ELECTIVES</span>
            <span class="text-slate-300 text-[11px] font-normal">26 Courses</span>
          </div>
          <div class="divide-y divide-slate-200 p-4 bg-white space-y-3">
            
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CPECGS1</span>
                  <span class="font-extrabold text-xs text-slate-900">Web Development</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course covers ecommerce websites, content management systems (CMS) and social networks. Common web development programming languages and software include Hypertext Markup Language (HTML), Cascading Style Sheets (CSS), JavaScript, PHP, Drupal and MySQL.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CPECGS2</span>
                  <span class="font-extrabold text-xs text-slate-900">C# Programming</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">CPECGS1</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course covers programming language using C# as a software tool, in creating computer solutions and applications that can help solve engineering problems.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CPECGS3</span>
                  <span class="font-extrabold text-xs text-slate-900">Online Technology</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">CPECGS2</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                The course includes building and management of a data warehouse application in an online environment, with emphasis on data accessibility using different computing devices, from the desktop to mobile.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CPECGM1</span>
                  <span class="font-extrabold text-xs text-slate-900">Fundamentals of Machine Learning</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course will cover the fundamentals and techniques of machine learning using statistics, linear algebra anf optimatization. Topics include supervised (generative/discrimative, support vector machine, etc.) and unsupervised learning (clustering, dimensionality reduction, etc), and reinforcement learning and adaptive control.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CPECGM2</span>
                  <span class="font-extrabold text-xs text-slate-900">Data Analytics Programming (R/Python Programming)</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">CPECGM1</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                Introduces the fundamental concepts and techniques in R/Python programming. Topics include different variable R/Python parameters Math, Strings and its methods, conditional and looping statements, Python structures, R/Python Algorithms and libraries by developing applications.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CPECGM3</span>
                  <span class="font-extrabold text-xs text-slate-900">Artifcial Neural Networks</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">CPECGM3</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                The course will introduce neutral networks concepts and principles  using supervised learning, leinear models for regression, basic network structure, simple and motivation for deep networks. This will also include introduce to tensorflow, forward propagation, cost functions, error backpropagation, training by gradient descent, under/overfitting, convolutional and recurrent networks.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CPECGR1</span>
                  <span class="font-extrabold text-xs text-slate-900">Principles of Robotics System and Programming</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course is an introduction to the fundamental concepts, theories, and principles of Robotics. This also includes Introduction to Robotics dynamics, systems and control, basic engineering problems, coordinate transformations, link coordinates, arm equations, kinematics and inverse kinematics, trajectory planning, jacobian concepts, lagrange-euler and SCARA dynamic models, single and multiple joint controller for robots and computed torque control.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CPECGR2</span>
                  <span class="font-extrabold text-xs text-slate-900">Introduction to Mobile Robotics</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">CPECGR1</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course provides an introduction to the fundamentals of mobile robotics, examining the basic principles of locomotion, kinematics, sensing, perception, and cognition that are key to the development of autonomous mobile robots.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CPECGR3</span>
                  <span class="font-extrabold text-xs text-slate-900">Robot Vision</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">CPECGR2</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course will introduce the field of computer vision and the mathematics and algorithms that underpin it. This will also cover  interpreting images to determine the color, size, shape and position of objects in the scene.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">NON - TECHNICAL COURSES</span>
                  <span class="font-extrabold text-xs text-slate-900"></span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">SOCIAL SCIENCE</span>
                  <span class="font-extrabold text-xs text-slate-900"></span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">SCITECS</span>
                  <span class="font-extrabold text-xs text-slate-900">Science, Technology and Society</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                The course deals with interactions between science and technology and social, cultural, political, and economic contexts that shape and are shaped by them. (CMO No. 20, series of 2013). This interdisciplinary course engages students to confront the realities brought about by science and technology in society. Such realities pervade the personal, the public, and the global aspects of our living and are integral to human development. Scientific knowledge and technological development happen in the context of society with all its socio-political, cultural, economic, and philosophical underpinnings at play. This course seeks to instill reflective knowledge in the students that they are able to live the good life and display ethical decision making in the face of scientific and technological advancement. This course includes mandatory topics on climate change and environmental awareness.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">CONWORL</span>
                  <span class="font-extrabold text-xs text-slate-900">Contemporary World</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course introduces students to the contemporary world by examining the multifaceted phenomenon of globalization. Using the various disciplines of the social sciences, it examines the economic, social, political, technological, and other transformations that have created an increasing awareness of the interconnectedness of peoples and places around the globe. To this end, the course provides an overview of the various debates in global governance, development, and sustainability. Beyond exposing the student to the world outside the Philippines, it seeks to inculcate a sense of global citizenship and global ethical responsibility. This course includes mandatory topics on population education in the context of population and demography.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">UNDSELF</span>
                  <span class="font-extrabold text-xs text-slate-900">Understanding the Self</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                The course deals with the nature of identity, as well as the factors and forces that affect the development and maintenance of personal identity. The directive to Know Oneself has inspired countless and varied ways to comply. Among the questions that everyone has had to grapple with at one time or other is &#x27;Who am l?&quot; At no other period is this question asked more urgently than in adolescence— traditionally believed to be a time of vulnerability and great possibilities. Issues of self and identity are among the most critical for the young. This course is intended to facilitate the exploration of the issues and concerns regarding self and identity to arrive at a better understanding of one&#x27;s self. It strives to meet this goat by stressing the integration of the personal with the academic—contextualizing matters discussed in the classroom and in the everyday experiences of students—making for better learning, generating a new appreciation for the learning process, and developing a more critical and reflective attitude while enabling them to manage and improve their selves to attain a better quality of life. The course is divided into three major parts: The first part seeks to understand the construct of the self from various disciplinal perspectives: philosophy, sociology, anthropology, and psychology—as well as the more traditional division between the East and West—each seeking to provide answers to the difficult but essential question of &quot;What is the self?&quot; And raising, among others, the question: &quot;Is there even such a construct as the self?&quot;
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">GETHICS</span>
                  <span class="font-extrabold text-xs text-slate-900">Ethics</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                Ethics deals with principles of ethical behavior in modern society at the level of the person, society, and in interaction with the environment and other shared resources. (CMO 20 s 2013). Morality pertains to the standards of right and wrong that an individual originally picks up from the community. The course discusses the context and principles of ethical behavior in modern society at the level of individual, society, and in interaction with the environment and other shared resources. The course also teaches students to make moral decisions by using dominant moral frameworks and by applying a seven-step moral reasoning model to analyze and solve moral dilemmas.  The course is organized according to the three (3) main elements of the moral experience: (a) agent, including context — cultural, communal, and environmental; (b) the act; and (c) reason or framework (for the act).
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">PHILHIS</span>
                  <span class="font-extrabold text-xs text-slate-900">Philippine History</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                The course aims to expose students to different facets of Philippine history through the lens of eyewitnesses. Rather than rely on secondary materials such as textbooks, which is the usual approach in teaching Philippine history, different types of primary sources will be used — written (qualitative and quantitative), oral, visual, audio-visual digital — covering various aspects of Philippine life (political, economic, social, cultural). Students are expected to analyze the selected readings contextually and in terms of content (stated and implied). The end goal is to enable students to understand and appreciate our rich past by deriving insights from those who were actually present at the time of the event.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">ARTAPRE</span>
                  <span class="font-extrabold text-xs text-slate-900">Art Appreciation</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                Art Appreciation is a three-unit course that develops students&#x27; ability to appreciate, analyze, and critique works of art. Through interdisciplinary and multimodal approaches this course equips students with a broad knowledge of the practical, historical, philosophical, and social relevance of the arts in order to hone students&#x27; ability to articulate their understanding of the arts. The course also develops students&#x27; competency in researching and curating art as well as conceptualizing, mounting, and evaluating art productions. The course aims to develop students&#x27; genuine appreciation for Philippine arts by providing them opportunities to explore the diversity and richness and their rootedness in Filipino culture.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">PURPCOM</span>
                  <span class="font-extrabold text-xs text-slate-900">Purposive Communication</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                Purposive Communication is a three-unit course that develops students&#x27; communicative competence and enhances their cultural and intercultural awareness through multimodal tasks that provide them opportunities for communicating effectively and appropriately to a multicultural audience in a local or global context. It equips students with tools for critical evaluation of a variety of texts and focuses on the power of language and the impact of images to emphasize the importance of conveying messages responsibly. The knowledge, skills, and insights that students gain from this course may be used in their other academic endeavors, their chosen disciplines, and their future careers as they compose and produce relevant oral, written, audio-visual and/or web-based output for various purposes.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">MANDATED COURSE</span>
                  <span class="font-extrabold text-xs text-slate-900"></span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">RIZLIFE</span>
                  <span class="font-extrabold text-xs text-slate-900">Life and Works of Rizal</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                A comprehensive study and analysis of the life and literary works of Jose Rizal with an emphasis on its impact and relevance to the upliftment of present Philippine society.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">GEC ELECTIVES</span>
                  <span class="font-extrabold text-xs text-slate-900"></span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">EXCOMP1</span>
                  <span class="font-extrabold text-xs text-slate-900">Extensive Communication Competency Program 1</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                Topics covered in EXCOMP1 broadly include various social issues that are related to the students’ interests. However, a common theme will be observed in the process of instruction as deemed relevant to the student’s program. It primarily focuses on enhancing the students’ listening/observation, presentation, and critical thinking skills. This course prepares the students for their research-related courses as it aims at increasing their engagement in discussions about various social issues that are also potential research subject matter.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">EXCOMP2</span>
                  <span class="font-extrabold text-xs text-slate-900">Extensive Communication Competency Program 2</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                Topics covered in EXCOMP2 focus on Organizational Communication with lessons on Project Management Communication. The students’ program/discipline serves as the primary basis for the theme in the process of instruction. It primarily aims on enhancing the students’ ability to navigate through the various workplace scenarios that require critical communication skills. This course prepares the students for their internship and employment after graduation.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">PROFETH</span>
                  <span class="font-extrabold text-xs text-slate-900">Professional Ethics</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course focuses on the study of current ethical standards of business professionals. Participants engage in ethical and legal issues in a variety of settings that they may encounter in the course of their professional careers. Students examine ethical cases and present potential decisions according to ethical decision-making models.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">LANGUAGE COURSE</span>
                  <span class="font-extrabold text-xs text-slate-900"></span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">FORLANG</span>
                  <span class="font-extrabold text-xs text-slate-900">Foreign Language</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                This course will introduce the basic knowledge and skills of language of an identified country (e.g. Nihonngo, Mandarin, French, Spanish, etc.). The will focus on the beginning levels of fluency in communicating of a specific language.
              </p>
            </div>
          </div>
        </div>
        <div class="border border-slate-300 rounded-none overflow-hidden shadow-sm">
          <div class="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-2 font-black text-xs uppercase tracking-wider flex items-center justify-between">
            <span>PHYSICAL EDUCATION</span>
            <span class="text-slate-300 text-[11px] font-normal">4 Courses</span>
          </div>
          <div class="divide-y divide-slate-200 p-4 bg-white space-y-3">
            
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">PEDUONE</span>
                  <span class="font-extrabold text-xs text-slate-900">PE 1</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                A course exposing students to fundamental importance and application of physical fitness in 
skill execution as well as playing individual dual sports according to the rules.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">PEDUTWO</span>
                  <span class="font-extrabold text-xs text-slate-900">PE 2</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                A course exposing students to the rudiments of social ballroom dancing, folk dances, modern dances and recreational dances. Students express their feelings and emotions through movements disciplined by rhythm.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">PEDUTRI</span>
                  <span class="font-extrabold text-xs text-slate-900">PE 3</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                A course exposing students in playing team sports, in enhancing fundamental skills, and in 
basic rules of the  game.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">PEDUFOR</span>
                  <span class="font-extrabold text-xs text-slate-900">PE 4</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                A course exposing students to recreational activities  in the form of Bowling and /or Ice skating held in areas offering recreational and amusement facilities outside of the school premises.
              </p>
            </div>
          </div>
        </div>
        <div class="border border-slate-300 rounded-none overflow-hidden shadow-sm">
          <div class="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-2 font-black text-xs uppercase tracking-wider flex items-center justify-between">
            <span>NATIONAL SERVICE TRAINING PROGRAM</span>
            <span class="text-slate-300 text-[11px] font-normal">2 Courses</span>
          </div>
          <div class="divide-y divide-slate-200 p-4 bg-white space-y-3">
            
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">NATSER1</span>
                  <span class="font-extrabold text-xs text-slate-900">National Service 1</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">None</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                National Service aims to develop camaraderie and fellowship by participating in various socio/ economic/ political events and projects.
              </p>
            </div>
            <div class="pt-3 first:pt-0">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-black text-xs text-apc-blue bg-blue-50 px-2 py-0.5 rounded-none border border-blue-200">NATSER2</span>
                  <span class="font-extrabold text-xs text-slate-900">National Service 2</span>
                </div>
                <div class="text-[10.5px] font-medium text-slate-500">
                  <span class="font-bold text-slate-600">Pre-requisite:</span> <span class="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded-none">NATSER1</span>
                </div>
              </div>
              <p class="text-slate-700 text-[11px] leading-relaxed mt-1 text-justify">
                National Service aims to develop camaraderie and fellowship by participating in various socio/ economic/ political events and projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
  4: `
      <div class="text-center border-b-2 border-slate-900 pb-4 mb-6">
        <img src="assets/apc_seal.png" class="inline-block w-14 h-14 rounded-none object-contain mb-2 shadow-xs bg-white p-0.5 border border-slate-200" alt="Asia Pacific College Official Seal">
        <h1 class="font-black text-xl uppercase tracking-widest text-slate-900">ASIA PACIFIC COLLEGE</h1>
        <h2 class="font-bold text-sm text-slate-700 tracking-wider mt-0.5">School of Engineering</h2>
        <h3 class="font-extrabold text-base text-apc-navy mt-1">BS IN COMPUTER ENGINEERING (BS CpE) CURRICULUM</h3>
        <p class="text-xs font-mono text-slate-500 mt-0.5">(Curriculum Flowchart 2026 : 1-2026-CpE-A)</p>
      </div>

      <div class="space-y-6 text-xs">
        
        <div class="border border-slate-300 rounded-none overflow-hidden shadow-sm">
          <div class="bg-apc-blue text-white px-4 py-2 font-black text-xs uppercase tracking-wider">
            FIRST YEAR
          </div>
          <div class="p-4 bg-white space-y-6">
            
            <div>
              <div class="font-bold text-slate-800 text-xs uppercase border-b border-slate-200 pb-1 mb-2 flex justify-between">
                <span>First Term (Term 1)</span>
                <span class="font-mono text-slate-600 font-bold">Subtotal: 18 Units</span>
              </div>
              <table class="w-full text-left text-[11px] border border-slate-200">
                <thead class="bg-slate-100 text-slate-700">
                  <tr class="border-b border-slate-200">
                    <th class="p-2 font-bold w-32">Subject Code</th>
                    <th class="p-2 font-bold">Subject Title</th>
                    <th class="p-2 font-bold text-center w-16">Units</th>
                    <th class="p-2 font-bold w-64">Pre-requisites</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">CALCONE</td>
                  <td class="p-2 text-slate-800">Calculus 1</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">ENGCHEM/ENGCHLB</td>
                  <td class="p-2 text-slate-800">Chemistry for Engineers Lecture / 
Chemistry for Engineers Laboratory</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">4</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">CPEDISC</td>
                  <td class="p-2 text-slate-800">Computer Engineering as a Discipline</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">1</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">PROGLOD</td>
                  <td class="p-2 text-slate-800">Programming Logic and Design</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">2</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">GETHICS</td>
                  <td class="p-2 text-slate-800">Ethics</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">PEDUONE</td>
                  <td class="p-2 text-slate-800">Physical Education 1</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">2</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">NATSER1</td>
                  <td class="p-2 text-slate-800">NSTP 1</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                </tbody>
                <tfoot class="bg-slate-50 font-bold border-t border-slate-200">
                  <tr>
                    <td colspan="2" class="p-2 text-right text-slate-700">Subtotal Units:</td>
                    <td class="p-2 text-center font-mono text-apc-blue">18</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div>
              <div class="font-bold text-slate-800 text-xs uppercase border-b border-slate-200 pb-1 mb-2 flex justify-between">
                <span>Second Term (Term 2)</span>
                <span class="font-mono text-slate-600 font-bold">Subtotal: 17 Units</span>
              </div>
              <table class="w-full text-left text-[11px] border border-slate-200">
                <thead class="bg-slate-100 text-slate-700">
                  <tr class="border-b border-slate-200">
                    <th class="p-2 font-bold w-32">Subject Code</th>
                    <th class="p-2 font-bold">Subject Title</th>
                    <th class="p-2 font-bold text-center w-16">Units</th>
                    <th class="p-2 font-bold w-64">Pre-requisites</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">CALCTWO</td>
                  <td class="p-2 text-slate-800">Calculus 2</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Calculus 1</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">PHYENLC/LB</td>
                  <td class="p-2 text-slate-800">Physics for Engineers Lecture / 
Physics for Engineers Laboratory</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">4</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Calculus 1</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">OBJPROG</td>
                  <td class="p-2 text-slate-800">Object Oriented Programming</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">2</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Programming Logic and Design</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">PHILHIS</td>
                  <td class="p-2 text-slate-800">Readings in Philippine History</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">PEDUTWO</td>
                  <td class="p-2 text-slate-800">Physical Education 2</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">2</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Physical Education 1</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">NATSER2</td>
                  <td class="p-2 text-slate-800">NSTP 2</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">NSTP 1</td>
                </tr>
                </tbody>
                <tfoot class="bg-slate-50 font-bold border-t border-slate-200">
                  <tr>
                    <td colspan="2" class="p-2 text-right text-slate-700">Subtotal Units:</td>
                    <td class="p-2 text-center font-mono text-apc-blue">17</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div>
              <div class="font-bold text-slate-800 text-xs uppercase border-b border-slate-200 pb-1 mb-2 flex justify-between">
                <span>Third Term (Term 3)</span>
                <span class="font-mono text-slate-600 font-bold">Subtotal: 17 Units</span>
              </div>
              <table class="w-full text-left text-[11px] border border-slate-200">
                <thead class="bg-slate-100 text-slate-700">
                  <tr class="border-b border-slate-200">
                    <th class="p-2 font-bold w-32">Subject Code</th>
                    <th class="p-2 font-bold">Subject Title</th>
                    <th class="p-2 font-bold text-center w-16">Units</th>
                    <th class="p-2 font-bold w-64">Pre-requisites</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">ENGDATA</td>
                  <td class="p-2 text-slate-800">Engineering Data Analysis</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Calculus 1</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">ELECIRK / CRKTLAB</td>
                  <td class="p-2 text-slate-800">Fundamentals of Electrical Circuits Lecture / Fundamentals of Electrical Circuits Laboratory</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">4</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Physics for Engineers Lecture / 
Physics for Engineers Laboratory</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">ECONOMC</td>
                  <td class="p-2 text-slate-800">Engineering Economics</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">DATSTRC</td>
                  <td class="p-2 text-slate-800">Data Structures and Algorithms</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">2</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Object Oriented Programming</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">PEDUTRI</td>
                  <td class="p-2 text-slate-800">Physical Education 3</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">2</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Physical Education 2</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">DISCMAT</td>
                  <td class="p-2 text-slate-800">Discrete Mathematics</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Calculus 1</td>
                </tr>
                </tbody>
                <tfoot class="bg-slate-50 font-bold border-t border-slate-200">
                  <tr>
                    <td colspan="2" class="p-2 text-right text-slate-700">Subtotal Units:</td>
                    <td class="p-2 text-center font-mono text-apc-blue">17</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        <div class="border border-slate-300 rounded-none overflow-hidden shadow-sm">
          <div class="bg-apc-blue text-white px-4 py-2 font-black text-xs uppercase tracking-wider">
            SECOND YEAR
          </div>
          <div class="p-4 bg-white space-y-6">
            
            <div>
              <div class="font-bold text-slate-800 text-xs uppercase border-b border-slate-200 pb-1 mb-2 flex justify-between">
                <span>First Term (Term 4)</span>
                <span class="font-mono text-slate-600 font-bold">Subtotal: 17 Units</span>
              </div>
              <table class="w-full text-left text-[11px] border border-slate-200">
                <thead class="bg-slate-100 text-slate-700">
                  <tr class="border-b border-slate-200">
                    <th class="p-2 font-bold w-32">Subject Code</th>
                    <th class="p-2 font-bold">Subject Title</th>
                    <th class="p-2 font-bold text-center w-16">Units</th>
                    <th class="p-2 font-bold w-64">Pre-requisites</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">DIEQUAT</td>
                  <td class="p-2 text-slate-800">Differential Equations</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Calculus 2</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">ELEXCKT/ ELEXLAB</td>
                  <td class="p-2 text-slate-800">Fundamentals of Electronics Circuit Lecture / Fundamentals of Electronics Circuit Laboratory</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">4</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Fundamentals of Electrical Circuits Lecture / Fundamentals of Electrical Circuits Laboratory</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">USERINX</td>
                  <td class="p-2 text-slate-800">User Interface and User Experience</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">1</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">OPRSYST</td>
                  <td class="p-2 text-slate-800">Operating Systems</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Data Structures and Algorithms</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">MOBCAPP</td>
                  <td class="p-2 text-slate-800">Mobile Code Technology and Application</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">1</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Object Oriented Programming</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">RIZLIFE</td>
                  <td class="p-2 text-slate-800">Life and Works of Rizal</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">PEDUFOR</td>
                  <td class="p-2 text-slate-800">Physical Education 4</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">2</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Physical Education 3</td>
                </tr>
                </tbody>
                <tfoot class="bg-slate-50 font-bold border-t border-slate-200">
                  <tr>
                    <td colspan="2" class="p-2 text-right text-slate-700">Subtotal Units:</td>
                    <td class="p-2 text-center font-mono text-apc-blue">17</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div>
              <div class="font-bold text-slate-800 text-xs uppercase border-b border-slate-200 pb-1 mb-2 flex justify-between">
                <span>Second Term (Term 5)</span>
                <span class="font-mono text-slate-600 font-bold">Subtotal: 18 Units</span>
              </div>
              <table class="w-full text-left text-[11px] border border-slate-200">
                <thead class="bg-slate-100 text-slate-700">
                  <tr class="border-b border-slate-200">
                    <th class="p-2 font-bold w-32">Subject Code</th>
                    <th class="p-2 font-bold">Subject Title</th>
                    <th class="p-2 font-bold text-center w-16">Units</th>
                    <th class="p-2 font-bold w-64">Pre-requisites</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">NUMERCL</td>
                  <td class="p-2 text-slate-800">Numerical Methods</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Differential Equations</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">LOGCDES / LOGICLB</td>
                  <td class="p-2 text-slate-800">Logic Circuit and Design Lecture / 
Logic Circuit and Design Laboratory</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">4</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Fundamentals of Electronics Circuit Lecture / Fundamentals of Electronics Circuit Laboratory</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">PURPCOM</td>
                  <td class="p-2 text-slate-800">Purposive Communicaton</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">DATMGTS</td>
                  <td class="p-2 text-slate-800">Database Management System</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">1</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">MATWORL</td>
                  <td class="p-2 text-slate-800">Mathematics for the Modern World</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">ENGCADD</td>
                  <td class="p-2 text-slate-800">Computer Aided Drafting</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">1</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">2nd Year Standing</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">SCITECS</td>
                  <td class="p-2 text-slate-800">Science, Technology, and Society</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                </tbody>
                <tfoot class="bg-slate-50 font-bold border-t border-slate-200">
                  <tr>
                    <td colspan="2" class="p-2 text-right text-slate-700">Subtotal Units:</td>
                    <td class="p-2 text-center font-mono text-apc-blue">18</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div>
              <div class="font-bold text-slate-800 text-xs uppercase border-b border-slate-200 pb-1 mb-2 flex justify-between">
                <span>Third Term (Term 6)</span>
                <span class="font-mono text-slate-600 font-bold">Subtotal: 21 Units</span>
              </div>
              <table class="w-full text-left text-[11px] border border-slate-200">
                <thead class="bg-slate-100 text-slate-700">
                  <tr class="border-b border-slate-200">
                    <th class="p-2 font-bold w-32">Subject Code</th>
                    <th class="p-2 font-bold">Subject Title</th>
                    <th class="p-2 font-bold text-center w-16">Units</th>
                    <th class="p-2 font-bold w-64">Pre-requisites</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">FDCONTS</td>
                  <td class="p-2 text-slate-800">Feedback and Control Systems</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Numerical Methods; Fundamentals of Electrical Circuits</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">CPEDRAF</td>
                  <td class="p-2 text-slate-800">Computer Engineering Drafting and Design</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">1</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Fundamentals of Electronics Circuit Lecture / Fundamentals of Electronics Circuit Laboratory</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">MIXSIGS</td>
                  <td class="p-2 text-slate-800">Fundamentals of Mixed Signals and Sensors</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Fundamentals of Electronics Circuit Lecture / Fundamentals of Electronics Circuit Laboratory</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">EMICROS / MCROLAB</td>
                  <td class="p-2 text-slate-800">Microprocessors Lecture / 
Microprocessors Laboratory</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">4</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Logic Circuit and Design Lecture / 
Logic Circuit and Design Laboratory</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">SOFTDES/ SOFTLAB</td>
                  <td class="p-2 text-slate-800">Software Design Lecture / 
Software Design Laboratory</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">4</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Data Structures and Algorithms</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">UNDSELF</td>
                  <td class="p-2 text-slate-800">Understanding the Self</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">ARTAPRE</td>
                  <td class="p-2 text-slate-800">Art Appreciation</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                </tbody>
                <tfoot class="bg-slate-50 font-bold border-t border-slate-200">
                  <tr>
                    <td colspan="2" class="p-2 text-right text-slate-700">Subtotal Units:</td>
                    <td class="p-2 text-center font-mono text-apc-blue">21</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        <div class="border border-slate-300 rounded-none overflow-hidden shadow-sm">
          <div class="bg-apc-blue text-white px-4 py-2 font-black text-xs uppercase tracking-wider">
            THIRD YEAR
          </div>
          <div class="p-4 bg-white space-y-6">
            
            <div>
              <div class="font-bold text-slate-800 text-xs uppercase border-b border-slate-200 pb-1 mb-2 flex justify-between">
                <span>First Term (Term 7)</span>
                <span class="font-mono text-slate-600 font-bold">Subtotal: 20 Units</span>
              </div>
              <table class="w-full text-left text-[11px] border border-slate-200">
                <thead class="bg-slate-100 text-slate-700">
                  <tr class="border-b border-slate-200">
                    <th class="p-2 font-bold w-32">Subject Code</th>
                    <th class="p-2 font-bold">Subject Title</th>
                    <th class="p-2 font-bold text-center w-16">Units</th>
                    <th class="p-2 font-bold w-64">Pre-requisites</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">DIGSPRO / DIGSLAB</td>
                  <td class="p-2 text-slate-800">Digital Signal Processing Lecture / 
Digital Signal Processing Laboratory</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">4</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Feedback and Control Systems</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">DATCOMS</td>
                  <td class="p-2 text-slate-800">Data and Digital Communications</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Fundamentals of Electronics Circuit Lecture / Fundamentals of Electronics Circuit Laboratory</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">EMBEDDS / EMBEDLB</td>
                  <td class="p-2 text-slate-800">Embedded System Lecture / 
Embedded System Laboratory</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">4</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Microprocessors Lecture / 
Microprocessors Laboratory</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">CPEMETS</td>
                  <td class="p-2 text-slate-800">Methods of Research</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">2</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Engineering Data Analysis; Purposive Communicaton; Logic Circuit and Design Lecture / 
Logic Circuit and Design Laboratory</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">INTOHDL</td>
                  <td class="p-2 text-slate-800">Intro to HDL</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">1</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Programming Logic and Design; Fundamentals of Electronics Circuit Lecture / Fundamentals of Electronics Circuit Laboratory</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">EXCOMP1</td>
                  <td class="p-2 text-slate-800">Extensive Communicaion Competency Program 1</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">CPECGS1</td>
                  <td class="p-2 text-slate-800">Cognate 1</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                </tbody>
                <tfoot class="bg-slate-50 font-bold border-t border-slate-200">
                  <tr>
                    <td colspan="2" class="p-2 text-right text-slate-700">Subtotal Units:</td>
                    <td class="p-2 text-center font-mono text-apc-blue">20</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div>
              <div class="font-bold text-slate-800 text-xs uppercase border-b border-slate-200 pb-1 mb-2 flex justify-between">
                <span>Second Term (Term 8)</span>
                <span class="font-mono text-slate-600 font-bold">Subtotal: 21 Units</span>
              </div>
              <table class="w-full text-left text-[11px] border border-slate-200">
                <thead class="bg-slate-100 text-slate-700">
                  <tr class="border-b border-slate-200">
                    <th class="p-2 font-bold w-32">Subject Code</th>
                    <th class="p-2 font-bold">Subject Title</th>
                    <th class="p-2 font-bold text-center w-16">Units</th>
                    <th class="p-2 font-bold w-64">Pre-requisites</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">HEALTHS</td>
                  <td class="p-2 text-slate-800">Basic Occupational Health and Safety</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">3rd Year Standing</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">COMNETS / NETSLAB</td>
                  <td class="p-2 text-slate-800">Computer Networks and Security Lecture / Computer Networks and Security Laboratory</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">4</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Data and Digital Communicatoins</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">COMAROR / ARCORLB</td>
                  <td class="p-2 text-slate-800">Computer Architecture and Organization Lecture / Computer Architecture and Organization Laboratory</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">4</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Microprocessors Lecture / 
Microprocessors Laboratory</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">CPEDES1</td>
                  <td class="p-2 text-slate-800">CPE Practice and Design 1</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">1</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Methods of Research; Microprocessors Lecture / 
Microprocessors Laboratory</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">TECH101</td>
                  <td class="p-2 text-slate-800">Technopreneursip 101</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">EXCOMP2</td>
                  <td class="p-2 text-slate-800">Extensive Communicaion Competency Program 2</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">CPECGS2</td>
                  <td class="p-2 text-slate-800">Cognate 2</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Cognate 1</td>
                </tr>
                </tbody>
                <tfoot class="bg-slate-50 font-bold border-t border-slate-200">
                  <tr>
                    <td colspan="2" class="p-2 text-right text-slate-700">Subtotal Units:</td>
                    <td class="p-2 text-center font-mono text-apc-blue">21</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div>
              <div class="font-bold text-slate-800 text-xs uppercase border-b border-slate-200 pb-1 mb-2 flex justify-between">
                <span>Third Term (Term 9)</span>
                <span class="font-mono text-slate-600 font-bold">Subtotal: 17 Units</span>
              </div>
              <table class="w-full text-left text-[11px] border border-slate-200">
                <thead class="bg-slate-100 text-slate-700">
                  <tr class="border-b border-slate-200">
                    <th class="p-2 font-bold w-32">Subject Code</th>
                    <th class="p-2 font-bold">Subject Title</th>
                    <th class="p-2 font-bold text-center w-16">Units</th>
                    <th class="p-2 font-bold w-64">Pre-requisites</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">SEMSTRP</td>
                  <td class="p-2 text-slate-800">Seminars and Field Trips</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">1</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">4th Year Standing</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">CPELAWS</td>
                  <td class="p-2 text-slate-800">CPE Laws and Practice</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">2</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">3rd Year Standing</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">CPEDES2</td>
                  <td class="p-2 text-slate-800">CPE Practice and Design 2</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">2</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">CPE Practice and Design 1</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">EMERTEC</td>
                  <td class="p-2 text-slate-800">Emerging Technologies in CpE</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">4th Year Standing</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">CONWORL</td>
                  <td class="p-2 text-slate-800">The Contemporary World</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">PROFETH</td>
                  <td class="p-2 text-slate-800">Professional Ethics</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">None</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">CPECGS3</td>
                  <td class="p-2 text-slate-800">Cognate 3</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">3</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Cognate 2</td>
                </tr>
                </tbody>
                <tfoot class="bg-slate-50 font-bold border-t border-slate-200">
                  <tr>
                    <td colspan="2" class="p-2 text-right text-slate-700">Subtotal Units:</td>
                    <td class="p-2 text-center font-mono text-apc-blue">17</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        <div class="border border-slate-300 rounded-none overflow-hidden shadow-sm">
          <div class="bg-apc-blue text-white px-4 py-2 font-black text-xs uppercase tracking-wider">
            FOURTH YEAR
          </div>
          <div class="p-4 bg-white space-y-6">
            
            <div>
              <div class="font-bold text-slate-800 text-xs uppercase border-b border-slate-200 pb-1 mb-2 flex justify-between">
                <span>First Term (Term 10)</span>
                <span class="font-mono text-slate-600 font-bold">Subtotal: 6 Units</span>
              </div>
              <table class="w-full text-left text-[11px] border border-slate-200">
                <thead class="bg-slate-100 text-slate-700">
                  <tr class="border-b border-slate-200">
                    <th class="p-2 font-bold w-32">Subject Code</th>
                    <th class="p-2 font-bold">Subject Title</th>
                    <th class="p-2 font-bold text-center w-16">Units</th>
                    <th class="p-2 font-bold w-64">Pre-requisites</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">INTERN1</td>
                  <td class="p-2 text-slate-800">Internship 1: Foundational Professional Practice</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">6</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">No Academic Subjects Left</td>
                </tr>
                </tbody>
                <tfoot class="bg-slate-50 font-bold border-t border-slate-200">
                  <tr>
                    <td colspan="2" class="p-2 text-right text-slate-700">Subtotal Units:</td>
                    <td class="p-2 text-center font-mono text-apc-blue">6</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div>
              <div class="font-bold text-slate-800 text-xs uppercase border-b border-slate-200 pb-1 mb-2 flex justify-between">
                <span>Second Term (Term 11)</span>
                <span class="font-mono text-slate-600 font-bold">Subtotal: 6 Units</span>
              </div>
              <table class="w-full text-left text-[11px] border border-slate-200">
                <thead class="bg-slate-100 text-slate-700">
                  <tr class="border-b border-slate-200">
                    <th class="p-2 font-bold w-32">Subject Code</th>
                    <th class="p-2 font-bold">Subject Title</th>
                    <th class="p-2 font-bold text-center w-16">Units</th>
                    <th class="p-2 font-bold w-64">Pre-requisites</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">INTERN2</td>
                  <td class="p-2 text-slate-800">Internship 2: Intermediate Responsibility</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">6</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Internship 1</td>
                </tr>
                </tbody>
                <tfoot class="bg-slate-50 font-bold border-t border-slate-200">
                  <tr>
                    <td colspan="2" class="p-2 text-right text-slate-700">Subtotal Units:</td>
                    <td class="p-2 text-center font-mono text-apc-blue">6</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div>
              <div class="font-bold text-slate-800 text-xs uppercase border-b border-slate-200 pb-1 mb-2 flex justify-between">
                <span>Second Term (Term 12)</span>
                <span class="font-mono text-slate-600 font-bold">Subtotal: 6 Units</span>
              </div>
              <table class="w-full text-left text-[11px] border border-slate-200">
                <thead class="bg-slate-100 text-slate-700">
                  <tr class="border-b border-slate-200">
                    <th class="p-2 font-bold w-32">Subject Code</th>
                    <th class="p-2 font-bold">Subject Title</th>
                    <th class="p-2 font-bold text-center w-16">Units</th>
                    <th class="p-2 font-bold w-64">Pre-requisites</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  
                <tr class="hover:bg-slate-50">
                  <td class="p-2 font-mono font-bold text-slate-900">INTERN3</td>
                  <td class="p-2 text-slate-800">Internship 3: Industry Synthesis</td>
                  <td class="p-2 font-mono font-bold text-center text-slate-900">6</td>
                  <td class="p-2 font-mono text-slate-600 text-[11px]">Internship 2</td>
                </tr>
                </tbody>
                <tfoot class="bg-slate-50 font-bold border-t border-slate-200">
                  <tr>
                    <td colspan="2" class="p-2 text-right text-slate-700">Subtotal Units:</td>
                    <td class="p-2 text-center font-mono text-apc-blue">6</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    `,
  5: `
      <div class="border-b-2 border-slate-900 pb-3 mb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 class="font-black text-base uppercase tracking-wider text-slate-900">ASIA PACIFIC COLLEGE · SCHOOL OF ENGINEERING</h1>
          <h2 class="font-bold text-xs text-slate-800">Outcome-Based Education (OBE) Curriculum Mapping Matrix</h2>
          <p class="text-[11px] font-mono text-slate-500">BS Computer Engineering (BSCpE) · CHED CMO No. 87 / 92 Series</p>
        </div>
        <div class="flex items-center gap-3 text-xs bg-slate-100 px-3 py-1.5 rounded-none border border-slate-300">
          <span class="font-bold text-slate-700">Map Legend:</span>
          <span class="inline-flex items-center gap-1 font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-none text-[11px] border border-emerald-300">I = Introductory</span>
          <span class="inline-flex items-center gap-1 font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-none text-[11px] border border-amber-300">E = Enabling</span>
          <span class="inline-flex items-center gap-1 font-bold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded-none text-[11px] border border-indigo-300">D = Demonstrative</span>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-[11px] border border-slate-300">
          <thead class="bg-apc-navy text-white sticky top-0">
            <tr>
              <th class="p-1.5 font-bold border border-slate-400 w-16">Code</th>
              <th class="p-1.5 font-bold border border-slate-400">Course / Subject Title</th>
              <th class="p-1.5 font-bold border border-slate-400 text-center w-10">Units</th>
              <th class="p-1.5 font-bold border border-slate-400 text-center w-8 uppercase">SO-a</th><th class="p-1.5 font-bold border border-slate-400 text-center w-8 uppercase">SO-b</th><th class="p-1.5 font-bold border border-slate-400 text-center w-8 uppercase">SO-c</th><th class="p-1.5 font-bold border border-slate-400 text-center w-8 uppercase">SO-d</th><th class="p-1.5 font-bold border border-slate-400 text-center w-8 uppercase">SO-e</th><th class="p-1.5 font-bold border border-slate-400 text-center w-8 uppercase">SO-f</th><th class="p-1.5 font-bold border border-slate-400 text-center w-8 uppercase">SO-g</th><th class="p-1.5 font-bold border border-slate-400 text-center w-8 uppercase">SO-h</th><th class="p-1.5 font-bold border border-slate-400 text-center w-8 uppercase">SO-i</th><th class="p-1.5 font-bold border border-slate-400 text-center w-8 uppercase">SO-j</th><th class="p-1.5 font-bold border border-slate-400 text-center w-8 uppercase">SO-k</th><th class="p-1.5 font-bold border border-slate-400 text-center w-8 uppercase">SO-l</th><th class="p-1.5 font-bold border border-slate-400 text-center w-8 uppercase">SO-m</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 bg-white">
            
            <tr class="bg-slate-100 font-black text-slate-800 text-[11px]">
              <td colspan="16" class="p-1.5 border border-slate-300 uppercase tracking-wider">Mathematics</td>
            </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">M-01</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Calculus 1</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">M-02</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Calculus 2</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">M-03</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Engineering Data Analysis</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">M-04</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Differential Equations</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
            <tr class="bg-slate-100 font-black text-slate-800 text-[11px]">
              <td colspan="16" class="p-1.5 border border-slate-300 uppercase tracking-wider">Natural/Physical Sciences</td>
            </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">S-01</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Chemistry for Engineers Lecture</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-01</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Chemistry for Engineers Laboratory</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">S-02</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Physics for Engineers Lecture</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-02</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Physics for Engineers Laboratory</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
            <tr class="bg-slate-100 font-black text-slate-800 text-[11px]">
              <td colspan="16" class="p-1.5 border border-slate-300 uppercase tracking-wider">Basic Engineering Sciences</td>
            </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-03</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Computer-Aided Drafting</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">B-01</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Engineering Economics</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">B-02</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Technopreneurship 101</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td>
        </tr>
            <tr class="bg-slate-100 font-black text-slate-800 text-[11px]">
              <td colspan="16" class="p-1.5 border border-slate-300 uppercase tracking-wider">Allied Courses</td>
            </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">A-01</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Fundamental of Electrical Circuits Lecture</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-04</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Fundamental of Electrical Circuits Laboratory</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">A-02</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Fundamentals of Electronic Circuits Lecture</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-05</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Fundamentals of Electronic Circuits Laboratory</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
            <tr class="bg-slate-100 font-black text-slate-800 text-[11px]">
              <td colspan="16" class="p-1.5 border border-slate-300 uppercase tracking-wider">Professional Courses</td>
            </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-01</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Discrete Mathematics</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-02</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Numerical Methods</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-03</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Computer Engineering as a Discipline</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-04</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Fundamentals of Mixed Signals and Sensors</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-06</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Computer Engineering Drafting and Design</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-07</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Programming Logic and Design</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">2</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-08</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Data Structures and Algorithms</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">2</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-09</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Object Oriented Programming</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">2</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-05</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Software Design Lecture</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-10</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Software Design Laboratory</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-06</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Microprocessors Lecture</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-11</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Microprocessors Laboratory</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-07</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Logic Circuits and Design Lecture</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-12</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Logic Circuits and Design Laboratory</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-08</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Methods of Research</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">2</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-09</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Operating Systems</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-10</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Computer Architecture and Organization Lecture</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">2</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-13</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Computer Architecture and Organization Laboratory</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-11</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Data and Digital Communications</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-12</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Computer Networks and Security Lecture</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-14</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Computer Networks and Security Laboratory</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-13</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Embedded Systems Lecture</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-15</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Embedded Systems Laboratory</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-14</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Digital Signal Processing Lecture</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-16</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Digital Signal Processing Laboratory</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-15</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Feedback and Control Systems</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-17</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Introduction to HDL</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-18</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Seminars and Field Trips</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-16</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Basic Occupational Health and Safety</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-17</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">CpE Laws and Professional Practice</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">2</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-18</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Emerging Technologies in CpE (Robotics Process Automation)</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-19</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">CpE Practice and Design 1</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-20</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">CpE Practice and Design 2</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">2</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-21</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Internship 1</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">6</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-22</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Internship 2</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">6</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-23</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Internship 3</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">6</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-24</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">User Interface/User Experience</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-25</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Database Management System Laboratory</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">L-25</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Mobile Coding and Application Development</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">1</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-24</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">CPEGM1-Fundamentals of Machine Learning</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-25</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">CPECGM2- R Programming</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-26</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">CPECGM3- Neural Network</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-27</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">CPECGS1-Web Programming and Development</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-28</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">CPECGS2- Python/C# Programming</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-29</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">CPECGS3- Online Technology (Cloud Computing)</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-30</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">CPECGR1- Principles of Robotics</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-31</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">CPECGR3- Mobile Robotics Application</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">P-32</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">CPECGR3- Robot Vision</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-indigo-100 text-indigo-800 font-bold">D</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">G-01</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Science, Technology, and Society</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">G-02</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">The Contemporary World</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">G-03</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Readings in Philippine History</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">G-04</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Understanding the Self</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">G-05</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Art Appreciation</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">G-06</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Purposive Communication</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">G-07</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Mathematics in the Modern World</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">G-08</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Ethics</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">G-09</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">GE Elective 1: Extensive Communicaion Competency Program 1</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">G-10</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">GE Elective 2: Extensive Communicaion Competency Program 2</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-amber-100 text-amber-800 font-bold">E</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">G-11</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">GE Elective 3: Professional Ethics</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">G-12</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">Life. Works of Jose Rizal</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">G-13</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">P.E. 1</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">2</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">G-14</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">P.E. 2</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">2</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">G-15</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">P.E. 3</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">2</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">G-16</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">P.E. 4</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">2</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">G-17</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">NSTP 1</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-1.5 font-mono font-bold text-slate-900 border border-slate-200">G-18</td>
          <td class="p-1.5 text-slate-800 border border-slate-200">NSTP 2</td>
          <td class="p-1.5 font-mono font-bold text-center text-slate-900 border border-slate-200">3</td>
          <td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] bg-emerald-100 text-emerald-800 font-bold">I</td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td><td class="p-1 text-center border border-slate-200 font-mono text-[11px] text-slate-300 font-light"></td>
        </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-6 bg-slate-50 border border-slate-300 rounded-none p-4 text-[11px] text-slate-700">
        <h4 class="font-black text-slate-900 uppercase text-xs mb-2">Commission on Higher Education (CHED) & ABET Student Outcomes (SO a through m)</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div><b>(a)</b> Ability to apply knowledge of mathematics and science to solve complex engineering problems.</div>
          <div><b>(b)</b> Ability to design and conduct experiments, as well as to analyze and interpret data.</div>
          <div><b>(c)</b> Ability to design a system, component, or process to meet desired needs within realistic constraints.</div>
          <div><b>(d)</b> Ability to function effectively on multidisciplinary teams.</div>
          <div><b>(e)</b> Ability to identify, formulate, and solve complex engineering problems.</div>
          <div><b>(f)</b> Understanding of professional and ethical responsibility.</div>
          <div><b>(g)</b> Ability to communicate effectively in both oral and written forms.</div>
          <div><b>(h)</b> Broad education necessary to understand the impact of engineering solutions in global/societal contexts.</div>
          <div><b>(i)</b> Recognition of the need for, and ability to engage in life-long learning.</div>
          <div><b>(j)</b> Knowledge of contemporary issues.</div>
          <div><b>(k)</b> Ability to use techniques, skills, and modern engineering tools necessary for engineering practice.</div>
          <div><b>(l)</b> Knowledge and understanding of engineering and management principles as a member or leader in a team.</div>
          <div><b>(m)</b> Ability to participate in the generation of new knowledge or in research and development projects.</div>
        </div>
      </div>
    

      <!-- ================================================================= -->
      <!-- OFFICIAL I-E-D LEARNING PROGRESSION SUMMARY TABLES (TABLE 5.B)     -->
      <!-- ================================================================= -->
      <div id="obe-ied-summary-section" class="mt-8 pt-6 border-t-2 border-slate-900 space-y-6">
        
        <!-- Section Header -->
        <div class="flex flex-wrap items-center justify-between gap-4 bg-slate-50 p-4 rounded-none border border-slate-300">
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-none bg-apc-blue text-white text-[11px] font-mono font-bold">TABLE 5.B</span>
              <h3 class="font-black text-base text-slate-900">Summary of Learning Progression (I-E-D) Distribution</h3>
            </div>
            <p class="text-xs text-slate-600 mt-0.5">
              Comprehensive distribution analysis of <b>Introductory (I)</b>, <b>Enabling (E)</b>, and <b>Demonstrative (D)</b> stages across all 13 Student Outcomes (SO a–m) and Course Classifications.
            </p>
          </div>
          <div class="flex items-center gap-2 text-xs">
            <span class="px-3 py-1.5 rounded-none bg-emerald-100 text-emerald-900 font-bold border border-emerald-300 text-[11px] flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-none bg-emerald-500 inline-block"></span>
              <span>164 Introductory (I)</span>
            </span>
            <span class="px-3 py-1.5 rounded-none bg-amber-100 text-amber-900 font-bold border border-amber-300 text-[11px] flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-none bg-amber-500 inline-block"></span>
              <span>145 Enabling (E)</span>
            </span>
            <span class="px-3 py-1.5 rounded-none bg-indigo-100 text-indigo-900 font-bold border border-indigo-300 text-[11px] flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-none bg-indigo-500 inline-block"></span>
              <span>103 Demonstrative (D)</span>
            </span>
            <span class="px-3 py-1.5 rounded-none bg-slate-900 text-amber-300 font-black text-[11px] shadow">
              412 Total Touchpoints
            </span>
          </div>
        </div>

        <!-- KPI Summary Cards Row -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
          <div class="bg-white p-3.5 rounded-none border border-slate-300 shadow-sm">
            <div class="text-[11px] uppercase font-bold text-slate-500 tracking-wider">Curriculum Courses</div>
            <div class="text-2xl font-black text-slate-900 mt-1 font-mono">81</div>
            <div class="text-[11px] text-slate-500">Mapped across SO a–m</div>
          </div>
          <div class="bg-emerald-50/60 p-3.5 rounded-none border border-emerald-200 shadow-sm">
            <div class="text-[11px] uppercase font-bold text-emerald-800 tracking-wider">Introductory (I)</div>
            <div class="text-2xl font-black text-emerald-700 mt-1 font-mono">164</div>
            <div class="text-[11px] text-emerald-800 font-medium">39.8% of total mappings</div>
          </div>
          <div class="bg-amber-50/60 p-3.5 rounded-none border border-amber-200 shadow-sm">
            <div class="text-[11px] uppercase font-bold text-amber-800 tracking-wider">Enabling (E)</div>
            <div class="text-2xl font-black text-amber-700 mt-1 font-mono">145</div>
            <div class="text-[11px] text-amber-800 font-medium">35.2% of total mappings</div>
          </div>
          <div class="bg-indigo-50/60 p-3.5 rounded-none border border-indigo-200 shadow-sm">
            <div class="text-[11px] uppercase font-bold text-indigo-800 tracking-wider">Demonstrative (D)</div>
            <div class="text-2xl font-black text-indigo-700 mt-1 font-mono">103</div>
            <div class="text-[11px] text-indigo-800 font-medium">25.0% of total mappings</div>
          </div>
          <div class="bg-blue-50/60 p-3.5 rounded-none border border-blue-200 shadow-sm">
            <div class="text-[11px] uppercase font-bold text-blue-800 tracking-wider">Pipeline Health</div>
            <div class="text-2xl font-black text-blue-700 mt-1 font-mono">100%</div>
            <div class="text-[11px] text-blue-800 font-medium">All 13 SOs have I→E→D</div>
          </div>
        </div>

        <!-- TABLE 1: SUMMARY BY STUDENT OUTCOMES (SO a to m) -->
        <div class="bg-white rounded-none border border-slate-300 shadow-sm overflow-hidden">
          <div class="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between">
            <span class="font-extrabold text-xs tracking-wider uppercase">Table 1: Student Outcome (SO a–m) I-E-D Learning Progression Distribution</span>
            <span class="text-[11px] font-mono text-amber-300 font-semibold">CHED CMO No. 92, s. 2017 OBE Requirements</span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <thead class="bg-slate-100 text-slate-800 text-[11px] border-b border-slate-300">
                <tr>
                  <th class="p-2.5 border-r border-slate-300 text-center w-14 font-black">Outcome</th>
                  <th class="p-2.5 border-r border-slate-300 font-bold min-w-[260px]">Statement / Competency Descriptor</th>
                  <th class="p-2 border-r border-slate-300 text-center w-20 bg-emerald-50 text-emerald-900 font-bold">Intro (I)</th>
                  <th class="p-2 border-r border-slate-300 text-center w-20 bg-amber-50 text-amber-900 font-bold">Enabling (E)</th>
                  <th class="p-2 border-r border-slate-300 text-center w-20 bg-indigo-50 text-indigo-900 font-bold">Demo (D)</th>
                  <th class="p-2 border-r border-slate-300 text-center w-24 font-black bg-slate-200">Total Courses</th>
                  <th class="p-2.5 border-r border-slate-300 text-center min-w-[180px] font-bold">Progression Ratio (I : E : D)</th>
                  <th class="p-2.5 text-center w-36 font-bold">Accreditation Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 font-sans">
                
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-2 text-center font-black text-slate-900 font-mono border-r border-slate-200 bg-slate-50">SO-A</td>
                  <td class="p-2 border-r border-slate-200">
                    <span class="font-bold text-slate-900 block">Engineering Knowledge</span>
                    <span class="text-[11px] text-slate-500">Apply knowledge of mathematics and science to solve complex engineering problems.</span>
                  </td>
                  <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">26 <span class="text-[11px] text-slate-400 font-normal">(48%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-amber-700 bg-amber-50/40 border-r border-slate-200">19 <span class="text-[11px] text-slate-400 font-normal">(35%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-indigo-700 bg-indigo-50/40 border-r border-slate-200">9 <span class="text-[11px] text-slate-400 font-normal">(17%)</span></td>
                  <td class="p-2 text-center font-mono font-black text-slate-900 bg-slate-100/70 border-r border-slate-200">54</td>
                  <td class="p-2 border-r border-slate-200">
                    <div class="w-full bg-slate-200 h-2.5 rounded-none overflow-hidden flex">
                      <div class="bg-emerald-500 h-full" style="width: 48.1%"></div>
                      <div class="bg-amber-500 h-full" style="width: 35.2%"></div>
                      <div class="bg-indigo-600 h-full" style="width: 16.7%"></div>
                    </div>
                  </td>
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-none text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">✓ Complete Pathway</span></td>
                </tr>

                <tr class="hover:bg-slate-50 transition">
                  <td class="p-2 text-center font-black text-slate-900 font-mono border-r border-slate-200 bg-slate-50">SO-B</td>
                  <td class="p-2 border-r border-slate-200">
                    <span class="font-bold text-slate-900 block">Experimental Inquiry</span>
                    <span class="text-[11px] text-slate-500">Design and conduct experiments, as well as analyze and interpret data.</span>
                  </td>
                  <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">17 <span class="text-[11px] text-slate-400 font-normal">(41%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-amber-700 bg-amber-50/40 border-r border-slate-200">14 <span class="text-[11px] text-slate-400 font-normal">(33%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-indigo-700 bg-indigo-50/40 border-r border-slate-200">11 <span class="text-[11px] text-slate-400 font-normal">(26%)</span></td>
                  <td class="p-2 text-center font-mono font-black text-slate-900 bg-slate-100/70 border-r border-slate-200">42</td>
                  <td class="p-2 border-r border-slate-200">
                    <div class="w-full bg-slate-200 h-2.5 rounded-none overflow-hidden flex">
                      <div class="bg-emerald-500 h-full" style="width: 40.5%"></div>
                      <div class="bg-amber-500 h-full" style="width: 33.3%"></div>
                      <div class="bg-indigo-600 h-full" style="width: 26.2%"></div>
                    </div>
                  </td>
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-none text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">✓ Complete Pathway</span></td>
                </tr>

                <tr class="hover:bg-slate-50 transition">
                  <td class="p-2 text-center font-black text-slate-900 font-mono border-r border-slate-200 bg-slate-50">SO-C</td>
                  <td class="p-2 border-r border-slate-200">
                    <span class="font-bold text-slate-900 block">Engineering Design</span>
                    <span class="text-[11px] text-slate-500">Design systems, components, or processes within realistic economic & societal constraints.</span>
                  </td>
                  <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">22 <span class="text-[11px] text-slate-400 font-normal">(48%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-amber-700 bg-amber-50/40 border-r border-slate-200">13 <span class="text-[11px] text-slate-400 font-normal">(28%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-indigo-700 bg-indigo-50/40 border-r border-slate-200">11 <span class="text-[11px] text-slate-400 font-normal">(24%)</span></td>
                  <td class="p-2 text-center font-mono font-black text-slate-900 bg-slate-100/70 border-r border-slate-200">46</td>
                  <td class="p-2 border-r border-slate-200">
                    <div class="w-full bg-slate-200 h-2.5 rounded-none overflow-hidden flex">
                      <div class="bg-emerald-500 h-full" style="width: 47.8%"></div>
                      <div class="bg-amber-500 h-full" style="width: 28.3%"></div>
                      <div class="bg-indigo-600 h-full" style="width: 23.9%"></div>
                    </div>
                  </td>
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-none text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">✓ Complete Pathway</span></td>
                </tr>

                <tr class="hover:bg-slate-50 transition">
                  <td class="p-2 text-center font-black text-slate-900 font-mono border-r border-slate-200 bg-slate-50">SO-D</td>
                  <td class="p-2 border-r border-slate-200">
                    <span class="font-bold text-slate-900 block">Multidisciplinary Teamwork</span>
                    <span class="text-[11px] text-slate-500">Function effectively as an individual and as a member or leader in diverse teams.</span>
                  </td>
                  <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">15 <span class="text-[11px] text-slate-400 font-normal">(44%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-amber-700 bg-amber-50/40 border-r border-slate-200">8 <span class="text-[11px] text-slate-400 font-normal">(24%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-indigo-700 bg-indigo-50/40 border-r border-slate-200">11 <span class="text-[11px] text-slate-400 font-normal">(32%)</span></td>
                  <td class="p-2 text-center font-mono font-black text-slate-900 bg-slate-100/70 border-r border-slate-200">34</td>
                  <td class="p-2 border-r border-slate-200">
                    <div class="w-full bg-slate-200 h-2.5 rounded-none overflow-hidden flex">
                      <div class="bg-emerald-500 h-full" style="width: 44.1%"></div>
                      <div class="bg-amber-500 h-full" style="width: 23.5%"></div>
                      <div class="bg-indigo-600 h-full" style="width: 32.4%"></div>
                    </div>
                  </td>
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-none text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">✓ Complete Pathway</span></td>
                </tr>

                <tr class="hover:bg-slate-50 transition">
                  <td class="p-2 text-center font-black text-slate-900 font-mono border-r border-slate-200 bg-slate-50">SO-E</td>
                  <td class="p-2 border-r border-slate-200">
                    <span class="font-bold text-slate-900 block">Problem Analysis</span>
                    <span class="text-[11px] text-slate-500">Identify, formulate, research literature, and solve complex engineering problems.</span>
                  </td>
                  <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">18 <span class="text-[11px] text-slate-400 font-normal">(47%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-amber-700 bg-amber-50/40 border-r border-slate-200">13 <span class="text-[11px] text-slate-400 font-normal">(34%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-indigo-700 bg-indigo-50/40 border-r border-slate-200">7 <span class="text-[11px] text-slate-400 font-normal">(18%)</span></td>
                  <td class="p-2 text-center font-mono font-black text-slate-900 bg-slate-100/70 border-r border-slate-200">38</td>
                  <td class="p-2 border-r border-slate-200">
                    <div class="w-full bg-slate-200 h-2.5 rounded-none overflow-hidden flex">
                      <div class="bg-emerald-500 h-full" style="width: 47.4%"></div>
                      <div class="bg-amber-500 h-full" style="width: 34.2%"></div>
                      <div class="bg-indigo-600 h-full" style="width: 18.4%"></div>
                    </div>
                  </td>
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-none text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">✓ Complete Pathway</span></td>
                </tr>

                <tr class="hover:bg-slate-50 transition">
                  <td class="p-2 text-center font-black text-slate-900 font-mono border-r border-slate-200 bg-slate-50">SO-F</td>
                  <td class="p-2 border-r border-slate-200">
                    <span class="font-bold text-slate-900 block">Ethics & Responsibility</span>
                    <span class="text-[11px] text-slate-500">Understand professional, ethical, legal, security, and societal responsibilities.</span>
                  </td>
                  <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">12 <span class="text-[11px] text-slate-400 font-normal">(44%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-amber-700 bg-amber-50/40 border-r border-slate-200">10 <span class="text-[11px] text-slate-400 font-normal">(37%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-indigo-700 bg-indigo-50/40 border-r border-slate-200">5 <span class="text-[11px] text-slate-400 font-normal">(19%)</span></td>
                  <td class="p-2 text-center font-mono font-black text-slate-900 bg-slate-100/70 border-r border-slate-200">27</td>
                  <td class="p-2 border-r border-slate-200">
                    <div class="w-full bg-slate-200 h-2.5 rounded-none overflow-hidden flex">
                      <div class="bg-emerald-500 h-full" style="width: 44.4%"></div>
                      <div class="bg-amber-500 h-full" style="width: 37.0%"></div>
                      <div class="bg-indigo-600 h-full" style="width: 18.5%"></div>
                    </div>
                  </td>
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-none text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">✓ Complete Pathway</span></td>
                </tr>

                <tr class="hover:bg-slate-50 transition">
                  <td class="p-2 text-center font-black text-slate-900 font-mono border-r border-slate-200 bg-slate-50">SO-G</td>
                  <td class="p-2 border-r border-slate-200">
                    <span class="font-bold text-slate-900 block">Communication Skills</span>
                    <span class="text-[11px] text-slate-500">Communicate effectively on complex engineering activities in oral and written formats.</span>
                  </td>
                  <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">4 <span class="text-[11px] text-slate-400 font-normal">(15%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-amber-700 bg-amber-50/40 border-r border-slate-200">14 <span class="text-[11px] text-slate-400 font-normal">(54%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-indigo-700 bg-indigo-50/40 border-r border-slate-200">8 <span class="text-[11px] text-slate-400 font-normal">(31%)</span></td>
                  <td class="p-2 text-center font-mono font-black text-slate-900 bg-slate-100/70 border-r border-slate-200">26</td>
                  <td class="p-2 border-r border-slate-200">
                    <div class="w-full bg-slate-200 h-2.5 rounded-none overflow-hidden flex">
                      <div class="bg-emerald-500 h-full" style="width: 15.4%"></div>
                      <div class="bg-amber-500 h-full" style="width: 53.8%"></div>
                      <div class="bg-indigo-600 h-full" style="width: 30.8%"></div>
                    </div>
                  </td>
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-none text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">✓ Complete Pathway</span></td>
                </tr>

                <tr class="hover:bg-slate-50 transition">
                  <td class="p-2 text-center font-black text-slate-900 font-mono border-r border-slate-200 bg-slate-50">SO-H</td>
                  <td class="p-2 border-r border-slate-200">
                    <span class="font-bold text-slate-900 block">Impact & Sustainability</span>
                    <span class="text-[11px] text-slate-500">Broad education to understand solutions in societal, environmental, and global contexts.</span>
                  </td>
                  <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">14 <span class="text-[11px] text-slate-400 font-normal">(52%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-amber-700 bg-amber-50/40 border-r border-slate-200">7 <span class="text-[11px] text-slate-400 font-normal">(26%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-indigo-700 bg-indigo-50/40 border-r border-slate-200">6 <span class="text-[11px] text-slate-400 font-normal">(22%)</span></td>
                  <td class="p-2 text-center font-mono font-black text-slate-900 bg-slate-100/70 border-r border-slate-200">27</td>
                  <td class="p-2 border-r border-slate-200">
                    <div class="w-full bg-slate-200 h-2.5 rounded-none overflow-hidden flex">
                      <div class="bg-emerald-500 h-full" style="width: 51.9%"></div>
                      <div class="bg-amber-500 h-full" style="width: 25.9%"></div>
                      <div class="bg-indigo-600 h-full" style="width: 22.2%"></div>
                    </div>
                  </td>
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-none text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">✓ Complete Pathway</span></td>
                </tr>

                <tr class="hover:bg-slate-50 transition">
                  <td class="p-2 text-center font-black text-slate-900 font-mono border-r border-slate-200 bg-slate-50">SO-I</td>
                  <td class="p-2 border-r border-slate-200">
                    <span class="font-bold text-slate-900 block">Lifelong Learning</span>
                    <span class="text-[11px] text-slate-500">Recognition of the need for, and ability to engage in independent and lifelong learning.</span>
                  </td>
                  <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">5 <span class="text-[11px] text-slate-400 font-normal">(33%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-amber-700 bg-amber-50/40 border-r border-slate-200">4 <span class="text-[11px] text-slate-400 font-normal">(27%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-indigo-700 bg-indigo-50/40 border-r border-slate-200">6 <span class="text-[11px] text-slate-400 font-normal">(40%)</span></td>
                  <td class="p-2 text-center font-mono font-black text-slate-900 bg-slate-100/70 border-r border-slate-200">15</td>
                  <td class="p-2 border-r border-slate-200">
                    <div class="w-full bg-slate-200 h-2.5 rounded-none overflow-hidden flex">
                      <div class="bg-emerald-500 h-full" style="width: 33.3%"></div>
                      <div class="bg-amber-500 h-full" style="width: 26.7%"></div>
                      <div class="bg-indigo-600 h-full" style="width: 40.0%"></div>
                    </div>
                  </td>
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-none text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">✓ Complete Pathway</span></td>
                </tr>

                <tr class="hover:bg-slate-50 transition">
                  <td class="p-2 text-center font-black text-slate-900 font-mono border-r border-slate-200 bg-slate-50">SO-J</td>
                  <td class="p-2 border-r border-slate-200">
                    <span class="font-bold text-slate-900 block">Contemporary Issues</span>
                    <span class="text-[11px] text-slate-500">Knowledge of contemporary issues, emerging technologies, and industrial breakthroughs.</span>
                  </td>
                  <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">11 <span class="text-[11px] text-slate-400 font-normal">(50%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-amber-700 bg-amber-50/40 border-r border-slate-200">5 <span class="text-[11px] text-slate-400 font-normal">(23%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-indigo-700 bg-indigo-50/40 border-r border-slate-200">6 <span class="text-[11px] text-slate-400 font-normal">(27%)</span></td>
                  <td class="p-2 text-center font-mono font-black text-slate-900 bg-slate-100/70 border-r border-slate-200">22</td>
                  <td class="p-2 border-r border-slate-200">
                    <div class="w-full bg-slate-200 h-2.5 rounded-none overflow-hidden flex">
                      <div class="bg-emerald-500 h-full" style="width: 50.0%"></div>
                      <div class="bg-amber-500 h-full" style="width: 22.7%"></div>
                      <div class="bg-indigo-600 h-full" style="width: 27.3%"></div>
                    </div>
                  </td>
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-none text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">✓ Complete Pathway</span></td>
                </tr>

                <tr class="hover:bg-slate-50 transition">
                  <td class="p-2 text-center font-black text-slate-900 font-mono border-r border-slate-200 bg-slate-50">SO-K</td>
                  <td class="p-2 border-r border-slate-200">
                    <span class="font-bold text-slate-900 block">Modern Tool Usage</span>
                    <span class="text-[11px] text-slate-500">Create, select, and apply modern engineering, IT, and software tools to practice.</span>
                  </td>
                  <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">7 <span class="text-[11px] text-slate-400 font-normal">(18%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-amber-700 bg-amber-50/40 border-r border-slate-200">23 <span class="text-[11px] text-slate-400 font-normal">(61%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-indigo-700 bg-indigo-50/40 border-r border-slate-200">8 <span class="text-[11px] text-slate-400 font-normal">(21%)</span></td>
                  <td class="p-2 text-center font-mono font-black text-slate-900 bg-slate-100/70 border-r border-slate-200">38</td>
                  <td class="p-2 border-r border-slate-200">
                    <div class="w-full bg-slate-200 h-2.5 rounded-none overflow-hidden flex">
                      <div class="bg-emerald-500 h-full" style="width: 18.4%"></div>
                      <div class="bg-amber-500 h-full" style="width: 60.5%"></div>
                      <div class="bg-indigo-600 h-full" style="width: 21.1%"></div>
                    </div>
                  </td>
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-none text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">✓ Complete Pathway</span></td>
                </tr>

                <tr class="hover:bg-slate-50 transition">
                  <td class="p-2 text-center font-black text-slate-900 font-mono border-r border-slate-200 bg-slate-50">SO-L</td>
                  <td class="p-2 border-r border-slate-200">
                    <span class="font-bold text-slate-900 block">Project Management</span>
                    <span class="text-[11px] text-slate-500">Demonstrate engineering and management principles as a member or leader in a team.</span>
                  </td>
                  <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">2 <span class="text-[11px] text-slate-400 font-normal">(17%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-amber-700 bg-amber-50/40 border-r border-slate-200">5 <span class="text-[11px] text-slate-400 font-normal">(42%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-indigo-700 bg-indigo-50/40 border-r border-slate-200">5 <span class="text-[11px] text-slate-400 font-normal">(42%)</span></td>
                  <td class="p-2 text-center font-mono font-black text-slate-900 bg-slate-100/70 border-r border-slate-200">12</td>
                  <td class="p-2 border-r border-slate-200">
                    <div class="w-full bg-slate-200 h-2.5 rounded-none overflow-hidden flex">
                      <div class="bg-emerald-500 h-full" style="width: 16.7%"></div>
                      <div class="bg-amber-500 h-full" style="width: 41.7%"></div>
                      <div class="bg-indigo-600 h-full" style="width: 41.7%"></div>
                    </div>
                  </td>
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-none text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">✓ Complete Pathway</span></td>
                </tr>

                <tr class="hover:bg-slate-50 transition">
                  <td class="p-2 text-center font-black text-slate-900 font-mono border-r border-slate-200 bg-slate-50">SO-M</td>
                  <td class="p-2 border-r border-slate-200">
                    <span class="font-bold text-slate-900 block">Specialized CpE / R&D</span>
                    <span class="text-[11px] text-slate-500">Participate in research and development and generate new computer engineering knowledge.</span>
                  </td>
                  <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">11 <span class="text-[11px] text-slate-400 font-normal">(35%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-amber-700 bg-amber-50/40 border-r border-slate-200">10 <span class="text-[11px] text-slate-400 font-normal">(32%)</span></td>
                  <td class="p-2 text-center font-mono font-bold text-indigo-700 bg-indigo-50/40 border-r border-slate-200">10 <span class="text-[11px] text-slate-400 font-normal">(32%)</span></td>
                  <td class="p-2 text-center font-mono font-black text-slate-900 bg-slate-100/70 border-r border-slate-200">31</td>
                  <td class="p-2 border-r border-slate-200">
                    <div class="w-full bg-slate-200 h-2.5 rounded-none overflow-hidden flex">
                      <div class="bg-emerald-500 h-full" style="width: 35.5%"></div>
                      <div class="bg-amber-500 h-full" style="width: 32.3%"></div>
                      <div class="bg-indigo-600 h-full" style="width: 32.3%"></div>
                    </div>
                  </td>
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-none text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">✓ Complete Pathway</span></td>
                </tr>

              </tbody>
              <tfoot class="bg-slate-900 text-white font-bold text-xs border-t-2 border-slate-900">
                <tr>
                  <td colspan="2" class="p-2.5 text-right uppercase tracking-wider font-mono">Curriculum Total Touchpoints</td>
                  <td class="p-2.5 text-center font-mono text-emerald-400 font-black border-r border-slate-700">164</td>
                  <td class="p-2.5 text-center font-mono text-amber-300 font-black border-r border-slate-700">145</td>
                  <td class="p-2.5 text-center font-mono text-indigo-300 font-black border-r border-slate-700">103</td>
                  <td class="p-2.5 text-center font-mono text-white text-sm font-black bg-slate-800 border-r border-slate-700">412</td>
                  <td class="p-2.5 text-center font-mono text-[11px] text-slate-300 border-r border-slate-700">39.8% (I) · 35.2% (E) · 25.0% (D)</td>
                  <td class="p-2.5 text-center text-emerald-400 font-bold">100% ABET/PTC Compliant</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <!-- TABLE 2: SUMMARY BY COURSE CLASSIFICATION & TABLE 3: CROSS-TABULATION -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <!-- Classification Summary -->
          <div class="bg-white rounded-none border border-slate-300 shadow-sm overflow-hidden">
            <div class="bg-slate-800 text-white px-4 py-2 flex items-center justify-between">
              <span class="font-bold text-xs tracking-wider uppercase">Table 2: Academic Classification I-E-D Summary</span>
              <span class="text-[11px] font-mono text-slate-400">81 Courses Mapped</span>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-slate-100 text-slate-700 text-[11px] border-b border-slate-300">
                  <tr>
                    <th class="p-2 border-r border-slate-300 font-bold">Classification</th>
                    <th class="p-2 border-r border-slate-300 text-center w-14">Courses</th>
                    <th class="p-2 border-r border-slate-300 text-center w-12 bg-emerald-50 text-emerald-900 font-bold">I</th>
                    <th class="p-2 border-r border-slate-300 text-center w-12 bg-amber-50 text-amber-900 font-bold">E</th>
                    <th class="p-2 border-r border-slate-300 text-center w-12 bg-indigo-50 text-indigo-900 font-bold">D</th>
                    <th class="p-2 text-center w-16 bg-slate-200 font-black">Total</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200">
                  <tr class="hover:bg-slate-50">
                    <td class="p-2 font-medium text-slate-900 border-r border-slate-200">Mathematics</td>
                    <td class="p-2 text-center font-mono border-r border-slate-200">4</td>
                    <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">12</td>
                    <td class="p-2 text-center font-mono text-slate-400 border-r border-slate-200">0</td>
                    <td class="p-2 text-center font-mono text-slate-400 border-r border-slate-200">0</td>
                    <td class="p-2 text-center font-mono font-bold bg-slate-50">12</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-2 font-medium text-slate-900 border-r border-slate-200">Natural / Physical Sciences</td>
                    <td class="p-2 text-center font-mono border-r border-slate-200">4</td>
                    <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">14</td>
                    <td class="p-2 text-center font-mono text-slate-400 border-r border-slate-200">0</td>
                    <td class="p-2 text-center font-mono text-slate-400 border-r border-slate-200">0</td>
                    <td class="p-2 text-center font-mono font-bold bg-slate-50">14</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-2 font-medium text-slate-900 border-r border-slate-200">Basic Engineering Sciences</td>
                    <td class="p-2 text-center font-mono border-r border-slate-200">3</td>
                    <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">7</td>
                    <td class="p-2 text-center font-mono font-bold text-amber-700 bg-amber-50/40 border-r border-slate-200">8</td>
                    <td class="p-2 text-center font-mono text-slate-400 border-r border-slate-200">0</td>
                    <td class="p-2 text-center font-mono font-bold bg-slate-50">15</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-2 font-medium text-slate-900 border-r border-slate-200">Allied Courses</td>
                    <td class="p-2 text-center font-mono border-r border-slate-200">4</td>
                    <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">17</td>
                    <td class="p-2 text-center font-mono text-slate-400 border-r border-slate-200">0</td>
                    <td class="p-2 text-center font-mono text-slate-400 border-r border-slate-200">0</td>
                    <td class="p-2 text-center font-mono font-bold bg-slate-50">17</td>
                  </tr>
                  <tr class="hover:bg-slate-50 bg-blue-50/20">
                    <td class="p-2 font-bold text-apc-blue border-r border-slate-200">Professional Courses (Core Engine)</td>
                    <td class="p-2 text-center font-mono font-bold border-r border-slate-200">48</td>
                    <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">87</td>
                    <td class="p-2 text-center font-mono font-bold text-amber-700 bg-amber-50/40 border-r border-slate-200">134</td>
                    <td class="p-2 text-center font-mono font-bold text-indigo-700 bg-indigo-50/40 border-r border-slate-200">103</td>
                    <td class="p-2 text-center font-mono font-black bg-blue-100/60 text-apc-blue">324</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-2 font-medium text-slate-900 border-r border-slate-200">General Education / Mandated</td>
                    <td class="p-2 text-center font-mono border-r border-slate-200">18</td>
                    <td class="p-2 text-center font-mono font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">27</td>
                    <td class="p-2 text-center font-mono font-bold text-amber-700 bg-amber-50/40 border-r border-slate-200">3</td>
                    <td class="p-2 text-center font-mono text-slate-400 border-r border-slate-200">0</td>
                    <td class="p-2 text-center font-mono font-bold bg-slate-50">30</td>
                  </tr>
                </tbody>
                <tfoot class="bg-slate-100 font-bold border-t-2 border-slate-300 text-xs">
                  <tr>
                    <td class="p-2 border-r border-slate-300">Total Curriculum</td>
                    <td class="p-2 text-center font-mono border-r border-slate-300">81</td>
                    <td class="p-2 text-center font-mono text-emerald-700 border-r border-slate-300">164</td>
                    <td class="p-2 text-center font-mono text-amber-700 border-r border-slate-300">145</td>
                    <td class="p-2 text-center font-mono text-indigo-700 border-r border-slate-300">103</td>
                    <td class="p-2 text-center font-mono font-black bg-slate-200 text-slate-900">412</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <!-- Cross-Tabulation Matrix -->
          <div class="bg-white rounded-none border border-slate-300 shadow-sm overflow-hidden">
            <div class="bg-slate-800 text-white px-4 py-2 flex items-center justify-between">
              <span class="font-bold text-xs tracking-wider uppercase">Table 3: Category × Outcome Breakdown</span>
              <span class="text-[11px] font-mono text-slate-400">Values shown as (I / E / D)</span>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-[11px] border-collapse font-mono">
                <thead class="bg-slate-100 text-slate-800 text-[8.5px] border-b border-slate-300">
                  <tr>
                    <th class="p-1 border-r border-slate-300">Cat</th>
                    <th class="p-1 border-r border-slate-300 text-center">SO-A</th>
                    <th class="p-1 border-r border-slate-300 text-center">SO-B</th>
                    <th class="p-1 border-r border-slate-300 text-center">SO-C</th>
                    <th class="p-1 border-r border-slate-300 text-center">SO-D</th>
                    <th class="p-1 border-r border-slate-300 text-center">SO-E</th>
                    <th class="p-1 border-r border-slate-300 text-center">SO-F</th>
                    <th class="p-1 border-r border-slate-300 text-center">SO-G</th>
                    <th class="p-1 border-r border-slate-300 text-center">SO-H</th>
                    <th class="p-1 border-r border-slate-300 text-center">SO-I</th>
                    <th class="p-1 border-r border-slate-300 text-center">SO-J</th>
                    <th class="p-1 border-r border-slate-300 text-center">SO-K</th>
                    <th class="p-1 border-r border-slate-300 text-center">SO-L</th>
                    <th class="p-1 border-r border-slate-300 text-center">SO-M</th>
                    <th class="p-1 text-center font-bold bg-slate-200">Tot</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 text-center">
                  <tr class="hover:bg-slate-50">
                    <td class="p-1 text-left font-bold border-r border-slate-200">Math</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">4/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">1/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">1/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">4/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">1/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">1/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 font-bold bg-slate-50">12</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-1 text-left font-bold border-r border-slate-200">Sci</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">4/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">4/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">4/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">2/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 font-bold bg-slate-50">14</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-1 text-left font-bold border-r border-slate-200">Basic Eng</td>
                    <td class="p-1 border-r border-slate-200">1/1/0</td>
                    <td class="p-1 border-r border-slate-200">0/1/0</td>
                    <td class="p-1 border-r border-slate-200">1/0/0</td>
                    <td class="p-1 border-r border-slate-200">0/1/0</td>
                    <td class="p-1 border-r border-slate-200">0/2/0</td>
                    <td class="p-1 border-r border-slate-200">1/1/0</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200">1/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200">1/1/0</td>
                    <td class="p-1 border-r border-slate-200">1/1/0</td>
                    <td class="p-1 border-r border-slate-200">1/0/0</td>
                    <td class="p-1 font-bold bg-slate-50">15</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-1 text-left font-bold border-r border-slate-200">Allied</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">4/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">4/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">4/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">2/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">2/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">1/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 font-bold bg-slate-50">17</td>
                  </tr>
                  <tr class="hover:bg-slate-50 bg-blue-50/20">
                    <td class="p-1 text-left font-bold border-r border-slate-200 text-apc-blue">Prof Core</td>
                    <td class="p-1 border-r border-slate-200 font-bold text-apc-blue">13/18/9</td>
                    <td class="p-1 border-r border-slate-200 font-bold text-apc-blue">12/13/11</td>
                    <td class="p-1 border-r border-slate-200 font-bold text-apc-blue">16/13/11</td>
                    <td class="p-1 border-r border-slate-200 font-bold text-apc-blue">2/7/11</td>
                    <td class="p-1 border-r border-slate-200 font-bold text-apc-blue">10/11/7</td>
                    <td class="p-1 border-r border-slate-200 font-bold text-apc-blue">3/9/5</td>
                    <td class="p-1 border-r border-slate-200 font-bold text-apc-blue">2/11/8</td>
                    <td class="p-1 border-r border-slate-200 font-bold text-apc-blue">9/7/6</td>
                    <td class="p-1 border-r border-slate-200 font-bold text-apc-blue">3/4/6</td>
                    <td class="p-1 border-r border-slate-200 font-bold text-apc-blue">1/5/6</td>
                    <td class="p-1 border-r border-slate-200 font-bold text-apc-blue">5/22/8</td>
                    <td class="p-1 border-r border-slate-200 font-bold text-apc-blue">1/4/5</td>
                    <td class="p-1 border-r border-slate-200 font-bold text-apc-blue">10/10/10</td>
                    <td class="p-1 font-black text-apc-blue bg-blue-100/50">324</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-1 text-left font-bold border-r border-slate-200">Gen Ed</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">7/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">3/0/0</td>
                    <td class="p-1 border-r border-slate-200">1/3/0</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">4/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">2/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-emerald-700 font-bold">10/0/0</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 border-r border-slate-200 text-slate-300">-</td>
                    <td class="p-1 font-bold bg-slate-50">30</td>
                  </tr>
                </tbody>
                <tfoot class="bg-slate-100 font-bold text-[8.5px] border-t border-slate-300">
                  <tr>
                    <td class="p-1 font-black text-slate-900 border-r border-slate-300">Total</td>
                    <td class="p-1 border-r border-slate-200 font-black">26/19/9</td>
                    <td class="p-1 border-r border-slate-200 font-black">17/14/11</td>
                    <td class="p-1 border-r border-slate-200 font-black">22/13/11</td>
                    <td class="p-1 border-r border-slate-200 font-black">15/8/11</td>
                    <td class="p-1 border-r border-slate-200 font-black">18/13/7</td>
                    <td class="p-1 border-r border-slate-200 font-black">12/10/5</td>
                    <td class="p-1 border-r border-slate-200 font-black">4/14/8</td>
                    <td class="p-1 border-r border-slate-200 font-black">14/7/6</td>
                    <td class="p-1 border-r border-slate-200 font-black">5/4/6</td>
                    <td class="p-1 border-r border-slate-200 font-black">11/5/6</td>
                    <td class="p-1 border-r border-slate-200 font-black">7/23/8</td>
                    <td class="p-1 border-r border-slate-200 font-black">2/5/5</td>
                    <td class="p-1 border-r border-slate-200 font-black">11/10/10</td>
                    <td class="p-1 font-black bg-slate-900 text-white">412</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

        </div>

      </div>

      `,
  6: `
      <div class="text-center border-b-2 border-slate-900 pb-4 mb-6">
        <img src="assets/apc_seal.png" class="inline-block w-14 h-14 rounded-none object-contain mb-2 shadow-xs bg-white p-0.5 border border-slate-200" alt="Asia Pacific College Official Seal">
        <h1 class="font-black text-xl uppercase tracking-widest text-slate-900">ASIA PACIFIC COLLEGE · SCHOOL OF ENGINEERING</h1>
        <h2 class="font-extrabold text-sm text-apc-navy mt-1">Comparison of CMO 87 S. 2017 and APC Proposed BS in Computer Engineering Curriculum</h2>
        <p class="text-xs text-slate-500 font-mono mt-0.5">Audit across CHEd CMO 87, APC AY 2018-2019, and APC Proposed Curriculum AY 2026</p>
      </div>

      <!-- Official Accounting Notice explaining Contact Hours vs Credit Units -->
      <div class="mb-4 p-3 bg-blue-50 border-2 border-blue-300 rounded-none text-xs text-blue-950 flex flex-wrap items-center justify-between gap-3 shadow-sm">
        <div class="flex items-start gap-2.5">
          <span class="text-xl leading-none">💡</span>
          <div>
            <span class="font-extrabold text-blue-900 uppercase tracking-wider text-[11px] block">Curriculum Hours vs. Credit Units Clarification:</span>
            <span class="text-[11px] leading-relaxed text-blue-800">
              The figures in the thousands (e.g., <b>1,641</b> and <b>1,626</b>) represent <b>cumulative practical laboratory and industry internship contact hours</b> (3 terms × 520 hrs = 1,560 hrs of industry immersion).
              Actual academic degree credit is strictly <b>184 Total Credit Units</b> (and 167 academic units excluding PE & NSTP), exactly matching CHED CMO No. 92, s. 2017 standards.
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2 font-mono text-[11px] shrink-0">
          <span class="px-2.5 py-1 rounded-none bg-blue-200 text-blue-900 font-bold border border-blue-300">1,641 Practicum Hrs</span>
          <span class="px-2.5 py-1 rounded-none bg-amber-400 text-slate-900 font-black border border-amber-500 shadow-sm">184 Credit Units</span>
        </div>
      </div>

      <!-- Official Accounting Notice explaining Contact Hours vs Credit Units -->
      <div class="mb-4 p-3 bg-blue-50 border-2 border-blue-300 rounded-none text-xs text-blue-950 flex flex-wrap items-center justify-between gap-3 shadow-sm">
        <div class="flex items-start gap-2.5">
          <span class="text-xl leading-none">💡</span>
          <div>
            <span class="font-extrabold text-blue-900 uppercase tracking-wider text-[11px] block">Curriculum Hours vs. Credit Units Clarification:</span>
            <span class="text-[11px] leading-relaxed text-blue-800">
              The figures in the thousands (e.g., <b>1,641</b> and <b>1,626</b>) represent <b>cumulative practical laboratory and industry internship contact hours</b> (3 terms × 520 hrs = 1,560 hrs of industry immersion).
              Actual academic degree credit is strictly <b>184 Total Credit Units</b> (and 167 academic units excluding PE & NSTP), exactly matching CHED CMO No. 92, s. 2017 standards.
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2 font-mono text-[11px] shrink-0">
          <span class="px-2.5 py-1 rounded-none bg-blue-200 text-blue-900 font-bold border border-blue-300">1,641 Practicum Hrs</span>
          <span class="px-2.5 py-1 rounded-none bg-amber-400 text-slate-900 font-black border border-amber-500 shadow-sm">184 Credit Units</span>
        </div>
      </div>

      <!-- Official Accounting Notice explaining Contact Hours vs Credit Units -->
      <div class="mb-4 p-3 bg-blue-50 border-2 border-blue-300 rounded-none text-xs text-blue-950 flex flex-wrap items-center justify-between gap-3 shadow-sm">
        <div class="flex items-start gap-2.5">
          <span class="text-xl leading-none">💡</span>
          <div>
            <span class="font-extrabold text-blue-900 uppercase tracking-wider text-[11px] block">Curriculum Hours vs. Credit Units Clarification:</span>
            <span class="text-[11px] leading-relaxed text-blue-800">
              The figures in the thousands (e.g., <b>1,641</b> and <b>1,626</b>) represent <b>cumulative practical laboratory and industry internship contact hours</b> (3 terms × 520 hrs = 1,560 hrs of industry immersion).
              Actual academic degree credit is strictly <b>184 Total Credit Units</b> (and 167 academic units excluding PE & NSTP), exactly matching CHED CMO No. 92, s. 2017 standards.
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2 font-mono text-[11px] shrink-0">
          <span class="px-2.5 py-1 rounded-none bg-blue-200 text-blue-900 font-bold border border-blue-300">1,641 Practicum Hrs</span>
          <span class="px-2.5 py-1 rounded-none bg-amber-400 text-slate-900 font-black border border-amber-500 shadow-sm">184 Credit Units</span>
        </div>
      </div>

      <!-- Official Accounting Notice explaining Contact Hours vs Credit Units -->
      <div class="mb-4 p-3 bg-blue-50 border-2 border-blue-300 rounded-none text-xs text-blue-950 flex flex-wrap items-center justify-between gap-3 shadow-sm">
        <div class="flex items-start gap-2.5">
          <span class="text-xl leading-none">💡</span>
          <div>
            <span class="font-extrabold text-blue-900 uppercase tracking-wider text-[11px] block">Curriculum Hours vs. Credit Units Clarification:</span>
            <span class="text-[11px] leading-relaxed text-blue-800">
              The figures in the thousands (e.g., <b>1,641</b> and <b>1,626</b>) represent <b>cumulative practical laboratory and industry internship contact hours</b> (3 terms × 520 hrs = 1,560 hrs of industry immersion).
              Actual academic degree credit is strictly <b>184 Total Credit Units</b> (and 167 academic units excluding PE & NSTP), exactly matching CHED CMO No. 92, s. 2017 standards.
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2 font-mono text-[11px] shrink-0">
          <span class="px-2.5 py-1 rounded-none bg-blue-200 text-blue-900 font-bold border border-blue-300">1,641 Practicum Hrs</span>
          <span class="px-2.5 py-1 rounded-none bg-amber-400 text-slate-900 font-black border border-amber-500 shadow-sm">184 Credit Units</span>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-[11px] border border-slate-300">
          <thead class="bg-slate-900 text-white">
            <tr>
              <th colspan="4" class="p-2 border border-slate-700 text-center font-black bg-slate-800">CHEd CMO. 87 s. 2017 (BS CpE)</th>
              <th colspan="4" class="p-2 border border-slate-700 text-center font-black bg-slate-900">APC BS CpE AY 2018-2019</th>
              <th colspan="4" class="p-2 border border-slate-700 text-center font-black bg-apc-blue">APC Proposed BS CpE 2026</th>
            </tr>
            <tr class="bg-slate-200 text-slate-900 text-[8.5px] font-bold">
              <th rowspan="2" class="p-1.5 border border-slate-300 align-middle">Classification / Course</th>
              <th colspan="2" class="p-1 border border-slate-300 text-center bg-slate-100">Hours / Week</th>
              <th rowspan="2" class="p-1.5 border border-slate-300 text-center align-middle bg-amber-100 text-amber-950">Credit<br>Units</th>
              <th rowspan="2" class="p-1.5 border border-slate-300 align-middle">Classification / Course</th>
              <th colspan="2" class="p-1 border border-slate-300 text-center bg-slate-100">Hours / Week</th>
              <th rowspan="2" class="p-1.5 border border-slate-300 text-center align-middle bg-amber-100 text-amber-950">Credit<br>Units</th>
              <th rowspan="2" class="p-1.5 border border-slate-300 align-middle">Classification / Course</th>
              <th colspan="2" class="p-1 border border-slate-300 text-center bg-blue-100 text-apc-blue">Hours / Week</th>
              <th rowspan="2" class="p-1.5 border border-slate-300 text-center align-middle bg-blue-200 text-apc-blue font-black">Credit<br>Units</th>
            </tr>
            <tr class="bg-slate-100 text-slate-700 text-[8px]">
              <th class="p-0.5 border border-slate-300 text-center" title="Lecture Hours per Week">Lec Hrs</th>
              <th class="p-0.5 border border-slate-300 text-center font-bold text-slate-900 bg-amber-50" title="Laboratory & Practicum Hours (Includes 240 hrs OJT)">Lab / OJT Hrs</th>
              <th class="p-0.5 border border-slate-300 text-center" title="Lecture Hours per Week">Lec Hrs</th>
              <th class="p-0.5 border border-slate-300 text-center font-bold text-slate-900 bg-amber-50" title="Laboratory & Practicum Hours (Includes 1,040 hrs Internships)">Lab / OJT Hrs</th>
              <th class="p-0.5 border border-slate-300 text-center" title="Lecture Hours per Week">Lec Hrs</th>
              <th class="p-0.5 border border-slate-300 text-center font-bold text-apc-blue bg-blue-50" title="Laboratory & Practicum Hours (Includes 1,560 hrs across 3 Internships)">Lab / OJT Hrs</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            
            <tr class="bg-slate-100 font-black text-slate-900 text-[11px]">
              <td colspan="12" class="p-2 border border-slate-300 uppercase tracking-wider">I. TECHNICAL COURSES</td>
            </tr>
            <tr class="bg-slate-100 font-black text-slate-900 text-[11px]">
              <td colspan="12" class="p-2 border border-slate-300 uppercase tracking-wider">A. Mathematics</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Calculus 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Calculus 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Calculus 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Calculus 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Calculus 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Calculus 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Engineering Data Analysis</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Engineering Data Analysis</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Engineering Data Analysis</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Differential Equations</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Differential Equations</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Differential Equations</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="bg-slate-50 font-bold">
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">12</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">12</td>
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">12</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">12</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">12</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">12</td>
            </tr>
            <tr class="bg-slate-100 font-black text-slate-900 text-[11px]">
              <td colspan="12" class="p-2 border border-slate-300 uppercase tracking-wider">B. Physical Science</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Chemistry for Engineers</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">4</td>
              <td class="p-1.5 border border-slate-200">Chemistry for Engineers</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">4</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Chemistry for Engineers</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">4</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Physics for Engineers</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">4</td>
              <td class="p-1.5 border border-slate-200">Physics for Engineers</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">4</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Physics for Engineers</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">4</td>
            </tr>
            <tr class="bg-slate-50 font-bold">
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">8</td>
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">8</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">8</td>
            </tr>
            <tr class="bg-slate-100 font-black text-slate-900 text-[11px]">
              <td colspan="12" class="p-2 border border-slate-300 uppercase tracking-wider">C. Basic Engineering Sciences</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Computer-Aided Drafting</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">1</td>
              <td class="p-1.5 border border-slate-200">Computer-Aided Drafting</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">1</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Computer-Aided Drafting</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">1</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Engineering Economics</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Engineering Economics</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Engineering Economics</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Technopreneurship 101</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Technopreneurship 101</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Technopreneurship 101</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">0</td>
              <td class="p-1.5 border border-slate-200">IT Concept</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">0</td>
            </tr>
            <tr class="bg-slate-50 font-bold">
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">7</td>
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">9</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">10</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">7</td>
            </tr>
            <tr class="bg-slate-100 font-black text-slate-900 text-[11px]">
              <td colspan="12" class="p-2 border border-slate-300 uppercase tracking-wider">D. Allied Subjects</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Fundamental of Electrical Circuits</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">4</td>
              <td class="p-1.5 border border-slate-200">Fundamental of Electrical Circuits</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">4</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Fundamental of Electrical Circuits</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">4</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Fundamentals of Electronic Circuits</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">4</td>
              <td class="p-1.5 border border-slate-200">Fundamentals of Electronic Circuits</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">4</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Fundamentals of Electronic Circuits</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">4</td>
            </tr>
            <tr class="bg-slate-50 font-bold">
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">8</td>
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">8</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">8</td>
            </tr>
            <tr class="bg-slate-100 font-black text-slate-900 text-[11px]">
              <td colspan="12" class="p-2 border border-slate-300 uppercase tracking-wider">E. Professional Courses</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">1. Core Courses</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">0</td>
              <td class="p-1.5 border border-slate-200">1. Core Courses</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">0</td>
              <td class="p-1.5 border border-slate-200 font-semibold">1. Core Courses</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">0</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Discrete Mathematics</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Discrete Mathematics</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Discrete Mathematics</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Numerical Methods</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Numerical Methods</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Numerical Methods</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Computer Engineering as a Discipline</td>
              <td class="p-1 border border-slate-200 text-center font-mono">1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">1</td>
              <td class="p-1.5 border border-slate-200">Computer Engineering as a Discipline</td>
              <td class="p-1 border border-slate-200 text-center font-mono">1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">1</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Computer Engineering as a Discipline</td>
              <td class="p-1 border border-slate-200 text-center font-mono">1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">1</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Fundamentals of Mixed Signals and Sensors</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Fundamentals of Mixed Signals and Sensors</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Fundamentals of Mixed Signals and Sensors</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Computer Engineering Drafting and Design</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">1</td>
              <td class="p-1.5 border border-slate-200">Computer Engineering Drafting and Design</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">1</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Computer Engineering Drafting and Design</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">1</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Programming Logic and Design</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">2</td>
              <td class="p-1.5 border border-slate-200">Programming Logic and Design</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">2</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Programming Logic and Design</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">2</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Data Structures and Algorithms</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">2</td>
              <td class="p-1.5 border border-slate-200">Data Structures and Algorithms</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">2</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Data Structures and Algorithms</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">2</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Object Oriented Programming</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">2</td>
              <td class="p-1.5 border border-slate-200">Object Oriented Programming</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">2</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Object Oriented Programming</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">2</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Software Design</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">4</td>
              <td class="p-1.5 border border-slate-200">Software Design</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">4</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Software Design</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">4</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Microprocessors</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">4</td>
              <td class="p-1.5 border border-slate-200">Microprocessors</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">4</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Microprocessors</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">4</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Logic Circuits and Design</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">4</td>
              <td class="p-1.5 border border-slate-200">Logic Circuits and Design</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">4</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Logic Circuits and Design</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">4</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Methods of Research</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">2</td>
              <td class="p-1.5 border border-slate-200">Methods of Research</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">2</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Methods of Research</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">2</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Operating Systems</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Operating Systems</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Operating Systems</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Computer Architecture and Organization</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">4</td>
              <td class="p-1.5 border border-slate-200">Computer Architecture and Organization</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">4</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Computer Architecture and Organization</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">4</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Data and Digital Communications</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Data and Digital Communications</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Data and Digital Communications</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Computer Networks and Security</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">4</td>
              <td class="p-1.5 border border-slate-200">Computer Networks and Security</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">4</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Computer Networks and Security</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">4</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Embedded Systems</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">4</td>
              <td class="p-1.5 border border-slate-200">Embedded Systems</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">4</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Embedded Systems</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">4</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Digital Signal Processing</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">4</td>
              <td class="p-1.5 border border-slate-200">Digital Signal Processing</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">4</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Digital Signal Processing</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">4</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Feedback and Control Systems</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Feedback and Control Systems</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Feedback and Control Systems</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Introduction to HDL</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">1</td>
              <td class="p-1.5 border border-slate-200">Introduction to HDL</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">1</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Introduction to HDL</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">1</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Seminars and Field Trips</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">1</td>
              <td class="p-1.5 border border-slate-200">Seminars and Field Trips</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">1</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Seminars and Field Trips</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">1</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Basic Occupational Health and Safety</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Basic Occupational Health and Safety</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Basic Occupational Health and Safety</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">CpE Laws and Professional Practice</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">2</td>
              <td class="p-1.5 border border-slate-200">CpE Laws and Professional Practice</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">2</td>
              <td class="p-1.5 border border-slate-200 font-semibold">CpE Laws and Professional Practice</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">2</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Emerging Technologies in CpE</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Emerging Technologies in CpE</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Emerging Technologies in CpE</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">CpE Practice and Design 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">1</td>
              <td class="p-1.5 border border-slate-200">CpE Practice and Design 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">1</td>
              <td class="p-1.5 border border-slate-200 font-semibold">CpE Practice and Design 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">1</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">CpE Practice and Design 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">2</td>
              <td class="p-1.5 border border-slate-200">CpE Practice and Design 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">2</td>
              <td class="p-1.5 border border-slate-200 font-semibold">CpE Practice and Design 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">2</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">On the Job Training (240 hours)</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">240</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Internship 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">9</td>
              <td class="p-1 border border-slate-200 text-center font-mono">520</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">9</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Internship 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono">520</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">6</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">0</td>
              <td class="p-1.5 border border-slate-200">Internship 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">9</td>
              <td class="p-1 border border-slate-200 text-center font-mono">520</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">9</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Internship 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono">520</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">6</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">0</td>
              <td class="p-1.5 border border-slate-200">Graphical Systems Design</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">2</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Internship 3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono">520</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">6</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">0</td>
              <td class="p-1.5 border border-slate-200">Database Management System</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">User Interface and  User Experience</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">1</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">0</td>
              <td class="p-1.5 border border-slate-200">Business Field</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Database Management System</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">1</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">0</td>
              <td class="p-1.5 border border-slate-200">Special Topics for CpE</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Mobile Coding Technology and Application</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">1</td>
            </tr>
            <tr class="bg-slate-50 font-bold">
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">53</td>
              <td class="p-1 border border-slate-200 text-center font-mono">297</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">72</td>
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">76</td>
              <td class="p-1 border border-slate-200 text-center font-mono">1106</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">98</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">68</td>
              <td class="p-1 border border-slate-200 text-center font-mono">1626</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">90</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">2. Technical Elective</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">0</td>
              <td class="p-1.5 border border-slate-200">2. Technical Elective</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">0</td>
              <td class="p-1.5 border border-slate-200 font-semibold">2. Technical Elective</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">0</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Cognate/Track Course 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Cognate/Track Course 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Cognate/Track Course 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Cognate/Track Course 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Cognate/Track Course 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Cognate/Track Course 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Cognate/Track Course 3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Cognate/Track Course 3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Cognate/Track Course 3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="bg-slate-50 font-bold">
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">9</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">9</td>
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">9</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">9</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">9</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">9</td>
            </tr>
            <tr class="bg-slate-100 font-black text-slate-900 text-[11px]">
              <td colspan="12" class="p-2 border border-slate-300 uppercase tracking-wider">II. Non-Technical Courses</td>
            </tr>
            <tr class="bg-slate-100 font-black text-slate-900 text-[11px]">
              <td colspan="12" class="p-2 border border-slate-300 uppercase tracking-wider">A. Social Science</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Science, Technology, &amp; Society</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Science, Technology, &amp; Society</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Science, Technology, &amp; Society</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Contemporary World</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Contemporary World</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Contemporary World</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Readings in Philippine History</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Readings in Philippine History</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Readings in Philippine History</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Understanding the self</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Understanding the self (Values Education)</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Understanding the self (Values Education)</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Art Appreciation</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Creativity in Engineering Design</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Creativity in Engineering Design</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Purposive Communication</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Purposive Communication (OCCP Series)</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Purposive Communication (OCCP Series)</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Mathematics for Engineers</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Mathematics for Engineers</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Mathematics for Engineers</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Ethics</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Ethics</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Ethics</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">0</td>
              <td class="p-1.5 border border-slate-200">Applied Project 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Applied Project 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">0</td>
            </tr>
            <tr class="bg-slate-50 font-bold">
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">24</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">24</td>
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">27</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">27</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">24</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">24</td>
            </tr>
            <tr class="bg-slate-100 font-black text-slate-900 text-[11px]">
              <td colspan="12" class="p-2 border border-slate-300 uppercase tracking-wider">B. GEC Electives</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">GEC Elective 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Expository Communicaion 1 - World Literature</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Expository Communicaion 1 - World Literature</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">GEC Elective 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Expository Communicaion 2 - Tehnical Writing and Presentation</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Expository Communicaion 2 - Tehnical Writing and Presentation</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">GEC Elective 3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Professional Ethics</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Professional Ethics</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="bg-slate-50 font-bold">
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">9</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">9</td>
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">9</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">9</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">9</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">9</td>
            </tr>
            <tr class="bg-slate-100 font-black text-slate-900 text-[11px]">
              <td colspan="12" class="p-2 border border-slate-300 uppercase tracking-wider">C. Languages</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">0</td>
              <td class="p-1.5 border border-slate-200">Filipino 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">0</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">0</td>
              <td class="p-1.5 border border-slate-200">Filipino 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">0</td>
            </tr>
            <tr class="bg-slate-50 font-bold">
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">0</td>
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">6</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">0</td>
            </tr>
            <tr class="bg-slate-100 font-black text-slate-900 text-[11px]">
              <td colspan="12" class="p-2 border border-slate-300 uppercase tracking-wider">D. Mandated Course</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">Life &amp; Works of Rizal</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Life and Works of Rizal</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Life and Works of Rizal</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="bg-slate-50 font-bold">
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="bg-slate-100 font-black text-slate-900 text-[11px]">
              <td colspan="12" class="p-2 border border-slate-300 uppercase tracking-wider">E. Physical Education</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">P.E. 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">2</td>
              <td class="p-1.5 border border-slate-200">PE 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">2</td>
              <td class="p-1.5 border border-slate-200 font-semibold">PE 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">2</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">P.E. 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">2</td>
              <td class="p-1.5 border border-slate-200">PE 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">2</td>
              <td class="p-1.5 border border-slate-200 font-semibold">PE 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">2</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">P.E. 3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">2</td>
              <td class="p-1.5 border border-slate-200">PE 3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">2</td>
              <td class="p-1.5 border border-slate-200 font-semibold">PE 3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">2</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">P.E. 4</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">2</td>
              <td class="p-1.5 border border-slate-200">PE 4</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">2</td>
              <td class="p-1.5 border border-slate-200 font-semibold">PE 4</td>
              <td class="p-1 border border-slate-200 text-center font-mono">2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">2</td>
            </tr>
            <tr class="bg-slate-50 font-bold">
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">8</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">8</td>
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">8</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">8</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">8</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">8</td>
            </tr>
            <tr class="bg-slate-100 font-black text-slate-900 text-[11px]">
              <td colspan="12" class="p-2 border border-slate-300 uppercase tracking-wider">E. National Service Training Program</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">NSTP 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">National Service 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">National Service 1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">NSTP 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">3</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">National Service 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">3</td>
              <td class="p-1.5 border border-slate-200 font-semibold">National Service 2</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">3</td>
            </tr>
            <tr class="bg-slate-50 font-bold">
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">6</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">6</td>
              <td class="p-1.5 border border-slate-200">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">6</td>
              <td class="p-1.5 border border-slate-200 font-semibold">Sub-Total</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">6</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200">GRAND TOTAL</td>
              <td class="p-1 border border-slate-200 text-center font-mono">142</td>
              <td class="p-1 border border-slate-200 text-center font-mono">312</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">166</td>
              <td class="p-1.5 border border-slate-200">GRAND TOTAL</td>
              <td class="p-1 border border-slate-200 text-center font-mono">171</td>
              <td class="p-1 border border-slate-200 text-center font-mono">1121</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">204</td>
              <td class="p-1.5 border border-slate-200 font-semibold">GRAND TOTAL</td>
              <td class="p-1 border border-slate-200 text-center font-mono">151</td>
              <td class="p-1 border border-slate-200 text-center font-mono">1641</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">184</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">15</td>
              <td class="p-1.5 border border-slate-200">INTERNSHIP</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">0</td>
              <td class="p-1.5 border border-slate-200 font-semibold"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">0</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">DATABASE</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">0</td>
              <td class="p-1.5 border border-slate-200 font-semibold"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">0</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">27</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">ROBPROA, GRAPHYS, MOBCAPP</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">0</td>
              <td class="p-1.5 border border-slate-200 font-semibold"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">0</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">6</td>
              <td class="p-1.5 border border-slate-200">ITCONCE, APPROJ1</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">0</td>
              <td class="p-1.5 border border-slate-200 font-semibold"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">0</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">166</td>
              <td class="p-1.5 border border-slate-200">CHED Reqt</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">0</td>
              <td class="p-1.5 border border-slate-200 font-semibold"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">0</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">15</td>
              <td class="p-1.5 border border-slate-200">INTERNSHIP</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">0</td>
              <td class="p-1.5 border border-slate-200 font-semibold"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">0</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-1.5 border border-slate-200"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-apc-navy">3</td>
              <td class="p-1.5 border border-slate-200">DBMS</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-bold text-slate-700">0</td>
              <td class="p-1.5 border border-slate-200 font-semibold"></td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono">0</td>
              <td class="p-1 border border-slate-200 text-center font-mono font-black text-apc-blue">0</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  7: `
      <div class="text-center border-b-2 border-slate-900 pb-4 mb-6">
        <img src="assets/apc_seal.png" class="inline-block w-14 h-14 rounded-none object-contain mb-2 shadow-xs bg-white p-0.5 border border-slate-200" alt="Asia Pacific College Official Seal">
        <h1 class="font-black text-xl uppercase tracking-widest text-slate-900">ASIA PACIFIC COLLEGE · SCHOOL OF ENGINEERING</h1>
        <h2 class="font-extrabold text-base text-apc-navy mt-1">SUMMARY OF UNITS AND CURRICULUM CLASSIFICATION AUDIT</h2>
        <p class="text-xs text-slate-500 font-mono mt-0.5">CMO 87 s. 2017 Compliance vs APC Proposed BS CpE 2026</p>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs border border-slate-300">
          <thead class="bg-apc-navy text-white">
            <tr>
              <th class="p-2.5 border border-slate-400">Course Classification</th>
              <th class="p-2.5 border border-slate-400 text-center w-24">CMO 87 Minimum Units</th>
              <th class="p-2.5 border border-slate-400 text-center w-24 bg-blue-900">APC Proposed Units</th>
              <th class="p-2.5 border border-slate-400 text-center w-24">Compliance Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            
            <tr class="bg-slate-100 font-black text-slate-900 text-xs">
              <td colspan="4" class="p-2.5 border border-slate-300 uppercase tracking-wider">I. TECHNICAL COURSES</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-2.5 border border-slate-200 font-bold">A. Mathematics</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono">12</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono font-black text-apc-blue text-sm">12</td>
              <td class="p-2.5 border border-slate-200 text-center">
                <span class="inline-block px-2 py-0.5 rounded-none text-[11px] font-black border bg-emerald-100 text-emerald-800 border-emerald-300">COMPLIANT</span>
              </td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-2.5 border border-slate-200 font-bold">B. Physical Science</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono">8</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono font-black text-apc-blue text-sm">8</td>
              <td class="p-2.5 border border-slate-200 text-center">
                <span class="inline-block px-2 py-0.5 rounded-none text-[11px] font-black border bg-emerald-100 text-emerald-800 border-emerald-300">COMPLIANT</span>
              </td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-2.5 border border-slate-200 font-bold">C. Basic Engineering Sciences</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono">7</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono font-black text-apc-blue text-sm">8</td>
              <td class="p-2.5 border border-slate-200 text-center">
                <span class="inline-block px-2 py-0.5 rounded-none text-[11px] font-black border bg-emerald-100 text-emerald-800 border-emerald-300">COMPLIANT</span>
              </td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-2.5 border border-slate-200 font-bold">D. Allied Subjects</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono">8</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono font-black text-apc-blue text-sm">8</td>
              <td class="p-2.5 border border-slate-200 text-center">
                <span class="inline-block px-2 py-0.5 rounded-none text-[11px] font-black border bg-emerald-100 text-emerald-800 border-emerald-300">COMPLIANT</span>
              </td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-2.5 border border-slate-200 font-bold">E. Core Courses</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono">72</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono font-black text-apc-blue text-sm">89</td>
              <td class="p-2.5 border border-slate-200 text-center">
                <span class="inline-block px-2 py-0.5 rounded-none text-[11px] font-black border bg-emerald-100 text-emerald-800 border-emerald-300">COMPLIANT</span>
              </td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-2.5 border border-slate-200 font-bold">F. Cognates/Electives</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono">9</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono font-black text-apc-blue text-sm">9</td>
              <td class="p-2.5 border border-slate-200 text-center">
                <span class="inline-block px-2 py-0.5 rounded-none text-[11px] font-black border bg-emerald-100 text-emerald-800 border-emerald-300">COMPLIANT</span>
              </td>
            </tr>
            <tr class="bg-slate-100 font-black text-slate-900 text-xs">
              <td colspan="4" class="p-2.5 border border-slate-300 uppercase tracking-wider">II. Non-Technical Courses</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-2.5 border border-slate-200 font-bold">A. Social Science</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono">24</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono font-black text-apc-blue text-sm">24</td>
              <td class="p-2.5 border border-slate-200 text-center">
                <span class="inline-block px-2 py-0.5 rounded-none text-[11px] font-black border bg-emerald-100 text-emerald-800 border-emerald-300">COMPLIANT</span>
              </td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-2.5 border border-slate-200 font-bold">B. GEC Electives</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono">9</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono font-black text-apc-blue text-sm">9</td>
              <td class="p-2.5 border border-slate-200 text-center">
                <span class="inline-block px-2 py-0.5 rounded-none text-[11px] font-black border bg-emerald-100 text-emerald-800 border-emerald-300">COMPLIANT</span>
              </td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-2.5 border border-slate-200 font-bold">C. Languages</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono">0</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono font-black text-apc-blue text-sm">0</td>
              <td class="p-2.5 border border-slate-200 text-center">
                <span class="inline-block px-2 py-0.5 rounded-none text-[11px] font-black border bg-emerald-100 text-emerald-800 border-emerald-300">COMPLIANT</span>
              </td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-2.5 border border-slate-200 font-bold">D. Rizal&#x27;s Life, Works and Writings</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono">3</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono font-black text-apc-blue text-sm">3</td>
              <td class="p-2.5 border border-slate-200 text-center">
                <span class="inline-block px-2 py-0.5 rounded-none text-[11px] font-black border bg-emerald-100 text-emerald-800 border-emerald-300">COMPLIANT</span>
              </td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-2.5 border border-slate-200 font-bold">E. Physical Education</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono">8</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono font-black text-apc-blue text-sm">8</td>
              <td class="p-2.5 border border-slate-200 text-center">
                <span class="inline-block px-2 py-0.5 rounded-none text-[11px] font-black border bg-emerald-100 text-emerald-800 border-emerald-300">COMPLIANT</span>
              </td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-2.5 border border-slate-200 font-bold">E. National Service Training Program</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono">6</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono font-black text-apc-blue text-sm">6</td>
              <td class="p-2.5 border border-slate-200 text-center">
                <span class="inline-block px-2 py-0.5 rounded-none text-[11px] font-black border bg-emerald-100 text-emerald-800 border-emerald-300">COMPLIANT</span>
              </td>
            </tr>
            <tr class="bg-amber-100 font-black text-sm text-amber-950 border-t-2 border-slate-900">
              <td class="p-2.5 border border-slate-200 font-bold">GRAND TOTAL</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono">166</td>
              <td class="p-2.5 border border-slate-200 text-center font-mono font-black text-apc-blue text-sm">184</td>
              <td class="p-2.5 border border-slate-200 text-center">
                <span class="inline-block px-2 py-0.5 rounded-none text-[11px] font-black border bg-emerald-100 text-emerald-800 border-emerald-300">COMPLIANT</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
};

// Auto-mount registrar documents when DOM is ready
(function() {
  function mountRegistrarDocs() {
    for (let i = 1; i <= 7; i++) {
      const el = document.getElementById('regDocView_' + i);
      if (el && window.REGISTRAR_DOCS && window.REGISTRAR_DOCS[i]) {
        if (!el.innerHTML.trim()) {
          el.innerHTML = window.REGISTRAR_DOCS[i];
        }
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountRegistrarDocs);
  } else {
    mountRegistrarDocs();
  }
  window.mountRegistrarDocs = mountRegistrarDocs;
})();
