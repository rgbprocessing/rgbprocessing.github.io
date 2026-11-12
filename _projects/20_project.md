---
layout: page
title: Chinese-English Subtitle Agent
description: LangGraph agent for reconciling OCR and ASR transcripts
img: assets/img/subtitle_agent.png
importance: 3
category: research
---

**Overview**

This project builds an agent that produces Chinese and English subtitles for Chinese television by reconciling multiple imperfect machine transcripts. Subtitle OCR, full-frame OCR, and two speech recognition models ([FunASR](https://github.com/modelscope/FunASR), [Whisper](https://github.com/openai/whisper)) are run over each episode. No single source is reliable on its own.

**Approach**

Source outputs are aligned by timestamp, and lines where the sources agree are accepted without an LLM. Disputed lines are passed to a [LangGraph](https://www.langchain.com/langgraph) agent that uses tools (glossary lookup, neighbouring context, source comparison) to decide the correct text. Translator and reviewer agents then produce English subtitles with translator's notes. The agent reasons over precomputed model outputs rather than running the models itself, so the LLM is used only where judgment is needed.

**Evaluation**

Chinese output is scored by character error rate against hand-corrected transcripts, and English output by chrF against reference translations. Single- and multi-agent architectures are compared on quality and cost.

**Preliminary Results**

<div style="display: flex; justify-content: center; margin: 0 auto;">
<table style="text-align: center;">
  <thead>
    <tr>
      <th>Source</th>
      <th>Chinese CER</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Whisper</td><td>0.500</td></tr>
    <tr><td>Subtitle OCR</td><td>0.200</td></tr>
    <tr><td>FunASR</td><td>0.175</td></tr>
    <tr><td><strong>Agent</strong></td><td><strong>0.050</strong></td></tr>
  </tbody>
</table>
</div>
<div class="caption">
  <strong>Table 1:</strong> Character error rate on a five-line test sample (lower is better)
</div>

On a five-line sample, the agent corrected an OCR misreading outvoted by both ASR models and removed a hallucinated ASR line. Its only remaining difference from the reference was a filler sound that the reference omitted. An early run failed on unparseable model output, which was resolved by switching to schema-constrained structured output. Single- and multi-agent modes performed identically (chrF 68.0), with the multi-agent mode using one additional LLM call. The sample is too small to distinguish the architectures.

**Future Work**

**TODO:** evaluate on a full-length episode. Further work includes porting the OCR/ASR extraction pipeline into the repository, and testing robustness to prompt injection through on-screen text.

[Code on GitHub](https://github.com/rgbprocessing/zh-en-subtitle-agent)
