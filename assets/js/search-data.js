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
          description: "Group project for SICSS Norrköping 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project.html";
            },},{id: "projects-noise-artifacts-in-image-manipulations",
          title: 'Noise Artifacts in Image Manipulations',
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
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_project.html";
            },},{id: "projects-ensemble-learning-for-improved-multi-class-brain-segmentation-in-highly-imbalanced-datasets",
          title: 'Ensemble Learning for Improved Multi-Class Brain Segmentation in Highly Imbalanced Datasets',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/14_project.html";
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
          description: "dual-branch video CNN",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-small-brain-lesion-segmentation",
          title: 'Small Brain Lesion Segmentation',
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
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
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
