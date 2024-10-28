<script lang="ts">
    import ReplyMessage from "$lib/ReplyMessage.svelte";
    import TextMessage from "$lib/TextMessage.svelte";
    import MessageBox from "$lib/MessageBox.svelte";
</script>
<svelte:head>
    <title>Dashboard | Whisper - Connect with the world beyond</title>
</svelte:head>

<main id="direct-message" class="px-6">
    <ReplyMessage/>
    <MessageBox/>
</main>

