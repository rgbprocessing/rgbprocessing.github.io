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

This work was inspired by [Protecting President Zelenskyy Against Deepfakes](https://arxiv.org/pdf/2206.12043.pdf) which performed identity specific deepfake detection using features extracted from body keypoints of videos. In the reference work, correlations between the change in position of the body and facial keypoints are used as hand-crafted features in a model. This work instead uses a custom-built convolutional neural network to weight and learn these correlations during training. This work also uses movement vectors rather than position vectors. Circular padding ensures full convolution across all parameters, with dilation and stride rates designed to rapidly reduce the temporal dimension while preserving movement features.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/idd_space.png" title="Model for 1 second input" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 2:</strong> Model for 1 second input
</div>

<b>Figure 2</b> shows the model for 1 second inputs. Input frames are smoothed and re-interpolated to 26 fps. The initial convolution layer processes 100 spatial features exhaustively (each convolved with all others), retaining the three spatial dimensions while collapsing time without padding. The output yields a single identity classification per second. Longer clips are handled via overlapping per-second predictions. The 3 second and 5 second models yield a classification per 3 seconds and per 5 seconds respectively.

**Testing Results**

<div style="display: flex; justify-content: center; margin: 0 auto;">
<table style="text-align: center;">
  <thead>
    <tr>
      <th>Clip Length</th>
      <th>Target Identity</th>
      <th>Non-Target</th>
      <th>Average</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5 seconds</td>
      <td>0.893</td>
      <td>0.940</td>
      <td>0.917</td>
    </tr>
    <tr>
      <td>3 seconds</td>
      <td>0.936</td>
      <td>0.824</td>
      <td>0.880</td>
    </tr>
    <tr>
      <td>1 second</td>
      <td>0.897</td>
      <td>0.793</td>
      <td>0.845</td>
    </tr>
  </tbody>
</table>
</div>
<div class="caption">
  <strong>Table 1:</strong> Testing Accuracy for Target class and Non-Target class
</div>

**Conclusions**

Predictions exhibit improved accuracy for longer clips, though isolated misclassification peaks persist. These results demonstrate the model's capacity to learn class-specific patterns from facial movement vectors alone. However additional validation is required to determine whether identity specific features were truly learned or if there were other features of the two different data sources that distinguished them.

**Future Work**

Future extensions will incorporate full-body movement vectors alongside enhanced preprocessing to isolate confounding factors such as head rotation and body motion, thereby strengthening feature correlations. Additional datasets will address observed pose biases, where target videos predominantly featured seated frontal views while non-target videos encompassed diverse poses and positions. Model improvements will also target multi-identity learning from minimal per-identity data, mitigating the current requirement for extensive identity-specific training sets. Future work would also consider partial video splicing like that present in the [AV-Deepfake1M dataset](https://github.com/ControlNet/AV-Deepfake1M).
