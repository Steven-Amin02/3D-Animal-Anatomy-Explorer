// ===============================
// Anatomy Data
// ===============================
const anatomyData = {
  normal: {
    overview: {
      title: "Normal Cat Anatomy",
      category: "Complete Structure",
      icon: "🐱",
      description:
        "The complete feline anatomy showcasing the natural external appearance and internal structure. Cats are highly specialized carnivores with remarkable agility, acute senses, and efficient hunting adaptations.",
      details: [
        { emoji: "🦴", label: "Skeleton", value: "244 bones providing flexibility and strength" },
        { emoji: "💪", label: "Muscles", value: "Over 500 muscles enabling precise movement" },
        { emoji: "❤️", label: "Organs", value: "Specialized digestive and circulatory systems" },
      ],
    },
    head: {
      title: "Head & Skull",
      category: "Skeletal Structure",
      icon: "🐱",
      description:
        "The feline skull is compact and rounded, with large eye sockets for excellent vision. Cats have specialized jaw structures for their carnivorous diet.",
      details: [
        { emoji: "🧠", label: "Function", value: "Houses brain and sensory organs optimized for hunting" },
        { emoji: "🔬", label: "Composition", value: "29 bones including cranium and facial bones" },
        { emoji: "⚡", label: "Features", value: "Large eye sockets, acute hearing structures, whisker follicles" },
      ],
    },
    torso: {
      title: "Torso & Ribcage",
      category: "Core Structure",
      icon: "🫁",
      description:
        "The cat's flexible spine and ribcage allow for incredible agility and the ability to twist mid-air. The thoracic cavity protects vital organs.",
      details: [
        { emoji: "❤️", label: "Protection", value: "13 pairs of ribs shield heart, lungs, and major vessels" },
        { emoji: "🫁", label: "Respiration", value: "Flexible ribcage enables efficient breathing during activity" },
        { emoji: "🔗", label: "Flexibility", value: "Highly mobile spine allows extreme body contortions" },
      ],
    },
    legs: {
      title: "Legs & Paws",
      category: "Locomotion System",
      icon: "🐾",
      description:
        "Cats are digitigrade, walking on their toes. Their legs are built for explosive power, climbing, and silent stalking.",
      details: [
        { emoji: "🦴", label: "Bones", value: "Femur, tibia, fibula, and specialized paw bones" },
        { emoji: "🔄", label: "Joints", value: "Flexible joints enable jumping up to 6x body length" },
        { emoji: "⚖️", label: "Function", value: "Silent movement, climbing, pouncing, landing" },
      ],
    },
    tail: {
      title: "Tail",
      category: "Balance & Communication",
      icon: "🐈",
      description:
        "The cat's tail contains 19-23 vertebrae and serves as a counterbalance during acrobatic movements and communicates emotional states.",
      details: [
        { emoji: "⚖️", label: "Balance", value: "Acts as dynamic counterweight during jumps and turns" },
        { emoji: "💬", label: "Communication", value: "Position and movement express mood and intent" },
        { emoji: "🦴", label: "Structure", value: "19-23 caudal vertebrae with extensive musculature" },
      ],
    },
    spine: {
      title: "Spine & Vertebrae",
      category: "Central Support",
      icon: "🦴",
      description:
        "Cats have an exceptionally flexible spine with 53 vertebrae (7 more than humans), enabling their legendary agility and ability to always land on their feet.",
      details: [
        { emoji: "🛡️", label: "Protection", value: "Shields spinal cord while allowing extreme flexibility" },
        { emoji: "💪", label: "Flexibility", value: "53 loosely connected vertebrae enable 180° rotation" },
        { emoji: "🔄", label: "Righting Reflex", value: "Flexible spine allows mid-air body rotation" },
      ],
    },
    unknown: {
      title: "Cat Anatomy Part",
      category: "Feline Structure",
      icon: "🔍",
      description: "This part doesn't have detailed info yet.",
      details: [{ emoji: "📌", label: "Tip", value: "Map mesh mesh names to data keys for richer info." }],
    },
  },
  muscle: {
    overview: {
      title: "Cat Muscular System",
      category: "Muscle Anatomy",
      icon: "💪",
      description:
        "The feline muscular system consists of over 500 individual muscles that provide exceptional power, speed, and precision. Cats have a high proportion of fast-twitch muscle fibers for explosive movements.",
      details: [
        { emoji: "⚡", label: "Fast-Twitch", value: "High percentage enables explosive jumping and sprinting" },
        { emoji: "🏃", label: "Speed", value: "Can reach 30 mph in short bursts" },
        { emoji: "💪", label: "Power", value: "Jump up to 6 times their body length" },
      ],
    },
    head: {
      title: "Facial & Jaw Muscles",
      category: "Muscular System",
      icon: "💪",
      description:
        "Powerful jaw muscles give cats one of the strongest bite forces relative to size. Facial muscles control whiskers and expressions.",
      details: [
        { emoji: "🍖", label: "Bite Force", value: "Masseter & temporalis deliver powerful carnivore bite" },
        { emoji: "😺", label: "Expression", value: "Subtle facial muscles communicate with other cats" },
        { emoji: "⚡", label: "Whiskers", value: "Specialized muscles control whisker positioning" },
      ],
    },
    torso: {
      title: "Core & Respiratory Muscles",
      category: "Muscular System",
      icon: "🫁",
      description:
        "Highly developed core muscles enable cats to twist, turn, and maintain balance during complex movements.",
      details: [
        { emoji: "🫁", label: "Breathing", value: "Diaphragm & intercostals support rapid breathing during hunting" },
        { emoji: "💪", label: "Core", value: "Powerful abdominals enable mid-air body control" },
        { emoji: "🔄", label: "Agility", value: "Obliques allow extreme spinal rotation and twisting" },
      ],
    },
    legs: {
      title: "Leg Musculature",
      category: "Muscular System",
      icon: "🦵",
      description: "Explosive leg muscles allow cats to jump, climb, and sprint with remarkable power and precision.",
      details: [
        { emoji: "⚡", label: "Power", value: "Fast-twitch muscles enable explosive jumping and sprinting" },
        { emoji: "🏃", label: "Speed", value: "Can reach speeds up to 30 mph in short bursts" },
        { emoji: "💪", label: "Climbing", value: "Specialized muscles for vertical movement and gripping" },
      ],
    },
    tail: {
      title: "Tail Muscles",
      category: "Muscular System",
      icon: "🐾",
      description: "Complex network of muscles provides precise tail control for balance and communication.",
      details: [
        { emoji: "🔄", label: "Control", value: "Multiple muscle layers enable precise positioning" },
        { emoji: "💬", label: "Expression", value: "Rapid movements communicate excitement or agitation" },
        { emoji: "⚖️", label: "Balance", value: "Dynamic adjustments during acrobatic movements" },
      ],
    },
    back: {
      title: "Back Musculature",
      category: "Muscular System",
      icon: "💪",
      description:
        "Layered back muscles support the flexible spine and enable the cat's characteristic arching and stretching.",
      details: [
        { emoji: "🦴", label: "Support", value: "Erector spinae maintain posture and spinal alignment" },
        { emoji: "💪", label: "Power", value: "Latissimus dorsi drives climbing and pulling motions" },
        { emoji: "🛡️", label: "Flexibility", value: "Multiple layers allow extreme spinal extension" },
      ],
    },
    unknown: {
      title: "Cat Muscle",
      category: "Feline Muscular System",
      icon: "🔍",
      description: "No detailed info available yet.",
      details: [{ emoji: "📌", label: "Tip", value: "Map mesh names to data keys for richer info." }],
    },
  },
  skeleton: {
    overview: {
      title: "Cat Skeletal System",
      category: "Bone Structure",
      icon: "🦴",
      description:
        "The cat skeleton contains 244 bones (30 more than humans) with an exceptionally flexible spine and specialized joints. This structure enables their legendary agility and ability to always land on their feet.",
      details: [
        { emoji: "🔢", label: "Bones", value: "244 total bones including 53 vertebrae" },
        { emoji: "🔄", label: "Flexibility", value: "Loose vertebral connections allow 180° rotation" },
        { emoji: "🐾", label: "Digitigrade", value: "Walk on toes for silent, efficient movement" },
      ],
    },
    head: {
      title: "Skull & Cranium",
      category: "Skeletal System",
      icon: "💀",
      description:
        "The cat skull features 29 bones with large orbits for eyes, specialized teeth sockets, and a shortened facial structure typical of carnivores.",
      details: [
        { emoji: "🦷", label: "Teeth", value: "30 teeth including specialized canines and carnassials" },
        { emoji: "👁️", label: "Eye Sockets", value: "Large forward-facing orbits for binocular vision" },
        { emoji: "⚡", label: "Jaw", value: "Hinged jaw with limited side-to-side movement" },
      ],
    },
    torso: {
      title: "Ribcage & Thorax",
      category: "Skeletal System",
      icon: "🦴",
      description:
        "The thoracic skeleton consists of 13 pairs of ribs protecting vital organs while maintaining flexibility for the cat's agile movements.",
      details: [
        { emoji: "❤️", label: "Protection", value: "13 rib pairs form protective cage for organs" },
        { emoji: "🔗", label: "Sternum", value: "Flexible sternum allows chest expansion" },
        { emoji: "💪", label: "Attachment", value: "Provides anchor points for powerful muscles" },
      ],
    },
    legs: {
      title: "Limb Bones",
      category: "Skeletal System",
      icon: "🦴",
      description:
        "Cat limbs are built for power and precision, with elongated bones and specialized joints for jumping and climbing.",
      details: [
        { emoji: "🦴", label: "Structure", value: "Scapula, humerus, radius, ulna, femur, tibia, fibula" },
        { emoji: "🐾", label: "Paws", value: "Digitigrade stance with retractable claw mechanisms" },
        { emoji: "🔄", label: "Joints", value: "Highly mobile shoulder and hip joints" },
      ],
    },
    tail: {
      title: "Caudal Vertebrae",
      category: "Skeletal System",
      icon: "🦴",
      description:
        "The tail skeleton consists of 19-23 small vertebrae that decrease in size toward the tip, providing flexibility and balance.",
      details: [
        { emoji: "🔢", label: "Count", value: "19-23 caudal vertebrae depending on breed" },
        { emoji: "🔄", label: "Flexibility", value: "Ball-and-socket joints between vertebrae" },
        { emoji: "⚖️", label: "Function", value: "Extends spine for balance and communication" },
      ],
    },
    spine: {
      title: "Vertebral Column",
      category: "Skeletal System",
      icon: "🦴",
      description:
        "The cat's spine contains 53 vertebrae with elastic cushioning discs, giving cats their remarkable flexibility and ability to squeeze through tight spaces.",
      details: [
        { emoji: "🔢", label: "Composition", value: "7 cervical, 13 thoracic, 7 lumbar, 3 sacral, 19-23 caudal" },
        { emoji: "🔄", label: "Flexibility", value: "Loose connections allow 180° spinal rotation" },
        { emoji: "🛡️", label: "Protection", value: "Neural canal protects spinal cord" },
      ],
    },
    pelvis: {
      title: "Pelvic Girdle",
      category: "Skeletal System",
      icon: "🦴",
      description:
        "The narrow pelvis provides attachment for powerful hind leg muscles while maintaining the cat's slim, agile build.",
      details: [
        { emoji: "💪", label: "Muscle Attachment", value: "Anchors powerful jumping and running muscles" },
        { emoji: "🔗", label: "Connection", value: "Links spine to hind limbs via sacrum" },
        { emoji: "⚡", label: "Design", value: "Narrow structure maintains agility" },
      ],
    },
    unknown: {
      title: "Skeletal Part",
      category: "Feline Skeleton",
      icon: "🔍",
      description: "No detailed info available yet.",
      details: [{ emoji: "📌", label: "Tip", value: "Map mesh names to data keys for richer info." }],
    },
  },
}

