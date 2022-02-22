<script>
    import axios from 'axios';
    import {createEventDispatcher} from 'svelte';
    import { useNavigate } from 'svelte-navigator';
   
    const navigate = useNavigate();
    

    let user = {username: '' , password: ''}
    let errors = {username: '' , password: '', signin: ''}
    let valid = false;
    let dispatch = createEventDispatcher();
    
   async function submitHandler() {
        if(user.username.trim().length < 1)
        {
            errors.username = 'Please enter a valid username';
            valid = false;
        }
        else{
            errors.username = '';
            valid = true;
        }
        if(user.password.trim().length < 1)
        {
            errors.password = 'Please enter a valid password';
            valid = false
        }
        else { 
            errors.password = '';
            valid = true;
        }
        if(valid === true){
            const resp = await axios.get("http://localhost:4000/api/login", {
                params: {
                    username: user.username,
                    password: user.password,
                }
            })
            if(resp.data === null)
            {
                errors.signin = 'Invalid username or password';
                valid = false;
            }
            else{
                errors.signin = '';
                valid = true;
                navigate('/');
                dispatch('signin', resp.data.userName);
                console.log(resp.data.userName);
            }
            
        }
        

    }

</script>

<div>
    <h1 class="center">Sign in</h1>

    <form on:submit|preventDefault={submitHandler} >
        <div>
            <input type="text" name="" id="" placeholder="Username" bind:value={user.username}>
        </div>  
                <p class="error">{errors.username}</p>
        <div>
            <input type="password" name="" id="" placeholder="Password" bind:value={user.password}>
        </div>
                 <p class="error">{errors.password}</p>
                 <p class="error">{errors.signin}</p>
        <div>
            <button class="btn btn-info" on:click={() => navigate('/')}>Cancel</button>
            <button class="btn btn-secondary" on:click={ () =>{
                 if(valid === true){
                    navigate('/');
                }
            }} >Submit</button>
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