---
layout: page
title: Sentiment Analysis and Pattern Recognition in Wellbeing
description: RSTUDIO
img: assets/img/wellbeingproject.png
importance: 5
category: fun
---

Designed and implemented a sentiment analysis and clustering framework to analyse personal journal entries, with the goal of uncovering deeper emotional patterns and themes influencing overall well-being. By leveraging historical journal data, the model not only captures sentiment at an individual entry level but also tracks temporal emotional trends, enabling the prediction of mood patterns, identification of recurring emotional triggers, and generation of personalised well-being recommendations.

Applied K-means clustering to segment entries into three distinct sentiment groups: Slightly Positive, predominantly associated with family-related reflections and mild positive emotions; Negative, largely driven by work-related stress, pressure, and fatigue; and Very Positive, characterised by strong expressions of joy, family connection, and leisure activities. This segmentation provided a structured understanding of how different life domains contribute to emotional states.

To further enrich the analysis, the Apriori algorithm was used to identify frequent itemsets and association rules within each sentiment cluster. This allowed for the discovery of co-occurring words and themes, offering deeper insight into underlying emotional triggers and behavioural patterns. Together, these techniques provide a comprehensive, data-driven approach to understanding emotional dynamics and supporting more informed, personalised well-being strategies.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    <iframe src="{{ '/assets/pdf/personaljournies.pdf' | relative_url }}" 
            width="100%" 
            height="600px" 
            style="border: none;">
    </iframe>
  </div>
</div>
