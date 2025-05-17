# User Agent Random Node User Guide

This document provides detailed instructions on how to use the User Agent Random node.

## Overview

The User Agent Random node generates random browser User-Agent strings for HTTP requests. This is particularly useful when performing web scraping or API requests, as it helps avoid being identified as an automated tool by target websites.

## Basic Configuration

After adding the User Agent Random node to an n8n workflow, you can configure the following options:

### 1. Mode

- **Random (Predefined Library)**: Randomly selects from a built-in User-Agent library that includes common desktop and mobile browsers.
- **Dynamic Generation**: Dynamically creates new User-Agent strings with randomized components.
- **Custom**: Allows you to provide your own list of User-Agent strings, from which the node will randomly select.

### 2. User-Agent Type (only applicable to "Random" mode)

- **Desktop Browser**: User-Agents for desktop browsers like Chrome, Firefox, Safari, Edge, etc.
- **Mobile Device Browser**: User-Agents for mobile browsers on iOS and Android devices.
- **All Types**: Includes all supported browser types.

### 3. Custom User-Agent List (only applicable to "Custom" mode)

In this text area, you can enter your own list of User-Agent strings, one per line. For example:

```
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36
```

### 4. Randomization Frequency

- **Each Request**: Uses a new random User-Agent each time the node executes.
- **Each Batch**: Uses the same User-Agent for all items processed in the same batch.
- **Each Workflow Execution**: Uses the same User-Agent throughout the entire workflow execution.

### 5. Output Method

- **User-Agent Only**: Returns only the generated User-Agent string, replacing the original input.
- **Add as Item Property**: Adds the User-Agent as a property to the input item, preserving the original data.
- **Create Full HTTP Headers**: Creates a complete HTTP header object that includes the User-Agent.

## Use Cases

### 1. Using with HTTP Request Node

1. Add the User Agent Random node
2. Set the output method to "Create Full HTTP Headers"
3. Connect the output to an HTTP Request node
4. The HTTP Request node will automatically use the generated random User-Agent

### 2. Batch Scraping Requests

1. Set the randomization frequency to "Each Batch"
2. Use the Split In Batches node to process requests in batches
3. Each batch will use a unique User-Agent, while requests within the same batch use the same User-Agent

### 3. Long-Running Polling Workflows

1. Set the randomization frequency to "Each Workflow Execution"
2. Each workflow execution will use a new random User-Agent

## Advanced Techniques

### Combining with Proxy Servers

To minimize the risk of being detected or blocked, you can combine the following methods:

1. Use the User Agent Random node to generate random User-Agents
2. Use an HTTP Proxy node or similar functionality to set up a proxy server
3. Add random delays between important requests

### Custom User-Agent Best Practices

When creating a custom User-Agent list, consider these recommendations:

1. Include recent versions of mainstream browsers
2. Optimize User-Agents for your target website (some sites may provide better experiences for specific browsers)
3. Avoid using too many different types of User-Agents, as this might appear unnatural

## Frequently Asked Questions

### Q: What happens if the custom User-Agent list is empty?

A: If you select custom mode but don't provide any User-Agents, the node will automatically use desktop browser User-Agents from the predefined library and log a warning.

### Q: How can I know which User-Agent is currently being used?

A: You can add a Debug node to see the generated User-Agent data.

### Q: Can I use different random User-Agents in different parts of my workflow?

A: Yes, you can add multiple User Agent Random nodes at different locations in your workflow, each with different configurations.

## Example

Here is a simple example workflow:

1. Cron node (triggers hourly)
2. User Agent Random node (set to random desktop browser, each workflow execution)
3. HTTP Request node (accesses target website)
4. Process response data...

The above configuration will make the workflow run once per hour, accessing the target website with a different desktop browser User-Agent each time. 