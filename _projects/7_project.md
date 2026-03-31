---
layout: page
title: Identity Detection from Facial Movement Vectors
description: with background image
img: assets/img/idd.png
importance: 2
category: research
---

**Overview**

This study investigates whether patterns of facial motion alone are sufficient to distinguish individual identity. Facial movement vectors were extracted from short video segments and used as the sole input for classification, explicitly excluding raw image and audio features. The objective was to evaluate the extent to which temporal dynamics of facial keypoints encode identity-specific information.

**Dataset**

Target-class video data consisted of approximately 6 hours of curated celebrity interview footage. A comparable volume of non-target data was sourced from the [AVSpeech dataset](https://looking-to-listen.github.io/avspeech/) to provide a diverse set of background identities.

Facial keypoints were extracted using [MediaPipe](https://developers.google.com/mediapipe/solutions/vision/face_landmarker). The resulting location vectors were temporally smoothed via a Gaussian filter and resampled to a uniform frame rate using cubic spline interpolation. These processed keypoints were then transformed into three-dimensional temporal movement vectors over fixed-duration windows of 1, 3, and 5 seconds.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/prof_picmediapipe.png" title="Mediapipe facial keypoint extraction" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 1:</strong> Mediapipe facial keypoint extraction
</div>

**Model**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/idd.png" title="Tree traversal comparison" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 1:</strong> Tree traversal order comparison across three algorithms. 
  <br>
  <em>Left:</em> Depth-first search visits leaf nodes ABD→ABE (B's siblings sequentially).
  <br>
  <em>Middle:</em> Breadth-first search explores layer-by-layer.
  <br>
  <em>Right:</em> First-move first prioritizes first-level siblings (ABD→ACF).
</div>
