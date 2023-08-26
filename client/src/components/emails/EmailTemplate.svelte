<script>
    import { Button, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Text } from 'svelte-email';

    export let fromName;
    export let subject;
    export let message;
    export let site;
    export let fromEmail;

    //CSS STYLES
    const fontFamily = '"Helvetica Neue",Helvetica,Arial,sans-serif';

    const container = {
        margin: '0 auto',
        padding: '20px 0 48px',
        width: '660px'
    };

    const h1 = {
        fontFamily,
        fontSize: '32px',
        fontWeight: '300',
        color: '#888888'
    }

    const button = {
        fontFamily,
        backgroundColor: '#ff3e00',
        borderRadius: '3px',
        color: '#fff',
        fontSize: '18px',
        textDecoration: 'none',
        textAlign: 'center',
        display: 'block',
        width: '100%'
    };

    const main = {
        backgroundColor: '#ffffff'
    };

    const p = {
        fontFamily,
        fontSize: '18px',
        lineHeight: '1.4',
        color: '#484848',
        display: "block"
    };

    const footer = {
        fontFamily,
        color: '#9ca299',
        fontSize: '14px',
        marginBottom: '10px'
    };
</script>

<Html lang="en">

<Head />
<Section style={main}>
    <Container style={container}>
        <Heading as="h1" style={h1}>{fromName} has sent a message to {site}!</Heading>
        <hr />
        <Text style={p}>Subject: I want to {subject}</Text>
        <br />
        <text style={p}>Message: {message}</text>
        <br />
        <br />
        <text style={p}>You can reply to them at {fromEmail}</text>
        <br />
        <Hr />
        <Button href="mailto:{fromEmail}" style={button}>Reply to them</Button>
        <hr />
        <Text style={footer}>{site}, Australia</Text>
    </Container>
</Section>

</Html>