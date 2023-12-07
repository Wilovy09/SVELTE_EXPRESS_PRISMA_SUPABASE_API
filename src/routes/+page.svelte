<script>
    import { onMount } from 'svelte'
    
    const url = 'http://localhost:8000/api/products/'
    let productos = []

    const getProducts = async () => {
      try {
        const response = await fetch(url)
        if (response.ok) {
          productos = await response.json()
        } else {
          throw new Error('Error al obtener productos')
        }
      } catch (error) {
        console.error(error)
      }
    }
  
    onMount(getProducts)
  </script>  

<h1>Chequeando <i>Express</i> con <i>Prisma</i></h1>

{#each productos as producto}
    <h2>Id: {producto.id}</h2>
    <h2>Title: {producto.title}</h2>
    <p>Price: {producto.price}</p>
    <p>Stock: {producto.stock}</p>
    <a href="/{producto.id}/">Ver...</a>
{/each}