// ===============================
// Mesh Mapping & Hotspots
// ===============================
const partMap = { normal: {}, muscle: {}, skeleton: {} }

const hotspotConfig = {
  normal: [
    { meshName: "Head", key: "head", offset: { x: 0, y: 0.06, z: 0 } },
    { meshName: "Body", key: "torso", offset: { x: 0.02, y: 0, z: 0 } },
    { meshName: "Leg_FL", key: "legs", offset: { x: 0, y: 0.04, z: 0 } },
    { meshName: "Tail", key: "tail", offset: { x: 0, y: 0, z: 0.02 } },
    { meshName: "Spine", key: "spine", offset: { x: 0, y: 0.02, z: 0 } },
  ],
  muscle: [
    { meshName: "Masseter", key: "head", offset: { x: 0, y: 0.02, z: 0 } },
    { meshName: "Intercostal", key: "torso", offset: { x: -0.02, y: 0, z: 0 } },
    { meshName: "Quadriceps", key: "legs", offset: { x: 0, y: 0.03, z: 0 } },
    { meshName: "Tail_Muscle", key: "tail", offset: { x: 0, y: 0, z: -0.02 } },
    { meshName: "Latissimus", key: "back", offset: { x: -0.02, y: 0.02, z: 0 } },
  ],
  skeleton: [
    { meshName: "Skull", key: "head", offset: { x: 0, y: 0.05, z: 0 } },
    { meshName: "Ribcage", key: "torso", offset: { x: 0.02, y: 0, z: 0 } },
    { meshName: "Femur", key: "legs", offset: { x: 0, y: 0.04, z: 0 } },
    { meshName: "Caudal", key: "tail", offset: { x: 0, y: 0, z: 0.02 } },
    { meshName: "Vertebrae", key: "spine", offset: { x: 0, y: 0.02, z: 0 } },
    { meshName: "Pelvis", key: "pelvis", offset: { x: 0, y: -0.02, z: 0 } },
  ],
}

