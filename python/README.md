# Stripe Agent Toolkit - Python

The Stripe Agent Toolkit library enables popular agent frameworks including LangChain and CrewAI to integrate with Stripe APIs through function calling. The
library is not exhaustive of the entire Stripe API. It is built directly on top
of the [Stripe Python SDK][python-sdk].

## Installation

You don't need this source code unless you want to modify the package. If you just
want to use the package, just run:

```sh
pip install stripe-agent-toolkit
```

### Requirements

- Python 3.11+

## Usage

The library needs to be configured with your account's secret key which is
available in your [Stripe Dashboard][api-keys].

```python
from stripe_agent_toolkit.crewai.toolkit import StripeAgentToolkit

stripe_agent_toolkit = StripeAgentToolkit(
    secret_key="sk_test_...",
    configuration={
        "actions": {
            "payment_links": {
                "create": True,
            },
        }
    },
)
```

The toolkit works with LangChain and CrewAI and can be passed as a list of tools. For example:

```python
from crewai import Agent

stripe_agent = Agent(
    role="Stripe Agent",
    goal="Integrate with Stripe",
    backstory="You are an expert at integrating with Stripe",
    tools=[*stripe_toolkit.get_tools()]
)
```

Examples for LangChain and CrewAI are included in `/examples`.

[python-sdk]: https://github.com/stripe/stripe-python
[api-keys]: https://dashboard.stripe.com/account/apikeys

## Development

```
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
