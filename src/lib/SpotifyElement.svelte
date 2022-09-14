<script>
  export let title;
  export let link;
  export let img;
  export let text;
</script>

<a href={link} class="element" target="_blank">
  <img src={img} alt={title} />
  <div class="name-info">
    <h3>{title}</h3>
    <p class="info">{text}</p>
  </div>
</a>

<style lang="scss">
  .element {
    display: flex;
    height: 80px;

    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 0.25rem;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }

    .name-info {
      padding: 0.5rem;
      height: 100%;

      h3 {
        @include box(2);
      }

      .info {
        font-size: 0.75rem;
        line-height: 1rem;
        color: $text-color;
        @include box(1);
      }
    }
  }

  @include mobile {
    .element {
      height: 60px;

      img {
        width: 60px;
        height: 60px;
      }

      .name-info {
        padding-top: 0.25rem;

        h3 {
          font-size: 0.875rem;
        }
      }
    }
  }
</style>
