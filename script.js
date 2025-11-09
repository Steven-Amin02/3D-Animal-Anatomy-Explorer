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
// State Management
// ===============================
let currentState = "normal"
let viewers = {}
let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
let touchStartY = 0
let drawerStartPos = 0
let isAutoRotating = true
let userInteractionTimeout = null
let lastInteractionTime = 0

// Prevent double-click zoom behavior
document.addEventListener('dblclick', (e) => {
  e.preventDefault()
}, { passive: false })

// ===============================
// Performance Monitoring
// ===============================
let loadProgress = 0
const totalModels = 3
let modelsLoaded = 0

function updateLoadProgress(increment = 33) {
  loadProgress += increment
  const perfProgress = document.getElementById('perfProgress')
  if (perfProgress) {
    perfProgress.style.width = Math.min(loadProgress, 100) + '%'
  }
  
  modelsLoaded++
  console.log(`[Performance] Models loaded: ${modelsLoaded}/${totalModels}`)
  
  if (modelsLoaded >= totalModels) {
    setTimeout(() => {
      const perfHint = document.getElementById('perfHint')
      if (perfHint) {
        perfHint.style.opacity = '0'
        perfHint.style.pointerEvents = 'none'
        setTimeout(() => {
          perfHint.style.display = 'none'
          perfHint.remove()
        }, 500)
      }
    }, 800)
  }
}

// ===============================
// Intro Screen Handler
// ===============================
let lottieAnimation = null

document.addEventListener("DOMContentLoaded", () => {
  const introScreen = document.getElementById("introScreen")
  const startButton = document.getElementById("startButton")
  
  // Initialize Lottie Animation
  initLottieAnimation()

  startButton.addEventListener("click", () => {
    introScreen.classList.add("hidden")
    
    // Stop and cleanup Lottie animation
    if (lottieAnimation) {
      lottieAnimation.stop()
    }
    
    setTimeout(() => {
      introScreen.remove()
    }, 800)
  })

  // Initialize after intro
  setTimeout(init, 100)
})

// ===============================
// Lottie Animation Setup
// ===============================
function initLottieAnimation() {
  const container = document.getElementById('lottieAnimation')
  
  if (!container || typeof lottie === 'undefined') {
    console.warn('[Lottie] Container or lottie library not found')
    return
  }
  
  try {
    // Load a beautiful cat animation from LottieFiles
    // Using a popular cat animation - you can replace with any animal from lottiefiles.com
    lottieAnimation = lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/4c3c7f79-c0a1-4ab5-b8a1-d85b4b4de62f/qJP0LD6gEf.json' // Cute cat animation
      // Alternative animals you can use:
      // Dog: 'https://lottie.host/ccdb5e44-d103-4e1a-9f0f-6f8c8b3b08da/1iRYaHqGcR.json'
      // Bird: 'https://lottie.host/7d8e0c36-7b5f-4d5b-9d5f-2c2e1f8e8e8e/jKcXF8XtF8.json'
      // Deer: 'https://lottie.host/embed/b6223f6c-6cd6-4dba-9d4f-3c6d4f1f6f6f/6Kw8qw8qw8.json'
    })
    
    lottieAnimation.setSpeed(1)
    
    console.log('[Lottie] Animation loaded successfully')
    
    // Add interactive hover effects
    const lottieContainer = document.getElementById('lottieContainer')
    
    lottieContainer.addEventListener('mouseenter', () => {
      lottieAnimation.setSpeed(1.5)
      lottieContainer.classList.add('hovered')
    })
    
    lottieContainer.addEventListener('mouseleave', () => {
      lottieAnimation.setSpeed(1)
      lottieContainer.classList.remove('hovered')
    })
    
    lottieContainer.addEventListener('click', () => {
      // Play a quick burst effect on click
      lottieAnimation.setSpeed(2)
      lottieContainer.classList.add('clicked')
      
      setTimeout(() => {
        lottieAnimation.setSpeed(1)
        lottieContainer.classList.remove('clicked')
      }, 500)
    })
    
  } catch (error) {
    console.error('[Lottie] Error loading animation:', error)
    // Fallback: show a simple message
    container.innerHTML = '<div style="text-align: center; color: var(--primary);">🐱</div>'
  }
}

