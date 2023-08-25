<script>
    import { Button, Hr, Html, Text } from 'svelte-email';
    let name = "name"
</script>

<Html lang="en">
<Text>
    Hello, {name}!
</Text>
<Hr />
<Button href="https://svelte.dev">Visit Svelte</Button>

</Html>