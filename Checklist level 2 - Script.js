// Default Checklist Data structure
const defaultChecklistsData = {
    "CK/Pacman Arena": [
        { id: "ck-open", title: "CK/Pacman Opening", tasks: [
            "Ensure all the lights are turning on including emergency lights. Ensure no flickering or outages",
            "All the doors are working properly. Siiting areas are clean and orgnaized",
            "Operator room is clean and well organized",
            "Ensure the Fire exit door access is not obstructed, fully functional and the signage is visible clearly",
            "Verify that the first aid kit is available, fully replenished, and all items are within their expiry date",
            "Conduct a full round arena inspection for hazards. Report any damages, sharp objects, or potential threats to the Tech Team and Duty Manager immediately",
            "Barriers are arranged neatly. Pacman stage and Karts are kept in their designated area",
            "Karts are cleaned, disinfected and having no damages",
            "Fire buttons, Seatbelt, LED Stingers, Pedals, Canbus, Speakers are functioning properly. Ensure Batteries are sufficiently charged to start the sessions",
            "All the pacman jackets are cleaned and disinfected. Ensured they are all turning on and functioning well",
            "Pacman jacket charging stations in both briefing room and Arena are clean, wiped and working well",
            "Briefing room is well organized, all the floor mats are intact, doors are functioning well, vidoes are playing and the room is litter free",
            "Operating tablets are turning on, fully charged and are in good working condition",
            "Mic is functioning and Activity log sheets are availale",
            "Report to Duty Manager that the attraction is ready for operation 15 minutes beofre the schedueled opening time"
        ] },
        { id: "ck-close", title: "CK/Pacman Closing", tasks: [
            "Ensure all the Karts are parked in their designated areas. Batteries are removed and kept in charging.",
            "All the barriers are arranged properly, clean and are out of any debris.",
            "Arena is inspected for any damages, sharp edges or debris and ensured it is clean. Any lost and found items are handed over to reception.",
            "Damages, sharp edges or any other hazards identified are informed to technical team and DM.",
            "Ensured all operating tablets are kept under charging in their designated areas.",
            "Charging station for pacman jackets are functioning well both in briefing room and arena.",
            "Briefing rooms projector is turned off, room is clean, organized and floor matts are intact, lights are turned off.",
            "Activity log sheets are signed, and logs are updated to system.",
            "Operator counter is clean, organized and litter free.",
            "Lights in the arena are turned off and door is closed."
        ] }
    ],
    "Titanic/HT Arena": [
        { id: "th-open", title: "Titanic/HT Opening", tasks: [
            "Ensure All the lights are on, AC is working, the area is clean,mopped and litter free.",
            "Area is inspected for any safety hazard such as Sharp edges, trip/slip hazards, protruding objects, or damages and informed to DM immediately if identified.",
            "Check all electric equipment, plugs and wires to ensure they are all in good condition, no wires or plugs are damaged or torn. Ensure dustbin is emptied and new liner is placed.",
            "Ensure the Fire exit door access is not obstructed, fully functional and the signage is visible clearly.",
            "Verify that the first aid kit is available, fully replenished, and all items are within their expiry date.",
            "Ensure All the headset are fully charged and charging is turned on. External Batteries are in place and fully charged.",
            "[number] No of Headsets available.",
            "[number] No of spare batteries Available.",
            "[number] No of Rechargable batteries available.",
            "Wet wipes are available and in adequate quantity.",
            "Turn on all PCs and Tablets required to operate Ttianic. Ensure they are fully functioning and no technical errors identified. Turn on the TV screen outside.",
            "Minimum 20 headsets are configured for Titanic and ensured they are ready to operate without any tech issues.",
            "Prepare all headsets ready for Hyper Tag. Ensure they are not having any technical issues (e.g. height disalignment, spatial anchor error or map dislocations etc).",
            "Test run the applications and ensure they are operating well.",
            "Ensure joysticks in 'Hyper Tag' are functioning properly, and weapons are picked up and usable without issues.",
            "Report to Duty Manager that the attraction is ready for operation 15 minutes beofre the schedueled opening time."
        ]},
        { id: "th-close", title: "Titanic/HT Closing", tasks: [
            "Ensure all VR headsets are turned off and kept in charging. External batteris are placed in their charging stations and charging turned on.",
            "Close the applications , turn off the PCs and ensure the operating desk is clean and organized.",
            "[number] No of Headsets available.",
            "[number] No of spare batteries Available.",
            "[number] No of Rechargable batteries available.",
            "Keep all the tablets for charging in their stations.",
            "Inspect the area for safety hazards, damages, sharp objects, or trip/slip risks. Report any issues to the Duty Manager immediately.",
            "Any 'Lost and Found' items are handed over to DM/Reception.",
            "Make sure the area is clean, litter free and well organized.",
            "Turn of the AC, liights and close the door firmly."
        ]}
    ],
    "HT Arena Upstairs": [
        { id: "hta-open", title: "HT Arena Upstairs Opening", tasks: [
            "Ensure All the lights are on, AC is working, the area is clean,mopped and litter free.",
            "Area is inspected for any safety hazard such as Sharp edges, trip/slip hazards, protruding objects, or damages and informed to DM immediately if identified.",
            "Check all electric equipment, plugs and wires to ensure they are all in good condition, no wires or plugs are damaged or torn. Ensure dustbin is emptied and new liner is placed.",
            "Ensure the Fire exit door access is not obstructed, fully functional and the signage is visible clearly.",
            "Verify that the first aid kit is available, fully replenished, and all items are within their expiry date.",
            "Ensure All the headset are fully charged and charging is turned on.",
            "Ensure all the external betteries/powerbanks are in place and fully charged.",
            "Wet wipes are available and in adequate quantity.",
            "[number] No of Headsets available.",
            "[number] No of spare batteries Available.",
            "[number] No of Rechargable batteries available.",
            "Operating tablet is turned on and fully charged.",
            "Configure all headsets ready to operate the Hyper Tag, calibrate them, ensure they are not having any technical issues (e.g. height disalignment, spatial anchor error or map dislocation etc).",
            "Test run the 'Battle Start' applications and ensure it is functioning well.",
            "Ensure joysticks for 'Hyper Tag' are functioning properly. Weapons are picked up and usable without issues. Ensure joysticks batteries are efficient and spare batteries are available in stock.",
            "Any issues found in the application or in headset are immediately reported to DM and logged in activity log sheet.",
            "Fill the DRS and get it signed by DM, fill the Arena Inventory Sheet, check for consumables that need to be replenished and informt to DM.",
            "Report to Duty Manager that the attraction is ready for operation 15 minutes beofre the schedueled opening time."
        ] },
        { id: "hta-close", title: "HT Arena Upstairs Closing", tasks: [
            "Ensure all VR headsets are turned off and kept in charging. External batteris are placed in their charging stations and charging turned on.",
            "Close the applications , turn off the tablet and keep it for charging.",
            "[number] No of Headsets available.",
            "[number] No of spare batteries Available.",
            "[number] No of Rechargable batteries available.",
            "Keep all the tablets for charging in their stations.",
            "Inspect the area for safety hazards, damages, sharp objects, or trip/slip risks. Report any issues to the Duty Manager immediately.",
            "Check for lost and found items and handover to receptions if found any.",
            "Make sure the area is clean, litter free and well organized.",
            "Complete the arena closing inventory sheet, check for the consumables required and inform the DM.",
            "Turn of the AC, liights and close the door firmly."
        ] }
    ],
    "Reception/Ticketing": [
        { id: "rec-open", title: "Reception Opening", tasks: ["Log into system", "Count cash float", "Prepare wristbands"] }
    ],
    "Housekeeping": [
        { id: "hk-daily", title: "Daily Cleaning", tasks: ["Empty trash", "Clean restrooms", "Vacuum carpets", "Wipe glass surfaces"] }
    ],
    "Kitchen": [
        { id: "kit-open", title: "Kitchen Opening", tasks: ["Turn on equipment", "Check fridge temps", "Prep ingredients"] }
    ],
    "Cafe Bar": [
        { id: "cafe-open", title: "Cafe Bar Opening", tasks: ["Start coffee machine", "Stock pastry display", "Wipe counters"] }
    ],
    "Duty Manager": [
        { id: "dm-morning", title: "Duty Manager Morning", tasks: [
            "Entrance sliding door is working properly, tunnel is clean and presentable.",
            "All lights are on in the facility, music is on and TV screens are turned on.",
            "Reception opening checklist signed, all the POS and all tablets are turned on and reception is ready to accept guests.",
            "Vouchers, brochures, wrist bands, recepit rolls are sufficiently available for the operation. All QR codes are working and promotonal displays are working.",
            "Floats are assigned to cashiers.",
            "Café sitting area is neatly arranged, tables & chairs are clean and floor is mopped.",
            "F&B checklists are signed, area is inspected and is ready to open",
            "Café opening checklist is signed and ready for operation.",
            "Washroom checklists are signed and ready for operation.",
            "Housekeeping opening checklist is signed and ready for operation.",
            "Arena opening checklists are signed and ready for operation.",
            "Titanic and Hyper Tag opening checklists are signed and ready for operation.",
            "Test run for all attractions are done, approval from maintenance is received to run all the attractions for guests.",
            "All emergency exits are checked and ensured they are accessible and functioning properly.",
            "Ensured all the first aid boxes in designated areas are present and replenished. (Reception, Arena, Titanic, Events room, Tech room)",
            "Staff briefing is done, daily targets are given and ensured all allocations are covered.",
            "Merchandise shelves are replenished and well presented.",
            "All the stocks for consumables are checked and low stock items are listed to request for order.",
            "Houskeeping Pantry, Events room pantries are inspected and ensured they are clean and organized",
            "Events are updated to teams, event rooms checked & invitations for the welcome board are printed.",
            "Ensured all the staff are present in their allocation 10 mins beofre opening the venue for Guests and got confirmation (good to go) from all operators to start the operations."
        ] },
        { id: "dm-close", title: "Duty Manager Closing", tasks: [
            "All zones/areas closing walkthrough is done to check cleanliness, damages and hazards.",
            "Closing cashout is done, Sales and float bag is securely stored in safe.",
            "Café sale and float is received, tallied and stored in safe.",
            "All other equipment are turned off, area is clean and organized.",
            "Cube closing checklist is signed and ensured tablets and equipment are turned off, clean and kept organized.",
            "Café closing checklist is singed and ensure all the equpment and items/consumable are kept int their places, clean and organized.",
            "Café sitting area is clean and well organized",
            "Titanic and Hyper Tag closing checklist is signed, area is clean and well organized.",
            "Arena closing checklist is signed, area is clean and well organized.",
            "Events rooms are clean, neat and well organized.",
            "Briefing room is clean, well organized and projectors are truned off.",
            "TV screens are turned off, music is swithced off, remotes are kept in their places.",
            "Ensured that next day duty allocations are shared and DM closing report is updated."
        ] }
    ]
};