// ===============================
// Three.js Core
// ===============================
let scene, camera, renderer, controls, currentModel
const normalModel = null,
  muscleModel = null,
  skeletonModel = null
let raycaster, mouse
const selectedMesh = null
let currentState = "normal"
const hotspots = []

const MODEL_PATHS = {
  normal: "normal.glb",
  muscle: "muscle.glb",
  skeleton: "models/Chat.glb",
}

// Import Three.js
const THREE = window.THREE

// ===============================
// Utility Functions
// ===============================
function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments

    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// ===============================
// State Management
// ===============================
let viewers = {}

// ===============================
// Intro Screen Handler
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const introScreen = document.getElementById("introScreen")
  const startButton = document.getElementById("startButton")

  startButton.addEventListener("click", () => {
    introScreen.classList.add("hidden")
    setTimeout(() => {
      introScreen.remove()
    }, 800)
  })

  // Initialize after intro
  setTimeout(init, 100)
})

// ===============================
// Initialization
// ===============================
function init() {
  console.log("[v0] Initializing Cat Anatomy Explorer...")

  // Get model viewer elements
  viewers = {
    normal: document.getElementById("normalViewer"),
    muscle: document.getElementById("muscleViewer"),
    skeleton: document.getElementById("skeletonViewer"),
  }

  console.log("[v0] Model viewers found:", Object.keys(viewers))

  Object.entries(viewers).forEach(([key, viewer]) => {
    if (!viewer) {
      console.error(`[v0] Model viewer for ${key} not found!`)
      return
    }

    viewer.addEventListener("load", () => {
      console.log(`[v0] ${key} model loaded successfully`)
    })

    viewer.addEventListener("error", (event) => {
      console.error(`[v0] Error loading ${key} model:`, event)
      showModelError(key)
    })

    viewer.addEventListener("model-visibility", (event) => {
      console.log(`[v0] ${key} model visibility changed:`, event.detail.visible)
    })

    viewer.addEventListener("progress", (event) => {
      const progress = event.detail.totalProgress * 100
      console.log(`[v0] ${key} model loading progress: ${progress.toFixed(0)}%`)
    })
  })

  setupEventListeners()

  // Show initial anatomy info
  showAnatomyInfo("overview")

  console.log("[v0] Initialization complete. Current state:", currentState)
}

