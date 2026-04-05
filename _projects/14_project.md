---
layout: page
title: Multi-Class Brain Segmentation
description: Ensemble learning for highly imbalanced dataset
img:
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

<em>Data Acquisition and Annotation</em>

The dataset consists of 79 participants with chronic stroke-induced aphasia. All participants underwent neuroimaging at the FSM Center for Translational Imaging, with enrollment spanning three different sites. The dataset includes both T1 MPRAGE and FLAIR images for each participant.

Two experienced neuroradiologists performed manual segmentations using Freeview software. They annotated the co-registered T1 MPRAGE and FLAIR images, delineating seven distinct tissue categories: core infarct, periinfarct gliosis, PVH, right-sided LI, left-sided LI, right-sided WMH, and left-sided WMH.

<em>Data Processing</em>

To ensure consistency and optimize the data for analysis, several preprocessing steps were implemented. For each subject, the T1, FLAIR, and segmentation mask images were co-registered to ensure spatial alignment. The FLAIR images, originally acquired with 5 mm slice thickness, were upsampled to match the higher resolution of the T1 images (1 mm slice thickness). To address intensity inhomogeneities in the MRI scans, which can affect segmentation accuracy, we applied N4 bias field correction. This step helps to mitigate the low-frequency, smooth intensity variations across the image that are caused by magnetic field inhomogeneities and variations in the sensitivity of the receiver coils. This preprocessing step is crucial for ensuring consistent intensity relationships between tissues across the entire image, which is particularly important for our multi-class segmentation task involving structures with subtle intensity differences.

A region of interest (ROI) mask encompassing the brain volume was generated using the ROBEX (Robust Brain Extraction) algorithm. This was used as a mask to focus on relevant brain tissues and exclude non-brain regions. The data within the brain ROI was normalized to have zero mean and unit variance. This standardization step helps mitigate intensity variations across different scans and subjects, while not taking the non-brain portion of the scan into consideration.

To refine our classification targets, we performed two key modifications. Two classes were relabeled for clarity. Core infarct became encephalomalacia, and periinfarct gliosis was shortened to just gliosis. The left-sided and right-sided LI were combined into a single LI class. Similarly the left-sided and right-sided WMH was combined into just WMH. This consolidation was done to simplify the classification task and increase the sample size for these classes. This brings the final tissue classes to: Encephalomalacia, Ventricles, Gliosis, PVH, WMH and LI.

<em>Dataset Imbalance and Stratification</em>

The dataset exhibits significant class imbalance across the six annotated tissue categories, which poses challenges for model training and evaluation. As illustrated in Figure 1(a), the distribution of voxel counts shows the Encephalomalacia class is the most prevalent, with over 5 million voxels, while the LI class is the least common, with only around 30,000 voxels. This disparity results in the largest class being over 160 times more frequent than the smallest.
Furthermore, as shown in Figure 1(b), not all of the subjects have all of the annotated classes present, with only 29 subjects presenting LI. This is challenging for splitting the dataset as well as for sampling the data as effectively as possible during training.

<div class="table-responsive mt-4">
  <table class="table table-sm table-bordered">
    <caption><strong>Table 1:</strong> Number of Subjects with Class Presence Across Folds</caption>
    <thead class="thead-light">
      <tr>
        <th>Fold</th>
        <th>Enceph.</th>
        <th>Gliosis</th>
        <th>PVH</th>
        <th>WMH</th>
        <th>LI</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Fold 1</td><td>15</td><td>15</td><td>15</td><td>9</td><td>4</td></tr>
      <tr><td>Fold 2</td><td>16</td><td>16</td><td>16</td><td>12</td><td>9</td></tr>
      <tr><td>Fold 3</td><td>16</td><td>16</td><td>16</td><td>15</td><td>11</td></tr>
      <tr><td>Fold 4</td><td>16</td><td>16</td><td>16</td><td>15</td><td>5</td></tr>
      <tr><td>Fold 5</td><td>16</td><td>16</td><td>16</td><td>14</td><td>8</td></tr>
      <tr class="table-success"><td><strong>Total</strong></td><td><strong>79</strong></td><td><strong>79</strong></td><td><strong>79</strong></td><td><strong>66</strong></td><td><strong>38</strong></td></tr>
    </tbody>
  </table>
</div>

<div class="table-responsive mt-4">
  <table class="table table-sm table-bordered">
    <caption><strong>Table 2:</strong> Number of Annotated Voxels Across Folds</caption>
    <thead class="thead-light">
      <tr>
        <th>Fold</th>
        <th>Enceph.</th>
        <th>Gliosis</th>
        <th>PVH</th>
        <th>WMH</th>
        <th>LI</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Fold 1</td><td>1,116,964</td><td>700,552</td><td>62,492</td><td>22,035</td><td>5,922</td></tr>
      <tr><td>Fold 2</td><td>1,349,890</td><td>538,864</td><td>72,049</td><td>43,021</td><td>3,701</td></tr>
      <tr><td>Fold 3</td><td>1,220,125</td><td>451,797</td><td>49,566</td><td>37,841</td><td>8,454</td></tr>
      <tr><td>Fold 4</td><td>1,079,785</td><td>775,232</td><td>78,575</td><td>38,328</td><td>7,124</td></tr>
      <tr><td>Fold 5</td><td>585,559</td><td>556,936</td><td>84,292</td><td>24,795</td><td>8,181</td></tr>
      <tr class="table-success"><td><strong>Total</strong></td><td><strong>5,352,323</strong></td><td><strong>3,023,381</strong></td><td><strong>346,974</strong></td><td><strong>166,020</strong></td><td><strong>33,382</strong></td></tr>
    </tbody>
  </table>
</div>

Given the unequal distribution of the six tissue classes across brain volumes, the dataset was split into 4 training folds and a testing set using a stratified approach. This stratification ensures that each fold as close as possible given the whole-brain subject constraint maintains representative proportions of each tissue category, crucial for addressing the inherent class imbalance in the data.

The stratification of data into folds, depicted in Figure 1(c) and Figure 1(d), maintains this imbalance as much as possible across training and validation folds and test set. Each fold contains a representative distribution of voxel counts and subject numbers per class, allowing for robust cross-validation while preserving the inherent dataset characteristics.

To achieve the desired ratio of classes and maintain the same number of subjects in each fold, we iteratively swapped subjects between folds while minimizing a loss function based on the relative error between the mean voxel sums per subject for each class and fold of the overall dataset and the current fold designations. The loss function was defined as for where V is the count of all voxels in class c and fold f, and for subjects S in fold f:

<div class="mt-4">
  <h6 class="mb-3">Center-Voxel Sampling Equations</h6>
  
  <div class="row">
    <div class="col-md-4">
      <div class="bg-light p-3 rounded border">
        $$V_{c,f} = V_{c,f} \cdot S_f \tag{1}$$
        <small class="text-muted d-block mt-1">Class-specific voxel sampling</small>
      </div>
    </div>
    <div class="col-md-4">
      <div class="bg-light p-3 rounded border">
        $$V_{c,all} = \sum_f \frac{V_{c,f}}{S_f} \tag{2}$$
        <small class="text-muted d-block mt-1">Global balanced representation</small>
      </div>
    </div>
    <div class="col-md-4">
      <div class="bg-light p-3 rounded border">
        $$\text{Error} = \frac{f_c V_{c,f} - V_{c,all}}{V_{c,all}} \tag{3}$$
        <small class="text-muted d-block mt-1">Sampling balance metric</small>
      </div>
    </div>
  </div>
</div>

This approach resulted in a stratified dataset that maintained consistent class proportions across all folds and the same number of subjects. 
