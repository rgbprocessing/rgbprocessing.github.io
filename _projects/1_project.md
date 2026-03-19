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

Then we use time binning to synchronize the FGS1 and AIRS-CH0 data as well as eliminate the alternating high/low flux levels due to the observing mode of instruments. We inpaint the masked regions using biharmonic interpolation across time channels, and then we sum across the spatial axes to produce wavelength x time light curves. See <strong>Figure 3</strong> and <strong>Figure 4</strong> for data examples.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/FGS10.png" title="FGS1 data" class="img-fluid rounded z-depth-0" %}
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
        {% include figure.liquid loading="eager" path="assets/img/AIRS0.png" title="AIRS-CH0 data" class="img-fluid rounded z-depth-0" %}
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

The final steps to prepare the data for our model are median filtering to remove spikes and other noise and downsampling to further reduce noise and model size (<strong>Figure 5</strong>).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/demo143065778_0.png" title="Median Filtered Data" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 5:</strong> Median filtering preserves transit signal features while removing noise and outliers. 
  <br>
  <em>Top:</em> Preprocessed signal transit signal (summation across spatial dimension) before median filtering. 
  <br>
  <em>Middle:</em> Median filtered signal using large kernel size.
  <br>
  <em>Bottom:</em> Model training uses an additional stride, downsampling the time dimension by a factor of around 10 with varying offsets. As seen in the figure, features are preserved in the downsample.
</div>

**Dataset Analysis**

One of the challenges of this dataset is that it contains some incomplete transit edge cases (examples in <strong>Figure 6</strong>). We considered using a BATMAN transit model to fit the data but ran into time constraints due to the complexity of doing so robustly. In our final solution we use varying downsampling and offsets of our input data to manufacture additional partial transit training cases.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/incompletetransit.png" title="Examples of incomplete transit data" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 6:</strong> Examples of incomplete transit edge cases <em>(b)</em> & <em>(d)</em> where onset and offset detection failed versus typical cases <em>(a)</em> and <em>(c)</em>.
</div>

Solutions for the previous iteration of this project found success using signal processing to find the spectras [[1]](https://www.kaggle.com/code/vitalykudelya/neurips-non-ml-transit-curve-fitting). Building off this work we investigated the effectiveness of similar techniques on the 2025 dataset which used more realistic and complex simulations. <strong>Figure 7</strong> shows the approximate transit depth calculated from the ground truth spectra and the observed light curve. We found that the ground truth value is not at the minimum or any fixed percentage of the light curve transit depth and depends on additional characteristics of the transit. From this we determined that our model should incorporate time signal processing to pick up on additional features of the light curve as well as the transit, planet, and star data.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/transitcurves.png" title="Transit Curves" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 7:</strong> Transit light curves with depth calculated from ground truth spectra values for 3 different planets showcasing cases where the value is around the light curve minimum, above the minimum, and below the minimum.
</div>

## Solution

[kaggle solution writeup](https://www.kaggle.com/competitions/ariel-data-challenge-2025/writeups/33rd-place-solution) (including code)

**Model**

The overall model architecture is shown in <strong>Figure 8</strong>. The preprocessed data is normalized per wavelength, downsampleed, and passed through a Time-Reducing Residual Stack. We concatenate this with normalized information for the wavelength means, standard deviation, and transit, planet, and star features. This is included to provide additional transit information as well as data about each observation's placement in the population distribution of the dataset after our observations in <strong>Figure 7</strong>. The combined feature vector is passed through a series of fully connected layers with 3 output heads. We use the relative change between the first two heads as our final prediction, and we calculate the uncertainty values from the third head.

The Time-Reducing Residual Block (shown in <strong>Figure 3</strong>) reduces the time dimension with convolutional layers and maxpooling while enhancing wavelength cross features using circular padding and dilation in the wavelength dimension. N represents the block number from 1 to 6 in the stack where the dilation increases over time so all wavelengths have features that are convolved somewhere in the stack. The time dimension starts with a small field of view capturing local features that increases due to max pooling in subsequent blocks. The max pooling rate is selected to quickly compress the large time dimension in early blocks and ease off in later blocks to maintain the desired data size for a 6 block stack necessary for all wavelength cross convolutions.

We trained the model with a combined Mean Squared Error and Gaussian Log-likelihood loss function.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/arielmodel_lightdark.drawio.svg" title="Model Flowchart" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 8:</strong> Model flowchart. The input is the pre-processed data array x, and the outputs are the predictions for the requested wavelengths and the associated sigma values.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/TRRB.drawio.svg" title="Time Reducing Residual Block" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 9:</strong> Detailed view of the Time Reducing Residual Block N for N as 1 through 6.
</div>

**Augmentation**

To improve model generalization and robustness and decrease overfitting, we implemented several data augmentation techniques during training:

Time Flipping: Each light curve was flipped along the time axis to expose the model to both forward and reversed transit scenarios.

Variable Downsampling and Offsets: We used strides of 8, 9, or 10 and multiple random offsets, simulating the effect of time running at different speeds and producing light curves with varying sampling densities. This approach also increased the representation of incomplete transits, helping the model learn to handle edge cases and irregular data spans. Because the signals were median-filtered (kernel size 101), the incremental effect of offset variation is modest, but still introduces some diversity.

Additive Linear Trend: For each wavelength channel, we injected a random linear signal with a maximum slope set equal to the channel’s own range. The maximum was set per wavelength, but the randomization was done per planet observation.

Additive Sinusoidal Trend: For each wavelength channel we injected a random sinusoidal signal with low frequency.

Planet Parameter Noise: Small, zero-mean Gaussian noise (σ = 0.1) was added to each set of normalized planet parameters fed into the model. This reduces overfitting and allows the network to be more robust to small errors or uncertainty in planet/star parameters.

**Ensembling methods**

To aggregate the model predictions for each planet, we explored several ensembling approaches seen in our submission notebook. We found that the basic average provided the best results due to how we were predicting our values and sigmas. Each planet had predictions from (potentially) multiple observations, 5 different offsets of stride 10, and multiple model predictions. Methods we tried:

Basic Average: A simple average of all predictions for each wavelength channel for each planet, both for the value and the sigma.
Best Sigma Selection: Selecting only the single set of predictions (per planet) with the lowest mean predicted uncertainty across all wavelengths.
Best N Average: A simple average of the N rows of data per planet that had the lowest mean sigma values.
Weighted Averaging: Weighted each prediction by the inverse of its predicted uncertainty, computing weighted means and associated uncertainties for each wavelength.

## Citations

**[1]** V. Kudelya, "NeurIPS non-ML transit curve fitting," _Kaggle_, Available: [https://www.kaggle.com/competitions/ariel-data-challenge-2025/data](https://www.kaggle.com/code/vitalykudelya/neurips-non-ml-transit-curve-fitting)

**[2]** C. Truong, L. Oudre, N. Vayatis, "Selective review of offline change point detection methods," _Signal Processing_, vol. 167, p. 107299, 2020.

**[3]** B. Boudiba, "ruptures," _PyPI_, Available: [https://pypi.org/project/ruptures/](https://pypi.org/project/ruptures/).
