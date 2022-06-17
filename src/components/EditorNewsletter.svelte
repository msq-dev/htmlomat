<script>
  import { onMount } from "svelte"
  import { currentInputSection } from "../stores/editor"
  import {
    mailTitle,
    companyName,
    companyProps,
    mailHero,
    mailMainContent,
  } from "../stores/newsletter"
  import { clrText, clrAccent, fsHeadline, lhHeadline } from "../stores/styling"
  import { Image, Text } from "../helpers/models"
  import { fontFamily } from "../helpers/styles"
  import InputText from "./InputText.svelte"
  import BlockText from "./BlockText.svelte"

  let title = new Text()
  let logo = new Image()

  function switchSection(section) {
    $currentInputSection = section
  }

  function addContentItem(type) {
    if (type === "image") {
      $mailMainContent = [...$mailMainContent, new Image()]
      return
    } else if (type === "text") {
      $mailMainContent = [...$mailMainContent, new Text()]
      return
    }
  }

  onMount(() => {
    title.fontSize = 10

    logo.margin.top = 24
    logo.margin.bottom = 48
  })
</script>

<div class="editor">
  <div class="sidebar-nav">
    <ol>
      <li
        class:active={$currentInputSection === "header"}
        on:click={() => switchSection("header")}
      >
        Header
      </li>
      <li
        class:active={$currentInputSection === "main"}
        on:click={() => switchSection("main")}
      >
        Main
      </li>
      <li
        class:active={$currentInputSection === "footer"}
        on:click={() => switchSection("footer")}
      >
        Footer
      </li>
    </ol>
  </div>
  <div class="section-input">
    {#if $currentInputSection === "header"}
      <label for="manuka">
        <input
          type="radio"
          id="manuka"
          bind:group={$companyName}
          value={"manuka"}
        />
        manuka-honig.de
      </label>
      <label for="ayursana"
        ><input
          type="radio"
          id="ayursana"
          bind:group={$companyName}
          value={"ayursana"}
        />
        Ayursana
      </label>

      <label for="mailtitle">Mail Title</label>
      <input type="text" bind:value={$mailTitle} />

      <label for="landingpage">Landingpage</label>
      <input type="url" bind:value={$mailHero.href} />

      <label for="heromt">Hero Margin Top</label>
      <input type="number" id="heromt" bind:value={$mailHero.margin.top} />

      <label for="heromt">Hero Margin Bottom</label>
      <input type="number" id="heromb" bind:value={$mailHero.margin.bottom} />

      <label for="heroimgurl">Hero Image URL</label>
      <input type="url" bind:value={$mailHero.imgSrc} />

      <label for="heroimgalt">Hero Image Alt Text</label>
      <input type="text" bind:value={$mailHero.imgAlt} />
    {/if}
    {#if $currentInputSection === "main"}
      <button on:click={() => addContentItem("text")}>Text</button>
      <!-- <button on:click={() => addContentItem("offer")}>Angebot</button>
      <button on:click={() => addContentItem("offerRow")}>Doppel-Angebot</button
      > -->
      <button on:click={() => addContentItem("image")}>Bild</button>
      <!-- <button on:click={() => addContentItem("discountCode")}
        >Rabatt-Code</button
      >
      <button on:click={() => addContentItem("customHtml")}>HTML</button> -->

      {#each $mailMainContent as inputItem}
        <details open="true">
          {#if inputItem.type === "text"}
            <summary>Text {inputItem.text}</summary>
            <InputText
              id={inputItem.id}
              bind:text={inputItem.text}
              bind:fontSize={inputItem.fontSize}
              bind:paddingTop={inputItem.padding.top}
              bind:paddingBottom={inputItem.padding.bottom}
            />
          {:else if inputItem.type === "image"}
            <summary>Bild {inputItem.imgAlt}</summary>
            <label for={inputItem.id + "imgsrc"}>Image URL</label>
            <input type="url" bind:value={inputItem.imgSrc} />
            <label for={inputItem.id + "mt"}>Margin Top</label>
            <input
              type="number"
              id={inputItem.id + "mt"}
              bind:value={inputItem.margin.top}
            />
            <label for={inputItem.id + "mb"}>Margin Bottom</label>
            <input
              type="number"
              id={inputItem.id + "mb"}
              bind:value={inputItem.margin.bottom}
            />
          {/if}
        </details>
      {/each}
    {/if}
    {#if $currentInputSection === "footer"}
      <label for="footerimg">Footer Image</label>
      <input
        type="url"
        id="footerimg"
        bind:value={$companyProps.footerImgUrl}
      />
      <label for="footerimgtarget">Footer Image Target</label>
      <input
        type="url"
        id="footerimgtarget"
        bind:value={$companyProps.footerImgTarget}
      />
      <label for="footerimgalt">Footer Image Alt</label>
      <input
        type="text"
        id="footerimgalt"
        bind:value={$companyProps.footerImgAlt}
      />
    {/if}
  </div>
  <div class="sidebar-preview">
    <tr>
      <td>
        <table width="473" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td width="169" height="150">&nbsp;</td>
            <td width="304">
              <p style="{fontFamily}; font-size: {title.fontSize}px">
                {$mailTitle}
                <a href="&#123;ONLINE_VERSION&#125;">Online-Version</a>
              </p>
              <img
                src={$companyProps.logoUrl}
                border="0"
                width="261"
                height="120"
                alt="Logo {$companyName.charAt(0).toUpperCase() +
                  $companyName.slice(1)}"
                style="margin: 24px 0px 24px 0px"
              />
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td>
        <a
          href={$mailHero.href}
          target="_blank"
          style="width: 580px; display: block"
        >
          <img
            src={$mailHero.imgSrc}
            alt={$mailHero.imgAlt}
            width="580"
            height="auto"
            border="0"
            style="margin: {$mailHero.margin.top}px 0px {$mailHero.margin
              .bottom}px 0px"
          /></a
        >
      </td>
    </tr>

    {#each $mailMainContent as contentItem}
      {#if contentItem.type === "text"}
        <BlockText
          text={contentItem.text}
          fontSize={contentItem.fontSize}
          paddingTop={contentItem.padding.top}
          paddingBottom={contentItem.padding.bottom}
        />
      {:else if contentItem.type === "image"}
        <tr>
          <td height="394">
            <a href={contentItem.href}
              ><img
                src={contentItem.imgSrc}
                alt={contentItem.imgAlt}
                border="0"
                width="580"
                height="auto"
                style="margin: {contentItem.margin.top}px 0px {contentItem
                  .margin.top}px 0px;"
              /></a
            >
          </td>
        </tr>
      {/if}
    {/each}

    {#if $companyName === "manuka"}
      <tr>
        <td
          style="
            padding: 48px 0px 0px 0px;
            font-size: 17px;
            line-height: 24px;
            font-family: Arial;
            color: {$clrText};
            text-align: center;
          "
        >
          <h1
            style="
              font-family: Arial;
              color: {$clrText};
              font-size: 28px;
              line-height: 32px;
              margin-bottom: 20px;
            "
          >
            Folge uns und verpasse <br />
            keine Rabatte mehr!
          </h1>

          <table border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td width="200" height="105">&nbsp;</td>
              <td width="88" valign="top">
                <a
                  href="https://www.facebook.com/Manuka-Honig-1308835622596091"
                  target="_blank"
                  border="0"
                >
                  <img
                    src="https://www.manuka-honig.de/media/image/5a/ea/e4/facebook.png"
                    border="0"
                    width="69"
                    height="59"
                    alt="Folge uns auf Facebook"
                  />
                </a>
              </td>
              <td width="88" valign="top">
                <a
                  href="https://www.instagram.com/manukahonigde/"
                  target="_blank"
                  border="0"
                >
                  <img
                    src="https://www.manuka-honig.de/media/image/10/b8/9c/instagram.png"
                    border="0"
                    width="69"
                    height="59"
                    alt="Folge uns auf Instagram"
                  />
                </a>
              </td>
            </tr>
          </table>
          <br />
        </td>
      </tr>
    {/if}
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      width="580"
      style="{fontFamily}; color: {$clrText}"
    >
      <tr>
        <td>
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="font-size: 12px; line-height: 18px; color: #989898"
          >
            <tr>
              <td width="295">
                <a href={$companyProps.footerImgTarget} target="_blank"
                  ><img
                    src={$companyProps.footerImgUrl}
                    alt={$companyProps.footerImgAlt}
                    border="0"
                    width="auto"
                    height="auto"
                    style="display: block; margin-left: 5px"
                  /></a
                >
              </td>
              <td width="269" style="padding: 0 0 0 20px">
                <p>
                  <strong>Impressum</strong><br />
                  {$companyProps.fullName}<br />
                  Wollenberger Str. 4<br />
                  13053 Berlin<br />
                  Deutschland
                </p>
                <p>
                  Tel.: {$companyProps.tel}<br />
                  <a href="mailto:{$companyProps.email}" style="color: #989898"
                    >{$companyProps.email}</a
                  ><br />
                  <a
                    href={$companyProps.website}
                    target="_blank"
                    style="color: #989898">{$companyProps.websiteAnchor}</a
                  >
                </p>

                <img
                  src="http://ayursana-embio.com/media/newsletter/002/img/siegel.png"
                  alt="Sicher einkaufen! Käuferschutz!"
                  width="208"
                  height="81"
                  style="display: block"
                  border="0"
                />
                <p>
                  Wenn sie unseren Newsletter nicht mehr erhalten wollen, bitte
                  klicken Sie
                  <a href="&#123;UNSUBSCRIBE&#125;" style="color: #989898"
                    >hier</a
                  >.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td
          style="
        padding: 5px 20px 10px 10px;
        font-size: 12px;
        line-height: 18px;
        color: #989898;
      "
        >
          <p>
            Alle Preise verstehen sich, sofern nicht ausdrücklich etwas anderes
            angegeben ist, inkl. MwSt. und zzgl. Versandkosten. Alle
            Veröffentlichungen in diesem Shop dienen der allgemeinen
            Information. Produkte, Bücher und Informationen sind nicht
            vorgesehen, um Diagnosen zu erstellen, Krankheiten vorzubeugen oder
            zu behandeln. Bei vorhandenen Krankheiten ist vor dem Verzehr ein
            Arzt zu befragen. Personen, die Medikamente oder Blut verdünnende
            Medikamente einnehmen, müssen ebenfalls vor dem Verzehr ihren Arzt
            befragen. Wenn Sie Produkte verzehren oder die Inhalte der Bücher
            anwenden, unterziehen Sie sich einer Selbstbehandlung und damit der
            Eigenverantwortung.
          </p>
        </td>
      </tr>
    </table>
  </div>
</div>

<style>
  .editor {
    display: grid;
    grid-template-columns: 15ch 65ch 1fr;
    gap: 1rem;
  }

  label {
    display: block;
  }

  input[type="text"],
  input[type="url"] {
    width: 100%;
  }

  input[type="url"] {
    font-family: monospace;
    color: steelblue;
  }

  .sidebar-nav li {
    cursor: pointer;
  }

  li.active {
    font-weight: 700;
    color: blueviolet;
  }

  .sidebar-preview {
    transform: scale(0.4);
    transform-origin: top left;
  }
</style>