function getChecklistsData() {
    const savedCode = localStorage.getItem('nexusChecklists');
    if (savedCode) {
        try { return JSON.parse(savedCode); } catch(e) { console.error('Failed to parse saved checklists', e); }
    }
    return defaultChecklistsData;
}

// State
let currentUser = null;
let currentRole = null;
let activeChecklist = null;
let answersMap = new Map();
let todaySubmissions = 0;

// DOM Elements
const loginSection = document.getElementById('login-section');
const dashboardSection = document.getElementById('dashboard-section');
const checklistSection = document.getElementById('checklist-section');
const successOverlay = document.getElementById('success-overlay');

const loginForm = document.getElementById('login-form');
const staffNameInput = document.getElementById('staff-name');
const roleSelect = document.getElementById('role-select');

// Date init
const dateEl = document.getElementById('current-date');
const now = new Date();
dateEl.textContent = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

// Dynamic roles
function populateRoles() {
    const data = getChecklistsData();
    roleSelect.innerHTML = '<option value="" disabled selected>Select your area / department</option>';
    
    Object.keys(data).forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        let readable = key.replace(/[-_]/g, ' ');
        readable = readable.replace(/\b\w/g, l => l.toUpperCase());
        option.textContent = readable;
        roleSelect.appendChild(option);
    });
}

