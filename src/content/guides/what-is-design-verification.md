---
title: "What is design verification, and why do it before you cut a tool?"
description: "What design verification means in hardware, the analysis, simulation and testing it involves, and why proving a design before tooling is the cheapest insurance you can buy."
date: 2026-09-18
kind: "cluster"
pillar: "de-risking-product-development"
order: 1
category: "Guide"
tags: ["Verification", "De-risking", "Testing"]
readingTime: "8 min read"
draft: false
cta:
  label: "Verify your design before tooling"
  href: "/services/design-verification"
---

Design verification is the work of proving that a design does what it is supposed to do, before you commit real money to making it. It answers a blunt question: will this actually perform, survive and comply, or do we just hope it will? In hardware, the moment you cut a tool or place a production order, the cost of being wrong jumps by an order of magnitude. Verification is how you buy down that risk while it is still cheap to fix.

It is worth being precise about the word, because verification and validation get muddled. Verification asks "did we build the thing right", against the requirements and the physics. Validation asks "did we build the right thing", against what customers actually need. This guide is about verification, the engineering proof that a design will hold up, which is the piece founders most often skip and most often regret skipping.

## Why the timing matters so much

Every product has a point of no cheap return. For most physical products it is tooling: once a mould or a die is cut, changing the part means changing the tool, and that is slow and expensive. Before that point, a change is a few hours in CAD. After it, the same change can cost thousands and weeks.

Design verification lives deliberately just before that line. The whole idea is to find the problems, the part that fails under load, the electronics that overheat, the mechanism that jams, the product that will not pass its compliance testing, while they are still edits on a screen. A problem caught in verification is a design tweak. The same problem caught after tooling is a crisis, and the same problem caught by a customer is a recall or a reputation. The earlier you find it, the cheaper it is, every time.

## What verification actually involves

Verification is a mix of desk work, simulation and physical testing, matched to the risks in your particular product. In practice it draws on some combination of the following.

**Engineering analysis and calculation.** Working through the physics on paper and in spreadsheets: loads, stresses, thermal behaviour, power, tolerances stacking up across parts. A surprising amount of risk can be retired this way before anything is simulated or built, simply by checking that the numbers make sense.

**Simulation.** Using tools such as finite element analysis for structural and thermal behaviour, or fluid simulation where flow matters, to see how the design behaves under conditions that would be slow, expensive or dangerous to test physically. Simulation is powerful and also easy to misuse, since a model that has been set up carelessly gives confident answers that are wrong. Its value comes from being built and interpreted by someone who knows where it can mislead.

**Structured physical testing.** Building representative samples and testing them deliberately against the requirements: load and durability, drop and abuse, temperature, life cycling, whatever the product must withstand. The word that matters here is structured. A useful test has a clear question, a defined method and a pass criterion decided in advance, so the result means something.

**Compliance and standards checking.** Confirming the design can meet the safety, electrical, electromagnetic or other standards it will be held to in its market. Discovering a compliance problem after tooling is one of the more painful ways to lose time and money, because it can force a redesign of something you thought was finished.

## What you get out of it

Done well, verification produces hard evidence rather than reassurance. You come away knowing which parts of the design are proven and which still carry risk, with the failures found on your terms rather than the customer's. You get the confidence to commit to tooling knowing the fundamentals hold, and you get a documented basis for the decision, which matters if you are answering to investors, partners or a board.

Sometimes verification tells you something you did not want to hear, that a part will not survive, or a target cannot be met as designed. That is the system working. Finding out now, when the fix is a redesign rather than a recall, is the entire point of doing it.

## Where verification fits in de-risking a product

Verification is one of the main tools for [de-risking product development](/guides/de-risking-product-development), and it sits at a specific point in the journey: after a concept has been proven to work, and before it goes into [manufacturing preparation](/services/manufacturing-preparation) and tooling. A [feasibility study](/services/feasibility-study) asks whether an idea can work at all; verification asks whether this particular design actually does, to the standard it needs. The two bookend the risky middle of development.

It also pairs closely with design for manufacture. There is little sense in proving a design that cannot be made economically, and little sense in tooling a design that has not been proven, so verification and [DFM](/guides/what-is-dfm-design-for-manufacture) usually run near each other as the last checks before commitment.

This is exactly the work my [design verification](/services/design-verification) service does: independent engineering analysis, simulation and structured testing to prove a design performs, is safe and is compliant before you commit to tooling, or to answer a specific engineering question you need a confident answer to. I have led performance and firmware development on products that shipped at volume and had to survive real use, so the verification is done by someone who has seen how designs fail in the field. If you are approaching a tooling decision and want to be sure before you sign it off, that is the point to bring me in.
