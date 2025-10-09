// ===============================
// Anatomy Data
// ===============================
const anatomyData = {
  normal: {
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
      details: [{ emoji: "📌", label: "Tip", value: "Map mesh names to data keys for richer info." }],
    },
  },
  muscle: {
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
let normalModel = null,
  muscleModel = null,
  skeletonModel = null
let raycaster, mouse
const selectedMesh = null
let currentState = "normal"
let hotspots = []

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

init()

// ===============================
// Initialization
// ===============================
function init() {
  const canvas = document.getElementById("canvas3d")

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
  camera.position.set(0, 1, 3)

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.outputEncoding = THREE.sRGBEncoding
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.2

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.9)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(5, 10, 7.5)
  directionalLight.castShadow = true
  directionalLight.shadow.camera.near = 0.1
  directionalLight.shadow.camera.far = 50
  directionalLight.shadow.mapSize.width = 1024
  directionalLight.shadow.mapSize.height = 1024
  scene.add(directionalLight)

  const fillLight = new THREE.DirectionalLight(0xffffff, 0.3)
  fillLight.position.set(-5, 5, -5)
  scene.add(fillLight)

  controls = new THREE.OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.minDistance = 1
  controls.maxDistance = 10
  controls.maxPolarAngle = Math.PI / 1.5
  controls.autoRotate = true
  controls.autoRotateSpeed = 0.5

  raycaster = new THREE.Raycaster()
  mouse = new THREE.Vector2()

  setupEventListeners()

  animate()
}

// ===============================
// Event Listeners Setup
// ===============================
function setupEventListeners() {
  // Theme toggle
  document.getElementById("themeToggle").addEventListener("click", toggleTheme)

  // State toggle (Normal/Muscle/Skeleton)
  document.querySelectorAll(".state-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchState(btn.dataset.state))
  })

  // File uploads
  document.getElementById("normalModel").addEventListener("change", (e) => handleFileUpload(e, "normal"))
  document.getElementById("muscleModel").addEventListener("change", (e) => handleFileUpload(e, "muscle"))
  document.getElementById("skeletonModel").addEventListener("change", (e) => handleFileUpload(e, "skeleton"))

  // Control buttons
  document.getElementById("resetView").addEventListener("click", resetView)
  document.getElementById("zoomIn").addEventListener("click", () => zoomCamera(0.8))
  document.getElementById("zoomOut").addEventListener("click", () => zoomCamera(1.2))

  // Canvas interactions
  const canvas = document.getElementById("canvas3d")
  canvas.addEventListener("click", onCanvasClick)
  canvas.addEventListener("mousemove", throttle(onCanvasMouseMove, 50))
  canvas.addEventListener("dblclick", onCanvasDoubleClick)

  // Info drawer
  document.getElementById("drawerClose").addEventListener("click", closeDrawer)
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab))
  })

  // Window resize
  window.addEventListener("resize", onWindowResize)
}

// ===============================
// Theme Toggle
// ===============================
function toggleTheme() {
  document.body.classList.toggle("dark-mode")
  const isDark = document.body.classList.contains("dark-mode")
  document.getElementById("themeToggle").textContent = isDark ? "☀️" : "🌙"

  // Update scene background
  scene.background = isDark ? new THREE.Color(0x1f2937) : new THREE.Color(0xf9fafb)
}

// ===============================
// State Switching (Normal/Muscle/Skeleton)
// ===============================
function switchState(state) {
  if (state === currentState) return

  currentState = state

  // Update button states
  document.querySelectorAll(".state-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.state === state)
    btn.setAttribute("aria-selected", btn.dataset.state === state)
  })

  // Switch models - hide all, show only the active one
  if (normalModel) normalModel.visible = state === "normal"
  if (muscleModel) muscleModel.visible = state === "muscle"
  if (skeletonModel) skeletonModel.visible = state === "skeleton"

  // Update hotspots
  updateHotspots()

  // Close drawer when switching
  closeDrawer()
}

// ===============================
// File Upload & Model Loading
// ===============================
function handleFileUpload(event, modelType) {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    loadModel(e.target.result, modelType)
  }
  reader.readAsDataURL(file)

  // Update upload UI
  const uploadArea = document.getElementById(modelType + "Upload")
  uploadArea.classList.add("uploaded")
  uploadArea.querySelector(".upload-text").textContent = `✓ ${file.name}`
}

function loadModel(dataUrl, modelType) {
  showLoading(true, `Loading ${modelType} model...`)

  const loader = new THREE.GLTFLoader()

  loader.load(
    dataUrl,
    (gltf) => {
      const model = gltf.scene

      // Update to handle skeleton model removal
      if (modelType === "normal" && normalModel) {
        scene.remove(normalModel)
      } else if (modelType === "muscle" && muscleModel) {
        scene.remove(muscleModel)
      } else if (modelType === "skeleton" && skeletonModel) {
        scene.remove(skeletonModel)
      }

      // Setup model
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true

          // Store mesh in partMap for easy lookup
          const meshName = child.name
          partMap[modelType][meshName] = child
        }
      })

      // Center and scale model
      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())
      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = 2 / maxDim

      model.scale.setScalar(scale)
      model.position.sub(center.multiplyScalar(scale))

      // Add to scene
      scene.add(model)

      // Update to handle skeleton model assignment
      if (modelType === "normal") {
        normalModel = model
        model.visible = currentState === "normal"
      } else if (modelType === "muscle") {
        muscleModel = model
        model.visible = currentState === "muscle"
      } else if (modelType === "skeleton") {
        skeletonModel = model
        model.visible = currentState === "skeleton"
      }

      // Create hotspots for this model
      updateHotspots()

      showLoading(false)
    },
    (progress) => {
      const percent = ((progress.loaded / progress.total) * 100).toFixed(0)
      showLoading(true, `Loading ${modelType} model... ${percent}%`)
    },
    (error) => {
      console.error("Error loading model:", error)
      showLoading(false)
      alert(`Failed to load ${modelType} model. Please try again.`)
    },
  )
}

