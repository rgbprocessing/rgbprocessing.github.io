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

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/prof_picmediapipe.png" title="Mediapipe facial keypoint extraction" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 1:</strong> Mediapipe facial keypoint extraction
</div>
