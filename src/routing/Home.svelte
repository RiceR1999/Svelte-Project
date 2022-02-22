<script>
    import GuestList from '../components/GuestList.svelte';
  
    export let users;
</script>


<div class="container">
    <div>
        <h1>Ryan's Guest Book</h1>
    </div>

    <div>
    <GuestList {users} on:delete/>
    </div>
</div>

<style>
    h1{
        padding-bottom: 10px;
        border-bottom: 2px solid rgba(255, 166, 0, 0.479);
    }
</style>