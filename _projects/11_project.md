---
layout: page
title: Image manipulation detection (noise)
description: another project with an image 🎉
img: assets/img/6.jpg
importance: 6
category: research
---

Noise Analysis for Manipulated Media Detection

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
    {% include figure.liquid loading="eager" path="assets/img/originalblur2noise.png" class="img-fluid rounded z-depth-0" %}
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
  <strong>Figure 1:</strong> Noise residuals reveal manipulation artifacts. Each pair shows manipulated image and corresponding noise (original minus median-filtered). Blur smooths noise patterns (C-D); liquify creates shearing distortions (E-F); splicing shows boundary discontinuities (G-H).
</div>
