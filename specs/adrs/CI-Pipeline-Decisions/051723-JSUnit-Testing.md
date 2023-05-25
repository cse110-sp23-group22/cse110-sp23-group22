---
parent: CI Pipeline Decisions
nav_order: 100
title: JS Unit Testing ADR
Status: accepted
date: 2023-5-17
Deciders: Jinshi He, Nikan Ostovan, Jennifer Tanurdjaja
---

## Context and Problem Statement
Which CI server to choose?
Which JS testing framework to use?
What to unit test?

## Considered Options

Which CI server to choose?
Jenkins
Travis CI
CircleCI
Bamboo
Github Action
Which JS testing framework to use?
Mocha
Jest
Jasmine
Cypress
Enzyme
What to unit test?
unit test weather the output of the horoscope matches the expected sign of the birthday
test that output exists for tarot card


## Decision Outcome
CI server: Github Action 
b/c it is built in to the github repo and is easy to configure and setup, and does not require learning new frameworks and tools to setup the CI/CD pipeline
JS testing framework: Jest
JEST requires less installation and configuration steps so could be easier to work with since the team is not familiar with more complex testing methods.
Unit test: (include all options we have come up with)
For horoscope, unit test weather the output of the horoscope matches the expected sign of the birthday
b/c the output of the horoscope is fully dependent on the input birthday
For tarot card, test that output exists
b/c the output is totally random and the existence is the only thing we can test with


### Consequences	
Hopefully simplify the design and testing process via the tools and methods we choose
