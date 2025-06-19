# Lifecycle Configuration Example

This repository serves as an example for configuring ephemeral development environments using [Lifecycle](https://github.com/GoodRxOSS/lifecycle). The configuration lies in the `lifecycle.yaml` file, which defines the services and environment settings.


## Creating an Environment with Lifecycle

Lifecycle will automatically use the `lifecycle.yaml` config from your branch to spin up a new ephemeral environment reflecting your changes.

Here's the starter workflow:

1.  **Fork this repository**

2.  **Install the github app you created with Lifecycle**

3.  **Modify `README.md` file and create a pull request from Github UI**
    
4.  **Open a Pull Request:**asdasd

Once the pull request is created, Lifecycle will pick up the config(`lifecycle.yaml`) from your branch and attempt to provision an  environment based on its definitions. You can then test your setup in this isolated starter environment.
