<script>
	import SiteName from '../../components/SiteName.svelte';
	let nameInput = '';
	let emailInput = '';
	let subjectInput = 'Make a General Enquiry';
	let messageInput = '';
	let emailRegex =
		/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	let emailSent = false;
	let msg;
	/*async function sendEmail({ }) {

		const response = await fetch('/emails'),
		const msg = await response.json();
		console.log(msg);
	}*/

	async function sendEmail() {
		try {
			const response = await fetch('/emails', {
				method: "POST",
				body: JSON.stringify({ emailInput }),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const msg = await response.json();
			console.log(msg)

		} catch (err) {
			console.error('Error sending email:', err);
		}
	}
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contacting Fat Dog Club" />
</svelte:head>

<div class="text-column">
	<h1>Get in touch with
		<SiteName />
	</h1>

	<form on:submit={sendEmail}>
		<div>
			<label for="name" class="bold">
				<b>Name</b>
			</label>
			<input bind:value={nameInput} class="form-control" type="text" name="from_name" placeholder="Your Name"
				required id="name" />
		</div>

		<div class="errorMsg">
			{#if nameInput.length < 2 && nameInput !=="" } <p>
				Name must be at least 2 characters
				</p>
				{/if}
		</div>
		<br />

		<div>
			<label for="email" class="bold">
				<b>Email</b>
			</label>
			<input bind:value={emailInput} class="form-control" type="email" name="user_email" placeholder="Your Email"
				required id="email" />
		</div>

		<div class="errorMsg">
			{#if emailInput && !emailRegex.test(emailInput)} <p>
				Invalid email address entered
			</p>
			{/if}
		</div>
		<br />

		<div>
			<label for="subject" class="bold">
				<b>Subject</b>
			</label>
			<select bind:value={subjectInput} class="form-control" required name="user_subject" id="subject">
				<option value="Make a General Enquiry">
					Make a General Enquiry
				</option>
				<option value="Make a Complaint">Make a Complaint</option>
				<option value="Idea for the Website">Idea for the Website</option>
			</select>
		</div>

		<br />

		<div class="form-group">
			<label for="message" class="bold">
				<b>Message</b>
			</label>
			<textarea bind:value={messageInput} class="form-control" type="text" rows="7" name="message" id="message"
				placeholder="Type your message (required)" required></textarea>
		</div>

		<div class="errorMsg">
			{#if messageInput.length < 2 && messageInput !=="" } <p>
				Message must be at least 2 characters
				</p>
				{/if}
		</div>
		<br />

		<div class="btnContainer">
			<button type="submit" class="btn col-8 col-md-4">
				<div>
					{#if !emailSent}
					Send Email
					{:else if emailSent}
					Email Sent <i class="fas fa-check"></i>
					{:else}
					Email Failed <i class="fas fa-xmark"></i>
					{/if}
				</div>
			</button>
		</div>

	</form>
</div>

<style>
	.bold {
		color: var(--color-theme-1);
		font-weight: 900;
	}

	.errorMsg {
		color: red;
		height: 10px;
	}

	.errorMsg p {
		margin-top: -5px;
		font-weight: bold;
		text-align: center;
	}

	label {
		display: block;
	}

	input,
	textarea,
	select {
		width: 100%;
		margin-bottom: 10px;
	}

	.btnContainer {
		text-align: center;
	}

	i {
		font-size: 25px;
		color: var(--color-text);
		padding-left: 10px;
		font-weight: bold;
	}
</style>