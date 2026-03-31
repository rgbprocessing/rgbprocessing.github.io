---
layout: page
title: Identity Detection from Facial Movements
description: Customized CNN for motion vector classification
img: assets/img/idd_nospace.png
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

This work was inspired by [Protecting President Zelenskyy Against Deepfakes](https://arxiv.org/pdf/2206.12043.pdf) which performed identity specific deepfake detection using features extracted from body keypoints of videos. In the reference work, correlations between the change in position of the body and facial keyoints are used as hand-crafted features in a model. This work instead uses a custom-built convolutional neural network to weight and learn these correlations during training. This work also uses movement vectors rather than position vectors. Circular padding ensures full convolution across all parameters, with dilation and stride rates designed to rapidly reduce the temporal dimension while preserving movement features.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/idd_space.png" title="Model for 1 second input" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 2:</strong> Model for 1 second input
</div>

<b>Figure 2</b> shows the model for 1 second inputs. Input frames are smoothed and re-interpolated to 26 fps. The initial convolution layer processes 100 spatial features exhaustively (each convolved with all others), retaining the three spatial dimensions while collapsing time without padding. The output yields a single identity classification per second. Longer clips are handled via overlapping per-second predictions.
