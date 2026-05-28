---
layout: page
title: HDR Video to GIF Conversion
description: GIF conversion using tone-mapping
img: assets/img/comparison2.png
importance: 1
category: tools
---

**Introduction and Goal**

The goal of this project is to produce a GIF from an HDR video that matches the visual quality of the video more closely than default video to GIF conversion methods.

To achieve the desired result we first tone-mapped the video from HDR to SDR, then built the GIF from the tone-mapped frames using FFmpeg’s palette generation workflow. The final pipeline produces a GIF that preserves the perceptual appearance of the HDR source more closely within the GIF’s 256-color limitation. We also include code to loop over a google drive of videos and convert them all into gifs.

[Colab Link](https://colab.research.google.com/github/rgbprocessing/HDR-Video-to-GIF/blob/main/HDR_Video_to_GIF.ipynb)

[Jupyter Notebook](https://github.com/rgbprocessing/HDR-Video-to-GIF/blob/main/HDR_Video_to_GIF.ipynb)

**Problem**

Default GIF conversion for HDR videos results in dull-looking GIFs that do not visually match the HDR videos.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/default1.gif" class="img-fluid rounded z-depth-0" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/default2.gif" class="img-fluid rounded z-depth-0" %}
  </div>
</div>
<div class="caption">
  <strong>Figure 1:</strong> Default GIF conversion on HDR video
</div>

**Solution**

We used Hable tone mapping to convert the HDR video from BT.2020 into BT.709 before generating the GIF palette. The resulting GIFs match the visual appearance of the original HDR videos much more closely.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/hable1.gif" class="img-fluid rounded z-depth-0" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/hable2.gif" class="img-fluid rounded z-depth-0" %}
  </div>
</div>
<div class="caption">
  <strong>Figure 1:</strong> GIF conversion after Hable tone mapping
</div>

**Additional Work**

**Takeaways and Future Work**
