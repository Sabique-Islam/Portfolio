---
title: "Activity Recommender CLI"
description: "C-based CLI tool that suggests group activities using 300D GloVe embeddings and cosine similarity. Features NLP pipeline and a minimal Next.js frontend wired to a C REST API via microhttpd and cJSON."
link: "https://github.com/Sabique-Islam/Activity-Recommender-CLI"
tags: ["C", "GloVe", "NLP", "Cosine Similarity", "microhttpd", "Next.js"]
imageSrc: "/projects/arc.svg"
imageAlt: "ARC Preview"
---

# Activity Recommender CLI (ARC)

A sophisticated C-based command-line tool that leverages natural language processing to recommend group activities based on user preferences and contextual information.

---

## Overview

The Activity Recommender CLI (ARC) demonstrates the power of combining low-level systems programming with advanced NLP techniques. Built entirely in C, this tool processes natural language input and provides intelligent activity recommendations using 300-dimensional GloVe word embeddings and cosine similarity algorithms.

---

## Core Features

### Natural Language Processing
- **300D GloVe Embeddings**: Utilizes pre-trained Global Vectors for Word Representation
- **Cosine Similarity**: Implements efficient similarity calculations for semantic matching
- **Text Preprocessing**: Comprehensive tokenization and normalization pipeline
- **Semantic Understanding**: Captures contextual meaning beyond keyword matching

### CLI Interface
- **Interactive Prompts**: User-friendly command-line interface
- **Flexible Input**: Accepts various input formats and natural language queries
- **Detailed Output**: Provides ranked recommendations with confidence scores
- **Configuration Options**: Customizable parameters for different use cases

### Web Integration
- **REST API**: C-based HTTP server using microhttpd
- **JSON Processing**: Native JSON handling with cJSON library
- **Next.js Frontend**: Modern web interface for broader accessibility
- **Cross-Platform**: Works seamlessly across different operating systems

---

## Activity Database

The system maintains a comprehensive database of activities categorized by:

### Categories
- **Outdoor Activities**: Hiking, camping, sports, picnics
- **Indoor Activities**: Board games, cooking, movie nights, crafts
- **Social Events**: Parties, gatherings, networking events
- **Educational**: Workshops, classes, seminars, book clubs
- **Entertainment**: Concerts, theaters, museums, festivals

---

## Technology Stack

### Core System
- **C**: Primary programming language
- **GloVe**: 300-dimensional word embeddings
- **microhttpd**: Lightweight HTTP server library
- **cJSON**: JSON parsing and generation
- **pthreads**: Multi-threading support

### Web Frontend
- **Next.js**: React framework for the web interface
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript development

### Build Tools
- **CMake**: Cross-platform build system
- **GCC/Clang**: C compiler toolchain
- **Make**: Build automation

---