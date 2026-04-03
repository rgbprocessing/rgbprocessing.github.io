---
layout: page
title: 1M-Deepfakes Detection Challenge
description: dual-branch video CNN
img: assets/img/aus.drawio.svg
importance: 4
category: competitions
---

**Competition Overview**

The [2024 1M-Deepfakes Detection Challenge](https://deepfakes1m.github.io/2024/about) evaluates deepfake detection and temporal localization on the [AV-Deepfake1M dataset](https://github.com/ControlNet/AV-Deepfake1M) which consists of over 1 million videos of 2,000 unique subjects. The dataset consists of videos that are partially manipulated with fake visual and/or audio segments generated using lip-sync and text-to-speech models.

**Solution Overview**

The model developed for this challenge, shown in <b>Figure 1</b>, consists of dual visual and audio branches processing 4-second video clips. A sliding window is used for temporal localization and aggregation across windows provides video-level deepfake classification.

The visual branch processes RGB frames alongside two derived features: noise residuals from median-filtered image subtraction, and color-boosted channels via gray value removal from RGB triplets, yielding 9 input channels. The audio branch uses 2D spectrograms from the 4-second clip.

Each branch applies CNN blocks with batch normalization. The audio branch employs asymmetric pooling that preserves temporal resolution longer than frequency resolution. Branch outputs are flattened, passed through fully connected layers, then concatenated and fused via an additional convolutional layer. The resulting features are flattened and go through a final fully connected layer which outputs the per-frame predictions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/aus.drawio.svg" title="Model" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 1:</strong> Model overview for deepfake detection and localization
</div>

**Future Work**

Future improvements would incorporate additional content-aware features such as lip-sync inconsistency detection and motion inconsistencies as well as a systematic comparison of audio-visual feature extraction to identify optimal features for manipulation artifact detection.