// ===============================
// Initialization
// ===============================
function init() {
  console.log("[Enhanced] Initializing Cat Anatomy Explorer...")

  // Get model viewer elements
  viewers = {
    normal: document.getElementById("normalViewer"),
    muscle: document.getElementById("muscleViewer"),
    skeleton: document.getElementById("skeletonViewer"),
  }

  console.log("[Enhanced] Model viewers found:", Object.keys(viewers))

  // Setup model viewer event listeners with performance tracking
  Object.entries(viewers).forEach(([key, viewer]) => {
    if (!viewer) {
      console.error(`[Enhanced] Model viewer for ${key} not found!`)
      return
    }

    viewer.addEventListener("load", () => {
      console.log(`[Enhanced] ${key} model loaded successfully`)
      updateLoadProgress()
      optimizeViewerPerformance(viewer)
    })

    viewer.addEventListener("error", (event) => {
      console.error(`[Enhanced] Error loading ${key} model:`, event)
      showModelError(key)
    })

    viewer.addEventListener("progress", (event) => {
      const progress = event.detail.totalProgress * 100
      console.log(`[Enhanced] ${key} model loading: ${progress.toFixed(0)}%`)
    })
  })

  setupEventListeners()
  setupMobileOptimizations()
  setupDrawerGestures()
  setupModelInteractions()

  // Show initial anatomy info
  showAnatomyInfo("overview")

  // Hide interaction hints after 5 seconds
  setTimeout(() => {
    const hints = document.getElementById('interactionHints')
    if (hints) {
      hints.style.opacity = '0'
      setTimeout(() => hints.style.display = 'none', 500)
    }
  }, 5000)

  console.log("[Enhanced] Initialization complete. Current state:", currentState)
}

// ===============================
// Performance Optimizations
// ===============================
function optimizeViewerPerformance(viewer) {
  // Enhanced interaction handling - pause rotation on user interaction
  let interactionTimer = null
  
  const handleInteractionStart = () => {
    lastInteractionTime = Date.now()
    clearTimeout(interactionTimer)
    
    // Pause auto-rotate immediately when user starts interacting
    if (isAutoRotating) {
      viewer.autoRotate = false
    }
  }
  
  const handleInteractionEnd = () => {
    clearTimeout(interactionTimer)
    
    // Resume auto-rotate after 3 seconds of no interaction
    interactionTimer = setTimeout(() => {
      if (isAutoRotating && viewer.classList.contains('active')) {
        viewer.autoRotate = true
      }
    }, 3000)
  }
  
  // Listen to camera change events
  viewer.addEventListener('camera-change', handleInteractionStart)
  
  // Mouse/touch interaction events
  viewer.addEventListener('mousedown', handleInteractionStart)
  viewer.addEventListener('touchstart', handleInteractionStart)
  viewer.addEventListener('wheel', handleInteractionStart)
  
  viewer.addEventListener('mouseup', handleInteractionEnd)
  viewer.addEventListener('touchend', handleInteractionEnd)
  
  // Prevent double-click behavior on model viewer
  viewer.addEventListener('dblclick', (e) => {
    e.preventDefault()
    e.stopPropagation()
    return false
  }, { passive: false })
  
  // Prevent context menu for better interaction
  viewer.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  })
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
// Model Interaction Setup
// ===============================
function setupModelInteractions() {
  Object.entries(viewers).forEach(([key, viewer]) => {
    if (!viewer) return
    
    // Smooth camera transitions
    viewer.interpolationDecay = 200
    
    // Enhanced touch support
    let touchStartTime = 0
    let touchCount = 0
    
    viewer.addEventListener('touchstart', (e) => {
      touchStartTime = Date.now()
      touchCount = e.touches.length
    })
    
    viewer.addEventListener('touchend', (e) => {
      const touchDuration = Date.now() - touchStartTime
      
      // Single tap (not double tap) - show info
      if (touchCount === 1 && touchDuration < 200) {
        setTimeout(() => {
          if (Date.now() - touchStartTime > 250) {
            showAnatomyInfo('overview')
          }
        }, 250)
      }
    })
    
    // Mouse interactions
    let clickCount = 0
    let clickTimer = null
    
    viewer.addEventListener('click', (e) => {
      clickCount++
      
      if (clickCount === 1) {
        clickTimer = setTimeout(() => {
          // Single click - show info
          if (clickCount === 1) {
            showAnatomyInfo('overview')
          }
          clickCount = 0
        }, 250)
      } else if (clickCount === 2) {
        // Double click - do nothing (prevent unwanted behavior)
        clearTimeout(clickTimer)
        clickCount = 0
        e.preventDefault()
        e.stopPropagation()
      }
    })
  })
}

