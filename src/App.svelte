<script>
	import { onMount, afterUpdate } from "svelte";
	import axios from "axios";
	import {apiData} from './store.js';
	import { Router, 
		Link, 
		Route, 
		links
	} from "svelte-navigator";
	import Nav from "./common/Nav.svelte";
	import About from "./routing/About.svelte";
	import Home from "./routing/Home.svelte";
	import Signup from "./routing/Signup.svelte";
	import Footer from "./common/Footer.svelte";


	let users = [];

	async function handleAdd (e) {
		const rawPayload = e.detail;
		const password = rawPayload.password;
		const userName = rawPayload.firstName.trim().toLowerCase().concat(rawPayload.lastName.trim().toLowerCase());

		const userPayload = {userName, password };
		console.log(userPayload);
		const resp = await axios.post("http://localhost:4000/api/users", userPayload);
		console.log(resp);
		update();

	}

	async function handleDelete (e) {
		const payload = e.detail;
		const resp =  await axios.delete(`http://localhost:4000/api/delete/${payload}`);
		update();
	}

	onMount(async function () {
			const response = await axios.get("http://localhost:4000/api/users");
			users = response.data;
			console.log(users);
	});

	async function update(){
		console.log('in update');
		const response = await axios.get("http://localhost:4000/api/users");
		console.log(response.data);
		users = response.data;
	}
	
</script>

<Nav></Nav>

<div class='content'>
 <Router>	
	<Route path="/">
		<Home {users} on:delete={handleDelete}></Home>
	</Route>
	<Route path="/about">
		<About ></About>
	</Route>
	<Route path="/signup">
		<Signup on:add={handleAdd} ></Signup>
	</Route>
  </Router>		
</div>
<Footer></Footer>

<style>
	.content {
		color: gray;
		text-align: center;
	}
</style>