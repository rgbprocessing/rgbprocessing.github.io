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



Description:
A large-scale competition benchmarking robust deepfake detection and precise temporal localization using the AV-Deepfake1M dataset—over 1 million high-fidelity manipulated videos across 2,000+ subjects. This challenge advances both binary classification (real vs fake) and interval-level localization of sparse manipulations, addressing real-world forensic needs against evolving audio-visual forgery attacks from state-of-the-art lip-sync (LatentSync, Diff2Lip) and TTS (F5-TTS, XTTSv2) models.

Net05 Solution Overview
Dual-branch 3D CNN architecture processing video (9ch: RGB+medfilt residual+edge filters, ) and audio spectrograms (). Triple-conv blocks with asymmetric pooling preserve early temporal resolution while aggressively compressing frequency, fusing at 1600-dim for binary prediction. Trained on AUStest07 subset with class-balanced BCE loss.



<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/aus.drawio.svg" title="Model" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 1:</strong> Model overview for per timepoint deepfake detection task
</div>
