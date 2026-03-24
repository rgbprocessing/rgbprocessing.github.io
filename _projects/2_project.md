---
layout: page
title: project 2
description: a project with a background image and giscus comments
img: assets/img/3.jpg
importance: 2
category: competitions
giscus_comments: true
---

**Competition Overview**



**Data**



<div class="row">
  <div class="col-sm mt-3 mt-md-0 d-flex justify-content-center">
    {% include figure.liquid loading="eager" path="assets/img/FGS1.png" 
       title="FGS1 Calibrated Image Single Time Frame" 
       class="img-fluid rounded z-depth-0" style="max-height: 475px; width: auto; object-fit: contain;" %}
  </div>
</div>
<div class="caption">
    <strong>Figure 1:</strong> Calibrated FGS1 image after ADC gain/offset correction for a single time frame and a single planet observation. 
  <br>
  At a single timepoint, the image represents 32x32 spatial pixels.
</div>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/AIRS.png" 
       title="AIRS-CH0 Calibrated Image Single Time Frame" 
       class="img-fluid rounded z-depth-0" style="height: 100%; width: 100%; object-fit: cover;" %}
  </div>
</div>
<div class="caption">
    <strong>Figure 2:</strong> Calibrated AIRS-CH0 image after ADC gain/offset correction for a single time frame and a single planet observation. 
  <br>
  At a single timepoint, the image represents 32 spatial x 356 wavelength pixels.
</div>





**Dataset Analysis**



## Solution


**Model**


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/arielmodel_lightdark.drawio.svg" title="Model Flowchart" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 8:</strong> Model flowchart. The input is the pre-processed data array x, and the outputs are the predictions for the requested wavelengths and the associated sigma values.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/TRRB.drawio.svg" title="Time Reducing Residual Block" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 9:</strong> Detailed view of the Time Reducing Residual Block N for N as 1 through 6.
</div>

**Augmentation**



**Ensembling methods**



## Conclusion



## Citations


