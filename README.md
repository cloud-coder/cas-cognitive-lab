# CASCON Cognitive Lab

## Table of Contents

* [Overview](#overview)
* [Setup](#setup)
* [Text to Speech](#text-to-speech)
* [Personality Insights](#personality-insights)
* [Web Application Client](#web-application-client)
* [Training IBM Watson Services](#training-ibm-watson-services)

## Overview

This tutorial focuses on building a simple Node Express application that
interfaces with IBM Watson cognitive services on Bluemix using [Watson Cloud SDK][cloudsdk].
The application exposes two APIs, [Text to Speech](#text-to-speech) and
[Personality Insights](#personality-insights), that an end-user or client can consume.  

## Setup

Follow instructions in [setup section](01-setup/setup.md) to create a cloud foundary application
using Node JS runtime in Bluemix.  This application is modified in later parts of
this tutorial.

## Text to Speech

[This section](02-text-to-speech/text-to-speech.md) will outline steps to necessary to augment
the Node application with
[Watson Cloud SDK][cloudsdk] Text to Speech service.  The application will expose
a REST API, `/api/t2s`, that will accept a text message and voice type for Waton
Text to Speech service.  API will return Base64 encoded audio data. 

## Personality Insights

[Next](03-personality-insights/personality-insights.md), the Node application will expose another
REST API, `/api/pi`, that will
interface with [Watson Cloud SDK][cloudsdk] Personality Insights service.  This
API will accept free form text and return the Big5 personality indicators.

## Web Application Client

This is the optional part of the tutorial.  A [web application](04-web-app/web-app.md) has been
created that interfaces with the Node application.  This section will outline steps necessary
to invoke REST APIs created above from AngularJS application.

## Training IBM Watson Services

A [video demo](https://www.youtube.com/watch?v=U-yJYHks1_s) of how to train IBM Watson Visual Recognition Service to detect
Visual patterns.

[comment]: # "------------------------------------------------------------------------------"
[comment]: # "                              Links / Reference                               "
[comment]: # "------------------------------------------------------------------------------"

[cloudsdk]: https://github.com/watson-developer-cloud/node-sdk "Watson Cloud SDK"