// ===============================
// Mobile Optimizations
// ===============================
function setupMobileOptimizations() {
  if (!isMobile) return

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle')
  const sidebar = document.getElementById('sidebar')
  
  mobileMenuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open')
    mobileMenuToggle.classList.toggle('active')
  })

  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', (e) => {
    if (isMobile && sidebar.classList.contains('open')) {
      if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        sidebar.classList.remove('open')
        mobileMenuToggle.classList.remove('active')
      }
    }
  })

  // Optimize touch interactions
  Object.values(viewers).forEach(viewer => {
    viewer.setAttribute('touch-action', 'pan-y')
  })
}

// ===============================
// Drawer Gesture Support
// ===============================
function setupDrawerGestures() {
  const drawer = document.getElementById('infoDrawer')
  const drawerHandle = drawer.querySelector('.drawer-handle')
  
  if (!drawerHandle) {
    // Create handle if not exists
    const handle = document.createElement('div')
    handle.className = 'drawer-handle'
    drawer.insertBefore(handle, drawer.firstChild)
  }

  // Touch/drag support for drawer
  drawer.addEventListener('touchstart', handleDrawerTouchStart, { passive: true })
  drawer.addEventListener('touchmove', handleDrawerTouchMove, { passive: false })
  drawer.addEventListener('touchend', handleDrawerTouchEnd, { passive: true })
}

function handleDrawerTouchStart(e) {
  const drawer = document.getElementById('infoDrawer')
  if (e.target.closest('.drawer-handle') || e.target.closest('.drawer-header')) {
    touchStartY = e.touches[0].clientY
    const transform = window.getComputedStyle(drawer).transform
    drawerStartPos = transform !== 'none' ? parseFloat(transform.split(',')[5]) : 0
  }
}

function handleDrawerTouchMove(e) {
  const drawer = document.getElementById('infoDrawer')
  if (touchStartY > 0) {
    const deltaY = e.touches[0].clientY - touchStartY
    if (deltaY > 0) { // Only allow downward drag
      e.preventDefault()
      drawer.style.transform = `translateY(${Math.min(deltaY, 200)}px)`
    }
  }
}

function handleDrawerTouchEnd(e) {
  const drawer = document.getElementById('infoDrawer')
  if (touchStartY > 0) {
    const deltaY = e.changedTouches[0].clientY - touchStartY
    
    if (deltaY > 100) { // Close drawer if dragged down significantly
      closeDrawer()
    } else {
      // Snap back to open position
      drawer.style.transform = 'translateY(0)'
    }
    
    touchStartY = 0
    drawerStartPos = 0
  }
}

