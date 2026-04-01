---
layout: page
title: NeurIPS 2023 - Machine Unlearning
description: Selective Model Forgetting via Composite Loss
img:
importance: 5
category: competitions
---

**Overview**

This project participated in the [NeurIPS 2023 Machine Unlearning Challenge](https://www.kaggle.com/competitions/neurips-2023-machine-unlearning/overview) hosted by Google Research. The task required modifying a pre-trained age classification model to selectively "forget" a designated subset of training images while preserving performance on the remaining retain set, using strictly limited computational resources.

**Methods**

The approach employed a composite loss function combining retain set accuracy with a positive forget loss to induce randomized incorrect predictions on the target forget set. Several loss balancing configurations were tested, targeting convergence of the forget loss to validation loss levels while maintaining retain performance. Model ensembling averaged multiple unlearned models to reduce dependence on forget set samples and improve generalization.

**Results**

The highest-performing configuration used the composite loss L<sub>Total</sub> = L<sub>Retain</sub> + e<sup>-22</sup> L<sub>Forget</sub>. This achieved effective convergence of forget loss to validation loss levels while maintaining retain set performance within strict computational constraints.

**Key Challenge**

Evaluation metrics remained undisclosed during the competition, raising questions about whether scores measured true unlearning or primarily retain set matching against reference models. This project demonstrates practical implementation of emerging unlearning techniques applicable to production ML systems requiring selective data removal.
