<script>
  import { fly } from 'svelte/transition'
  import links from './links'
  export let name;

</script>


<div class="linkbar-container"
  in:fly={{ x: 100, duration: 400 }}
  out:fly={{ x: 100, duration: 400 }}
>
  <a href={links[name].portfolio}>
    <span class="fas fa-smile link-icon"></span>
  </a>
  <div class="border-line"></div>
  <a href={links[name].github}>
    <span class="fab fa-github link-icon"></span>
  </a>
  <div class="border-line"></div>
  <a href={links[name].linkedin}>
    <span class="fab fa-linkedin link-icon"></span>
  </a>
  <div class="border-line"></div>
  <a href={links[name].angellist}>
    <span class="fab fa-angellist link-icon"></span>
  </a>
  <div class="border-line"></div>
  <a href='mailto:{links[name].portfolio}'>
    <span class="fas fa-envelope last link-icon"></span>
  </a>
</div>


<style>
  .linkbar-container {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 50px;
    border: 1px solid black;
    margin-top: 20px;
  }
  .link-icon {
    color: white;
    font-size: 50px;
    margin: 10px;
    cursor: pointer;
    padding-right: 75%;
  }

  .border-line {
    width: 0.5px;
    height: 80%;
    background: black;
  }

</style>