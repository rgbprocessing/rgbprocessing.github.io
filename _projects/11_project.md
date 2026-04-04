---
layout: page
title: Noise Artifacts in Image Manipulations
description: visualizing manipulation artifacts through noise residuals
img: assets/img/6.jpg
importance: 6
category: research
---

**Noise Analysis for Manipulated Media Detection**

Image manipulations—even subtle ones—leave detectable fingerprints in the noise characteristics of digital media. Noise arises naturally from sensor limitations (photon shot noise, read noise), low-light conditions requiring gain amplification, and post-processing operations that alter local statistical properties. Critically, common Photoshop manipulations like blurring, liquify, and splicing disrupt these patterns differently than camera-native noise, creating exploitable inconsistencies for forensic analysis.

This project visualizes noise residuals (original minus median-filtered) across manipulation types, revealing artifact signatures that persist even in seemingly innocuous edits. These patterns form the basis for training manipulation detectors in the deepfake era.

<div class="row">
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/originalorange2.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>A.</strong> Original</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/download - 2023-09-06T114930.345.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>B.</strong> Noise Residual</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/originalorangeblurred2.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>C.</strong> Blur</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/orangeblur2noise.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>D.</strong> Blur Noise</div>
  </div>
</div>
<div class="row">
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/originalorangeliquify.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>E.</strong> Liquify</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/orangeliquefy.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>F.</strong> Liquify Noise</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/orangecopypaste.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>G.</strong> Splicing</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/download - 2023-09-06T115714.921.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>H.</strong> Splicing Noise</div>
  </div>
</div>

<div class="caption mt-3">
  <strong>Figure 1:</strong> Noise residuals reveal manipulation artifacts. Each pair shows manipulated image and corresponding noise (original minus median-filtered). Blur removes noise patterns (C-D); liquify creates patterned distortions (E-F); splicing shows noise pattern discontinuities (G-H).
</div>

**Face-Aware Liquify Analysis**

Photoshop's Face-Aware Liquify tool enables precise adjustments to facial features (forehead, jawline, face width, chin height) while preserving overall facial structure. However, these semantically-guided warps introduce characteristic noise distortions that differ markedly from camera-native patterns. Even subtle corrections create shearing and stretching artifacts visible in noise residuals.

<div class="row">
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/ddpng.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>A.</strong> Original</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/download - 2023-09-06T105213.641.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>B.</strong> Original Noise</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/forehead.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>C.</strong> Forehead Adjustment</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/forehead noise.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>D.</strong> Forehead Noise</div>
  </div>
</div>
<div class="row">
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/jawline.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>E.</strong> Jawline Adjustment</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/jawline noise.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>F.</strong> Jawline Noise</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/face width.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>G.</strong> Face Width Adjustment</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/face width noise.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>H.</strong> Face Width Noise</div>
  </div>
</div>
<div class="row">
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/chin.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>I.</strong> Chin Height Adjustment</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/chin_noise.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>J.</strong> Chin Noise</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/all_adjustments.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>K.</strong> All Adjustments</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/all_noise.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>L.</strong> All Adjustments Noise</div>
  </div>
</div>
<div class="caption mt-3">
  <strong>Figure 2:</strong> Face-Aware Liquify noise signatures. Each pair shows manipulated face and corresponding noise residual.
</div>


