<script>
    import {createEventDispatcher} from 'svelte';
    import { useNavigate } from 'svelte-navigator';
   
    const navigate = useNavigate();
    const regex = `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`;

    let items = {firstName: '', lastName: '', password: ''}
    let errors = {firstName: '', lastName: '', password: ''}
    let valid = false;
    let dispatch = createEventDispatcher();
    
    function submitHandler() {
        if(items.password.trim().match(regex)){
            errors.password='';
            valid = true;
        }
        else{
            
            errors.password='Password must contain 8 characters, one upper, one lower, and a special character';
            valid = false;
        }
        if(items.firstName.trim().length > 2){
            errors.firstName='';
            valid = true;
        }
        else{
            errors.firstName='Please enter a valid first name'
            valid = false;
        }
        if(items.lastName.trim().length > 2){
            errors.lastName='';
            valid = true;
        }
        else {
            errors.lastName='Please enter a valid last name'
            valid = false;
        }
        if(valid){
            dispatch('add', items);
            navigate('/');
        }

    }

</script>

<div>
    <h1 class="center">Sign up</h1>

    <form on:submit|preventDefault={submitHandler} >
        <div>
            <input type="text" name="" id="" placeholder="First Name" bind:value={items.firstName}>
        </div>  
                <p class="error">{errors.firstName}</p>
        <div>
            <input type="text" name="" id="" placeholder="Last Name" bind:value={items.lastName}>
        </div>
                <p class="error">{errors.lastName}</p>
        <div>
            <input type="password" name="" id="" placeholder="Password" bind:value={items.password}>
        </div>
                 <p class="error">{errors.password}</p>
        <div>
            <button class="btn btn-info" on:click={() => navigate('/')}>Cancel</button>
            <button class="btn btn-secondary"
                
             >Submit</button>
        </div>
    </form>
</div>

<style>
    .error{
        color: orange;
        margin: 0;
        padding-bottom: 20px;
    }
    .btn-info{
        background-color:orange;
        border-radius: 10px;
        border: 2px solid orange;
    }
    .btn-secondary{
        border-radius: 10px;
    }
    input{
        margin: 20px;
        padding: 10px;
    }

    input:focus::placeholder {
    color: transparent;
    }

    input:focus{
        outline: 2px solid orange;
    }
    h1{
        border-bottom: 2px solid rgba(128, 124, 124, 0.233);
        padding-bottom: 10px;
        margin: 0 auto;
        width: 25%;
    }
</style>