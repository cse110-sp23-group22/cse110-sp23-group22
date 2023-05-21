---
status: proposed
date: 2023-05-17
deciders: Chris Kim, Jessica He, Eric Chen
informed: Ryan Lee, Arjun Kumar
---
# Improving Code Quality with AI Tools

## Context and Problem Statement
Our team evaluated various code quality analysis tools to address the need for standardized code quality across our projects. We encountered challenges with Codacy due to pricing limitations, and Sealights' metrics were overwhelming for smaller projects. We needed to select a suitable tool that met our requirements.

## Decision Drivers 
* Means to Standardize Code Quality
* Scalability for Long Term
* Cost-effectiveness

## Considered Options
* Codacy
* Sealights
* Code Climate

## Decision Outcome
Chosen option: "Code Climate", because it meets the desire to standardize code quality and provides the best overall fit for our needs. It's a popular and widely used code quality analysis tool.

### Code Climate
* Good, because it provides extensive code quality analysis features and integrations with various version control systems and development platforms.
* Good, because it offers customizable rulesets and provides actionable recommendations for improving code quality.
* Neutral, because it may require additional configuration and setup to align with our specific coding standards.
* Bad, because it may involve a learning curve for team members who are unfamiliar with the tool.
​
### Codacy
* Good, because it integrates directly with GitHub, Bitbucket, and GitLab, which can help streamline your development workflow.
* Neutral, because its interpretation of certain code quality metrics may not align with every team's standards or conventions.
* Bad, because we need to pay and subsribe for using it

### Sealights
* Good, because it provides insights into the effectiveness of your testing process, which can help you improve over time.
* Neutral, because it focuses primarily on test coverage, which means it may not offer as comprehensive a suite of code quality metrics as some other tools.
* Bad, because it can be more complex and costly to set up compared to some alternatives.
​
## More Information
The decision to choose Code Climate is based on a thorough evaluation of available options and their alignment with our requirements. We have considered factors such as cost, scalability, and the ability to standardize code quality. Code Climate emerged as the most suitable choice, and we will proceed with integrating it into our development workflow.