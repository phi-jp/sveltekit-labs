<script>
  let items = [
    {
      key: 'name',
      value: 'phi',
    },
    {
      key: 'twitter',
      value: '@phi_jp',
      link: 'https://twitter.com',
    },
    {
      key: 'github',
      value: 'phi-jp',
      link: 'https://github.com/phi-jp',
    },
    {
      key: 'zenn',
      value: 'phi',
      link: 'https://zenn.dev/phi',
    },
  ];
</script>

<div class='container-960 my64'>

  <h1 class='mb8'>SvelteKit Labs</h1>
  <p class='mb16'>SvelteKit の実験のための環境です</p>

  <img class='s64' src='/icon.png' />
  
  <dl>
    {#each items as item}
      <dt>{item.key}</dt>
      <dd class='ml16'>
        <a class='text-blue' href='{item.link || ""}' target='_blank'>{item.value}</a>
      </dd>
    {/each}
  </dl>

</div>
