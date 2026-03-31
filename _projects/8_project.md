---
layout: page
title: First Move First Tree Traversal
description: A deterministic game tree search algorithm that prioritizes early decisions without heuristics
img: assets/img/First Move First Tree Traversal.png
importance: 3
category: research
---

**Overview**

We introduce 'first move first' (FMF), a deterministic search strategy for high-branching-factor game trees where initial decisions dominate path quality. Unlike standard depth-first search (DFS), which backtracks incrementally from leaf nodes to explore sibling branches, FMF systematically prioritizes the first unexplored successor at each node before backtracking to the earliest incompletely explored ancestor, requiring no heuristics or auxiliary data structures.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid 
           loading="eager" 
           path="assets/img/First Move First Tree Traversal.png" 
           title="**Figure 1:** FMF vs DFS/BFS traversal order. <em>Left:</em> DFS visits ABD→ABE. <em>Middle:</em> BFS explores layer-by-layer. <em>Right:</em> FMF visits ABD→ACF, prioritizing root alternatives." 
           class="img-fluid rounded z-depth-0" 
        %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/First Move First Tree Traversal.png" title="FGS1 data" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 1:</strong> Tree traversal example comparison.
  <br>
  <em>Left:</em> Depth first search - the travesal first sees ABD, then E the second path off of B so the first two leaf nodes we see are in paths ABD and ABE
  <br>
  <em>Middle:</em> Breadth first search - the traversal starts at the root A, then the next layer B and C and so on - we don't see any leaf nodes until each layer has been explored in full
  <br>
  <em>Right:</em> First-move first - similar to DFS we start by seeing ABD but then instead of seeing E next we see the second path from A which is C then F so the first two leaf nodes we see are in the paths ABD and ACF
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/First Move First Tree Traversal.png" class="img-fluid rounded z-depth-0" alt="Tree traversal" %}
        <figcaption class="mt-2 small">
            <strong>Figure 1:</strong> FMF prioritizes root alternatives (ABD→ACF) unlike DFS (ABD→ABE) and BFS (layer-wise).
        </figcaption>
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/First Move First Tree Traversal.png" class="img-fluid rounded z-depth-0" alt="Tree traversal" %}
        <figcaption class="mt-2 small">
            <strong>Figure 1:</strong> <em>L:</em> DFS (ABD→ABE), <em>M:</em> BFS (layer-wise), <em>R:</em> FMF (ABD→ACF).
        </figcaption>
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/First Move First Tree Traversal.png" class="img-fluid rounded z-depth-0" alt="Tree traversal" %}
        <figcaption class="mt-2 small">
            <strong>Figure 1:</strong> FMF cycles root successors before sibling branches.
        </figcaption>
    </div>
</div>

<div class="row">
    <div class="col-sm">
        {% include figure.liquid loading="eager" path="assets/img/First Move First Tree Traversal.png" class="img-fluid rounded z-depth-0" alt="Tree traversal" %}
        <figcaption class="mt-1 small text-muted">
            <strong>Figure 1:</strong> FMF prioritizes root alternatives (ABD→ACF) unlike DFS (ABD→ABE) and BFS (layer-wise).
        </figcaption>
    </div>
</div>

<div class="row">
    <div class="col-sm">
        {% include figure.liquid loading="eager" path="assets/img/First Move First Tree Traversal.png" title="FGS1 data" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 1:</strong> Tree traversal example comparison.
  <br>
  <em>Left:</em> Depth first search - the travesal first sees ABD, then E the second path off of B so the first two leaf nodes we see are in paths ABD and ABE
  <br>
  <em>Middle:</em> Breadth first search - the traversal starts at the root A, then the next layer B and C and so on - we don't see any leaf nodes until each layer has been explored in full
  <br>
  <em>Right:</em> First-move first - similar to DFS we start by seeing ABD but then instead of seeing E next we see the second path from A which is C then F so the first two leaf nodes we see are in the paths ABD and ACF
</div>


**Motivation**

The algorithm was developed for Beleaguered Castle, a solitaire game where early moves critically shape the game state, while late-game foundation-building moves exert minimal influence on winning paths. For difficult deals, solvability is typically resolved early, motivating efficient path discovery over optimality.

First-move-first traversal systematically explores these critical early decisions, avoiding the inefficiencies of depth-first search (DFS) and breadth-first search (BFS), which become trapped in suboptimal branches when seeking any viable winning path among potentially long solution trajectories.


