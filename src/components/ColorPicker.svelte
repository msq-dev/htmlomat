<script>
  export let colorName = ""
  export let value = ""
</script>

<div class="color-picker">
  <label for={colorName} class="color-label">{colorName}</label>
  <input id={colorName} type="color" bind:value />
</div>

<svg width="0" height="0">
  <defs>
    <clipPath
      id="droplet"
      clipPathUnits="objectBoundingBox"
      transform="scale(0.042 0.042)"
    >
      <path
        d="M12,20
          A 6,6 0 0,1 6,14
          C 6,10 12,3.25 12,3.25
          C 12,3.25 18,10 18,14
          A 6,6 0 0,1 12,20
          Z"
      />
    </clipPath>
  </defs>
</svg>

<style>
  .color-label {
    font-size: 80%;
    color: #000;
  }

  input[type="color"] {
    -webkit-appearance: none;
    display: block;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    clip-path: url("#droplet");
  }

  input[type="color"]::-webkit-color-swatch-wrapper,
  input[type="color"]::-moz-color-swatch-wrapper {
    padding: 0;
  }
  input[type="color"]::-webkit-color-swatch,
  input[type="color"]::-moz-color-swatch {
    border: none;
    clip-path: url("#droplet");
  }
</style>
