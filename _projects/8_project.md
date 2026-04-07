---
layout: page
title: First Move First Tree Traversal
description: A deterministic game tree search algorithm that prioritizes early decisions without heuristics
img: assets/img/First Move First Tree Traversal.svg
importance: 3
category: research
---

**Overview**

We introduce 'first move first' (FMF), a deterministic search strategy for high-branching-factor game trees where initial decisions dominate path quality. Unlike standard depth-first search (DFS), which backtracks incrementally from leaf nodes to explore sibling branches, FMF systematically prioritizes the first unexplored successor at each node before backtracking to the earliest incompletely explored ancestor, requiring no heuristics or auxiliary data structures.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/First Move First Tree Traversal.svg" title="Tree traversal comparison" class="img-fluid rounded z-depth-0" %}
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

**Motivation**

The algorithm was developed for Beleaguered Castle, a solitaire game where early moves critically shape the game state and late-game foundation-building moves have nominal influence on finding a winning path. Deals often have only one or few winning early move sequences but many possible late-game paths, mostly building up suit-specific foundations starting from the aces. DFS can get trapped exhaustively exploring non-winning branches from poor early moves. BFS explores every node for the optimal path, which is unfeasible for Beleaguered Castle's large game trees. We focus on finding the first viable winning path rather than the optimal one. FMF avoids both problems by changing the early moves first in its search and exploring later branches only if needed. Without relying on customized heuristics, we evaluate FMF's performance against baseline DFS for discovering winning paths in this domain.

**Results**

We evaluated both algorithms on 10,000 randomly generated game deals, applying identical time limits of 1000 seconds. Overall, DFS slightly outperformed FMF by 55,905 unique states searched across 6,168 paired solvable deals. <b>Table 1</b> summarizes solve performance, showing comparable solve rates (63.5% DFS, 63.2% FMF) with 179 exclusive DFS solves and 148 exclusive FMF solves. Notably the unsolveable games include both searches that timed out as well as searches that were verifiably unwinnable.

<div style="display: flex; justify-content: center; margin: 0 auto;">
<table class="results-table">
  <thead>
    <tr>
      <th> </th>
      <th>DFS</th>
      <th>FMF</th>
      <th>Overlap</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Solveable Deals</td>
      <td>63.5% (6,347)</td>
      <td>63.2% (6,316)</td>
      <td>61.7% (6,168)</td>
    </tr>
    <tr>
      <td>Exclusive Solves</td>
      <td>1.8% (179)</td>
      <td>1.5% (148)</td>
      <td>-</td>
    </tr>
  </tbody>
</table>
</div>
<div class="caption">
  <strong>Table 1:</strong> Solve performance comparison
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dfsfmf.png" title="Comparison of unique states searched in DFS versus FMF" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 2:</strong> Comparison of unique states searched in DFS versus FMF
</div>

<b>Figure 3</b> shows the complementarity in hardest cases. FMF solved DFS's 10% most challenging deals (upper decile by unique states searched) on average with 11.09M fewer unique states (28.0M vs 17.0M, p<0.001), while DFS solved FMF's 10% hardest deals with 9.40M fewer unique states (27.9M vs 18.5M, p<0.001).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dfsfmf (2).png" title="Difference in unique states over population decile binning of DFS and FMF" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 3:</strong> Difference in unique states over population decile binning of DFS and FMF. 
  <br>
  <em>Left:</em> Difference in unique states searched versus population deciles of DFS unique states searched.
  <br>
  <em>Right:</em> Difference in unique states searched versus population deciles of FMF unique states searched.
</div>

<b>Figure 4</b> shows FMF's advantage growing with difficulty binned by mean unique states searched ((DFS+FMF)/2) across equally-spaced bins. These findings should be interpreted cautiously due to timeout-excluded high-difficulty deals and the limitations of mean unique states searched as a measure of true deal difficulty. A more objective metric, such as shortest optimal path length or win probability, would require infeasible exhaustive search of all game trees or additional derivation and testing.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dfsfmf (4).png" title="Difference in unique states versus mean number of unique states" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
  <strong>Figure 4:</strong> Difference in unique states versus mean number of unique states with equally-spaced binning
</div>

**Conclusions**

FMF and DFS demonstrate complementary strengths that suggest hybrid strategies will outperform either method alone. Parallel execution terminating when the first algorithm solves would leverage their distinct failure modes to maximize solve rate and minimize states searched. Future work could derive heuristic-free hybrid methods combining early-move prioritization with depth-first exploration.

More robust evaluation is needed to distinguish computationally difficult solvable deals from unwinnable positions. Incorporating deal difficulty metrics independent of search performance such as structural solvability tests or lightweight win-probability estimators would enable more precise difficulty measurement and stronger algorithm comparisons.
