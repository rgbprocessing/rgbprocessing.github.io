---
layout: page
title: NeurIPS - Ariel Data Challenge 2025
description: "33rd place solution: CNN ensemble with augmentation"
img: assets/img/arielmodel_lightdark.drawio.svg
importance: 1
category: work
related_publications: false
---

**Competition Overview**

When an exoplanet passes in front of its host star, a fraction of the starlight filters through the planet's atmosphere. We can use these transit observations to recover the exoplanet spectrum composition. The goal of this competition is to recover exoplanet spectra from simulated transit data that incorporates realistic effects such as stellar limb darkening and diverse atmospheric models designed to reflect the conditions expected from the Ariel mission. See the [kaggle competition overview](https://www.kaggle.com/competitions/ariel-data-challenge-2025/overview) for details.

**Data**

The dataset includes two different time series signal files per observation as well as some general information about the star and planet pair such as their mass and orbit characteristics. See the [kaggle dataset](https://www.kaggle.com/competitions/ariel-data-challenge-2025/data) for details.

Signal files:

- FGS1 data comes from Ariel's Fine Guidance System (FGS) and provides high-precision photometry of the target star in the visible light spectrum with a sensitivity between 0.60 and 0.80 µm.
- AIRS-CH0 data, from the Ariel InfraRed Spectrometer (AIRS), has sensitivity between 1.95 and 3.90 µm.

See Figures 1 and 2 for examples of the unprocessed and preprocessed FGS1 and AIRS-CH0 data.

**PreProcessing**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/FGS10.png" title="FGS1 data" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
  Figure 1: Single planet observation (FGS1 detector), first time frame.
  <br>
  <strong>Left:</strong> Calibrated raw (post-gain/offset, with artifacts).
  <br>
  <strong>Middle:</strong> Processed (bad pixels masked, dark/flat corrected).
  <br>
  <strong>Right:</strong> Inpainted (corrupted areas filled, fully continuous).
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/AIRS0.png" title="AIRS-CH0 data" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 2: This plot displays the first time frame for a single planet observation, comparing three stages of the AIRS-CH0 detector data.

Original (left column): Calibrated raw images after gain and offset correction, which may still contain hot/dead pixels and other detector artifacts.

Processed (middle column): Images after masking bad pixels and applying cleaning steps such as dark and flat field corrections. Masked regions appear as missing or blank areas.

Inpainted (right column): Images where missing or corrupted pixels have been filled using inpainting, resulting in fully continuous frames.

</div>

Additional data:

**Solution Overview**

[kaggle solution writeup](https://www.kaggle.com/competitions/ariel-data-challenge-2025/writeups/33rd-place-solution) (including code)

Solution Summary

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/arielmodel_lightdark.drawio.svg" title="Model Flowchart" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure X: Model flowchart. The input is the pre-processed data array x, and the outputs are the predictions for the requested wavelengths and the associated sigma values.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/TRRB.drawio.svg" title="Time Reducing Residual Block" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure X: Detailed view of the Time Reducing Residual Block N for N as 1 through 6.
</div>
