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

<div class="row">
  <div class="col-sm mt-3 mt-md-0 d-flex justify-content-center">
    {% include figure.liquid loading="eager" path="assets/img/FGS1.png" 
       title="FGS1 Calibrated Image Single Time Frame" 
       class="img-fluid rounded z-depth-0" style="max-height: 475px; width: auto; object-fit: contain;" %}
  </div>
</div>
<div class="caption">
    <strong>Figure 1:</strong> Calibrated FGS1 image after ADC gain/offset correction for a single time frame and a single planet observation. 
  <br>
  At a single timepoint, the image represents 32x32 spatial pixels.
</div>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/AIRS.png" 
       title="AIRS-CH0 Calibrated Image Single Time Frame" 
       class="img-fluid rounded z-depth-0" style="height: 100%; width: 100%; object-fit: cover;" %}
  </div>
</div>
<div class="caption">
    <strong>Figure 2:</strong> Calibrated AIRS-CH0 image after ADC gain/offset correction for a single time frame and a single planet observation. 
  <br>
  At a single timepoint, the image represents 32 spatial x 356 wavelength pixels.
</div>

The dataset also contains conversion parameters for restoring the original data range, axis information for both signal instruments, and planetary information (planetary mass, orbital eccentricity, orbital period, semi-major axis, orbital inclination) and stellar information (stellar radius, stellar mass, stellar effective temperature).

**PreProcessing**

First we load and calibrate the signals. We mask hot and dead pixels, apply non-linearity correction, apply flat field correction, sutract the dark current background, and perform correlated double sampling.

Then we use time binning to synchronize the FGS1 and AIRS-CH0 data as well as eliminate the alternating high/low flux levels due to the observing mode of instruments. We inpaint the masked regions using biharmonic interpolation across time channels, and then we sum across the spatial axes to produce wavelength x time light curves.

The final steps to prepare the data for our model are median filtering to remove spikes and other noise and downsampling to further reduce noise and model size.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/FGS10.png" title="FGS1 data" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 3:</strong> Single planet observation FGS1 data, single time frame.
  <br>
  <em>Left:</em> Calibrated raw (post-gain/offset, with artifacts).
  <br>
  <em>Middle:</em> Processed (bad pixels masked, dark/flat corrected).
  <br>
  <em>Right:</em> Inpainted (masked areas filled).
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/AIRS0.png" title="AIRS-CH0 data" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 4:</strong> Single planet observation AIRS-CH0 data, single time frame.
  <br>
  <em>Left:</em> Calibrated raw (post-gain/offset, with artifacts).
  <br>
  <em>Middle:</em> Processed (bad pixels masked, dark/flat corrected).
  <br>
  <em>Right:</em> Inpainted (masked areas filled).
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/demo143065778_0.png" title="Median Filtered Data" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 5:</strong> Median filtering pipeline preserves transit signal features while removing noise and outliers. 
  <br>
  <em>Top:</em> Preprocessed signal before median filtering. 
  <br>
  <em>Middle:</em> Median filtered signal. 
  <br>
  <em>Bottom:</em> Model training uses an additional stride, reducing the time dimension by a factor of around 10.
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
    <strong>Figure X:</strong> Model flowchart. The input is the pre-processed data array x, and the outputs are the predictions for the requested wavelengths and the associated sigma values.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/TRRB.drawio.svg" title="Time Reducing Residual Block" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <strong>Figure X:</strong> Detailed view of the Time Reducing Residual Block N for N as 1 through 6.
</div>