// ===============================
// Hotspot Management
// ===============================
function updateHotspots() {
  // Clear existing hotspots
  hotspots.forEach((h) => h.element.remove())
  hotspots = []

  const config = hotspotConfig[currentState]
  if (!config) return

  // Update to get the correct model based on current state
  const model = currentState === "normal" ? normalModel : currentState === "muscle" ? muscleModel : skeletonModel
  if (!model) return

  config.forEach(({ meshName, key, offset }) => {
    const mesh = partMap[currentState][meshName]
    if (!mesh) return

    // Get world position of mesh
    const worldPos = new THREE.Vector3()
    mesh.getWorldPosition(worldPos)
    worldPos.add(new THREE.Vector3(offset.x, offset.y, offset.z))

    // Create hotspot element
    const hotspotEl = document.createElement("div")
    hotspotEl.className = "hotspot"
    hotspotEl.dataset.key = key
    hotspotEl.dataset.label = anatomyData[currentState][key]?.title || key

    hotspotEl.addEventListener("click", () => {
      showPartInfo(key)
    })

    document.getElementById("hotspotLayer").appendChild(hotspotEl)

    hotspots.push({
      element: hotspotEl,
      position: worldPos,
      key: key,
    })
  })
}

function updateHotspotPositions() {
  hotspots.forEach((hotspot) => {
    const screenPos = hotspot.position.clone()
    screenPos.project(camera)

    const canvas = document.getElementById("canvas3d")
    const x = (screenPos.x * 0.5 + 0.5) * canvas.clientWidth
    const y = (screenPos.y * -0.5 + 0.5) * canvas.clientHeight

    // Check if behind camera
    if (screenPos.z > 1) {
      hotspot.element.style.display = "none"
    } else {
      hotspot.element.style.display = "block"
      hotspot.element.style.left = x + "px"
      hotspot.element.style.top = y + "px"
    }
  })
}

// ===============================
// Canvas Interactions
// ===============================
function onCanvasClick(event) {
  // Handled by hotspots
}

function onCanvasMouseMove(event) {
  const canvas = document.getElementById("canvas3d")
  const rect = canvas.getBoundingClientRect()

  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

  // Raycast for hover effects
  raycaster.setFromCamera(mouse, camera)
  const model = currentState === "normal" ? normalModel : currentState === "muscle" ? muscleModel : skeletonModel

  if (model) {
    const intersects = raycaster.intersectObject(model, true)

    if (intersects.length > 0) {
      canvas.style.cursor = "pointer"
    } else {
      canvas.style.cursor = "grab"
    }
  }
}

function onCanvasDoubleClick(event) {
  const canvas = document.getElementById("canvas3d")
  const rect = canvas.getBoundingClientRect()

  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

  raycaster.setFromCamera(mouse, camera)
  // Update to get the correct model based on current state
  const model = currentState === "normal" ? normalModel : currentState === "muscle" ? muscleModel : skeletonModel

  if (model) {
    const intersects = raycaster.intersectObject(model, true)

    if (intersects.length > 0) {
      const mesh = intersects[0].object
      const meshName = mesh.name

      // Find matching key in anatomy data
      let foundKey = "unknown"
      for (const [key, data] of Object.entries(anatomyData[currentState])) {
        if (meshName.toLowerCase().includes(key.toLowerCase())) {
          foundKey = key
          break
        }
      }

      showPartInfo(foundKey)
    }
  }
}

// ===============================
// Info Drawer
// ===============================
function showPartInfo(key) {
  const data = anatomyData[currentState][key] || anatomyData[currentState].unknown

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
  camera.position.set(0, 1, 3)
  controls.target.set(0, 0, 0)
  controls.update()
}

function zoomCamera(factor) {
  const direction = new THREE.Vector3()
  camera.getWorldDirection(direction)

  const distance = camera.position.distanceTo(controls.target)
  const newDistance = distance * factor

  if (newDistance >= controls.minDistance && newDistance <= controls.maxDistance) {
    camera.position.addScaledVector(direction, distance - newDistance)
  }
}

// ===============================
// Loading Indicator
// ===============================
function showLoading(show, text = "Loading 3D Model...") {
  const loading = document.getElementById("loading")
  const loadingText = document.getElementById("loadingText")

  loading.style.display = show ? "grid" : "none"
  loadingText.textContent = text
}

// ===============================
// Animation Loop
// ===============================
function animate() {
  requestAnimationFrame(animate)

  controls.update()
  updateHotspotPositions()

  renderer.render(scene, camera)
}

// ===============================
// Window Resize
// ===============================
function onWindowResize() {
  const canvas = document.getElementById("canvas3d")

  camera.aspect = canvas.clientWidth / canvas.clientHeight
  camera.updateProjectionMatrix()

  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
}
