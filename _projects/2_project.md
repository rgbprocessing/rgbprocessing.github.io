---
layout: page
title: CZII - CryoET Object Identification
description: Multi-head 3D U-Net with per-class center heatmaps and NMS
img: assets/img/detectparticles.drawio.svg
importance: 2
category: competitions
giscus_comments: true
---

**Competition Overview**

[kaggle competition](https://www.kaggle.com/competitions/czii-cryo-et-object-identification/overview)

**Data**

**Dataset Analysis**

## Solution

**Model**

<div class="row">
  <div class="col-sm mt-3 mt-md-0 d-flex justify-content-center">
    {% include figure.liquid loading="eager" path="assets/img/cryomodel.drawio.svg" 
       title="Heatmap prediction model" 
       class="img-fluid rounded z-depth-0" style="height: 100%; width: 100%; object-fit: cover;" %}
  </div>
</div>
<div class="caption">
    <strong>Figure 1:</strong> Heatmap prediction model using multi-head 3D U-Net trained on rough segmentation labels and particle center inverse distance data. The model uses overlapping input patches and a 3D gaussian filter to predict per-class center heatmaps.
</div>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/detectparticles.drawio.svg" 
       title="Particle Detection" 
       class="img-fluid rounded z-depth-0" style="height: 100%; width: 100%; object-fit: cover;" %}
  </div>
</div>
<div class="caption">
    <strong>Figure 2:</strong> Particle detection flowchart. Non-maximum suppression is used to identify the most likely particles from the per-class heatmap and eliminate the already predicted regions.
</div>

**Augmentation**

**Ensembling methods**

## Conclusion

## Citations
