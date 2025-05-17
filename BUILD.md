# Build Guide

This document provides instructions on how to build, test, and publish this node package.

## Development Environment Setup

1. Clone the repository:
```bash
git clone https://github.com/FunTW/n8n-nodes-user-agent-random.git
cd n8n-nodes-user-agent-random
```

2. Install dependencies:
```bash
npm install
```

3. Build for development:
```bash
npm run dev
```

## Building

To build for production:

```bash
npm run build
```

This will generate the `dist` directory with compiled JavaScript files.

## Code Formatting

Format code:

```bash
npm run format
```

## Check Code Issues

Run linting checks:

```bash
npm run lint
```

Fix linting issues that can be automatically fixed:

```bash
npm run lintfix
```

## Publishing

Prepare for publishing a version:

```bash
npm run prepublishOnly
```

## Local Testing

To test this node package in a local n8n environment:

1. In this project directory, run:
```bash
npm link
```

2. In your n8n installation directory, run:
```bash
npm link n8n-nodes-user-agent-random
```

3. Start n8n:
```bash
n8n start
```

## Directory Structure

- `/nodes` - Contains all node code
  - `/UserAgentRandom` - User Agent Random node
    - `/services` - Service layer code
    - `/api` - API handling code
    - `/images` - Node icons

## Declarative Node Architecture

This node package uses n8n's declarative node style, which has the following characteristics:

- Nodes use the execute method to process data
- Webhook methods are used to handle webhook calls
- Cleaner, more understandable code structure
- Better performance and maintainability 