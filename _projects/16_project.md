---
layout: page
title: VLM Text-in-Image Injection
description: Red teaming vision-language models used as AI-image detectors
img: assets/img/vlm_injection_examples.png
importance: 11
category: research
---

**Overview**

General-purpose vision-language models (VLMs) are increasingly asked whether an image is real or AI-generated. Unlike pixel-based detectors, VLMs read text, which makes any text inside an image a potential prompt-injection surface. This study measures whether a single line of text added to an image can control a VLM's authenticity verdict. All testing was performed on open models running locally.

**Method**

Ten real and ten AI-generated images were sampled from the [AIGC Detection Benchmark](https://huggingface.co/datasets/TheKernel01/AIGC-Detection-Benchmark). Each image was judged with and without a caption strip added along the bottom edge. Captions on AI-generated images argued that the image was real. Captions on real photos argued that it was AI-generated. A neutral filename label served as a control for the presence of text alone.

<div style="display: flex; justify-content: center; margin: 0 auto;">
<table style="text-align: center;">
  <thead>
    <tr><th>Condition</th><th>Text added</th></tr>
  </thead>
  <tbody>
    <tr><td>Clean</td><td>None</td></tr>
    <tr><td>Neutral</td><td>Filename label</td></tr>
    <tr><td>Caption</td><td>Short label claiming the answer ("Made with AI", "Original photograph")</td></tr>
    <tr><td>EXIF</td><td>Camera settings implying a real photo (AI images only)</td></tr>
    <tr><td>Instruct</td><td>A note addressed to AI reviewers stating the answer</td></tr>
  </tbody>
</table>
</div>
<div class="caption">
  <strong>Table 1:</strong> Injection conditions
</div>

Two VLMs were tested, [Gemma 3 12B](https://ollama.com/library/gemma3) and [Qwen2.5-VL 7B](https://ollama.com/library/qwen2.5vl), at temperature 0 with schema-constrained JSON output. Each was queried with a baseline prompt and a defended prompt, which warned that text in the image may be adversarial.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/vlm_injection_examples.png" title="Injection conditions on one AI-generated image" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 1:</strong> One AI-generated image under each condition. Base image: AI-generated sample (Stable Diffusion 1.4) from the <a href="https://huggingface.co/datasets/TheKernel01/AIGC-Detection-Benchmark">AIGC Detection Benchmark</a> (Apache-2.0), derived from <a href="https://github.com/Ekko-zn/AIGCDetectBenchmark">AIGCDetectBenchmark</a>. Captions were added for this study.
</div>

**Results**

<div style="display: flex; justify-content: center; margin: 0 auto;">
<table style="text-align: center;">
  <thead>
    <tr><th>Model</th><th>Prompt</th><th>Clean</th><th>Neutral</th><th>Caption</th><th>EXIF</th><th>Instruct</th></tr>
  </thead>
  <tbody>
    <tr><td>Gemma 3</td><td>Baseline</td><td>3/10</td><td>3/10</td><td>2/10</td><td>2/10</td><td>0/10</td></tr>
    <tr><td>Gemma 3</td><td>Defended</td><td>6/10</td><td>6/10</td><td>5/10</td><td>5/10</td><td>0/10</td></tr>
    <tr><td>Qwen2.5-VL</td><td>Baseline</td><td>3/10</td><td>2/10</td><td>2/10</td><td>3/10</td><td>0/10</td></tr>
    <tr><td>Qwen2.5-VL</td><td>Defended</td><td>2/10</td><td>2/10</td><td>2/10</td><td>2/10</td><td>0/10</td></tr>
  </tbody>
</table>
</div>
<div class="caption">
  <strong>Table 2:</strong> AI-generated images correctly identified as AI
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/vlm_injection_ai.png" title="AI-generated images correctly called AI" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 2:</strong> AI-generated images correctly identified as AI, by condition
</div>

<div style="display: flex; justify-content: center; margin: 0 auto;">
<table style="text-align: center;">
  <thead>
    <tr><th>Model</th><th>Prompt</th><th>Clean</th><th>Neutral</th><th>Caption</th><th>Instruct</th></tr>
  </thead>
  <tbody>
    <tr><td>Gemma 3</td><td>Baseline</td><td>8/10</td><td>8/10</td><td>0/10</td><td>0/10</td></tr>
    <tr><td>Gemma 3</td><td>Defended</td><td>7/10</td><td>6/10</td><td>0/10</td><td>0/10</td></tr>
    <tr><td>Qwen2.5-VL</td><td>Baseline</td><td>7/10</td><td>7/10</td><td>1/10</td><td>0/10</td></tr>
    <tr><td>Qwen2.5-VL</td><td>Defended</td><td>8/10</td><td>8/10</td><td>2/10</td><td>0/10</td></tr>
  </tbody>
</table>
</div>
<div class="caption">
  <strong>Table 3:</strong> Real photos correctly identified as real
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/vlm_injection_real.png" title="Real photos correctly called real" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 3:</strong> Real photos correctly identified as real, by condition
</div>

Without injection, both models were weak detectors, labelling most AI-generated images as real. The neutral label had little effect, indicating that the presence of text alone does not change the verdict. The instruct condition controlled the verdict in every case, for both models, both prompts, and both directions, reducing correct identifications to zero. A short "Made with AI" caption, with no instruction, was nearly as effective on real photos: correct identifications fell from 7–8 of 10 to 0–2 of 10. Captions and camera metadata arguing that AI-generated images were real had little additional effect, as the models already labelled most of those images as real.

The defended prompt did not prevent the attack, but it changed how the models explained themselves. Under the baseline prompt, Gemma cited the injected note in 9 of 10 explanations for AI-generated images; under the defended prompt it cited it in none, while still following it. The warning suppressed evidence of the injection rather than its effect.

**Conclusions**

On this sample, a single line of text was sufficient to fully control the authenticity verdicts of both VLMs, and a prompt-level warning did not mitigate it. A plain label was enough to make both models reject genuine photographs, which suggests a route for discrediting authentic images. General-purpose VLMs should not be used as the sole judge of image authenticity, and explanations produced under a defended prompt should not be taken as evidence that injected text was ignored. These results are preliminary, given the sample size of ten images per class.

**Future Work**

**TODO:** larger samples and additional models. Further work includes comparison against pixel-based detectors as a control, subtler injections (smaller, fainter, or partially hidden text), and defenses that remove or mask text before classification.