function showModelError(modelType) {
  const errorMessage = `
    <div style="padding: 20px; text-align: center; color: var(--danger);">
      <h3>⚠️ Model Not Found</h3>
      <p>The ${modelType} model file could not be loaded.</p>
      <p style="font-size: 12px; color: var(--muted);">
        Expected path: /models/cat-${modelType}.glb
      </p>
      <p style="font-size: 12px; color: var(--muted);">
        Please ensure the GLB model file exists at this location.
      </p>
    </div>
  `

  const viewer = viewers[modelType]
  if (viewer) {
    const poster = viewer.querySelector('[slot="poster"]')
    if (poster) {
      poster.innerHTML = errorMessage
    }
  }
}

// ===============================
// Event Listeners Setup
// ===============================
function setupEventListeners() {
  // Theme toggle
  document.getElementById("themeToggle").addEventListener("click", toggleTheme)

  // State toggle (Normal/Muscle/Skeleton)
  document.querySelectorAll(".state-card").forEach((card) => {
    card.addEventListener("click", () => switchState(card.dataset.state))
  })

  // Control buttons
  document.getElementById("resetView").addEventListener("click", resetView)
  document.getElementById("arButton").addEventListener("click", activateAR)

  // Model viewer interactions
  Object.values(viewers).forEach((viewer) => {
    viewer.addEventListener("click", () => {
      showAnatomyInfo("overview")
    })
  })

  // Info drawer
  document.getElementById("drawerClose").addEventListener("click", closeDrawer)
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab))
  })
}

