---
layout: page
title: Image Manipulation Noise Artifacts
description: Visualizing manipulation artifacts through noise residuals
img: assets/img/noisethumbnail.png
importance: 6
category: research
---

**Noise Analysis for Manipulated Media Detection**

Image manipulations, even subtle ones, can leave detectable artifacts in the image's noise residuals. Noise in a digital image arises naturally from the camera sensor, imaging conditions, and post-processing operations. Common image manipulations like splicing and warping disrupt these noise patterns, creating visible artifacts.

This project visualizes noise residuals across different digital image manipulation types, revealing artifacts that persist even in minor edits. To extract the noise we subtract a median filtered image from the original image. This residual captures noise and some high frequency details such as outlines.

<div class="row">
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/originalorange2.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>A.</strong> Original</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/download - 2023-09-06T114930.345.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>B.</strong> Noise Residual</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/originalorangeblurred2.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>C.</strong> Blur</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/orangeblur2noise.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>D.</strong> Blur Noise</div>
  </div>
</div>
<div class="row">
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/originalorangeliquify.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>E.</strong> Liquify</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/orangeliquefy.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>F.</strong> Liquify Noise</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/orangecopypaste.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>G.</strong> Splicing</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/download - 2023-09-06T115714.921.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>H.</strong> Splicing Noise</div>
  </div>
</div>

<div class="caption mt-3">
  <strong>Figure 1:</strong> Noise residuals reveal manipulation artifacts. Each pair shows manipulated image and corresponding noise (original minus median-filtered). Blur removes noise patterns (C-D); liquify creates patterned distortions (E-F); splicing shows noise pattern discontinuities (G-H).
</div>

**Face-Aware Liquify Analysis**

Photoshop's Face-Aware Liquify tool enables precise adjustments to facial features (forehead, jawline, face width, chin height) while preserving overall facial structure. These semantically-guided warps introduce characteristic noise distortions at full resolution.

<div class="row">
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/ddpng.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>A.</strong> Original</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/download - 2023-09-06T105213.641.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>B.</strong> Original Noise</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/forehead.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>C.</strong> Forehead Adjustment</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/forehead noise.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>D.</strong> Forehead Noise</div>
  </div>
</div>
<div class="row">
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/jawline.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>E.</strong> Jawline Adjustment</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/jawline noise.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>F.</strong> Jawline Noise</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/face width.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>G.</strong> Face Width Adjustment</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/face width noise.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>H.</strong> Face Width Noise</div>
  </div>
</div>
<div class="row">
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/chin height.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>I.</strong> Chin Height Adjustment</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/chin height noise.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>J.</strong> Chin Noise</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/all face.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>K.</strong> All Adjustments</div>
  </div>
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/all face noise.png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>L.</strong> All Adjustments Noise</div>
  </div>
</div>
<div class="caption mt-3">
  <strong>Figure 2:</strong> Face-Aware Liquify noise signatures. Each pair shows manipulated face and corresponding noise residual.
</div>

**Deepfake Analysis**

Classic video deepfakes involve splicing a generated face or head over a real video. Even though the videos undergo compression and additional editing, noise artifacts across frames may still be visible.

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item rounded z-depth-0" 
              src="https://drive.google.com/file/d/1GG0LG_JsDLiXi5YwoCXfKIYtsvqBFoVB/preview" 
              allowfullscreen loading="lazy"></iframe>
    </div>
    <div class="caption text-center mt-1"><strong>A.</strong> Deepfake Face Replacement</div>
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item rounded z-depth-0" 
              src="https://drive.google.com/file/d/1hRRY8n41dGDR7ltfL9UP-70d6VH5_RkC/preview" 
              allowfullscreen loading="lazy"></iframe>
    </div>
    <div class="caption text-center mt-1"><strong>B.</strong> FaceShifter Face Swap</div>
  </div>
</div>

<div class="caption mt-3">
  <strong>Figure 3:</strong> Deepfake video examples showing face replacement (A) and FaceShifter swap (B).
</div>

**Limitations**

While noise artifacts may show signs of image manipulation, many processes like resizing, compression, filtering, and denoising obscure full-resolution signatures. Automatic computational photography, especially lens and face unwarping (see <b>Figure 4</b>), produces similar noise residuals to manual edits. Also subtle manual photo adjustments may leave obvious signatures such as in the face-aware liquify tool examples in <b>Figure 2</b>.

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/DE6DC95D-303C-4D38-9069-ACEEDA7A9853.jpg" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>A.</strong> Original</div>
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/download (34).png" class="img-fluid rounded z-depth-0" %}
    <div class="caption text-center mt-1"><strong>B.</strong> Noise Residual</div>
  </div>
</div>

<div class="caption mt-3">
  <strong>Figure 4:</strong> Automatic lens unwarping creates noise residual patterns.
</div>

In this day and age the definition of an 'authentic' photo has become increasingly blurred across the entire digital image pipeline. Photos can be taken with automatic lens unwarping, synthethic bokeh, skin blurring, avatar splicing, and other mild or extreme effects. Manual editing is readily available including both traditional photo editing as well as new filters and generative features. How images are stored, shared, and displayed also affects their content at a data level. Display platforms have additional editing and composite tools and filters. Generative editing enables object removal and face swaps, and fully generative images are easily made with available tools. There are many limitations to when noise residuals can say something about an image, but it is an interesting piece of the puzzzle of understanding the many layers of modern digital imagery.

<div class="references">
  <h5>References</h5>
  <ol>
    <li>Li, L., Bao, J., Yang, H., Chen, D., & Wen, F. (2020). FaceShifter: Towards high fidelity and occlusion aware face swapping. <em>arXiv preprint arXiv:1912.13457</em>. <a href="https://arxiv.org/abs/1912.13457">arxiv.org/abs/1912.13457</a></li>
    
    <li>Wang, et al. (2019). Detecting photoshopped faces by scripting photoshop. In <em>Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)</em>. <a href="https://openaccess.thecvf.com/content_ICCV_2019/papers/Wang_Detecting_Photoshopped_Faces_by_Scripting_Photoshop_ICCV_2019_paper.pdf">openaccess.thecvf.com</a></li>
  </ol>
</div>
