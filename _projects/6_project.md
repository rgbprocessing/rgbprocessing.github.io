---
layout: page
title: Highly Imbalanced Brain Lesion Segmentation
description: 3D CNN and Ablation Study
img:
importance: 1
category: research
---

**Abstract**

This project investigates strategies for addressing severe class imbalance in medical image segmentation, focusing on ischemic stroke lesions in MRI data. The task is challenging due to the extremely limited representation of small lesion regions relative to background tissue. We evaluate multiple architectural and training design choices aimed at improving minority class performance, using DICE score as a primary metric. The best-performing configuration achieves a DICE score of 0.28 on the smallest lesion class, demonstrating modest but meaningful gains under highly imbalanced conditions. Additional experiments exploring alternative design parameters yielded inconclusive results, highlighting the sensitivity of segmentation performance to imbalance mitigation strategies and motivating further investigation into more robust approaches.

**Dataset**

The dataset consists of 79 subjects with chronic left-hemispheric stroke lesions, each imaged using two MRI modalities: FLAIR and T1-weighted scans. Expert annotations identify six foreground pathological classes in addition to the brain background (region of interest): encephalomalacia, ventricles, gliosis, periventricular white matter disease, white matter hyperintensities, and lacunar infarcts.

A defining characteristic of this dataset is its extreme and multi-level class imbalance. At the voxel level, the smallest class, lacunar infarcts, accounts for only 0.16% of all annotated voxels. At the subject level, this class appears in just 29 of the 79 brains, introducing additional imbalance for training strategies that sample across subjects. Furthermore, lacunar infarcts are typically small, localized structures, making segmentation performance highly sensitive to boundary errors. This challenge is amplified by the inherent sparsity of lesion voxels in 3D medical imaging, where the overwhelming majority of voxels correspond to background tissue.

These compounded sources of imbalance - across voxels, classes, and subjects - make the dataset a particularly demanding testbed for evaluating segmentation methods under clinically realistic conditions.
