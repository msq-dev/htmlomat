<script>
  export let size = 24
  export let stroke = 2
  export let strokeColor = "currentColor"
</script>

<svg
  class="feather-icon"
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke={strokeColor}
  stroke-width={stroke}
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <slot />
</svg>

<style>
  .feather-icon {
    display: block;
  }
</style>