// Initialize App
function init() {
    populateRoles();
    
    const savedUser = localStorage.getItem('nexusUser');
    const savedRole = localStorage.getItem('nexusRole');
    
    // Load submissions count
    const history = JSON.parse(localStorage.getItem('nexusHistory') || '[]');
    const today = now.toLocaleDateString();
    todaySubmissions = history.filter(sub => sub.date === today).length;
    
    if (savedUser && savedRole) {
        currentUser = savedUser;
        currentRole = savedRole;
        loadDashboard();
    }
}

// Switch Views
function showSection(section) {
    [loginSection, dashboardSection, checklistSection].forEach(s => {
        s.classList.remove('active');
        setTimeout(() => s.classList.add('hidden'), 300); // fade out time
    });
    
    setTimeout(() => {
        section.classList.remove('hidden');
        section.classList.add('active');
    }, 300);
}

// Handle Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    currentUser = staffNameInput.value.trim();
    currentRole = roleSelect.value;
    
    localStorage.setItem('nexusUser', currentUser);
    localStorage.setItem('nexusRole', currentRole);
    
    loadDashboard();
});

// Load Dashboard
function loadDashboard() {
    document.getElementById('display-name').textContent = currentUser.split(' ')[0];
    document.getElementById('user-initial').textContent = currentUser.charAt(0).toUpperCase();
    document.getElementById('display-role').textContent = roleSelect.querySelector(`option[value="${currentRole}"]`)?.textContent || currentRole;
    
    const history = JSON.parse(localStorage.getItem('nexusHistory') || '[]');
    const todayStr = now.toLocaleDateString();
    
    // Check which ones user has already submitted today
    const userTodaySubmissions = history.filter(sub => sub.date === todayStr && sub.staffName === currentUser);
    
    // Update count to ONLY show this user's submissions
    todaySubmissions = userTodaySubmissions.length;
    document.querySelector('.summary-card h3').textContent = todaySubmissions;
    
    const submittedIds = new Set(userTodaySubmissions.map(sub => sub.checklistId));
    
    const grid = document.getElementById('checklist-grid');
    grid.innerHTML = '';
    
    const checklistsData = getChecklistsData();
    const lists = checklistsData[currentRole] || [];
    
    if (lists.length === 0) {
        grid.innerHTML = '<div style="text-align: center; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 12px; margin-top: 10px;"><p style="margin-bottom: 10px; color: #ff9800;">No checklists found for this role!</p><p style="font-size: 13px;">If you uploaded a custom JSON, make sure the role key exactly matches the system (e.g. "manager"). Click Sign Out to start over.</p></div>';
    } else {
        lists.forEach(list => {
            const isSubmitted = submittedIds.has(list.id);
            const card = document.createElement('div');
            card.className = 'checklist-card';
            card.innerHTML = `
                <span class="card-title" style="${isSubmitted ? 'color: var(--success); text-decoration: line-through;' : ''}">${list.title}</span>
                <span class="material-icons-round card-icon" style="${isSubmitted ? 'color: var(--success);' : ''}">${isSubmitted ? 'check_circle' : 'chevron_right'}</span>
            `;
            card.addEventListener('click', () => openChecklist(list));
            grid.appendChild(card);
        });
    }
    
    showSection(dashboardSection);
}