// ===============================
// Theme Toggle
// ===============================
function toggleTheme() {
  document.body.classList.toggle("dark-mode")
  const isDark = document.body.classList.contains("dark-mode")
  document.getElementById("themeToggle").textContent = isDark ? "☀️" : "🌙"

  // Update model viewer environment
  Object.values(viewers).forEach((viewer) => {
    viewer.environmentImage = isDark ? "neutral" : "neutral"
  })
}

// ===============================
// State Switching (Normal/Muscle/Skeleton)
// ===============================
function switchState(state) {
  if (state === currentState) return

  console.log(`[v0] Switching state from ${currentState} to ${state}`)

  currentState = state

  // Update card states
  document.querySelectorAll(".state-card").forEach((card) => {
    const isActive = card.dataset.state === state
    card.setAttribute("aria-selected", isActive)
  })

  // Switch model viewers
  Object.entries(viewers).forEach(([key, viewer]) => {
    const isActive = key === state
    viewer.classList.toggle("active", isActive)
    console.log(`[v0] ${key} viewer active:`, isActive)
  })

  // Show anatomy info for new state
  showAnatomyInfo("overview")
}

// ===============================
// Info Display
// ===============================
function showAnatomyInfo(key) {
  const data = anatomyData[currentState][key] || anatomyData[currentState].overview

  document.getElementById("drawerIcon").textContent = data.icon
  document.getElementById("drawerTitle").textContent = data.title
  document.getElementById("drawerCategory").textContent = data.category
  document.getElementById("drawerDesc").textContent = data.description

  // Populate details tab
  const detailsContainer = document.getElementById("drawerDetails")
  detailsContainer.innerHTML = ""

  data.details.forEach((detail) => {
    const detailItem = document.createElement("div")
    detailItem.className = "detail-item"
    detailItem.innerHTML = `
      <div class="detail-emoji">${detail.emoji}</div>
      <div class="detail-content">
        <div class="detail-label">${detail.label}</div>
        <div class="detail-value">${detail.value}</div>
      </div>
    `
    detailsContainer.appendChild(detailItem)
  })

  // Show drawer
  const drawer = document.getElementById("infoDrawer")
  drawer.classList.add("open")
}

function closeDrawer() {
  document.getElementById("infoDrawer").classList.remove("open")
}

function switchTab(tabName) {
  // Update tab buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabName)
  })

  // Show corresponding content
  document.getElementById("tab-overview").style.display = tabName === "overview" ? "block" : "none"
  document.getElementById("tab-details").style.display = tabName === "details" ? "block" : "none"
  document.getElementById("tab-media").style.display = tabName === "media" ? "block" : "none"
}

// ===============================
// Camera Controls
// ===============================
function resetView() {
  const activeViewer = viewers[currentState]
  console.log(`[v0] Resetting view for ${currentState} viewer`)

  if (activeViewer) {
    activeViewer.resetTurntableRotation()
    activeViewer.cameraOrbit = "0deg 75deg 105%"
    activeViewer.fieldOfView = "45deg"
    console.log("[v0] View reset complete")
  } else {
    console.error("[v0] No active viewer found for reset")
  }
}

function activateAR() {
  const activeViewer = viewers[currentState]
  console.log(`[v0] Attempting to activate AR for ${currentState} viewer`)

  if (activeViewer && activeViewer.canActivateAR) {
    activeViewer.activateAR()
    console.log("[v0] AR activated")
  } else {
    console.warn("[v0] AR not available on this device/browser")
    alert("AR is not available on this device or browser.")
  }
}
