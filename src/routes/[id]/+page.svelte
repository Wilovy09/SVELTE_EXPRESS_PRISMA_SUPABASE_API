<script>
    import { onMount } from 'svelte';
    
    export let data;
    let id = data.id;
    let producto = null;

    async function fetchProduct() {
        try {
            const response = await fetch(`http://localhost:8000/api/products/${id}`);
            if (response.ok) {
                producto = await response.json();
            } else {
                throw new Error('Producto no encontrado');
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    onMount(() => {
        fetchProduct();
    });
</script>

{#if producto}
    <h2>Id: {producto.id}</h2>
    <h2>Title: {producto.title}</h2>
    <p>Price: {producto.price}</p>
    <p>Stock: {producto.stock}</p>
{:else}
    <h1>Producto no encontrado</h1>
{/if}
