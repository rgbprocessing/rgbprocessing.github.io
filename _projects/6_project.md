---
layout: page
title: Highly Imbalanced Brain Lesion Segmentation
description: 3D CNN and Ablation Study
img: assets/img/brain.png
importance: 1
category: research
---

**Abstract**

This project investigates strategies for addressing severe class imbalance in medical image segmentation, focusing on ischemic stroke lesions in MRI data. The task is challenging due to the extremely limited representation of small lesion regions relative to background tissue. We evaluate multiple architectural and training design choices aimed at improving minority class performance, using DICE score as a primary metric. The best-performing configuration achieves a DICE score of 0.28 on the smallest lesion class, demonstrating modest but meaningful gains under highly imbalanced conditions. Additional experiments exploring alternative design parameters yielded inconclusive results, highlighting the sensitivity of segmentation performance to imbalance mitigation strategies and motivating further investigation into more robust approaches.

**Dataset**

The dataset consists of 79 subjects with chronic left-hemispheric stroke lesions, each imaged using two MRI modalities: FLAIR and T1-weighted scans. Expert annotations identify six foreground pathological classes in addition to the brain background (region of interest): encephalomalacia, ventricles, gliosis, periventricular white matter disease, white matter hyperintensities, and lacunar infarcts.

A defining characteristic of this dataset is its extreme and multi-level class imbalance. At the voxel level, the smallest class, lacunar infarcts, accounts for only 0.16% of all annotated voxels. At the subject level, this class appears in just 29 of the 79 brains, introducing additional imbalance for training strategies that sample across subjects. Furthermore, lacunar infarcts are typically small, localized structures, making segmentation performance highly sensitive to boundary errors. This challenge is amplified by the inherent sparsity of lesion voxels in 3D medical imaging, where the overwhelming majority of voxels correspond to background tissue.

These compounded sources of imbalance - across voxels, classes, and subjects - make the dataset a particularly demanding testbed for evaluating segmentation methods under clinically realistic conditions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/brainstats.png" title="Dataset statistics" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 1:</strong> Dataset class breakdown summary
  <br>
  <em>Left:</em> The number of subjects which contain each class.
  <br>
  <em>Right:</em> The number of annotated voxels per class.
</div>

**Previous Work**

This project has evolved through a series of experiments exploring how to segment extremely imbalanced stroke lesions in MRI. Initial work evaluated established architectures, including nnU-Net and DeepMedic, used range of hierarchical class groupings, class sampling ratios, and loss functions, including sensitivity-weighted loss to prioritize finding lesions over perfect segmentation. These experiments established a baseline and revealed the limits of standard imbalance-mitigation strategies for this problem.

One major limitation of the earlier pipeline was its subject-level sampling scheme. Because sampling was performed per brain, rare classes that were absent from many subjects remained underrepresented during training even when class balancing was applied. As a result, the most challenging lesion classes continued to be learned poorly, particularly those with very small volume and presence. However this adds an additional problem of balancing all of the classes equally during training to maximize learning without overfitting.

This work builds upon these previous trials with a more careful analysis of imbalance, sampling, and evaluation in 3D medical segmentation. In particular, we introduce additional metrics such as center-voxel DICE to better gauge the improvement in each model segmenting the extremely imbalance classes, where boundary errors and voxel scarcity can obscure meaningful gains.

**Model Architecture**

We employed a 3D U-Net as the core segmentation model, processing 33×33×33 voxel patches extracted from the multi-modal MRI volumes. This patch-based approach effectively handles the memory constraints of 3D convolutions while capturing local lesion context critical for small structures like lacunar infarcts.

**Sampling Strategy**

To overcome the limitations of subject-level sampling identified in prior iterations, we implemented class-aware patch sampling across the entire dataset. An index of class representation was first constructed for each subject, enabling random selection of individual voxel-centered patches (33×33×33) directly from the global distribution of each class. Weighted sampling was applied to prioritize minority classes—oversampling rare structures like lacunar infarcts while undersampling dominant classes such as background tissue—ensuring balanced training representation despite extreme voxel-level imbalance.

**Training Objective**

The baseline loss function was weighted cross-entropy, with class weights inversely proportional to voxel frequencies. This formulation directly targets the imbalance challenge by penalizing errors on minority classes more heavily, providing a foundation for subsequent ablations on alternative objectives and architectural modifications.
