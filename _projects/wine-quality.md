---
layout: page
title: Wine Quality Prediction
description: RSTUDIO
img: assets/img/wineproject.jpg
importance: 6
category: fun
---

Developed a CART-based classification model to predict wine quality using 12 key physicochemical features, such as acidity, sugar levels, pH, and alcohol content. The model leverages a tree-based structure to split the data into decision rules, making it easy to interpret how different feature thresholds influence the predicted quality categories.

Model performance was evaluated using a confusion matrix, which provided a detailed view of how well the model classified each quality class. The model achieved an overall accuracy of 55.07%, indicating moderate predictive capability. However, a closer examination of the confusion matrix revealed imbalances in class predictions, with certain quality levels being misclassified more frequently than others.

These results highlight areas for improvement, particularly in increasing sensitivity (recall) for underrepresented classes and improving precision to reduce false positives. Potential enhancements include feature engineering, hyperparameter tuning (e.g., tree depth, splitting criteria), handling class imbalance, and exploring ensemble methods to improve overall model robustness and predictive performance.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    <iframe src="{{ '/assets/pdf/wine_quality.pdf' | relative_url }}" 
            width="100%" 
            height="600px" 
            style="border: none;">
    </iframe>
  </div>
</div>
