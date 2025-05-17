# n8n User Agent Random Node

This community node package provides random User-Agent functionality for n8n, helping you simulate various browsers and devices when making web requests. This version has removed webhook functionality.

[n8n](https://n8n.io/) is a free and open-source workflow automation tool.

## Features

- Support for randomly selecting from predefined User-Agent library
- Choose between desktop browser or mobile device browser User-Agents
- Dynamic generation of User-Agents with random components
- Support for custom User-Agent lists
- Seamless integration with HTTP Request nodes
- Uses n8n's latest declarative style node architecture

## Installation

### Community Nodes Installation (Recommended)

For most users, installing using n8n's community nodes feature is the simplest method:

1. Open your n8n instance
2. Click on Settings button in the top right
3. Select "Community Nodes"
4. Search for "n8n-nodes-user-agent-random"
5. Click Install

### Install from Source

Alternatively, you can install directly from source:

```bash
# Install n8n globally (if not already installed)
npm install n8n -g

# Install this node package
npm install n8n-nodes-user-agent-random -g

# Start n8n
n8n start
```

## Usage

After installation, you can use the "User Agent Random" node in n8n's workflow editor.

### Basic Configuration

1. Add the "User Agent Random" node to your workflow
2. Configure the following options:
   - **Mode**: Choose "Random", "Dynamic Generation", or "Custom"
   - **User-Agent Type**: If using random mode, select "Desktop Browser", "Mobile Browser", or "All Types"
   - **Custom User-Agent List**: If using custom mode, enter one User-Agent per line
   - **Output Method**: Choose "User-Agent Only", "Add as Item Property", or "Create Full HTTP Headers"

### Mode Options

* **Random**: Selects from a large predefined library of User-Agents
* **Dynamic Generation**: Creates completely new User-Agents on the fly by combining various browser, OS and device components
* **Custom**: Uses your own list of User-Agents

### Output Options

* **User-Agent Only**: Node returns only the User-Agent string
* **Add as Item Property**: Adds the User-Agent to a specified property of input items
* **Create Full HTTP Headers**: Generates a complete HTTP headers object with User-Agent

### Example Workflows

* **Basic Scraper**: Use User Agent Random node to set HTTP Request node headers
* **API Polling**: Regularly switch User-Agents in long-running workflows to avoid rate limiting
* **Multi-Request Batching**: Generate different User-Agents for each HTTP request to increase request diversity

## Supported Browsers and Devices

The predefined User-Agent library includes:

### Desktop Browsers
- Chrome (Windows/Mac/Linux)
- Firefox (Windows/Mac/Linux)
- Safari (Mac)
- Edge (Windows/Mac)
- Opera (Windows/Mac)
- Brave (Windows/Mac)
- Vivaldi (Windows/Mac)

### Mobile Device Browsers
- Chrome (Android/iOS)
- Safari (iOS)
- Firefox (Android/iOS)
- Samsung Browser (Android)
- Edge (Android/iOS)
- Opera (Android/iOS)
- Brave (Android)
- DuckDuckGo (iOS)

## Dynamic Generation

The dynamic generation mode can create virtually unlimited variations of User-Agents by combining:

- Different browser types (Chrome, Firefox, Safari, Edge, etc.)
- Various browser versions
- Multiple operating systems (Windows, macOS, Linux, Android, iOS)
- Different OS versions
- Various device models (for mobile User-Agents)

This helps create more varied and realistic User-Agents that might not be in standard libraries.

## Technical Details

This node is developed using the declarative node style, fully compliant with n8n's latest development patterns and specifications. It doesn't rely on any external APIs, with all functionality executing locally.

## License

[MIT](https://github.com/FunTW/n8n-nodes-user-agent-random/blob/main/LICENSE) 
