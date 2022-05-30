<script>
  import Router from "svelte-spa-router"
  import Home from "./routes/Home.svelte"
  import Preview from "./routes/Preview.svelte"

  const routes = {
    "/": Home,
    "/preview": Preview,
  }
</script>

<Router {routes} />