// ===============================
// Event Listeners Setup
// ===============================
function setupEventListeners() {
  // Theme toggle
  document.getElementById("themeToggle").addEventListener("click", toggleTheme)

  // State toggle (Normal/Muscle/Skeleton) with smooth transitions
  document.querySelectorAll(".state-card").forEach((card) => {
    card.addEventListener("click", () => {
      switchState(card.dataset.state)
      
      // Close mobile menu after selection
      if (isMobile) {
        const sidebar = document.getElementById('sidebar')
        const mobileMenuToggle = document.getElementById('mobileMenuToggle')
        sidebar.classList.remove('open')
        mobileMenuToggle.classList.remove('active')
      }
    })
  })

  // Control buttons
  document.getElementById("resetView").addEventListener("click", resetView)
  document.getElementById("arButton").addEventListener("click", activateAR)
  document.getElementById("autoRotateToggle").addEventListener("click", toggleAutoRotate)
  document.getElementById("zoomIn").addEventListener("click", zoomIn)
  document.getElementById("zoomOut").addEventListener("click", zoomOut)

  // Model viewer interactions - removed to prevent conflicts
  // Interactions are now handled in setupModelInteractions()

  // Info drawer
  document.getElementById("drawerClose").addEventListener("click", closeDrawer)
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab))
  })

  // Keyboard shortcuts
  document.addEventListener('keydown', handleKeyboardShortcuts)
}

// ===============================
// Keyboard Shortcuts
// ===============================
function handleKeyboardShortcuts(e) {
  switch(e.key) {
    case '1':
      switchState('normal')
      break
    case '2':
      switchState('muscle')
      break
    case '3':
      switchState('skeleton')
      break
    case 'r':
    case 'R':
      resetView()
      break
    case 'Escape':
      closeDrawer()
      break
    case '+':
    case '=':
      zoomIn()
      break
    case '-':
    case '_':
      zoomOut()
      break
  }
}

// ===============================
// Theme Toggle
// ===============================
function toggleTheme() {
  document.body.classList.toggle("dark-mode")
  const isDark = document.body.classList.contains("dark-mode")
  const themeToggle = document.getElementById("themeToggle")
  
  if (themeToggle) {
    themeToggle.textContent = isDark ? "☀️" : "🌙"
  }

  // Save preference
  try {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  } catch (e) {
    console.warn('Could not save theme preference:', e)
  }

  // Update model viewer environment
  Object.values(viewers).forEach((viewer) => {
    if (viewer) {
      viewer.environmentImage = isDark ? "neutral" : "neutral"
    }
  })
  
  console.log(`[Theme] Switched to ${isDark ? 'dark' : 'light'} mode`)
}

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode')
    const themeToggle = document.getElementById("themeToggle")
    if (themeToggle) {
      themeToggle.textContent = "☀️"
    }
  }
})

// ===============================
// State Switching (Normal/Muscle/Skeleton)
// ===============================
function switchState(state) {
  if (state === currentState) return

  console.log(`[Enhanced] Switching state from ${currentState} to ${state}`)

  currentState = state

  // Update card states with animation
  document.querySelectorAll(".state-card").forEach((card) => {
    const isActive = card.dataset.state === state
    card.setAttribute("aria-selected", isActive)
    
    // Update badge text
    const badge = card.querySelector('.state-card-badge')
    if (badge) {
      badge.textContent = isActive ? 'Active' : 'View'
    }
  })

  // Switch model viewers with fade effect
  Object.entries(viewers).forEach(([key, viewer]) => {
    const isActive = key === state
    
    if (isActive) {
      viewer.classList.add("active")
      // Resume auto-rotate for active viewer only if enabled
      if (isAutoRotating) {
        viewer.autoRotate = true
      }
    } else {
      viewer.classList.remove("active")
      // Pause auto-rotate for inactive viewers to save resources
      viewer.autoRotate = false
    }
  })

  // Show anatomy info for new state
  showAnatomyInfo("overview")
  
  // Haptic feedback on mobile
  if (isMobile && navigator.vibrate) {
    navigator.vibrate(10)
  }
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

  // Show drawer with animation
  const drawer = document.getElementById("infoDrawer")
  drawer.classList.add("open")
  drawer.style.transform = 'translateY(0)'
}

