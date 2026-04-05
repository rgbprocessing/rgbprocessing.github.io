---
layout: page
title: Ensemble Learning for Improved Multi-Class Brain Segmentation in Highly Imbalanced Datasets
description:
img: assets/img/brain.png
importance: 1
category: research
---

**Abstract**

Multi-class segmentation of medical images is challenged by various sometimes extreme dataset imbalances and dataset size restrictions due to the costs of acquiring and annotating data. This study presents an ensemble approach to address extreme class imbalance in a detailed brain lesion dataset. By combining models optimized for majority classes and rare minority classes, we maintain the strengths of each and achieve overall improved segmentation results.

**Background**

Medical image segmentation inherently is an imbalanced problem, with a majority background of blank space and non-segmented tissue, and foreground classes that come in all shapes, sizes, and prevalences. These imbalances are exacerbated even more in 3D medical imaging such as MRIs by adding another dimension going from area to volume imbalances. Furthermore, by the nature of the kinds of problems addressed by medical image segmentation, many classes of interest represent certain anatomical structures or pathologies which only exist in minority cases of diseases and which may present in a variety of ways, locations, shapes, sizes, and numbers. This variety of imbalances poses substantial difficulties in developing accurate and robust segmentation models for detailed annotations.

Conventional approaches to addressing class imbalance include sampling techniques, weighted loss functions, and extensive data augmentation. However, medical datasets often only represent a limited number of subjects and some of these methods may lead to overall suboptimal performance. Employing techniques like oversampling or a combination of over- and under-sampling to balance class representation under these conditions may cause the minority class to rapidly overfit. This creates a dilemma in the training process: to perform early stopping to maximize the performance on the minority class while undertraining other classes, or prioritize the performance of all classes resulting in a model that is completely overfit to or has otherwise failed to effectively and robustly learn the minority class. This occurs because the more prevalent classes dominate the loss landscape, leading to steeper descent and easier learning compared to the rare class. While data augmentation can help prevent overfitting and maximize the learning of especially minority classes in a limited dataset, data augmentation is complicated by the size and realistic limits of the dataset. For example, augmentation by rotation is limited for full brain scans if the model is set up for a registered brain orientation, and other transforms risk bringing the dataset outside the realm of realistic data. Generating new samples for minority classes on whole brain scans with a limited dataset size is arguably just as complicated of a problem or more so than the multi-class segmentation task itself.

This results in a fundamental challenge of learning all classes optimally by both addressing the inherent imbalances but also mitigating suboptimal conditions such as overfitting or catastrophic learning.

An alternative approach to this delicate balancing act is to train binary classifiers for each class separately. While this method may seem to circumvent some of the issues due to the class imbalance, it fails to capitalize on the rich inter-class information and feature developments that arise from multi-class learning.

To address these challenges, we propose a novel approach which involves training multiple models with different focuses: a generalist model optimized for overall performance across the majority of classes and a specialist model focused primarily on the performance of rare and minority classes.

By combining these models, we aim to capture both the robust features with inter-class information from the generalist model along with its overall good performance across classes, and the detail oriented features focused on boosting the rare minority class segmentation of the specialist model. This strategy allowed us to improve overall performance and near-match or improve the best segmentation performance for every class from individual models.

**Data**
