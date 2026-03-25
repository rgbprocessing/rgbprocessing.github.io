---
layout: page
title: CZII - CryoET Object Identification
description: Multi-head 3D U-Net with per-class center heatmaps and NMS
img: assets/img/cryomodelvert.drawio.svg
importance: 2
category: competitions
---

**Competition Overview**

[kaggle competition](https://www.kaggle.com/competitions/czii-cryo-et-object-identification/overview)

The goal of this competition is to identify particle centers of 5 different classes in 3D tomograms. The data contains 6 different particle types and their approximate radius: apo-ferritin, beta-amylase (not scored), beta-galactosidase, ribosome, thyroglobulin, virus-like-particle.

<div class="row">
  <div class="col-sm mt-3 mt-md-0 d-flex justify-content-center">
    {% include figure.liquid loading="eager" path="assets/img/results140.png" 
       title="Sample tomogram" 
       class="img-fluid rounded z-depth-0" style="height: 100%; width: 100%; object-fit: cover;" %}
  </div>
</div>
<div class="caption">
    <strong>Figure 1:</strong> Sample 3D tomogram with rough segmentations.
</div>

**Model**

The model (see <b>Figure 2</b>) consists of a multi-head 3D U-Net trained on two different tasks. This allows for feature sharing while learning the related tasks and incorporating the radii data into the training process. The first head predicts the multi-class rough segmentation mask using the radii and center positions from the training data. The second head predicts the inverse distance of the center positions resulting in a per-class heatmap. The model is trained on overlapping 3D patches using a 3D Gaussian prioritising predictions made more central in the patch. The center positions are iteratively extracted using the maxima of the heatmap and non-maximum suppression (NMS) based off of the radii of the most strongly predicted centers (see <b>Figure 3</b>).

<div class="row">
  <div class="col-sm mt-3 mt-md-0 d-flex justify-content-center">
    {% include figure.liquid loading="eager" path="assets/img/cryomodel.drawio.svg" 
       title="Heatmap prediction model" 
       class="img-fluid rounded z-depth-0" style="height: 100%; width: 100%; object-fit: cover;" %}
  </div>
</div>
<div class="caption">
    <strong>Figure 2:</strong> Heatmap prediction model using multi-head 3D U-Net trained on rough segmentation labels and particle center inverse distance data. The model uses overlapping input patches and a 3D gaussian filter to predict per-class center heatmaps.
</div>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/detectparticles.drawio.svg" 
       title="Particle Detection" 
       class="img-fluid rounded z-depth-0" style="height: 100%; width: 100%; object-fit: cover;" %}
  </div>
</div>
<div class="caption">
    <strong>Figure 3:</strong> Particle detection flowchart. Non-maximum suppression is used to identify the most likely particles from the per-class heatmap and eliminate the already predicted regions.
</div>

**Future Work**

Future iterations would streamline the iterative peak extraction and NMS via vectorized operations.