function closeDrawer() {
  const drawer = document.getElementById("infoDrawer")
  drawer.classList.remove("open")
  drawer.style.transform = 'translateY(100%)'
  
  console.log('[Drawer] Closed drawer')
}

function switchTab(tabName) {
  // Update tab buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabName)
  })

  // Show corresponding content with fade
  document.getElementById("tab-overview").style.display = tabName === "overview" ? "block" : "none"
  document.getElementById("tab-details").style.display = tabName === "details" ? "block" : "none"
  document.getElementById("tab-media").style.display = tabName === "media" ? "block" : "none"
}

// ===============================
// Camera Controls
// ===============================
function toggleAutoRotate() {
  isAutoRotating = !isAutoRotating
  const activeViewer = viewers[currentState]
  const toggleBtn = document.getElementById('autoRotateToggle')
  
  if (activeViewer) {
    activeViewer.autoRotate = isAutoRotating
    
    // Update button appearance
    if (isAutoRotating) {
      toggleBtn.classList.remove('disabled')
      toggleBtn.title = 'Disable auto-rotate'
    } else {
      toggleBtn.classList.add('disabled')
      toggleBtn.title = 'Enable auto-rotate'
    }
    
    // Haptic feedback
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(10)
    }
    
    showNotification(isAutoRotating ? 'Auto-rotate enabled' : 'Auto-rotate disabled')
  }
}

function zoomIn() {
  const activeViewer = viewers[currentState]
  if (activeViewer) {
    const currentOrbit = activeViewer.getCameraOrbit()
    const currentRadius = currentOrbit.radius
    const newRadius = Math.max(currentRadius * 0.9, 0.5) // Minimum 50% zoom
    
    activeViewer.cameraOrbit = `${currentOrbit.theta}rad ${currentOrbit.phi}rad ${newRadius}m`
    
    console.log(`[Zoom] Zooming in - New radius: ${newRadius}m`)
    
    // Haptic feedback
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(5)
    }
  }
}

function zoomOut() {
  const activeViewer = viewers[currentState]
  if (activeViewer) {
    const currentOrbit = activeViewer.getCameraOrbit()
    const currentRadius = currentOrbit.radius
    const newRadius = Math.min(currentRadius * 1.1, 2.0) // Maximum 200% zoom out
    
    activeViewer.cameraOrbit = `${currentOrbit.theta}rad ${currentOrbit.phi}rad ${newRadius}m`
    
    console.log(`[Zoom] Zooming out - New radius: ${newRadius}m`)
    
    // Haptic feedback
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(5)
    }
  }
}

function resetView() {
  const activeViewer = viewers[currentState]
  console.log(`[Enhanced] Resetting view for ${currentState} viewer`)

  if (activeViewer) {
    activeViewer.resetTurntableRotation()
    activeViewer.cameraOrbit = "0deg 75deg 105%"
    activeViewer.fieldOfView = "45deg"
    
    // Re-enable auto-rotate if it was enabled
    if (isAutoRotating) {
      activeViewer.autoRotate = true
    }
    
    console.log("[Enhanced] View reset complete")
    
    // Haptic feedback
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(10)
    }
    
    showNotification('View reset to default')
  } else {
    console.error("[Enhanced] No active viewer found for reset")
  }
}

function activateAR() {
  const activeViewer = viewers[currentState]
  console.log(`[Enhanced] Attempting to activate AR for ${currentState} viewer`)

  if (activeViewer && activeViewer.canActivateAR) {
    activeViewer.activateAR()
    console.log("[Enhanced] AR activated")
  } else {
    console.warn("[Enhanced] AR not available on this device/browser")
    showNotification("AR is not available on this device or browser.")
  }
}

// ===============================
// Notifications
// ===============================
function showNotification(message) {
  const notification = document.createElement('div')
  notification.className = 'notification'
  notification.textContent = message
  document.body.appendChild(notification)
  
  setTimeout(() => notification.classList.add('show'), 10)
  
  setTimeout(() => {
    notification.classList.remove('show')
    setTimeout(() => notification.remove(), 300)
  }, 3000)
}