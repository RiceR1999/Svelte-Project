<script>
    import {userNames, apiData} from '../store.js';
    import {createEventDispatcher} from 'svelte';

    export let users;
    let dispatch = createEventDispatcher();

    function handleDelete(_id) {
        dispatch('delete', _id);
    }

</script>

<div class="content">
    {#each users as guest}
    <div class="flex">
        <p>{guest.userName}</p>
        <i class="fa-solid fa-xmark hover" on:click={() => handleDelete(guest._id)}></i>
    </div>
    {/each}
</div>

<style>
p{
    text-align: center;
    margin: 10px;
    padding: 10px;
}
.flex{
    background-color: whitesmoke;
    border: 2px solid orange;
    border-radius: 10px;
    margin: 25px;
}
.hover:hover{
    cursor: pointer;
}
.hover{
    float: right;
    margin-right: 10px;
    margin-bottom: 10px;
    transform: translateY(-35px);
}



</style>