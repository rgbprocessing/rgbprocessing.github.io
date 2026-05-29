---
layout: page
title: HDR Video to GIF Conversion
description: GIF conversion using Hable tone-mapping
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

We used Hable tone-mapping to convert the HDR video from BT.2020 into BT.709 before generating the GIF palette. The resulting GIFs match the visual appearance of the original HDR videos much more closely.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/hable1.gif" class="img-fluid rounded z-depth-0" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/hable2.gif" class="img-fluid rounded z-depth-0" %}
  </div>
</div>
<div class="caption">
  <strong>Figure 2:</strong> GIF conversion after Hable tone-mapping
</div>

The colors appear much more vibrant in the tone-mapped result than in the default generation. For these clips, Hable tone-mapping was chosen for visually aligning most closely with the original HDR video. It preserved the observed saturation and brightness without overexposing details as much. Notably, we only used the default parameters for each algorithm.

We show a comparison between the default GIF output and the tone-mapped GIF outputs in Figures 3-5.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tone1.png" title="GIF conversion comparison clip 1" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 3:</strong> GIF conversion comparison for clip 1.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tone2.png" title="GIF conversion comparison clip 2" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 4:</strong> GIF conversion comparison for clip 2.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tone3.png" title="Final GIF conversion comparison" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 5:</strong> Final GIF conversion comparison for both clips.
</div>

**Takeaways and Future Work**

The primary takeaway from this project is that, to preserve the visual appearance of an HDR video in a GIF, the video should first be tone-mapped into an SDR-friendly color space. This produced GIFs that more closely matched the appearance of the original HDR videos. All of the code is available on [Colab](https://colab.research.google.com/github/rgbprocessing/HDR-Video-to-GIF/blob/main/HDR_Video_to_GIF.ipynb)/[Github](https://github.com/rgbprocessing/HDR-Video-to-GIF/blob/main/HDR_Video_to_GIF.ipynb) including a codeblock that converts all videos in a folder into GIFs with tone-mapping applied. Future work would incorporate this feature into a user-friendly webtool to create GIFs from video with increased functionality for processing HDR videos.
