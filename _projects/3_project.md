---
layout: page
title: Detect AI vs. Human-Generated Images
description: Multi-Feature Ensemble Classifier
img: assets/img/1.jpg
importance: 2
category: competitions
---

**Competition Overview**

[Detect AI vs. Human-Generated Images 2025 Women in AI (WAI) Kaggle Challenge](https://www.kaggle.com/competitions/detect-ai-vs-human-generated-images/overview)

The goal of this project is to classify authentic images versus AI-generated images. The dataset consists of 79,950 total training images consisting of authentic images sourced from Shuttershock paired with equivalent images produced by generative models and a test set of 19.986 images. See the [Kaggle competition page](https://www.kaggle.com/competitions/detect-ai-vs-human-generated-images/overview) for dataset access and more details.


**Overview**

This project develops an ensemble classifier for distinguishing generated from authentic images amid domain shift challenges. Separate models leverage raw pixel patches, noise patterns (median-filter extracted), and Fourier transform magnitude/phase (6 channels) to capture complementary image statistics, with final predictions aggregated for robustness.

**Feature Engineering**

Raw image features train a CNN directly on patches to capture spatial and color patterns. Noise features isolate patch-wise residuals via median filtering as sole model input. Fourier features use magnitude and phase spectra from patch FFTs as 6-channel inputs. Exploratory features (HSV, hue, color channels, rotations, perspective warps) were tested but excluded due to lack of performance gains. Individual models, optimized per feature type, proved resilient to domain shifts when ensembled.
