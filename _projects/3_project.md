---
layout: page
title: Detect AI vs. Human-Generated Images
description: Multi-Feature Ensemble Classifier
img: assets/img/features.png
importance: 2
category: competitions
---

**Competition Overview**

[Detect AI vs. Human-Generated Images 2025 Women in AI (WAI) Kaggle Challenge](https://www.kaggle.com/competitions/detect-ai-vs-human-generated-images/overview)

The goal of this project is to classify authentic images versus AI-generated images. The dataset consists of 79,950 total training images consisting of authentic images sourced from Shuttershock paired with equivalent images produced by generative models and a test set of 19,986 images. The main challenge of this dataset was handling domain shift from new unseen image generation models. See the [Kaggle competition page](https://www.kaggle.com/competitions/detect-ai-vs-human-generated-images/overview) for dataset access and more details.

**Solution Overview**

This study systematically evaluates the performance of different imaging features used to train a RegNet architecture for generated image classification. Raw image features use standard 3-channel RGB patches to learn spatial and color patterns directly. Noise features extract patch-wise residuals via a 3×3 kernel median filter. Fourier features convert patches to 6-channel magnitude and phase representations. Other image features such as HSV and a specialized boosted saturation color extraction eliminating gray values were also explored as model inputs. The goal of this approach is to identify which feature types best capture synthetic signatures under domain shift. For the final predictions we use a weighted ensemble of the highest-performing models.

**Augmentation**

Training employed resize, Gaussian blur, color jitter, vertical flip, rotation, synthetic noise injection, and perspective transforms to enhance generalization across diverse generation models and to extract more robust features to distinguish generated images.

**Results**

<div style="display: flex; justify-content: center; margin: 0 auto;">
  <table style="border-collapse: collapse; text-align: center;">
    <thead>
      <tr>
        <th style="padding: 8px;">Feature Type</th>
        <th style="padding: 8px;">Validation Accuracy</th>
        <th style="padding: 8px;">Test Score</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px;">RGB Baseline</td>
        <td style="padding: 8px;">__._%</td>
        <td style="padding: 8px;">__._%</td>
      </tr>
      <tr>
        <td style="padding: 8px;">Noise Features</td>
        <td style="padding: 8px;">__._%</td>
        <td style="padding: 8px;">__._%</td>
      </tr>
      <tr>
        <td style="padding: 8px;">Fourier Magnitude</td>
        <td style="padding: 8px;">__._%</td>
        <td style="padding: 8px;">__._%</td>
      </tr>
      <tr>
        <td style="padding: 8px;">Fourier Phase</td>
        <td style="padding: 8px;">__._%</td>
        <td style="padding: 8px;">__._%</td>
      </tr>
      <tr>
        <td style="padding: 8px;">HSV Features</td>
        <td style="padding: 8px;">__._%</td>
        <td style="padding: 8px;">__._%</td>
      </tr>
      <tr>
        <td style="padding: 8px;">Boosted Saturation</td>
        <td style="padding: 8px;">__._%</td>
        <td style="padding: 8px;">__._%</td>
      </tr>
      <tr style="font-weight: bold;">
        <td style="padding: 8px;">Weighted Ensemble</td>
        <td style="padding: 8px;">__._%</td>
        <td style="padding: 8px;">__._%</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="caption" style="text-align: center;">
  <strong>Table 1:</strong> Comparative performance of feature-specific RegNet models and final ensemble
</div>

final result achieved
comparative table

within top 20%