// Logout
document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('nexusUser');
    localStorage.removeItem('nexusRole');
    currentUser = null;
    currentRole = null;
    staffNameInput.value = '';
    roleSelect.selectedIndex = 0;
    showSection(loginSection);
});

// Open specific checklist
function openChecklist(list) {
    activeChecklist = list;
    answersMap.clear();
    
    document.getElementById('checklist-title').textContent = list.title;
    document.getElementById('checklist-notes').value = '';
    document.getElementById('submit-checklist-btn').disabled = true;
    updateProgress();
    
    const tasksContainer = document.getElementById('tasks-list');
    tasksContainer.innerHTML = '';
    
    list.tasks.forEach((task, index) => {
        const item = document.createElement('div');
        item.className = 'task-item';
        item.dataset.index = index;
        
        const isNumber = task.startsWith("[number]");
        const displayText = isNumber ? task.replace("[number]", "").trim() : task;
        
        item.innerHTML = `
            <div class="task-content">
                <p>${displayText}</p>
            </div>
            <div class="action-group">
                ${isNumber ? 
                    `<input type="number" class="number-input" placeholder="Qty">` : 
                    `<button type="button" class="yn-btn yes" data-index="${index}">
                        <span class="material-icons-round" style="font-size: 16px;">check</span> Yes
                    </button>
                    <button type="button" class="yn-btn no" data-index="${index}">
                        <span class="material-icons-round" style="font-size: 16px;">close</span> No
                    </button>`
                }
            </div>
        `;
        
        if (isNumber) {
            const numInput = item.querySelector('.number-input');
            numInput.addEventListener('input', (e) => {
                if (e.target.value.trim() !== '') {
                    answersMap.set(index, e.target.value.trim());
                    item.classList.add('answered-number');
                } else {
                    answersMap.delete(index);
                    item.classList.remove('answered-number');
                }
                updateProgress();
            });
        } else {
            const yesBtn = item.querySelector('.yn-btn.yes');
            const noBtn = item.querySelector('.yn-btn.no');
            
            yesBtn.addEventListener('click', () => setAnswer(index, 'yes', item, yesBtn, noBtn));
            noBtn.addEventListener('click', () => setAnswer(index, 'no', item, yesBtn, noBtn));
        }
        
        tasksContainer.appendChild(item);
    });
    
    showSection(checklistSection);
}

