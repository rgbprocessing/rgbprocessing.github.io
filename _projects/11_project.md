---
layout: page
title: Image Manipulation Noise Artifacts
description: Visualizing manipulation artifacts through noise residuals
img: assets/img/noisethumbnail.png
importance: 6
category: research
---

**Noise Analysis for Manipulated Media Detection**

Image manipulations—even subtle ones—leave detectable fingerprints in the noise characteristics of digital media. Noise arises naturally from sensor limitations (photon shot noise, read noise), low-light conditions requiring gain amplification, and post-processing operations that alter local statistical properties. Critically, common Photoshop manipulations like blurring, liquify, and splicing disrupt these patterns differently than camera-native noise, creating exploitable inconsistencies for forensic analysis.

This project visualizes noise residuals (original minus median-filtered) across manipulation types, revealing artifact signatures that persist even in seemingly innocuous edits. These patterns form the basis for training manipulation detectors in the deepfake era.

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

**AI-Generated Media Analysis**

Deepfakes produce photorealistic results but may preserve detectable noise inconsistencies across frames. These artifacts are sometimes visible when analyzing frame-wise noise residuals from manipulated video sequences.

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

While noise artifacts may show signs of image manipulation, many processes like resizing, compression, filtering, and denoising obscure full-resolution signatures. Automatic computational photography, especially lens and face unwarping, produces similar noise residuals to malicious edits. Manual photo adjustments leave comparable signatures, as shown with Photoshop's Liquify tool where even extremely mild face edits create major detectable artifacts at full resolution.

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

In this day and age the definition of an 'authentic' photo has become increasingly blurred across the entire digital image pipeline. Photos can be taken with automatic bokeh, lens unwarping, and other effects. Manual editing is readily available including both traditional photo editing as well as new filters and generative features. How images are stored, shared, and displayed also affects their quality. Display platforms have additional editing and composite tools and filters. Generative editing enables object removal and face swaps, and fully generative images are easily made with available tools. There are many limitations to when noise residuals can say something about an image, but it is an interesting piece of the puzzzle of understanding the many layers of digital imagery.

<div class="references">
  <h5>References</h5>
  <ol>
    <li>Li, L., Bao, J., Yang, H., Chen, D., & Wen, F. (2020). FaceShifter: Towards high fidelity and occlusion aware face swapping. <em>arXiv preprint arXiv:1912.13457</em>. <a href="https://arxiv.org/abs/1912.13457">arxiv.org/abs/1912.13457</a></li>
    
    <li>Wang, et al. (2019). Detecting photoshopped faces by scripting photoshop. In <em>Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)</em>. <a href="https://openaccess.thecvf.com/content_ICCV_2019/papers/Wang_Detecting_Photoshopped_Faces_by_Scripting_Photoshop_ICCV_2019_paper.pdf">openaccess.thecvf.com</a></li>
  </ol>
</div>
