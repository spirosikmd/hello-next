# hello-next

Run `yarn` to install the dependencies.

Download [local by flywheel](https://localbyflywheel.com/). Install it and crate a new wordpress site.

Download the [wp-graphql](https://docs.wpgraphql.com/getting-started/install-and-activate/), install, and activate it in the wordpress site you created.

You should now have a working `http://<site>.local/graphql` endpoint. Copy the example env file `cp .env.example .env` and use the graphql endpoint as value for the `GRAPHQL_URL` variable.

Download, install, and activate the [woocommerce](https://woocommerce.com/my-dashboard/) plugin in the site. You'll need to login first, either with your wordpress account or another option.

Download, install, and activate the [woocommerce graphql](https://github.com/wp-graphql/wp-graphql-woocommerce) plugin.
