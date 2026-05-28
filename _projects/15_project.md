---
layout: page
title: HDR Video to GIF Conversion
description: GIF conversion using tone-mapping
img: assets/img/comparison2.png
importance: 3
category: tools
---

**Introduction and Goal**

The goal of this project is to produce a GIF from an HDR video that matches the visual quality of the video more closely than default video to GIF conversion methods.

To achieve the desired result we first tone-mapped the video from HDR to SDR, then built the GIF from the tone-mapped frames using FFmpeg’s palette generation workflow. The final pipeline produces a GIF that preserves the perceptual appearance of the HDR source more closely within the GIF’s 256-color limitation. We also include code to loop over a google drive of videos and convert them all into gifs.

[Colab Link](https://colab.research.google.com/github/rgbprocessing/HDR-Video-to-GIF/blob/main/HDR_Video_to_GIF.ipynb)
[Jupyter Notebook](https://github.com/rgbprocessing/HDR-Video-to-GIF/blob/main/HDR_Video_to_GIF.ipynb)

**Dataset**

Target-class video data consisted of approximately 6 hours of curated celebrity interview footage. A comparable volume of non-target data was sourced from the [AVSpeech dataset](https://looking-to-listen.github.io/avspeech/) to provide a diverse set of background identities.

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
        {% include figure.liquid loading="eager" path="assets/img/idd_space.png" title="Model for 1 second input" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 2:</strong> Model for 1 second input
</div>

<strong>Figure 2</strong> shows the model for 1 second inputs. Input frames are smoothed and re-interpolated to 26 fps. The initial convolution layer processes 100 spatial features exhaustively (each convolved with all others), retaining the three spatial dimensions while collapsing time without padding. The output yields a single identity classification per second. Longer clips are handled via overlapping per-second predictions. The 3 second and 5 second models yield a classification per 3 seconds and per 5 seconds respectively.

**Conclusions**

Predictions exhibit improved accuracy for longer clips, though isolated misclassification peaks persist. These results demonstrate the model's capacity to learn class-specific patterns from facial movement vectors alone. However additional validation is required to determine whether identity specific features were truly learned or if there were other features of the two different data sources that distinguished them.

**Future Work**

Future extensions will incorporate full-body movement vectors alongside enhanced preprocessing to isolate confounding factors such as head rotation and body motion, thereby strengthening feature correlations. Additional datasets will address observed pose biases, where target videos predominantly featured seated frontal views while non-target videos encompassed diverse poses and positions. Model improvements will also target multi-identity learning from minimal per-identity data, mitigating the current requirement for extensive identity-specific training sets. Future work would also consider partial video splicing like that present in the [AV-Deepfake1M dataset](https://github.com/ControlNet/AV-Deepfake1M).