function setAnswer(index, val, itemEl, yesBtn, noBtn) {
    answersMap.set(index, val);
    
    yesBtn.classList.remove('active');
    noBtn.classList.remove('active');
    itemEl.classList.remove('answered-yes', 'answered-no');
    
    if (val === 'yes') {
        yesBtn.classList.add('active');
        itemEl.classList.add('answered-yes');
    } else {
        noBtn.classList.add('active');
        itemEl.classList.add('answered-no');
    }
    
    updateProgress();
}

function updateProgress() {
    const total = activeChecklist.tasks.length;
    const completed = answersMap.size;
    const percentage = Math.round((completed / total) * 100);
    
    document.getElementById('progress-percentage').textContent = `${percentage}%`;
    document.getElementById('progress-fill').style.width = `${percentage}%`;
    
    document.getElementById('submit-checklist-btn').disabled = completed !== total;
}

// Back to Dashboard
document.getElementById('back-btn').addEventListener('click', () => {
    loadDashboard();
});

// Submit Checklist
document.getElementById('checklist-form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (answersMap.size !== activeChecklist.tasks.length) return;
    
    const notes = document.getElementById('checklist-notes').value;
    
    const detailedAnswers = activeChecklist.tasks.map((task, idx) => ({
        task: task,
        answer: answersMap.get(idx)
    }));
    
    const submission = {
        id: Date.now(),
        checklistId: activeChecklist.id,
        checklistTitle: activeChecklist.title,
        staffName: currentUser,
        role: currentRole,
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
        notes: notes,
        answers: detailedAnswers
    };
    
    const history = JSON.parse(localStorage.getItem('nexusHistory') || '[]');
    history.push(submission);
    localStorage.setItem('nexusHistory', JSON.stringify(history));
    
    // Trigger EmailJS if notes exist
    if (notes.trim() !== '') {
        const emailParams = {
            subject: `ATTENTION!: ${activeChecklist.title} Notes`,
            staff_name: currentUser,
            role: currentRole,
            date: now.toLocaleDateString(),
            notes: notes.trim()
        };
        
        // Send checklist notification payload natively bypassing Edge's script blockers
        const payload = {
            service_id: 'service_fgu7716',
            template_id: 'template_ovjeljp',
            user_id: '7mLQdoFD1B91UJmyx', // Public Key
            template_params: emailParams
        };

        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (response.ok) {
                console.log('Email Notification SUCCESS! (Native Fetch)');
            } else {
                response.text().then(text => console.error('Email Notification FAILED...', text));
            }
        })
        .catch(error => {
            console.error('Email Notification NETWORK ERROR...', error);
        });
    }
    
    // Show success
    successOverlay.classList.remove('hidden');
    todaySubmissions++;
});

