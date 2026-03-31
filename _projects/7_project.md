---
layout: page
title: Identity Detection from Facial Movement Vectors
description: with background image
img: assets/img/idd.png
importance: 2
category: research
---

**Overview**

We introduce 'first move first' (FMF), a deterministic search strategy for high-branching-factor game trees where initial decisions dominate path quality. Unlike standard depth-first search (DFS), which backtracks incrementally from leaf nodes to explore sibling branches, FMF systematically prioritizes the first unexplored successor at each node before backtracking to the earliest incompletely explored ancestor, requiring no heuristics or auxiliary data structures.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/idd.png" title="Tree traversal comparison" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 1:</strong> Tree traversal order comparison across three algorithms. 
  <br>
  <em>Left:</em> Depth-first search visits leaf nodes ABD→ABE (B's siblings sequentially).
  <br>
  <em>Middle:</em> Breadth-first search explores layer-by-layer.
  <br>
  <em>Right:</em> First-move first prioritizes first-level siblings (ABD→ACF).
</div>
