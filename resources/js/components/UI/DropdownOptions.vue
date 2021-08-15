<template>
  <b-dropdown size="lg"  variant="link" toggle-class="options-dropdown-toggle" no-caret>
    <template #button-content>
        <b-icon icon="three-dots" variant="dark"></b-icon>

    </template>
    <slot/>
  </b-dropdown>
</template>

<script>

export default ({

})
</script>

<style>
  .options-dropdown-toggle {
      padding: 0!important;
      line-height: 1!important;
  }
</style>