document.getElementById('close-success-btn').addEventListener('click', () => {
    successOverlay.classList.add('hidden');
    loadDashboard();
});

const successLogoutBtn = document.getElementById('success-logout-btn');
if (successLogoutBtn) {
    successLogoutBtn.addEventListener('click', () => {
        successOverlay.classList.add('hidden');
        document.getElementById('logout-btn').click();
    });
}

// Admin Features
const adminToolsBtn = document.getElementById('admin-tools-btn');
const adminModal = document.getElementById('admin-modal');
const closeAdminBtn = document.getElementById('close-admin-btn');
const resetAdminBtn = document.getElementById('reset-admin-btn');
const saveAdminBtn = document.getElementById('save-admin-btn');
const uploadJson = document.getElementById('upload-json');

let pendingJsonData = null;

if (adminToolsBtn) {
    adminToolsBtn.addEventListener('click', () => {
        let currentPin = localStorage.getItem('nexusAdminPin');
        if (!currentPin) {
            currentPin = prompt("Welcome! Please set a Master Admin PIN for future access (keep it safe!):");
            if (currentPin && currentPin.trim().length > 0) {
                localStorage.setItem('nexusAdminPin', currentPin);
            } else {
                return;
            }
        }
        
        const entered = prompt("Security Check: Enter Admin PIN");
        if (entered === localStorage.getItem('nexusAdminPin')) {
            adminModal.classList.remove('hidden');
            renderAdminHistory();
        } else if (entered !== null) {
            alert("Access Denied: Incorrect PIN!");
        }
    });
}

if (closeAdminBtn) {
    closeAdminBtn.addEventListener('click', () => {
        adminModal.classList.add('hidden');
        pendingJsonData = null;
        uploadJson.value = '';
    });
}

if (resetAdminBtn) {
    resetAdminBtn.addEventListener('click', () => {
        if(confirm("Are you sure you want to reset all checklists to the system defaults? Your custom JSON data will be lost.")) {
            localStorage.removeItem('nexusChecklists');
            alert('System reset to default checklists successfully!');
            populateRoles();
            adminModal.classList.add('hidden');
            uploadJson.value = '';
            document.getElementById('logout-btn').click();
        }
    });
}

if (uploadJson) {
    uploadJson.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                pendingJsonData = JSON.parse(event.target.result);
                // Basic validation
                if (typeof pendingJsonData === 'object' && Object.keys(pendingJsonData).length > 0) {
                    alert('File parsed successfully! Click Save to apply.');
                } else {
                    throw new Error('Empty or invalid structure');
                }
            } catch (err) {
                alert('Invalid JSON file format. Please check the template.');
                pendingJsonData = null;
                uploadJson.value = '';
            }
        };
        reader.readAsText(file);
    });
}

