---
layout: page
title: Highly Imbalanced Brain Lesion Segmentation
description: 3D U-Net and Ablation Study
img: assets/img/brain.png
importance: 1
category: research
---

**Abstract**

This project investigates strategies for addressing severe class imbalance in medical image segmentation, focusing on ischemic stroke lesions in MRI data. The task is challenging due to the extremely limited representation of small lesion regions relative to background tissue. We evaluate multiple architectural and training design choices aimed at improving minority class performance. The best-performing configuration achieves a center voxel DICE score of 0.28 on the smallest lesion class, using a reduced prediction field of view strategy. This is a modest score but represents meaningful gains under highly imbalanced conditions. We also performed an ablation study of alternative design parameters, highlighting the complexity of this extremely imbalanced segmentation case.

**Dataset**

The dataset consists of 79 subjects with chronic left-hemispheric stroke lesions, each imaged using two MRI modalities: FLAIR and T1-weighted scans. Expert annotations identify six foreground pathological classes in addition to the brain background (region of interest): encephalomalacia, ventricles, gliosis, periventricular white matter disease (PV WMD), white matter hyperintensities (WMH), and lacunar infarcts (LI).

A defining characteristic of this dataset is its extreme and multi-level class imbalance. At the voxel level, the smallest class, lacunar infarcts, accounts for only 0.16% of all annotated voxels. At the subject level, this class appears in just 29 of the 79 brains, introducing additional imbalance for training strategies that sample across subjects. Furthermore, lacunar infarcts are typically small, localized structures, making segmentation performance highly sensitive to boundary errors. This challenge is amplified by the inherent sparsity of lesion voxels in 3D medical imaging, where the overwhelming majority of voxels correspond to background tissue.

These compounded sources of imbalance - across voxels, classes, and subjects - make the dataset a particularly demanding testbed for evaluating segmentation methods under clinically realistic conditions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/brainstats.png" title="Dataset statistics" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 1:</strong> Dataset class breakdown showing different kinds of class imbalance
  <div class="row mt-1">
    <div class="col-sm">
      <em>Left:</em> Number of subjects containing each class
    </div>
    <div class="col-sm">
      <em>Right:</em> Number of annotated voxels per class
    </div>
  </div>
</div>

**Previous Work**

This project has evolved through a series of experiments exploring how to segment extremely imbalanced stroke lesions in MRI. Initial work evaluated established architectures, including nnU-Net and DeepMedic, used range of hierarchical class groupings, class sampling ratios, and loss functions, including sensitivity-weighted loss to prioritize finding lesions over perfect segmentation. These experiments established a baseline and revealed the limits of standard imbalance-mitigation strategies for this problem.

One major limitation of the earlier pipeline was its subject-level sampling scheme. Because sampling was performed per brain, rare classes that were absent from many subjects remained underrepresented during training even when class balancing was applied. As a result, the most challenging lesion classes continued to be learned poorly, particularly those with very small volume and presence. However this adds an additional problem of balancing all of the classes equally during training to maximize learning without overfitting.

This work builds upon these previous trials with a careful analysis of imbalance, sampling, and evaluation during model development. In particular, we introduce a reduced prediction field of view strategy by investigating the center-voxel DICE. This allows us to better gauge the improvement in each model especially in segmenting the extremely imbalanced classes where boundary errors and voxel scarcity can obscure meaningful gains. This also gives a clearer picture of the individual class balance between learning meaningful features and overfitting.

**Solution**

We used a 3D U-Net as the core segmentation model, processing 33×33×33 voxel patches extracted from the multi-modal MRI volumes. This patch-based approach allows us to train many classes at once capturing local lesion context critical for small structures like lacunar infarcts, though it does limit global information that would be useful for some brain region specific classes like PV WMD which when found borders the ventricles.

We implemented class-aware patch sampling across the entire dataset. An index of class representation was first constructed for each subject, enabling random selection of individual voxel-centered patches (33×33×33) directly from the global distribution of each class. Weighted sampling was applied to prioritize minority classes, oversampling rare structures like lacunar infarcts while undersampling dominant classes such as background tissue, ensuring balanced training representation despite extreme voxel-level imbalance.

**Results**

<b>Figure 2</b> shows the results for the model which achieved the highest performance in the lacunar infarcts class. The full patch segmentation shows the worst performance overall and shows the class size imbalance the most. The center voxel DICE Score shows an improvement for every class except the background class. Though segmenting an MRI volume one voxel at a time is too computationally expensive for most use cases, we use this metric to gauge model to model improvements as well as what the best possible segmentation performance on this extremely imbalanced class could be since the center voxel has the most surrounding information and should give the strongest prediction. Notably, the PV WMH and WMH classes achieve comparable results with the largest classes in this metric demonstrating the extent to which balanced class learning was achieved but also the extreme difficulty learning the LI class. The center 9 voxel DICE score shows a nominal difference from the center voxel DICE score in the largest classes (besides for the background class) due to an increased ratio of center versus boundary voxels as well as improved performance from having more training data.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bestmodel.png" title="Best model testing results" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 2:</strong> Best model testing results using full patch DICE score, the center 9 voxel DICE score, and center voxel DICE score.
</div>

**Additional Work**

<em>Weighted Loss Mapping</em>

We tested implementing several weighting maps on our loss function calculation to weight the center voxel loss higher than the rest of patch and improve the center voxel segmentation performance. However none of our weighted masks showed a significant improvement over our baseline mask of ones.

<div class="container">
  <div class="row">
    <div class="col-sm-6">
      {% include figure.liquid loading="eager" path="assets/img/gaussianmask.gif" class="img-fluid rounded z-depth-0" %}
      <div class="caption text-center mt-1"><strong>A.</strong> Gaussian Mask</div>
    </div>
    <div class="col-sm-8">
      {% include figure.liquid loading="eager" path="assets/img/gaussiantest.png" class="img-fluid rounded z-depth-0" %}
      <div class="caption text-center mt-1"><strong>B.</strong> Gaussian Mask Results</div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6">
      {% include figure.liquid loading="eager" path="assets/img/inversedist.png" class="img-fluid rounded z-depth-0" %}
      <div class="caption text-center mt-1"><strong>C.</strong> Inverse Distance Mask</div>
    </div>
    <div class="col-sm-8">
      {% include figure.liquid loading="eager" path="assets/img/inversetest.png" class="img-fluid rounded z-depth-0" %}
      <div class="caption text-center mt-1"><strong>D.</strong> Inverse Distance Mask Results</div>
    </div>
  </div>
</div>

<div class="caption mt-2">
  <strong>Figure 3:</strong> Weighted loss mapping ablation results. Panels A-B show the Gaussian mask and corresponding test performance; C-D show the inverse distance mask and results. Neither outperformed the uniform baseline.
</div>
