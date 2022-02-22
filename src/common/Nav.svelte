<script>
     import { Router, Route, Link } from "svelte-navigator";
     let user="test";
</script>


<div class="container">
 
  
    <Router>
       <ul >
        <li>    
            <Link to='/'><a class="link">Home</a></Link>
        </li>
        <li>
            <Link to='/about'><a class="link">About</a></Link>
        </li>
        
        <li>
            <Link to='/signup'><a class="link">Signup</a></Link>
        </li>
       
        
        </ul>
     </Router>
  
    <p>Hello {user}</p> 

    <Router>  
    <ul>
        <li> 
          <Link to='/signin'><a class="link">Sign In</a></Link>  
        </li>
        <li >
           <a class="link">Sign Out</a>
        </li>
    </ul>
    </Router>
     
</div>


<style>
    p { 
        padding: 7px;
        margin-left:25px ;
        border:  2px solid orange;
        border-radius: 10px;
    }
    .container{
        background-color: aliceblue;
        display: flex;  
    }
    ul{
        display: flex;
        list-style-type: none;
    }
    li {
        padding: 10px;
    }
    
    .link{
        color: grey;
    }
    .link:hover{
        color: orange;
        cursor: pointer;
    }
    .link:visited{
        color:orange;
    }
    .link:active{
        color:orange
    }

</style>