const changePinBtn = document.getElementById('change-pin-btn');
if (changePinBtn) {
    changePinBtn.addEventListener('click', () => {
        const newPin = prompt("Enter new Master Admin PIN:");
        if (newPin && newPin.trim().length > 0) {
            localStorage.setItem('nexusAdminPin', newPin);
            alert("Master PIN updated successfully!");
        }
    });
}

if (saveAdminBtn) {
    saveAdminBtn.addEventListener('click', () => {
        if (pendingJsonData) {
            localStorage.setItem('nexusChecklists', JSON.stringify(pendingJsonData));
            alert('Custom checklists imported successfully!');
            populateRoles();
        }
        adminModal.classList.add('hidden');
        uploadJson.value = '';
        if (currentUser) {
            loadDashboard();
        }
    });
}

// Admin Sub-functions
function renderAdminHistory() {
    const listEl = document.getElementById('admin-history-list');
    if (!listEl) return;
    const history = JSON.parse(localStorage.getItem('nexusHistory') || '[]');
    
    if (history.length === 0) {
        listEl.innerHTML = '<p style="text-align: center; color: #888; font-style: italic;">No history records found.</p>';
        return;
    }
    
    listEl.innerHTML = ''; // clear
    history.slice().reverse().forEach(sub => {
        const item = document.createElement('div');
        item.style = "background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; border: 1px solid transparent; transition: all 0.2s;";
        item.onmouseenter = () => { item.style.background = "rgba(0, 229, 255, 0.1)"; item.style.borderColor = "var(--accent)"; };
        item.onmouseleave = () => { item.style.background = "rgba(255,255,255,0.05)"; item.style.borderColor = "transparent"; };
        
        item.innerHTML = `
            <div>
                <strong style="color: white; font-size: 14px;">${sub.checklistTitle}</strong> <span style="color: var(--accent); font-size: 11px; margin-left: 5px;">${sub.date} ${sub.time}</span>
                <div style="font-size: 12px; margin-top: 4px; color: #aaa;">By: ${sub.staffName} | Area: ${sub.role}</div>
            </div>
            <div style="display: flex; gap: 8px;">
                <div class="view-btn" style="background: var(--success); color: #000; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: bold; cursor: pointer;">View</div>
                <div class="dl-btn" style="background: rgba(0, 229, 255, 0.2); color: var(--accent); border: 1px solid var(--accent); padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: bold; cursor: pointer;">Download</div>
            </div>
        `;
        
        item.querySelector('.view-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            openDeepViewer(sub);
        });
        
        item.querySelector('.dl-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            downloadSingleCSV(sub);
        });
        
        listEl.appendChild(item);
    });
}

const deepViewerModal = document.getElementById('deep-viewer-modal');
const closeDvBtn = document.getElementById('close-dv-btn');

if (closeDvBtn) {
    closeDvBtn.addEventListener('click', () => {
        deepViewerModal.classList.add('hidden');
    });
}

let currentDeepViewSub = null;

