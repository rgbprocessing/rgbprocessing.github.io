// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "a selection of past work on research, competitions, and tools",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-meme-detection-and-social-network-analysis",
          title: 'Meme Detection and Social Network Analysis',
          description: "Research project for SICSS Norrköping 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project.html";
            },},{id: "projects-image-manipulation-noise-artifacts",
          title: 'Image Manipulation Noise Artifacts',
          description: "Visualizing manipulation artifacts through noise residuals",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project.html";
            },},{id: "projects-blend-mode-compendium",
          title: 'Blend Mode Compendium',
          description: "Python implementation of 2 layer blend modes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project.html";
            },},{id: "projects-noise-extraction-from-video",
          title: 'noise extraction from video',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_project.html";
            },},{id: "projects-multi-class-brain-segmentation",
          title: 'Multi-Class Brain Segmentation',
          description: "Ensemble learning for highly imbalanced dataset",
          section: "Projects",handler: () => {
              window.location.href = "/projects/14_project.html";
            },},{id: "projects-hdr-video-to-gif",
          title: 'HDR Video to GIF',
          description: "GIF conversion using tone-mapping",
          section: "Projects",handler: () => {
              window.location.href = "/projects/15_project.html";
            },},{id: "projects-neurips-ariel-data-challenge-2025",
          title: 'NeurIPS - Ariel Data Challenge 2025',
          description: "33rd place solution: CNN ensemble with augmentation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-cryoet-object-identification",
          title: 'CryoET Object Identification',
          description: "Multi-head 3D U-Net with per-class center heatmaps and NMS",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-detect-ai-vs-human-generated-images",
          title: 'Detect AI vs. Human-Generated Images',
          description: "Multi-Feature Ensemble Classifier",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-neurips-2023-machine-unlearning",
          title: 'NeurIPS 2023 - Machine Unlearning',
          description: "Selective Model Forgetting via Composite Loss",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-1m-deepfakes-detection-challenge",
          title: '1M-Deepfakes Detection Challenge',
          description: "Dual-branch video CNN",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-small-lesion-segmentation",
          title: 'Small Lesion Segmentation',
          description: "Center voxel DICE &amp; ablation study",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-identity-detection-from-facial-movements",
          title: 'Identity Detection from Facial Movements',
          description: "Customized CNN for motion vector classification",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-first-move-first-tree-traversal",
          title: 'First Move First Tree Traversal',
          description: "A deterministic game tree search algorithm that prioritizes early decisions without heuristics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-unwinnable-game-detection",
          title: 'Unwinnable game detection',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