function openDeepViewer(sub) {
    currentDeepViewSub = sub;
    document.getElementById('dv-title').textContent = sub.checklistTitle;
    document.getElementById('dv-meta').innerHTML = `
        <strong>Staff:</strong> ${sub.staffName}<br>
        <strong>Area:</strong> ${sub.role}<br>
        <strong>Submitted:</strong> ${sub.date} at ${sub.time}
    `;
    
    const ansContainer = document.getElementById('dv-answers');
    ansContainer.innerHTML = '';
    
    if (sub.answers && sub.answers.length > 0) {
        sub.answers.forEach(ans => {
            const row = document.createElement('div');
            row.style = "background: rgba(0,0,0,0.3); padding: 8px; border-radius: 4px; border-left: 3px solid var(--accent); display: flex; justify-content: space-between; align-items: center; gap: 10px;";
            
            let badgeColor = (ans.answer === 'yes') ? 'var(--success)' : (ans.answer === 'no' ? 'var(--alert)' : '#00e5ff');
            
            row.innerHTML = `
                <div style="font-size: 12px; flex: 1; line-height: 1.4; color: #e0e0e0;">${ans.task}</div>
                <div style="background: ${badgeColor}; color: #000; font-weight: bold; font-size: 11px; padding: 3px 8px; border-radius: 12px; text-transform: uppercase;">
                    ${ans.answer}
                </div>
            `;
            ansContainer.appendChild(row);
        });
    } else {
        ansContainer.innerHTML = '<div style="color: #888; font-style: italic; font-size: 12px;">No checklist data found.</div>';
    }
    
    const notesContainer = document.getElementById('dv-notes-container');
    if (sub.notes && sub.notes.trim() !== '') {
        notesContainer.style.display = 'block';
        document.getElementById('dv-notes').textContent = sub.notes;
    } else {
        notesContainer.style.display = 'none';
    }
    
    deepViewerModal.classList.remove('hidden');
}

const exportBtn = document.getElementById('export-history-btn');
if (exportBtn) {
    exportBtn.addEventListener('click', () => {
        const history = JSON.parse(localStorage.getItem('nexusHistory') || '[]');
        if (history.length === 0) {
            alert("No history to export.");
            return;
        }
        
        let csvContent = "Date,Time,Staff Name,Role,Checklist Title,Check Item,Answer\n";
        
        history.forEach(sub => {
            if (sub.answers && sub.answers.length > 0) {
                sub.answers.forEach(ans => {
                    let taskStr = '"' + (ans.task || '').replace(/"/g, '""') + '"';
                    let ansStr = '"' + (ans.answer || '').replace(/"/g, '""') + '"';
                    csvContent += `${sub.date},${sub.time},"${sub.staffName}","${sub.role}","${sub.checklistTitle}",${taskStr},${ansStr}\n`;
                });
            } else {
                csvContent += `${sub.date},${sub.time},"${sub.staffName}","${sub.role}","${sub.checklistTitle}","None","None"\n`;
            }
        });
        
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `Checklist_Export_${new Date().toLocaleDateString().replace(/\\//g, '-')}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

function downloadSingleCSV(sub) {
    let csvContent = "Date,Time,Staff Name,Role,Checklist Title,Check Item,Answer\n";
    
    if (sub.answers && sub.answers.length > 0) {
        sub.answers.forEach(ans => {
            let taskStr = '"' + (ans.task || '').replace(/"/g, '""') + '"';
            let ansStr = '"' + (ans.answer || '').replace(/"/g, '""') + '"';
            csvContent += `${sub.date},${sub.time},"${sub.staffName}","${sub.role}","${sub.checklistTitle}",${taskStr},${ansStr}\n`;
        });
    }
    if (sub.notes) {
        csvContent += `\n"Notes/Comments:","${sub.notes.replace(/"/g, '""')}"\n`;
    }
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${sub.checklistTitle.replace(/\s+/g, '_')}_${sub.date.replace(/\//g, '-')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const exportSingleBtn = document.getElementById('export-single-dv-btn');
if (exportSingleBtn) {
    exportSingleBtn.addEventListener('click', () => {
        if (!currentDeepViewSub) return;
        downloadSingleCSV(currentDeepViewSub);
    });
}

const clearBtn = document.getElementById('clear-history-btn');
if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to permanently delete all submitted checklist history? This cannot be undone.")) {
            localStorage.setItem('nexusHistory', '[]');
            renderAdminHistory();
            if (currentUser) loadDashboard();
            alert("History cleared successfully.");
        }
    });
}

// Run
init();
